"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Crown } from "lucide-react";
import staffData from "@/data/staff.json";

export function StaffSection() {
  return (
    <section id="staff" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-bebas text-4xl sm:text-5xl tracking-wider text-neutral-100">
          THE PACK LEADERSHIP
        </h2>
        <p className="font-playfair italic text-sm sm:text-base text-neutral-400 mt-1">
          &ldquo;Dedicated administration maintaining server integrity and community safety.&rdquo;
        </p>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {staffData.map((staff) => (
          <div
            key={staff.ign}
            className="p-6 rounded-3xl glass-card bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/40 flex flex-col items-center text-center relative overflow-hidden group"
          >
            {/* Custom Avatar Container */}
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-purple-500/30 group-hover:border-purple-500/60 shadow-xl shadow-purple-950/30 transition-all bg-neutral-900/80 mb-4">
              <Image
                src={staff.avatar || `https://crafatar.com/renders/body/${staff.ign}?size=120&overlay`}
                alt={`${staff.name} Avatar`}
                fill
                sizes="96px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>

            <div className="flex flex-col items-center gap-2 w-full">
              <div className="flex items-center justify-center gap-2">
                <span className="font-sans font-bold text-lg text-neutral-100">
                  {staff.name}
                </span>
                <span className={`p-0.5 rounded-full ${
                  staff.role === "Owner"
                    ? "bg-purple-500/10 text-purple-400"
                    : "bg-cyan-500/10 text-cyan-400"
                }`}>
                  {staff.role === "Owner" ? (
                    <Crown className="w-3.5 h-3.5" />
                  ) : (
                    <ShieldCheck className="w-3.5 h-3.5" />
                  )}
                </span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <span className="font-mono text-xs text-neutral-400">
                  IGN: {staff.ign}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold font-sans uppercase border ${
                  staff.role === "Owner"
                    ? "bg-purple-500/15 border-purple-500/30 text-purple-300"
                    : "bg-cyan-500/15 border-cyan-500/30 text-cyan-300"
                }`}>
                  {staff.role}
                </span>
              </div>

              <p className="text-xs text-neutral-400 font-sans leading-relaxed mt-1">
                {staff.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
