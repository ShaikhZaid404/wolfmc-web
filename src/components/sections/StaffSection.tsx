"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Crown, ExternalLink } from "lucide-react";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {staffData.map((staff) => (
          <div
            key={staff.ign}
            className="p-8 rounded-3xl glass-card bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left relative overflow-hidden"
          >
            {/* 3D Skin Body or Head */}
            <div className="relative w-24 h-32 shrink-0 flex items-center justify-center">
              <Image
                src={`https://crafatar.com/renders/body/${staff.ign}?size=120&overlay`}
                alt={`${staff.name} Minecraft Skin`}
                width={96}
                height={120}
                className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)]"
                unoptimized
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="font-sans font-bold text-lg text-neutral-100">
                  {staff.name}
                </span>
                <span className="p-0.5 rounded-full bg-purple-500/10 text-purple-400">
                  <Crown className="w-3.5 h-3.5" />
                </span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="font-mono text-xs text-neutral-400">
                  IGN: {staff.ign}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-300 font-sans uppercase">
                  {staff.role}
                </span>
              </div>

              <p className="text-xs text-neutral-500 font-sans leading-relaxed mt-1">
                {staff.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
