"use client";

import { useEffect, useState } from "react";

const links = [
  {
    label: "Work",
    href: "#projects",
  },
  {
    label: "Skills",
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
    const handler = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div
          className={`
            mt-5
            flex
            items-center
            justify-between
            transition-all
            duration-500

            ${
              scrolled
                ? "rounded-full border border-black/10 bg-white/90 px-6 py-4 backdrop-blur-xl"
                : "px-0 py-6"
            }
          `}
        >
          <a
            href="#"
            className="
              text-sm
              font-black
              uppercase
              tracking-[0.4em]
            "
          >
            NV
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  text-sm
                  text-neutral-500
                  transition
                  hover:text-black
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="/resume.pdf"
            className="
              rounded-full
              bg-black
              px-6
              py-3
              text-sm
              font-medium
              text-white
              transition
              hover:scale-[1.03]
            "
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
