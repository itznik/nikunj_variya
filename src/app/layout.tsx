import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter is the closest free alternative to Stripe's custom Söhne font
const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Nikunj Variya | Systems Architect",
  description: "Flexible, high-performance software architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased selection:bg-[#635bff] selection:text-white">
      {/* We rely on globals.css for the base background/text colors.
        Removed the hardcoded "dark" class to allow mixed light/dark sections.
      */}
      <body className={`${inter.variable} font-sans min-h-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
