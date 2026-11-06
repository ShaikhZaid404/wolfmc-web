"use client";

import React from "react";
import Link from "next/link";
import { Ticket, Sparkles, ExternalLink, ArrowRight, ShoppingBag } from "lucide-react";
import { SERVER_CONFIG } from "@/lib/constants";

export function StoreTeaser() {
  return (
    <section id="store" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="p-8 sm:p-14 rounded-3xl glass-card text-center max-w-3xl mx-auto flex flex-col items-center gap-6 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill bg-[#c084fc]/10 border border-[#c084fc]/25 text-[#c084fc]">
          <Ticket className="w-3.5 h-3.5" />
          <span className="text-[11px] font-semibold uppercase tracking-wider font-sans">
            Ranks & Crate Keys
          </span>
        </div>

        <h2 className="font-bebas text-4xl sm:text-5xl tracking-wider text-neutral-100">
          WANT TO BUY RANKS OR KEYS?
        </h2>

        <p className="text-xs sm:text-sm text-neutral-400 max-w-lg leading-relaxed font-sans">
          Looking to purchase ranks or crate keys, or have questions about perks? Create a support ticket on our official Discord server!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/store"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#9333ea] hover:bg-[#8b24e0] text-xs font-semibold text-white border border-[#c084fc]/40 shadow-md shadow-[#9333ea]/20 transition-all font-sans group"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Browse Official Store</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={SERVER_CONFIG.discordTicketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl glass-panel hover:border-[#c084fc]/40 text-xs font-semibold text-neutral-200 hover:text-white transition-all font-sans"
          >
            <Ticket className="w-4 h-4 text-[#c084fc]" />
            <span>Discord Support</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
