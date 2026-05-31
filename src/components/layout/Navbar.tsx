"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      "scroll",
      handler
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handler
      );
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
            duration-300

            ${
              scrolled
                ? "rounded-full border border-black/10 bg-white/90 px-6 py-4 backdrop-blur-xl"
                : "px-0 py-5"
            }
          `}
        >
          <a
            href="#"
            className="
              text-sm
              font-black
              tracking-[0.4em]
            "
          >
            NV
          </a>

          <nav className="hidden gap-10 lg:flex">
            <a href="#projects">
              Work
            </a>

            <a href="#capabilities">
              Skills
            </a>

            <a href="#journey">
              Journey
            </a>

            <a href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="/resume.pdf"
            className="
              rounded-full
              bg-black
              px-6
              py-3
              text-sm
              text-white
            "
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
