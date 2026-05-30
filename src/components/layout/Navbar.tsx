"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Container from "@/components/ui/Container";

const links = [
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Stack",
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
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
      "
    >
      <Container>
        <div
          className={`
            mt-4
            flex
            items-center
            justify-between
            rounded-full
            border
            border-black/10
            bg-white/80
            backdrop-blur-xl
            transition-all
            duration-300

            ${
              scrolled
                ? "px-5 py-3"
                : "px-6 py-4"
            }
          `}
        >
          {/* BRAND */}

          <Link
            href="/"
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.35em]
              text-zinc-950
            "
          >
            NV
          </Link>

          {/* NAV */}

          <nav
            className="
              hidden
              items-center
              gap-8
              md:flex
            "
          >
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

          {/* CTA */}

          <a
            href="/resume.pdf"
            className="
              rounded-full
              bg-zinc-950
              px-5
              py-2.5
              text-sm
              text-white
              transition-all
              hover:-translate-y-0.5
            "
          >
            Resume
          </a>
        </div>
      </Container>
    </header>
  );
}
