"use client";

import Content from "./content";
import Graphics, { TransitionLeft, TransitionRight } from "./graphics";

const FAQ = () => {
  return (
    <section id="faq">
      {/* FAQ */}
      <div className="relative h-fit py-[10vw] content-center overflow-hidden">
        <Graphics />
        <Content />
      </div>
      {/* TRANSITION LEFT */}
      <div className="relative h-[60vw] overflow-hidden">
        <TransitionLeft />
      </div>
      {/* TRANSITION RIGHT */}
      <div className="relative h-[60vw] overflow-hidden">
        <TransitionRight />
      </div>
    </section>
  );
};

export default FAQ;
