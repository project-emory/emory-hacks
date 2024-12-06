"use client";

import Image from "next/image";
import { useRef } from "react";
import Parallax from "@/app/components/parallax";
import {
  bg,
  asteroid_1,
  asteroid_2,
  asteroid_3,
  asteroid_4,
  asteroid_small_1,
  asteroid_small_2,
  asteroid_small_3,
  asteroid_small_4,
  planet,
} from "./graphicsData";
import Float from "@/app/components/float";

const Graphics = () => {
  const container = useRef(null);

  // Parallax speeds
  const distant = [asteroid_small_1, asteroid_small_2, asteroid_small_3, asteroid_small_4];
  const medium = [planet];
  const close = [asteroid_1, asteroid_2, asteroid_3, asteroid_4];

  return (
    <div
      ref={container}
      className="absolute top-0 left-0 w-full h-full"
    >
      {/* BG */}
      <Image
        id="tracks-bg"
        src={bg}
        alt="bg"
        loading="eager"
        className="absolute z-0 w-screen"
      />

      {/* GRAPHICS */}
      {distant.map((item, index) => (
        <Parallax containerRef={container} speed={"sm"} key={index}>
          <Image src={item} alt={"img"} className="w-screen" />
        </Parallax>
      ))}

      {medium.map((item, index) => (
        <Parallax containerRef={container} speed={"md"} key={index}>
          <Image src={item} alt={"img"} className="w-screen" />
        </Parallax>
      ))}

      {close.map((item, index) => (
        <Parallax containerRef={container} speed={"lg"} key={index}>
          <Image src={item} alt={"img"} className="hidden sm:block w-screen" />
        </Parallax>
      ))}
    </div>
  );
};

export default Graphics;
