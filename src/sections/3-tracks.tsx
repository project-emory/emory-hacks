"use client";

import Section from "@/components/section";
import { useState } from "react";
import { motion } from "motion/react";

const graphics = [
  { src: "/graphics/3-tracks/bg.webp", parallaxLevel: 0 },
  { src: "/graphics/3-tracks/jellyfish-tr.webp", parallaxLevel: 0 },
  { src: "/graphics/3-tracks/jellyfish-tl.webp", parallaxLevel: 15 },
  { src: "/graphics/3-tracks/jellyfish-bl.webp", parallaxLevel: 25 },
];

const tracks = {
  healthcare:
    "Develop innovative solutions to improve patient care, streamline medical processes, or enhance health outcomes using technology. Projects could include telemedicine platforms, health monitoring apps, medical data analysis tools, or accessibility solution for healthcare.",
  education:
    "Build tools and platforms that transform learning experiences and educational access. Create solutions for online learning, student engagement, educational games, tutoring systems, or tools that help educators and students succeed.",
  "smart city":
    "Design technology solutions for urban challenges and community improvement. Develop apps or systems for transportation, sustainability, public safety, civic engagement, or making city services more efficient and accessible to residents.",
};

const TracksSection = () => {
  const [expanded, setExpanded] = useState("");

  return (
    <Section graphics={graphics}>
      <h2 className="text-white font-display text-shadow-2xs text-2xl md:text-6xl xl:text-8xl md:mb-4 xl:mb-10 border-shine">
        TRACKS
      </h2>
      <div className="relative z-40 grid gap-3 md:gap-5 md:grid-cols-2 xl:grid-cols-3 py-4">
        {Object.entries(tracks).map(([track, description]) => (
          <div
            key={track}
            onClick={() => setExpanded((prev) => (prev === track ? "" : track))}
            className="text-white bg-bg/30 border-white/20 hover:border-shine transition-all cursor-pointer backdrop-brightness-80 shadow-xl backdrop-blur-2xl p-4 md:p-6 rounded-xl"
          >
            <span className="text-base md:text-2xl xl:text-3xl font-bold block">
              {track.toUpperCase()}
            </span>
            <motion.p
              animate={
                expanded === track
                  ? {
                      height: "auto",
                      paddingTop: "16px",
                    }
                  : { height: 0, paddingTop: 0 }
              }
              className="text-sm md:h-auto! md:p-4! xl:text-base md:text-lg block overflow-hidden"
            >
              {description}
            </motion.p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TracksSection;
