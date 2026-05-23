import type { Metadata } from "next";
import "../styles/globals.css";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import LenisProvider from "@/components/animations/LenisProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins"
});
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
    title: "Mr.VVM | Vetrivel Murugan P - Full Stack Developer Portfolio",
    description: "Mr.VVM (VVM) - Vetrivel Murugan P Full Stack Developer Portfolio. Explore projects, certifications, internships, skills, achievements, and developer journey.",
    authors: [{ name: "Vetrivel Murugan P" }],
    openGraph: {
        title: "Mr.VVM | Full Stack Developer Portfolio",
        description: "Portfolio of Vetrivel Murugan P",
        url: "https://mr-vvm-2005.github.io/New-portfolio/",
        type: "website",
        images: [
            {
                url: "https://mr-vvm-2005.github.io/New-portfolio/profile.jpg",
            },
        ],
    },
};

import ParticleBackground from "@/components/sections/ParticleBackground";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable} ${jetbrains.variable}`}>
            <head>
                <meta name="google-site-verification" content="TtiPYJxbGH25dlDgDVrU5oOYn_RVsVWmYZPHHdew_ak" />
                <meta name="description" content="Mr.VVM (VVM) - Vetrivel Murugan P Full Stack Developer Portfolio. Explore projects, certifications, internships, skills, achievements, and developer journey." />
                <meta name="author" content="Vetrivel Murugan P" />
                <meta property="og:title" content="Mr.VVM | Full Stack Developer Portfolio" />
                <meta property="og:description" content="Portfolio of Vetrivel Murugan P" />
                <meta property="og:image" content="https://mr-vvm-2005.github.io/New-portfolio/profile.jpg" />
                <meta property="og:url" content="https://mr-vvm-2005.github.io/New-portfolio/" />
                <meta property="og:type" content="website" />
                <link rel="manifest" href="./manifest.json" />
                <meta name="keywords" content="VVM, Mr VVM, Mr.VVM, mr-vvm, mr_vvm, vetri, vetrivel, vetrivelvvm, pkvetrivel, Vetrivel Murugan, Vetrivel Murugan P, Full Stack Developer, Portfolio" />
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
                          "@context": "https://schema.org",
                          "@type": "Person",
                          "name": "Vetrivel Murugan P",
                          "additionalName": "Mr.VVM",
                          "alternateName": ["vvm", "mr.vvm","mr_vvm"],
                          "url": "https://mr-vvm-2005.github.io/New-portfolio/",
                          "jobTitle": "Full Stack Web Developer",
                          "sameAs": [
                            "https://in.linkedin.com/in/mrvvmoffical2005",
                            "https://github.com"
                          ]
                        }`
                    }}
                />
            </head>
            <body className="bg-near-black text-foreground antialiased selection:bg-accent-violet/30 overflow-x-hidden">
                <div style={{ display: "none" }}>
                    Mr.VVM VVM mr-vvm mr_vvm vetri vetrivel vetrivelvvm pkvetrivel Vetrivel Murugan Vetrivel Murugan P Full Stack Developer
                </div>
                <LenisProvider>
                    <div className="noise-overlay" />
                    <ParticleBackground />
                    <CustomCursor />
                    {children}
                </LenisProvider>
            </body>
        </html>
    );
}
