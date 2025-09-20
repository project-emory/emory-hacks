"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

const pastSites = [
  {
    year: "2025 Spring",
    link: "https://emory-hacks-2025-spring-4xd4.onrender.com",
  },
];

const Nav = () => {
  return (
    <nav className="fixed flex h-14 items-center justify-end top-0 w-screen z-100 backdrop-blur-xl m-0 *:m-0 px-5">
      <MLHBadge />
      <DropdownMenu>
        <DropdownMenuTrigger className="text-sm flex items-center gap-2 font-mono px-2 py-1 rounded focus:outline-0 bg-primary/20">
          <span>2025 Fall</span>
          <ChevronDown size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {pastSites.map(({ year, link }, i) => (
            <Link key={i} href={link} target="_blank">
              <DropdownMenuItem className="cursor-pointer">
                {year}
                <DropdownMenuShortcut>
                  <ExternalLinkIcon />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Nav;

const MLHBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, top: -20 }}
      animate={{ opacity: 1, top: 0 }}
      transition={{ delay: 1 }}
      className="absolute left-0 size-30 md:size-40"
    >
      <Link
        id="mlh-trust-badge"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
        target="_blank"
      >
        <Image
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
          fill
          alt="Major League Hacking 2026 Hackathon Season"
        />
      </Link>
    </motion.div>
  );
};
