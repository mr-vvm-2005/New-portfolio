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
    title: "Vetrivel Murugan P | Full Stack Developer Portfolio",
    description: "Vetrivel Murugan P - Aspiring Full Stack Developer from Tamil Nadu. Explore my projects, certifications, and internship experience.",
    openGraph: {
        title: "Vetrivel Murugan P | Full Stack Developer Portfolio",
        description: "Projects, Skills, Certifications & More",
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
                <meta name="description" content="Vetrivel Murugan P - Aspiring Full Stack Developer from Tamil Nadu. Explore my projects, certifications, and internship experience." />
                <meta property="og:title" content="Vetrivel Murugan P | Full Stack Developer Portfolio" />
                <meta property="og:description" content="Projects, Skills, Certifications & More" />
                <meta property="og:image" content="https://mr-vvm-2005.github.io/New-portfolio/profile.jpg" />
                <meta property="og:url" content="https://mr-vvm-2005.github.io/New-portfolio/" />
                <meta property="og:type" content="website" />
                <link rel="manifest" href="./manifest.json" />
                <meta name="keywords" content="Vetrivel Murugan P, Vetrivel Murugan, mr-vvm, vvm , mr.vvm, mr_vvm, mr-vvm-2005, Vetrivel Murugan Developer, Full Stack Developer Tamil Nadu, Vetrivel Murugan Portfolio" />
            </head>
            <body className="bg-near-black text-foreground antialiased selection:bg-accent-violet/30 overflow-x-hidden">
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
