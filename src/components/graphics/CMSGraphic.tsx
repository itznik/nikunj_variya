"use client";

export default function CMSGraphic() {
  return (
    <div className="flex h-[320px] items-center justify-center">
      <div className="w-full max-w-lg rounded-[32px] border border-black/10 bg-white p-8">
        <div className="mb-6 h-12 rounded-xl bg-black" />

        <div className="space-y-4">
          <div className="h-4 rounded bg-neutral-200" />

          <div className="h-4 w-4/5 rounded bg-neutral-200" />

          <div className="h-4 w-2/3 rounded bg-neutral-200" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="h-24 rounded-xl bg-neutral-100" />

          <div className="h-24 rounded-xl bg-neutral-100" />
        </div>
      </div>
    </div>
  );
}
