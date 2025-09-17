"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const MLHBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <Link
        id="mlh-trust-badge"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
        target="_blank"
        className="fixed z-50 top-14 right-4 size-40 block"
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

export default MLHBadge;
