"use client";

import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute origin-top-left left-6 sm:left-10 md:left-[8vw] top-[120px] sm:top-[14vh] inline-block z-40"
    >
      {/* TITLE */}
      <h1 className="text-[40px] sm:text-[10vw] font-bold leading-none bg-gradient-to-tl from-white to-brand-tertiary inline-block text-transparent bg-clip-text drop-shadow-title">
        <span className="block">EMORY</span>
        <span className="block">HACKS</span>
        <span className="block">2025</span>
      </h1>

      {/* DATE */}
      <h2 className="mt-5 text-[22px] md:text-[3vw] font-bold text-white drop-shadow-title">
        MAR 21 - MAR 23
      </h2>
    </motion.div>
  );
};

export default HeroText;
