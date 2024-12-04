"use client";

import { easeOut, motion } from "framer-motion";
import CountdownTimer from "@/app/components/timerComponent";

const HeroText = () => {
  return (
    <motion.div className="absolute origin-top-left left-6 sm:left-10 md:left-[8vw] top-[120px] sm:top-[14vh] inline-block z-40">
      {/* TITLE */}
      <h1 className="text-[40px] sm:text-[10vw] font-bold leading-none drop-shadow-title">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1.01, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: easeOut }}
          className="block text-gradient"
        >
          EMORY
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3, ease: easeOut }}
          className="block text-gradient"
        >
          HACKS
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.6, ease: easeOut }}
          className="block text-gradient"
        >
          2025
        </motion.div>
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

      {/* TIMER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3.3, ease: easeOut }}
        className="mt-3 w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto p-2 bg-white/20 backdrop-blur-md rounded-lg shadow-md"
      >
        <CountdownTimer />
      </motion.div>
    </motion.div>
  );
};

export default HeroText;
