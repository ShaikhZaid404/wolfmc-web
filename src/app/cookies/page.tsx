import React from "react";
import { Cookie } from "lucide-react";

export const metadata = {
  title: "Cookie Policy",
  description: "WolfMC cookie policy and local storage disclosure.",
};

export default function CookiesPage() {
  return (
    <div className="py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="p-8 sm:p-12 rounded-3xl glass-panel bg-white/[0.02] border border-white/[0.06] flex flex-col gap-8 text-neutral-300 font-sans text-xs sm:text-sm leading-relaxed">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-3">
            <Cookie className="w-3.5 h-3.5" />
            <span className="text-[10px] font-semibold uppercase tracking-wider font-sans">
              Local Storage
            </span>
          </div>
          <h1 className="font-bebas text-4xl sm:text-5xl text-neutral-100 tracking-wider">
            COOKIE & STORAGE POLICY
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Last Updated: October 2026 &middot; WolfMC Network
          </p>
        </div>

        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-neutral-100 text-base">1. What are Cookies?</h2>
          <p className="text-neutral-400">
            Cookies and browser local storage are small text files stored on your device that enable websites to remember your settings, such as cookie preferences, theme selections, or recent search history.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-neutral-100 text-base">2. How WolfMC Uses Cookies</h2>
          <p className="text-neutral-400">
            We use strictly essential local storage items (such as `wolfmc_cookie_consent`) to record whether you have dismissed our privacy notices. We do not use intrusive third-party cross-site advertising trackers.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-neutral-100 text-base">3. Managing Your Cookies</h2>
          <p className="text-neutral-400">
            You can clear or block cookies at any time via your browser settings. Doing so will reset your consent banner preferences without impacting your ability to browse our server guides or copy connection addresses.
          </p>
        </section>
      </div>
    </div>
  );
}
