"use client";

import { motion } from "framer-motion";
import { User, MapPin, Calendar, Globe, Languages, Heart, Briefcase } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

export default function About() {
    const details = [
        { icon: <Calendar size={18} />, label: "DOB", value: "11-09-2005" },
        { icon: <Globe size={18} />, label: "Nationality", value: "Indian" },
        { icon: <Languages size={18} />, label: "Languages", value: "Tamil, English" },
        { icon: <MapPin size={18} />, label: "Location", value: "Tenkasi, Tamil Nadu, India" },
    ];

    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden bg-near-black">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col gap-12 lg:gap-20">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            About <span className="text-accent-blue">Me</span>
                        </h2>
                        <p className="text-white/40 font-mono text-sm tracking-widest uppercase">
                            Discover the person behind the code
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center text-left w-full overflow-hidden">
                        {/* Profile Image Column - Circle Style */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 flex justify-center"
                        >
                            <div className="relative group">
                                {/* Animated Outer Glow */}
                                <div className="absolute -inset-2 bg-gradient-to-tr from-accent-blue via-accent-violet to-accent-blue rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-spin-slow" />

                                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                                    <Image
                                        src={getAssetPath("/profile.jpg")}
                                        alt="Mr.vvm"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        unoptimized
                                    />
                                    {/* Glass Overlay on Image */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-near-black/40" />
                                </div>

                                {/* Orbiting Accent */}
                                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-near-black shadow-xl transform group-hover:rotate-12 transition-transform">
                                    <Heart size={20} className="text-accent-violet fill-accent-violet" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Content Column */}
                        <div className="lg:col-span-7 flex flex-col gap-10">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <User className="text-accent-blue" size={24} />
                                    Professional Profile
                                </h3>
                                <div className="space-y-4 text-lg text-white/70 leading-relaxed">
                                    <p>
                                        I am an <span className="text-white font-semibold">Aspiring Full Stack Developer</span> dedicated to crafting exceptional
                                        and high-performance web experiences. My journey is defined by a commitment to mastering modern technologies
                                        and delivering solutions that bridge the gap between functionality and design.
                                    </p>
                                    <p>
                                        Currently, I am immersive in the <span className="text-accent-violet">NxtWave CCBP 4.0 Program</span> while
                                        accelerating my growth as an intern at <span className="text-white border-b border-white/20">IPCS Global, Tirunelveli</span>.
                                    </p>
                                </div>

                                <blockquote className="mt-8 border-l-4 border-accent-blue/30 pl-6 py-2">
                                    <p className="text-white/50 italic text-xl font-medium leading-relaxed">
                                        "I believe in creating digital solutions that are not just functional but also visually stunning and user-centric."
                                    </p>
                                </blockquote>
                            </motion.div>

                            {/* Details Grid */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                            >
                                {details.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="p-5 rounded-2xl bg-white/5 border border-white/[0.03] hover:border-accent-blue/30 hover:bg-white/[0.07] transition-all flex items-center gap-4 group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0 group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase tracking-tighter text-white/40 mb-0.5">{item.label}</div>
                                            <div className="text-sm text-white font-medium">{item.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-violet/5 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
}
