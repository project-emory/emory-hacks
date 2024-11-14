"use client";

import Image from "next/image";
import { useRef } from "react";
import Parallax from "@/app/components/parallax";
import {
  asteroid,
  astronaut,
  bg,
  cloud_bl,
  cloud_r,
  dog,
  planet_bl,
  planet_br_1,
  planet_br_2,
  rocket,
} from "./graphicsData";
import Float from "@/app/components/float";

const Graphics = () => {
  const container = useRef(null);

  // Parallax speeds
  const distant = [planet_br_1, cloud_r, cloud_bl];
  const medium = [planet_br_2, asteroid];
  const close = [planet_bl];

  return (
    <div
      ref={container}
      className="absolute top-0 left-0 w-full h-full bg-black"
    >
      {/* BG */}
      <Float duration={8}>
        <Image
          id="landing-bg"
          src={bg}
          alt="bg"
          className="absolute z-0 scale-105"
        />
      </Float>

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

      <Parallax containerRef={container} speed={"md"}>
        <Float>
          <Image src={dog} alt="dog" />
        </Float>
      </Parallax>

      <Parallax containerRef={container} speed={"md"}>
        <Float>
          <Image src={astronaut} alt="'astronaut'" />
        </Float>
      </Parallax>

      {close.map((item, index) => (
        <Parallax containerRef={container} speed={"lg"} key={index}>
          <Image
            key={index}
            src={item}
            alt={"img"}
            className="hidden sm:block"
          />
        </Parallax>
      ))}

      <Parallax containerRef={container} speed={"lg"}>
        {/* <Float y={0.002} duration={0.3}> */}
          <Image src={rocket} alt="rocket" />
        {/* </Float> */}
      </Parallax>
    </div>
  );
};

export default Graphics;
