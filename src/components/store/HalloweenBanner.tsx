"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, X } from "lucide-react";

export function HalloweenBanner() {
  const [visible, setVisible] = useState(true);

  // Check if Halloween event is still active (ends October 31, 2026)
  const isHalloweenActive = new Date().getMonth() === 9; // October (0-indexed: 9 = Oct)

  if (!visible || !isHalloweenActive) return null;

  return (
    <div className="w-full bg-[#0d0d12] border-b border-[#c084fc]/30 px-4 py-2 text-xs font-sans text-neutral-200 flex items-center justify-between gap-3 relative z-50 animate-in fade-in slide-in-from-top duration-300 pointer-events-auto shadow-lg shadow-black/80">
      <div className="max-w-7xl mx-auto flex-1 flex items-center justify-center gap-2 text-center flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#c084fc]/15 border border-[#c084fc]/30 text-[10px] font-bold uppercase tracking-wider text-[#d8b4fe]">
          <Sparkles className="w-3 h-3 animate-spin" />
          Event Live
        </span>
        <span className="font-semibold text-neutral-100">
          Halloween Update Out Now!
        </span>
        <span className="text-neutral-400 hidden sm:inline">
          Limited Ghost & Pumpkin ranks, plus exclusive crate keys — ends 31 October.
        </span>
        <Link
          href="/store/boxpvp#boxpvp-halloween"
          className="inline-flex items-center gap-1 font-bold text-[#c084fc] hover:text-[#d8b4fe] underline underline-offset-2 ml-1 group"
        >
          <span>View Seasonal Deals</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <button
        onClick={() => setVisible(false)}
        className="p-1 text-neutral-400 hover:text-neutral-200 transition-colors shrink-0"
        aria-label="Dismiss banner"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
