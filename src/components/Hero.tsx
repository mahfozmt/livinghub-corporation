import React from 'react';
import { ArrowUpRight, Building2, Globe2, ShoppingBag, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden light-mesh-bg border-b border-slate-100">
      {/* Decorative subtle background gradient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-400/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-400/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0062eb] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0062eb]" />
            <span>{t('hero.badge')}</span>
          </div>

          {/* Main Title with Logo Brand Colors */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0a1936] leading-[1.15] mb-6">
            {t('hero.title1')} <span className="text-[#0062eb]">{t('hero.titleSmartLiving')}</span>,{' '}
            <span className="text-[#00b4d8]">{t('hero.titleGlobalTelecom')}</span> {t('hero.titleModernLifestyle')}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
            <strong className="text-[#0a1936] font-semibold">{t('hero.description1')}</strong> {t('hero.description2')}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a 
              href="#entities" 
              className="px-7 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0062eb] to-[#00b4d8] hover:from-[#004ec4] hover:to-[#0284c7] shadow-lg shadow-blue-500/25 transition-all duration-200 flex items-center gap-2 group active:scale-95"
            >
              <span>{t('hero.ctaExplore')}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a 
              href="#about" 
              className="px-7 py-3.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all duration-200"
            >
              {t('hero.ctaAbout')}
            </a>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Corporate Venture Hierarchy / Tree Map */}
        {/* ========================================================= */}
        <div className="max-w-6xl mx-auto">
          {/* Top Parent Node */}
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[11px] font-bold uppercase tracking-wider mb-3 border border-blue-200/80 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0062eb] animate-pulse"></span>
              <span>{t('hero.treeParent')}</span>
            </div>

            <div className="white-card px-8 py-4 rounded-2xl border-slate-300 shadow-lg flex items-center justify-center bg-white/95 backdrop-blur-sm relative z-10 hover:border-blue-400 transition-all hover:scale-[1.02]">
              <img 
                src="./LivingHub corporation.png" 
                alt="Livinghub Corporation" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            {/* Tree Branch Connector Lines (Desktop/Tablet) */}
            <div className="w-full hidden md:flex flex-col items-center relative -mt-1 pointer-events-none">
              {/* Central Stem */}
              <div className="w-0.5 h-7 bg-gradient-to-b from-[#0062eb] to-slate-300 relative">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0062eb] ring-4 ring-blue-100 absolute -bottom-1 left-1/2 -translate-x-1/2"></span>
              </div>
              {/* Horizontal Bar spanning across 3 cards */}
              <div className="w-[68%] h-0.5 bg-slate-300 relative mt-1">
                {/* Left Drop Line */}
                <div className="absolute left-0 top-0 w-0.5 h-6 bg-slate-300">
                  <span className="w-2 h-2 rounded-full bg-blue-500 ring-2 ring-blue-100 absolute -bottom-1 left-1/2 -translate-x-1/2"></span>
                </div>
                {/* Center Drop Line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-6 bg-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-100 absolute -bottom-1 left-1/2 -translate-x-1/2"></span>
                </div>
                {/* Right Drop Line */}
                <div className="absolute right-0 top-0 w-0.5 h-6 bg-slate-300">
                  <span className="w-2 h-2 rounded-full bg-amber-500 ring-2 ring-amber-100 absolute -bottom-1 left-1/2 -translate-x-1/2"></span>
                </div>
              </div>
              <div className="h-6"></div>
            </div>
          </div>

          {/* 3 Child Venture Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 md:mt-0">
            {/* Child Card 1: Livinghub Tech */}
            <a 
              href="#livinghub-tech" 
              className="white-card p-6 rounded-2xl relative overflow-hidden group border-slate-200 hover:border-blue-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 gap-2">
                  <div className="h-12 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center">
                    <img 
                      src="./Livinghub final logo.png" 
                      alt="Livinghub Technologies Logo" 
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-blue-50 text-[#0062eb] border border-blue-200 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" /> {t('hero.techBadge')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0a1936] group-hover:text-[#0062eb] transition-colors mb-2">
                  {t('hero.techTitle')}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {t('hero.techDesc')}
                </p>
              </div>
              <div className="text-xs font-bold text-[#0062eb] flex items-center gap-1.5 pt-3 border-t border-slate-100">
                <span>{t('hero.techCta')}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Child Card 2: ESGN */}
            <a 
              href="#esgn" 
              className="white-card p-6 rounded-2xl relative overflow-hidden group border-slate-200 hover:border-emerald-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 gap-2">
                  <div className="h-12 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center">
                    <img 
                      src="./eSIM_Global_Network-01logo.png" 
                      alt="ESGN Logo" 
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5" /> {t('hero.esgnBadge')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0a1936] group-hover:text-emerald-600 transition-colors mb-2">
                  {t('hero.esgnTitle')}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {t('hero.esgnDesc')}
                </p>
              </div>
              <div className="text-xs font-bold text-emerald-600 flex items-center gap-1.5 pt-3 border-t border-slate-100">
                <span>{t('hero.esgnCta')}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Child Card 3: Lifestyle */}
            <a 
              href="#lifestyle" 
              className="white-card p-6 rounded-2xl relative overflow-hidden group border-slate-200 hover:border-amber-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 gap-2">
                  <div className="h-12 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center">
                    <img 
                      src="./livinghub lifestyle logo.png" 
                      alt="Livinghub Lifestyle Logo" 
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5" /> {t('hero.lifestyleBadge')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0a1936] group-hover:text-amber-600 transition-colors mb-2">
                  {t('hero.lifestyleTitle')}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {t('hero.lifestyleDesc')}
                </p>
              </div>
              <div className="text-xs font-bold text-amber-600 flex items-center gap-1.5 pt-3 border-t border-slate-100">
                <span>{t('hero.lifestyleCta')}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
