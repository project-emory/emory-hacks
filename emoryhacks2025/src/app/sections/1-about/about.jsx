"use client";

import { useRef } from "react";
import Content from "./content"; // Import the Frame component
import Graphics from "./graphics";
import HeroText from "./heroText";
import Parallax from "@/app/components/parallax";

const About = () => {
  const landingRef = useRef(null);

  return (
    <section id="about">
      {/* LANDING */}
      <div
        ref={landingRef}
        className="relative h-[100vw] bg-cover bg-[url('/images/landing-bg.png')]"
      >
        {/* TITLE */}
        <Parallax speed={"xl"} containerRef={landingRef}>
          <HeroText />
        </Parallax>
      </div>
      {/* ABOUT US */}
      <div className="relative h-[100vw]">
        <Graphics />
        <Content />
      </div>
    </section>
  );
};

export default About;
