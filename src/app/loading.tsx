export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#0a2540] z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Simple elegant orbital spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-[#1a365d]" />
          <div className="absolute inset-0 rounded-full border-2 border-[#00d4ff] border-t-transparent animate-spin" />
        </div>
        <span className="font-mono text-xs text-[#00d4ff] uppercase tracking-[0.3em]">
          Loading...
        </span>
      </div>
    </div>
  );
}
