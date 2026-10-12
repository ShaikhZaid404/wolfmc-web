import React from "react";
import type { Metadata } from "next";
import { RulesClient } from "@/components/sections/RulesClient";

export const metadata: Metadata = {
  title: "Official Server Rules & Governance",
  description: "WolfMC official server rules, penalty protocols, combat conduct, and fair-play regulations.",
  openGraph: {
    title: "WolfMC Official Server Rules & Governance",
    description: "Review server rules, punishment guidelines, and combat regulations for WolfMC Minecraft Network (play.wolfmc.fun).",
    url: "/rules",
    siteName: "WolfMC Network",
    images: [
      {
        url: "/wolfmc.png",
        width: 1200,
        height: 630,
        alt: "WolfMC Server Rules",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WolfMC Official Server Rules & Governance",
    description: "Official server rules and fair-play conduct for WolfMC.",
    images: ["/wolfmc.png"],
  },
};

export default function RulesPage() {
  return <RulesClient />;
}
