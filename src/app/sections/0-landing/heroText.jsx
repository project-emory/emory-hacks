"use client";

import { easeOut, motion } from "framer-motion";
import CountdownTimer from "@/app/components/timerComponent";

const HeroText = () => {
  return (
    <motion.div className="absolute origin-top-left left-6 sm:left-10 md:left-[8vw] top-[120px] sm:top-[14vh] inline-block z-40 w-auto">
      {/* TITLE */}
      <h1 className="text-[40px] sm:text-[10vw] font-bold leading-none drop-shadow-title w-full">
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
        className="mt-5 text-[22px] sm:text-[28px] md:text-[36px] font-bold text-white drop-shadow-title"
      >
        MAR 21 - MAR 23
      </motion.h2>

      {/* TIMER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3.3, ease: easeOut }}
        className="mt-4 sm:mt-5 mx-auto p-5 bg-white/20 backdrop-blur-md rounded-lg shadow-md"
        style={{ maxWidth: "calc(10vw * 5)" }} // Ensures width matches the title
      >
        <CountdownTimer
          fontSize="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px]"
          labelFontSize="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroText;
