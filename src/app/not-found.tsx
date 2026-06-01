import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#f6f9fc] flex flex-col items-center justify-center px-6">
      <h1 className="text-8xl font-bold text-[#0a2540] tracking-tighter mb-4">404</h1>
      <p className="text-xl text-[#425466] mb-8 font-medium">Route not found in the architecture.</p>
      <Link 
        href="/"
        className="px-8 py-3 bg-[#635bff] text-white rounded-full font-bold shadow-[0_10px_20px_rgba(99,91,255,0.2)] hover:bg-[#5851df] transition-colors"
      >
        Return to Main Page
      </Link>
    </div>
  );
}
