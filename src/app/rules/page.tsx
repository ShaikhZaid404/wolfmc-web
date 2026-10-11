"use client";

import React, { useState } from "react";
import { Shield, Search, ShieldAlert, Swords, Heart, Box, Target, FileCheck } from "lucide-react";
import rulesData from "@/data/rules.json";

export default function RulesPage() {
  const [search, setSearch] = useState("");

  const iconMap: Record<string, React.ElementType> = {
    ShieldAlert,
    Swords,
    Heart,
    Box,
    Target,
    FileCheck,
  };

  const filteredCategories = rulesData.categories.map((cat) => ({
    ...cat,
    rules: cat.rules.filter(
      (r) =>
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase()) ||
        r.punishment.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.rules.length > 0);

  return (
    <div className="py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-4">
          <Shield className="w-3.5 h-3.5" />
          <span className="text-[11px] font-semibold uppercase tracking-wider font-sans">
            Server Governance
          </span>
        </div>

        <h1 className="font-bebas text-5xl sm:text-6xl tracking-wider text-neutral-100">
          NETWORK RULES & CONDUCT
        </h1>

        <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
          {rulesData.disclaimer} Last updated: {rulesData.lastUpdated}.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mt-8">
          <Search className="w-4 h-4 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search rules (e.g. autoclicker, combat log, x-ray)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-xl glass-panel bg-white/[0.03] border border-white/[0.08] focus:border-purple-500/50 text-xs sm:text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none font-sans"
          />
        </div>
      </div>

      {/* Rules Categories List */}
      <div className="flex flex-col gap-10">
        {filteredCategories.map((category) => {
          const Icon = iconMap[category.icon] || Shield;
          return (
            <div
              key={category.id}
              className="p-8 rounded-3xl glass-card bg-white/[0.02] border border-white/[0.06] flex flex-col gap-6"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-white/[0.04]">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="font-sans font-bold text-lg text-neutral-100 tracking-wide">
                  {category.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {category.rules.map((rule) => (
                  <div
                    key={rule.number}
                    className="p-5 rounded-2xl glass-panel bg-white/[0.01] border border-white/[0.04] flex flex-col gap-2"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-mono text-xs font-bold text-purple-400">
                        Rule {rule.number}: {rule.title}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-red-500/10 border border-red-500/20 text-[10px] font-bold text-red-400 font-sans uppercase shrink-0">
                        {rule.punishment}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                      {rule.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
