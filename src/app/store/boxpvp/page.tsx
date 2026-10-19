import React from "react";
import type { Metadata } from "next";
import { BoxPvPStoreClient } from "@/components/store/BoxPvPStoreClient";

export const metadata: Metadata = {
  title: "BoxPvP Store — WOLF MC",
  description: "Official BoxPvP store for WOLF MC — play.wolfmc.fun. VIP, MVP, Wolf ranks, Halloween limited editions, and crate keys.",
  openGraph: {
    title: "BoxPvP Store — WOLF MC",
    description: "BoxPvP ranks and crate keys for WOLF MC's box arenas on play.wolfmc.fun.",
    url: "/store/boxpvp",
    siteName: "WolfMC Network",
    images: [{ url: "/wolfmc.png", width: 1200, height: 630, alt: "WolfMC BoxPvP Store" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BoxPvP Store — WOLF MC",
    description: "BoxPvP ranks and crate keys for WOLF MC.",
    images: ["/wolfmc.png"],
  },
};

export default function BoxPvPStorePage() {
  return <BoxPvPStoreClient />;
}
