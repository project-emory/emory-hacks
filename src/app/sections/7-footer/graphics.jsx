"use client";

import Parallax from "@/app/components/parallax";
import Image from "next/image";
import { useRef } from "react";

import { bg, clouds, rocket } from "./graphicsData";

const Graphics = () => {
  const container = useRef(null);

  // Parallax speeds

  const medium = [rocket, clouds];

  return (
    <div ref={container} className="absolute top-0 left-0 w-full h-full">
      {/* BG */}
      <Image
        id="footer-bg"
        src={bg}
        alt="bg"
        loading="eager"
        className="absolute z-0 w-screen"
      />

      {/* GRAPHICS */}
      {medium.map((item, index) => (
        <Parallax containerRef={container} speed={"md"} key={index}>
          <Image src={item} alt={"img"} className="w-screen" />
        </Parallax>
      ))}
    </div>
  );
};

export default Graphics;
