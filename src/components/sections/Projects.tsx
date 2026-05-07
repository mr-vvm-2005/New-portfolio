"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

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
        description: "A comprehensive platform for booking dental appointments with real-time availability and user-friendly interface.",
        link: "https://dental-care-appointment-booking.vercel.app/",
        github: "https://github.com/mr-vvm-2005/Dental_care_appointment_booking.git",
        tags: ["React", "CSS", "Vercel"],
        image: getAssetPath("/previews/dental.png"),
    },
    {
        title: "College ERP Portal (Clone)",
        description: "A full-featured ERP system clone for college management including student and faculty modules.",
        link: "https://mr-vvm-2005.github.io/my-college-erp/",
        github: "https://github.com/mr-vvm-2005/my-college-erp.git",
        tags: ["HTML", "CSS", "JavaScript"],
        image: getAssetPath("/previews/erp.png"),
    },
    {
        title: "Simple Resume Builder",
        description: "A clean and efficient tool for generating professional resumes in minutes with downloadable PDF feature.",
        link: "https://mr-vvm-2005.github.io/Simple-resume-builder-project/",
        github: "https://github.com/mr-vvm-2005/Simple-resume-builder-project.git",
        tags: ["JavaScript", "HTML", "Canvas"],
        image: getAssetPath("/previews/resume.png"),
    },
    {
        title: "CareerNavigator",
        description: "A web-based career preparation platform helping students improve placement readiness with an ATS-optimized resume builder, skill gap analysis, personalized learning roadmaps, and curated resources.",
        link: "https://mr-vvm-2005.github.io/Career-Navigator/",
        github: "https://github.com/mr-vvm-2005/Career-Navigator",
        tags: ["HTML", "CSS", "JavaScript", "AI"],
        image: getAssetPath("/previews/career-navigator.png"), // Place CareerNavigator screenshot here
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

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
            {/* Project Image with hover zoom */}
            <div className="h-56 bg-near-black flex items-center justify-center overflow-hidden border-b border-white/5 relative">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 ease-in-out opacity-60 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 to-transparent z-10" />
            </div>

            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-white/5 text-white/40 border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent-blue transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm text-white/50 line-clamp-3 mb-6">
                    {project.description}
                </p>

                {/* Action buttons */}
                <div className="flex items-center gap-3">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue text-white text-xs font-bold uppercase tracking-widest hover:bg-accent-blue/80 transition-all"
                    >
                        <ExternalLink size={14} /> Live Demo
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest hover:border-white/30 hover:text-white transition-all"
                    >
                        <Github size={14} /> GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
