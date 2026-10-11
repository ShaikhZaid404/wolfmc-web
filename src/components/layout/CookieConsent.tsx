"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("wolfmc_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("wolfmc_cookie_consent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("wolfmc_cookie_consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="p-4 rounded-2xl glass-panel bg-neutral-950/90 border border-white/[0.1] shadow-2xl shadow-purple-950/20 backdrop-blur-2xl flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
              <Cookie className="w-4 h-4" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-200 font-sans">
              Cookie Preferences
            </p>
          </div>
          <button
            onClick={decline}
            className="text-neutral-500 hover:text-neutral-300 transition-colors p-0.5"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-neutral-400 leading-relaxed font-sans">
          We use minimal cookies for local session preferences and telemetry. Read our{" "}
          <Link href="/cookies" className="text-purple-400 hover:underline">
            Cookie Policy
          </Link>
          .
        </p>

        <div className="flex items-center justify-end gap-2 pt-1">
          <button
            onClick={decline}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.04] transition-colors font-sans"
          >
            Essential Only
          </button>
          <button
            onClick={accept}
            className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white shadow-md shadow-purple-900/30 transition-all font-sans"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
