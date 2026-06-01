import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Nikunj Variya | Software Engineer & Architect",
  description: "Full-stack engineering, system design, and product architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-background text-accent antialiased selection:bg-white/20">
      <body className={`${inter.variable} font-sans min-h-screen overflow-x-hidden`}>
        {/* Ambient background glow - completely static, no slop */}
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/[0.03] via-background to-background"></div>
        {children}
      </body>
    </html>
  );
}
