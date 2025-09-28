"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { memo, ReactNode, RefObject, useEffect, useRef, useState } from "react";

type SectionProps = {
  children: ReactNode;
  graphics?: GraphicProps[];
};

const Section = memo(({ children, graphics }: SectionProps) => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="relative w-svw min-h-[80svw] xl:h-[80svw] overflow-hidden"
    >
      {graphics?.map((graphic, i) => (
        <Graphic key={i} container={container} {...graphic} />
      ))}
      <div className="relative z-40 size-full md:pt-10 xl:pt-25 mx-auto w-9/10 md:w-4/5 pt-4">
        {children}
      </div>
    </motion.div>
  );
});
Section.displayName = "Section";

export default Section;

type GraphicProps = {
  src: string;
  parallaxLevel: number;
};

const PARRALAX_INTENSITY = 10;

const Graphic = memo(
  ({
    src,
    container,
    parallaxLevel,
  }: GraphicProps & {
    container: RefObject<HTMLDivElement | null>;
  }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      checkIsMobile();
      window.addEventListener("resize", checkIsMobile);
      return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
    });

    const y = useTransform(
      scrollYProgress,
      [0, 1],
      [PARRALAX_INTENSITY * parallaxLevel, -PARRALAX_INTENSITY * parallaxLevel],
    );

    return (
      <motion.div
        style={{ y: isMobile ? 0 : y, zIndex: parallaxLevel }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 size-full pointer-events-none"
      >
        <Image
          src={src}
          alt={src.split("/").slice(-1)[0]}
          quality={70}
          fill
          priority
          loading="eager"
          className="pointer-events-none -z-10"
        />
      </motion.div>
    );
  },
);
Graphic.displayName = "Graphic";
