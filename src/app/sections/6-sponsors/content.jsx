"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import cnr from "../../../../public/images/sponsors/cnr.png";
import emorynlp from "../../../../public/images/sponsors/emorynlp.png";
import hyundai from "../../../../public/images/sponsors/hyundai.png";
import jpmorgan from "../../../../public/images/sponsors/jpmorgan.png";
import noise from "../../../../public/noise.png";
import Link from "next/link";

const Content = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });

  const sponsors = [
    {
      src: jpmorgan,
      name: "JPMorganChase",
      link: "https://www.jpmorganchase.com/",
    },
    { src: hyundai, name: "Hyundai", link: "https://www.hyundaiusa.com/us/en" },
    { src: cnr, name: "CNR", link: "" },
    { src: emorynlp, name: "EmoryNLP", link: "https://www.emorynlp.org/" },
  ];

  return (
    <div ref={container} className="w-fit mx-auto">
      <motion.h1
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mb-2 text-title font-bold bg-gradient-to-r from-white to-brand-tertiary text-transparent bg-clip-text drop-shadow-title inline-block"
      >
        SPONSORS
      </motion.h1>

      <motion.div
        animate={{ opacity: isInView ? 1 : 0 }}
        className="flex gap-[3vw] w-fit"
      >
        {sponsors.map((sponsor, index) => (
          <SponsorCard
            key={index}
            src={sponsor.src}
            link={sponsor.link}
          />
        ))}
      </motion.div>
    </div>
  );
};

const SponsorCard = ({ src, link }) => {
	console.log(link);
  return (
    <motion.div
      whileHover={{ backgroundColor: "#ffffffdd" }}
      style={{
        backgroundImage: `url(${noise.src})`,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-[17vw] h-[13vw] flex items-center justify-center p-5 md:p-10 bg-[#ffffff88] backdrop-blur-[33px] drop-shadow-lg rounded-[16px] md:rounded-[30px] cursor-pointer"
    >
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <Image src={src} alt="sponsor" width={160} />
      </Link>
    </motion.div>
  );
};

export default Content;
