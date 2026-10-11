import React from "react";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "WolfMC official privacy policy and data governance.",
};

export default function PrivacyPage() {
  return (
    <div className="py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="p-8 sm:p-12 rounded-3xl glass-panel bg-white/[0.02] border border-white/[0.06] flex flex-col gap-8 text-neutral-300 font-sans text-xs sm:text-sm leading-relaxed">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span className="text-[10px] font-semibold uppercase tracking-wider font-sans">
              Data Protection
            </span>
          </div>
          <h1 className="font-bebas text-4xl sm:text-5xl text-neutral-100 tracking-wider">
            PRIVACY POLICY
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Last Updated: October 2026 &middot; WolfMC Network
          </p>
        </div>

        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-neutral-100 text-base">1. Information We Collect</h2>
          <p className="text-neutral-400">
            When connecting to WolfMC (play.wolfmc.fun) or browsing our website, we may collect minimal technical identifiers including your Minecraft In-Game Name (IGN), Minecraft UUID, connecting IP address, and anonymized diagnostic latency telemetry.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-neutral-100 text-base">2. How We Use Information</h2>
          <p className="text-neutral-400">
            Data is strictly used to maintain server security, enforce automated anti-cheat bans, manage leaderboard rankings, and verify in-game vote reward deliveries. We do not sell, rent, or monetize personal player information to third-party advertisers.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-neutral-100 text-base">3. Minecraft Protocol & Third-Party APIs</h2>
          <p className="text-neutral-400">
            Our skin viewer uses public third-party APIs (such as Crafatar and Mojang Session Servers) to pull publicly rendered player skins and head textures. No private account credentials or passwords are ever accessed or stored.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-neutral-100 text-base">4. Data Retention & Deletion</h2>
          <p className="text-neutral-400">
            Player statistics and moderation records are retained to protect network safety. If you wish to request a deletion of your web cookies or forum records, submit an inquiry via our official Discord ticket support channel.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-neutral-100 text-base">5. Contact Information</h2>
          <p className="text-neutral-400">
            For privacy inquiries, contact the server ownership team via the official Discord ticket portal at https://discord.gg/PKYFEDhFkb.
          </p>
        </section>
      </div>
    </div>
  );
}
