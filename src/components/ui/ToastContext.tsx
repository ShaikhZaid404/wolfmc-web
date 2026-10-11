"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, Copy, Info } from "lucide-react";

interface Toast {
  id: string;
  title: string;
  message?: string;
  icon?: "check" | "copy" | "info";
}

interface ToastContextType {
  showToast: (title: string, message?: string, icon?: "check" | "copy" | "info") => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((title: string, message?: string, icon: "check" | "copy" | "info" = "check") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, message, icon }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast Notification Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none max-w-sm w-full px-4 sm:px-0">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl glass-panel bg-neutral-900/80 border border-purple-500/30 text-neutral-100 shadow-2xl shadow-purple-950/30 animate-in fade-in slide-in-from-bottom-4 duration-300 backdrop-blur-xl"
          >
            <div className="p-1 rounded-lg bg-purple-500/10 text-purple-400 shrink-0 mt-0.5">
              {toast.icon === "copy" ? (
                <Copy className="w-4 h-4" />
              ) : toast.icon === "info" ? (
                <Info className="w-4 h-4" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold tracking-wide text-neutral-100 font-sans">{toast.title}</p>
              {toast.message && (
                <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed font-sans">{toast.message}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
