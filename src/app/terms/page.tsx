import React from "react";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service",
  description: "WolfMC terms of service and player conduct agreement.",
};

export default function TermsPage() {
  return (
    <div className="py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="p-8 sm:p-12 rounded-3xl glass-panel bg-white/[0.02] border border-white/[0.06] flex flex-col gap-8 text-neutral-300 font-sans text-xs sm:text-sm leading-relaxed">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span className="text-[10px] font-semibold uppercase tracking-wider font-sans">
              Terms & Conditions
            </span>
          </div>
          <h1 className="font-bebas text-4xl sm:text-5xl text-neutral-100 tracking-wider">
            TERMS OF SERVICE
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Last Updated: October 2026 &middot; WolfMC Network
          </p>
        </div>

        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-neutral-100 text-base">1. Acceptance of Terms</h2>
          <p className="text-neutral-400">
            By connecting to play.wolfmc.fun (Java or Bedrock) or using wolfmc.fun, you agree to comply with all server rules, policies, and community guidelines. Ignorance of rules does not exempt you from moderation action.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-neutral-100 text-base">2. In-Game Conduct & Cheating</h2>
          <p className="text-neutral-400">
            Hacked clients, automated bots (such as Baritone), X-Ray texture packs, macro clickers exceeding standard human CPS, and duping glitches are strictly prohibited. Violators are subject to irreversible inventory wipes and permanent network blacklists.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-neutral-100 text-base">3. Virtual Goods & Store Purchases</h2>
          <p className="text-neutral-400">
            All virtual ranks, keys, and cosmetics purchased via our webstore are intangible in-game assets. All transactions are non-refundable. Fraudulent chargebacks will lead to automated bans across all affiliated networks.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-neutral-100 text-base">4. Mojang Disclaimer</h2>
          <p className="text-neutral-400">
            WolfMC is an independent Minecraft multiplayer server and is not an official Minecraft product. We are neither affiliated with nor endorsed by Mojang Studios or Microsoft.
          </p>
        </section>
      </div>
    </div>
  );
}
