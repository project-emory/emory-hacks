"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Countdown, { zeroPad } from "react-countdown";

const DDAY = "2025-11-14";

export default function Home() {
  return (
    <main className="min-h-svh">
      <div className="-z-10 rounded-full animate-pulse absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/3 size-[30vw] bg-sky-200/30 blur-3xl" />
      <div className="-z-10 rounded-full animate-pulse absolute bottom-1/2 right-1/2 translate-x-1/3 translate-y-1/3 size-[30vw] bg-lime-200/30 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-lg border p-6 rounded-2xl backdrop-blur-2xl">
        <div className="flex">
          <div className="grow">
            <h1 className="mb-4">
              Emory Hacks
              <br />
              2025 Fall
            </h1>
            <h3 className="text-muted-foreground">11/14 - 11/16</h3>
          </div>
          <div className="w-20 flex flex-col justify-between text-muted-foreground/40 text-3xl font-black text-right">
            <Countdown
              date={new Date(DDAY)}
              intervalDelay={0}
              precision={3}
              renderer={({ days, hours, minutes, seconds }) => {
                return (
                  <>
                    <p className="font-mono">{days}</p>
                    <p className="font-mono">{zeroPad(hours, 2)}</p>
                    <p className="font-mono">{zeroPad(minutes, 2)}</p>
                    <p className="font-mono">{zeroPad(seconds, 2)}</p>
                  </>
                );
              }}
            />
          </div>
        </div>
        <Button asChild size="lg" className="w-full mt-5">
          <Link href="/register">Register</Link>
        </Button>
      </div>
    </main>
  );
}
