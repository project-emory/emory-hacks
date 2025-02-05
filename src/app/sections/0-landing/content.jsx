"use client";

import { easeOut, motion, useInView } from "framer-motion";

const Content = () => {
  return (
    <div className="absolute left-[8vw] top-[120px] sm:top-[14vh] xl:top-[100px] inline-block z-40">
      {/* TITLE */}
      <h1 className="text-[40px] sm:text-[8vw] font-bold leading-none drop-shadow-title">
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1.01, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: easeOut }}
          className="block text-gradient"
        >
          EMORY
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3, ease: easeOut }}
          className="block text-gradient"
        >
          HACKS
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.6, ease: easeOut }}
          className="block text-gradient"
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
    </div>
  );
};

export default Content;
