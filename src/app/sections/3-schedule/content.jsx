"use client";

import Parallax from "@/app/components/parallax";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Raleway } from "next/font/google";
import { useRef, useState } from "react";

import noise from "../../../../public/noise.webp";
import data from "./data.json";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "variable",
});

const Content = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });
  const [day, setDay] = useState(1);

  return (
    <motion.div
      ref={container}
      className="absolute top-[8vw] sm:top-[12vw] right-[12.5vw] w-[75vw] z-40"
    >
      <Parallax containerRef={container} speed="sm">
        {/* TITLE */}
        <motion.h2
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-2 text-title font-bold bg-gradient-to-r from-white to-brand-tertiary text-transparent bg-clip-text drop-shadow-title"
        >
          SCHEDULE
        </motion.h2>

        {/* BODY */}
        <motion.div
          animate={{
            opacity: isInView ? 1 : 0,
            backgroundImage: `url(${noise.src})`,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`${raleway.className} p-5 md:p-10 bg-[#ffffffaa] backdrop-blur-[33px] drop-shadow-lg rounded-[16px] md:rounded-[30px] flex flex-col justify-between gap-2 md:gap-5 min-h-[400px]`}
        >
          {/* DAY */}
          <p className="font-bold text-body">
            DAY {day}
          </p>

          {/* SCHEDULE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={day.toString()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col gap-1 sm:gap-3 md:gap-5"
            >
              {data[day - 1].map((event, i) => (
                <ScheduleUnit event={event} key={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* BUTTONS */}
          <div className="flex justify-between">
            <motion.button
              onClick={() => {
                day !== 1 && setDay(day - 1);
              }}
              whileHover={{ color: "#000000" }}
              transition={{ duration: 0.3 }}
              style={{
                opacity: day === 1 ? 0 : 1,
                cursor: day === 1 ? "default" : "pointer",
              }}
              className="text-[#626262] flex gap-2 items-center font-bold text-small"
            >
              <IconArrowLeft size={20} />
              DAY {day - 1}
            </motion.button>
            <motion.button
              onClick={() => {
                day !== 3 && setDay(day + 1);
              }}
              whileHover={{ color: "#000000" }}
              transition={{ duration: 0.3 }}
              style={{
                opacity: day === 3 ? 0 : 1,
                cursor: day === 3 ? "default" : "pointer",
              }}
              className="text-[#626262] flex gap-2 items-center font-bold text-small"
            >
              DAY {day + 1}
              <IconArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </Parallax>
    </motion.div>
  );
};

const ScheduleUnit = ({ event }) => {
  return (
    <div className="border-l-2 md:border-l-4 border-white pl-2 md:pl-3">
      <p className="text-small font-medium text-[#484848] w-[80px] text-nowrap h-fit">
        {event.start}
      </p>
      <p className="flex-1 text-body font-medium text-black h-fit">
        {event.name}
      </p>
    </div>
  );
};

export default Content;
