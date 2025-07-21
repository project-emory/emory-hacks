import { fonts } from "@/components/fonts";
import Nav from "@/components/nav";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import "./globals.css";

const fontVariables = Object.entries(fonts)
  .map(([, v]) => v.variable)
  .join(" ");

export const metadata: Metadata = {
  title: "Emory Hacks 2026",
  description: "Get ready for Emory Hacks 2026!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontVariables} antialiased`}>
        <Nav />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
