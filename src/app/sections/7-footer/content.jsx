"use client";

import { Raleway } from "next/font/google";
import logo from "../../../../public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "variable",
});

const Content = () => {
  return (
    <div className="absolute left-6 sm:left-8 bottom-8 sm:bottom-10 w-fit h-fit flex flex-col z-10">
      {/* LOGO */}
      <div className="size-[12vw] mb-4">
        <Image src={logo} alt="logo" />
      </div>

      {/* CONTACT */}
      <div>
        <h2 className="text-body text-white font-bold mb-2 sm:mb-4">
          CONTACT US
        </h2>
        <Link
          href={"https://www.instagram.com/emoryhacks_/"}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white text-body-small"
        >
          <motion.p
            whileHover={{
              textShadow: "0px 0px 12.1px #6EB8FF",
              fontWeight: 600,
            }}
          >
            INSTAGRAM
          </motion.p>
        </Link>
        <Link
          href={"mailto:contactprojectemory@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white text-body-small"
        >
          <motion.p
            whileHover={{
              textShadow: "0px 0px 12.1px #6EB8FF",
              fontWeight: 600,
            }}
          >
            EMAIL
          </motion.p>
        </Link>
      </div>
    </div>
  );
};

export default Content;
