import React from 'react';
import { Target, Compass, Sparkles, Building, Globe, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0062eb] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#0062eb]" />
            <span>Corporate Heritage &amp; Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1936] tracking-tight mb-4">
            About <span className="text-[#0062eb]">Livinghub Corporation</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Livinghub Corporation was established to build, nurture, and scale technology-first enterprises that simplify daily living, remove global borders, and empower communities.
          </p>
        </div>

        {/* Mission & Vision 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="white-card p-8 sm:p-10 rounded-3xl border-slate-200 bg-white relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0062eb] mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a1936] mb-3">Our Corporate Mission</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              To engineer and deliver accessible, robust, and world-class digital platforms across community property management, international roaming telecommunications, and high-quality lifestyle retail.
            </p>
            <p className="text-slate-500 text-xs leading-relaxed">
              We empower housing society administrators with effortless transparency, travelers with instant global connectivity, and consumers with thoughtfully curated lifestyle products.
            </p>
          </div>

          {/* Vision Card */}
          <div className="white-card p-8 sm:p-10 rounded-3xl border-slate-200 bg-white relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a1936] mb-3">Our Corporate Vision</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              To be recognized as a versatile catalyst of innovation, building interconnected digital products that elevate day-to-day living standards and bridge global borders.
            </p>
            <p className="text-slate-500 text-xs leading-relaxed">
              By leveraging cloud infrastructure, automated billing, and seamless eSIM telecommunications, we establish a unified ecosystem for modern living.
            </p>
          </div>
        </div>

        {/* Strategic Pillars Overview */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
          <h4 className="text-lg font-bold text-[#0a1936] mb-6 text-center">
            How Our Ecosystem Creates Synergistic Value
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062eb] flex items-center justify-center mx-auto mb-3">
                <Building className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-bold text-[#0a1936] mb-1">PropTech Infrastructure</h5>
              <p className="text-xs text-slate-500">
                Automating housing communities with financial transparency and smart operations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-bold text-[#0a1936] mb-1">Global Roaming Cloud</h5>
              <p className="text-xs text-slate-500">
                Connecting people and smart IoT devices across 150+ countries with zero friction.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-bold text-[#0a1936] mb-1">Lifestyle Innovation</h5>
              <p className="text-xs text-slate-500">
                Enhancing modern homes with curated premium consumer goods and retail convenience.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
