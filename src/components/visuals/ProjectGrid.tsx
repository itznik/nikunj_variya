export default function ProjectGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <div className="md:col-span-2 h-[400px] rounded-[40px] bg-black" />

      <div className="h-[400px] rounded-[40px] bg-neutral-200" />

      <div className="h-[400px] rounded-[40px] bg-neutral-300" />
    </div>
  );
}
