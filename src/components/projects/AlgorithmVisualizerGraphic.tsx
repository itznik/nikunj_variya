export default function AlgorithmVisualizerGraphic() {
  const bars = [40, 80, 120, 60, 140, 100, 180, 90];

  return (
    <div className="flex h-full items-end justify-center gap-3 p-10">
      {bars.map((height, index) => (
        <div
          key={index}
          style={{ height }}
          className="
            w-8
            rounded-t-xl
            bg-zinc-950
          "
        />
      ))}
    </div>
  );
}
