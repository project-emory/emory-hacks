"use client";

import { Raleway } from "next/font/google";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "variable",
});

const Content = () => {
  return (
    <div className="absolute bottom-0 w-screen px-6 sm:px-10 py-8 sm:py-12 h-fit flex justify-between items-center z-10">
      {/* LOGO */}
      <div className="size-[12vw]">
        <Image src={logo} alt="logo" />
      </div>

      {/* CONTACT */}
      <div>
        <h2 className="text-body text-white font-bold mb-2 sm:mb-4">
          CONTACT US
        </h2>
        <Link
          href={"https://www.instagram.com/emoryhacks_/"}
          className="block text-right text-white text-body-small"
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
          href={"contactprojectemory@gmail.com"}
          className="block text-right text-white text-body-small"
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
