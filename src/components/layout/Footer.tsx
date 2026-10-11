"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Copy, Check, ExternalLink } from "lucide-react";
import { DiscordIcon } from "@/components/icons/DiscordIcon";
import { SERVER_CONFIG } from "@/lib/constants";
import { useToast } from "@/components/ui/ToastContext";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(SERVER_CONFIG.ip.java);
    setCopied(true);
    showToast("Server IP Copied", SERVER_CONFIG.ip.java, "copy");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#050505] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-purple-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand Column (Span 2) */}
          <div className="md:col-span-2 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/wolfmc.png"
                  alt="WolfMC Brand"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-bebas text-3xl tracking-wider text-neutral-100 group-hover:text-purple-400 transition-colors">
                WOLFMC
              </span>
            </Link>

            <p className="font-playfair italic text-sm text-neutral-400 leading-relaxed">
              &ldquo;{SERVER_CONFIG.tagline}&rdquo;
            </p>

            <p className="text-xs text-neutral-500 max-w-sm leading-relaxed font-sans">
              Experience the pinnacle of competitive Minecraft gameplay. Lifesteal, BoxPvP arenas, and sub-20ms Practice duels across Java and Bedrock crossplay.
            </p>

            {/* Quick copy pill */}
            <button
              onClick={handleCopy}
              className="mt-2 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] text-xs text-neutral-300 transition-all group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] text-neutral-300">
                {SERVER_CONFIG.ip.java}
              </span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-neutral-500 group-hover:text-purple-400 transition-colors" />
              )}
            </button>
          </div>

          {/* Navigation Pages */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-300 font-sans">
              Pages
            </p>
            <ul className="flex flex-col gap-2.5 text-xs text-neutral-400 font-sans">
              {SERVER_CONFIG.navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-neutral-100 transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gamemodes */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-300 font-sans">
              Gamemodes
            </p>
            <ul className="flex flex-col gap-2.5 text-xs text-neutral-400 font-sans">
              <li>
                <Link href="/#gamemodes" className="hover:text-red-400 transition-colors">
                  Lifesteal SMP
                </Link>
              </li>
              <li>
                <Link href="/#gamemodes" className="hover:text-orange-400 transition-colors">
                  BoxPvP Arena
                </Link>
              </li>
              <li>
                <Link href="/#gamemodes" className="hover:text-cyan-400 transition-colors">
                  Ranked Practice
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Connect */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-300 font-sans">
              Connect
            </p>
            <ul className="flex flex-col gap-2.5 text-xs text-neutral-400 font-sans">
              <li>
                <a
                  href={SERVER_CONFIG.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#5865F2] transition-colors"
                >
                  <DiscordIcon className="w-4 h-4 text-[#5865F2]" />
                  <span>Discord Community</span>
                </a>
              </li>
              <li>
                <a
                  href="/vote"
                  className="hover:text-purple-400 transition-colors"
                >
                  Daily Server Voting
                </a>
              </li>
              <li>
                <a
                  href="/llms.txt"
                  target="_blank"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <span>AI Overview (llms.txt)</span>
                  <ExternalLink className="w-3 h-3 text-neutral-600" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-sans">
          <p>
            &copy; {new Date().getFullYear()} {SERVER_CONFIG.name}. Not an official Minecraft product. Not approved by or associated with Mojang Studios.
          </p>

          <div className="flex items-center gap-4 text-neutral-400">
            {SERVER_CONFIG.legalLinks.map((legal, index) => (
              <React.Fragment key={legal.name}>
                <Link href={legal.href} className="hover:text-neutral-200 transition-colors">
                  {legal.name}
                </Link>
                {index < SERVER_CONFIG.legalLinks.length - 1 && (
                  <span className="text-neutral-700">&middot;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
