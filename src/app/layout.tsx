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
    title: "Vetrivel Murugan P | Aspiring Full Stack Developer",
    description: "Senior Creative Portfolio of Vetrivel Murugan P - Aspiring Full Stack Developer specialized in React, Next.js, and Cinematic Web Experiences.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable} ${jetbrains.variable}`}>
            <body className="bg-near-black text-foreground antialiased selection:bg-accent-violet/30">
                <LenisProvider>
                    <div className="noise-overlay" />
                    <CustomCursor />
                    {children}
                </LenisProvider>
            </body>
        </html>
    );
}
