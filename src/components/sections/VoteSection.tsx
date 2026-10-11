"use client";

import React from "react";
import { Vote, Key, Coins, Flame, ExternalLink, Check } from "lucide-react";
import voteData from "@/data/vote.json";

export function VoteSection() {
  const iconMap: Record<string, React.ElementType> = {
    Key,
    Coins,
    Flame,
  };

  return (
    <section id="vote" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-bebas text-4xl sm:text-5xl tracking-wider text-neutral-100">
          DAILY PACK VOTING REWARDS
        </h2>
        <p className="font-playfair italic text-sm sm:text-base text-neutral-400 mt-1">
          &ldquo;Support the network, climb global leaderboards, earn daily crate keys.&rdquo;
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Voting Rewards list */}
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-wider font-semibold text-neutral-400 font-sans">
            Guaranteed In-Game Rewards
          </p>
          {voteData.rewards.map((reward) => {
            const Icon = iconMap[reward.icon] || Key;
            return (
              <div
                key={reward.name}
                className="p-5 rounded-2xl glass-card bg-white/[0.02] border border-white/[0.06] flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-neutral-100">
                    {reward.name}
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 mt-0.5">
                    {reward.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Voting Portals */}
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-wider font-semibold text-neutral-400 font-sans">
            Active Voting Portals
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {voteData.sites.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass-card bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/40 hover:bg-white/[0.04] transition-all flex flex-col justify-between gap-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans font-bold text-sm text-neutral-200 group-hover:text-purple-300 transition-colors">
                    {site.name}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-purple-400 transition-colors" />
                </div>

                <div className="flex items-center justify-between text-[11px] text-neutral-500 font-sans pt-2 border-t border-white/[0.04]">
                  <span>{site.frequency}</span>
                  <span className="text-emerald-400 font-semibold">Active</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
