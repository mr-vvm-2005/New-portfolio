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
        <div className="min-h-screen bg-gray-100 text-black p-4 md:p-8 print:p-0 flex justify-center">
            <style jsx global>{`
                @media print {
                    @page {
                        size: A4 portrait;
                        margin: 0.5cm;
                    }
                    body {
                        background: white;
                        print-color-adjust: exact;
                        -webkit-print-color-adjust: exact;
                    }
                    #resume-content {
                        margin: 0;
                        padding: 0 !important;
                        box-shadow: none !important;
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    
                    /* Force Single Page Fit */
                    h1 { font-size: 22pt !important; margin-bottom: 4px !important; }
                    h2 { font-size: 11pt !important; margin-top: 10px !important; margin-bottom: 6px !important; padding-bottom: 2px !important; }
                    h3 { font-size: 10pt !important; }
                    p, li, span, div { font-size: 9.5pt !important; line-height: 1.4 !important; }
                    
                    .print\\:hidden { display: none !important; }
                    
                    /* Reduce gaps for print */
                    .gap-4 { gap: 0.75rem !important; }
                    .gap-6 { gap: 1rem !important; }
                    .my-4 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
                    .mb-4 { margin-bottom: 0.5rem !important; }
                    
                    /* Hide scrollbars/overflow */
                    html, body { overflow: visible !important; height: auto !important; }
                }
            `}</style>

            {/* Controls */}
            <div className="fixed bottom-8 right-8 print:hidden z-50 flex flex-col gap-3">
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

            {/* A4 Page Container */}
            <main
                ref={resumeRef}
                id="resume-content"
                className="w-[21cm] min-h-[29.7cm] bg-white shadow-xl px-10 py-8 mx-auto text-gray-800"
            >
                {/* Header - ATS Friendly: Clear Hierarchy */}
                <header className="text-center border-b-2 border-gray-800 pb-4 mb-4">
                    <h1 className="text-4xl font-extrabold uppercase tracking-tight text-gray-900 mb-1">
                        Vetrivel Murugan P
                    </h1>
                    <p className="text-lg font-medium text-blue-700 tracking-wide uppercase mb-3">
                        Full Stack Developer
                    </p>

                    {/* Contact Info - Text based for ATS parsing */}
                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-sm text-gray-700 font-medium">
                        <span className="flex items-center gap-1">
                            <Mail size={14} className="text-gray-500" /> pkvetrivelvvm@gmail.com
                        </span>
                        <span className="hidden sm:inline text-gray-400">|</span>
                        <span className="flex items-center gap-1">
                            <Phone size={14} className="text-gray-500" /> +91 7598611585
                        </span>
                        <span className="hidden sm:inline text-gray-400">|</span>
                        <span className="flex items-center gap-1">
                            <Linkedin size={14} className="text-gray-500" /> linkedin.com/in/mrvvmoffical2005
                        </span>
                        <span className="hidden sm:inline text-gray-400">|</span>
                        <span className="flex items-center gap-1">
                            <Github size={14} className="text-gray-500" /> github.com/mr-vvm-2005
                        </span>
                        <span className="hidden sm:inline text-gray-400">|</span>
                        <span className="flex items-center gap-1">
                            <MapPin size={14} className="text-gray-500" /> Tenkasi, India
                        </span>
                    </div>
                </header>

                {/* Professional Body - Single Column Hybrid */}
                <div className="space-y-4">

                    {/* Summary */}
                    <section>
                        <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-2">
                            Professional Summary
                        </h2>
                        <p className="text-sm text-gray-700 leading-relaxed text-justify">
                            Aspiring Full Stack Developer with a strong foundation in modern web technologies and a passion for building user-centric applications. Currently mastering advanced full-stack development through the NxtWave CCBP 4.0 program. Detail-oriented and eager to leverage skills in React.js, Node.js, and Python to contribute to innovative software solutions.
                        </p>
                    </section>

                    {/* Technical Skills - Categorized for ATS */}
                    <section>
                        <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-2">
                            Technical Skills
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-sm">
                            <div className="flex gap-2">
                                <span className="font-bold text-gray-800 min-w-[80px]">Frontend:</span>
                                <span className="text-gray-700">React.js, Next.js, Tailwind CSS, HTML5, CSS3, JavaScript, Bootstrap</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="font-bold text-gray-800 min-w-[80px]">Backend:</span>
                                <span className="text-gray-700">Node.js, Express.js, Python, SQLite</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="font-bold text-gray-800 min-w-[80px]">Tools:</span>
                                <span className="text-gray-700">Git, GitHub, VS Code, Figma, Vercel</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="font-bold text-gray-800 min-w-[80px]">Libraries:</span>
                                <span className="text-gray-700">Framer Motion, GSAP, Three.js</span>
                            </div>
                        </div>
                    </section>

                    {/* Experience */}
                    <section>
                        <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-3">
                            Experience
                        </h2>
                        <div className="mb-2">
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-sm font-bold text-gray-900">Full Stack Developer Intern</h3>
                                <span className="text-sm font-medium text-gray-600">July 2025</span>
                            </div>
                            <div className="text-sm text-blue-700 font-semibold mb-1">IPCS Global, Tirunelveli</div>
                            <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                                <li>Developed and maintained responsive web applications using modern JavaScript frameworks, ensuring cross-browser compatibility.</li>
                                <li>Collaborated with senior developers to implement UI/UX designs, resulting in a 20% improvement in user engagement metrics.</li>
                                <li>Optimized database queries and backend logic, enhancing application performance and loading times.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Projects */}
                    <section>
                        <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-3">
                            Key Projects
                        </h2>
                        <div className="space-y-3">
                            <div>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-sm font-bold text-gray-900">Dental Care Appointment System</h3>
                                    <span className="text-xs font-mono text-gray-500 bg-gray-100 px-1 rounded">React, CSS, Vercel</span>
                                </div>
                                <p className="text-sm text-gray-700 mt-1">
                                    Built a comprehensive platform for booking dental appointments featuring real-time availability checking and a responsive user interface.
                                </p>
                            </div>
                            <div>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-sm font-bold text-gray-900">College ERP Portal (Clone)</h3>
                                    <span className="text-xs font-mono text-gray-500 bg-gray-100 px-1 rounded">HTML, CSS, JS</span>
                                </div>
                                <p className="text-sm text-gray-700 mt-1">
                                    Developed a functional clone of a college ERP system including modules for student data management, faculty portals, and attendance tracking.
                                </p>
                            </div>
                            <div>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-sm font-bold text-gray-900">Interactive Resume Builder</h3>
                                    <span className="text-xs font-mono text-gray-500 bg-gray-100 px-1 rounded">JavaScript, Canvas</span>
                                </div>
                                <p className="text-sm text-gray-700 mt-1">
                                    Created a tool enabling users to generate professional resumes instantly with live preview and PDF export capabilities.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Education & Certs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <section>
                            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-2">
                                Education
                            </h2>
                            <div className="space-y-2">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900">B.Tech - Information Technology</h3>
                                    <p className="text-sm text-gray-700">Dr. Sivanthi Aditanar College of Engg.</p>
                                    <div className="flex justify-between text-xs text-gray-600 mt-0.5">
                                        <span>2023 - 2027</span>
                                        <span className="font-semibold">CGPA: 7.7</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900">HSC (Class XII)</h3>
                                    <p className="text-sm text-gray-700">Shriram Vidhalaya HSS</p>
                                    <div className="flex justify-between text-xs text-gray-600 mt-0.5">
                                        <span>2023</span>
                                        <span className="font-semibold">82.5%</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-2">
                                Certifications
                            </h2>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li className="flex justify-between"><span>Python for Data Science</span> <span className="text-xs text-gray-500">NPTEL</span></li>
                                <li className="flex justify-between"><span>Front End Technologies</span> <span className="text-xs text-gray-500">IBM</span></li>
                                <li className="flex justify-between"><span>Software Engineering Sim</span> <span className="text-xs text-gray-500">JP Morgan</span></li>
                                <li className="flex justify-between"><span>Elements of AI</span> <span className="text-xs text-gray-500">Univ. of Helsinki</span></li>
                                <li className="flex justify-between"><span>Full-Stack Development</span> <span className="text-xs text-gray-500">Simplilearn</span></li>
                            </ul>
                        </section>
                    </div>

                    {/* Languages & Interests */}
                    <section className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                            <div className="flex gap-2">
                                <span className="font-bold text-gray-900">Languages:</span>
                                <span className="text-gray-700">English (Professional), Tamil (Native)</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="font-bold text-gray-900">Interests:</span>
                                <span className="text-gray-700">Web Development, UI/UX Design, Artificial Intelligence, AR/VR</span>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
