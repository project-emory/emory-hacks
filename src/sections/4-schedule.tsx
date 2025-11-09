"use client";

import Section from "@/components/section";
import data from "@/lib/schedule.json";
import { useState } from "react";
import { motion } from "motion/react";

const graphics = [
  { src: "/graphics/4-schedule/bg.webp", parallaxLevel: 0 },
  { src: "/graphics/4-schedule/rock.webp", parallaxLevel: 0 },
  { src: "/graphics/4-schedule/fish.webp", parallaxLevel: 10, top: "-20%" },
];

const ScheduleSection = () => {
  const [currDay, setCurrDay] = useState(0);
  const day = data[currDay];

  return (
    <Section graphics={graphics}>
      <h2 className="text-white font-display text-shadow-2xs text-2xl md:text-6xl xl:text-8xl mb-4 xl:mb-16 border-shine sm:mt-12 md:mt-24 lg:mt-32">
        SCHEDULE
      </h2>

      <div className="sm:w-2/5">
        <div className="text-white text-lg xl:text-2xl font-semibold mb-4 flex gap-4 xl:gap-6">
          {data.map((d, i) => (
            <button
              key={i}
              data-current={i === currDay}
              onClick={() => setCurrDay(i)}
              className="data-[current=true]:border-shine data-[current=false]:opacity-50 transition-all uppercase"
            >
              {d.day}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-1 md:gap-2 xl:gap-3 bg-bg/30 backdrop-blur-xl rounded-xl border-white p-4">
          {day.events?.map((item: Event, j) => (
            <ScheduleItem key={j} {...item} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ScheduleSection;

type Event = {
  time: string;
  description: string;
};

const ScheduleItem = (event: Event) => {
  return (
    <motion.div
      key={event.description}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut" }}
      className="text-white space-x-4 font-medium xl:text-xl"
    >
      <span className="font-mono inline-block">{event.time}</span>
      <span>{event.description}</span>
    </motion.div>
  );
};
