"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import { fadeUp } from "@/animations/fadeUp";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f6f5f2] py-40"
    >
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-zinc-500
            "
          >
            Contact
          </p>

          <h2
            className="
              mt-8
              max-w-5xl
              font-heading
              font-bold
              leading-[0.9]
              tracking-[-0.06em]
              text-zinc-950
              text-[4rem]
              sm:text-[5rem]
              lg:text-[8rem]
            "
          >
            Let's Build
            <br />
            Something Useful.
          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-relaxed
              text-zinc-600
            "
          >
            Interested in software engineering,
            full-stack development, algorithms,
            system design or simply discussing
            interesting ideas.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            mt-20
            border-t
            border-black/10
            pt-10
          "
        >
          <a
            href="mailto:nikvrya@gmail.com"
            className="
              block
              text-2xl
              font-semibold
              text-zinc-950
              transition-opacity
              hover:opacity-60
              md:text-4xl
            "
          >
            nikvrya@gmail.com
          </a>

          <div
            className="
              mt-12
              grid
              gap-6
              sm:grid-cols-3
            "
          >
            <ContactLink
              title="GitHub"
              href="https://github.com"
            />

            <ContactLink
              title="LinkedIn"
              href="https://linkedin.com"
            />

            <ContactLink
              title="Resume"
              href="/resume.pdf"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function ContactLink({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={
        href.startsWith("http")
          ? "_blank"
          : undefined
      }
      rel={
        href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
      className="
        group
        rounded-[32px]
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
        Link
      </p>

      <h3
        className="
          mt-4
          text-2xl
          font-bold
          text-zinc-950
        "
      >
        {title}
      </h3>

      <span
        className="
          mt-6
          inline-block
          text-zinc-600
          transition-transform
          group-hover:translate-x-1
        "
      >
        Visit →
      </span>
    </a>
  );
}
