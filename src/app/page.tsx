import LandingSection from "@/sections/1-landing";
import FaqSection from "@/sections/5-faq";
import { memo } from "react";

const Page = memo(() => {
  return (
    <main className="pt-14">
      <LandingSection />
      <FaqSection />
    </main>
  );
});
Page.displayName = "Page";

export default Page;
