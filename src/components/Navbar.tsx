"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-black text-2xl tracking-tighter text-[#0A2540]">NV</span>
          <div className="w-2 h-2 bg-[#635BFF] rounded-sm group-hover:scale-150 transition-transform"></div>
        </a>
        
        <nav className="hidden md:flex gap-8 font-semibold text-[15px] text-[#425466]">
          <a href="#deployments" className="hover:text-[#0A2540] transition-colors">Deployments</a>
          <a href="#infrastructure" className="hover:text-[#0A2540] transition-colors">Infrastructure</a>
          <a href="#stack" className="hover:text-[#0A2540] transition-colors">Integrations</a>
        </nav>

        <div className="hidden md:flex">
          <a href="#contact" className="bg-[#635BFF]/10 text-[#635BFF] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#635BFF] hover:text-white transition-all flex items-center gap-2 group">
            Request contact <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <button className="md:hidden text-[#0A2540]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
