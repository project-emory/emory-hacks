"use client";

import Content from "./content";
import Graphics from "./graphics";

const Sponsors = () => {
  return (
    <section id="sponsors" className="relative h-fit content-center overflow-hidden">
      <Graphics />
      <div className="absolute top-[30vw] left-0">
        <Content />
      </div>
    </section>
  );
};

export default Sponsors;
