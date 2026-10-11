"use client";

import React from "react";
import { ShoppingBag, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { SERVER_CONFIG } from "@/lib/constants";

export function StoreTeaser() {
  return (
    <section id="store" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="p-8 sm:p-14 rounded-3xl glass-card bg-white/[0.02] border border-white/[0.06] text-center max-w-3xl mx-auto flex flex-col items-center gap-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-purple-900/15 blur-[90px] pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill bg-purple-500/10 border border-purple-500/20 text-purple-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="text-[11px] font-semibold uppercase tracking-wider font-sans">
            Webstore & VIP Ranks
          </span>
        </div>

        <h2 className="font-bebas text-4xl sm:text-5xl tracking-wider text-neutral-100">
          OFFICIAL STORE LAUNCHING SOON
        </h2>

        <p className="text-xs sm:text-sm text-neutral-400 max-w-lg leading-relaxed font-sans">
          Exclusive rank perks, custom projectile trails, kill cosmetics, and crate bundles. All purchases directly fund dedicated VPS infrastructure and custom plugin development.
        </p>

        <a
          href={SERVER_CONFIG.discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-purple-600/20 border border-white/[0.08] hover:border-purple-500/30 text-xs font-semibold text-neutral-200 hover:text-purple-300 transition-all font-sans group"
        >
          <span>Get Notified on Discord</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
