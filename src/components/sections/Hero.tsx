"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Swords, Sparkles } from "lucide-react";
import { DiscordIcon } from "@/components/icons/DiscordIcon";
import { SERVER_CONFIG } from "@/lib/constants";
import { BedrockToggle } from "@/components/features/BedrockToggle";
import { HeroCrystal3D } from "@/components/features/HeroCrystal3D";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial spotlight glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] purple-glow-spotlight pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Network Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill bg-white/[0.02] border border-white/[0.08] mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-300 font-sans">
            Server Online &middot; Minecraft 1.21.11 Crossplay
          </span>
        </div>

        {/* 3D Interactive Centerpiece with Obsidian Crystal */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center mb-4">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <HeroCrystal3D />
          </div>
          <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 transition-transform duration-300 hover:scale-110 filter drop-shadow-[0_10px_25px_rgba(147,51,234,0.6)]">
            <Image
              src="/wolfmc.png"
              alt="WolfMC 3D Logo"
              width={96}
              height={96}
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Main Title (Bebas Neue) */}
        <h1 className="font-bebas text-6xl sm:text-8xl md:text-9xl tracking-wider text-neutral-100 leading-none">
          WOLFMC
        </h1>

        {/* Aesthetic Tagline (Playfair Display Italic) */}
        <p className="font-playfair italic text-lg sm:text-2xl text-purple-300/90 mt-2 mb-4">
          &ldquo;{SERVER_CONFIG.tagline}&rdquo;
        </p>

        {/* Concise Description */}
        <p className="max-w-2xl text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans mb-8">
          Step into India&apos;s ultimate Minecraft multiplayer battlefield. Steal hearts in high-stakes Lifesteal SMP, claim the pit in BoxPvP, and master sub-20ms Practice duels.
        </p>

        {/* Dual Connection Address Box */}
        <div className="w-full mb-8">
          <BedrockToggle />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#gamemodes"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-neutral-100 font-semibold text-xs tracking-wider uppercase shadow-lg shadow-purple-900/40 transition-all font-sans group"
          >
            <Swords className="w-4 h-4 text-purple-200 group-hover:rotate-12 transition-transform" />
            <span>Explore Gamemodes</span>
          </Link>

          <a
            href={SERVER_CONFIG.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass-panel bg-white/[0.04] hover:bg-[#5865F2]/20 border border-white/[0.09] hover:border-[#5865F2]/40 text-neutral-200 hover:text-[#5865F2] font-semibold text-xs tracking-wider uppercase transition-all font-sans"
          >
            <DiscordIcon className="w-4 h-4 text-[#5865F2]" />
            <span>Join Discord</span>
          </a>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <Link
        href="#features"
        className="mt-12 text-neutral-500 hover:text-neutral-300 transition-colors p-2"
        aria-label="Scroll to features"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </Link>
    </section>
  );
}
