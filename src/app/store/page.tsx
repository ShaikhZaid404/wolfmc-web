import React from "react";
import { ShoppingBag, Sparkles, Crown, Zap, Shield, ArrowRight } from "lucide-react";
import { SERVER_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Official Webstore",
  description: "WolfMC official store for ranks, cosmetics, and crate keys.",
};

export default function StorePage() {
  const previewRanks = [
    {
      name: "VIP",
      color: "border-emerald-500/30 text-emerald-400",
      perks: ["Custom [VIP] Prefix", "/fly in Spawn Hub", "2x Vote Key Multiplier", "Access to /workbench"],
    },
    {
      name: "MVP",
      color: "border-cyan-500/30 text-cyan-400",
      perks: ["Custom [MVP] Prefix", "Priority Server Queue", "4x Extra Vault Rows", "/feed and /heal cooldowns"],
    },
    {
      name: "ALPHA WOLF",
      color: "border-purple-500/50 text-purple-400",
      perks: ["Ultimate [ALPHA] Crown Prefix", "Unrestricted Death Drops in Safezones", "Custom Aura Particles", "Permanent VIP Lounge Access"],
    },
  ];

  return (
    <div className="py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="text-[11px] font-semibold uppercase tracking-wider font-sans">
            Store Launching Soon
          </span>
        </div>

        <h1 className="font-bebas text-5xl sm:text-6xl tracking-wider text-neutral-100">
          WOLFMC OFFICIAL WEBSTORE
        </h1>

        <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
          Tebex store integration is currently undergoing testing. All rank purchases directly support dedicated VPS hosting and custom plugin engineering.
        </p>
      </div>

      {/* Ranks Preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {previewRanks.map((rank) => (
          <div
            key={rank.name}
            className={`p-6 rounded-3xl glass-card bg-white/[0.02] border ${rank.color} flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-bebas text-2xl tracking-wider text-neutral-100">
                  {rank.name}
                </span>
                <Crown className="w-4 h-4 opacity-75" />
              </div>

              <div className="flex flex-col gap-2 mb-6">
                {rank.perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.04] text-center">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-500 font-sans">
                Available at Launch
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Discord Notification Banner */}
      <div className="p-8 rounded-3xl glass-panel bg-neutral-950/60 border border-white/[0.06] text-center flex flex-col items-center gap-4 max-w-xl mx-auto">
        <h3 className="font-bebas text-2xl tracking-wider text-neutral-200">
          BE THE FIRST TO KNOW
        </h3>
        <p className="text-xs text-neutral-400 font-sans leading-relaxed">
          Join our Discord server to get pinged the moment store ranks and early-bird discount codes go live!
        </p>
        <a
          href={SERVER_CONFIG.discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white shadow-md shadow-purple-900/30 transition-all font-sans"
        >
          <span>Get Alert on Discord</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
