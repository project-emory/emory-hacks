"use client";

import { useRef } from "react";
import Content from "./content";
import Parallax from "@/app/components/parallax";
import Graphics from "./graphics";

const Landing = () => {
  const landingRef = useRef(null);

  return (
    <div ref={landingRef} className="relative h-[106vw] overflow-hidden">
      <Graphics />
      {/* TITLE */}
      <Parallax speed={"xl"} containerRef={landingRef}>
        <Content />
      </Parallax>
    </div>
  );
};

export default Landing;
