"use client";

import { useRef } from "react";
import { Printer } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export default function ResumePage() {
    const resumeRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen bg-gray-100 text-black p-4 md:p-8 print:p-0 flex justify-center">
            <title>Resume | Vetrivel Murugan P - Full Stack Developer</title>
            <meta name="description" content="Official Resume of Vetrivel Murugan P (Mr.VVM) - Full Stack Developer. View technical skills, experience, projects, and certifications." />
            <Script id="resume-person-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vetrivel Murugan P",
  "alternateName": ["Mr.VVM", "Mr VVM", "VVM", "vetrivelvvm", "pkvetrivel"],
  "description": "Resume of Mr.VVM (Vetrivel Murugan P) – Full Stack Developer from Tamil Nadu.",
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
                    @page { size: A4 portrait; margin: 0; }
                    html, body { height: 100% !important; margin: 0 !important; padding: 0 !important; background: white; }
                    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                    * {
                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
                    }
                    h1, h2, h3, h4, .role-title {
                        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
                    }
                    #resume-content {
                        margin: 0 !important;
                        padding: 12mm 15mm 12mm 15mm !important;
                        width: 210mm !important;
                        height: 297mm !important;
                        box-shadow: none !important;
                        box-sizing: border-box !important;
                        overflow: hidden !important;
                        display: flex !important;
                        flex-direction: column !important;
                        background: white !important;
                    }
                    .print-hide { display: none !important; }
                    h1 { font-size: 19pt !important; margin-bottom: 0.5mm !important; }
                    .role-title { font-size: 9.5pt !important; margin-bottom: 1.2mm !important; }
                    h2 { font-size: 10.5pt !important; margin-top: 3.5mm !important; margin-bottom: 1.5mm !important; border-bottom-width: 1px !important; padding-bottom: 0.4mm !important; }
                    h3 { font-size: 9.2pt !important; margin-bottom: 0.6mm !important; }
                    p, li, span, div, a { font-size: 8.2pt !important; line-height: 1.25 !important; }
                    section { margin-bottom: 3.5mm !important; }
                    ul { margin-top: 0.8mm !important; padding-left: 4mm !important; }
                    li { margin-bottom: 0.8mm !important; }
                    
                    /* Override Tailwind spacing for print */
                    #resume-content .space-y-3 > * + * { margin-top: 2mm !important; }
                    #resume-content .space-y-2 > * + * { margin-top: 1.5mm !important; }
                    #resume-content .space-y-4 > * + * { margin-top: 2.5mm !important; }
                    #resume-content .grid-cols-2 { gap: 6mm !important; }
                    #resume-content header { padding-bottom: 1.5mm !important; margin-bottom: 3.5mm !important; }
                    #resume-content .pl-2.5 { padding-left: 2mm !important; margin-top: 0.8mm !important; }
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
                        Full Stack Developer
                    </p>
                    <div className="flex flex-col items-center gap-y-1 text-[10px] text-gray-600 font-medium print:gap-y-0">
                        <div className="flex flex-wrap justify-center items-center gap-x-3">
                            <a href="mailto:pkvetrivelvvm@gmail.com" className="hover:underline text-blue-700">pkvetrivelvvm@gmail.com</a>
                            <span className="text-gray-300">|</span>
                            <a href="tel:+917598611585" className="hover:underline text-blue-700">+91 7598611585</a>
                            <span className="text-gray-300">|</span>
                            <span>Tenkasi, Tamil Nadu, India</span>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-x-3">
                            <a href="https://linkedin.com/in/mrvvmoffical2005" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">linkedin.com/in/mrvvmoffical2005</a>
                            <span className="text-gray-300">|</span>
                            <a href="https://github.com/mr-vvm-2005" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">github.com/mr-vvm-2005</a>
                            <span className="text-gray-300">|</span>
                            <a href="https://mr-vvm-2005.github.io/New-portfolio/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">Portfolio</a>
                        </div>
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
                            Result-oriented B.Tech Information Technology student and Full Stack Developer with hands-on experience through two internships, five live projects, and 24+ industry certifications. Proficient in frontend development (HTML5, CSS3, ES6+ JavaScript) and core backend frameworks (React.js, Node.js, Python, SQL, REST APIs). Experienced in data visualization and business intelligence utilizing IBM Cognos Analytics. Proven ability to build responsive web applications, design digital products, and deliver localized business solutions.
                        </p>
                    </section>

                    {/* SKILLS */}
                    <section className="break-inside-avoid">
                        <h2 className="text-[10px] font-extrabold text-gray-900 uppercase tracking-[0.15em] border-b border-gray-300 pb-1 mb-2">
                            Technical Skills
                        </h2>
                        <div className="grid grid-cols-[90px_1fr] gap-y-1 text-[10px] gap-x-2">
                            <span className="font-bold text-gray-800">Frontend:</span>
                            <span className="text-gray-700">HTML5, CSS3, JavaScript (ES6+), React.js (basic), Next.js (basic), TypeScript (basic), Tailwind CSS (basic), Bootstrap (basic), Responsive Web Design</span>

                            <span className="font-bold text-gray-800">Backend:</span>
                            <span className="text-gray-700">Node.js (basic), Express.js (basic), Python (basic), Spring Boot (basic), Spring Data JPA (basic), Spring REST (basic), SQLite (basic), RESTful APIs (basic), REST API design (basic), JWT (basic), MVC architecture (basic)</span>

                            <span className="font-bold text-gray-800">Database & BI:</span>
                            <span className="text-gray-700">SQL (basic), IBM Cognos Analytics, MongoDB (basic)</span>

                            <span className="font-bold text-gray-800">Tools:</span>
                            <span className="text-gray-700">Git, GitHub, VS Code, Figma, Vercel, Postman, AWS (Basics)</span>

                            <span className="font-bold text-gray-800">AI & Trends:</span>
                            <span className="text-gray-700">AI Prompting, AI Automation, Elements of AI</span>
                        </div>
                    </section>

                    {/* EXPERIENCE */}
                    <section className="break-inside-avoid">
                        <h2 className="text-[10px] font-extrabold text-gray-900 uppercase tracking-[0.15em] border-b border-gray-300 pb-1 mb-2">
                            Experience
                        </h2>
                        <div className="space-y-3">
                            {/* Freelance */}
                            <div className="break-inside-avoid">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[11px] font-bold text-gray-900">Freelance Full Stack Developer</h3>
                                    <span className="text-[9px] font-semibold text-gray-500">2025 – Present</span>
                                </div>
                                <div className="text-[9px] text-blue-700 font-semibold mb-1">Self-Employed · Remote</div>
                                <ul className="list-disc ml-4 text-[9px] text-gray-700 space-y-0.5 pl-1">
                                    <li>Developed and deployed business websites for clients and personal projects, optimizing for SEO and mobile responsiveness.</li>
                                    <li>Built responsive UI and integrated contact forms, localization toggles, and direct customer call/WhatsApp triggers.</li>
                                    <li>Created modular, production-ready website templates tailored for local businesses (salon, restaurant, retail).</li>
                                    <li>Managed full development lifecycle from requirements gathering to hosting, domain configuration, and continuous deployment.</li>
                                </ul>
                                <div className="pl-2.5 mt-1 border-l border-gray-300 ml-1.5">
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h4 className="text-[9.5px] font-bold text-gray-800">Founder & Developer — site studio.in</h4>
                                        <a href="https://www.instagram.com/site_studio.in/" target="_blank" rel="noopener noreferrer" className="text-[8px] font-semibold text-blue-700 hover:underline">Visit site studio.in</a>
                                    </div>
                                    <ul className="list-disc ml-3 text-[8.5px] text-gray-600 space-y-0.5 pl-1">
                                        <li>Built a freelance web development platform to offer client-focused business website solutions.</li>
                                        <li>Designed multiple templates, implemented pricing structures, and optimized landing pages to capture freelance opportunities.</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Adroit */}
                            <div className="break-inside-avoid">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[11px] font-bold text-gray-900">IBM Cognos Analytics Virtual Intern</h3>
                                    <span className="text-[9px] font-semibold text-gray-500">Mar 2026 – Apr 2026</span>
                                </div>
                                <div className="text-[9px] text-blue-700 font-semibold mb-1">Adroit Technologies Innovative Solutions Pvt Ltd · Remote</div>
                                <ul className="list-disc ml-4 text-[9px] text-gray-700 space-y-0.5 pl-1">
                                    <li>Engineered interactive dashboards and analytical reports using IBM Cognos Analytics, improving key business metric tracking by ~25%.</li>
                                    <li>Formulated data visualization solutions and processed ~5+ complex real-world datasets to extract actionable insights.</li>
                                    <li>Completed ~100% of curriculum milestones to earn a verified virtual internship completion certificate in analytics.</li>
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
                                    <li>Developed ~3 dynamic web applications using JavaScript and modern frameworks, reducing average page load times by ~15%.</li>
                                    <li>Built and analyzed data dashboards using IBM Cognos Analytics with ~10+ real-world datasets to identify business operational bottlenecks.</li>
                                    <li>Implemented responsive design components and RESTful API backend logic, securing ~100% cross-browser compatibility.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* PROJECTS */}
                    <section className="break-inside-avoid">
                        <h2 className="text-[10px] font-extrabold text-gray-900 uppercase tracking-[0.15em] border-b border-gray-300 pb-1 mb-2">
                            Key Projects
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 print:grid-cols-2 print:gap-x-4 print:gap-y-1.5">
                            <div className="break-inside-avoid">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[10.5px] font-bold text-gray-900">CareerNavigator</h3>
                                    <span className="text-[8px] font-mono text-gray-500 border border-gray-200 px-1 rounded">HTML • CSS • JS • AI</span>
                                </div>
                                <p className="text-[9px] text-gray-700 leading-snug">
                                    Developed an AI-powered career readiness web application featuring a resume analyzer, skill gap detector, and customized learning roadmap generator. Integrated client-side parsing rules that improved ATS compliance rates by ~35% for student profiles. Live: <a href="https://mr-vvm-2005.github.io/Career-Navigator/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">mr-vvm-2005.github.io/Career-Navigator/</a>
                                </p>
                            </div>
                            <div className="break-inside-avoid">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[10.5px] font-bold text-gray-900">RSM Traders (Wholesale & Retail Platform)</h3>
                                    <span className="text-[8px] font-mono text-gray-500 border border-gray-200 px-1 rounded">HTML5 • CSS3 • JS • Netlify • SEO</span>
                                </div>
                                <p className="text-[9px] text-gray-700 leading-snug">
                                    Designed and hosted a fully responsive product catalog platform for a regional distributor. Integrated bilingual localization (English/Tamil) and optimized for local search visibility (SEO) via Google Search Console. Features direct WhatsApp call-to-action triggers and Netlify form handling to increase client inquiries by ~25%. Live: <a href="https://rsm-traders.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">rsm-traders.netlify.app/</a>
                                </p>
                            </div>
                            <div className="break-inside-avoid">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[10.5px] font-bold text-gray-900">Dental Care Appointment System</h3>
                                    <span className="text-[8px] font-mono text-gray-500 border border-gray-200 px-1 rounded">React • CSS • Vercel</span>
                                </div>
                                <p className="text-[9px] text-gray-700 leading-snug">
                                    Engineered a responsive medical appointment booking platform featuring real-time doctor availability and patient scheduling. Implemented REST API endpoints and state logic to reduce scheduling overhead by ~40%. Live: <a href="https://dental-care-appointment-booking.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">dental-care-appointment-booking.vercel.app/</a>
                                </p>
                            </div>
                            <div className="break-inside-avoid">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-[10.5px] font-bold text-gray-900">Simple Resume Builder</h3>
                                    <span className="text-[8px] font-mono text-gray-500 border border-gray-200 px-1 rounded">JS • Canvas</span>
                                </div>
                                <p className="text-[9px] text-gray-700 leading-snug">
                                    Built a high-performance client-side resume generator featuring custom template rendering and HTML5 Canvas-based PDF exporting. Achieved instantaneous rendering and zero server latency to protect user privacy. Live: <a href="https://mr-vvm-2005.github.io/Simple-resume-builder-project/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">mr-vvm-2005.github.io/Simple-resume-builder-project/</a>
                                </p>
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
                                    <p className="text-[8px] text-gray-600 font-semibold">CGPA: 7.7</p>
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
                                Key Certifications (24+ Total)
                            </h2>
                            <ul className="text-[9px] text-gray-700 space-y-0.5">
                                <li><span className="font-semibold text-gray-900">Docker Foundations Professional</span> | LinkedIn & Docker</li>
                                <li><span className="font-semibold text-gray-900">Microsoft Azure AI Essentials</span> | Microsoft & LinkedIn</li>
                                <li><span className="font-semibold text-gray-900">Software Engineering Job Simulation</span> | JP Morgan</li>
                                <li><span className="font-semibold text-gray-900">Spring Boot, JPA, REST</span> | Infosys</li>
                                <li><span className="font-semibold text-gray-900">Front End Technologies</span> | IBM & Naan Mudhalvan</li>
                                <li><span className="font-semibold text-gray-900">SQL & Databases</span> | IBM</li>
                                <li><span className="font-semibold text-gray-900">Intro to Cognos Analytics (DA0104EN)</span> | IBM</li>
                                <li><span className="font-semibold text-gray-900">AWS Architecture Best Practices</span> | Udemy</li>
                                <li><span className="font-semibold text-gray-900">Python for Data Science</span> | NPTEL</li>
                            </ul>
                        </section>
                    </div>

                    {/* FOOTER */}
                    <footer className="mt-auto pt-2 border-t border-gray-200 text-center break-inside-avoid">
                        <p className="text-[9px] text-gray-500">
                            Languages: English (Professional), Tamil (Native)
                        </p>
                    </footer>
                </div>
            </main>
        </div>
    );
}
