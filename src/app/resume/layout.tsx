import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume – Mr.VVM | Vetrivel Murugan P Full Stack Developer",
    alternates: {
        canonical: "https://mr-vvm-2005.github.io/New-portfolio/resume/",
    },
    openGraph: {
        title: "Resume – Mr.VVM | Vetrivel Murugan P Full Stack Developer",
        url: "https://mr-vvm-2005.github.io/New-portfolio/resume/",
    },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
