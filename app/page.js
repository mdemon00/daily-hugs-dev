"use client";

import BrandAmbassador from "@/components/Sections/BrandAmbassador";
import CustomerReviews from "@/components/Sections/CustomerReviews";
import DailyDoseOfRomance from "@/components/Sections/DailyDoseOfRomance";
import HeroSection from "@/components/Sections/HeroSection";
import OurBouquet from "@/components/Sections/OurBouquet";
import RespectEarth from "@/components/Sections/RespectEarth";
import SendSteps from "@/components/Sections/SendSteps";
import TikTok from "@/components/Sections/TikTok";
import SubscriptionPopup from "/components/SubscriptionPopup";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(true);

  const handleCloseSubscription = () => {
    setIsSubscriptionOpen(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsSubscriptionOpen(false);
    }, 10000); // Close after 5 seconds (adjust the time as needed)

    return () => clearTimeout(timeoutId);
  }, [isSubscriptionOpen]);

  return (
    <main className="flex min-h-screen flex-col">
      {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}

      <HeroSection />
      <OurBouquet />
      <CustomerReviews />
      <SendSteps />
      <RespectEarth />
      <BrandAmbassador />
      <DailyDoseOfRomance />
      <TikTok />
      <SubscriptionPopup
        isOpen={isSubscriptionOpen}
        onClose={handleCloseSubscription}
      />
    </main>
  );
}
