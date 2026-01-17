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
                        margin: 6mm 10mm 6mm 10mm; /* Narrow margins for max space */
                    }
                    body {
                        background: white;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    #resume-content {
                        box-shadow: none !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    
                    /* Typography Optimization for Single Page */
                    h1 { font-size: 20pt !important; margin-bottom: 2mm !important; }
                    .role-title { font-size: 11pt !important; margin-bottom: 3mm !important; }
                    h2 { 
                        font-size: 11pt !important; 
                        margin-top: 3mm !important; 
                        margin-bottom: 1.5mm !important; 
                        border-bottom-width: 1px !important;
                    }
                    h3 { font-size: 10pt !important; margin-bottom: 0.5mm !important; }
                    p, li, span, div { font-size: 9pt !important; line-height: 1.35 !important; }
                    
                    /* Hide UI elements */
                    .print\\:hidden { display: none !important; }
                    
                    /* Layout tightening */
                    .gap-y-2 { gap: 0.5mm !important; }
                    .gap-4 { gap: 2mm !important; }
                    .space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 2.5mm !important; }
                    .space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: 2mm !important; }
                    .space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 1mm !important; }
                    .space-y-1 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.5mm !important; }
                    .mb-4 { margin-bottom: 2mm !important; }
                    .mb-3 { margin-bottom: 1.5mm !important; }
                    
                    /* Prevent page breaks inside items */
                    section, .break-inside-avoid {
                        break-inside: avoid;
                    }
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

            {/* A4 Page Container (210mm x 297mm) */}
            <main
                ref={resumeRef}
                id="resume-content"
                className="w-[210mm] min-h-[297mm] bg-white shadow-xl px-12 py-10 mx-auto text-gray-800 flex flex-col"
            >
                {/* Header */}
                <header className="text-center border-b border-gray-300 pb-3 mb-3 break-inside-avoid">
                    <h1 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900 leading-none mb-1">
                        Vetrivel Murugan P
                    </h1>
                    <p className="role-title text-base font-semibold text-blue-700 uppercase tracking-wide">
                        Full Stack Developer
                    </p>

                    {/* Contact Info (Text-based for ATS) */}
                    <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-xs text-gray-600 font-medium mt-2">
                        <span>pkvetrivelvvm@gmail.com</span>
                        <span className="text-gray-300">|</span>
                        <span>+91 7598611585</span>
                        <span className="text-gray-300">|</span>
                        <span>linkedin.com/in/mrvvmoffical2005</span>
                        <span className="text-gray-300">|</span>
                        <span>github.com/mr-vvm-2005</span>
                        <span className="text-gray-300">|</span>
                        <span>Tenkasi, India</span>
                    </div>
                </header>

                {/* Content Body */}
                <div className="flex-1 space-y-4">

                    {/* Summary */}
                    <section>
                        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-1.5">
                            Professional Summary
                        </h2>
                        <p className="text-xs text-justify leading-relaxed text-gray-700">
                            Aspiring Full Stack Developer with a strong foundation in modern web architecture. Currently refining advanced development skills through the NxtWave CCBP 4.0 program. Passionate about creating efficient, scalable, and user-friendly web solutions using React.js and Node.js. Dedicated to continuous learning and applying technical expertise to solve real-world problems.
                        </p>
                    </section>

                    {/* Technical Skills - Table-like Grid for Compactness */}
                    <section>
                        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-2">
                            Technical Skills
                        </h2>
                        <div className="grid grid-cols-[80px_1fr] gap-y-1 text-xs gap-x-2">
                            <span className="font-bold text-gray-800">Frontend:</span>
                            <span className="text-gray-700">React.js, Next.js, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+), Bootstrap</span>

                            <span className="font-bold text-gray-800">Backend:</span>
                            <span className="text-gray-700">Node.js, Express.js, Python, SQLite, RESTful APIs</span>

                            <span className="font-bold text-gray-800">Tools:</span>
                            <span className="text-gray-700">Git, GitHub, VS Code, Figma, Vercel, Postman</span>

                            <span className="font-bold text-gray-800">Libraries:</span>
                            <span className="text-gray-700">Framer Motion, Three.js, GSAP</span>
                        </div>
                    </section>

                    {/* Experience */}
                    <section>
                        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-2">
                            Experience
                        </h2>
                        <div className="mb-2 break-inside-avoid">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <h3 className="text-sm font-bold text-gray-900">Full Stack Developer Intern</h3>
                                <span className="text-xs font-semibold text-gray-600">July 2025</span>
                            </div>
                            <div className="text-xs text-blue-700 font-semibold mb-1">IPCS Global, Tirunelveli</div>
                            <ul className="list-disc ml-4 text-xs text-gray-700 space-y-1 pl-1">
                                <li>Developed dynamic web applications using JavaScript and modern frameworks, enhancing user interaction.</li>
                                <li>Collaborated with the design team to implement responsive UI components, ensuring seamless cross-device compatibility.</li>
                                <li>Worked on backend logic optimization and database management to improve application efficiency.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Projects */}
                    <section>
                        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-2">
                            Key Projects
                        </h2>
                        <div className="space-y-3">
                            <div className="break-inside-avoid">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-sm font-bold text-gray-900">Dental Care Appointment System</h3>
                                    <span className="text-[10px] font-mono text-gray-500 border border-gray-200 px-1 rounded">React • CSS</span>
                                </div>
                                <p className="text-xs text-gray-700 mt-0.5 leading-snug">
                                    A responsive platform for booking dental appointments. Features include real-time slot availability, doctor selection, and a streamlined booking process.
                                </p>
                            </div>
                            <div className="break-inside-avoid">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-sm font-bold text-gray-900">College ERP System (Clone)</h3>
                                    <span className="text-[10px] font-mono text-gray-500 border border-gray-200 px-1 rounded">HTML • CSS • JS</span>
                                </div>
                                <p className="text-xs text-gray-700 mt-0.5 leading-snug">
                                    A functional clone of an ERP portal. Implemented modules for student profile management, faculty dashboards, and attendance tracking.
                                </p>
                            </div>
                            <div className="break-inside-avoid">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-sm font-bold text-gray-900">Interactive Resume Builder</h3>
                                    <span className="text-[10px] font-mono text-gray-500 border border-gray-200 px-1 rounded">JS • Canvas</span>
                                </div>
                                <p className="text-xs text-gray-700 mt-0.5 leading-snug">
                                    An online tool enabling users to input data and generate professional-grade resumes instantly with PDF export functionality.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Education & Certifications (Columns) */}
                    <div className="grid grid-cols-2 gap-6 pt-1">
                        <section>
                            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-2">
                                Education
                            </h2>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="text-xs font-bold text-gray-900">B.Tech - IT</h3>
                                        <span className="text-[10px] text-gray-500">2023 - 2027</span>
                                    </div>
                                    <p className="text-xs text-gray-700">Dr. Sivanthi Aditanar College</p>
                                    <p className="text-[10px] text-gray-600 font-medium">CGPA: 7.7 (Current)</p>
                                </div>
                                <div>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="text-xs font-bold text-gray-900">HSC (Class XII)</h3>
                                        <span className="text-[10px] text-gray-500">2023</span>
                                    </div>
                                    <p className="text-xs text-gray-700">Shriram Vidhalaya HSS</p>
                                    <p className="text-[10px] text-gray-600 font-medium">Score: 82.5%</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-2">
                                Certifications
                            </h2>
                            <ul className="text-xs text-gray-700 space-y-1">
                                <li><span className="font-semibold text-gray-900">Python for Data Science</span> - NPTEL</li>
                                <li><span className="font-semibold text-gray-900">Front End Technologies</span> - IBM</li>
                                <li><span className="font-semibold text-gray-900">Elements of AI</span> - Univ. of Helsinki</li>
                                <li><span className="font-semibold text-gray-900">Software Eng. Job Sim</span> - JP Morgan</li>
                                <li><span className="font-semibold text-gray-900">Full-Stack Dev 101</span> - Simplilearn</li>
                            </ul>
                        </section>
                    </div>

                    {/* Footer / Interests */}
                    <section className="mt-auto pt-4 border-t border-gray-200">
                        <div className="grid grid-cols-[80px_1fr] gap-x-2 text-xs">
                            <span className="font-bold text-gray-800">Languages:</span>
                            <span className="text-gray-700">English (Professional), Tamil (Native)</span>

                            <span className="font-bold text-gray-800">Interests:</span>
                            <span className="text-gray-700">Web Development, UI/UX Design, AI & Machine Learning</span>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
