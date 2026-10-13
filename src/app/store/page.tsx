import React from "react";
import Link from "next/link";
import { Ticket, Sparkles, Crown, Key, ShieldCheck, ArrowRight, ExternalLink, MessageSquare, CheckCircle2 } from "lucide-react";
import { SERVER_CONFIG } from "@/lib/constants";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Store & Rank Inquiries",
  description: "WolfMC official store — For rank upgrades, crate keys, or inquiries, open a support ticket on our official Discord server.",
  openGraph: {
    title: "WolfMC Store & Ranks — Discord Ticket Inquiries",
    description: "Purchase VIP, MVP, Alpha Wolf ranks and Crate Keys via official Discord tickets on play.wolfmc.fun.",
    url: "/store",
    siteName: "WolfMC Network",
    images: [
      {
        url: "/wolfmc.png",
        width: 1200,
        height: 630,
        alt: "WolfMC Store & Ranks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WolfMC Store & Ranks — Discord Ticket Inquiries",
    description: "Purchase VIP, MVP, Alpha Wolf ranks and Crate Keys via official Discord tickets on play.wolfmc.fun.",
    images: ["/wolfmc.png"],
  },
};

export default function StorePage() {
  const steps = [
    {
      num: "01",
      title: "Open Ticket Channel",
      desc: "Click the ticket link below to navigate straight to the #tickets channel on our official Discord server.",
    },
    {
      num: "02",
      title: "Create a Private Ticket",
      desc: "Click the ticket bot button to instantly generate your private 1-on-1 support and inquiry channel.",
    },
    {
      num: "03",
      title: "Get Info & Instant Activation",
      desc: "Share your Minecraft in-game username and the rank or key bundle you want. Staff will handle activation right away.",
    },
  ];

  const highlights = [
    {
      icon: Crown,
      title: "Server Ranks & Upgrades",
      desc: "VIP, MVP, and ALPHA WOLF custom prefixes, fly permissions in hub, extra player vaults, and exclusive cosmetic perks.",
      color: "border-purple-500/30 text-purple-400 bg-purple-500/5",
    },
    {
      icon: Key,
      title: "Crate Keys & Bundles",
      desc: "Rare gear, overpowered tools, in-game currency, and claim blocks in crate packages designed to elevate your gameplay.",
      color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/5",
    },
    {
      icon: ShieldCheck,
      title: "Direct Owner Assistance",
      desc: "Direct communication with Server Owners (Golu & Shaikh Zaid), flexible payment methods, and 100% verified fulfillment.",
      color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5",
    },
  ];

  return (
    <div className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-4">
          <Ticket className="w-3.5 h-3.5" />
          <span className="text-[11px] font-semibold uppercase tracking-wider font-sans">
            Official Store & Ticket Support
          </span>
        </div>

        <h1 className="font-bebas text-5xl sm:text-6xl tracking-wider text-neutral-100">
          WOLFMC RANKS & STORE
        </h1>

        <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
          If you want to purchase Ranks or Crate Keys, or need any details regarding in-game perks, please create a ticket in our official Discord server!
        </p>
      </div>

      {/* Main Ticket CTA Box */}
      <div className="p-8 sm:p-12 rounded-3xl glass-card bg-neutral-950/70 border border-purple-500/30 text-center max-w-3xl mx-auto flex flex-col items-center gap-6 relative overflow-hidden shadow-2xl shadow-purple-950/30 mb-16">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-purple-600/15 blur-[100px] pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-inner">
          <MessageSquare className="w-8 h-8" />
        </div>

        <div className="space-y-3 max-w-xl">
          <h2 className="font-bebas text-3xl sm:text-4xl tracking-wider text-neutral-100">
            DISCORD TICKET PORTAL
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
            For official pricing, rank perks, crate key packages, or instant order fulfillment, visit our Discord ticket channel. Our leadership team provides dedicated 1-on-1 assistance.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto pt-2">
          <a
            href={SERVER_CONFIG.discordTicketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-purple-900/40 transition-all font-sans group"
          >
            <Ticket className="w-4 h-4" />
            <span>Open Discord Ticket Channel</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={SERVER_CONFIG.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white transition-all font-sans"
          >
            <span>Join Discord Server</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <p className="text-[11px] text-neutral-500 font-sans">
          Direct Channel: #tickets in WolfMC Official Discord
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`p-6 rounded-3xl glass-card border ${item.color} flex flex-col justify-between`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bebas text-2xl tracking-wider text-neutral-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* How to Order Steps */}
      <div className="p-8 sm:p-10 rounded-3xl glass-card bg-white/[0.02] border border-white/[0.06] mb-12">
        <div className="text-center max-w-lg mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full glass-pill bg-white/[0.04] border border-white/[0.08] text-neutral-400 text-[10px] uppercase tracking-wider font-semibold mb-2">
            <Sparkles className="w-3 h-3 text-purple-400" />
            Simple Process
          </div>
          <h3 className="font-bebas text-3xl tracking-wider text-neutral-100">
            HOW TO GET RANKS & KEYS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-5 rounded-2xl bg-neutral-900/40 border border-white/[0.04] flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-bebas text-2xl text-purple-400 tracking-wider">
                  STEP {step.num}
                </span>
                <CheckCircle2 className="w-4 h-4 text-neutral-600" />
              </div>
              <h4 className="font-bebas text-lg tracking-wider text-neutral-200">
                {step.title}
              </h4>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
