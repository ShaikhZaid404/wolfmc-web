import React from "react";
import Link from "next/link";
import { Swords, Ticket, ShieldCheck, Zap, ArrowRight, ShoppingBag, Sparkles, CheckCircle2 } from "lucide-react";
import { CurrencySelector } from "@/components/store/CurrencySelector";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store — WOLF MC",
  description: "Official WOLF MC store — BoxPvP ranks and crate keys for play.wolfmc.fun.",
  openGraph: {
    title: "Store — WOLF MC",
    description: "BoxPvP ranks and crate keys for WOLF MC on play.wolfmc.fun.",
    url: "/store",
    siteName: "WolfMC Network",
    images: [{ url: "/wolfmc.png", width: 1200, height: 630, alt: "WolfMC Store" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Store — WOLF MC",
    description: "BoxPvP ranks and crate keys for WOLF MC.",
    images: ["/wolfmc.png"],
  },
};

export default function StoreHubPage() {
  const trustFeatures = [
    {
      icon: Zap,
      title: "Ticket-Based Delivery",
      desc: "Perks and keys are applied to your Minecraft account immediately once staff confirm your order.",
    },
    {
      icon: Ticket,
      title: "Ticket Checkout",
      desc: "Orders are verified by real staff on Discord. Safe, transparent manual fulfillment.",
    },
    {
      icon: ShieldCheck,
      title: "Staff-Run Support",
      desc: "Reach our server owners and managers anytime directly through a dedicated 1-on-1 Discord ticket.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-32 sm:pt-36 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex-1 w-full">
      {/* Top Controls: Currency & Breadcrumb */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.04]">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-neutral-200">Store</span>
          </div>

          <CurrencySelector />
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-4">
            <Ticket className="w-3.5 h-3.5" />
            <span className="text-[11px] font-semibold uppercase tracking-wider font-sans">
              Delivery Via Discord Ticket
            </span>
          </div>

          <h1 className="font-bebas text-5xl sm:text-7xl tracking-wider text-neutral-100">
            THE STORE
          </h1>

          <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed max-w-lg mx-auto">
            Pick a gamemode to see its ranks, crate keys and extras. Every purchase is confirmed by our team through a Discord ticket.
          </p>
        </div>

        {/* Gamemodes Selection Grid */}
        <div className="max-w-xl mx-auto mb-20">
          <Link
            href="/store/boxpvp"
            className="group block p-8 sm:p-10 rounded-3xl glass-card bg-neutral-950/70 border border-white/[0.08] hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden shadow-2xl hover:shadow-purple-950/30"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-32 bg-purple-600/10 group-hover:bg-purple-600/20 blur-[70px] pointer-events-none transition-all duration-500" />

            <div className="flex items-center justify-between mb-6">
              <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                <Swords className="w-7 h-7" />
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/[0.05] border border-white/[0.08] text-purple-300">
                From $1.00
              </span>
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl tracking-wider text-neutral-100 mb-2 group-hover:text-purple-300 transition-colors">
              BOXPVP STORE
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed mb-6">
              Fast-paced box arenas, kits and cannons. Six tiers from Vip up to Wolf+, plus limited Halloween seasonal ranks and crate keys.
            </p>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400">
                <strong className="text-neutral-200">8</strong> Ranks · <strong className="text-neutral-200">4</strong> Crate Keys
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 group-hover:text-purple-300 uppercase tracking-wider font-sans">
                <span>Browse BoxPvP Store</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </div>

        {/* Trust Features (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {trustFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 rounded-2xl glass-card bg-white/[0.02] border border-white/[0.06] flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bebas text-xl tracking-wider text-neutral-100">
                  {feature.title}
                </h3>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
  );
}
