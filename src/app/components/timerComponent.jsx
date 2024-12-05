"use client";

import { useState, useEffect } from "react";

const CountdownTimer = ({ fontSize = "text-[18px]", labelFontSize = "text-[14px]" }) => {
  const targetDate = new Date("March 21, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  return (
    <div className="flex justify-center gap-4">
      {Object.entries(timeLeft).map(([label, value], index) => (
        <div key={index} className="flex flex-col items-center">
          <p className={`${fontSize} font-bold text-white`}>{value}</p>
          <span className={`${labelFontSize} font-medium text-white/80`}>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;