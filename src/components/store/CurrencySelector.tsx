"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { useCart } from "@/lib/store/cart-context";
import { CURRENCIES } from "@/data/store-items";

export function CurrencySelector() {
  const { currency, setCurrencyCode } = useCart();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-purple-500/40 text-xs text-neutral-300 font-sans transition-all"
        title="Change store display currency"
      >
        <Globe className="w-3.5 h-3.5 text-purple-400" />
        <span className="font-semibold text-neutral-100">{currency.code}</span>
        <span className="text-neutral-400">({currency.symbol.trim()})</span>
        <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl glass-card bg-neutral-950/95 border border-white/[0.1] shadow-2xl backdrop-blur-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-neutral-500 border-b border-white/[0.04] mb-1">
            Display Currency
          </div>
          <div className="flex flex-col gap-0.5 max-h-60 overflow-y-auto">
            {Object.values(CURRENCIES).map((curr) => {
              const isSelected = curr.code === currency.code;
              return (
                <button
                  key={curr.code}
                  onClick={() => {
                    setCurrencyCode(curr.code);
                    setOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans text-left transition-colors ${
                    isSelected
                      ? "bg-purple-600/20 text-purple-300 font-semibold"
                      : "text-neutral-300 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="font-bold text-neutral-200">{curr.code}</span>
                    <span className="text-neutral-400">({curr.symbol.trim()})</span>
                  </span>
                  <span className="text-[10px] text-neutral-500">{curr.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
