"use client";

import React from "react";
import { ShieldCheck, Zap, Globe, Users, Layers, Clock } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Anti-Cheat Protection",
      description: "Advanced heuristics and active server-side mitigation guarding against killaura, autoclickers, and unfair advantage exploits.",
      icon: ShieldCheck,
    },
    {
      title: "Sub-20ms Low Latency",
      description: "Optimized server tick rates and high-bandwidth routing ensuring crisp hit registration and fluid knockback physics.",
      icon: Zap,
    },
    {
      title: "Java & Bedrock Crossplay",
      description: "Connect seamlessly whether you are on PC Java Edition or Bedrock Mobile/Console. Unified community and economy.",
      icon: Globe,
    },
    {
      title: "Active Pack Community",
      description: "Join thousands of competitive fighters and survival enthusiasts on our 24/7 moderated Discord community.",
      icon: Users,
    },
    {
      title: "Custom In-House Plugins",
      description: "Handcrafted gameplay systems: custom Lifesteal hearts, BoxPvP mines, revive beacons, and ranked Elo matchmaking.",
      icon: Layers,
    },
    {
      title: "99.9% High Availability",
      description: "Enterprise VPS hardware with automated cloud failovers, continuous memory garbage collection, and zero lag spikes.",
      icon: Clock,
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-bebas text-4xl sm:text-5xl tracking-wider text-neutral-100">
          WHY CHOOSE WOLFMC
        </h2>
        <p className="font-playfair italic text-sm sm:text-base text-neutral-400 mt-1">
          &ldquo;Engineered for competitive superiority and fair play.&rdquo;
        </p>
      </div>

      {/* 3x2 Grid of Frosted Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="p-8 rounded-2xl glass-card bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 flex flex-col items-start gap-4"
            >
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Icon className="w-5 h-5" />
              </div>

              <div>
                <h3 className="font-sans text-base font-bold text-neutral-100 tracking-wide">
                  {feature.title}
                </h3>
                <p className="font-sans text-xs text-neutral-400 leading-relaxed mt-2">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
