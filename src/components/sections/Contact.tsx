"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, MapPin, Linkedin, Github, Instagram, Twitter } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xanyqbvv", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                setIsSubmitted(true);
                form.reset();
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                setError("Failed to send. Please email me directly.");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Let's <span className="text-accent-blue">Connect</span></h2>
                        <p className="text-white/60 text-lg mb-12 max-w-md">
                            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
                        </p>

                        <div className="space-y-8">
                            <ContactItem icon={<Mail className="text-accent-blue" />} label="Email" value="pkvetrivelvvm@gmail.com" href="mailto:pkvetrivelvvm@gmail.com" />
                            <ContactItem icon={<Phone className="text-accent-violet" />} label="Phone" value="+91 7598611585" href="tel:+917598611585" />
                            <ContactItem icon={<MapPin className="text-accent-blue" />} label="Location" value="Tenkasi, Tamil Nadu, India" />
                        </div>

                        <div className="mt-16">
                            <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-white/30 mb-6">Social Ecosystem</h3>
                            <div className="flex gap-4">
                                <SocialLink href="https://www.linkedin.com/in/mrvvmoffical2005" icon={<Linkedin size={20} />} />
                                <SocialLink href="https://github.com/mr-vvm-2005" icon={<Github size={20} />} />
                                <SocialLink href="https://x.com/vetrivelvvm" icon={<Twitter size={20} />} />
                                <SocialLink href="https://www.instagram.com/mr.vvm_offical" icon={<Instagram size={20} />} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 relative"
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center py-20"
                            >
                                <div className="w-20 h-20 bg-accent-blue/20 rounded-full flex items-center justify-center text-accent-blue mb-6">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-white/40">Thank you for reaching out. I'll get back to you soon.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputGroup label="Full Name" placeholder="John Doe" name="name" />
                                    <InputGroup label="Email Address" placeholder="john@example.com" type="email" name="email" />
                                </div>
                                <InputGroup label="Subject" placeholder="Inquiry about new project" name="subject" />
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-blue/50 transition-all resize-none text-white"
                                        placeholder="Tell me more about your idea..."
                                        required
                                    />
                                </div>
                                {error && (
                                    <div className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                                        {error}
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 rounded-2xl bg-white text-[#000] font-bold uppercase tracking-widest hover:bg-accent-blue hover:text-white transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 border border-white disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-violet/5 rounded-full blur-[150px] -z-10 translate-x-1/3 translate-y-1/3" />
        </section>
    );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
    const Content = () => (
        <div className="flex items-center gap-5 group cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-near-black transition-all duration-500">
                {icon}
            </div>
            <div>
                <div className="text-[10px] uppercase tracking-widest text-white/30 mb-0.5">{label}</div>
                <div className="text-white font-medium group-hover:text-accent-blue transition-colors">{value}</div>
            </div>
        </div>
    );

    return href ? <a href={href}>{Content()}</a> : <Content />;
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white/60 hover:text-white hover:border-accent-blue/50 hover:bg-accent-blue/5 transition-all"
        >
            {icon}
        </a>
    );
}

function InputGroup({ label, placeholder, type = "text", name }: { label: string; placeholder: string; type?: string; name: string }) {
    return (
        <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/40 ml-1">{label}</label>
            <input
                type={type}
                name={name}
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-blue/50 transition-all text-white"
                placeholder={placeholder}
            />
        </div>
    );
}
