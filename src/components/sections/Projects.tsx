"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    link: string;
    tags: string[];
    image: string;
}

const projects: Project[] = [
    {
        title: "Dental Care Appointment Booking",
        description: "A comprehensive platform for booking dental appointments with real-time availability and user-friendly interface.",
        link: "https://dental-care-appointment-booking.vercel.app/",
        tags: ["React", "CSS", "Vercel"],
        image: "/previews/dental.png",
    },
    {
        title: "College ERP Portal (Clone)",
        description: "A full-featured ERP system clone for college management including student and faculty modules.",
        link: "https://mr-vvm-2005.github.io/my-college-erp/",
        tags: ["HTML", "CSS", "JavaScript"],
        image: "/previews/erp.png",
    },
    {
        title: "Simple Resume Builder",
        description: "A clean and efficient tool for generating professional resumes in minutes with downloadable PDF feature.",
        link: "https://mr-vvm-2005.github.io/Simple-resume-builder-project/",
        tags: ["JavaScript", "HTML", "Canvas"],
        image: "/previews/resume.png",
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
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
            className="relative min-h-[450px] w-full max-w-[400px] md:max-w-none glass rounded-3xl border border-white/5 overflow-hidden group"
        >
            {/* Project Image */}
            <div className="h-2/3 bg-near-black flex items-center justify-center overflow-hidden border-b border-white/5 relative">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
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
                <p className="text-sm text-white/50 line-clamp-2 mb-4">
                    {project.description}
                </p>

                <div className="absolute bottom-6 right-6">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-accent-blue hover:text-white hover:border-accent-blue shadow-lg transition-all"
                    >
                        <ExternalLink size={20} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
