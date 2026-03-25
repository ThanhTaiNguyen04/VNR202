"use client"

import type React from "react"
import HeroSection from "@/components/vietnam/hero-section"
import QuoteSection from "@/components/vietnam/quote-section"
import EconomicGrowthSection from "@/components/vietnam/economic-growth-section"
import EconomicStructureSection from "@/components/vietnam/economic-structure-section"
import SocialAchievementsSection from "@/components/vietnam/social-achievements-section"
import InternationalIntegrationSection from "@/components/vietnam/international-integration-section"
import ChallengesSection from "@/components/vietnam/challenges-section"
import MemoryGameSection from "@/components/vietnam/memory-game-section"
import AIUsageSection from "@/components/vietnam/ai-usage-section"
import FooterSection from "@/components/vietnam/footer-section"

export default function VietnamDevelopmentPage() {
  return (
    <div className="w-full min-h-screen relative bg-[#FAFAF8] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1200px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(185,28,28,0.12)] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(185,28,28,0.12)] z-0"></div>

          <HeroSection />
          <QuoteSection />
          <EconomicGrowthSection />
          <EconomicStructureSection />
          <SocialAchievementsSection />
          <InternationalIntegrationSection />
          <ChallengesSection />
          <AIUsageSection />
          <MemoryGameSection />
          <FooterSection />
        </div>
      </div>
    </div>
  )
}
