import LandingSection from "@/sections/1-landing";
import AboutSection from "@/sections/2-about";
import FaqSection from "@/sections/5-faq";
import { memo } from "react";

const Page = memo(() => {
  return (
    <main>
      <LandingSection />
      <AboutSection />
      <FaqSection />
    </main>
  );
});
Page.displayName = "Page";

export default Page;
