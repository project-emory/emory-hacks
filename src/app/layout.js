import { Suspense } from "react";
import SmoothScrolling from "./components/smoothScrolling";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Loading from "./loading";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "variable",
});

export const metadata = {
  title: "Emory Hacks 2025",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} antialiased w-screen overflow-x-hidden bg-[#24155C]`}
      >
        <Suspense fallback={<Loading />}>
          <SmoothScrolling>{children}</SmoothScrolling>
        </Suspense>
      </body>
    </html>
  );
}
