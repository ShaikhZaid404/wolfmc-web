import React from "react";
import Image from "next/image";
import { Users, Crown, ShieldCheck, ShieldAlert, Shield, UserCheck, ArrowRight } from "lucide-react";
import { SERVER_CONFIG } from "@/lib/constants";
import staffData from "@/data/staff.json";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff Team Roster",
  description: "Meet the executive administration, managers, and moderation team behind WolfMC Minecraft Network.",
  openGraph: {
    title: "WolfMC Staff Team Roster",
    description: "Meet the official WolfMC staff team: Owners Golu & Shaikh Zaid, Manager MrPcgamer, Admin Shahaan, Mod Florian, and Helper Ojas.",
    url: "/staff",
    siteName: "WolfMC Network",
    images: [
      {
        url: "/wolfmc.png",
        width: 1200,
        height: 630,
        alt: "WolfMC Staff Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WolfMC Staff Team Roster",
    description: "Meet the official administration and moderation team of WolfMC Minecraft Network.",
    images: ["/wolfmc.png"],
  },
};

const roleConfigs: Record<
  string,
  {
    badgeClass: string;
    iconBg: string;
    iconColor: string;
    Icon: React.ComponentType<{ className?: string }>;
  }
> = {
  Owner: {
    badgeClass: "bg-purple-500/15 border-purple-500/30 text-purple-300",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    Icon: Crown,
  },
  Manager: {
    badgeClass: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    Icon: ShieldCheck,
  },
  Admin: {
    badgeClass: "bg-rose-500/15 border-rose-500/30 text-rose-300",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
    Icon: ShieldAlert,
  },
  Mod: {
    badgeClass: "bg-amber-500/15 border-amber-500/30 text-amber-300",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    Icon: Shield,
  },
  Helper: {
    badgeClass: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    Icon: UserCheck,
  },
};

export default function StaffPage() {
  return (
    <div className="py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-4">
          <Users className="w-3.5 h-3.5" />
          <span className="text-[11px] font-semibold uppercase tracking-wider font-sans">
            Network Staff
          </span>
        </div>

        <h1 className="font-bebas text-5xl sm:text-6xl tracking-wider text-neutral-100">
          THE PACK LEADERSHIP
        </h1>

        <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
          The developers, managers, and moderators working round-the-clock to maintain WolfMC.
        </p>
      </div>

      {/* Staff Roster Cards (Hierarchical Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {staffData.map((staff) => {
          const config = roleConfigs[staff.role] || roleConfigs.Helper;
          const RoleIcon = config.Icon;

          return (
            <div
              key={staff.ign}
              className="p-6 rounded-3xl glass-card bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 flex flex-col items-center text-center relative overflow-hidden transition-all"
            >
              {/* Custom Avatar Frame */}
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-purple-500/30 group-hover:border-purple-500/60 shadow-xl shadow-purple-950/30 transition-all bg-neutral-900/80 mb-4">
                <Image
                  src={staff.avatar}
                  alt={`${staff.name} Avatar`}
                  fill
                  sizes="96px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>

              <div className="flex flex-col items-center gap-2.5 w-full">
                <div className="flex items-center justify-center gap-2">
                  <span className="font-sans font-bold text-lg text-neutral-100">
                    {staff.name}
                  </span>
                  <span className={`p-1 rounded-full ${config.iconBg} ${config.iconColor}`}>
                    <RoleIcon className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <span className="font-mono text-xs text-neutral-400">
                    IGN: {staff.ign}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold font-sans uppercase border ${config.badgeClass}`}
                  >
                    {staff.role}
                  </span>
                </div>

                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {staff.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Join Staff CTA */}
      <div className="p-8 rounded-3xl glass-panel bg-neutral-950/60 border border-white/[0.06] text-center flex flex-col items-center gap-4 max-w-xl mx-auto">
        <h3 className="font-bebas text-2xl tracking-wider text-neutral-200">
          WANT TO JOIN THE STAFF TEAM?
        </h3>
        <p className="text-xs text-neutral-400 font-sans leading-relaxed">
          We periodically recruit helpers, moderators, and builders. Join our Discord community and monitor the announcements channel for open staff applications.
        </p>
        <a
          href={SERVER_CONFIG.discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white shadow-md shadow-purple-900/30 transition-all font-sans"
        >
          <span>Apply on Discord</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
