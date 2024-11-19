"use client";

import ParallaxProvider from "@/app/components/parallax";
import { useRef } from "react";
import { Raleway } from "next/font/google";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import noise from "../../../../public/noise.png";
import cnr from "../../../../public/images/sponsors/cnr.png";
import emorynlp from "../../../../public/images/sponsors/emorynlp.png";
import hyundai from "../../../../public/images/sponsors/hyundai.png";
import jpmorgan from "../../../../public/images/sponsors/jpmorgan.png";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "variable",
});

const Content = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });

  return (
    <div
      ref={container}
      className="absolute top-[10vw] sm:top-[20vw] right-[15vw] sm:right-[6vw] w-[70vw] sm:w-[53vw] h-auto z-10"
    >
      <ParallaxProvider containerRef={container} speed="sm">
        {/* TITLE */}
        <motion.h1
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-2 text-title font-bold bg-gradient-to-r from-white to-brand-tertiary text-transparent bg-clip-text drop-shadow-title"
        >
          ABOUT
        </motion.h1>

        {/* BODY */}
        <motion.div
          animate={{
            opacity: isInView ? 1 : 0,
            backgroundImage: `url(${noise.src})`,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`${raleway.className} p-5 md:p-10 bg-[#ffffff88] backdrop-blur-[33px] drop-shadow-lg rounded-[16px] md:rounded-[30px]`}
        >
          <p className="text-body font-medium text-black">
            Emory Hacks, presented by PROJECT Emory, is a hackathon hosted at
            Emory University. We are committed to bringing hundreds of students
            together for an intensive 36-hour hackathon where innovation comes
            to life. Participants build cutting-edge applications, websites, and
            digital tools while learning from industry professionals through
            hands-on workshops and mentorship. Whether you&apos;re a first-time
            coder or a seasoned developer, join us to push your creative and
            technical boundaries in this dynamic weekend of building and
            collaboration.
          </p>
        </motion.div>

        {/* SPONSORS */}
        <div className="relative left-20">
          <motion.h1
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20,
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mt-4 mb-2 text-[16px] sm:text-[24px] md:text-[3vw] font-bold bg-gradient-to-r from-white to-brand-tertiary text-transparent bg-clip-text drop-shadow-title"
          >
            SPONSORED BY
          </motion.h1>

          <div className="flex flex-wrap gap-x-[50px] gap-y-[20px]">
            <Image src={jpmorgan} alt="sponsor" className="w-[10vw]" />
            <Image src={hyundai} alt="sponsor" className="w-[10vw]" />
            <Image src={cnr} alt="sponsor" className="w-[10vw]" />
            <Image src={emorynlp} alt="sponsor" className="w-[10vw]" />
          </div>
        </div>
      </ParallaxProvider>
    </div>
  );
};

export default Content;
