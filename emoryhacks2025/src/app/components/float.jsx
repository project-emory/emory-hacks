"use client";

import gsap from "gsap";
import { useEffect } from "react";

const Float = ({ children }) => {
  useEffect(() => {
    gsap.to(".float", {
      duration: 1.5,
      y: 10,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);
  return <div className="float">{children}</div>;
};

export default Float;
