"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import "moment-precise-range-plugin";

import { addRow } from "@/lib/google-sheets";

const DDAY = "2026-03-11";

export default function Home() {
  useEffect(() => {
    const add = async () => {
      await addRow(["hello", new Date().toISOString()]);
    };
    add();
  }, []);

  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <div className="-z-10 rounded-full animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[30vw] bg-sky-200/50 blur-3xl" />
      <div className="text-center space-y-2">
        <h1>Emory Hacks 2026</h1>
        <Countdown />
      </div>
    </main>
  );
}

const Countdown = () => {
  const [remaining, setRemaining] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const today = moment();
      const dday = moment(DDAY);
      // @ts-expect-error: moment.preciseDiff is not typed
      const diff = moment.preciseDiff(dday, today);
      setRemaining(diff);
    };

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p className="font-mono">{remaining}</p>;
};
