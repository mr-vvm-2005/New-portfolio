"use client";

import { motion } from "framer-motion";

const statsCards = [
    {
        src: "https://github-readme-stats.vercel.app/api?username=mr-vvm-2005&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D0D1A&title_color=6C63FF&icon_color=00D4FF&text_color=E8E8FF",
        alt: "GitHub Stats",
    },
    {
        src: "https://github-readme-stats.vercel.app/api/top-langs/?username=mr-vvm-2005&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D0D1A&title_color=6C63FF&text_color=E8E8FF",
        alt: "Top Languages",
    },
    {
        src: "https://streak-stats.demolab.com/?user=mr-vvm-2005&theme=tokyonight&hide_border=true&background=0D0D1A&ring=6C63FF&fire=00D4FF&currStreakLabel=E8E8FF",
        alt: "GitHub Streak",
    },
];

export default function GitHubActivity() {
    return (
        <section id="github" className="py-24 px-6 bg-[#0d0d1a]/60">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                            GitHub <span className="text-accent-blue">Activity</span>
                        </h2>
                        <p className="text-white/40 text-sm">A live snapshot of my open-source contributions and coding streaks.</p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 flex-wrap">
                    {statsCards.map((card, i) => (
                        <motion.div
                            key={card.alt}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                            className="glass rounded-2xl border border-white/5 hover:border-accent-blue/30 transition-all overflow-hidden p-1"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={card.src}
                                alt={card.alt}
                                className="rounded-xl w-full max-w-[420px] h-auto"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
