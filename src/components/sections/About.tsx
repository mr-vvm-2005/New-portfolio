"use client";

import { motion } from "framer-motion";
import { User, MapPin, Calendar, Globe, Languages, Code, Database, Cpu, Server, Layers, Workflow, Terminal } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

const techStack = [
    { icon: <Code size={20} />,     label: "Frontend",  color: "text-blue-400" },
    { icon: <Server size={20} />,   label: "Backend",   color: "text-green-400" },
    { icon: <Database size={20} />, label: "Database",  color: "text-yellow-400" },
    { icon: <Globe size={20} />,    label: "Web",       color: "text-purple-400" },
    { icon: <Cpu size={20} />,      label: "AI/ML",     color: "text-red-400" },
    { icon: <Layers size={20} />,   label: "UI/UX",     color: "text-pink-400" },
    { icon: <Workflow size={20} />, label: "DevOps",    color: "text-orange-400" },
    { icon: <Terminal size={20} />, label: "Scripting", color: "text-gray-400" },
];

const stats = [
    { value: "2",   label: "Internships" },
    { value: "24+", label: "Certifications" },
    { value: "5",   label: "Projects Built" },
    { value: "3+",  label: "Years Learning" },
];

export default function About() {
    const details = [
        { icon: <Calendar size={16} />, label: "DOB",         value: "11 September 2005" },
        { icon: <Globe size={16} />,    label: "Nationality", value: "Indian" },
        { icon: <Languages size={16} />,label: "Languages",   value: "Tamil, English" },
        { icon: <MapPin size={16} />,   label: "Location",    value: "Tenkasi, Tamil Nadu, India" },
    ];

    return (
        <section id="about" className="py-28 px-6 relative overflow-hidden">
            {/* Background glow blobs — match hero dark palette */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#6C63FF]/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#00D4FF]/6 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
                        About <span className="text-accent-blue">Me</span>
                    </h2>
                    <p className="text-white/40 font-mono text-xs tracking-widest uppercase">Discover the person behind the code</p>
                </motion.div>

                {/* Main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left — Profile orbit */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex justify-center"
                    >
                        <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] flex items-center justify-center">
                            {/* Outer ring */}
                            <div className="absolute inset-0 rounded-full border border-white/5" />
                            {/* Inner dashed ring */}
                            <div className="absolute inset-[14%] rounded-full border border-white/5 border-dashed" />

                            {/* Profile image */}
                            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full z-20">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6C63FF] to-[#00D4FF] animate-pulse blur-lg opacity-40" />
                                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 hover:border-accent-blue transition-colors duration-300 shadow-2xl shadow-[#6C63FF]/20 group">
                                    <Image
                                        src={getAssetPath("/profile.jpg")}
                                        alt="Vetrivel Murugan P - Full Stack Developer Portfolio Picture"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* Orbiting tech icons */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
                                className="absolute inset-0 w-full h-full"
                            >
                                {techStack.map((tech, index) => {
                                    const angle = (index / techStack.length) * 360;
                                    return (
                                        <div
                                            key={index}
                                            className="absolute top-1/2 left-1/2 w-8 h-8 sm:w-10 sm:h-10 -ml-4 sm:-ml-5 -mt-4 sm:-mt-5"
                                            style={{ 
                                                transform: `rotate(${angle}deg) translate(clamp(120px, 40vw, 155px)) rotate(-${angle}deg)` 
                                            }}
                                        >
                                            <motion.div
                                                animate={{ rotate: -360 }}
                                                transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
                                                whileHover={{ scale: 1.3 }}
                                                className="w-full h-full glass rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors shadow-md"
                                                title={tech.label}
                                            >
                                                <div className={tech.color}>{tech.icon}</div>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right — Content */}
                    <div className="lg:col-span-7 flex flex-col gap-8">

                        {/* Bio */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
                                <User className="text-accent-blue" size={22} /> Professional Profile
                            </h3>
                            <div className="space-y-4 text-base text-white/65 leading-relaxed">
                                <p>
                                    Hi, I am Vetrivel Murugan P, a Full Stack Developer based in Tamil Nadu, India. Currently pursuing my B.Tech in Information Technology at Dr. Sivanthi Aditanar College of Engineering, I specialize in building responsive, user-centric web applications and robust digital platforms.
                                </p>
                                <p>
                                    I have completed <span className="text-[#6C63FF] font-semibold">2 internships</span> — a Full Stack Development internship at{" "}
                                    <span className="text-white border-b border-white/20">IPCS Global</span>, and a Virtual IBM Cognos Analytics internship at{" "}
                                    <span className="text-white border-b border-white/20">Adroit Technologies</span>. I am also enrolled in the{" "}
                                    <span className="text-[#00D4FF]">NxtWave CCBP 4.0 Full Stack Program</span> to master advanced software architecture.
                                </p>
                                <p>
                                    Beyond academia, I work as a Freelance Full Stack Developer and founded <a href="https://www.instagram.com/site_studio.in/" target="_blank" rel="noopener noreferrer" className="text-accent-blue font-semibold hover:underline">site studio.in</a>, where I build high-performance retail catalogs, business landing pages, and custom templates for local clients.
                                </p>
                            </div>

                            <blockquote className="mt-6 border-l-4 border-[#6C63FF]/40 pl-5 py-1">
                                <p className="text-white/45 italic text-lg font-medium leading-relaxed">
                                    "I believe in creating digital solutions that are not just functional but also visually stunning and user-centric."
                                </p>
                            </blockquote>
                        </motion.div>

                        {/* Stats row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                        >
                            {stats.map((s) => (
                                <div key={s.label} className="glass p-5 rounded-3xl text-center border border-white/5 hover:border-[#6C63FF]/30 transition-all group">
                                    <div className="text-3xl font-black text-[#6C63FF] group-hover:text-[#00D4FF] transition-colors">{s.value}</div>
                                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 mt-2 font-bold">{s.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Personal details grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                        >
                            {details.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:border-[#6C63FF]/30 hover:bg-white/[0.07] transition-all flex items-center gap-3 group"
                                >
                                    <div className="w-9 h-9 rounded-xl bg-[#6C63FF]/10 flex items-center justify-center text-[#6C63FF] shrink-0 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-[9px] uppercase tracking-wider text-white/35 mb-0.5">{item.label}</div>
                                        <div className="text-sm text-white font-medium">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
