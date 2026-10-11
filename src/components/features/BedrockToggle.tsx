"use client";

import React, { useState } from "react";
import { Copy, Check, Monitor, Smartphone } from "lucide-react";
import { SERVER_CONFIG } from "@/lib/constants";
import { useToast } from "@/components/ui/ToastContext";

export function BedrockToggle() {
  const [activeTab, setActiveTab] = useState<"java" | "bedrock">("java");
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopy = () => {
    if (activeTab === "java") {
      navigator.clipboard.writeText(SERVER_CONFIG.ip.java);
      showToast("Java Server IP Copied!", SERVER_CONFIG.ip.java, "copy");
    } else {
      const full = `${SERVER_CONFIG.ip.bedrock}:${SERVER_CONFIG.ip.bedrockPort}`;
      navigator.clipboard.writeText(full);
      showToast("Bedrock Address Copied!", `Port: ${SERVER_CONFIG.ip.bedrockPort}`, "copy");
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-md mx-auto">
      {/* Switcher Tabs */}
      <div className="flex items-center p-1 rounded-full glass-panel bg-white/[0.03] border border-white/[0.08]">
        <button
          onClick={() => setActiveTab("java")}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all font-sans ${
            activeTab === "java"
              ? "bg-purple-600 text-white shadow-lg shadow-purple-900/40"
              : "text-neutral-400 hover:text-neutral-200"
          }`}
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Java Edition</span>
        </button>

        <button
          onClick={() => setActiveTab("bedrock")}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all font-sans ${
            activeTab === "bedrock"
              ? "bg-purple-600 text-white shadow-lg shadow-purple-900/40"
              : "text-neutral-400 hover:text-neutral-200"
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Bedrock / MCPE</span>
        </button>
      </div>

      {/* Address & Copy Container */}
      <div className="flex items-center justify-between gap-3 w-full p-2.5 pl-4 rounded-xl glass-panel bg-white/[0.03] border border-white/[0.08] hover:border-purple-500/30 transition-all">
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="font-mono text-sm sm:text-base font-semibold text-neutral-100 truncate">
              {activeTab === "java"
                ? SERVER_CONFIG.ip.java
                : `${SERVER_CONFIG.ip.bedrock}`}
            </span>
            <span className="text-[11px] text-neutral-400 font-sans">
              {activeTab === "java"
                ? `Port: ${SERVER_CONFIG.ip.javaPort} (Default) · Version ${SERVER_CONFIG.version}`
                : `Port: ${SERVER_CONFIG.ip.bedrockPort} · Mobile/Console Crossplay`}
            </span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-purple-600/20 border border-white/[0.1] hover:border-purple-500/40 text-xs font-semibold text-neutral-200 hover:text-purple-300 transition-all shrink-0 font-sans"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-neutral-400" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
