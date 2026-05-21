"use client";

import { useRef } from "react";
import { Printer } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
    const resumeRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen bg-gray-100 text-black p-4 md:p-8 print:p-0 flex justify-center">
            <style jsx global>{`
                @media print {
                    @page { size: A4 portrait; margin: 4mm 10mm 4mm 10mm; }
                    body { background: white; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                    #resume-content { box-shadow: none !important; margin: 0 !important; padding: 0 !important; width: 100% !important; max-width: 100% !important; }
                    .print-hide { display: none !important; }
                    h1 { font-size: 18pt !important; margin-bottom: 1mm !important; }
                    .role-title { font-size: 10pt !important; margin-bottom: 1.5mm !important; }
                    h2 { font-size: 9.5pt !important; margin-top: 2mm !important; margin-bottom: 1mm !important; border-bottom-width: 1px !important; padding-bottom: 0.5mm !important; }
                    h3 { font-size: 9pt !important; margin-bottom: 0.5mm !important; }
                    p, li, span, div { font-size: 8.5pt !important; line-height: 1.25 !important; }
                    section { margin-bottom: 1.5mm !important; break-inside: avoid; }
                    .break-inside-avoid { break-inside: avoid; }
                    ul { margin-top: 0.5mm !important; padding-left: 4mm !important; }
                    li { margin-bottom: 0.5mm !important; }
                }
            `}</style>

            {/* Controls */}
            <div className="print-hide">
                <div className="fixed top-8 left-8 z-50">
                    <Link href="/" className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full shadow-lg hover:bg-black transition-all font-medium text-sm">
                        ← Back to Portfolio
                    </Link>
                </div>
                <div className="fixed bottom-8 right-8 z-50">
                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all font-bold"
                    >
                        <Printer size={20} /> Download PDF
                    </button>
                </div>
            </div>

            {/* A4 Resume */}
            <main
                ref={resumeRef}
                id="resume-content"
                className="w-[210mm] bg-white shadow-xl px-10 py-8 mx-auto text-gray-800 flex flex-col"
            >
                {/* ── HEADER ── */}
                <header className="text-center border-b-2 border-blue-700 pb-3 mb-3 break-inside-avoid">
                    <h1 className="text-[20px] sm:text-[28px] whitespace-nowrap font-extrabold uppercase tracking-tight text-gray-900 leading-none mb-1">
                        Vetrivel Murugan P
                    </h1>
                    <p className="role-title text-[13px] font-bold text-blue-700 uppercase tracking-widest mb-2">
                        Aspiring Full Stack Developer
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-0.5 text-[10px] text-gray-600 font-medium">
                        <span>pkvetrivelvvm@gmail.com</span>
                        <span className="text-gray-300">|</span>
                        <span>+91 7598611585</span>
                        <span className="text-gray-300">|</span>
                        <span>linkedin.com/in/mrvvmoffical2005</span>
                        <span className="text-gray-300">|</span>
                        <span>github.com/mr-vvm-2005</span>
                        <span className="text-gray-300">|</span>
                        <span>Tenkasi, Tamil Nadu, India</span>
                    </div>
                </header>

                {/* ── BODY ── */}
                <div className="flex-1 space-y-3">

                    {/* SUMMARY */}
                    <section className="break-inside-avoid">
                        <h2 className="text-[10px] font-extrabold text-gray-900 uppercase tracking-[0.15em] border-b border-gray-300 pb-1 mb-1.5">
                            Professional Summary
                        </h2>
                        <p className="text-[10px] text-justify leading-relaxed text-gray-700">
                            Aspiring Full Stack Developer with hands-on experience from 2 internships (IPCS Global & Adroit Technologies) and 22+ verified certifications across Frontend, Backend, AI/ML, and Tools. Currently enrolled in the NxtWave CCBP 4.0 Full Stack Program. Skilled in React.js, Next.js, Python, SQL, Spring Boot, and IBM Cognos Analytics. Passionate about building scalable, user-centric web applications and data-driven solutions.
                        </p>
                    </section>

                    {/* SKILLS */}
                    <section className="break-inside-avoid">
                        <h2 className="text-[10px] font-extrabold text-gray-900 uppercase tracking-[0.15em] border-b border-gray-300 pb-1 mb-2">
                            Technical Skills
                        </h2>
                        <div className="grid grid-cols-[90px_1fr] gap-y-1 text-[10px] gap-x-2">
                            <span className="font-bold text-gray-800">Frontend:</span>
                            <span className="text-gray-700">React.js, Next.js, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+), Bootstrap, Responsive Web Design</span>

                            <span className="font-bold text-gray-800">Backend:</span>
                            <span className="text-gray-700">Node.js, Express.js, Python, Spring Boot, Spring Data JPA, Spring REST, SQLite, RESTful APIs</span>

                            <span className="font-bold text-gray-800">Data & BI:</span>
                            <span className="text-gray-700">SQL, IBM Cognos Analytics, Dashboard Design, Data Reporting</span>

                            <span className="font-bold text-gray-800">Tools:</span>
                            <span className="text-gray-700">Git, GitHub, VS Code, Figma, Vercel, Postman, AWS (Basics)</span>

                            <span className="font-bold text-gray-800">AI / Trends:</span>
                            <span className="text-gray-700">AI Prompting, AI Workflow Automation, Elements of AI</span>
                        </div>
                    </section>

                    {/* EXPERIENCE */}
                    <section className="break-inside-avoid">
                        <h2 className="text-[10px] font-extrabold text-gray-900 uppercase tracking-[0.15em] border-b border-gray-300 pb-1 mb-2">
                            Experience
                        </h2>
                        <div className="space-y-3">
                            {/* Adroit */}
                            <div className="break-inside-avoid">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[11px] font-bold text-gray-900">IBM Cognos Analytics Virtual Intern</h3>
                                    <span className="text-[9px] font-semibold text-gray-500">Mar 2026 – Apr 2026</span>
                                </div>
                                <div className="text-[9px] text-blue-700 font-semibold mb-1">Adroit Technologies Innovative Solutions Pvt Ltd · Remote</div>
                                <ul className="list-disc ml-4 text-[9px] text-gray-700 space-y-0.5 pl-1">
                                    <li>Built interactive dashboards and analytical reports using IBM Cognos Analytics.</li>
                                    <li>Explored and processed real-world business datasets to derive actionable insights.</li>
                                    <li>Awarded a verified virtual internship completion certificate.</li>
                                </ul>
                            </div>
                            {/* IPCS */}
                            <div className="break-inside-avoid">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[11px] font-bold text-gray-900">Full Stack Development Intern</h3>
                                    <span className="text-[9px] font-semibold text-gray-500">Jul 2025 (1 Month)</span>
                                </div>
                                <div className="text-[9px] text-blue-700 font-semibold mb-1">IPCS Global · Tirunelveli</div>
                                <ul className="list-disc ml-4 text-[9px] text-gray-700 space-y-0.5 pl-1">
                                    <li>Developed dynamic web applications using JavaScript and modern frameworks.</li>
                                    <li>Built and analyzed data dashboards using IBM Cognos Analytics with real-world datasets.</li>
                                    <li>Implemented responsive UI components and backend logic for cross-device compatibility.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* PROJECTS */}
                    <section className="break-inside-avoid">
                        <h2 className="text-[10px] font-extrabold text-gray-900 uppercase tracking-[0.15em] border-b border-gray-300 pb-1 mb-2">
                            Key Projects
                        </h2>
                        <div className="space-y-2">
                            <div className="break-inside-avoid">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[10.5px] font-bold text-gray-900">CareerNavigator</h3>
                                    <span className="text-[8px] font-mono text-gray-500 border border-gray-200 px-1 rounded">HTML • CSS • JS • AI</span>
                                </div>
                                <p className="text-[9px] text-gray-700 leading-snug">ATS-optimized resume builder & analyzer, skill gap detector, personalized roadmap generator, and curated resource tracker. Live: mr-vvm-2005.github.io/Career-Navigator/</p>
                            </div>
                            <div className="break-inside-avoid">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[10.5px] font-bold text-gray-900">Dental Care Appointment System</h3>
                                    <span className="text-[8px] font-mono text-gray-500 border border-gray-200 px-1 rounded">React • CSS • Vercel</span>
                                </div>
                                <p className="text-[9px] text-gray-700 leading-snug">Responsive platform with real-time slot availability, doctor selection, and streamlined booking. Live: dental-care-appointment-booking.vercel.app</p>
                            </div>
                            <div className="break-inside-avoid">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[10.5px] font-bold text-gray-900">College ERP Portal (Clone)</h3>
                                    <span className="text-[8px] font-mono text-gray-500 border border-gray-200 px-1 rounded">HTML • CSS • JS</span>
                                </div>
                                <p className="text-[9px] text-gray-700 leading-snug">Functional ERP clone with student profiles, faculty dashboards, and attendance tracking modules.</p>
                            </div>
                            <div className="break-inside-avoid">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[10.5px] font-bold text-gray-900">Simple Resume Builder</h3>
                                    <span className="text-[8px] font-mono text-gray-500 border border-gray-200 px-1 rounded">JS • Canvas</span>
                                </div>
                                <p className="text-[9px] text-gray-700 leading-snug">Online tool for generating professional resumes instantly with PDF export functionality.</p>
                            </div>
                        </div>
                    </section>

                    {/* EDUCATION + CERTIFICATIONS (two-column) */}
                    <div className="grid grid-cols-2 gap-6 break-inside-avoid">
                        <section>
                            <h2 className="text-[10px] font-extrabold text-gray-900 uppercase tracking-[0.15em] border-b border-gray-300 pb-1 mb-2">
                                Education
                            </h2>
                            <div className="space-y-2">
                                <div>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="text-[10px] font-bold text-gray-900">B.Tech – Information Technology</h3>
                                        <span className="text-[8px] text-gray-500">2023 – 2027</span>
                                    </div>
                                    <p className="text-[9px] text-gray-700">Dr. Sivanthi Aditanar College of Engineering</p>
                                    <p className="text-[8px] text-gray-600 font-semibold">CGPA: 7.7 (Current)</p>
                                </div>
                                <div>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="text-[10px] font-bold text-gray-900">HSC (Class XII)</h3>
                                        <span className="text-[8px] text-gray-500">2023</span>
                                    </div>
                                    <p className="text-[9px] text-gray-700">Shriram Vidhalaya Higher Secondary School</p>
                                    <p className="text-[8px] text-gray-600 font-semibold">Score: 82.5%</p>
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-bold text-gray-900">NxtWave CCBP 4.0 Full Stack</h3>
                                    <p className="text-[9px] text-gray-700">Specialized Tech Academy · 2023 – 2026</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[10px] font-extrabold text-gray-900 uppercase tracking-[0.15em] border-b border-gray-300 pb-1 mb-2">
                                Key Certifications (22 Total)
                            </h2>
                            <ul className="text-[9px] text-gray-700 space-y-0.5">
                                <li><span className="font-semibold text-gray-900">IBM Cognos Analytics Virtual Internship</span> – Adroit Technologies</li>
                                <li><span className="font-semibold text-gray-900">Intro to Cognos Analytics (DA0104EN)</span> – IBM</li>
                                <li><span className="font-semibold text-gray-900">AI Workflows & Automation</span> – NxtWave Academy</li>
                                <li><span className="font-semibold text-gray-900">Spring Boot, JPA, REST</span> – Infosys (3 certs)</li>
                                <li><span className="font-semibold text-gray-900">Python for Data Science</span> – NPTEL</li>
                                <li><span className="font-semibold text-gray-900">Front End Technologies</span> – IBM | Naan Mudhalvan</li>
                                <li><span className="font-semibold text-gray-900">Elements of AI</span> – Univ. of Helsinki</li>
                                <li><span className="font-semibold text-gray-900">Software Eng. Job Simulation</span> – JP Morgan</li>
                                <li><span className="font-semibold text-gray-900">AWS Architecture Best Practices</span> – Udemy</li>
                                <li><span className="font-semibold text-gray-900">SQL & Databases, Python (Basic)</span> – IBM / HackerRank</li>
                            </ul>
                        </section>
                    </div>

                    {/* FOOTER */}
                    <section className="mt-auto pt-2 border-t border-gray-200 break-inside-avoid">
                        <div className="grid grid-cols-[90px_1fr] gap-x-2 text-[9px]">
                            <span className="font-bold text-gray-800">Languages:</span>
                            <span className="text-gray-700">English (Professional), Tamil (Native)</span>
                            <span className="font-bold text-gray-800">Interests:</span>
                            <span className="text-gray-700">Web Development, UI/UX Design, AI & Machine Learning, Photography, Social Media Marketing</span>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
