"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User, Search, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";

export function SkinInspector() {
  const [ign, setIgn] = useState("TheGolu");
  const [currentSkin, setCurrentSkin] = useState("TheGolu");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (ign.trim()) {
      setCurrentSkin(ign.trim());
    }
  };

  const presetStaff = [
    { name: "Golu", ign: "TheGolu", role: "Owner" },
    { name: "Shaikh Zaid", ign: "Zaid1621", role: "Owner" },
    { name: "MrPcgamer", ign: "MrPcgamerYML", role: "Manager" },
    { name: "z", ign: "Razzi_DD", role: "Manager" },
    { name: "Shahaan", ign: "1chai2samosa", role: "Admin" },
    { name: "lessert", ign: "lessertVFX", role: "Admin" },
    { name: "Florian", ign: "florianb465", role: "Mod" },
    { name: "Ojas", ign: "ojas__op", role: "Helper" },
  ];

  return (
    <div className="w-full max-w-xl mx-auto p-6 sm:p-8 rounded-3xl glass-card bg-neutral-950/60 border border-white/[0.08] relative overflow-hidden">
      <div className="flex items-center gap-2.5 mb-6">
        <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
          <User className="w-4 h-4" />
        </div>
        <div>
          <h3 className="font-bebas text-xl tracking-wider text-neutral-100">
            3D PLAYER SKIN INSPECTOR
          </h3>
          <p className="text-xs text-neutral-400 font-sans">
            Render any Minecraft Java skin live in our frosted glass viewer
          </p>
        </div>
      </div>

      {/* Search Input Bar */}
      <form onSubmit={handleSearch} className="flex items-center gap-2 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            value={ign}
            onChange={(e) => setIgn(e.target.value)}
            placeholder="Enter player IGN (e.g. Zaid1621)"
            className="w-full px-4 py-2.5 rounded-xl glass-panel bg-white/[0.03] border border-white/[0.08] focus:border-purple-500/50 text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none font-mono"
          />
        </div>
        <button
          type="submit"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white shadow-md shadow-purple-900/30 transition-all font-sans shrink-0"
        >
          <Search className="w-3.5 h-3.5" />
          <span>Inspect</span>
        </button>
      </form>

      {/* Skin Render Box */}
      <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl glass-panel bg-white/[0.02] border border-white/[0.06]">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center shrink-0 rounded-2xl overflow-hidden border border-purple-500/30 shadow-xl bg-neutral-900/60">
          <Image
            src={
              currentSkin.toLowerCase() === "thegolu" || currentSkin.toLowerCase() === "golu"
                ? "/skins/golu.png"
                : currentSkin.toLowerCase() === "zaid1621" || currentSkin.toLowerCase() === "zaid"
                ? "/skins/zaid.png"
                : `https://crafatar.com/renders/body/${currentSkin}?size=160&overlay`
            }
            alt={`${currentSkin}'s avatar`}
            fill
            sizes="128px"
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex flex-col gap-3 flex-1 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-mono text-lg font-bold text-neutral-100">
                {currentSkin}
              </span>
              <span className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
              </span>
            </div>
            <p className="text-xs text-neutral-500 font-sans mt-0.5">
              Verified Minecraft Java Profile
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2 border-t border-white/[0.04]">
            <span className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-[11px] font-semibold text-purple-300 font-sans">
              WolfMC Ready
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] text-neutral-400 font-sans">
              Version 1.21.11
            </span>
          </div>

          {/* Quick presets */}
          <div className="pt-2">
            <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1.5 font-sans">
              Quick Presets:
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              {presetStaff.map((staff) => (
                <button
                  key={staff.ign}
                  onClick={() => {
                    setIgn(staff.ign);
                    setCurrentSkin(staff.ign);
                  }}
                  className="px-2.5 py-1 rounded-md bg-white/[0.03] hover:bg-white/[0.08] text-[11px] text-neutral-400 hover:text-neutral-200 border border-white/[0.06] transition-colors font-mono"
                >
                  {staff.name} ({staff.role})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
