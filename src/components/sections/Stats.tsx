"use client";

import React from "react";
import { Users, UserCheck, MessageSquare, Activity, ShieldCheck } from "lucide-react";
import { DiagnosticDrawer } from "@/components/features/DiagnosticDrawer";

export function Stats() {
  const stats = [
    {
      label: "Active Combatants",
      value: "142+",
      sub: "Peak Weekend Capacity",
      icon: Users,
    },
    {
      label: "Total Pack Members",
      value: "8,500+",
      sub: "Registered Player Accounts",
      icon: UserCheck,
    },
    {
      label: "Discord Community",
      value: "1,200+",
      sub: "Active Discord Members",
      icon: MessageSquare,
    },
    {
      label: "Network Reliability",
      value: "99.9%",
      sub: "Uptime SLA Guarantee",
      icon: Activity,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="p-8 sm:p-12 rounded-3xl glass-panel bg-white/[0.02] border border-white/[0.06] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -top-24 right-0 w-72 h-72 bg-purple-900/10 blur-[80px] pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.06]">
          <div>
            <h2 className="font-bebas text-3xl tracking-wider text-neutral-100">
              NETWORK TELEMETRY & SCALE
            </h2>
            <p className="text-xs text-neutral-400 font-sans mt-0.5">
              Live operational metrics across India and global edge nodes
            </p>
          </div>

          {/* Diagnostic Console Button */}
          <DiagnosticDrawer />
        </div>

        {/* 4 Stats Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col">
                <div className="flex items-center gap-2 text-neutral-500 mb-2">
                  <Icon className="w-4 h-4 text-purple-400" />
                  <span className="text-[11px] uppercase tracking-wider font-semibold font-sans">
                    {stat.label}
                  </span>
                </div>

                <span className="font-bebas text-4xl sm:text-5xl text-neutral-100 tracking-wide">
                  {stat.value}
                </span>

                <span className="text-[11px] text-neutral-500 font-sans mt-1">
                  {stat.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
