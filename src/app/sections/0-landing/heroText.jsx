"use client";

import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <motion.div className="absolute origin-top-left left-6 sm:left-10 md:left-[8vw] top-[120px] sm:top-[14vh] inline-block z-40">
      {/* TITLE */}
      <h1 className="text-[40px] sm:text-[10vw] font-bold leading-none bg-gradient-to-tl from-white to-brand-tertiary inline-block text-transparent bg-clip-text drop-shadow-title">
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
          className="block"
        >
          EMORY
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3, ease: "easeOut" }}
          className="block"
        >
          HACKS
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.6, ease: "easeOut" }}
          className="block"
        >
          2025
        </motion.span>
      </h1>

      {/* DATE */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3, ease: "easeOut" }}
        className="mt-5 text-[22px] md:text-[3vw] font-bold text-white drop-shadow-title"
      >
        MAR 21 - MAR 23
      </motion.h2>
    </motion.div>
  );
};

export default HeroText;
