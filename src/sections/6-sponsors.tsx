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
    src: "/images/sponsors/sgk.webp",
    name: "SGK International",
    link: "",
    tier: 1,
  },
  {
    src: "/images/sponsors/emorynlp.webp",
    name: "Emory NLP",
    link: "https://www.emorynlp.org/",
    tier: 1,
  },
  {
    src: "/images/sponsors/siro.webp",
    name: "Siro",
    link: "https://www.siro.ai/",
    tier: 2,
  },
  {
    src: "/images/sponsors/foxtrot.webp",
    name: "Foxtrot",
    link: "https://www.foxtrot-services.com/",
    tier: 2,
  },
  {
    src: "/images/sponsors/songys.webp",
    name: "Song, Youngsook(송영숙)",
    link: "https://github.com/songys",
    tier: 2,
  },
  {
    src: "/images/sponsors/oreilly.webp",
    name: "O'Reilly",
    link: "https://www.oreilly.com/",
    tier: 3,
  },
  {
    src: "/images/sponsors/bawlsguarana.webp",
    name: "Bawls",
    link: "https://www.oreillyauto.com/",
    tier: 3,
  },
  {
    src: "/images/sponsors/luckyenergy.webp",
    name: "Lucky Energy",
    link: "https://luckybevco.com/",
    tier: 3,
  },
  {
    src: "/images/sponsors/vectus.webp",
    name: "Vectus AI",
    link: "https://tryvectus.ai/",
    tier: 3,
  },
];

type Sponsor = {
  src: string;
  name: string;
  link: string;
  tier: number;
};

const sizeClasses = {
  1: "size-24 sm:size-32 md:size-40 xl:size-58",
  2: "size-20 sm:size-28 md:size-36 xl:size-52",
  3: "size-16 sm:size-24 md:size-32 xl:size-46",
};

const SponsorCard = ({ src, name, link, tier }: Sponsor) => {
  const classes = sizeClasses[tier as keyof typeof sizeClasses];

  return (
    <Link
      href={link}
      target="_blank"
      className={`border-none relative block overflow-hidden rounded-lg bg-white/40 backdrop-blur-sm ${classes} transition-all duration-300`}
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
  const sponsorsByTier = {
    1: sponsors.filter((s) => s.tier === 1),
    2: sponsors.filter((s) => s.tier === 2),
    3: sponsors.filter((s) => s.tier === 3),
  };

  return (
    <Section graphics={graphics}>
      <h1 className="absolute top-5 md:top-10 xl:top-20 left-1/2 -translate-x-1/2 text-white font-display text-shadow-2xs text-2xl md:text-6xl xl:text-8xl mb-3 border-shine">
        SPONSORS
      </h1>

      <div className="flex flex-col mt-15 mb-10 md:mt-20 xl:mt-30 gap-6 md:gap-8 w-full">
        {Object.entries(sponsorsByTier).map(([tier, tierSponsors]) => {
          return tierSponsors.length > 0 ? (
            <div key={tier} className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                {tierSponsors.map((sponsor, index) => (
                  <SponsorCard
                    key={index}
                    src={sponsor.src}
                    name={sponsor.name}
                    link={sponsor.link}
                    tier={sponsor.tier}
                  />
                ))}
              </div>
            </div>
          ) : null;
        })}
      </div>
    </Section>
  );
};

export default SponsorSection;
