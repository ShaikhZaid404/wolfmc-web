import React from "react";
import Image from "next/image";
import { Users, Crown, ShieldCheck, ArrowRight } from "lucide-react";
import { SERVER_CONFIG } from "@/lib/constants";
import staffData from "@/data/staff.json";

export const metadata = {
  title: "Staff Team Roster",
  description: "Meet the executive leadership and moderation team behind WolfMC Minecraft Network.",
};

export default function StaffPage() {
  return (
    <div className="py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
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
          The developers, community managers, and administrators working round-the-clock to maintain WolfMC.
        </p>
      </div>

      {/* Staff Roster Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {staffData.map((staff) => (
          <div
            key={staff.ign}
            className="p-8 rounded-3xl glass-card bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden"
          >
            {/* Skin Render */}
            <div className="relative w-28 h-36 shrink-0 flex items-center justify-center">
              <Image
                src={`https://crafatar.com/renders/body/${staff.ign}?size=144&overlay`}
                alt={`${staff.name} Skin`}
                width={112}
                height={144}
                className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                unoptimized
              />
            </div>

            <div className="flex flex-col gap-2.5 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="font-sans font-bold text-xl text-neutral-100">
                  {staff.name}
                </span>
                <Crown className="w-4 h-4 text-purple-400" />
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="font-mono text-xs text-neutral-400">
                  IGN: {staff.ign}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-300 font-sans uppercase">
                  {staff.role}
                </span>
              </div>

              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                {staff.description}
              </p>
            </div>
          </div>
        ))}
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
