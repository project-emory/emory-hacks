import { DM_Sans, Fascinate, Inconsolata } from "next/font/google";

const sans = DM_Sans({
  variable: "--font-sans",
  weight: "variable",
  subsets: ["latin"],
});

const mono = Inconsolata({
  variable: "--font-mono",
  weight: "variable",
  subsets: ["latin"],
});

const display = Fascinate({
  variable: "--font-display",
  weight: ["400"],
  subsets: ["latin"],
});

export const fonts = {
  sans,
  mono,
  display,
};
