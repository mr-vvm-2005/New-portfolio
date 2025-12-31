"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ParticleBackground from "./ParticleBackground";
import { MousePointer2, Download, Github, Linkedin, Instagram, Facebook, Twitter, Printer } from "lucide-react";
import Link from "next/link";
import { getAssetPath } from "@/lib/utils";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        const el = textRef.current;

        // GSAP Text Split Effect (Simulated)
        // Ensure we only split if it hasn't been split yet or if we are mounting fresh
        // If innerHTML already contains spans, we might duplicate. But simple useEffect [] runs once per mount.
        const text = el.innerText;

        // Wrap words
        el.innerHTML = text
            .split(" ")
            .map((word) => `<span class="inline-block opacity-0 translate-y-full">${word}&nbsp;</span>`)
            .join("");

        gsap.to(el.querySelectorAll("span"), {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
            delay: 0.5,
        });

        // Long Press Logic
        let longPressTimer: NodeJS.Timeout;

        const handleStart = () => {
            longPressTimer = setTimeout(() => {
                window.open("https://www.linkedin.com/in/mrvvmoffical2005", "_blank");
                if (typeof navigator !== "undefined" && navigator.vibrate) {
                    navigator.vibrate(50);
                }
            }, 800);
        };

        const handleEnd = () => {
            if (longPressTimer) clearTimeout(longPressTimer);
        };

        // Add Listeners
        el.addEventListener("touchstart", handleStart, { passive: true });
        el.addEventListener("touchend", handleEnd);
        el.addEventListener("mousedown", handleStart);
        el.addEventListener("mouseup", handleEnd);
        el.addEventListener("mouseleave", handleEnd);

        return () => {
            // Cleanup
            el.removeEventListener("touchstart", handleStart);
            el.removeEventListener("touchend", handleEnd);
            el.removeEventListener("mousedown", handleStart);
            el.removeEventListener("mouseup", handleEnd);
            el.removeEventListener("mouseleave", handleEnd);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6"
        >
            <ParticleBackground />

            <div className="z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10"
                >
                    <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                    <span className="text-sm font-mono text-accent-blue uppercase tracking-widest">
                        Available for new projects
                    </span>
                </motion.div>

                <h1
                    ref={textRef}
                    className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1.1] whitespace-nowrap select-none cursor-pointer transition-all duration-300 active:scale-95 active:text-accent-blue hover:scale-105 hover:text-accent-blue hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                >
                    Vetrivel Murugan P
                </h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="text-lg md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto min-h-[3rem] md:min-h-auto"
                >
                    <Typewriter texts={["Aspiring Full Stack Developer", "Creative UI/UX Enthusiast", "Problem Solver"]} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="flex flex-wrap items-center justify-center gap-6"
                >
                    <Link
                        href="/resume"
                        className="group relative px-8 py-3 rounded-full bg-white text-[#000] font-bold overflow-hidden transition-all hover:pr-12 hover:bg-accent-blue hover:text-white border border-white"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Printer size={18} />
                            View / Print Resume
                        </span>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                            &rarr;
                        </span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <SocialIcon href="https://github.com/mr-vvm-2005" icon={<Github size={20} />} />
                        <SocialIcon href="https://www.linkedin.com/in/mrvvmoffical2005" icon={<Linkedin size={20} />} />
                        <SocialIcon href="https://x.com/vetrivelvvm" icon={<Twitter size={20} />} />
                        <SocialIcon href="https://www.instagram.com/mr.vvm_official/" icon={<Instagram size={20} />} />
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-px h-12 bg-gradient-to-b from-accent-blue to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
            </motion.div>
        </section>
    );
}

function Typewriter({ texts }: { texts: string[] }) {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[index];
            if (isDeleting) {
                setDisplayText(currentText.substring(0, displayText.length - 1));
                setSpeed(50);
            } else {
                setDisplayText(currentText.substring(0, displayText.length + 1));
                setSpeed(150);
            }

            if (!isDeleting && displayText === currentText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setIndex((prev: number) => (prev + 1) % texts.length);
            }
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, index, texts, speed]);

    return (
        <span className="inline-block">
            {displayText}
            <span className="animate-pulse ml-0.5">|</span>
        </span>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:border-accent-blue/50 transition-all"
        >
            {icon}
        </a>
    );
}
