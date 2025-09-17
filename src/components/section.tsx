"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { memo, ReactNode, RefObject, useRef } from "react";

type SectionProps = {
  children: ReactNode;
  graphics?: GraphicProps[];
};

const Section = memo(({ children, graphics }: SectionProps) => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <motion.section
      ref={container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="relative w-svw h-[80svw]"
    >
      {graphics?.map((graphic, i) => (
        <Graphic key={i} container={container} {...graphic} />
      ))}
      {children}
    </motion.section>
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
        style={{ y, z: parallaxLevel }}
        initial={{ y: parallaxLevel }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 size-full pointer-events-none"
      >
        <Image
          src={src}
          alt={src.split("/").slice(-1)[0]}
          fill
          priority={true}
          className="pointer-events-none -z-10"
        />
      </motion.div>
    );
  },
);
Graphic.displayName = "Graphic";
