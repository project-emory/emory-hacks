"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Parallax = ({ children, containerRef, speed }) => {
  // Get scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Set parallax speeds
  const speeds = {
    sm: useTransform(
      scrollYProgress,
      [0, 1],
      [0.05 * windowWidth, -0.05 * windowWidth]
    ),
    md: useTransform(
      scrollYProgress,
      [0, 1],
      [0.1 * windowWidth, -0.1 * windowWidth]
    ),
    lg: useTransform(
      scrollYProgress,
      [0, 1],
      [0.17 * windowWidth, -0.18 * windowWidth]
    ),
    xl: useTransform(
      scrollYProgress,
      [0, 1],
      [0.25 * windowWidth, -0.28 * windowWidth]
    ),
  };

  return (
    <motion.div
      style={{
        y: speeds[speed],
        zIndex:
          speed === "xl" ? 30 : speed === "lg" ? 20 : speed === "md" ? 10 : 0,
      }}
      className="absolute w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default Parallax;
