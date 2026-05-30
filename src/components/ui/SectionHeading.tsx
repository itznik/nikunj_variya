interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-24">
      <p
        className="
          text-xs
          uppercase
          tracking-[0.35em]
          text-zinc-500
        "
      >
        {label}
      </p>

      <h2
        className="
          mt-5
          max-w-5xl
          font-heading
          text-5xl
          font-bold
          tracking-[-0.06em]
          text-zinc-950
          md:text-6xl
          lg:text-7xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-6
            max-w-2xl
            text-lg
            leading-relaxed
            text-zinc-600
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}
