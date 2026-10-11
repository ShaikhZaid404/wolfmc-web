"use client";

import React, { useState, useEffect, useRef } from "react";
import { Zap, RotateCcw, Trophy, Target } from "lucide-react";

export function CpsTester() {
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTest = () => {
    if (isFinished) return;
    if (!isActive) {
      setIsActive(true);
      setClicks(1);
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsActive(false);
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setClicks((prev) => prev + 1);
    }
  };

  const resetTest = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsActive(false);
    setIsFinished(false);
    setClicks(0);
    setTimeLeft(5);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const cps = isFinished ? (clicks / 5).toFixed(1) : isActive ? (clicks / (5 - timeLeft || 1)).toFixed(1) : "0.0";

  const getRank = (score: number) => {
    if (score >= 13) return { title: "Alpha Pack Leader", desc: "Tournament Grade Reflexes", color: "text-purple-400" };
    if (score >= 9) return { title: "Pack Warrior", desc: "Ready for Practice & BoxPvP", color: "text-emerald-400" };
    if (score >= 6) return { title: "Beta Wolf", desc: "Solid Combat Foundation", color: "text-cyan-400" };
    return { title: "Wolf Cub", desc: "Warm up your clicking rhythm", color: "text-neutral-400" };
  };

  const rank = getRank(parseFloat(cps));

  return (
    <div id="cps-tester" className="w-full max-w-xl mx-auto p-6 sm:p-8 rounded-3xl glass-card bg-neutral-950/60 border border-white/[0.08] relative overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bebas text-xl tracking-wider text-neutral-100">
              PVP CPS REFLEX TESTER
            </h3>
            <p className="text-xs text-neutral-400 font-sans">
              Test your clicking speed before jumping into Practice
            </p>
          </div>
        </div>

        <button
          onClick={resetTest}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-400 hover:text-neutral-100 hover:bg-white/[0.05] transition-all font-sans"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Main Clicking Pad */}
      <div
        onClick={startTest}
        className={`w-full py-12 px-6 rounded-2xl flex flex-col items-center justify-center cursor-pointer select-none transition-all duration-150 ${
          isFinished
            ? "bg-purple-950/20 border border-purple-500/40"
            : isActive
            ? "bg-purple-600/15 border border-purple-500/60 scale-[0.99]"
            : "bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-purple-500/30"
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2 font-sans">
          {isFinished ? "Test Complete" : isActive ? "Click as fast as you can!" : "Click to Start (5s Test)"}
        </p>

        <span className="font-bebas text-6xl sm:text-7xl text-neutral-100 tracking-wider">
          {clicks}
        </span>

        <p className="text-xs text-neutral-500 mt-2 font-sans">
          Time Remaining: <span className="text-neutral-300 font-mono font-semibold">{timeLeft}s</span>
        </p>
      </div>

      {/* Score & Rank Stats */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="p-3.5 rounded-xl glass-panel bg-white/[0.02] border border-white/[0.06]">
          <p className="text-[11px] uppercase tracking-wider text-neutral-500 font-sans">Speed</p>
          <p className="font-mono text-xl font-bold text-neutral-100 mt-0.5">
            {cps} <span className="text-xs font-normal text-neutral-500">CPS</span>
          </p>
        </div>

        <div className="p-3.5 rounded-xl glass-panel bg-white/[0.02] border border-white/[0.06]">
          <p className="text-[11px] uppercase tracking-wider text-neutral-500 font-sans">Pack Rating</p>
          <p className={`font-sans text-xs sm:text-sm font-semibold mt-1 truncate ${rank.color}`}>
            {rank.title}
          </p>
        </div>
      </div>
    </div>
  );
}
