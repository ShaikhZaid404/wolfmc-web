"use client";

import React, { useState } from "react";
import { Heart, Skull, Swords, ShieldAlert } from "lucide-react";

export function HeartSimulator() {
  const [kills, setKills] = useState(6);
  const [deaths, setDeaths] = useState(2);

  const baseHearts = 10;
  const currentHearts = Math.max(0, Math.min(40, baseHearts + kills - deaths));

  const getThreatTier = (hearts: number) => {
    if (hearts <= 0) return { label: "Eliminated (Spectator)", color: "text-neutral-500", desc: "Needs clan revive beacon" };
    if (hearts <= 5) return { label: "Vulnerable Prey", color: "text-amber-500", desc: "Risk of complete elimination" };
    if (hearts <= 14) return { label: "Active Pack Member", color: "text-emerald-400", desc: "Balanced combat health" };
    if (hearts <= 24) return { label: "Alpha Hunter", color: "text-purple-400", desc: "High heart reserve" };
    return { label: "Lethal Warlord", color: "text-red-500", desc: "Dominating the server leaderboard" };
  };

  const tier = getThreatTier(currentHearts);

  return (
    <div className="w-full max-w-xl mx-auto p-6 sm:p-8 rounded-3xl glass-card bg-neutral-950/60 border border-white/[0.08] relative overflow-hidden">
      <div className="flex items-center gap-2.5 mb-6">
        <div className="p-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
          <Heart className="w-4 h-4 fill-red-500/30" />
        </div>
        <div>
          <h3 className="font-bebas text-xl tracking-wider text-neutral-100">
            LIFESTEAL HEART CALCULATOR
          </h3>
          <p className="text-xs text-neutral-400 font-sans">
            Simulate your in-game heart count and survival tier
          </p>
        </div>
      </div>

      {/* Heart display visualization */}
      <div className="p-4 rounded-2xl glass-panel bg-white/[0.02] border border-white/[0.06] mb-6 flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-sm mb-3">
          {Array.from({ length: currentHearts }).map((_, i) => (
            <div key={i} className="animate-in zoom-in-75 duration-150">
              <Heart className="w-5 h-5 text-red-500 fill-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]" />
            </div>
          ))}
          {currentHearts === 0 && (
            <div className="flex items-center gap-2 py-4 text-xs text-neutral-500 font-sans">
              <Skull className="w-4 h-4 text-neutral-600" />
              <span>Zero hearts remaining. Eliminated from Lifesteal SMP.</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between w-full pt-3 border-t border-white/[0.04]">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-sans">Current Health</span>
            <span className="font-mono text-xl font-bold text-neutral-100">
              {currentHearts} <span className="text-xs text-neutral-500 font-normal">Hearts ({currentHearts * 2} HP)</span>
            </span>
          </div>

          <div className="flex flex-col text-right">
            <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-sans">Status Tier</span>
            <span className={`text-xs font-semibold font-sans mt-0.5 ${tier.color}`}>
              {tier.label}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Sliders */}
      <div className="flex flex-col gap-5">
        <div>
          <div className="flex items-center justify-between text-xs text-neutral-300 mb-2 font-sans">
            <span className="flex items-center gap-1.5">
              <Swords className="w-3.5 h-3.5 text-purple-400" />
              <span>Confirmed Kills</span>
            </span>
            <span className="font-mono font-bold text-purple-400">{kills}</span>
          </div>
          <input
            type="range"
            min="0"
            max="30"
            value={kills}
            onChange={(e) => setKills(parseInt(e.target.value))}
            className="w-full accent-purple-500 bg-neutral-800 rounded-lg h-1.5 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex items-center justify-between text-xs text-neutral-300 mb-2 font-sans">
            <span className="flex items-center gap-1.5">
              <Skull className="w-3.5 h-3.5 text-neutral-500" />
              <span>Combat Deaths</span>
            </span>
            <span className="font-mono font-bold text-red-400">{deaths}</span>
          </div>
          <input
            type="range"
            min="0"
            max="20"
            value={deaths}
            onChange={(e) => setDeaths(parseInt(e.target.value))}
            className="w-full accent-red-500 bg-neutral-800 rounded-lg h-1.5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
