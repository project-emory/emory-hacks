"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Parallax = ({ children, containerRef, speed }) => {
  // Get scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [windowWidth, setWindowWidth] = useState(0);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
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
      [0.07 * windowWidth, -0.07 * windowWidth]
    ),
    md: useTransform(
      scrollYProgress,
      [0, 1],
      [0.12 * windowWidth, -0.12 * windowWidth]
    ),
    lg: useTransform(
      scrollYProgress,
      [0, 1],
      [0.2 * windowWidth, -0.2 * windowWidth]
    ),
    xl: useTransform(
      scrollYProgress,
      [0, 1],
      [0.3 * windowWidth, -0.3 * windowWidth]
    ),
  };

  return (
    <motion.div
      style={{
        y: speeds[speed],
        zIndex:
          speed === "xl" ? 30 : speed === "lg" ? 20 : speed === "md" ? 10 : 0,
      }}
      className="absolute"
    >
      {children}
    </motion.div>
  );
};

export default Parallax;
