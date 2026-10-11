"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Copy,
  Shield,
  Users,
  Vote,
  Sparkles,
  ExternalLink,
  Keyboard,
  X,
  Swords,
  Heart,
  Target,
  Zap
} from "lucide-react";
import { DiscordIcon } from "@/components/icons/DiscordIcon";
import { SERVER_CONFIG } from "@/lib/constants";
import { useToast } from "@/components/ui/ToastContext";

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { showToast } = useToast();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} Copied`, `Value: ${text}`, "copy");
    setIsOpen(false);
  };

  const actions = [
    {
      id: "copy-java",
      title: "Copy Java Server IP",
      subtitle: `${SERVER_CONFIG.ip.java} (Port: ${SERVER_CONFIG.ip.javaPort})`,
      category: "Connections",
      icon: Copy,
      onSelect: () => copyToClipboard(SERVER_CONFIG.ip.java, "Java Address"),
    },
    {
      id: "copy-bedrock",
      title: "Copy Bedrock Port",
      subtitle: `${SERVER_CONFIG.ip.bedrock}:${SERVER_CONFIG.ip.bedrockPort}`,
      category: "Connections",
      icon: Copy,
      onSelect: () => copyToClipboard(SERVER_CONFIG.ip.bedrockPort.toString(), "Bedrock Port"),
    },
    {
      id: "discord",
      title: "Join Official Discord",
      subtitle: "Chat with the WolfMC pack",
      category: "Community",
      icon: DiscordIcon,
      onSelect: () => {
        window.open(SERVER_CONFIG.discordUrl, "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "rules",
      title: "Server Rules & Guidelines",
      subtitle: "Conduct, anti-cheat & gamemode policies",
      category: "Navigation",
      icon: Shield,
      onSelect: () => {
        router.push("/rules");
        setIsOpen(false);
      },
    },
    {
      id: "staff",
      title: "Staff Team Roster",
      subtitle: "Server Owners & Moderation",
      category: "Navigation",
      icon: Users,
      onSelect: () => {
        router.push("/staff");
        setIsOpen(false);
      },
    },
    {
      id: "vote",
      title: "Vote for WolfMC",
      subtitle: "Earn crate keys & in-game rewards",
      category: "Navigation",
      icon: Vote,
      onSelect: () => {
        router.push("/vote");
        setIsOpen(false);
      },
    },
    {
      id: "lifesteal",
      title: "Gamemode: Lifesteal",
      subtitle: "Steal hearts and build clans",
      category: "Gamemodes",
      icon: Heart,
      onSelect: () => {
        router.push("/#gamemodes");
        setIsOpen(false);
      },
    },
    {
      id: "boxpvp",
      title: "Gamemode: BoxPvP",
      subtitle: "Mine, upgrade, combat arena",
      category: "Gamemodes",
      icon: Swords,
      onSelect: () => {
        router.push("/#gamemodes");
        setIsOpen(false);
      },
    },
    {
      id: "practice",
      title: "Gamemode: Practice",
      subtitle: "Ranked 1v1 duels & Elo system",
      category: "Gamemodes",
      icon: Target,
      onSelect: () => {
        router.push("/#gamemodes");
        setIsOpen(false);
      },
    },
    {
      id: "cps",
      title: "CPS Reflex Tester",
      subtitle: "Test your clicking speed on the landing page",
      category: "Interactive",
      icon: Zap,
      onSelect: () => {
        router.push("/#cps-tester");
        setIsOpen(false);
      },
    },
  ];

  const filteredActions = actions.filter(
    (action) =>
      action.title.toLowerCase().includes(query.toLowerCase()) ||
      action.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      action.category.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-full glass-panel bg-neutral-900/60 border border-neutral-800 hover:border-purple-500/40 text-neutral-400 hover:text-neutral-200 text-xs transition-all duration-200 backdrop-blur-xl shadow-lg group"
        aria-label="Open Command Palette"
      >
        <Search className="w-3.5 h-3.5 text-neutral-400 group-hover:text-purple-400 transition-colors" />
        <span className="font-sans">Search actions</span>
        <kbd className="px-1.5 py-0.5 rounded bg-neutral-800/80 border border-neutral-700/60 text-[10px] text-neutral-400">
          Ctrl K
        </kbd>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-2xl glass-panel bg-neutral-950/90 border border-neutral-800 shadow-2xl shadow-purple-950/40 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-neutral-800/80 bg-neutral-900/40">
          <Search className="w-4 h-4 text-purple-400 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or jump to page..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none font-sans"
            autoFocus
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-md text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 flex flex-col gap-1">
          {filteredActions.length === 0 ? (
            <div className="py-8 text-center text-xs text-neutral-500 font-sans">
              No matching actions found.
            </div>
          ) : (
            filteredActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={action.onSelect}
                  className="flex items-center justify-between p-2.5 rounded-xl text-left hover:bg-neutral-800/50 hover:border-purple-500/20 border border-transparent transition-all group w-full"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-colors shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-neutral-200 group-hover:text-neutral-100 font-sans truncate">
                        {action.title}
                      </p>
                      <p className="text-[11px] text-neutral-500 truncate font-sans">
                        {action.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-neutral-500 px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 shrink-0 font-sans">
                    {action.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-neutral-800/60 bg-neutral-900/30 text-[11px] text-neutral-500 font-sans">
          <span>Navigate with mouse or keyboard</span>
          <div className="flex items-center gap-2">
            <span>Esc to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
