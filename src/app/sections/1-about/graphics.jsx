"use client";

import Image from "next/image";
import { useRef } from "react";
import Parallax from "@/app/components/parallax";
import {
  bg,
  cloud_br,
  cloud_tl,
  planet_br_1,
  planet_br_2,
  planet_tr,
  planet_bl,
  ufo,
} from "./graphicsData";
import Float from "@/app/components/float";

const Graphics = () => {
  const container = useRef(null);

  // Parallax speeds
  const distant = [cloud_tl, planet_br_2, planet_tr];
  const medium = [cloud_br];
  const close = [, /*planet_br_1*/ planet_bl];

  return (
    <div
      ref={container}
      className="absolute top-0 left-0 w-full h-full"
    >
      {/* BG */}
      <Image
        id="about-bg"
        src={bg}
        alt="bg"
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

      <Parallax containerRef={container} speed={"xl"}>
        <Float x={0.01} y={0.03}>
          <Image src={ufo} alt="ufo" className="w-screen" />
        </Float>
      </Parallax>
    </div>
  );
};

export default Graphics;
