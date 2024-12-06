"use client";

import Image from "next/image";
import { useRef } from "react";
import Parallax from "@/app/components/parallax";
import {
  bg,
  alien_l,
  alien_r,
  comet_c,
  comet_l,
  comet_r,
  transition_bg,
  transition_cloud_l,
  transition_cloud_r,
} from "./graphicsData";
import { useInView, motion } from "framer-motion";

const Graphics = () => {
  const container = useRef(null);

  // Parallax speeds
  const distant = [comet_r, comet_l, comet_c];
  const medium = [alien_r];
  const close = [alien_l];

  return (
    <div
      ref={container}
      className="absolute top-0 left-0 w-full h-full"
    >
      {/* BG */}
      <Image
        id="schedule-bg"
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
          <Image src={item} alt={"img"} className="w-screen" />
        </Parallax>
      ))}
    </div>
  );
};

export const TransitionGraphics = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });

  // Parallax speeds
  return (
    <div
      ref={container}
      className="absolute top-0 left-0 w-full h-full"
    >
      {/* BG */}
      <Image
        id="transition-schedule-bg"
        src={transition_bg}
        alt="bg"
        className="absolute z-0 w-screen"
      />

      {/* GRAPHICS */}
      <motion.div
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : -100,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Parallax containerRef={container} speed={"sm"}>
          <Image src={transition_cloud_l} alt={"img"} className="w-screen" />
        </Parallax>
      </motion.div>

      <motion.div
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : 100,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Parallax containerRef={container} speed={"md"}>
          <Image src={transition_cloud_r} alt={"img"} className="w-screen" />
        </Parallax>
      </motion.div>
    </div>
  );
};

export default Graphics;
