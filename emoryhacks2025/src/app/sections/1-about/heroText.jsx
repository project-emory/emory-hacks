"use client";

const HeroText = () => {
  return (
    <div className="absolute mx-[61px] md:mx-[8vw] mt-[92px] md:mt-[12vw] inline-block z-40">
      {/* TITLE */}
      <h1 className="text-[75px] md:text-[10vw] font-bold leading-none bg-gradient-to-tl from-white to-brand-tertiary inline-block text-transparent bg-clip-text drop-shadow-lg">
        <span className="block">EMORY</span>
        <span className="block">HACKS</span>
        <span className="block">2025</span>
      </h1>

      {/* DATE */}
      <h2 className="relative z-40 mt-5 text-[22px] md:text-[3vw] font-bold text-white drop-shadow-lg">
        MAR 21 - MAR 23
      </h2>
    </div>
  );
};

export default HeroText;
