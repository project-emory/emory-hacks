"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Float = ({ children, rotate = true, x = 0, y = 0, duration = 1.5 }) => {
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

  // Random number between 0.01 and 0.03
  const random = (min, max) => Math.random() * (max - min) + min;

  // Float animation
  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        rotation: rotate ? -1 : 0,
        x: -x * windowWidth,
        y: -y * windowWidth,
      },
      {
        rotation: rotate ? 1 : 0,
        x: x * windowWidth,
        y: y * windowWidth,
        duration: random(duration * 0.9, duration * 1.1),
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      }
    );
  }, [windowWidth, duration, x, y, rotate]);

  return (
    <div ref={ref} className="origin-center">
      {children}
    </div>
  );
};

export default Float;
