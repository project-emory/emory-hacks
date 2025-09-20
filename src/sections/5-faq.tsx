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
      <div className="mt-8 relative h-fit w-lg mx-auto px-6 z-10">
        <h2 className="mb-2 text-title font-bold bg-gradient-to-r from-white to-brand-tertiary text-transparent bg-clip-text drop-shadow-title">
          FAQ
        </h2>

        <div
          className={`p-5 md:p-10 bg-background/20 backdrop-blur-2xl drop-shadow-lg rounded-xl flex flex-col gap-2 md:gap-6`}
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
      </div>
    </Section>
  );
};

export default FaqSection;
