"use client";

import Section from "@/components/section";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const graphics = [
  { src: "/graphics/3-tracks/bg.webp", parallaxLevel: 0 },
  { src: "/graphics/3-tracks/jellyfish-tr.webp", parallaxLevel: 0 },
  { src: "/graphics/3-tracks/jellyfish-tl.webp", parallaxLevel: 15 },
  { src: "/graphics/3-tracks/jellyfish-bl.webp", parallaxLevel: 25 },
];

const tracks = {
  "healthcare":
    "Develop innovative solutions to improve patient care, streamline medical processes, or enhance health outcomes using technology. Projects could include telemedicine platforms, health monitoring apps, medical data analysis tools, or accessibility solution for healthcare.",
  "education":
    "Build tools and platforms that transform learning experiences and educational access. Create solutions for online learning, student engagement, educational games, tutoring systems, or tools that help educators and students succeed.",
  "smart city":
    "Design technology solutions for urban challenges and community improvement. Develop apps or systems for transportation, sustainability, public safety, civic engagement, or making city services more efficient and accessible to residents.",
};

const TracksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <Section graphics={graphics}>
      <h1 className="absolute top-25 left-16 text-white font-display text-shadow-2xs text-2xl md:text-6xl xl:text-8xl mb-3">
        TRACKS
      </h1>
      <div
        ref={ref}
        className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%]"
      >
        {Object.entries(tracks).map(([track, description]) => (
          <motion.div
            key={track}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ delay: 0.3 }}
            className="text-white bg-bg/30 backdrop-brightness-80 shadow-xl backdrop-blur-2xl p-5 rounded-xl max-w-120"
          >
            <span className="text-xl md:text-3xl font-bold block mb-4">
              {track.toUpperCase()}
            </span>
            <p className="text-base md:text-lg block">{description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default TracksSection;
