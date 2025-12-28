"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";

const certificates = [
    {
        title: "Python for Data Science",
        issuer: "NPTEL Online Certification",
        link: "/certs/nptel-python.png",
        localImage: "/certs/nptel-python.png",
        highlight: true,
    },
    {
        title: "Front End Technologies",
        issuer: "IBM | Naan Mudhalvan (TNSDC)",
        link: "/certs/ibm-frontend.jpg",
        localImage: "/certs/ibm-frontend.jpg",
        highlight: true,
    },
    {
        title: "EBPL Course",
        issuer: "HCL | Naan Mudhalvan (TNSDC)",
        link: "/certs/hcl-ebpl.jpg",
        localImage: "/certs/hcl-ebpl.jpg",
        highlight: true,
    },
    {
        title: "Full-Stack Development 101",
        issuer: "Simplilearn SkillUp!",
        link: "/certs/simplilearn-fullstack.png",
        localImage: "/certs/simplilearn-fullstack.png",
        highlight: true,
    },
    {
        title: "Software Engineering Job Simulation",
        issuer: "JP Morgan Chase & Co. | Forage",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7ioXvKEAiH99C_J.P.%20Morgan_mqT6L9D9K7nQv9z4D_1704256845321_completion_certificate.pdf",
    },
    {
        title: "Elements of AI",
        issuer: "University of Helsinki | Reaktor",
        link: "https://certificates.elementsofai.com/confirm/0a0a0a0a", // Placeholder link
    },
    {
        title: "Developer Foundations",
        issuer: "CCBP Academy",
        link: "https://certificates.ccbp.in/academy/developer-foundations?id=PDJTTZNJLC",
    },
    {
        title: "JavaScript Essentials",
        issuer: "NxtWave",
        link: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/UHDWJKZSQF.png",
    },
    {
        title: "Responsive Web Design",
        issuer: "NxtWave CCBP",
        link: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/KSHYBWWSWL.png",
    },
    {
        title: "Python (Basic)",
        issuer: "HackerRank",
        link: "https://www.hackerrank.com/certificates/5f2f1c413e85",
    },
    {
        title: "SQL & Relational Databases",
        issuer: "IBM",
        link: "https://courses.cognitiveclass.ai/certificates/aa4b488116264ec8b5403b26e2270882",
    },
    {
        title: "Introduction to Databases",
        issuer: "CCBP Academy",
        link: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/ERAFEOZYCF.png",
    },
    {
        title: "Build a Static Website",
        issuer: "CCBP Academy",
        link: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/KSHYBWWSWL.png",
    },
    {
        title: "Web Page with HTML",
        issuer: "Cognitive Class",
        link: "https://courses.cognitiveclass.ai/certificates/8031ff233b304b119184a223293c3c5c",
    },
];

export default function Certificates() {
    return (
        <section id="certificates" className="py-24 px-6 bg-near-black">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Professional <span className="text-accent-blue">Certifications</span></h2>
                        <p className="text-white/40 text-sm md:text-base">Validated expertise through globally recognized organizations.</p>
                    </div>
                    <div className="text-accent-blue font-mono text-xs md:text-sm tracking-widest uppercase">
                        {certificates.length} Total Verified
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {certificates.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className={`group glass p-6 rounded-[2rem] border border-white/5 hover:border-accent-blue/30 transition-all flex flex-col gap-4 relative overflow-hidden w-full max-w-[380px] ${cert.highlight ? 'ring-1 ring-accent-blue/20' : ''}`}
                        >
                            {cert.localImage ? (
                                <div className="absolute inset-0 opacity-10 group-hover:opacity-25 transition-opacity z-0 pointer-events-none">
                                    <Image src={cert.localImage} alt={cert.title} fill className="object-cover" unoptimized />
                                </div>
                            ) : (
                                <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                                    <Award size={120} />
                                </div>
                            )}

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-6 group-hover:bg-accent-blue group-hover:text-white transition-all">
                                    <Award size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-white mb-2 leading-tight group-hover:text-accent-blue transition-colors">
                                        {cert.title}
                                    </h3>
                                    <div className="text-xs text-white/40 mb-6 font-medium tracking-wide uppercase">{cert.issuer}</div>
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
