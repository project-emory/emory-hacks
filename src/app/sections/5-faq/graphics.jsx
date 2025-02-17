"use client";

import Image from "next/image";

import {
  general_bg,
} from "./graphicsData";

const Graphics = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {/* BG */}
      <Image
        id="speakers-bg"
        src={general_bg}
        alt="bg"
        loading="eager"
        className="absolute z-0 w-screen"
      />
    </div>
  );
};

export default Graphics;
