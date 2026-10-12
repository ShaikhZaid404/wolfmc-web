"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Crown, ShieldCheck, ShieldAlert, Shield, UserCheck, Users, ArrowRight } from "lucide-react";
import staffData from "@/data/staff.json";

const roleConfigs: Record<
  string,
  {
    badgeClass: string;
    iconBg: string;
    iconColor: string;
    glowBorder: string;
    glowShadow: string;
    Icon: React.ComponentType<{ className?: string }>;
  }
> = {
  Owner: {
    badgeClass: "bg-purple-500/15 border-purple-500/30 text-purple-300",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    glowBorder: "border-purple-500",
    glowShadow: "shadow-[0_0_20px_rgba(168,85,247,0.5)]",
    Icon: Crown,
  },
  Manager: {
    badgeClass: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    glowBorder: "border-emerald-500",
    glowShadow: "shadow-[0_0_20px_rgba(16,185,129,0.5)]",
    Icon: ShieldCheck,
  },
  Admin: {
    badgeClass: "bg-rose-500/15 border-rose-500/30 text-rose-300",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
    glowBorder: "border-rose-500",
    glowShadow: "shadow-[0_0_20px_rgba(244,63,94,0.5)]",
    Icon: ShieldAlert,
  },
  Mod: {
    badgeClass: "bg-amber-500/15 border-amber-500/30 text-amber-300",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    glowBorder: "border-amber-500",
    glowShadow: "shadow-[0_0_20px_rgba(245,158,11,0.5)]",
    Icon: Shield,
  },
  Helper: {
    badgeClass: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    glowBorder: "border-cyan-500",
    glowShadow: "shadow-[0_0_20px_rgba(6,182,212,0.5)]",
    Icon: UserCheck,
  },
};

export function StaffSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const activeIndex = hoveredIndex !== null ? hoveredIndex : selectedIndex;
  const activeStaff = activeIndex !== null ? staffData[activeIndex] : null;
  const activeConfig = activeStaff ? roleConfigs[activeStaff.role] || roleConfigs.Helper : null;
  const ActiveIcon = activeConfig?.Icon;

  return (
    <section id="staff" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="font-bebas text-4xl sm:text-5xl tracking-wider text-neutral-100">
          THE PACK LEADERSHIP
        </h2>
        <p className="font-playfair italic text-sm sm:text-base text-neutral-400 mt-1">
          &ldquo;Dedicated administration maintaining server integrity and community safety.&rdquo;
        </p>
      </div>

      {/* Floating Card Display Area */}
      <div className="w-full max-w-md mx-auto min-h-[145px] flex items-end justify-center mb-6">
        {activeStaff && activeConfig && ActiveIcon ? (
          <div
            className={`w-full p-4 sm:p-5 rounded-2xl glass-card bg-neutral-950/90 border transition-all duration-300 shadow-2xl backdrop-blur-2xl text-left relative overflow-hidden ${activeConfig.glowBorder} ${activeConfig.glowShadow}`}
          >
            <div className="flex items-center gap-3.5">
              <div
                className={`relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border shadow-md bg-neutral-900 ${activeConfig.glowBorder}`}
              >
                <Image
                  src={activeStaff.avatar}
                  alt={activeStaff.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-sans font-bold text-base text-neutral-100">
                    {activeStaff.name}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold font-sans uppercase border flex items-center gap-1 ${activeConfig.badgeClass}`}
                  >
                    <ActiveIcon className="w-3 h-3" />
                    {activeStaff.role}
                  </span>
                </div>
                <p className="font-mono text-xs text-neutral-400 truncate">
                  IGN: {activeStaff.ign}
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-300 font-sans mt-2.5 leading-relaxed">
              {activeStaff.description}
            </p>

            {activeStaff.discord && (
              <div className="mt-2.5 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>Discord: @{activeStaff.discord}</span>
                <span className="text-[10px] text-purple-400 font-sans">Verified Staff</span>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full py-4 px-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center flex items-center justify-center gap-2.5 text-neutral-400 text-xs sm:text-sm font-sans backdrop-blur-md">
            <Users className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>Hover or tap any avatar below to inspect staff credentials</span>
          </div>
        )}
      </div>

      {/* Interactive Overlapping Avatar Dock (Facepile) */}
      <div className="flex justify-center">
        <div className="p-3 sm:p-4 rounded-3xl sm:rounded-full glass-card bg-neutral-950/80 border border-white/[0.08] shadow-2xl backdrop-blur-xl inline-flex items-center">
          <div className="flex items-center -space-x-3 sm:-space-x-4 px-1 py-1">
            {staffData.map((staff, index) => {
              const config = roleConfigs[staff.role] || roleConfigs.Helper;
              const isHovered = hoveredIndex === index;
              const isSelected = selectedIndex === index;
              const isActive = isHovered || isSelected;

              return (
                <div
                  key={staff.ign}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onTouchStart={() => setHoveredIndex(index)}
                  onTouchEnd={() => setHoveredIndex(null)}
                  onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                  title={`${staff.name} (${staff.role})`}
                  className={`relative rounded-full transition-all duration-300 cursor-pointer select-none group ${
                    isActive
                      ? "-translate-y-3.5 scale-125 z-40"
                      : "hover:-translate-y-2 hover:scale-110 hover:z-30 z-10"
                  } ${
                    activeIndex !== null && !isActive ? "opacity-50 scale-95" : "opacity-100"
                  }`}
                >
                  <div
                    className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 transition-all duration-300 relative bg-neutral-900 ${
                      isActive
                        ? `${config.glowBorder} ${config.glowShadow}`
                        : "border-neutral-950 group-hover:border-purple-500/50"
                    }`}
                  >
                    <Image
                      src={staff.avatar}
                      alt={`${staff.name} Avatar`}
                      fill
                      sizes="52px"
                      className="object-cover"
                      priority={index < 2}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full Roster CTA Button */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/staff"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-panel bg-white/[0.03] hover:bg-purple-600/20 border border-white/[0.08] hover:border-purple-500/40 text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white transition-all shadow-md group font-sans"
        >
          <span>View Full Staff Roster & Details</span>
          <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
