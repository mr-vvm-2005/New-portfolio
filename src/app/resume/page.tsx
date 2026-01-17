"use client";

import { useRef } from "react";
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Printer } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
    const resumeRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-50 text-black p-4 md:p-8 print:p-0 flex justify-center">
            <style jsx global>{`
                @media print {
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    body {
                        background: white;
                        print-color-adjust: exact;
                        -webkit-print-color-adjust: exact;
                    }
                    #resume-content {
                        margin: 0;
                        padding: 0.8cm 1cm !important;
                        max-width: none !important;
                        width: 100% !important;
                        box-shadow: none !important;
                        min-height: 29.7cm; /* Ensure A4 height match */
                    }
                    
                    /* Grid and Layout for Print */
                    .print\\:grid-cols-12 {
                        display: grid !important;
                        grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
                    }
                    .print\\:col-span-4 {
                        grid-column: span 4 / span 4 !important;
                    }
                    .print\\:col-span-8 {
                        grid-column: span 8 / span 8 !important;
                    }
                    .print\\:gap-6 {
                        gap: 1.5rem !important; /* 24px */
                    }
                    
                    /* Typography scaling for single page fit */
                    h1 { font-size: 24pt !important; line-height: 1 !important; margin-bottom: 0.1cm !important; }
                    .role-title { font-size: 11pt !important; margin-bottom: 0.4cm !important; }
                    h2 { 
                        font-size: 12pt !important; 
                        margin-top: 0.4cm !important; 
                        margin-bottom: 0.2cm !important; 
                        padding-bottom: 0.1cm !important;
                    }
                    h3 { font-size: 10pt !important; margin-bottom: 0.05cm !important; }
                    p, li, span, div { font-size: 9pt !important; line-height: 1.35 !important; }
                    .text-xs { font-size: 8pt !important; }
                    
                    /* Hiding elements */
                    .print\\:hidden { display: none !important; }
                    
                    /* Spacing reductions */
                    .space-y-8 > :not([hidden]) ~ :not([hidden]) { margin-top: 1rem !important; } /* Reduce main gap */
                    .space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.4rem !important; }
                    .mb-6 { margin-bottom: 0.5rem !important; }
                    .mb-4 { margin-bottom: 0.5rem !important; }
                    .py-3 { padding-top: 0.2rem !important; padding-bottom: 0.2rem !important; }
                    
                    /* Icons */
                    svg { width: 12px !important; height: 12px !important; }
                }
            `}</style>

            {/* Print & Back Buttons */}
            <div className="fixed bottom-8 right-8 print:hidden z-50 flex flex-col gap-4">
                <div className="fixed top-8 left-8 print:hidden z-50">
                    <Link
                        href="/"
                        className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full shadow-lg hover:bg-black transition-all font-medium text-sm"
                    >
                        &larr; Back
                    </Link>
                </div>
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all font-bold"
                >
                    <Printer size={20} />
                    Download PDF
                </button>
            </div>

            {/* Resume Container */}
            <main
                ref={resumeRef}
                className="w-full max-w-[21cm] bg-white shadow-2xl print:shadow-none p-8 md:p-12 text-gray-800"
                id="resume-content"
            >
                {/* Header Section */}
                <header className="border-b border-gray-300 pb-4 mb-5">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-4xl font-extrabold uppercase tracking-tight text-gray-900 leading-none mb-2">
                                Vetrivel Murugan P
                            </h1>
                            <p className="role-title text-lg text-blue-600 font-medium tracking-wide">
                                FULL STACK DEVELOPER & UI/UX ENTHUSIAST
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-gray-600">
                        <ContactItem icon={<Mail />} text="pkvetrivelvvm@gmail.com" />
                        <ContactItem icon={<Phone />} text="+91 7598611585" />
                        <ContactItem icon={<MapPin />} text="Tenkasi, Tamil Nadu" />
                        <ContactItem icon={<Globe />} text="mr-vvm-2005.github.io/New-portfolio" />
                        <ContactItem icon={<Linkedin />} text="linkedin.com/in/mrvvmoffical2005" />
                        <ContactItem icon={<Github />} text="github.com/mr-vvm-2005" />
                    </div>
                </header>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 gap-6 print:gap-6">

                    {/* Left Column (Skills, Education, Languages) */}
                    <div className="md:col-span-4 print:col-span-4 flex flex-col gap-5">
                        <Section title="Education">
                            <div className="mb-3">
                                <h3 className="font-bold text-gray-900">B.Tech - IT</h3>
                                <p className="text-gray-700 text-sm">Dr. Sivanthi Aditanar College of Engineering</p>
                                <div className="flex justify-between items-center mt-0.5">
                                    <span className="text-xs text-gray-500 font-medium">CGPA: 7.7 (Upto 3rd Sem)</span>
                                    <span className="text-xs text-gray-400">2023 - 2027</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">HSC</h3>
                                <p className="text-gray-700 text-sm">Shriram Vidhalaya HSS</p>
                                <div className="flex justify-between items-center mt-0.5">
                                    <span className="text-xs text-gray-500 font-medium">82.5%</span>
                                    <span className="text-xs text-gray-400">2023</span>
                                </div>
                            </div>
                        </Section>

                        <Section title="Skills">
                            <div className="flex flex-col gap-2">
                                <SkillGroup title="Frontend" skills={["React.js", "Next.js", "Tailwind CSS", "JavaScript", "HTML5/CSS3"]} />
                                <SkillGroup title="Backend" skills={["Node.js", "Express.js", "Python", "SQLite"]} />
                                <SkillGroup title="Tools" skills={["Git/GitHub", "VS Code", "Figma", "Vercel"]} />
                            </div>
                        </Section>

                        <Section title="Certifications">
                            <ul className="flex flex-col gap-1.5 text-xs text-gray-700">
                                <li><span className="font-semibold text-gray-900 block">Python for Data Science</span> NPTEL</li>
                                <li><span className="font-semibold text-gray-900 block">Front End Technologies</span> IBM</li>
                                <li><span className="font-semibold text-gray-900 block">Software Engineering Job Sim</span> JP Morgan Chase</li>
                                <li><span className="font-semibold text-gray-900 block">Elements of AI</span> University of Helsinki</li>
                                <li><span className="font-semibold text-gray-900 block">Full-Stack Development 101</span> Simplilearn</li>
                                <li><span className="font-semibold text-gray-900 block">EBPL Course</span> HCL | Naan Mudhalvan</li>
                            </ul>
                        </Section>

                        <Section title="Languages">
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li className="flex justify-between"><span>Tamil</span> <span className="text-gray-400 text-xs">Native</span></li>
                                <li className="flex justify-between"><span>English</span> <span className="text-gray-400 text-xs">Professional</span></li>
                            </ul>
                        </Section>

                        <Section title="Interests">
                            <div className="flex flex-wrap gap-2">
                                {["Web Dev", "UI/UX", "AI & ML", "AR/VR"].map(i => (
                                    <span key={i} className="text-xs border border-gray-200 px-2 py-0.5 rounded bg-gray-50 text-gray-600">{i}</span>
                                ))}
                            </div>
                        </Section>
                    </div>

                    {/* Right Column (Summary, Experience, Projects) */}
                    <div className="md:col-span-8 print:col-span-8 flex flex-col gap-5">
                        <Section title="Professional Summary" hideBorder>
                            <p className="text-gray-700 text-sm leading-relaxed text-justify">
                                Aspiring Full Stack Developer building user-centric, high-performance web applications.
                                Currently mastering advanced technologies through the NxtWave CCBP 4.0 program.
                                Dedicated to bridging the gap between elegant design and robust functionality.
                            </p>
                        </Section>

                        <Section title="Experience">
                            <div className="mb-1">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-bold text-gray-900">Full Stack Developer Intern</h3>
                                    <span className="text-xs font-mono text-gray-500">July 2025</span>
                                </div>
                                <div className="text-xs font-semibold text-blue-600 mb-1.5">IPCS Global, Tirunelveli</div>
                                <ul className="list-disc ml-4 text-sm text-gray-700 space-y-1 leading-snug">
                                    <li>Developed modern web apps using JavaScript frameworks.</li>
                                    <li>Collaborated on responsive UI designs and optimizations.</li>
                                    <li>Improved database query performance for faster loads.</li>
                                </ul>
                            </div>
                        </Section>

                        <Section title="Key Projects">
                            <div className="space-y-3">
                                <Project
                                    title="Dental Care Booking Platform"
                                    tech="React, CSS, Vercel"
                                    desc="Book dental appointments with real-time availability. Features a user-friendly interface for seamless scheduling."
                                />
                                <Project
                                    title="College ERP Portal (Clone)"
                                    tech="HTML, CSS, JavaScript"
                                    desc="A comprehensive ERP clone for tracking student and faculty data, managing attendance, and coursework."
                                />
                                <Project
                                    title="Simple Resume Builder"
                                    tech="JavaScript, HTML, Canvas"
                                    desc="Tool to generate professional resumes instantly with live preview and PDF download capability."
                                />
                            </div>
                        </Section>


                    </div>
                </div>
            </main>
        </div>
    );
}

