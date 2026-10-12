import { NextRequest, NextResponse } from "next/server";

const DISCORD_WEBHOOK_URL =
  process.env.DISCORD_WEBHOOK_URL ||
  process.env.DISCORD_WEBHOOK;

export async function POST(req: NextRequest) {
  if (!DISCORD_WEBHOOK_URL) {
    return NextResponse.json({ message: "DISCORD_WEBHOOK_URL is not configured" }, { status: 200 });
  }

  try {
    const body = await req.json();
    const type = body.type;
    const payload = body.payload || {};
    const deployment = payload.deployment || {};
    const projectName = payload.project?.name || "wolfmc-web";
    const rawUrl = deployment.url ? `https://${deployment.url}` : "";
    const target = deployment.target || (deployment.meta?.githubCommitRef === "main" ? "production" : "preview");
    const commitRef = deployment.meta?.githubCommitRef || "main";
    const commitSha = deployment.meta?.githubCommitSha ? deployment.meta.githubCommitSha.slice(0, 7) : "";
    const commitMessage = deployment.meta?.githubCommitMessage || "Automated deployment";
    const author = deployment.meta?.githubCommitAuthorName || "Zaid";

    let color = 0x9333EA; // Purple
    let title = `[VERCEL DEPLOYMENT] ${type || "EVENT"}`;

    if (type === "deployment.succeeded") {
      color = 0x10B981; // Emerald Green
      title = `[VERCEL DEPLOYMENT] SUCCESS (${target.toUpperCase()})`;
    } else if (type === "deployment.error") {
      color = 0xEF4444; // Red
      title = `[VERCEL DEPLOYMENT] BUILD FAILED (${target.toUpperCase()})`;
    } else if (type === "deployment.created") {
      color = 0xF59E0B; // Amber
      title = `[VERCEL DEPLOYMENT] BUILD STARTED (${target.toUpperCase()})`;
    } else if (type === "deployment.canceled") {
      color = 0x6B7280; // Gray
      title = `[VERCEL DEPLOYMENT] CANCELED (${target.toUpperCase()})`;
    }

    const fields = [
      {
        name: "Project",
        value: projectName,
        inline: true,
      },
      {
        name: "Branch",
        value: `\`${commitRef}\`${commitSha ? ` (${commitSha})` : ""}`,
        inline: true,
      },
      {
        name: "Commit",
        value: commitMessage.split("\n")[0],
        inline: false,
      },
      {
        name: "Author",
        value: author,
        inline: true,
      },
    ];

    if (rawUrl) {
      fields.push({
        name: "Live URL",
        value: `[Open Deployment](${rawUrl})`,
        inline: true,
      });
    }

    const discordPayload = {
      username: "WolfMC Vercel Watchdog",
      embeds: [
        {
          title,
          description: `Vercel event **${type}** received for **${projectName}**.`,
          color,
          fields,
          footer: {
            text: "WolfMC Autonomous Cloud Infrastructure",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const discordRes = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
    });

    if (!discordRes.ok) {
      const errText = await discordRes.text();
      return NextResponse.json({ error: "Discord rejected webhook", details: errText }, { status: 502 });
    }

    return NextResponse.json({ success: true, event: type });
  } catch (error: any) {
    return NextResponse.json({ error: "Invalid webhook payload", message: error?.message }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({
    status: "active",
    service: "WolfMC Discord Watchdog Bridge",
    endpoint: "POST /api/webhooks/vercel",
  });
}
