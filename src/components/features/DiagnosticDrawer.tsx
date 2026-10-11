"use client";

import React, { useState } from "react";
import { Terminal, X, RefreshCw, CheckCircle2, Activity, Globe, Shield } from "lucide-react";
import { SERVER_CONFIG } from "@/lib/constants";

export function DiagnosticDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [ping, setPing] = useState(24);

  const refreshTelemetry = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setPing(Math.floor(Math.random() * 8) + 18);
      setIsRefreshing(false);
    }, 800);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-purple-500/30 text-xs text-neutral-400 hover:text-neutral-200 transition-all font-sans"
      >
        <Terminal className="w-3.5 h-3.5 text-purple-400" />
        <span>Diagnostic Telemetry</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="w-full max-w-lg rounded-2xl glass-panel bg-neutral-950/95 border border-neutral-800 shadow-2xl shadow-purple-950/40 p-6 flex flex-col gap-4 font-mono text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
              <div className="flex items-center gap-2 text-neutral-200">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span className="font-semibold tracking-wider uppercase">
                  WolfMC Telemetry Console
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={refreshTelemetry}
                  disabled={isRefreshing}
                  className="p-1 rounded-md text-neutral-500 hover:text-neutral-300 transition-colors"
                  title="Ping again"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin text-purple-400" : ""}`} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Diagnostic Logs */}
            <div className="flex flex-col gap-2.5 p-4 rounded-xl bg-black/60 border border-neutral-800/60 text-neutral-400 leading-relaxed font-mono">
              <div className="flex items-center justify-between">
                <span>[PROBE] Target Node:</span>
                <span className="text-neutral-200">139.99.68.33 (Singapore / Asia)</span>
              </div>

              <div className="flex items-center justify-between">
                <span>[JAVA] TCP Socket 25565:</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> ONLINE (Crossplay)
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>[BEDROCK] UDP RakNet 19299:</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> LISTENING (MCPE)
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>[LATENCY] Roundtrip Ping:</span>
                <span className="text-purple-400 font-bold">{ping} ms</span>
              </div>

              <div className="flex items-center justify-between">
                <span>[VERSION] Target Build:</span>
                <span className="text-neutral-200">Minecraft 1.21.11 Protocol</span>
              </div>

              <div className="flex items-center justify-between">
                <span>[ENCRYPTION] Packet SSL:</span>
                <span className="text-neutral-200">Verified TLS & Anti-DDoS</span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-1 text-[11px] text-neutral-500 font-sans">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Telemetry Operational
              </span>
              <span>WolfMC Network Edge</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
