import { Funnel_Display, Inconsolata, DM_Sans } from "next/font/google";

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

const display = Funnel_Display({
	variable: "--font-display",
	weight: "variable",
	subsets: ["latin"],
});

export const fonts = {
	sans,
	mono,
	display,
};
