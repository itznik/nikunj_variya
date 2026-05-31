"use client";

export default function SystemGraphic() {
  return (
    <div className="flex h-[320px] items-center justify-center">
      <div className="flex items-center gap-6">
        <Node title="Client" />

        <Line />

        <Node title="API" />

        <Line />

        <Node title="DB" />
      </div>
    </div>
  );
}

function Node({
  title,
}: {
  title: string;
}) {
  return (
    <div
      className="
        flex
        h-24
        w-24
        items-center
        justify-center
        rounded-3xl
        bg-black
        text-white
      "
    >
      {title}
    </div>
  );
}

function Line() {
  return (
    <div className="h-[2px] w-12 bg-neutral-300" />
  );
}
