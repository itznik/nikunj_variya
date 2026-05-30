import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Primary UI Font
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

// Technical Metadata Font
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-jetbrains-mono" 
});

export const metadata: Metadata = {
  title: "Software Engineer | Portfolio",
  description: "Engineering high-performance web applications and scalable architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      {/* We apply our base canvas color globally here */}
      <body className="min-h-screen bg-canvas font-sans flex flex-col items-center">
        {/* Maximum width constraint to keep the grid tight on ultra-wide screens */}
        <main className="w-full max-w-7xl px-6 md:px-12 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
