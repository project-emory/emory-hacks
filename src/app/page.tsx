import SmoothScroll from "@/components/smooth-scroll";
import LandingSection from "@/sections/1-landing";
import AboutSection from "@/sections/2-about";
import TracksSection from "@/sections/3-tracks";
import FaqSection from "@/sections/5-faq";
import { memo } from "react";

const Page = memo(() => {
  return (
    <main>
      <SmoothScroll />
      <LandingSection />
      <AboutSection />
      <TracksSection />
      <FaqSection />
    </main>
  );
});
Page.displayName = "Page";

export default Page;
