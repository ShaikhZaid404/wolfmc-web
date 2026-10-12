"use client";

import React, { useState } from "react";
import { Heart, Swords, Target, Check, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import gamemodesData from "@/data/gamemodes.json";
import { TiltCard } from "@/components/ui/TiltCard";

export function Gamemodes() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const iconsMap: Record<string, React.ElementType> = {
    Heart,
    Swords,
    Target,
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
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

      {/* 3 Interactive 3D Gamemode Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {gamemodesData.map((mode) => {
          const IconComponent = iconsMap[mode.icon] || Swords;
          const isExpanded = expandedId === mode.id;

          return (
            <TiltCard
              key={mode.id}
              accentColor={mode.accentHex}
              onClick={() => toggleExpand(mode.id)}
              className={`p-7 sm:p-8 rounded-3xl glass-card relative border transition-all duration-300 ${
                mode.borderClass
              } ${
                isExpanded
                  ? "bg-white/[0.06] shadow-2xl border-white/20"
                  : "bg-white/[0.02] hover:bg-white/[0.04]"
              }`}
            >
              {/* Laser Accent Line (Only Illuminates When Expanded) */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 transition-all duration-500 ${
                  isExpanded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
                style={{
                  backgroundColor: mode.accentHex,
                  boxShadow: isExpanded ? `0 0 16px ${mode.accentHex}` : "none",
                }}
              />

              {/* 3D Floating Content Container */}
              <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
                {/* Header Info: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="p-3 rounded-2xl border transition-transform duration-300 group-hover:scale-105"
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

                {/* Gamemode Title */}
                <h3 className="font-bebas text-3xl tracking-wider text-neutral-100 mb-2">
                  {mode.title}
                </h3>

                {/* 2-Line Tagline Description */}
                <p className="font-playfair italic text-xs sm:text-sm text-neutral-300 mb-4 leading-relaxed line-clamp-2">
                  &ldquo;{mode.tagline}&rdquo;
                </p>

                {/* Expand / Collapse Action Trigger */}
                <div className="pt-2 pb-1 flex items-center justify-between border-t border-white/[0.06]">
                  <span className="text-[11px] font-semibold tracking-wider uppercase font-sans text-neutral-400">
                    {isExpanded ? "Hide Details" : "Explore Mechanics"}
                  </span>
                  <div
                    className="flex items-center gap-1 text-xs font-bold font-sans transition-all"
                    style={{ color: mode.accentHex }}
                  >
                    <span>{isExpanded ? "Collapse" : "Expand"}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    )}
                  </div>
                </div>

                {/* Smooth Sliding Accordion Drawer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100 pt-5 mt-3 border-t border-white/[0.06]"
                      : "grid-rows-[0fr] opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="overflow-hidden">
                    {/* Full Description */}
                    <p className="text-xs text-neutral-300 leading-relaxed font-sans mb-6">
                      {mode.description}
                    </p>

                    {/* Key Features Checklist */}
                    <div className="flex flex-col gap-2.5 mb-6">
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 font-sans">
                        Key Features:
                      </p>
                      {mode.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-start gap-2.5 text-xs text-neutral-200 font-sans"
                        >
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

                    {/* Server Action Bar */}
                    <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                      <span className="text-xs font-semibold text-neutral-400 font-sans font-mono">
                        play.wolfmc.fun
                      </span>
                      <div
                        className="flex items-center gap-1.5 text-xs font-bold font-sans uppercase tracking-wider"
                        style={{ color: mode.accentHex }}
                      >
                        <span>Connect Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
