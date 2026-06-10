"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import { useState } from "react";

type Category = "All" | "Frontend" | "Backend" | "AI/ML" | "Tools" | "Internship";

const categories: Category[] = ["All", "Frontend", "Backend", "AI/ML", "Tools", "Internship"];

const certificates = [
    // Existing 15
    {
        title: "Internship Certificate",
        issuer: "IPCS Global",
        date: "Jul 2025",
        category: "Internship" as Category,
        link: getAssetPath("/certs/ipcs-internship.jpg"),
        localImage: getAssetPath("/certs/ipcs-internship.jpg"),
        highlight: true,
    },
    {
        title: "Python for Data Science",
        issuer: "NPTEL Online Certification",
        date: "2024",
        category: "AI/ML" as Category,
        link: getAssetPath("/certs/nptel-python.png"),
        localImage: getAssetPath("/certs/nptel-python.png"),
        highlight: true,
    },
    {
        title: "Front End Technologies",
        issuer: "IBM | Naan Mudhalvan (TNSDC)",
        date: "2024",
        category: "Frontend" as Category,
        link: getAssetPath("/certs/ibm-frontend.jpg"),
        localImage: getAssetPath("/certs/ibm-frontend.jpg"),
        highlight: true,
    },
    {
        title: "EBPL Course",
        issuer: "HCL | Naan Mudhalvan (TNSDC)",
        date: "2024",
        category: "Tools" as Category,
        link: getAssetPath("/certs/hcl-ebpl.jpg"),
        localImage: getAssetPath("/certs/hcl-ebpl.jpg"),
        highlight: true,
    },
    {
        title: "Full-Stack Development 101",
        issuer: "Simplilearn SkillUp!",
        date: "2024",
        category: "Frontend" as Category,
        link: getAssetPath("/certs/simplilearn-fullstack.png"),
        localImage: getAssetPath("/certs/simplilearn-fullstack.png"),
        highlight: true,
    },
    {
        title: "Software Engineering Job Simulation",
        issuer: "JP Morgan Chase & Co. | Forage",
        date: "2024",
        category: "Tools" as Category,
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7ioXvKEAiH99C_J.P.%20Morgan_mqT6L9D9K7nQv9z4D_1704256845321_completion_certificate.pdf",
    },
    {
        title: "Elements of AI",
        issuer: "University of Helsinki | Reaktor",
        date: "2024",
        category: "AI/ML" as Category,
        link: "https://certificates.elementsofai.com/confirm/0a0a0a0a",
    },
    {
        title: "Developer Foundations",
        issuer: "CCBP Academy",
        date: "2024",
        category: "Frontend" as Category,
        link: "https://certificates.ccbp.in/academy/developer-foundations?id=PDJTTZNJLC",
    },
    {
        title: "JavaScript Essentials",
        issuer: "NxtWave",
        date: "2024",
        category: "Frontend" as Category,
        link: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/UHDWJKZSQF.png",
    },
    {
        title: "Responsive Web Design",
        issuer: "NxtWave CCBP",
        date: "2024",
        category: "Frontend" as Category,
        link: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/KSHYBWWSWL.png",
    },
    {
        title: "Python (Basic)",
        issuer: "HackerRank",
        date: "2024",
        category: "Backend" as Category,
        link: "https://www.hackerrank.com/certificates/5f2f1c413e85",
    },
    {
        title: "SQL & Relational Databases",
        issuer: "IBM",
        date: "2024",
        category: "Backend" as Category,
        link: "https://courses.cognitiveclass.ai/certificates/aa4b488116264ec8b5403b26e2270882",
    },
    {
        title: "Introduction to Databases",
        issuer: "CCBP Academy",
        date: "2024",
        category: "Backend" as Category,
        link: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/ERAFEOZYCF.png",
    },
    {
        title: "Build a Static Website",
        issuer: "CCBP Academy",
        date: "2024",
        category: "Frontend" as Category,
        link: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/KSHYBWWSWL.png",
    },
    {
        title: "Web Page with HTML",
        issuer: "Cognitive Class",
        date: "2024",
        category: "Frontend" as Category,
        link: "https://courses.cognitiveclass.ai/certificates/8031ff233b304b119184a223293c3c5c",
    },
    // New 7
    {
        title: "Introduction to Cognos Analytics (DA0104EN)",
        issuer: "IBM Career Education Program",
        date: "April 3, 2026",
        category: "AI/ML" as Category,
        link: getAssetPath("/certs/Intro to cognos Analytics certificate.jpeg"),
        localImage: getAssetPath("/certs/Intro to cognos Analytics certificate.jpeg"),
        highlight: true,
    },
    {
        title: "AI Workflows & Automation Workshop Project",
        issuer: "NxtWave Academy",
        date: "Jan 22, 2026",
        category: "AI/ML" as Category,
        link: getAssetPath("/certs/ai workshop.jpeg"),
        localImage: getAssetPath("/certs/ai workshop.jpeg"),
        highlight: true,
    },
    {
        title: "Spring Data JPA with Boot",
        issuer: "Infosys",
        date: "Feb 23, 2026",
        category: "Backend" as Category,
        link: getAssetPath("/certs/Spring Data JPA with Boot Certificate.jpeg"),
        localImage: getAssetPath("/certs/Spring Data JPA with Boot Certificate.jpeg"),
    },
    {
        title: "Spring 5 Basics with Spring Boot",
        issuer: "Infosys",
        date: "Feb 2, 2026",
        category: "Backend" as Category,
        link: getAssetPath("/certs/Spring 5 Basics with Spring Boot Certificate.jpeg"),
        localImage: getAssetPath("/certs/Spring 5 Basics with Spring Boot Certificate.jpeg"),
    },
    {
        title: "Spring REST",
        issuer: "Infosys",
        date: "Apr 6, 2026",
        category: "Backend" as Category,
        link: getAssetPath("/certs/Spring REST Certificate.jpeg"),
        localImage: getAssetPath("/certs/Spring REST Certificate.jpeg"),
    },
    {
        title: "IBM Cognos Analytics Virtual Internship",
        issuer: "Adroit Technologies Innovative Solutions Pvt Ltd",
        date: "Mar 2026 – Apr 2026",
        category: "Internship" as Category,
        link: getAssetPath("/certs/IBM INTERN completed certificate.png"),
        localImage: getAssetPath("/certs/IBM INTERN completed certificate.png"),
        highlight: true,
    },
    {
        title: "Basic AWS Architecture Best Practices",
        issuer: "Udemy",
        date: "Feb 9, 2026",
        category: "Tools" as Category,
        link: getAssetPath("/certs/AWS Udamey certificate.jpeg"),
        localImage: getAssetPath("/certs/AWS Udamey certificate.jpeg"),
    },
];

