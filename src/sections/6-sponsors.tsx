"use client";

import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";

const graphics = [
  { src: "/graphics/6-sponsors/bg.webp", parallaxLevel: 0 },
  { src: "/graphics/6-sponsors/fg.webp", parallaxLevel: 0 },
];

const sponsors = [
  {
    src: "/images/sponsors/siro.webp",
    name: "Siro",
    link: "https://www.siro.ai/",
  },
  {
    src: "/images/sponsors/foxtrot.webp",
    name: "Foxtrot",
    link: "https://www.foxtrot-services.com/",
  },
  {
    src: "/images/sponsors/songys.webp",
    name: "Song, Youngsook(송영숙)",
    link: "https://github.com/songys",
  },
  {
    src: "/images/sponsors/oreilly.webp",
    name: "O'Reilly",
    link: "https://www.oreilly.com/",
  },
  {
    src: "/images/sponsors/bawlsguarana.webp",
    name: "Bawls",
    link: "https://www.oreillyauto.com/",
  },
  {
    src: "/images/sponsors/luckyenergy.webp",
    name: "Lucky Energy",
    link: "https://luckybevco.com/",
  },
];

type Sponsor = {
  src: string;
  name: string;
  link: string;
};

const SponsorCard = ({ src, name, link }: Sponsor) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="relative block overflow-hidden bg-white/50 rounded-xl p-4 size-20 md:size-50 backdrop-blur-2xl"
    >
      <Image
        src={src}
        alt={name}
        fill
        className="object-contain p-4 overflow-hidden"
      />
    </Link>
  );
};

const SponsorSection = () => {
  return (
    <Section graphics={graphics}>
      <h1 className="absolute top-25 text-white font-display text-shadow-2xs text-2xl md:text-6xl xl:text-8xl mb-3 border-shine">
        SPONSORS
      </h1>

      <div className="flex flex-wrap mt-40 gap-2 md:gap-4 size-full">
        {sponsors.map((sponsor, index) => (
          <SponsorCard
            key={index}
            src={sponsor.src}
            name={sponsor.name}
            link={sponsor.link}
          />
        ))}
      </div>
    </Section>
  );
};

export default SponsorSection;
