"use client";

import LandingSection from "@/sections/1-landing";
import AboutSection from "@/sections/2-about";
import TracksSection from "@/sections/3-tracks";
import ScheduleSection from "@/sections/4-schedule";
import FaqSection from "@/sections/5-faq";
import SponsorSection from "@/sections/6-sponsors";
import { memo } from "react";

const Page = memo(() => {
  return (
    <main>
      <LandingSection />
      <AboutSection />
      <TracksSection />
      <ScheduleSection />
      <FaqSection />
      <SponsorSection />
    </main>
  );
});
Page.displayName = "Page";

export default Page;
