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
    <div className="w-full bg-gradient-to-r from-orange-950/60 via-purple-950/60 to-orange-950/60 border-b border-orange-500/20 backdrop-blur-md px-4 py-2 text-xs font-sans text-orange-200 flex items-center justify-between gap-3 relative z-30 animate-in fade-in slide-in-from-top duration-300">
      <div className="max-w-7xl mx-auto flex-1 flex items-center justify-center gap-2 text-center flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-[10px] font-bold uppercase tracking-wider text-orange-400">
          <Sparkles className="w-3 h-3 animate-spin" />
          Event Live
        </span>
        <span className="font-semibold text-neutral-100">
          Halloween Update Out Now!
        </span>
        <span className="text-orange-300/80 hidden sm:inline">
          Limited Ghost & Pumpkin ranks, plus exclusive crate keys — ends 31 October.
        </span>
        <Link
          href="/store/boxpvp#boxpvp-halloween"
          className="inline-flex items-center gap-1 font-bold text-orange-400 hover:text-orange-300 underline underline-offset-2 ml-1 group"
        >
          <span>View Seasonal Deals</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <button
        onClick={() => setVisible(false)}
        className="p-1 text-orange-400/60 hover:text-orange-300 transition-colors shrink-0"
        aria-label="Dismiss banner"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
