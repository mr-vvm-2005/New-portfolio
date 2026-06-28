"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "HTML5",                emoji: "🌐", category: "Frontend",    level: 95, color: "#E34F26" },
    { name: "CSS3",                 emoji: "🎨", category: "Frontend",    level: 90, color: "#1572B6" },
    { name: "JavaScript",           emoji: "⚡", category: "Frontend",    level: 85, color: "#F7DF1E" },
    { name: "ReactJS (Basic)",      emoji: "⚛️", category: "Frontend",    level: 50, color: "#61DAFB" },
    { name: "Next.js (Basic)",      emoji: "▲",  category: "Frontend",    level: 40, color: "#ffffff" },
    { name: "Tailwind CSS (Basic)", emoji: "💨", category: "Frontend",    level: 50, color: "#06B6D4" },
    { name: "Python (Basic)",       emoji: "🐍", category: "Backend",     level: 45, color: "#3776AB" },
    { name: "SQL (Basic)",          emoji: "🗄️", category: "Backend",     level: 45, color: "#4479A1" },
    { name: "Node.js (Basic)",      emoji: "🟢", category: "Backend",     level: 40, color: "#339933" },
    { name: "Git",                  emoji: "🔧", category: "Tools",       level: 85, color: "#F05032" },
    { name: "AI Prompting",         emoji: "🤖", category: "Trends",      level: 90, color: "#8B5CF6" },
    { name: "Editing",              emoji: "✂️", category: "Creative",    level: 85, color: "#D946EF" },
    { name: "Photography",          emoji: "📷", category: "Creative",    level: 80, color: "#F59E0B" },
    { name: "Communication",        emoji: "💬", category: "Soft Skills", level: 90, color: "#10B981" },
    { name: "Social Media Marketing", emoji: "📣", category: "Marketing",  level: 85, color: "#EC4899" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 bg-[#0c0c0c]/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Technical <span className="text-accent-blue">Arsenal</span></h2>
                    <p className="text-white/40">Technologies I use to bring ideas to life</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, translateY: -5 }}
                            viewport={{ once: true }}
                            className="glass p-6 rounded-3xl flex flex-col items-center justify-center text-center group cursor-default border border-white/5 hover:border-accent-blue/40 relative overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity blur-2xl"
                                style={{ backgroundColor: skill.color }}
                            />

                            {/* Emoji icon */}
                            <div className="text-2xl mb-2 z-10 select-none">{skill.emoji}</div>

                            <div className="text-base font-bold mb-1 z-10">{skill.name}</div>

                            {/* Category badge */}
                            <div className="text-[9px] uppercase tracking-widest text-white/30 z-10 px-2 py-0.5 rounded-full border border-white/10 bg-white/5 mb-4">
                                {skill.category}
                            </div>

                            {/* Animated Progress Bar */}
                            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden z-10">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    className="h-full bg-accent-blue"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
