import Section from "@/components/section";
import Link from "next/link";

const graphics = [
  { src: "/graphics/6-sponsors/bg.webp", parallaxLevel: 0 },
  { src: "/graphics/6-sponsors/fg.webp", parallaxLevel: 0 },
  // { src: "/graphics/6-sponsors/starfish-bl.webp", parallaxLevel: 15 },
  // { src: "/graphics/6-sponsors/starfish-coral.webp", parallaxLevel: 20 },
];

const SponsorSection = () => {
  return (
    <Section graphics={graphics}>
      <h2 className="text-white font-display text-shadow-2xs text-2xl md:text-6xl xl:text-8xl mb-0 md:mb-4 xl:mb-10 border-shine">
        SPONSORS
      </h2>

      <div className="absolute bottom-0 left-0 w-full hidden md:flex h-40 items-center justify-center">
        <Link
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
          target="_blank"
          className="text-white underline"
        >
          MLH Code of Conduct
        </Link>
      </div>
    </Section>
  );
};

export default SponsorSection;