function Section({ title, children, hideBorder = false }: { title: string; children: React.ReactNode, hideBorder?: boolean }) {
    return (
        <section>
            <h2 className={`text-base font-bold uppercase tracking-wider text-gray-900 mb-3 ${!hideBorder ? "border-b border-gray-200 pb-1" : ""}`}>
                {title}
            </h2>
            {children}
        </section>
    );
}

function ContactItem({ icon, text }: { icon: any, text: string }) {
    return (
        <div className="flex items-center gap-1.5 min-w-fit">
            <span className="text-gray-500 [&>svg]:w-3.5 [&>svg]:h-3.5">{icon}</span>
            <span>{text}</span>
        </div>
    );
}

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
    return (
        <div>
            <h4 className="font-bold text-xs text-gray-500 mb-1 uppercase">{title}</h4>
            <div className="flex flex-wrap gap-1.5">
                {skills.map(skill => (
                    <span key={skill} className="px-1.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded border border-gray-200 font-medium">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

function Project({ title, tech, desc }: { title: string; tech: string; desc: string }) {
    return (
        <div>
            <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
                <span className="text-[10px] text-blue-600 font-mono bg-blue-50 px-1 rounded">{tech}</span>
            </div>
            <p className="text-sm text-gray-600 mt-0.5 leading-snug">{desc}</p>
        </div>
    );
}
