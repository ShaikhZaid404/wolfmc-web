import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Gamemodes } from "@/components/sections/Gamemodes";
import { Stats } from "@/components/sections/Stats";
import { HowToJoin } from "@/components/sections/HowToJoin";
import { Community } from "@/components/sections/Community";
import { InteractiveLab } from "@/components/sections/InteractiveLab";
import { StaffSection } from "@/components/sections/StaffSection";
import { VoteSection } from "@/components/sections/VoteSection";
import { StoreTeaser } from "@/components/sections/StoreTeaser";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0 w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Network Features */}
      <Features />

      {/* 3. Featured Gamemodes */}
      <Gamemodes />

      {/* 4. Live Stats & Diagnostic Console */}
      <Stats />

      {/* 5. Interactive Lab: CPS, Hearts, Skins */}
      <InteractiveLab />

      {/* 6. Step-by-Step Join Instructions */}
      <HowToJoin />

      {/* 7. Community & Discord Banner */}
      <Community />

      {/* 8. Staff Leadership Roster */}
      <StaffSection />

      {/* 9. Daily Voting Rewards */}
      <VoteSection />

      {/* 10. Webstore Teaser */}
      <StoreTeaser />
    </div>
  );
}
