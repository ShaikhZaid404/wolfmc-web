"use client";

import React, { useState } from "react";
import { Heart, Swords, Target, Check, ArrowRight } from "lucide-react";
import gamemodesData from "@/data/gamemodes.json";

export function Gamemodes() {
  const [activeGamemode, setActiveGamemode] = useState("lifesteal");

  const iconsMap: Record<string, React.ElementType> = {
    Heart,
    Swords,
    Target,
  };

  return (
    <section id="gamemodes" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-950/15 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-bebas text-4xl sm:text-5xl tracking-wider text-neutral-100">
          FEATURED GAMEMODES
        </h2>
        <p className="font-playfair italic text-sm sm:text-base text-neutral-400 mt-1">
          &ldquo;Choose your battlefield. Rise above the pack.&rdquo;
        </p>
      </div>

      {/* 3 Large Gamemode Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {gamemodesData.map((mode) => {
          const IconComponent = iconsMap[mode.icon] || Swords;
          const isSelected = activeGamemode === mode.id;

          return (
            <div
              key={mode.id}
              onClick={() => setActiveGamemode(mode.id)}
              className={`p-8 rounded-3xl glass-card relative overflow-hidden flex flex-col justify-between cursor-pointer border transition-all duration-300 ${
                mode.borderClass
              } ${
                isSelected
                  ? "bg-white/[0.05] shadow-2xl scale-[1.01]"
                  : "bg-white/[0.02]"
              }`}
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-80"
                style={{ backgroundColor: mode.accentHex }}
              />

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="p-3 rounded-2xl border"
                    style={{
                      backgroundColor: `${mode.accentHex}15`,
                      borderColor: `${mode.accentHex}30`,
                      color: mode.accentHex,
                    }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider font-sans border"
                    style={{
                      backgroundColor: `${mode.accentHex}10`,
                      borderColor: `${mode.accentHex}25`,
                      color: mode.accentHex,
                    }}
                  >
                    {mode.badge}
                  </span>
                </div>

                <h3 className="font-bebas text-3xl tracking-wider text-neutral-100 mb-2">
                  {mode.title}
                </h3>

                <p className="font-playfair italic text-xs text-neutral-400 mb-6 leading-relaxed">
                  &ldquo;{mode.tagline}&rdquo;
                </p>

                <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-8">
                  {mode.description}
                </p>

                {/* Features List */}
                <div className="flex flex-col gap-2.5 mb-8">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-neutral-500 font-sans">
                    Key Features:
                  </p>
                  {mode.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-neutral-300 font-sans">
                      <div
                        className="p-0.5 rounded-full mt-0.5 shrink-0"
                        style={{ color: mode.accentHex }}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-400 font-sans">
                  play.wolfmc.fun
                </span>
                <div
                  className="flex items-center gap-1 text-xs font-bold font-sans uppercase tracking-wider"
                  style={{ color: mode.accentHex }}
                >
                  <span>Connect Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
