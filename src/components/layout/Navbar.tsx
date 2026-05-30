"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const links = [
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Capabilities",
    href: "#capabilities",
  },
  {
    label: "Journey",
    href: "#journey",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between rounded-3xl border backdrop-blur-xl transition-all duration-300",
            "border-black/10 bg-white/80",
            scrolled
              ? "h-16 px-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              : "h-20 px-6"
          )}
        >
          <Link
            href="/"
            className="
              font-heading
              text-lg
              font-semibold
              tracking-tight
              text-zinc-950
            "
          >
            Nikunj Variya
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  text-sm
                  text-zinc-600
                  transition-colors
                  hover:text-zinc-950
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="
              rounded-2xl
              bg-zinc-950
              px-5
              py-3
              text-sm
              font-medium
              text-white
              transition-all
              hover:-translate-y-0.5
            "
          >
            Let's Talk
          </a>
        </div>
      </Container>
    </header>
  );
}