export default function Certificates() {
    const [activeCategory, setActiveCategory] = useState<Category>("All");

    const filtered = activeCategory === "All"
        ? certificates
        : certificates.filter(c => c.category === activeCategory);

    return (
        <section id="certificates" className="py-24 px-6 bg-near-black">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Professional <span className="text-accent-blue">Certifications</span></h2>
                        <p className="text-white/40 text-sm md:text-base">Validated expertise through globally recognized organizations.</p>
                    </div>
                    <div className="text-accent-blue font-mono text-xs md:text-sm tracking-widest uppercase">
                        22 Total Verified
                    </div>
                </div>

                {/* Category Filter Tabs */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            suppressHydrationWarning={true}
                            className={`px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 ${
                                activeCategory === cat
                                    ? "bg-accent-blue text-white border-accent-blue shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                                    : "bg-white/5 text-white/40 border-white/10 hover:border-accent-blue/30 hover:text-white"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {filtered.map((cert, index) => (
                        <motion.a
                            key={`${cert.title}-${index}`}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-category={cert.category}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.04 }}
                            viewport={{ once: true }}
                            className={`group glass p-6 rounded-[2rem] border border-white/5 hover:border-accent-blue/30 transition-all flex flex-col gap-4 relative overflow-hidden w-full max-w-[380px] ${cert.highlight ? 'ring-1 ring-accent-blue/20' : ''}`}
                        >
                            {(cert as any).localImage ? (
                                <div className="absolute inset-0 opacity-10 group-hover:opacity-25 transition-opacity z-0 pointer-events-none">
                                    <Image src={(cert as any).localImage} alt={cert.title} fill className="object-cover" unoptimized />
                                </div>
                            ) : (
                                <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                                    <Award size={120} />
                                </div>
                            )}

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-4 group-hover:bg-accent-blue group-hover:text-white transition-all">
                                    <Award size={24} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <h3 className="font-bold text-base text-white leading-tight group-hover:text-accent-blue transition-colors">
                                            {cert.title}
                                        </h3>
                                        <span className="shrink-0 px-2 py-0.5 rounded-full bg-accent-violet/10 text-accent-violet text-[9px] font-bold tracking-wider uppercase">
                                            {cert.category}
                                        </span>
                                    </div>
                                    <div className="text-xs text-white/40 mb-1 font-medium tracking-wide uppercase">{cert.issuer}</div>
                                    {cert.date && (
                                        <div className="text-[10px] text-white/25 mb-4">{cert.date}</div>
                                    )}
                                </div>
                                <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] text-accent-blue group-hover:gap-4 transition-all">
                                    Verify Credentials <ExternalLink size={12} />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
