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
import { motion } from "framer-motion";

const Graphics = () => {
  const container = useRef(null);

  // Parallax speeds
  const distant = [cloud_tl, planet_br_2, planet_tr];
  const medium = [cloud_br];
  const close = [planet_br_1, planet_bl];

  return (
    <div ref={container} className="absolute top-0 left-0 w-full h-full">
      {/* BG */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Image
          id="about-bg"
          src={bg}
          alt="bg"
          priority={true}
          quality={80}
          className="absolute z-0 w-screen"
        />
      </motion.div>

      {/* GRAPHICS */}
      {distant.map((item, index) => (
        <Parallax containerRef={container} speed={"sm"} key={index}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            quality={60}
          >
            <Image src={item} alt={"img"} className="w-screen" />
          </motion.div>
        </Parallax>
      ))}

      {medium.map((item, index) => (
        <Parallax containerRef={container} speed={"md"} key={index}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image src={item} alt={"img"} className="w-screen" quality={65} />
          </motion.div>
        </Parallax>
      ))}

      {close.map((item, index) => (
        <Parallax containerRef={container} speed={"lg"} key={index}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image
              src={item}
              alt={"img"}
              quality={70}
              className="hidden sm:block w-screen"
            />
          </motion.div>
        </Parallax>
      ))}

      <Parallax containerRef={container} speed={"xl"}>
        <Float x={0.01} y={0.03}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image
              src={ufo}
              alt="ufo"
              quality={80}
              className="hidden sm:block w-screen"
            />
          </motion.div>
        </Float>
      </Parallax>
    </div>
  );
};

export default Graphics;
