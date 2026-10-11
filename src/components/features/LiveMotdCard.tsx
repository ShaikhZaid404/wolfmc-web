"use client";

import React, { useState } from "react";
import { Server, Users, Copy, Check, Sparkles, RefreshCw, Radio } from "lucide-react";
import { useServerStatus } from "@/lib/useServerStatus";
import { SERVER_CONFIG } from "@/lib/constants";
import { useToast } from "@/components/ui/ToastContext";

export function LiveMotdCard() {
  const { status, loading } = useServerStatus();
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(SERVER_CONFIG.ip.java);
    setCopied(true);
    showToast("Server Address Copied!", SERVER_CONFIG.ip.java, "copy");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-4">
      <div className="p-6 sm:p-8 rounded-3xl glass-card bg-neutral-950/70 border border-purple-500/20 hover:border-purple-500/40 relative overflow-hidden shadow-2xl shadow-purple-950/20">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-64 h-32 bg-purple-600/10 blur-[70px] pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
          {/* Status Label */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bebas text-2xl tracking-wider text-neutral-100">
                  LIVE SERVER MOTD & STATUS
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-sans mt-0.5">
                Real-time ping response from {status.ip}
              </p>
            </div>
          </div>

          {/* Live Players Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl glass-panel bg-white/[0.02] border border-white/[0.08]">
            <Users className="w-4 h-4 text-purple-400" />
            <div className="flex flex-col text-right sm:text-left">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 font-sans">
                Players
              </span>
              <span className="font-mono text-sm font-bold text-neutral-100">
                {status.players.online} / {status.players.max}
              </span>
            </div>
          </div>
        </div>

        {/* MOTD Display Box (Styled like Minecraft Server List) */}
        <div className="my-6 p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/[0.06] flex flex-col gap-3 font-mono">
          <div className="flex items-center justify-between text-[11px] text-neutral-500 border-b border-white/[0.04] pb-2">
            <span className="flex items-center gap-2 text-neutral-300 font-sans">
              <Server className="w-3.5 h-3.5 text-purple-400" />
              <span>{SERVER_CONFIG.name} Network</span>
            </span>
            <span className="text-neutral-400 font-sans">
              Protocol: {status.version}
            </span>
          </div>

          {/* Colored MOTD rendering */}
          <div className="py-2 text-xs sm:text-sm text-neutral-200 leading-relaxed tracking-wide min-h-[44px] flex items-center">
            {status.motd.html ? (
              <div
                dangerouslySetInnerHTML={{ __html: status.motd.html }}
                className="select-text [&_span]:inline"
              />
            ) : (
              <span className="text-neutral-300">{status.motd.clean}</span>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Crossplay Active: Java (25565) &amp; Bedrock ({status.bedrockPort})</span>
          </div>

          {/* Smooth Green Copy Button */}
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 font-sans ${
              copied
                ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 scale-105"
                : "bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-200 hover:text-white"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400 transition-transform duration-300 rotate-0" />
                <span className="text-emerald-300">Copied IP!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-purple-300" />
                <span>Copy Server IP</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
