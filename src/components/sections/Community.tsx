"use client";

import React from "react";
import { MessageSquare, Users, Sparkles, ExternalLink } from "lucide-react";
import { DiscordIcon } from "@/components/icons/DiscordIcon";
import { SERVER_CONFIG } from "@/lib/constants";

export function Community() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl glass-panel bg-neutral-950/70 border border-white/[0.08] p-8 sm:p-14 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#5865F2]/10 blur-[100px] pointer-events-none" />

        <div className="flex flex-col items-start gap-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill bg-[#5865F2]/10 border border-[#5865F2]/20 text-[#5865F2]">
            <DiscordIcon className="w-3.5 h-3.5" />
            <span className="text-[11px] font-semibold tracking-wider uppercase font-sans">
              Official Discord Pack
            </span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wider text-neutral-100">
            JOIN OVER 500+ PACK WARRIORS
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
            Connect with clan members, participate in weekly Nitro giveaways, report rule-breakers via private tickets, and receive immediate announcements regarding server maintenance and updates.
          </p>

          <div className="flex items-center gap-6 pt-2 text-xs text-neutral-400 font-sans">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>24/7 Active Moderation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span>Instant Support Tickets</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="shrink-0 w-full sm:w-auto flex flex-col items-center sm:items-end gap-3">
          <a
            href={SERVER_CONFIG.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold text-xs uppercase tracking-wider shadow-xl shadow-[#5865F2]/25 hover:shadow-[#5865F2]/40 transition-all font-sans group w-full sm:w-auto"
          >
            <DiscordIcon className="w-4 h-4" />
            <span>Enter Discord Server</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <span className="text-[11px] text-neutral-500 font-mono">
            discord.gg/PKYFEDhFkb
          </span>
        </div>
      </div>
    </section>
  );
}
