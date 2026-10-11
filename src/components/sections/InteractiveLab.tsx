"use client";

import React, { useState } from "react";
import { Zap, Heart, User } from "lucide-react";
import { CpsTester } from "@/components/features/CpsTester";
import { HeartSimulator } from "@/components/features/HeartSimulator";
import { SkinInspector } from "@/components/features/SkinInspector";

export function InteractiveLab() {
  const [activeTab, setActiveTab] = useState<"cps" | "hearts" | "skins">("cps");

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="font-bebas text-4xl sm:text-5xl tracking-wider text-neutral-100">
          WOLFMC INTERACTIVE LAB
        </h2>
        <p className="font-playfair italic text-sm sm:text-base text-neutral-400 mt-1">
          &ldquo;Test your reflexes, simulate health, and inspect player skins.&rdquo;
        </p>

        {/* Lab Switcher Tabs */}
        <div className="inline-flex items-center p-1 rounded-full glass-panel bg-white/[0.03] border border-white/[0.08] mt-6">
          <button
            onClick={() => setActiveTab("cps")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all font-sans ${
              activeTab === "cps"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-900/40"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>CPS Speed</span>
          </button>

          <button
            onClick={() => setActiveTab("hearts")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all font-sans ${
              activeTab === "hearts"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-900/40"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Heart Sim</span>
          </button>

          <button
            onClick={() => setActiveTab("skins")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all font-sans ${
              activeTab === "skins"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-900/40"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>3D Skin</span>
          </button>
        </div>
      </div>

      {/* Render Active Component */}
      <div className="w-full transition-all duration-300">
        {activeTab === "cps" && <CpsTester />}
        {activeTab === "hearts" && <HeartSimulator />}
        {activeTab === "skins" && <SkinInspector />}
      </div>
    </section>
  );
}
