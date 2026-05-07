import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TimelineSection from "@/components/sections/TimelineSection";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Scroll Progress Bar */}
            <ScrollProgressBar />

            {/* Navigation */}
            <nav className="fixed top-3 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference pointer-events-none">
                <div className="text-xl font-bold tracking-tighter text-white pointer-events-auto cursor-pointer group">
                    Mr.vvm<span className="text-accent-blue group-hover:text-accent-violet transition-colors">.</span>
                </div>
                <div className="hidden md:flex gap-8 pointer-events-auto">
                    {["About", "Projects", "Certifications", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
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
