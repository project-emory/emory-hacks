"use client";

import LandingSection from "@/sections/1-landing";
import AboutSection from "@/sections/2-about";
import TracksSection from "@/sections/3-tracks";
import ScheduleSection from "@/sections/4-schedule";
import FaqSection from "@/sections/5-faq";
import SponsorsSection from "@/sections/6-sponsors";
import Link from "next/link";
import { memo } from "react";

const Page = memo(() => {
  return (
    <main className="relative">
      <LandingSection />
      <AboutSection />
      <TracksSection />
      <ScheduleSection />
      <FaqSection />
      <SponsorsSection />
      <div className="absolute bottom-0 left-0 w-full hidden md:flex h-40 items-center justify-center">
        <Link
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
          target="_blank"
          className="text-white underline"
        >
          MLH Code of Conduct
        </Link>
      </div>
    </main>
  );
});
Page.displayName = "Page";

export default Page;
