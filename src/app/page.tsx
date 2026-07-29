import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TimelineSection from "@/components/sections/TimelineSection";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: "https://mr-vvm-2005.github.io/New-portfolio/",
    }
};

export default function Home() {
    return (
        <main className="min-h-screen">
            <Script id="person-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vetrivel Murugan P",
  "alternateName": ["Mr.VVM", "Mr VVM", "VVM", "vetrivelvvm", "pkvetrivel", "mrvvm"],
  "description": "Mr.VVM (Vetrivel Murugan P) is a Full Stack Developer from Tenkasi, Tamil Nadu, India. B.Tech IT student at Dr. Sivanthi Aditanar College of Engineering. Skilled in React, Next.js, Node.js, Python, SQL.",
  "url": "https://mr-vvm-2005.github.io/New-portfolio/",
  "image": "https://mr-vvm-2005.github.io/New-portfolio/profile.jpg",
  "jobTitle": "Full Stack Developer",
  "gender": "Male",
  "birthDate": "2005-09-11",
  "nationality": "Indian",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tenkasi",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Dr. Sivanthi Aditanar College of Engineering"
  },
  "email": "mailto:pkvetrivelvvm@gmail.com",
  "telephone": "+91-7598611585",
  "knowsAbout": [
    "HTML5", "CSS3", "JavaScript", "ReactJS", "Next.js",
    "Node.js", "Python", "SQL", "Tailwind CSS", "MongoDB",
    "PostgreSQL", "Full Stack Development"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/mrvvmoffical2005",
    "https://github.com/mr-vvm-2005",
    "https://x.com/vetrivelvvm",
    "https://www.instagram.com/mr.vvm_official/"
  ]
}` }} />
            {/* Scroll Progress Bar */}
            <ScrollProgressBar />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
                <div className="text-xl font-bold tracking-tighter text-white pointer-events-auto cursor-pointer group flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-accent-blue flex items-center justify-center text-white text-sm font-black">V</div>
                    <span className="hidden sm:inline">Vetrivel<span className="text-accent-blue group-hover:text-accent-violet transition-colors">.</span></span>
                </div>
                <div className="flex gap-4 md:gap-8 pointer-events-auto glass px-6 py-3 rounded-full border border-white/10 shadow-xl backdrop-blur-md">
                    {["About", "Projects", "Certifications"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-accent-blue transition-colors font-bold"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Sections */}
            <Hero />
            <About />
            <TimelineSection />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/5 text-center">
                <div className="max-w-6xl mx-auto flex flex-col gap-8">
                    <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {[
                            { label: "About",          href: "#about" },
                            { label: "Projects",       href: "#projects" },
                            { label: "Certifications", href: "#certificates" },
                            { label: "Contact",        href: "#contact" },
                        ].map(({ label, href }) => (
                            <a key={label} href={href} className="text-white/30 hover:text-white transition-colors text-xs uppercase tracking-widest">
                                {label}
                            </a>
                        ))}
                        <a href="https://github.com/mr-vvm-2005" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-accent-blue transition-colors text-xs uppercase tracking-widest">GitHub</a>
                        <a href="https://www.linkedin.com/in/mrvvmoffical2005" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-accent-violet transition-colors text-xs uppercase tracking-widest">LinkedIn</a>
                    </nav>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-white/40 text-sm">© 2025 Mr.vvm (Vetrivel Murugan P). All rights reserved.</div>
                        <div className="text-white/40 text-sm font-mono">Designed by <span className="text-accent-blue">Mr.vvm</span></div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
