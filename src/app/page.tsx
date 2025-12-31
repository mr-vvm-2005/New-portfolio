import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TimelineSection from "@/components/sections/TimelineSection";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import { MoveDown } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Navigation - Glass Overlay */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference pointer-events-none">
                <div className="text-xl font-bold tracking-tighter text-white pointer-events-auto cursor-pointer group">
                    Mr.vvm<span className="text-accent-blue group-hover:text-accent-violet transition-colors">.</span>
                </div>
                <div className="hidden md:flex gap-8 pointer-events-auto">
                    {["About", "Projects", "Contact"].map((item) => (
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
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-white/40 text-sm">
                        © 2025 Mr.vvm (Vetrivel Murugan P). All rights reserved.
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="text-white/20 hover:text-white transition-colors text-xs uppercase tracking-widest">Privacy Policy</a>
                        <a href="#" className="text-white/20 hover:text-white transition-colors text-xs uppercase tracking-widest">Terms of Service</a>
                    </div>
                    <div className="text-white/40 text-sm font-mono">
                        Designed by <span className="text-accent-blue">Mr.vvm</span>
                    </div>
                </div>
            </footer>
        </main>
    );
}
