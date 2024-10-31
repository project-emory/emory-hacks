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
  const close = [planet_br_1, planet_bl];

  return (
    <div
      ref={container}
      className="absolute top-0 left-0 w-full h-full bg-black"
    >
      {/* BG */}
      <Image src={bg} alt="bg" className="absolute z-0" />

      {/* GRAPHICS */}
      {distant.map((item, index) => (
        <Parallax containerRef={container} speed={"sm"} key={index}>
          <Image key={index} src={item} alt={"img"} />
        </Parallax>
      ))}

      {medium.map((item, index) => (
        <Parallax containerRef={container} speed={"md"} key={index}>
          <Image key={index} src={item} alt={"img"} />
        </Parallax>
      ))}

      {close.map((item, index) => (
        <Parallax containerRef={container} speed={"lg"} key={index}>
          <Image key={index} src={item} alt={"img"} />
        </Parallax>
      ))}

      <Parallax containerRef={container} speed={"xl"}>
        <Float>
          <Image src={ufo} alt="ufo" />
        </Float>
      </Parallax>
    </div>
  );
};

export default Graphics;
