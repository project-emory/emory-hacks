"use client";

import Image from "next/image";
import { useRef } from "react";
import Parallax from "@/app/components/parallax";

import Float from "@/app/components/float";
import { motion } from "framer-motion";

const Graphics = () => {
	const container = useRef(null);

	// Parallax speeds
	const distant = ["/2025/images/landing/planet_br_1.webp"];
	const medium = ["/2025/images/landing/planet_br_2.webp"];
	const close = ["/2025/images/landing/planet_bl.webp"];

	return (
		<div ref={container} className="absolute top-0 left-0 w-full h-full">
			{/* BG */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
				className="absolute z-0 w-screen h-screen"
			>
				<Image
					id="landing-bg"
					src="/2025/images/landing/bg.webp"
					alt="bg"
					fill
				/>
			</motion.div>

			{/* GRAPHICS */}
			{distant.map((item, index) => (
				<Parallax containerRef={container} speed={"sm"} key={index}>
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
						className="w-screen h-screen relative"
					>
						<Image src={item} alt={"img"} quality={60} fill />
					</motion.div>
				</Parallax>
			))}

			{/* RIGHT CLOUD */}
			<Parallax containerRef={container} speed={"sm"}>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
					className="w-screen h-screen relative"
				>
					<Image
						src="/2025/images/landing/cloud_r.webp"
						alt={"img"}
						quality={60}
						fill
					/>
				</motion.div>
			</Parallax>

			{/* BOTTOM LEFT CLOUD */}
			<Parallax containerRef={container} speed={"sm"}>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
					className="w-screen h-screen relative"
				>
					<Image
						src="/2025/images/landing/cloud_bl.webp"
						alt={"img"}
						quality={60}
						fill
					/>
				</motion.div>
			</Parallax>

			{medium.map((item, index) => (
				<Parallax containerRef={container} speed={"md"} key={index}>
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 120 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
						className="w-screen h-screen relative"
					>
						<Image src={item} alt={"img"} quality={65} fill />
					</motion.div>
				</Parallax>
			))}

			{/* ASTEROID */}
			<Parallax containerRef={container} speed={"md"}>
				<motion.div
					initial={{ x: -500, y: -500 }}
					animate={{ x: -15, y: 0 }}
					transition={{
						type: "spring",
						bounce: 1,
						stiffness: 30,
						duration: 2,
						delay: 1,
						ease: "easeOut",
					}}
					className="origin-center w-screen h-screen relative"
				>
					<Image
						src="/2025/images/landing/asteroid.webp"
						alt={"img"}
						quality={65}
						fill
					/>
				</motion.div>
			</Parallax>

			{/* DOG */}
			<Parallax containerRef={container} speed={"md"}>
				<Float>
					<motion.div
						initial={{ scale: 0, opacity: 0, x: -100, y: -50 }}
						animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
						transition={{
							type: "spring",
							bounce: 1,
							stiffness: 50,
							duration: 3,
							delay: 3.1,
							ease: "easeOut",
						}}
						className="origin-right w-screen h-screen relative"
					>
						<Image src="/2025/images/landing/dog.webp" alt="dog" fill />
					</motion.div>
				</Float>
			</Parallax>

			{/* ASTRONAUT */}
			<Parallax containerRef={container} speed={"md"}>
				<Float>
					<motion.div
						initial={{ scale: 0.3, opacity: 0, y: 100 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						transition={{
							type: "spring",
							bounce: 1,
							stiffness: 50,
							duration: 3,
							delay: 3,
							ease: "easeOut",
						}}
						className="origin-top-right w-screen h-screen relative"
					>
						<Image
							src="/2025/images/landing/astronaut.webp"
							alt="astronaut"
							fill
						/>
					</motion.div>
				</Float>
			</Parallax>

			{close.map((item, index) => (
				<Parallax containerRef={container} speed={"lg"} key={index}>
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 150 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1, ease: "easeOut" }}
						className="w-screen h-screen relative"
					>
						<Image src={item} alt={"img"} quality={70} fill />
					</motion.div>
				</Parallax>
			))}

			{/* ROCKET */}
			<Parallax containerRef={container} speed={"lg"}>
				<motion.div
					initial={{ x: 1000, y: -1000, rotateZ: 30 }}
					animate={{ x: 70, y: 0, rotateZ: 0 }}
					transition={{
						type: "spring",
						bounce: 0.3,
						stiffness: 50,
						duration: 1,
						delay: 2,
						ease: "easeOut",
					}}
					className="origin-center w-screen h-screen relative"
				>
					<Image src="/2025/images/landing/rocket.webp" alt="rocket" fill />
				</motion.div>
			</Parallax>
		</div>
	);
};

export default Graphics;
