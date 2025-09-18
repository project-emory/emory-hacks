import Section from "@/components/section";
import Link from "next/link";

// Graphics to be used in the section.
// Add the path to the image in the src field
// and pass it to the Section component
// The Section component will handle the rest
// of the logic for displaying the graphics.
// The order of the graphics in the array matters.
// The first graphic will be the farthest from the viewer
// and the last graphic will be the closest to the viewer.
// So naturally, the background should be the first graphic.
const graphics = [
  { src: "/graphics/1-landing/bg.webp", parallaxLevel: 0 },
  { src: "/graphics/1-landing/coral-l.webp", parallaxLevel: 0 },
  { src: "/graphics/1-landing/coral-r.webp", parallaxLevel: 0 },
  { src: "/graphics/1-landing/fish-l.webp", parallaxLevel: 10 },
  { src: "/graphics/1-landing/turtle.webp", parallaxLevel: 20 },
];

const LandingSection = () => {
  return (
    <Section graphics={graphics}>
      <div className="absolute top-[20%] left-1/2 text-nowrap w-fit -translate-x-1/2 text-center text-primary flex flex-col items-center">
        <span className="text-3xl font-semibold font-display">2025 FALL</span>
        <h1 className="text-6xl md:text-9xl xl:text-[160px] mb-5 bg-clip-text bg-[url(/graphics/1-landing/bg.webp)] bg-blend-difference border-shine text-transparent font-display leading-none">
          EMORY HACKS
          <span className="absolute text-primary/50 top-0 left-0 font-display pointer-events-none">EMORY HACKS</span>
        </h1>
        <p className="text-5xl border-shine my-5 font-display font-medium">
          11/14 - 11/16
        </p>
        <Link
          href="https://forms.gle/zcG97BnzQRy6yLqW6"
          className="text-3xl bg-white px-4 mt-4 py-3 block w-fit rounded-lg transition-all font-semibold hover:border-shine"
        >
          REGISTER
        </Link>
      </div>
    </Section>
  );
};

export default LandingSection;
