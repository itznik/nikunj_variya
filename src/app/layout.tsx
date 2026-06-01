import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Optimize Font Loading (Prevents layout shifts and blocks)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Critical for Lighthouse text-visibility score
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Viewport configuration required for PWA and Mobile optimization
export const viewport: Viewport = {
  themeColor: "#0a2540",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Prevents zooming bugs on mobile inputs
};

// Enterprise-Grade SEO Metadata
export const metadata: Metadata = {
  title: "Nikunj Variya | Full-Stack Architect",
  description: "I am a Full-Stack MERN Engineer focused on building resilient, user-centric web applications. Specializing in System Design, DSA, and Distributed Architecture.",
  keywords: ["Software Engineer", "Full-Stack", "MERN", "Next.js", "System Design", "DSA", "Nikunj Variya"],
  authors: [{ name: "Nikunj Variya" }],
  creator: "Nikunj Variya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nikunjvariya.vercel.app",
    title: "Nikunj Variya | Full-Stack Architect",
    description: "Architecting high-performance data structures and distributed systems.",
    siteName: "Nikunj Variya Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You will need to add a 1200x630 image in your public folder
        width: 1200,
        height: 630,
        alt: "Nikunj Variya - Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikunj Variya | Full-Stack Architect",
    description: "Architecting high-performance data structures and distributed systems.",
    images: ["/og-image.jpg"],
  },
  manifest: "/manifest.json", // Triggers PWA installation
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
