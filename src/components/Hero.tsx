import React from 'react';
import { ArrowUpRight, Building2, Globe2, ShoppingBag, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
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
            <span>Multi-Sector Technology &amp; Commerce Holding</span>
          </div>

          {/* Main Title with Logo Brand Colors */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0a1936] leading-[1.15] mb-6">
            Pioneering <span className="text-[#0062eb]">Smart Living</span>,{' '}
            <span className="text-[#00b4d8]">Global Telecom</span> &amp; Modern Lifestyle
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
            <strong className="text-[#0a1936] font-semibold">Livinghub Corporation</strong> is the parent enterprise driving forward-looking subsidiaries in smart community automation, borderless digital telecom, and modern consumer commerce.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a 
              href="#entities" 
              className="px-7 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0062eb] to-[#00b4d8] hover:from-[#004ec4] hover:to-[#0284c7] shadow-lg shadow-blue-500/25 transition-all duration-200 flex items-center gap-2 group active:scale-95"
            >
              <span>Explore Subsidiaries</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a 
              href="#about" 
              className="px-7 py-3.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all duration-200"
            >
              About the Holding
            </a>
          </div>
        </div>

        {/* 3 Quick Venture Jump Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1: Livinghub Tech */}
          <a 
            href="#livinghub-tech" 
            className="white-card p-6 rounded-2xl relative overflow-hidden group border-slate-200 hover:border-blue-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#0062eb]">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-blue-50 text-[#0062eb] border border-blue-200">
                SaaS &amp; PropTech
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#0a1936] group-hover:text-[#0062eb] transition-colors mb-2">
              Livinghub Technologies
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Automated smart housing society &amp; building management ERP for treasurers, residents, and security.
            </p>
            <div className="text-xs font-bold text-[#0062eb] flex items-center gap-1.5">
              <span>Explore Tech Platform</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Card 2: ESGN */}
          <a 
            href="#esgn" 
            className="white-card p-6 rounded-2xl relative overflow-hidden group border-slate-200 hover:border-emerald-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600">
                <Globe2 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                Global Telecom
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#0a1936] group-hover:text-emerald-600 transition-colors mb-2">
              ESGN (eSIM Global)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Instant worldwide eSIM mobile data and roaming across 150+ countries without physical SIM cards.
            </p>
            <div className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
              <span>Discover Global eSIM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Card 3: Lifestyle */}
          <a 
            href="#lifestyle" 
            className="white-card p-6 rounded-2xl relative overflow-hidden group border-slate-200 hover:border-amber-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                Upcoming E-Commerce
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#0a1936] group-hover:text-amber-600 transition-colors mb-2">
              Livinghub Lifestyle
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Curated everyday lifestyle essentials and smart living products designed for modern homes.
            </p>
            <div className="text-xs font-bold text-amber-600 flex items-center gap-1.5">
              <span>Preview Brand Vision</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
