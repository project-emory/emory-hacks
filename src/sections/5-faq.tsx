"use client";

import Section from "@/components/section";
import { Question } from "@/components/ui/question";
import { useState } from "react";
import data from "../lib/faqData.json";

const graphics = [
  { src: "/graphics/5-faq/bg.webp", parallaxLevel: 0 },
  { src: "/graphics/5-faq/rock.webp", parallaxLevel: 0 },
];

const FaqSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(-1);

  return (
    <Section graphics={graphics}>
      <div className="mt-8 relative h-fit w-3xl mx-auto px-6 z-10">
      <h2 className="text-white font-display text-shadow-2xs text-2xl md:text-6xl xl:text-8xl md:mb-4 xl:mb-10 border-shine">
        FAQ
      </h2>

      <div
        className="text-white bg-bg/30 border-white/20 cursor-pointer backdrop-brightness-80 shadow-xl backdrop-blur-2xl p-4 md:p-6 rounded-xl space-y-2"
        // className="p-5 md:p-10 bg-background/20 backdrop-blur-2xl drop-shadow-lg rounded-xl flex flex-col gap-2 md:gap-6"
      >
        {data.map((q, i) => (
          <Question
            key={i}
            question={q.question}
            answer={q.answer}
            index={i}
            isLast={i === data.length - 1}
            activeQuestion={activeQuestion}
            setActiveQuestion={setActiveQuestion}
          />
        ))}
      </div>
    </Section>
  );
};

export default FaqSection;
