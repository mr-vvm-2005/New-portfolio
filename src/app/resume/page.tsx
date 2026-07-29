"use client";

import { useRef } from "react";
import { Printer } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export default function ResumePage() {
    const resumeRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen bg-gray-100 text-black p-2 md:p-6 print:p-0 flex justify-center items-start print:bg-white print:min-h-0 print:block">
            <title>Resume | Vetrivel Murugan P - Full Stack Developer</title>
            <meta name="description" content="Official Resume of Vetrivel Murugan P - Full Stack Developer. Clean ATS-friendly single page resume." />
            <Script id="resume-person-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vetrivel Murugan P",
  "alternateName": ["Mr.VVM", "VVM"],
  "description": "Resume of Vetrivel Murugan P – Full Stack Developer.",
  "url": "https://mr-vvm-2005.github.io/New-portfolio/resume/",
  "jobTitle": "Full Stack Developer",
  "sameAs": [
    "https://www.linkedin.com/in/mrvvmoffical2005",
    "https://github.com/mr-vvm-2005",
    "https://mr-vvm-2005.github.io/New-portfolio/"
  ]
}` }} />
            <style jsx global>{`
                @media print {
                    @page { 
                        size: A4 portrait; 
                        margin: 0 !important; 
                    }
                    html, body, body * { 
                        background: #ffffff !important; 
                        background-color: #ffffff !important; 
                    }
                    html, body { 
                        width: 210mm !important;
                        height: 297mm !important; 
                        max-height: 297mm !important;
                        margin: 0 !important; 
                        padding: 0 !important; 
                        overflow: hidden !important;
                        -webkit-print-color-adjust: exact !important; 
                        print-color-adjust: exact !important; 
                    }
                    * { 
                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important; 
                    }
                    h1, h2, h3, h4, .role-title { 
                        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important; 
                    }
                    #resume-content {
                        width: 210mm !important;
                        height: 297mm !important;
                        max-height: 297mm !important;
                        margin: 0 !important;
                        padding: 8mm 12mm !important;
                        box-shadow: none !important;
                        border: none !important;
                        overflow: hidden !important;
                        display: flex !important;
                        flex-direction: column !important;
                        justify-content: space-between !important;
                        background: #ffffff !important;
                        page-break-after: avoid !important;
                        page-break-before: avoid !important;
                        page-break-inside: avoid !important;
                    }
                    .print-hide, .noise-overlay, canvas { 
                        display: none !important; 
                    }
                }
            `}</style>

            {/* Controls */}
            <div className="print-hide">
                <div className="fixed top-6 left-6 z-50">
                    <Link href="/" className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full shadow-md hover:bg-black transition-all font-medium text-xs">
                        ← Back to Portfolio
                    </Link>
                </div>
                <div className="fixed bottom-6 right-6 z-50">
                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full shadow-lg hover:bg-blue-700 transition-all font-bold text-sm"
                    >
                        <Printer size={18} /> Download PDF
                    </button>
                </div>
            </div>

            {/* ── A4 Single Page Resume ── */}
            <main
                ref={resumeRef}
                id="resume-content"
                className="w-[210mm] h-[297mm] max-h-[297mm] bg-white shadow-2xl px-[12mm] py-[7mm] mx-auto text-gray-900 flex flex-col justify-between overflow-hidden relative border border-gray-200 print:border-none print:shadow-none print:p-0 print:m-0"
            >
                {/* ── HEADER ── */}
                <header className="text-center border-b-2 border-blue-700 pb-1 mb-1.5 shrink-0">
                    <h1 className="text-[17pt] font-extrabold uppercase tracking-tight text-gray-900 leading-none mb-0.5">
                        Vetrivel Murugan P
                    </h1>
                    <p className="role-title text-[9pt] font-bold text-blue-700 uppercase tracking-widest mb-1">
                        Full Stack Developer
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-x-2.5 gap-y-0.5 text-[7.5pt] text-gray-700 font-medium">
                        <span>Email: <a href="mailto:pkvetrivelvvm@gmail.com" className="text-blue-700">pkvetrivelvvm@gmail.com</a></span>
                        <span className="text-gray-300">|</span>
                        <span>Phone: <a href="tel:+917598611585" className="text-blue-700">+91 7598611585</a></span>
                        <span className="text-gray-300">|</span>
                        <span>Location: Tenkasi, Tamil Nadu, India</span>
                        <span className="text-gray-300">|</span>
                        <span>LinkedIn: <a href="https://linkedin.com/in/mrvvmoffical2005" target="_blank" rel="noopener noreferrer" className="text-blue-700">linkedin.com/in/mrvvmoffical2005</a></span>
                        <span className="text-gray-300">|</span>
                        <span>GitHub: <a href="https://github.com/mr-vvm-2005" target="_blank" rel="noopener noreferrer" className="text-blue-700">github.com/mr-vvm-2005</a></span>
                        <span className="text-gray-300">|</span>
                        <span>Portfolio: <a href="https://mr-vvm-2005.github.io/New-portfolio/" target="_blank" rel="noopener noreferrer" className="text-blue-700">mr-vvm-2005.github.io/New-portfolio/</a></span>
                    </div>
                </header>

                {/* ── BODY — natural top-to-bottom stacking ── */}
                <div className="flex flex-col gap-[3.5px] flex-1">

                    {/* PROFESSIONAL SUMMARY */}
                    <section>
                        <h2 className="text-[8.8pt] font-extrabold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-[1px] mb-0.5">
                            Professional Summary
                        </h2>
                        <p className="text-[7.8pt] text-justify leading-snug text-gray-800">
                            B.Tech IT student and Web Developer with 2 internships and multiple live client projects. Strong expertise in building responsive, user-friendly frontend interfaces (React.js, Next.js, Tailwind CSS) alongside foundational backend & API integration skills (Node.js, Express.js, REST APIs, SQL). Experienced in web troubleshooting, API testing via Postman, resolving support tickets within SLA, and delivering high-quality web solutions to clients.
                        </p>
                    </section>

                    {/* TECHNICAL SKILLS */}
                    <section>
                        <h2 className="text-[8.8pt] font-extrabold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-[1px] mb-0.5">
                            Technical Skills
                        </h2>
                        <div className="space-y-[1px] text-[7.8pt]">
                            <div className="grid grid-cols-[105px_1fr]">
                                <span className="font-bold text-gray-900">Frontend (Core):</span>
                                <span className="text-gray-800">React.js, Next.js, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+), Bootstrap</span>
                            </div>
                            <div className="grid grid-cols-[105px_1fr]">
                                <span className="font-bold text-gray-900">Backend (Basics):</span>
                                <span className="text-gray-800">Node.js, Express.js, RESTful APIs, SQL, Python</span>
                            </div>
                            <div className="grid grid-cols-[105px_1fr]">
                                <span className="font-bold text-gray-900">Developer Tools:</span>
                                <span className="text-gray-800">Git, GitHub, VS Code, Figma, Vercel, Postman</span>
                            </div>
                            <div className="grid grid-cols-[105px_1fr]">
                                <span className="font-bold text-gray-900">Key Competencies:</span>
                                <span className="text-gray-800">Web Troubleshooting, API Integration, Cross-Browser Debugging, Customer Support & SLA Resolution</span>
                            </div>
                        </div>
                    </section>

                    {/* WORK EXPERIENCE */}
                    <section>
                        <h2 className="text-[8.8pt] font-extrabold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-[1px] mb-0.5">
                            Work Experience
                        </h2>
                        <div className="space-y-1">
                            {/* Freelance */}
                            <div>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[8.3pt] font-bold text-gray-900">Freelance Full Stack Developer</h3>
                                    <span className="text-[7.5pt] font-semibold text-gray-600">2025 – Present</span>
                                </div>
                                <div className="text-[7.5pt] text-blue-700 font-semibold mb-0.5">Self-Employed · Remote</div>
                                <ul className="list-disc ml-4 text-[7.8pt] text-gray-800 space-y-[1px]">
                                    <li>Built and deployed 5+ client websites using React.js, Next.js, and Tailwind CSS with WhatsApp API and multilingual support.</li>
                                    <li>Founded <span className="font-semibold text-gray-900">site studio.in</span> — managed client requirements, development, and post-launch technical support end-to-end.</li>
                                </ul>
                            </div>
                            {/* Adroit */}
                            <div>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[8.3pt] font-bold text-gray-900">Virtual Web & Data Engineering Intern</h3>
                                    <span className="text-[7.5pt] font-semibold text-gray-600">Mar 2026 – Apr 2026</span>
                                </div>
                                <div className="text-[7.5pt] text-blue-700 font-semibold mb-0.5">Adroit Technologies Innovative Solutions Pvt Ltd · Remote</div>
                                <ul className="list-disc ml-4 text-[7.8pt] text-gray-800 space-y-[1px]">
                                    <li>Developed data visualization dashboards and diagnosed pipeline issues; documented resolution steps for team reuse.</li>
                                    <li>Collaborated via Agile/Scrum — attended stand-ups, raised bugs in tracker, and resolved support tickets within SLA.</li>
                                </ul>
                            </div>
                            {/* IPCS */}
                            <div>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[8.3pt] font-bold text-gray-900">Full Stack Development Intern</h3>
                                    <span className="text-[7.5pt] font-semibold text-gray-600">Jul 2025</span>
                                </div>
                                <div className="text-[7.5pt] text-blue-700 font-semibold mb-0.5">IPCS Global · Tirunelveli</div>
                                <ul className="list-disc ml-4 text-[7.8pt] text-gray-800 space-y-[1px]">
                                    <li>Built responsive React.js UIs and integrated REST APIs with Node.js/Express.js for 3 client-facing web applications.</li>
                                    <li>Tested API endpoints via Postman; debugged cross-browser issues and reduced page load time by 30%.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* KEY PROJECTS */}
                    <section>
                        <h2 className="text-[8.8pt] font-extrabold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-[1px] mb-0.5">
                            Key Projects
                        </h2>
                        <div className="space-y-[2px]">
                            <div>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[8.3pt] font-bold text-gray-900">CareerNavigator — AI Career Readiness Platform</h3>
                                    <span className="text-[7.3pt] text-gray-600">HTML5, CSS3, JavaScript, LLM APIs</span>
                                </div>
                                <p className="text-[7.8pt] text-gray-800 leading-tight">AI-powered career guidance app with resume analysis, skill gap detection & roadmaps. Live: <a href="https://mr-vvm-2005.github.io/Career-Navigator/" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-medium">mr-vvm-2005.github.io/Career-Navigator/</a></p>
                            </div>
                            <div>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[8.3pt] font-bold text-gray-900">Dental Care Appointment System</h3>
                                    <span className="text-[7.3pt] text-gray-600">React.js, Tailwind CSS, Node.js, Express.js</span>
                                </div>
                                <p className="text-[7.8pt] text-gray-800 leading-tight">Medical booking app with real-time scheduling & REST API integration. Live: <a href="https://dental-care-appointment-booking.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-medium">dental-care-appointment-booking.vercel.app/</a></p>
                            </div>
                            <div>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[8.3pt] font-bold text-gray-900">RSM Traders — Wholesale & Retail Business Platform</h3>
                                    <span className="text-[7.3pt] text-gray-600">HTML5, CSS3, JavaScript, SEO, Netlify</span>
                                </div>
                                <p className="text-[7.8pt] text-gray-800 leading-tight">Bilingual (EN/Tamil) product showcase with SEO optimization & WhatsApp CTA. Live: <a href="https://rsm-traders.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-medium">rsm-traders.netlify.app/</a></p>
                            </div>
                        </div>
                    </section>

                    {/* EDUCATION */}
                    <section>
                        <h2 className="text-[8.8pt] font-extrabold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-[1px] mb-0.5">
                            Education
                        </h2>
                        <div className="flex justify-between items-baseline text-[7.8pt]">
                            <div>
                                <h3 className="font-bold text-gray-900 text-[8.3pt]">B.Tech in Information Technology</h3>
                                <div className="text-gray-700">Dr. Sivanthi Aditanar College of Engineering, Tiruchendur</div>
                            </div>
                            <div className="text-right">
                                <div className="font-semibold text-gray-900">2023 – 2027</div>
                                <div className="font-semibold text-blue-700">CGPA: 7.7</div>
                            </div>
                        </div>
                    </section>

                    {/* CERTIFICATIONS — 3 columns, 12 items */}
                    <section>
                        <h2 className="text-[8.8pt] font-extrabold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-[1px] mb-0.5">
                            Certifications & Trainings{" "}
                            <span className="text-blue-700 font-normal normal-case tracking-normal text-[7.5pt]">(24+ total verified)</span>
                        </h2>
                        <div className="grid grid-cols-3 gap-x-3 gap-y-[1px] text-[7.5pt] text-gray-800">
                            <div>• <span className="font-semibold text-gray-900">Docker Foundations Professional</span> — LinkedIn & Docker</div>
                            <div>• <span className="font-semibold text-gray-900">Microsoft Azure AI Essentials</span> — Microsoft & LinkedIn</div>
                            <div>• <span className="font-semibold text-gray-900">Software Engineering Simulation</span> — JP Morgan (Forage)</div>
                            <div>• <span className="font-semibold text-gray-900">Front End Technologies</span> — IBM & Naan Mudhalvan</div>
                            <div>• <span className="font-semibold text-gray-900">SQL & Relational Databases</span> — IBM</div>
                            <div>• <span className="font-semibold text-gray-900">Full Stack Web Specialization</span> — NxtWave Academy</div>
                            <div>• <span className="font-semibold text-gray-900">Python for Data Science</span> — NPTEL</div>
                            <div>• <span className="font-semibold text-gray-900">Python (Basic)</span> — HackerRank</div>
                            <div>• <span className="font-semibold text-gray-900">JavaScript Essentials</span> — NxtWave CCBP</div>
                            <div>• <span className="font-semibold text-gray-900">AWS Architecture Best Practices</span> — Udemy</div>
                            <div>• <span className="font-semibold text-gray-900">AI Workflows & Automation</span> — NxtWave Academy</div>
                            <div>• <span className="font-semibold text-gray-900">IBM Cognos Analytics Internship</span> — Adroit Technologies</div>
                        </div>
                    </section>

                    {/* ACHIEVEMENTS & EXTRACURRICULARS */}
                    <section>
                        <h2 className="text-[8.8pt] font-extrabold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-[1px] mb-0.5">
                            Achievements & Extracurriculars
                        </h2>
                        <ul className="list-disc ml-4 text-[7.8pt] text-gray-800 space-y-[1px]">
                            <li>Enrolled in <span className="font-semibold text-gray-900">NxtWave CCBP 4.0 Full Stack Development Program</span> — industry-aligned curriculum covering advanced web architecture, databases, and cloud deployment.</li>
                            <li>Founded <span className="font-semibold text-gray-900">site studio.in</span> — independently managed client projects, technical scoping, and post-launch support for 5+ regional businesses.</li>
                            <li>Earned <span className="font-semibold text-gray-900">24+ verified certifications</span> from IBM, Microsoft, LinkedIn, JP Morgan, NPTEL, HackerRank, Infosys, and Udemy.</li>
                            <li>Participated in college tech symposiums and hackathons; demonstrated strong problem-solving, debugging, and cross-team collaboration.</li>
                        </ul>
                    </section>

                </div>

                {/* ── FOOTER ── */}
                <footer className="shrink-0 pt-0.5 mt-0.5 border-t border-gray-200 flex justify-between items-center text-[7.3pt] text-gray-600">
                    <span>Languages: <span className="font-medium text-gray-800">English (Professional) · Tamil (Native)</span></span>
                    <span>Areas of Interest: <span className="font-medium text-gray-800">Full Stack Dev · REST APIs · Technical Support · Cloud Technologies</span></span>
                </footer>

            </main>
        </div>
    );
}
