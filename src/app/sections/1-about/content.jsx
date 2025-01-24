"use client";

import Parallax from "@/app/components/parallax";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import noise from "../../../../public/noise.webp";
import { raleway } from "@/app/page";

const Content = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });

  return (
    <motion.div
      ref={container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute top-[10vw] sm:top-[20vw] right-[15vw] sm:right-[6vw] w-[70vw] sm:w-[53vw] h-auto z-10"
    >
      <Parallax containerRef={container} speed="sm">
        {/* TITLE */}
        <motion.h2
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-2 text-title font-bold bg-gradient-to-r from-white to-brand-tertiary text-transparent bg-clip-text drop-shadow-title"
        >
          ABOUT
        </motion.h2>

        {/* BODY */}
        <motion.div
          animate={{
            opacity: isInView ? 1 : 0,
            backgroundImage: `url(${noise.src})`,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`${raleway.className} p-5 md:p-10 bg-[#ffffffaa] backdrop-blur-[33px] drop-shadow-lg rounded-[16px] md:rounded-[30px]`}
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
      </Parallax>
    </motion.div>
  );
};

export default Content;
