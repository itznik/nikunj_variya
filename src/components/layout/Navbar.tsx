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
      setScrolled(window.scrollY > 40);
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
        scrolled && "py-2"
      )}
    >
      <Container>
        <div
          className={cn(
            "mt-4 flex h-16 items-center justify-between rounded-2xl border border-black/5 bg-white/90 px-6 backdrop-blur-sm transition-all duration-300",
            scrolled && "h-14 shadow-sm"
          )}
        >
          <Link href="/" className="group">
            <span className="font-heading text-lg font-semibold tracking-tight">
              Nikunj Variya
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-neutral-600 transition-colors hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-xl bg-black px-4 py-2 text-sm text-white transition-transform hover:scale-[1.03]"
          >
            Let's Talk
          </a>
        </div>
      </Container>
    </header>
  );
}
