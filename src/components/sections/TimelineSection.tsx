"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

interface TimelineItem {
    id: string;
    type: "Education" | "Experience" | "Academy";
    title: string;
    subtitle: string;
    location: string;
    date: string;
    details?: string;
    icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
    {
        id: "exp-1",
        type: "Experience",
        title: "Full Stack Development Intern",
        subtitle: "IPCS Global",
        location: "Tirunelveli",
        date: "01.07.2025 - 30.07.2025",
        details: "Working on real-world projects, gaining hands-on experience in both frontend and backend development.",
        icon: <Briefcase size={18} />
    },
    {
        id: "aca-1",
        type: "Academy",
        title: "NxtWave CCBP 4.0 Full Stack Program",
        subtitle: "Specialized Tech Academy",
        location: "Online",
        date: "2023 – 2026",
        details: "Specializing in 4.0 Technologies with a focus on Full Stack Web Development (MERN Stack).",
        icon: <Award size={18} />
    },
    {
        id: "edu-1",
        type: "Education",
        title: "B.Tech - Information Technology",
        subtitle: "Dr. Sivanthi Aditanar College of Engineering",
        location: "Tiruchendur",
        date: "2023 – 2027",
        icon: <GraduationCap size={18} />
    },
    {
        id: "edu-2",
        type: "Education",
        title: "Schooling",
        subtitle: "Shriram Vidhalaya Higher Secondary School",
        location: "Tenkasi",
        date: "Completion: 2023",
        icon: <GraduationCap size={18} />
    },
];

export default function TimelineSection() {
    return (
        <section id="journey" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Journey <span className="text-accent-violet">&</span> Milestones
                    </h2>
                    <p className="text-white/40 font-mono text-xs tracking-widest uppercase">The evolution of my professional career</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Centered Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-violet/50 via-white/10 to-transparent -translate-x-1/2" />

                    <div className="space-y-12">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Area */}
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right pl-20 md:pl-0" : "md:pl-12 md:text-left pl-20 md:pl-0"
                                    }`}>
                                    <div className="glass p-6 md:p-8 rounded-3xl border border-white/5 hover:border-accent-violet/30 transition-all group relative overflow-hidden">
                                        {/* Hover Gradient Background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                        <span className="inline-block px-3 py-1 rounded-full bg-accent-violet/10 text-accent-violet text-[10px] font-bold tracking-widest uppercase mb-4">
                                            {item.type} | {item.date}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent-violet transition-colors">
                                            {item.title}
                                        </h3>
                                        <div className="text-white/60 font-medium mb-4 flex items-center gap-2 lg:justify-inherit">
                                            <span className="text-accent-violet/50">{item.icon}</span>
                                            {item.subtitle}
                                        </div>
                                        <div className="text-sm text-white/40 mb-4">{item.location}</div>
                                        {item.details && (
                                            <p className="text-sm text-white/50 leading-relaxed font-light">{item.details}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Timeline Dot with Icon */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass border border-accent-violet/30 flex items-center justify-center bg-black z-20 shadow-[0_0_20px_rgba(139,92,246,0.2)] group">
                                    <div className="text-accent-violet group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    {/* Animated Pulse Ring */}
                                    <div className="absolute inset-0 rounded-full border border-accent-violet/50 animate-ping opacity-20" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
