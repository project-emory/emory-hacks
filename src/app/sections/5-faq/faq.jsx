"use client";

import Graphics, { TransitionLeft, TransitionRight } from "./graphics";

const FAQ = () => {
  return (
    <section id="faq" className="relative">
      {/* FAQ */}
      <div className="relative h-[100vw]">
        <Graphics />
      </div>
      {/* TRANSITION LEFT */}
      <div className="relative h-[60vw]">
        <TransitionLeft />
      </div>
      {/* TRANSITION RIGHT */}
      <div className="relative h-[60vw]">
        <TransitionRight />
      </div>
    </section>
  );
};

export default FAQ;
