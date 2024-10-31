"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Float = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const ref = useRef(null);

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

  // Float animation
  useEffect(() => {
    gsap.to(ref.current, {
      rotation: 2,
      y: 0.032 * windowWidth,
      x: 0.015 * windowWidth,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, [windowWidth]);

  return <div ref={ref} className="origin-center">{children}</div>;
};

export default Float;
