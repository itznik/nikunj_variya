export default function BackgroundAccent() {
  return (
    <>
      <div
        className="
          pointer-events-none
          fixed
          left-[-200px]
          top-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#635bff]/10
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          fixed
          right-[-200px]
          bottom-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#7b74ff]/10
          blur-[140px]
        "
      />
    </>
  );
}
