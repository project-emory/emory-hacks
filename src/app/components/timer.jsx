"use client";

import { useEffect, useRef, useState } from "react";
import noise from "../../../public/noise.png";
import { AnimatePresence, motion } from "framer-motion";
import { IconRocket } from "@tabler/icons-react";
import Link from "next/link";

const Timer = () => {
  const targetDate = new Date("March 21, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  const [isHovered, setIsHovered] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = calculateTimeLeft();
      setTimeLeft(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const ms = {
      day: 1000 * 60 * 60 * 24,
      hour: 1000 * 60 * 60,
      minute: 1000 * 60,
      second: 1000,
    };

    return {
      days: Math.floor(difference / ms.day),
      hours: Math.floor((difference % ms.day) / ms.hour),
      minutes: Math.floor((difference % ms.hour) / ms.minute),
      seconds: Math.floor((difference % ms.minute) / ms.second),
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      className="hidden md:block fixed bottom-6 right-6 z-40"
    >
      {/* TIMER */}
      <motion.div
        animate={{
          width: isHovered ? "auto" : 56,
          opacity: isHovered ? 1 : 0,
        }}
        style={{
          backgroundImage: `url(${noise.src})`,
        }}
        className="absolute right-0 bottom-0 flex items-center w-fit h-[56px] overflow-hidden bg-[#ffffffaa] backdrop-blur-[33px] drop-shadow-lg rounded-2xl"
      >
        <div className="inline-flex gap-2 py-3 pl-4 pr-16">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <TimeDisplay
              key={unit}
              unit={unit}
              value={value}
              isHovered={isHovered}
            />
          ))}
        </div>
      </motion.div>

      {/* BUTTON */}
      <Link
        href="https://lu.ma/i3zb0h5t"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-0 bottom-0"
      >
        <motion.div
          whileHover={{
            background: "#ffffffff",
            boxShadow: "0px 0px 12.1px #6EB8FF",
          }}
          className="p-3 backdrop-blur-md rounded-2xl w-fit h-fit bg-[#ffffffcc] drop-shadow-lg"
        >
          <IconRocket size={32} className="text-brand-primary" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

const TimeDisplay = ({ unit, value, isHovered }) => {
  const delay =
    unit === "days"
      ? 0.3
      : unit === "hours"
      ? 0.35
      : unit === "minutes"
      ? 0.4
      : 0.45;

  return (
    <>
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 40 }}
        transition={{ delay: delay }}
        className="w-[30px] text-body text-center font-bold text-brand-secondary"
      >
        <span>{value}</span>
      </motion.div>
      <motion.span
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 40 }}
        transition={{ delay: delay }}
        className="text-body font-bold text-brand-tertiary"
      >
        {unit !== "seconds" && ":"}
      </motion.span>
    </>
  );
};

export default Timer;
