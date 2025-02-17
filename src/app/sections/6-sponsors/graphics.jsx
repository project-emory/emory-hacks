"use client";

import Parallax from "@/app/components/parallax";
import {motion, useInView} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { transition_l_bg, transition_l_cloud, transition_r_bg, transition_r_cloud } from "./graphicsData";

const Graphics = () => {
  return (
    <div className="w-full h-fit">
      <TransitionLeft />
      <TransitionRight />
    </div>
  );
};

export const TransitionLeft = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });

  // Parallax speeds
  return (
    <div ref={container} className="h-[60vw]">
      {/* BG */}
      <Image
        src={transition_l_bg}
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
          <Image src={transition_l_cloud} alt={"img"} className="w-screen" />
        </Parallax>
      </motion.div>
    </div>
  );
};

export const TransitionRight = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });

  // Parallax speeds
  return (
    <div ref={container} className="h-[60vw]">
      {/* BG */}
      <Image src={transition_r_bg} alt="bg" className="absolute z-0 w-screen" />

      {/* GRAPHICS */}
      <motion.div
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : 100,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Parallax containerRef={container} speed={"sm"}>
          <Image src={transition_r_cloud} alt={"img"} className="w-screen" />
        </Parallax>
      </motion.div>
    </div>
  );
};

export default Graphics;
