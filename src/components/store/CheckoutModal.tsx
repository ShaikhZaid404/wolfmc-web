"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Copy, Check, Ticket, AlertCircle, Loader2, ExternalLink } from "lucide-react";
import { useCart } from "@/lib/store/cart-context";
import { SERVER_CONFIG } from "@/lib/constants";
import { STORE_ITEMS } from "@/data/store-items";

export function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    clearCart,
    totalUSD,
    hasCustom,
    formatPrice,
  } = useCart();

  const [ign, setIgn] = useState("");
  const [discord, setDiscord] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderSuccess, setOrderSuccess] = useState<string | null>(null);
  const [copiedOrderId, setCopiedOrderId] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    const cleanIgn = ign.trim();
    if (!/^[A-Za-z0-9_]{3,16}$/.test(cleanIgn)) {
      setError("Please enter a valid Minecraft IGN (3-16 letters, numbers, or underscores).");
      return;
    }

    const cleanDiscord = discord.trim();
    if (cleanDiscord.length < 2 || cleanDiscord.length > 40) {
      setError("Please enter a valid Discord username (2-40 characters).");
      return;
    }

    if (note.length > 300) {
      setError("Note cannot exceed 300 characters.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ign: cleanIgn,
          discord: cleanDiscord,
          note: note.trim(),
          cart,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Could not place order. Please try again.");
      }

      setOrderSuccess(data.orderId);
      clearCart();
    } catch (err: any) {
      setError(err.message || "Network error. Please try again or create a ticket on Discord.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopyOrderId = () => {
    if (orderSuccess) {
      navigator.clipboard.writeText(orderSuccess);
      setCopiedOrderId(true);
      setTimeout(() => setCopiedOrderId(false), 2000);
    }
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    // Reset state after closing if order was successful
    if (orderSuccess) {
      setOrderSuccess(null);
      setIgn("");
      setDiscord("");
      setNote("");
    }
  };

  const discordTicketLink =
    SERVER_CONFIG.discordTicketUrl ||
    "https://discord.com/channels/1521811862390571008/1524151497695166526";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg rounded-3xl glass-card bg-neutral-950 border border-white/[0.1] shadow-2xl p-6 sm:p-8 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-32 bg-purple-600/15 blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.05] transition-colors"
          aria-label="Close checkout modal"
        >
          <X className="w-5 h-5" />
        </button>

        {orderSuccess ? (
          /* Success Screen */
          <div className="flex flex-col items-center text-center py-4 gap-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="font-bebas text-3xl tracking-wider text-neutral-100">
                ORDER RECEIVED!
              </h3>
              <p className="text-xs text-neutral-400 font-sans max-w-sm">
                Your order has been transmitted to the staff team. Share your Order ID in our Discord ticket channel for instant fulfillment.
              </p>
            </div>

            {/* Order ID Box */}
            <div className="w-full p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between gap-3 my-2">
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 font-sans block">
                  Your Order ID
                </span>
                <span className="font-mono text-lg font-bold text-purple-400 tracking-wider">
                  {orderSuccess}
                </span>
              </div>
              <button
                onClick={handleCopyOrderId}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-semibold text-neutral-200 transition-all font-sans"
              >
                {copiedOrderId ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy ID</span>
                  </>
                )}
              </button>
            </div>

            {/* Next Steps CTA */}
            <div className="flex flex-col gap-2 w-full pt-2">
              <a
                href={discordTicketLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-purple-900/40 transition-all font-sans group"
              >
                <Ticket className="w-4 h-4" />
                <span>Open Discord Ticket</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={handleClose}
                className="py-2.5 text-xs text-neutral-500 hover:text-neutral-300 transition-colors font-sans"
              >
                Done / Close
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-semibold uppercase tracking-wider mb-2">
                <Ticket className="w-3.5 h-3.5" />
                Discord Delivery
              </div>
              <h3 className="font-bebas text-3xl tracking-wider text-neutral-100">
                CHECKOUT DETAILS
              </h3>
              <p className="text-xs text-neutral-400 font-sans mt-0.5">
                Every purchase is manually confirmed and activated by our team via Discord.
              </p>
            </div>

            {error && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2.5 mb-5 font-sans">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-sans">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5 uppercase tracking-wider">
                  Minecraft IGN <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Zaid1621"
                  value={ign}
                  onChange={(e) => setIgn(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-purple-500/50 text-neutral-100 placeholder-neutral-500 text-xs font-mono focus:outline-none transition-colors"
                />
                <span className="text-[10px] text-neutral-500 mt-1 block">
                  3 to 16 characters, letters, numbers, and underscores only.
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5 uppercase tracking-wider">
                  Discord Username <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. zaid or zaid#0000"
                  value={discord}
                  onChange={(e) => setDiscord(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-purple-500/50 text-neutral-100 placeholder-neutral-500 text-xs focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5 uppercase tracking-wider">
                  Order Note <span className="text-neutral-500 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  maxLength={300}
                  placeholder="Any special requests or instructions..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-purple-500/50 text-neutral-100 placeholder-neutral-500 text-xs focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Order Summary Pill */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs mt-1">
                <span className="text-neutral-400">
                  {cart.reduce((acc, l) => acc + l.qty, 0)} items in cart
                </span>
                <span className="font-mono font-bold text-purple-400">
                  Total: {formatPrice(totalUSD)}
                  {hasCustom && " + Custom"}
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-purple-900/40 transition-all font-sans cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Order...</span>
                  </>
                ) : (
                  <span>Place Order</span>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
