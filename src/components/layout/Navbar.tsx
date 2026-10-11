"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Copy, Check, Menu, X, ChevronRight, Users } from "lucide-react";
import { DiscordIcon } from "@/components/icons/DiscordIcon";
import { SERVER_CONFIG } from "@/lib/constants";
import { useToast } from "@/components/ui/ToastContext";
import { useServerStatus } from "@/lib/useServerStatus";

export function Navbar() {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [displayMode, setDisplayMode] = useState<"ip" | "players">("ip");
  const { status } = useServerStatus();
  const { showToast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smoothly alternate between IP and live Player count every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayMode((prev) => (prev === "ip" ? "players" : "ip"));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyIp = () => {
    navigator.clipboard.writeText(SERVER_CONFIG.ip.java);
    setCopied(true);
    showToast("Server Address Copied!", SERVER_CONFIG.ip.java, "copy");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/40 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/wolfmc.png"
              alt="WolfMC Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bebas text-2xl tracking-wider text-neutral-100 group-hover:text-purple-400 transition-colors">
            WOLFMC
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full bg-white/[0.02]">
          {SERVER_CONFIG.navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-neutral-100 transition-colors rounded-full hover:bg-white/[0.05]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Smooth Morphing IP & Live Player Count Badge */}
          <button
            onClick={handleCopyIp}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full transition-all duration-500 ease-in-out cursor-pointer group select-none ${
              copied
                ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 shadow-lg shadow-emerald-950/40"
                : "glass-pill bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-purple-500/40 text-neutral-300"
            }`}
            title="Click to copy server IP"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />

            {/* Smooth transition container */}
            <div className="overflow-hidden transition-all duration-500 ease-in-out flex items-center">
              {displayMode === "ip" ? (
                <span className="font-mono text-[11px] text-neutral-200 whitespace-nowrap animate-in fade-in duration-300">
                  {SERVER_CONFIG.ip.java}
                </span>
              ) : (
                <span className="font-mono text-[11px] text-neutral-200 whitespace-nowrap animate-in fade-in duration-300 flex items-center gap-1.5">
                  <Users className="w-3 h-3 text-purple-400 inline shrink-0" />
                  <span>
                    {status.players.online}/{status.players.max} Online
                  </span>
                </span>
              )}
            </div>

            <div className="shrink-0 transition-transform duration-200">
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400 scale-110" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-neutral-500 group-hover:text-purple-300 transition-colors" />
              )}
            </div>
          </button>

          {/* Discord Icon Only */}
          <a
            href={SERVER_CONFIG.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass-pill bg-white/[0.03] hover:bg-[#5865F2]/20 border border-white/[0.08] hover:border-[#5865F2]/40 text-neutral-400 hover:text-[#5865F2] transition-all"
            aria-label="Join Official Discord"
            title="Join Official Discord"
          >
            <DiscordIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={SERVER_CONFIG.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass-pill bg-white/[0.03] text-neutral-400 hover:text-[#5865F2]"
            aria-label="Discord"
          >
            <DiscordIcon className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg glass-pill text-neutral-400 hover:text-neutral-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/[0.08] bg-[#050505]/95 backdrop-blur-2xl px-6 py-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {SERVER_CONFIG.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-sm uppercase tracking-wider font-semibold text-neutral-300 hover:text-purple-400 border-b border-white/[0.04]"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </Link>
            ))}

            <button
              onClick={() => {
                handleCopyIp();
                setMobileMenuOpen(false);
              }}
              className="mt-3 flex items-center justify-between w-full py-2.5 px-4 rounded-xl glass-panel bg-white/[0.05] border border-purple-500/30 text-xs font-semibold text-neutral-200"
            >
              <span className="flex items-center gap-2">
                <Copy className="w-3.5 h-3.5 text-purple-400" />
                <span>{SERVER_CONFIG.ip.java}</span>
              </span>
              <span className="font-mono text-neutral-400 text-[11px]">
                {status.players.online}/{status.players.max} Online
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
