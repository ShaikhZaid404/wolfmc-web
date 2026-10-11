"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Copy, Check, Menu, X, ChevronRight } from "lucide-react";
import { DiscordIcon } from "@/components/icons/DiscordIcon";
import { SERVER_CONFIG } from "@/lib/constants";
import { useToast } from "@/components/ui/ToastContext";

export function Navbar() {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          {/* Server IP Copy Pill */}
          <button
            onClick={handleCopyIp}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-purple-500/30 text-xs text-neutral-300 transition-all group"
            title="Click to copy server IP"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] text-neutral-300 group-hover:text-neutral-100">
              {SERVER_CONFIG.ip.java}
            </span>
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
            )}
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
              className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl glass-panel bg-white/[0.05] border border-purple-500/30 text-xs font-semibold text-neutral-200"
            >
              <Copy className="w-3.5 h-3.5 text-purple-400" />
              <span>Copy IP ({SERVER_CONFIG.ip.java})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
