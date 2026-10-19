"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Swords,
  Sparkles,
  Crown,
  Key,
  Shield,
  Star,
  Flame,
  ShoppingBag,
  Check,
  Plus,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Wrench,
  Ghost,
} from "lucide-react";
import { useCart } from "@/lib/store/cart-context";
import { STORE_ITEMS, COMPARISON_PERKS, StoreItem } from "@/data/store-items";
import { CurrencySelector } from "@/components/store/CurrencySelector";
import { HalloweenBanner } from "@/components/store/HalloweenBanner";

export function BoxPvPStoreClient() {
  const { addToCart, formatPrice, cart } = useCart();
  const [expandedPerks, setExpandedPerks] = useState<Record<string, boolean>>({
    "boxpvp-mvp-plus": true,
    "boxpvp-wolf-plus": true,
  });

  const togglePerkExpand = (id: string) => {
    setExpandedPerks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isInCart = (id: string) => cart.some((line) => line.id === id);

  const halloweenItems = [
    STORE_ITEMS["boxpvp-ghost"],
    STORE_ITEMS["boxpvp-pumpkin"],
  ];

  const standardRanks = [
    STORE_ITEMS["boxpvp-vip"],
    STORE_ITEMS["boxpvp-vip-plus"],
    STORE_ITEMS["boxpvp-mvp"],
    STORE_ITEMS["boxpvp-mvp-plus"],
    STORE_ITEMS["boxpvp-wolf"],
    STORE_ITEMS["boxpvp-wolf-plus"],
  ];

  const crateKeys = [
    STORE_ITEMS["boxpvp-key-halloween"],
    STORE_ITEMS["boxpvp-key-talisman"],
    STORE_ITEMS["boxpvp-key-daddy"],
    STORE_ITEMS["boxpvp-key-boxpvp"],
  ];

  const customItem = STORE_ITEMS["boxpvp-custom"];

  const comparisonRanks = [
    STORE_ITEMS["boxpvp-vip"],
    STORE_ITEMS["boxpvp-vip-plus"],
    STORE_ITEMS["boxpvp-mvp"],
    STORE_ITEMS["boxpvp-mvp-plus"],
    STORE_ITEMS["boxpvp-wolf"],
    STORE_ITEMS["boxpvp-wolf-plus"],
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <HalloweenBanner />

      <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1 w-full">
        {/* Top Breadcrumb & Currency Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.04]">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/store" className="hover:text-purple-400 transition-colors">Store</Link>
            <span>/</span>
            <span className="text-neutral-200">BoxPvP</span>
          </div>

          <CurrencySelector />
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-4">
            <Swords className="w-3.5 h-3.5" />
            <span className="text-[11px] font-semibold uppercase tracking-wider font-sans">
              BoxPvP Gamemode
            </span>
          </div>

          <h1 className="font-bebas text-5xl sm:text-7xl tracking-wider text-neutral-100">
            BOXPVP STORE
          </h1>

          <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed max-w-xl mx-auto">
            Ranks, prefixes and crate keys for WOLF MC&apos;s box arenas. All purchases delivered by staff via a Discord ticket.
          </p>

          <p className="text-[11px] text-neutral-500 font-sans mt-3">
            Prices shown in your selected currency — final checkout amount is confirmed in USD on Discord.
          </p>

          {/* Quick Category Jump Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            <a
              href="#boxpvp-halloween"
              className="px-4 py-1.5 rounded-full glass-panel bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-semibold font-sans transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-orange-400" />
              <span>Halloween (2)</span>
            </a>
            <a
              href="#boxpvp-ranks"
              className="px-4 py-1.5 rounded-full glass-panel bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-neutral-300 text-xs font-semibold font-sans transition-all flex items-center gap-1.5"
            >
              <Crown className="w-3 h-3 text-purple-400" />
              <span>Ranks (6)</span>
            </a>
            <a
              href="#boxpvp-keys"
              className="px-4 py-1.5 rounded-full glass-panel bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-neutral-300 text-xs font-semibold font-sans transition-all flex items-center gap-1.5"
            >
              <Key className="w-3 h-3 text-cyan-400" />
              <span>Crate Keys (4)</span>
            </a>
            <a
              href="#boxpvp-compare"
              className="px-4 py-1.5 rounded-full glass-panel bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-neutral-300 text-xs font-semibold font-sans transition-all"
            >
              <span>Compare Perks</span>
            </a>
          </div>
        </div>

        {/* 1. Halloween Ranks Section */}
        <section id="boxpvp-halloween" className="mb-20 scroll-mt-24">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-orange-950/20 to-neutral-950/40 border border-orange-500/20 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-[10px] font-bold uppercase tracking-wider text-orange-400 mb-2">
                  <Sparkles className="w-3 h-3" />
                  Limited Seasonal Ranks
                </div>
                <h2 className="font-bebas text-3xl sm:text-4xl tracking-wider text-neutral-100">
                  HALLOWEEN UPDATE RANKS
                </h2>
                <p className="text-xs text-neutral-400 font-sans mt-1 max-w-xl">
                  Available only this season (event ends 31 October). Both ranks feature the same supreme perks — only the custom prefix and aesthetic color differ.
                </p>
              </div>

              <span className="px-3.5 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-mono font-bold shrink-0">
                2 Packages
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {halloweenItems.map((rank) => {
              const inCart = isInCart(rank.id);
              const isExpanded = expandedPerks[rank.id] ?? false;

              return (
                <div
                  key={rank.id}
                  className="p-7 sm:p-8 rounded-3xl glass-card bg-neutral-950/80 border border-orange-500/30 hover:border-orange-500/50 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-orange-950/20 transition-all duration-300 group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-500/20 text-orange-400 border border-orange-500/30">
                        {rank.tier}
                      </span>
                      <Ghost className="w-5 h-5 text-orange-400" />
                    </div>

                    <div className="flex items-baseline justify-between gap-2 mb-4">
                      <h3 className="font-bebas text-3xl sm:text-4xl tracking-wider text-neutral-100">
                        {rank.name}
                      </h3>
                      <span className="font-bebas text-3xl tracking-wider text-orange-400">
                        {formatPrice(rank.price)}
                      </span>
                    </div>

                    {/* Perks List */}
                    <div className="flex flex-col gap-2 mb-6">
                      {(isExpanded ? rank.perks : rank.perks?.slice(0, 5))?.map((perk, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
                          <Check className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>

                    {rank.perks && rank.perks.length > 5 && (
                      <button
                        onClick={() => togglePerkExpand(rank.id)}
                        className="text-[11px] font-semibold text-orange-400 hover:text-orange-300 mb-6 flex items-center gap-1 font-sans"
                      >
                        <span>{isExpanded ? "Show Less" : `+ ${rank.perks.length - 5} More Perks`}</span>
                        {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>
                    )}
                  </div>

                  <button
                    onClick={() => addToCart(rank.id)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-orange-900/30 transition-all font-sans cursor-pointer group/btn"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{inCart ? "Add Another to Cart" : `Buy ${rank.name}`}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* 2. BoxPvP Ranks Section */}
        <section id="boxpvp-ranks" className="mb-20 scroll-mt-24">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold uppercase tracking-wider text-purple-400 mb-1">
                <Crown className="w-3 h-3" />
                Permanent Ranks
              </div>
              <h2 className="font-bebas text-3xl sm:text-4xl tracking-wider text-neutral-100">
                BOXPVP RANKS
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              6 Packages
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {standardRanks.map((rank) => {
              const inCart = isInCart(rank.id);
              const isExpanded = expandedPerks[rank.id] ?? false;
              const isPopular = rank.popular;
              const isUltimate = rank.ultimate;

              let borderStyle = "border-white/[0.08] hover:border-purple-500/40";
              let badgeColor = "bg-white/[0.05] text-neutral-400 border-white/[0.08]";

              if (isPopular) {
                borderStyle = "border-purple-500/60 shadow-xl shadow-purple-950/40 bg-neutral-950/90";
                badgeColor = "bg-purple-500/20 text-purple-300 border-purple-500/40";
              } else if (isUltimate) {
                borderStyle = "border-cyan-500/40 shadow-xl shadow-cyan-950/30 bg-neutral-950/90";
                badgeColor = "bg-cyan-500/20 text-cyan-300 border-cyan-500/40";
              }

              return (
                <div
                  key={rank.id}
                  className={`p-7 rounded-3xl glass-card bg-neutral-950/70 border flex flex-col justify-between relative transition-all duration-300 ${borderStyle}`}
                >
                  <div>
                    {/* Badge & Tier */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${badgeColor}`}>
                        {rank.badge || rank.tier}
                      </span>
                      {isUltimate ? (
                        <Crown className="w-4 h-4 text-cyan-400" />
                      ) : isPopular ? (
                        <Star className="w-4 h-4 text-purple-400" />
                      ) : (
                        <Shield className="w-4 h-4 text-neutral-500" />
                      )}
                    </div>

                    {/* Title & Price */}
                    <div className="flex items-baseline justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-bebas text-3xl tracking-wider text-neutral-100">
                          {rank.name}
                        </h3>
                        <span className="font-mono text-xs text-neutral-400">
                          {rank.prefix} Prefix
                        </span>
                      </div>
                      <span className="font-bebas text-3xl tracking-wider text-purple-400">
                        {formatPrice(rank.price)}
                      </span>
                    </div>

                    {/* Perks List */}
                    <div className="flex flex-col gap-2 mb-5">
                      {(isExpanded ? rank.perks : rank.perks?.slice(0, 4))?.map((perk, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
                          <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>

                    {rank.perks && rank.perks.length > 4 && (
                      <button
                        onClick={() => togglePerkExpand(rank.id)}
                        className="text-[11px] font-semibold text-purple-400 hover:text-purple-300 mb-5 flex items-center gap-1 font-sans"
                      >
                        <span>{isExpanded ? "Show Less" : `+ ${rank.perks.length - 4} More Perks`}</span>
                        {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>
                    )}
                  </div>

                  <button
                    onClick={() => addToCart(rank.id)}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all font-sans cursor-pointer ${
                      isPopular || isUltimate
                        ? "bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-900/40"
                        : "bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-neutral-200 hover:text-white"
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{inCart ? "Add Another" : `Buy ${rank.name}`}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Custom Rank Request Card */}
          <div className="p-7 sm:p-8 rounded-3xl glass-card bg-neutral-950/60 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bebas text-2xl tracking-wider text-neutral-100">
                    {customItem.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/[0.05] text-neutral-400">
                    Custom Quote
                  </span>
                </div>
                <p className="text-xs text-neutral-400 font-sans mt-0.5 max-w-lg">
                  {customItem.description}
                </p>
              </div>
            </div>

            <button
              onClick={() => addToCart(customItem.id)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-neutral-200 font-sans shrink-0 cursor-pointer"
            >
              Add Custom Request
            </button>
          </div>
        </section>

        {/* 3. Rank Comparison Table */}
        <section id="boxpvp-compare" className="mb-20 scroll-mt-24">
          <div className="mb-8">
            <h2 className="font-bebas text-3xl sm:text-4xl tracking-wider text-neutral-100">
              RANK COMPARISON MATRIX
            </h2>
            <p className="text-xs text-neutral-400 font-sans mt-1">
              Side-by-side comparison of vaults, auction limits, and exclusive commands.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl glass-card bg-neutral-950/70 border border-white/[0.08] shadow-2xl">
            <table className="w-full text-left border-collapse text-xs font-sans min-w-[650px]">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                  <th className="py-4 px-6 text-neutral-400 font-bold uppercase tracking-wider">Perk</th>
                  {comparisonRanks.map((r) => (
                    <th key={r.id} className="py-4 px-4 text-center font-bebas text-xl tracking-wider text-neutral-100">
                      {r.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {COMPARISON_PERKS.map((perk) => (
                  <tr key={perk.key} className="hover:bg-white/[0.01] transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-neutral-300">
                      {perk.label}
                    </td>
                    {comparisonRanks.map((rank) => {
                      let valDisplay = "—";
                      if (perk.key === "price") {
                        valDisplay = formatPrice(rank.price);
                      } else if (perk.key === "vaults") {
                        valDisplay = `${rank.vaults || 0}`;
                      } else if (perk.key === "auctions") {
                        valDisplay = `${rank.auctions || 0}`;
                      } else if (perk.key === "afk") {
                        valDisplay = rank.afk || "—";
                      } else if (perk.getVal) {
                        valDisplay = perk.getVal(rank);
                      }

                      const isPositive = valDisplay === "Yes" || valDisplay.includes("x");

                      return (
                        <td key={rank.id} className="py-3.5 px-4 text-center font-mono">
                          <span
                            className={
                              isPositive
                                ? "text-purple-400 font-bold"
                                : valDisplay === "—"
                                ? "text-neutral-600"
                                : "text-neutral-200"
                            }
                          >
                            {valDisplay}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Crate Keys Section */}
        <section id="boxpvp-keys" className="mb-16 scroll-mt-24">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-bold uppercase tracking-wider text-cyan-400 mb-1">
                <Key className="w-3 h-3" />
                Loot Crates
              </div>
              <h2 className="font-bebas text-3xl sm:text-4xl tracking-wider text-neutral-100">
                BOXPVP CRATE KEYS
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              4 Packages
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {crateKeys.map((key) => {
              const inCart = isInCart(key.id);

              return (
                <div
                  key={key.id}
                  className="p-6 rounded-3xl glass-card bg-neutral-950/70 border border-white/[0.08] hover:border-cyan-500/40 flex flex-col justify-between gap-4 transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                      <Key className="w-6 h-6" />
                    </div>

                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-bebas text-2xl tracking-wider text-neutral-100">
                        {key.name}
                      </h3>
                      <span className="font-mono text-xs text-neutral-500">1x</span>
                    </div>

                    <span className="font-bebas text-2xl tracking-wider text-cyan-400 block mb-2">
                      {formatPrice(key.price)}
                    </span>

                    <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                      {key.description}
                    </p>
                  </div>

                  <button
                    onClick={() => addToCart(key.id)}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-cyan-600/20 hover:border-cyan-500/30 border border-white/[0.08] text-neutral-200 hover:text-cyan-300 text-xs font-semibold uppercase tracking-wider transition-all font-sans cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{inCart ? "Add More" : "Add to Cart"}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
