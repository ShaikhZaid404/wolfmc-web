"use client";

import { useState, useEffect } from "react";

export interface ServerStatusData {
  online: boolean;
  players: {
    online: number;
    max: number;
  };
  motd: {
    clean: string;
    html: string;
  };
  version: string;
  ip: string;
  bedrockPort: number;
}

const defaultStatus: ServerStatusData = {
  online: true,
  players: {
    online: 60,
    max: 4444,
  },
  motd: {
    clean: "WOLFMC [1.20 - 1.21.11] ➥ BoxPvP New Season Released",
    html: "<span><span style=\"color:#ff55ff;font-weight:bold;\">WOLF</span><span style=\"color:#ffffff;font-weight:bold;\">MC</span> <span style=\"color:#aaaaaa;\">[1.20 - 1.21.11]</span> <span style=\"color:#55ffff;\">➥ BoxPvP New Season Released</span></span>",
  },
  version: "1.21.11",
  ip: "play.wolfmc.fun",
  bedrockPort: 19299,
};

export function useServerStatus() {
  const [status, setStatus] = useState<ServerStatusData>(defaultStatus);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchStatus() {
      try {
        const res = await fetch("/api/status", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            setStatus(data);
            setLoading(false);
          }
        }
      } catch (err) {
        // Keep existing status silently without interrupting UI or showing errors
        if (isMounted) setLoading(false);
      }
    }

    fetchStatus();
    // Silent background poll every 5 minutes (300,000ms) with zero UI interruption or timestamps
    const interval = setInterval(fetchStatus, 5 * 60 * 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return { status, loading };
}
