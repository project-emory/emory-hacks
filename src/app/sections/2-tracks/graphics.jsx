"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Parallax from "@/app/components/parallax";
import {
  bg,
  asteroid_1,
  asteroid_2,
  asteroid_3,
  asteroid_4,
  asteroid_1_cropped,
  asteroid_2_cropped,
  asteroid_3_cropped,
  asteroid_4_cropped,
  asteroid_small_1,
  asteroid_small_2,
  asteroid_small_3,
  asteroid_small_4,
  planet,
} from "./graphicsData";
import { AnimatePresence, motion } from "framer-motion";

const Graphics = () => {
  const container = useRef(null);

  // Parallax speeds
  const distant = [
    asteroid_small_1,
    asteroid_small_2,
    asteroid_small_3,
    asteroid_small_4,
  ];
  const medium = [planet];

  const [track, setTrack] = useState(-1);

  return (
    <div ref={container} className="absolute top-0 left-0 w-full h-full">
      {/* BG */}
      <Image
        id="tracks-bg"
        src={bg}
        alt="bg"
        loading="eager"
        className="absolute z-0 w-screen"
      />

      {/* GRAPHICS */}
      {distant.map((item, index) => (
        <Parallax containerRef={container} speed={"sm"} key={index}>
          <Image src={item} alt={"img"} className="w-screen" />
        </Parallax>
      ))}

      {medium.map((item, index) => (
        <Parallax containerRef={container} speed={"md"} key={index}>
          <Image src={item} alt={"img"} className="w-screen" />
        </Parallax>
      ))}

      <Parallax containerRef={container} speed={"lg"} fillContainer={false}>
        <motion.div
          whileHover={{ scale: 1.05, origin: 0.5 }}
          onMouseEnter={() => setTrack(0)}
          onMouseLeave={() => setTrack(-1)}
          className="w-[27vw] absolute left-[53vw] top-[5vw] origin-center cursor-pointer place-items-center"
        >
          <Image src={asteroid_1_cropped} alt="asteroid" />
          <div className="absolute left-0 top-0 size-full flex items-center justify-center">
            <h3 className="h-fit w-2/3 text-body text-center font-bold text-white">
              Accessible Communication Technologies
            </h3>
          </div>
          <AnimatePresence>
            {track === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute h-full w-[53vw] top-0 -left-[53vw] pl-[7vw] pr-[5vw] flex flex-col justify-center bg-gradient-to-r from-bg to-transparent"
              >
                <h4 className="text-body-small text-white font-bold">
                  Develop tools that make communication easier for people with
                  disabilities, such as speech-to-text applications, sign
                  language translators, or eye-tracking communication devices.
                </h4>
                <ul className="mt-2 text-body-small text-white list-disc list-inside">
                  <li>Help disabled people</li>
                  <li>Make technology more accessible</li>
                  <li>
                    Help others in some way, some way to make people’s lives
                    easier
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Parallax>

      <Parallax containerRef={container} speed={"lg"} fillContainer={false}>
        <motion.div
          whileHover={{ scale: 1.05, origin: 0.5 }}
          onMouseEnter={() => setTrack(1)}
          onMouseLeave={() => setTrack(-1)}
          className="w-[31vw] absolute left-[15vw] top-[37vw] origin-center cursor-pointer place-items-center"
        >
          <Image src={asteroid_2_cropped} alt="asteroid" />
          <div className="absolute left-0 top-0 size-full flex items-center justify-center">
            <h3 className="h-fit w-2/3 text-body text-center font-bold text-white">
              Communication in Healthcare
            </h3>
          </div>
          <AnimatePresence>
            {track === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute h-full w-[54vw] top-0 left-[31vw] pl-[5vw] pr-[7vw] flex flex-col justify-center bg-gradient-to-l from-bg to-transparent"
              >
                <h4 className="text-body-small text-white font-bold">
                  Build systems that streamline communication between patients
                  and healthcare providers, such as telemedicine platforms or
                  appointment scheduling apps.
                </h4>
                <ul className="mt-2 text-body-small text-white list-disc list-inside">
                  <li>Improving patient quality of life</li>
                  <li>Improving efficiency of medical workers</li>
                  <li>Responding to emergencies</li>
                  <li>
                    Potentially making it easier to understand insurance
                    policies
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Parallax>

      <Parallax containerRef={container} speed={"lg"} fillContainer={false}>
        <motion.div
          whileHover={{ scale: 1.05, origin: 0.5 }}
          onMouseEnter={() => setTrack(2)}
          onMouseLeave={() => setTrack(-1)}
          className="w-[30vw] absolute left-[18vw] top-[58vw] origin-center cursor-pointer place-items-center"
        >
          <Image src={asteroid_3_cropped} alt="asteroid" />
          <div className="absolute left-0 top-0 size-full flex items-center justify-center">
            <h3 className="h-fit relative top-[3vw] -left-[2vw] w-1/2 text-body text-center font-bold text-white">
              Communication Platforms for Education
            </h3>
          </div>
          <AnimatePresence>
            {track === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute h-full w-[52vw] top-0 left-[31vw] pl-[5vw] pr-[7vw] flex flex-col justify-center bg-gradient-to-l from-bg to-transparent"
              >
                <h4 className="text-body-small text-white font-bold">
                  Build specialized platforms that facilitate communication
                  among students, teachers, and parents, enhancing the
                  educational experience.
                </h4>
                <ul className="mt-2 text-body-small text-white list-disc list-inside">
                  <li>More accessibility in educational materials</li>
                  <li>Provide a unique learning experience</li>
                  <li>Develop a new methodology or way to teach</li>
                  <li>Provide tools that could assist in learning</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Parallax>

      <Parallax containerRef={container} speed={"lg"} fillContainer={false}>
        <motion.div
          whileHover={{ scale: 1.05, origin: 0.5 }}
          onMouseEnter={() => setTrack(3)}
          onMouseLeave={() => setTrack(-1)}
          className="w-[35vw] absolute left-[60vw] top-[83vw] origin-center cursor-pointer place-items-center"
        >
          <Image src={asteroid_4_cropped} alt="asteroid" />
          <div className="absolute left-0 top-0 size-full flex items-center justify-center">
            <h3 className="h-fit relative top-[3vw] w-1/2 text-body text-center font-bold text-white">
              Rogue Track
            </h3>
          </div>
          <AnimatePresence>
            {track === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute h-full w-[60vw] top-0 -left-[60vw] pl-[7vw] pr-[5vw] flex flex-col justify-center bg-gradient-to-r from-bg to-transparent"
              >
                <h4 className="text-body-small text-white font-bold">
                  You Decide!
                </h4>
                <ul className="mt-2 text-body-small text-white list-disc list-inside">
                  <li>
                    If the projects do not fit in any of the tracks above, this
                    is the track for you
                  </li>
                  <li>
                    Should still be centered around the theme of communication,
                    but can be applied to any field
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Parallax>
    </div>
  );
};

export default Graphics;
