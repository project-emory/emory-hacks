"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

import noise from "../../../../public/noise.webp";
import Link from "next/link";

const Content = () => {
	const container = useRef(null);
	const isInView = useInView(container, { once: true });

	const sponsors = [
		{
			src: "/images/sponsors/hyundai.webp",
			name: "Hyundai",
			link: "https://www.hyundaiusa.com/us/en",
		},

		{
			src: "/images/sponsors/marta.webp",
			name: "Marta",
			link: "https://www.itsmarta.com/",
		},
		{
			src: "/images/sponsors/cnr.webp",
			name: "CNR",
			link: "https://cnrit.com/",
		},
		{
			src: "/images/sponsors/emorynlp.webp",
			name: "EmoryNLP",
			link: "https://www.emorynlp.org/",
		},
	];

	return (
		<div ref={container} className="w-screen px-[12.5vw] py-10 h-fit">
			<motion.h2
				animate={{
					opacity: isInView ? 1 : 0,
					y: isInView ? 0 : 20,
				}}
				transition={{ duration: 1.5, ease: "easeOut" }}
				className="mb-2 text-title font-bold bg-gradient-to-r from-white to-brand-tertiary text-transparent bg-clip-text drop-shadow-title inline-block"
			>
				SPONSORS
			</motion.h2>

			<motion.div
				animate={{ opacity: isInView ? 1 : 0 }}
				className="grid grid-cols-3 sm:grid-cols-4 gap-4 w-full"
			>
				{sponsors.map((sponsor, index) => (
					<SponsorCard key={index} src={sponsor.src} link={sponsor.link} />
				))}
			</motion.div>
		</div>
	);
};

const SponsorCard = ({ src, link }) => {
	return (
		<motion.div
			whileHover={{ backgroundColor: "#ffffffdd" }}
			style={{
				backgroundImage: `url(${noise.src})`,
			}}
			transition={{ duration: 0.3, ease: "easeOut" }}
			className="h-[15vw] sm:h-[13vw] flex items-center justify-center p-5 md:p-10 bg-[#ffffffaa] backdrop-blur-[33px] drop-shadow-lg rounded-[16px] md:rounded-[30px] cursor-pointer"
		>
			<Link href={link} target="_blank" rel="noopener noreferrer">
				<Image src={src} alt="sponsor" width={160} height={160} />
			</Link>
		</motion.div>
	);
};

export default Content;
