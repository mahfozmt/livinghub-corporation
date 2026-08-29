import React, { useState, useEffect } from 'react';
import { Menu, X, Building2, Globe2, ShoppingBag, ChevronRight, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3' 
        : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Uses LivingHub corporation.png directly */}
          <a href="#" className="flex items-center group transition-transform hover:opacity-95">
            <img 
              src="./LivingHub corporation.png" 
              alt="Livinghub Corporation" 
              className="h-9 sm:h-11 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-50 border border-slate-200/80 rounded-full px-4 py-1.5 shadow-inner">
            <a href="#about" className="text-xs font-semibold text-slate-700 hover:text-[#0062eb] px-3.5 py-1.5 rounded-full hover:bg-white transition-all">
              About Corp
            </a>
            <a href="#entities" className="text-xs font-semibold text-slate-700 hover:text-[#0062eb] px-3.5 py-1.5 rounded-full hover:bg-white transition-all">
              Our Ventures
            </a>
            <a href="#livinghub-tech" className="text-xs font-semibold text-[#0062eb] hover:text-[#004ec4] px-3.5 py-1.5 rounded-full hover:bg-blue-50 transition-all flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#0062eb]" /> Livinghub Tech
            </a>
            <a href="#esgn" className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 px-3.5 py-1.5 rounded-full hover:bg-emerald-50 transition-all flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-emerald-600" /> ESGN
            </a>
            <a href="#lifestyle" className="text-xs font-semibold text-amber-600 hover:text-amber-700 px-3.5 py-1.5 rounded-full hover:bg-amber-50 transition-all flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5 text-amber-600" /> Lifestyle
            </a>
            <a href="#values" className="text-xs font-semibold text-slate-700 hover:text-[#0062eb] px-3.5 py-1.5 rounded-full hover:bg-white transition-all">
              Values
            </a>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0062eb] to-[#00b4d8] hover:from-[#004ec4] hover:to-[#0284c7] shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 active:scale-95"
            >
              <span>Get in Touch</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              About Corporation
            </a>
            <a 
              href="#entities" 
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Our Ventures Portfolio
            </a>
            <a 
              href="#livinghub-tech" 
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-[#0062eb] hover:bg-blue-50 rounded-lg flex items-center gap-2"
            >
              <Building2 className="w-4 h-4 text-[#0062eb]" /> Livinghub Technologies
            </a>
            <a 
              href="#esgn" 
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50 rounded-lg flex items-center gap-2"
            >
              <Globe2 className="w-4 h-4 text-emerald-600" /> ESGN (E SIM Global Networks)
            </a>
            <a 
              href="#lifestyle" 
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-amber-600 hover:bg-amber-50 rounded-lg flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-amber-600" /> Livinghub Lifestyle
            </a>
            <a 
              href="#values" 
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Corporate Values
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center py-2.5 rounded-xl text-sm font-bold text-white bg-[#0062eb]"
            >
              Contact Leadership
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
