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
            "flex items-center justify-between rounded-3xl border transition-all duration-300",
            "border-white/10",
            "bg-[#111111]/90",
            "backdrop-blur-xl",
            scrolled
              ? "h-16 px-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
              : "h-20 px-6"
          )}
        >
          {/* LOGO */}

          <Link
            href="/"
            className="
              font-heading
              text-lg
              font-semibold
              tracking-tight
              text-white
              transition-opacity
              hover:opacity-80
            "
          >
            Nikunj Variya
          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  text-sm
                  text-zinc-400
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}

          <a
            href="#contact"
            className="
              rounded-2xl
              bg-white
              px-5
              py-3
              text-sm
              font-medium
              text-black
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            Let's Talk
          </a>
        </div>
      </Container>
    </header>
  );
}
