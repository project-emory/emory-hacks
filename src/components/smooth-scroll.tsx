"use client";

import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll({});
    })();
  }, []);

  return null;
};

export default SmoothScroll;
