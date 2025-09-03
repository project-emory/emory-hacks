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
    <div ref={container} className="relative w-svw h-[80svw]">
      {graphics?.map((graphic, i) => (
        <Graphic key={i} container={container} order={i} {...graphic} />
      ))}
      {children}
    </div>
  );
});
Section.displayName = "Section";

export default Section;

type GraphicProps = {
  src: string;
};

const PARRALAX_INTENSITY = 50;

const Graphic = memo(
  ({
    src,
    container,
    order,
  }: GraphicProps & {
    container: RefObject<HTMLDivElement | null>;
    order: number;
  }) => {
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
    });

    console.log(scrollYProgress);

    const y = useTransform(
      scrollYProgress,
      [0, 1],
      [PARRALAX_INTENSITY * order, -PARRALAX_INTENSITY * order],
    );

    return (
      <motion.div style={{ y }} className="absolute top-[] left-0 size-full">
        <Image
          src={src}
          alt={src.split("/").slice(-1)[0]}
          fill
          className="pointer-events-none -z-10"
        />
      </motion.div>
    );
  },
);
Graphic.displayName = "Graphic";
