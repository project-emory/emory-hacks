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
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 text-primary flex flex-col items-center gap-4 font-display">
        <h1 className="text-9xl mb-5 text-shine">EMORY HACKS</h1>
        <p className="text-5xl text-shine">11/14 - 11/16</p>
        <Link
          href="https://forms.gle/zcG97BnzQRy6yLqW6"
          className="text-xl bg-white px-4 mt-4 py-3 block w-fit rounded-lg hover:opacity-80 transition-all font-semibold text-shine"
        >
          REGISTER
        </Link>
      </div>
    </Section>
  );
};

export default LandingSection;
