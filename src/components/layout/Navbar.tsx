"use client";

import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handler);

    return () =>
      window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div
            className={`
              mt-4
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
                tracking-[0.4em]
              "
            >
              NV
            </a>

            <nav className="hidden items-center gap-10 lg:flex">
              <a href="#projects">Projects</a>

              <a href="#capabilities">Skills</a>

              <a href="#journey">Journey</a>

              <a href="#contact">Contact</a>
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="/resume.pdf"
                className="
                  hidden
                  rounded-full
                  bg-black
                  px-6
                  py-3
                  text-sm
                  text-white
                  lg:block
                "
              >
                Resume
              </a>

              <button
                onClick={() =>
                  setMenuOpen(!menuOpen)
                }
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  lg:hidden
                "
              >
                {menuOpen ? "×" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
