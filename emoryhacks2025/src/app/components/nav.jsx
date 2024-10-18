"use client";

import Link from "next/link"; // Import the Link component
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollToPlugin);

const Nav = () => {
  const sections = ["about", "tracks", "schedule", "faq", "sponsors"];
  const [currSection, setCurrSection] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    top: 75,
  });

  // Update the indicator style as currSection changes
  useEffect(() => {
    if (currSection) {
      const rect = currSection.current.getBoundingClientRect();
      setIndicatorStyle((prev) => ({
        ...prev,
        opacity: 1,
        left: rect.left,
        width: rect.width,
      }));
    }
  }, [currSection]);

  return (
    <nav className="fixed w-screen flex justify-between py-6 top-0 px-10 z-50 bg-gradient-to-b from-[#221980ff] to-[#22198000]">
      <div className="size-16 bg-neutral-200"></div>

      {/* INDICATOR BAR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={indicatorStyle}
        transition={{ opacity: { delay: 1 } }}
        className="bg-white h-1 w-10 fixed"
      />

      <ul className="flex items-center gap-10">
        {sections.map((name, i) => (
          <NavItem name={name} setCurrSection={setCurrSection} key={i} />
        ))}

        <ApplyButton />
      </ul>
    </nav>
  );
};

const NavItem = ({ name, setCurrSection }) => {
  // Scroll to corresponding section on click
  const handleClick = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: `#${name}`,
      ease: "power2.inOut",
    });
  };

  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  useEffect(() => {
    sectionRef.current = document.getElementById(name);
  });

  useEffect(() => {
    if (isInView) {
      setCurrSection(ref);
    }
  }, [isInView]);

  return (
    <motion.li
      ref={ref}
      animate={{ color: isInView ? "#ffffff" : "#c1c1c1" }}
      whileHover={{
        textShadow: "0px 0px 12.1px #6EB8FF",
        color: "#ffffff",
      }}
      onClick={() => handleClick()}
      className="text-[22px] text-white font-bold cursor-pointer leading-tight"
    >
      {name.toUpperCase()}
    </motion.li>
  );
};

const ApplyButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="https://lu.ma/i3zb0h5t"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center px-4 py-2 bg-white rounded-lg border border-white overflow-hidden"
    >
      <motion.div
        animate={{ width: isHovered ? "100%" : "0%" }}
        className="absolute left-0 h-full bg-brand-primary z-0"
      />
      <motion.span
        animate={{ color: isHovered ? "#ffffff" : "#314cc2" }}
        className="relative leading-tight text-[22px] font-bold text-brand-primary z-10"
      >
        APPLY
      </motion.span>
    </Link>
  );
};

export default Nav;
