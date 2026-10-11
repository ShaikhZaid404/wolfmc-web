"use client";

import React, { useState } from "react";
import { Monitor, Smartphone, Plus, Play, Copy, Check, Terminal } from "lucide-react";
import { SERVER_CONFIG } from "@/lib/constants";
import { useToast } from "@/components/ui/ToastContext";

export function HowToJoin() {
  const [platform, setPlatform] = useState<"java" | "bedrock">("java");
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopy = (text: string, title: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    showToast(`${title} Copied!`, text, "copy");
    setTimeout(() => setCopied(false), 2000);
  };

  const javaSteps = [
    {
      step: "01",
      title: "Launch Minecraft Java",
      desc: "Open Minecraft Java Edition on version 1.21.11 (or latest compatible release).",
      icon: Monitor,
    },
    {
      step: "02",
      title: "Add WolfMC Address",
      desc: `Go to Multiplayer > Add Server and enter address: ${SERVER_CONFIG.ip.java}`,
      icon: Plus,
    },
    {
      step: "03",
      title: "Join & Battle",
      desc: "Select WolfMC from your server list and hit 'Join Server'. Ready for Lifesteal, BoxPvP & Practice!",
      icon: Play,
    },
  ];

  const bedrockSteps = [
    {
      step: "01",
      title: "Open Bedrock Edition",
      desc: "Launch Minecraft on Mobile (Android / iOS), Windows 10/11, or Console.",
      icon: Smartphone,
    },
    {
      step: "02",
      title: "Add Server & Port",
      desc: `Go to Servers tab > Add Server. Server IP: ${SERVER_CONFIG.ip.bedrock} | Port: ${SERVER_CONFIG.ip.bedrockPort}`,
      icon: Plus,
    },
    {
      step: "03",
      title: "Connect & Play",
      desc: "Save the server and tap Play. Crossplay handles your account instantly!",
      icon: Play,
    },
  ];

  const steps = platform === "java" ? javaSteps : bedrockSteps;

  return (
    <section id="how-to-join" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-bebas text-4xl sm:text-5xl tracking-wider text-neutral-100">
          HOW TO CONNECT
        </h2>
        <p className="font-playfair italic text-sm sm:text-base text-neutral-400 mt-1">
          &ldquo;Simple 3-step setup. Instant access to the pack.&rdquo;
        </p>

        {/* Platform Selector */}
        <div className="inline-flex items-center p-1 rounded-full glass-panel bg-white/[0.03] border border-white/[0.08] mt-6">
          <button
            onClick={() => setPlatform("java")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all font-sans ${
              platform === "java"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-900/40"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Java Edition</span>
          </button>

          <button
            onClick={() => setPlatform("bedrock")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all font-sans ${
              platform === "bedrock"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-900/40"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Bedrock / Mobile</span>
          </button>
        </div>
      </div>

      {/* 3 Step Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="p-8 rounded-3xl glass-card bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-purple-400/80">
                    {item.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-sans text-base font-bold text-neutral-100 tracking-wide mb-2">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {index === 1 && (
                <div className="mt-6 pt-4 border-t border-white/[0.04]">
                  <button
                    onClick={() =>
                      handleCopy(
                        platform === "java"
                          ? SERVER_CONFIG.ip.java
                          : `${SERVER_CONFIG.ip.bedrock}:${SERVER_CONFIG.ip.bedrockPort}`,
                        platform === "java" ? "Java Address" : "Bedrock Address"
                      )
                    }
                    className={`flex items-center justify-between w-full p-2.5 rounded-xl text-xs font-mono transition-all duration-300 ${
                      copied
                        ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 shadow-md shadow-emerald-950/30"
                        : "bg-white/[0.04] hover:bg-purple-600/20 border border-white/[0.08] hover:border-purple-500/30 text-neutral-300"
                    }`}
                  >
                    <span className="truncate">
                      {platform === "java"
                        ? SERVER_CONFIG.ip.java
                        : `${SERVER_CONFIG.ip.bedrock}:${SERVER_CONFIG.ip.bedrockPort}`}
                    </span>
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-2 rotate-0 transition-transform" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-purple-400 shrink-0 ml-2" />
                    )}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
