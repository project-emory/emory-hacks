import { fonts } from "@/components/fonts";
import Nav from "@/components/nav";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import "./globals.css";

const fontVariables = Object.entries(fonts)
  .map(([, v]) => v.variable)
  .join(" ");

const TITLE = "Emory Hacks" as const;
const DESCRIPTION =
  "Join us for Emory Hacks, a 36-hour hackathon at Emory University where innovation comes to life.";
const KEYWORDS = [
  "emory hacks",
  "hackathon",
  "emory university",
  "coding",
  "programming",
  "innovation",
  "emory hackathon",
  "atlanta",
  "emory university",
  "emory",
  "software",
  "contest",
  "competition",
  "atlanta hackathon",
  "atl hackathon",
  "atlanta coding",
  "computer science",
  "atlanta",
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.emoryhacks.com",
    siteName: TITLE,
    images: [
      {
        url: "https://www.emoryhacks.com/logo.png",
        width: 800,
        height: 800,
        alt: "Emory Hacks",
      },
    ],
    locale: "en_us",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontVariables} font-sans antialiased bg-bg overflow-x-hidden`}>
        <Nav />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
