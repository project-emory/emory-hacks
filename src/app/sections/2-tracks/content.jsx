"use client";

import { useRef } from "react";
import { Raleway } from "next/font/google";
import { useInView, motion } from "framer-motion";
import noise from "../../../../public/noise.webp";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "variable",
});

const Content = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });

  return (
    <div ref={container} className="mt-[12vw] w-[75vw] h-fit mx-auto z-10">
      {/* TITLE */}
      <motion.h2
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mb-2 text-title font-bold bg-gradient-to-r from-white to-brand-tertiary text-transparent bg-clip-text drop-shadow-title"
      >
        TRACKS
      </motion.h2>

      {/* BODY */}
      {/* <motion.div
        animate={{
          opacity: isInView ? 1 : 0,
          backgroundImage: `url(${noise.src})`,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`${raleway.className} p-5 md:p-10 bg-[#ffffffaa] backdrop-blur-[33px] drop-shadow-lg rounded-[16px] md:rounded-[30px] flex flex-col gap-3 md:gap-8`}
      >

      </motion.div> */}
    </div>
  );
};

export default Content;
