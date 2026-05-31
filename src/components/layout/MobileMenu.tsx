"use client";

import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  {
    label: "Projects",
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

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            fixed
            inset-0
            z-[100]
            bg-[#f5f4ef]
          "
        >
          <div className="flex h-full flex-col px-8 pt-32">
            <div className="space-y-8">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="
                    block
                    text-5xl
                    font-black
                    tracking-[-0.04em]
                  "
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto border-t border-black/10 py-10">
              <p className="text-sm text-neutral-500">
                Software Engineer
              </p>

              <p className="mt-2 text-sm text-neutral-500">
                DSA • Systems • Full Stack
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
