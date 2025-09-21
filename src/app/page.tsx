"use client";

import LandingSection from "@/sections/1-landing";
import AboutSection from "@/sections/2-about";
import TracksSection from "@/sections/3-tracks";
import FaqSection from "@/sections/5-faq";
import SponsorSection from "@/sections/6-sponsors";
import { memo, useEffect } from "react";

const Page = memo(() => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll({});
    })();
  }, []);

  return (
    <main>
      <LandingSection />
      <AboutSection />
      <TracksSection />
      <FaqSection />
      <SponsorSection />
    </main>
  );
});
Page.displayName = "Page";

export default Page;
