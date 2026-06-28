"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ImageOff } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import { useState } from "react";

interface Project {
    title: string;
    description: string;
    link: string;
    github: string;
    tags: string[];
    image: string;
}

const projects: Project[] = [
    {
        title: "Dental Care Appointment Booking",
        description: "An interactive patient scheduling platform featuring real-time doctor availability slots and instant appointment booking workflows, reducing operational scheduling overhead by ~40%.",
        link: "https://dental-care-appointment-booking.vercel.app/",
        github: "https://github.com/mr-vvm-2005/Dental_care_appointment_booking.git",
        tags: ["React", "CSS", "Vercel"],
        image: getAssetPath("/previews/dental.png"),
    },
    {
        title: "College ERP Portal (Clone)",
        description: "A modular student-faculty portal clone that simulates course registrations, grading sheets, and attendance management with secure local storage data persistence.",
        link: "https://mr-vvm-2005.github.io/my-college-erp/",
        github: "https://github.com/mr-vvm-2005/my-college-erp.git",
        tags: ["HTML", "CSS", "JavaScript"],
        image: getAssetPath("/previews/erp.png"),
    },
    {
        title: "Simple Resume Builder",
        description: "A lightweight client-side application utilizing HTML5 Canvas to generate and download professionally formatted PDF resumes instantly with zero server latency.",
        link: "https://mr-vvm-2005.github.io/Simple-resume-builder-project/",
        github: "https://github.com/mr-vvm-2005/Simple-resume-builder-project.git",
        tags: ["JavaScript", "HTML", "Canvas"],
        image: getAssetPath("/previews/resume.png"),
    },
    {
        title: "CareerNavigator",
        description: "An AI-powered career readiness platform that parses student resumes, detects skill gaps, recommends targeted learning paths, and optimizes resumes for ATS compliance.",
        link: "https://mr-vvm-2005.github.io/Career-Navigator/",
        github: "https://github.com/mr-vvm-2005/Career-Navigator",
        tags: ["HTML", "CSS", "JavaScript", "AI"],
        image: getAssetPath("/previews/career-navigator.png"),
    },
    {
        title: "RSM Traders",
        description: "A high-performance retail catalog platform optimized for local search visibility, featuring bilingual (English/Tamil) support, WhatsApp order redirection, and seamless Netlify form integration.",
        link: "https://rsm-traders.netlify.app/",
        github: "https://github.com/mr-vvm-2005/RSM-Traders.git",
        tags: ["HTML5", "CSS3", "JavaScript", "Netlify", "SEO"],
        image: getAssetPath("/previews/rsm-traders.png"),
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-4">Featured <span className="text-accent-violet">Projects</span></h2>
                    <p className="text-white/40 max-w-xl">A selection of my recent works where design meets functionality.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [imgError, setImgError] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const handleMouseLeave = () => { x.set(0); y.set(0); };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[560px] glass rounded-3xl border border-white/5 overflow-hidden group"
        >
            {/* Project Image */}
            <div className="h-52 bg-[#13132A] flex items-center justify-center overflow-hidden border-b border-white/5 relative">
                {imgError ? (
                    <div className="flex flex-col items-center gap-2 text-white/20">
                        <ImageOff size={40} />
                        <span className="text-xs uppercase tracking-widest">{project.title}</span>
                    </div>
                ) : (
                    <>
                        <Image
                            src={project.image}
                            alt={`${project.title} - Full Stack Web Application project by Vetrivel Murugan`}
                            fill
                            unoptimized
                            onError={() => setImgError(true)}
                            className="object-cover transition-transform duration-500 ease-in-out opacity-70 group-hover:opacity-100 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/80 to-transparent z-10" />
                    </>
                )}
            </div>

            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-white/5 text-white/40 border border-white/5">{tag}</span>
                    ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent-blue transition-colors">{project.title}</h3>
                <p className="text-sm text-white/50 line-clamp-3 mb-5">{project.description}</p>

                <div className="flex items-center gap-3">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C63FF] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#6C63FF]/80 transition-all"
                    >
                        <ExternalLink size={13} /> Live Demo
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest hover:border-white/30 hover:text-white transition-all"
                    >
                        <Github size={13} /> GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
