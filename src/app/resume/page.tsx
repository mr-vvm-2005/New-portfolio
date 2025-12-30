"use client";

import { useRef } from "react";
import { Download, Mail, Phone, MapPin, Globe, Github, Linkedin, Calendar, Printer } from "lucide-react";
import Link from "next/link";
import { getAssetPath } from "@/lib/utils";

export default function ResumePage() {
    const resumeRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-white text-black p-8 md:p-16">
            {/* Print Button (Hidden when printing) */}
            <div className="fixed bottom-8 right-8 print:hidden z-50">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-accent-blue text-white px-6 py-3 rounded-full shadow-lg hover:bg-accent-blue/90 transition-all font-bold"
                >
                    <Printer size={20} />
                    Print / Save to PDF
                </button>
            </div>

            <div className="fixed top-8 left-8 print:hidden z-50">
                <Link
                    href="/"
                    className="flex items-center gap-2 bg-near-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-black/90 transition-all font-bold text-sm"
                >
                    &larr; Back to Portfolio
                </Link>
            </div>

            <main ref={resumeRef} className="max-w-4xl mx-auto bg-white" id="resume-content">
                {/* Header */}
                <header className="border-b-2 border-gray-900 pb-8 mb-8">
                    <h1 className="text-5xl font-bold uppercase tracking-tight mb-2">Vetrivel Murugan P</h1>
                    <p className="text-xl text-gray-600 font-medium tracking-wide">FULL STACK DEVELOPER & UI/UX ENTHUSIAST</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                            <Mail size={16} /> pkvetrivelvvm@gmail.com
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={16} /> +91 7598611585
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} /> Tenkasi, Tamil Nadu, India
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe size={16} /> mr-vvm-2005.github.io/New-portfolio
                        </div>
                        <div className="flex items-center gap-2">
                            <Linkedin size={16} /> linkedin.com/in/mrvvmoffical2005
                        </div>
                        <div className="flex items-center gap-2">
                            <Github size={16} /> github.com/mr-vvm-2005
                        </div>
                    </div>
                </header>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column (Skills, Education, etc) */}
                    <div className="md:col-span-1 space-y-8">
                        <Section title="Education">
                            <div className="mb-4">
                                <h3 className="font-bold">B.Tech - Information Technology</h3>
                                <p className="text-gray-600 text-sm">Dr. Sivanthi Aditanar College of Engineering</p>
                                <p className="text-gray-500 text-xs mt-1">2023 - 2027</p>
                            </div>
                            <div>
                                <h3 className="font-bold">Schooling (HSC)</h3>
                                <p className="text-gray-600 text-sm">Shriram Vidhalaya Higher Secondary School</p>
                                <p className="text-gray-500 text-xs mt-1">Completion: 2023</p>
                            </div>
                        </Section>

                        <Section title="Technical Skills">
                            <div className="space-y-3">
                                <SkillGroup title="Frontend" skills={["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Bootstrap", "Tailwind CSS"]} />
                                <SkillGroup title="Backend" skills={["Node.js", "Express.js", "Python", "SQLite"]} />
                                <SkillGroup title="Tools" skills={["Git", "GitHub", "VS Code", "Figma"]} />
                            </div>
                        </Section>

                        <Section title="Languages">
                            <ul className="list-disc ml-4 text-sm text-gray-700 space-y-1">
                                <li>Tamil (Native)</li>
                                <li>English (Professional)</li>
                            </ul>
                        </Section>

                        <Section title="Interests">
                            <ul className="list-disc ml-4 text-sm text-gray-700 space-y-1">
                                <li>Web Development</li>
                                <li>UI/UX Design</li>
                                <li>AI & Machine Learning</li>
                                <li>AI Prompting</li>
                                <li>AR/VR Technology</li>
                            </ul>
                        </Section>
                    </div>

                    {/* Right Column (Experience, Projects) */}
                    <div className="md:col-span-2 space-y-8">
                        <Section title="Summary">
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Aspiring Full Stack Developer with a passion for building user-centric, high-performance web applications.
                                Currently mastering advanced technologies through the NxtWave CCBP 4.0 program and gaining practical experience via an internship.
                                Dedicated to bridging the gap between elegant design and robust functionality.
                            </p>
                        </Section>

                        <Section title="Experience">
                            <div className="mb-6">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-lg">Full Stack Developer Intern</h3>
                                    <span className="text-xs font-mono text-gray-500">2023 (1 Month)</span>
                                </div>
                                <div className="text-sm font-semibold text-accent-blue mb-2">IPCS Global, Tirunelveli</div>
                                <ul className="list-disc ml-4 text-sm text-gray-700 space-y-2">
                                    <li>Developing and maintaining web applications using modern JavaScript frameworks.</li>
                                    <li>Collaborating with senior developers to implement responsive UI designs.</li>
                                    <li>Optimizing database queries for better performance.</li>
                                </ul>
                            </div>
                        </Section>

                        <Section title="Key Projects">
                            <Project
                                title="Dental Care Appointment Booking"
                                tech="React, CSS, Vercel"
                                desc="A comprehensive platform for booking dental appointments with real-time availability and user-friendly interface."
                            />
                            <Project
                                title="College ERP Portal (Clone)"
                                tech="HTML, CSS, JavaScript"
                                desc="A full-featured ERP system clone for college management including student and faculty modules."
                            />
                            <Project
                                title="Simple Resume Builder"
                                tech="JavaScript, HTML, Canvas"
                                desc="A clean and efficient tool for generating professional resumes in minutes with downloadable PDF feature."
                            />
                        </Section>

                        <Section title="Certifications">
                            <ul className="list-disc ml-4 text-sm text-gray-700 space-y-2">
                                <li><span className="font-semibold">Python for Data Science</span> - NPTEL Online Certification</li>
                                <li><span className="font-semibold">Front End Technologies</span> - IBM | Naan Mudhalvan</li>
                                <li><span className="font-semibold">Software Engineering Job Simulation</span> - JP Morgan Chase & Co.</li>
                                <li><span className="font-semibold">Elements of AI</span> - University of Helsinki</li>
                                <li><span className="font-semibold">Full-Stack Development 101</span> - Simplilearn</li>
                                <li><span className="font-semibold">EBPL Course</span> - HCL | Naan Mudhalvan</li>
                            </ul>
                        </Section>
                    </div>
                </div>
            </main>
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section>
            <h2 className="text-xl font-bold uppercase border-b-2 border-gray-200 pb-2 mb-4 text-gray-900 tracking-wider">{title}</h2>
            {children}
        </section>
    );
}

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
    return (
        <div>
            <h4 className="font-bold text-sm mb-1">{title}</h4>
            <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md border border-gray-200">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

function Project({ title, tech, desc }: { title: string; tech: string; desc: string }) {
    return (
        <div className="mb-4">
            <h3 className="font-bold">{title}</h3>
            <p className="text-xs text-accent-blue font-mono mb-1">{tech}</p>
            <p className="text-sm text-gray-700">{desc}</p>
        </div>
    );
}
