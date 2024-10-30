"use client";

import gsap from "gsap";
import { useEffect, useState } from "react";

const Float = ({ children }) => {
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

  useEffect(() => {
    gsap.to(".float", {
      duration: 1.5,
      y: 0.01 * windowWidth,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return <div className="float">{children}</div>;
};

export default Float;
