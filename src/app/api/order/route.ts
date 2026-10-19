import { NextRequest, NextResponse } from "next/server";
import { STORE_ITEMS } from "@/data/store-items";

const MAX_PER_MINUTE = 3;
const ipHits = new Map<string, number[]>();

export async function POST(req: NextRequest) {
  try {
    // 1. In-memory IP rate limiting
    const forwardedFor = req.headers.get("x-forwarded-for") || "";
    const ip = forwardedFor.split(",")[0].trim() || "unknown-ip";
    const now = Date.now();
    const recentHits = (ipHits.get(ip) || []).filter((time) => now - time < 60_000);

    if (recentHits.length >= MAX_PER_MINUTE) {
      return NextResponse.json(
        { error: "Too many orders placed. Please wait a minute before trying again." },
        { status: 429 }
      );
    }
    recentHits.push(now);
    ipHits.set(ip, recentHits);

    // 2. Parse body
    const body = await req.json();
    const { ign, discord, note, cart } = body || {};

    // 3. Input validation
    if (typeof ign !== "string" || !/^[A-Za-z0-9_]{3,16}$/.test(ign.trim())) {
      return NextResponse.json(
        { error: "Invalid Minecraft IGN. Must be 3-16 letters, numbers, or underscores." },
        { status: 400 }
      );
    }

    if (typeof discord !== "string" || discord.trim().length < 2 || discord.trim().length > 40) {
      return NextResponse.json(
        { error: "Invalid Discord username. Must be between 2 and 40 characters." },
        { status: 400 }
      );
    }

    if (note !== undefined && (typeof note !== "string" || note.length > 300)) {
      return NextResponse.json(
        { error: "Order note is too long. Maximum 300 characters allowed." },
        { status: 400 }
      );
    }

    if (!Array.isArray(cart) || cart.length === 0 || cart.length > 20) {
      return NextResponse.json(
        { error: "Cart is empty or contains too many items." },
        { status: 400 }
      );
    }

    // 4. Server-authoritative pricing
    const lines: Array<{ name: string; qty: number; subtotal: number; isCustom: boolean }> = [];
    let total = 0;
    let hasCustom = false;

    for (const line of cart) {
      const item = STORE_ITEMS[line?.id];
      const qty = Number.isInteger(line?.qty) ? line.qty : 0;

      if (!item || qty < 1 || qty > 10) {
        return NextResponse.json(
          { error: `Invalid item or quantity in cart: ${line?.id || "unknown"}` },
          { status: 400 }
        );
      }

      if (item.type === "custom") {
        hasCustom = true;
        lines.push({ name: item.name, qty, subtotal: 0, isCustom: true });
      } else {
        const subtotal = item.price * qty;
        total += subtotal;
        lines.push({ name: item.name, qty, subtotal, isCustom: false });
      }
    }

    // 5. Discord Webhook check
    const webhookUrl = process.env.DC_STORE_WEBHOOK || process.env.DISCORD_STORE_WEBHOOK;
    if (!webhookUrl) {
      return NextResponse.json(
        { error: "Store order system is temporarily offline. Please create a ticket directly on our Discord!" },
        { status: 500 }
      );
    }

    // 6. Generate Order ID
    const orderId = "WM-" + Date.now().toString(36).toUpperCase();

    // 7. Format Discord Webhook Embed
    const fields = [
      { name: "Minecraft IGN", value: `\`${ign.trim()}\``, inline: true },
      { name: "Discord", value: discord.trim(), inline: true },
      {
        name: "Ordered Items",
        value: lines
          .map((l) =>
            l.isCustom
              ? `• **${l.qty}x** ${l.name} (Custom Quote)`
              : `• **${l.qty}x** ${l.name} — \`$${l.subtotal.toFixed(2)}\``
          )
          .join("\n"),
        inline: false,
      },
      {
        name: "Total (USD)",
        value: hasCustom ? `**$${total.toFixed(2)} + custom quote**` : `**$${total.toFixed(2)}**`,
        inline: true,
      },
    ];

    if (note && note.trim().length > 0) {
      fields.push({
        name: "Order Note",
        value: note.trim().slice(0, 300),
        inline: false,
      });
    }

    const payload = {
      username: "WOLF MC Store Bot",
      // CRITICAL: Prevent @everyone or @here pings from user notes
      allowed_mentions: { parse: [] },
      embeds: [
        {
          title: `New Store Order: ${orderId}`,
          description: `A player submitted an order on [wolfmc.fun](https://wolfmc.fun/store). Verify details and process fulfillment.`,
          color: 0x9333ea, // WolfMC Purple
          fields,
          footer: {
            text: `Order ID: ${orderId} • WolfMC Ticket Delivery`,
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    // 8. Dispatch to Discord
    const discordRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!discordRes.ok) {
      const errText = await discordRes.text();
      console.error("Discord rejected store order webhook:", discordRes.status, errText);
      return NextResponse.json(
        { error: "Could not deliver order notification to Discord. Please contact staff directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, orderId });
  } catch (error: any) {
    console.error("Store order submission error:", error);
    return NextResponse.json(
      { error: "Internal server error while processing order." },
      { status: 500 }
    );
  }
}
