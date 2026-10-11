import React from "react";
import { Vote, Key, Coins, Flame, ExternalLink, CheckCircle2 } from "lucide-react";
import voteData from "@/data/vote.json";

export const metadata = {
  title: "Vote for WolfMC",
  description: "Vote daily for WolfMC across all platforms to claim in-game keys, coins, and rewards.",
};

export default function VotePage() {
  const iconMap: Record<string, React.ElementType> = {
    Key,
    Coins,
    Flame,
  };

  return (
    <div className="py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-4">
          <Vote className="w-3.5 h-3.5" />
          <span className="text-[11px] font-semibold uppercase tracking-wider font-sans">
            Support WolfMC
          </span>
        </div>

        <h1 className="font-bebas text-5xl sm:text-6xl tracking-wider text-neutral-100">
          DAILY SERVER VOTING
        </h1>

        <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
          {voteData.description}
        </p>
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {voteData.rewards.map((reward) => {
          const Icon = iconMap[reward.icon] || Key;
          return (
            <div
              key={reward.name}
              className="p-6 rounded-3xl glass-card bg-white/[0.02] border border-white/[0.06] flex flex-col gap-3"
            >
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 w-fit">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-base text-neutral-100">
                {reward.name}
              </h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                {reward.detail}
              </p>
            </div>
          );
        })}
      </div>

      {/* Voting Sites Portals */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bebas text-2xl tracking-wider text-neutral-200">
          SELECT A VOTING PORTAL
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {voteData.sites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl glass-card bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/40 hover:bg-white/[0.05] flex items-center justify-between transition-all group"
            >
              <div>
                <h4 className="font-sans font-bold text-base text-neutral-100 group-hover:text-purple-300 transition-colors">
                  {site.name}
                </h4>
                <p className="text-xs text-neutral-500 font-sans mt-0.5">
                  Cooldown: {site.frequency}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 font-sans">
                <span>Vote</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
