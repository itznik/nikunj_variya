import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nikunj Variya",

  description:
    "Software engineer focused on data structures, algorithms, system design and full-stack development.",

  keywords: [
    "Nikunj Variya",
    "Software Engineer",
    "DSA",
    "Algorithms",
    "System Design",
    "Next.js",
  ],

  openGraph: {
    title: "Nikunj Variya",
    description:
      "Software engineer focused on algorithms and scalable systems.",
    type: "website",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
