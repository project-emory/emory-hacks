"use client";

import { motion, useInView } from "framer-motion";
import { Raleway } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

import noise from "../../../../public/noise.webp";
import data from "./data.json";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "variable",
});

const Content = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });

  return (
    <div ref={container} className="w-[75vw] h-fit mx-auto z-10">
      {/* TITLE */}
      <motion.h2
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mb-2 text-title font-bold bg-gradient-to-r from-white to-brand-tertiary text-transparent bg-clip-text drop-shadow-title"
      >
        GUEST SPEAKERS
      </motion.h2>

      {/* BODY */}
      <motion.div
        animate={{
          opacity: isInView ? 1 : 0,
          backgroundImage: `url(${noise.src})`,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`${raleway.className} p-5 md:p-10 bg-[#ffffffaa] backdrop-blur-[33px] drop-shadow-lg rounded-[16px] md:rounded-[30px] flex flex-col gap-3 md:gap-8`}
      >
        {data.map((speaker, i) => (
          <Speaker key={i} speaker={speaker} isLast={i === data.length - 1} />
        ))}
      </motion.div>
    </div>
  );
};

const Speaker = ({ speaker, isLast }) => {
  return (
    <>
      <div className="flex gap-3 md:gap-8 md:items-center">
        {/* PROFILE */}
        <div className="rounded-xl md:rounded-2xl size-[14vw] relative overflow-hidden">
          <Image src={speaker.image} alt="speaker" fill />
        </div>

        {/* DESCRIPTION */}
        <div className="flex-1">
          <p className="text-body font-bold md:mb-1">{speaker.name}</p>
          <p className="text-small text-[#484848] mb-2 md:mb-4">
            {speaker.title}
          </p>
          <p className="text-body-small">{speaker.bio}</p>
        </div>
      </div>

      {/* DIVIDER */}
      {!isLast && <div className="bg-[#808080] h-[1px] w-full" />}
    </>
  );
};

export default Content;
