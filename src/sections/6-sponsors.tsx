"use client";

import Section from "@/components/section";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

const graphics = [
  { src: "/graphics/6-sponsors/bg.webp", parallaxLevel: 0 },
  { src: "/graphics/6-sponsors/fg.webp", parallaxLevel: 5 },
  { src: "/graphics/6-sponsors/starfish-bl.webp", parallaxLevel: 5 },
  { src: "/graphics/6-sponsors/starfish-coral.webp", parallaxLevel: 5 },
];

const sponsors = [
  {
    src: "/images/sponsors/siro.webp",
    name: "Siro",
    link: "https://www.siro.ai/",
  },

  {
    src: "/images/sponsors/foxtrot.webp",
    name: "Foxtrot",
    link: "https://foxtrotco.com/",
  },
  {
    src: "/images/sponsors/songys.webp",
    name: "Song, Youngsook(송영숙)",
    link: "https://github.com/songys",
  },
  {
    src: "/images/sponsors/oreilly.webp",
    name: "O'Reilly",
    link: "https://www.oreillyauto.com/",
  },
];

type Sponsor = {
  src: string;
  name: string;
  link: string;
};

const SponsorCard = ({ src, name, link }: Sponsor) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <motion.div
        whileHover={{ backgroundColor: "#ffffffdd", scale: 1.02 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="h-[15vw] sm:h-[13vw] flex items-center justify-center p-5 md:p-10
                   bg-[#ffffffaa] backdrop-blur-[33px] drop-shadow-lg
                   rounded-[16px] md:rounded-[30px] outline-none
                   focus-visible:ring-2 focus-visible:ring-white/70"
      >
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={name}
            fill
            sizes="(min-width:1280px) 12vw, (min-width:640px) 18vw, 28vw"
            className="object-contain"
            priority={false}
          />
        </div>
      </motion.div>
    </Link>
  );
};

const SponsorSection = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });
  return (
    <Section graphics={graphics}>
      <div
        ref={container}
        className="w-screen px-[12.5vw] py-10 h-fit mt-[20vh] md:mt-[32vh]"
      >
        <h1 className="absolute top-25 text-white font-display text-shadow-2xs text-2xl md:text-6xl xl:text-8xl mb-3 border-shine">
          SPONSORS
        </h1>

        <motion.div
          animate={{ opacity: isInView ? 1 : 0 }}
          className="grid grid-cols-3 sm:grid-cols-4 gap-4 w-full"
        >
          {sponsors.map((sponsor, index) => (
            <SponsorCard
              key={index}
              src={sponsor.src}
              name={sponsor.name}
              link={sponsor.link}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default SponsorSection;
