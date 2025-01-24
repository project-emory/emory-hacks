"use client";

import { useEffect, useMemo, useState } from "react";
import noise from "../../../public/noise.webp";
import { motion } from "framer-motion";
import Link from "next/link";
import Float from "./float";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const Timer = () => {
  const targetDate = new Date("March 21, 2025 00:00:00").getTime();
  const [isHovered, setIsHovered] = useState(false);
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = useMemo(() => {
    if (!mounted) return "";

    const timeLeft = targetDate - time.getTime();
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = String(
      Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    const seconds = String(
      Math.floor((timeLeft % (1000 * 60)) / 1000)
    ).padStart(2, "0");

    return `${days} : ${hours} : ${minutes} : ${seconds}`;
  }, [time, mounted, targetDate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      className="hidden md:block fixed bottom-6 right-6 z-40"
    >
      {/* TIMER */}
      <div
        style={{
          backgroundImage: `url(${noise.src})`,
        }}
        className="absolute right-0 bottom-0 w-fit h-[48px] overflow-hidden bg-[#ffffffaa] backdrop-blur-[33px] drop-shadow-lg rounded-2xl"
      >
        <div className="w-fit h-full text-body font-bold text-brand-primary text-nowrap text-center flex items-center pl-4 pr-[70px]">
          {formattedTime}
        </div>
      </div>

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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="p-3 backdrop-blur-md rounded-2xl w-fit h-fit bg-[#ffffffcc] drop-shadow-lg text-brand-primary"
        >
          <Float rotate={false} y={isHovered ? 0.004 : 0} duration={0.6}>
            <RocketLaunchIcon />
          </Float>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Timer;
