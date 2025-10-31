import Section from "@/components/section";
import data from "@/lib/speakers.json";
import Image from "next/image";

const graphics = [{ src: "/graphics/5-speakers/bg.webp", parallaxLevel: 0 }];

const SpeakersSection = () => {
  return (
    <Section graphics={graphics}>
      <h2 className="text-white font-display text-shadow-2xs text-2xl md:text-6xl xl:text-8xl md:mb-4 xl:mb-10 border-shine">
        SPEAKERS
      </h2>

      <div className="flex flex-row lg:flex-wrap my-6 w-full overflow-x-scroll">
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
  return (
    <div className="flex flex-col w-[90%] p-2 max-lg:max-w-100 shrink-0 gap-8 lg:basis-1/2 xl:basis-1/4">
      <div className="w-full aspect-square shrink-0 grow-0 bg-white/30 rounded-xl overflow-hidden relative">
        <Image src={img} alt={name} fill className="object-cover" />
      </div>
      <div className="space-y-4 text-white">
        <h3 className="text-lg md:text-xl">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
