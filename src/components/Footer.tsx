"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F6F9FC] pt-12 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="font-black text-xl tracking-tighter text-[#0A2540]">NV</span>
          <div className="w-1.5 h-1.5 bg-[#635BFF] rounded-sm"></div>
        </div>
        
        <p className="text-sm font-medium text-[#425466]">
          © {new Date().getFullYear()} Nikunj Variya. All rights reserved.
        </p>

        <div className="flex gap-6 font-semibold text-sm text-[#0A2540]">
          <a href="#" className="hover:text-[#635BFF] transition-colors">GitHub</a>
          <a href="#" className="hover:text-[#635BFF] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#635BFF] transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
