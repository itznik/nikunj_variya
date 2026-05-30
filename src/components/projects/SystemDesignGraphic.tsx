export default function SystemDesignGraphic() {
  return (
    <div className="flex h-full items-center justify-center p-10">
      <div className="flex items-center gap-4">
        <Node label="Client" />

        <Connector />

        <Node label="API" />

        <Connector />

        <Node label="DB" />
      </div>
    </div>
  );
}

function Node({
  label,
}: {
  label: string;
}) {
  return (
    <div
      className="
        flex
        h-20
        w-20
        items-center
        justify-center
        rounded-2xl
        bg-zinc-950
        text-sm
        font-medium
        text-white
      "
    >
      {label}
    </div>
  );
}

function Connector() {
  return (
    <div className="h-1 w-12 bg-zinc-300" />
  );
}
