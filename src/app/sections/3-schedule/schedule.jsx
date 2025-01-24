"use client";

import Content from "./content";
import Graphics, { TransitionGraphics } from "./graphics";

const Schedule = () => {
  return (
    <section id="schedule">
      {/* SCHEDULE */}
      <div className="relative h-[85vw]">
        <Graphics />
        <Content />
      </div>

      {/* TRANSITION */}
      <div className="relative h-[68vw] overflow-hidden">
        <TransitionGraphics />
      </div>
    </section>
  );
};

export default Schedule;
