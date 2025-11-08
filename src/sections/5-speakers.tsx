"use client";

import Section from "@/components/section";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import data from "@/lib/speakers.json";
import Image from "next/image";
import { useState } from "react";

const graphics = [{ src: "/graphics/5-speakers/bg.webp", parallaxLevel: 0 }];

const SpeakersSection = () => {
  return (
    <Section graphics={graphics}>
      <h2 className="text-white font-display text-shadow-2xs text-2xl md:text-6xl xl:text-8xl md:mb-4 xl:mb-10 border-shine">
        SPEAKERS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 my-6 w-full">
        {data.map((speaker, i) => (
          <Speaker key={i} {...speaker} />
        ))}
      </div>
    </Section>
  );
};

export default SpeakersSection;

type SpeakerProps = {
  name: string;
  description: string;
  img: string;
};

const Speaker = ({ name, description, img }: SpeakerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="hover:-translate-y-2 transition-all">
          <div className="w-full aspect-square shrink-0 grow-0 bg-white/30 rounded-xl overflow-hidden relative">
            <Image src={img} alt={name} fill className="object-cover" />
          </div>
          <span className="text-white block font-medium mt-2 text-lg md:text-xl">
            {name}
          </span>
        </div>
      </DialogTrigger>

      <DialogContent className="bg-bg/30 border-white/10 backdrop-blur-xl text-white">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
