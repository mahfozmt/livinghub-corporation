import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Building2, Globe2, ShoppingBag, ShieldCheck, ChevronRight, Languages, Check, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3' 
        : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center group transition-transform hover:opacity-95">
            <img 
              src="./LivingHub corporation.png" 
              alt="Livinghub Corporation" 
              className="h-9 sm:h-11 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-50 border border-slate-200/80 rounded-full px-4 py-1.5 shadow-inner">
            <a href="#about" className="text-xs font-semibold text-slate-700 hover:text-[#0062eb] px-3 py-1.5 rounded-full hover:bg-white transition-all">
              {t('nav.about')}
            </a>
            <a href="#entities" className="text-xs font-semibold text-slate-700 hover:text-[#0062eb] px-3 py-1.5 rounded-full hover:bg-white transition-all">
              {t('nav.ventures')}
            </a>
            <a href="#livinghub-tech" className="text-xs font-semibold text-[#0062eb] hover:text-[#004ec4] px-3 py-1.5 rounded-full hover:bg-blue-50 transition-all flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#0062eb]" /> {t('nav.tech')}
            </a>
            <a href="#esgn" className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 px-3 py-1.5 rounded-full hover:bg-emerald-50 transition-all flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-emerald-600" /> {t('nav.esgn')}
            </a>
            <a href="#lifestyle" className="text-xs font-semibold text-amber-600 hover:text-amber-700 px-3 py-1.5 rounded-full hover:bg-amber-50 transition-all flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5 text-amber-600" /> {t('nav.lifestyle')}
            </a>
            <a href="#b2b-gov" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 px-3 py-1.5 rounded-full hover:bg-indigo-50 transition-all flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" /> {t('nav.b2b')}
            </a>
            <a href="#values" className="text-xs font-semibold text-slate-700 hover:text-[#0062eb] px-3 py-1.5 rounded-full hover:bg-white transition-all">
              {t('nav.values')}
            </a>
          </nav>

          {/* Right Action & Language Selector */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                  isLangOpen 
                    ? 'bg-blue-50 border-[#0062eb] text-[#0062eb] shadow-sm' 
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300'
                }`}
                aria-label="Select Language"
              >
                <Languages className="w-4 h-4 text-[#0062eb]" />
                <span className="font-semibold">{language === 'en' ? 'English' : 'বাংলা'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isLangOpen ? 'rotate-180 text-[#0062eb]' : 'text-slate-400'}`} />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                    Select Language / ভাষা
                  </div>
                  
                  {/* English Option */}
                  <button
                    type="button"
                    onClick={() => handleSelectLanguage('en')}
                    className={`w-full px-3.5 py-2 text-left text-xs font-semibold flex items-center justify-between transition-colors ${
                      language === 'en'
                        ? 'bg-blue-50/80 text-[#0062eb]'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">EN</span>
                      <span>English</span>
                    </div>
                    {language === 'en' && <Check className="w-4 h-4 text-[#0062eb]" />}
                  </button>

                  {/* Bangla Option */}
                  <button
                    type="button"
                    onClick={() => handleSelectLanguage('bn')}
                    className={`w-full px-3.5 py-2 text-left text-xs font-semibold flex items-center justify-between transition-colors ${
                      language === 'bn'
                        ? 'bg-blue-50/80 text-[#0062eb]'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[10px] font-bold text-emerald-700">বাং</span>
                      <span className="font-['Hind_Siliguri',sans-serif]">বাংলা</span>
                    </div>
                    {language === 'bn' && <Check className="w-4 h-4 text-[#0062eb]" />}
                  </button>
                </div>
              )}
            </div>

            {/* Contact CTA */}
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0062eb] to-[#00b4d8] hover:from-[#004ec4] hover:to-[#0284c7] shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 active:scale-95"
            >
              <span>{t('nav.getInTouch')}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            {/* Quick Mobile Lang Switcher Button */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="px-2.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1.5"
              aria-label="Switch Language"
            >
              <Languages className="w-3.5 h-3.5 text-[#0062eb]" />
              <span>{language === 'en' ? 'বাংলা' : 'EN'}</span>
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="xl:hidden mt-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Mobile Language Switcher Row */}
            <div className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl mb-1">
              <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                <Languages className="w-4 h-4 text-[#0062eb]" /> Language / ভাষা:
              </span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    language === 'en' 
                      ? 'bg-[#0062eb] text-white shadow-sm' 
                      : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('bn')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all font-['Hind_Siliguri',sans-serif] ${
                    language === 'bn' 
                      ? 'bg-[#0062eb] text-white shadow-sm' 
                      : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  বাংলা
                </button>
              </div>
            </div>

            <a 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              {t('nav.aboutFull')}
            </a>
            <a 
              href="#entities" 
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              {t('nav.venturesFull')}
            </a>
            <a 
              href="#livinghub-tech" 
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-[#0062eb] hover:bg-blue-50 rounded-lg flex items-center gap-2"
            >
              <Building2 className="w-4 h-4 text-[#0062eb]" /> {t('nav.techFull')}
            </a>
            <a 
              href="#esgn" 
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50 rounded-lg flex items-center gap-2"
            >
              <Globe2 className="w-4 h-4 text-emerald-600" /> {t('nav.esgnFull')}
            </a>
            <a 
              href="#lifestyle" 
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-amber-600 hover:bg-amber-50 rounded-lg flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-amber-600" /> {t('nav.lifestyleFull')}
            </a>
            <a
              href="#b2b-gov"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 rounded-lg flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-indigo-600" /> {t('nav.b2bFull')}
            </a>
            <a 
              href="#values" 
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              {t('nav.valuesFull')}
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center py-2.5 rounded-xl text-sm font-bold text-white bg-[#0062eb]"
            >
              {t('nav.contactLeader')}
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
