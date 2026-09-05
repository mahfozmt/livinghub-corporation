import React from 'react';
import { Target, Compass, Sparkles, Building, Globe, Zap, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0062eb] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#0062eb]" />
            <span>{t('about.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1936] tracking-tight mb-4">
            {t('about.title')} <span className="text-[#0062eb]">{t('about.titleHighlight')}</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Mission & Vision 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="white-card p-8 sm:p-10 rounded-3xl border-slate-200 bg-white relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0062eb] mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a1936] mb-3">{t('about.missionTitle')}</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              {t('about.missionP1')}
            </p>
            <p className="text-slate-500 text-xs leading-relaxed">
              {t('about.missionP2')}
            </p>
          </div>

          {/* Vision Card */}
          <div className="white-card p-8 sm:p-10 rounded-3xl border-slate-200 bg-white relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a1936] mb-3">{t('about.visionTitle')}</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              {t('about.visionP1')}
            </p>
            <p className="text-slate-500 text-xs leading-relaxed">
              {t('about.visionP2')}
            </p>
          </div>
        </div>

        {/* Strategic Pillars Overview */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
          <h4 className="text-lg font-bold text-[#0a1936] mb-6 text-center">
            {t('about.pillarsHeader')}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062eb] flex items-center justify-center mx-auto mb-3">
                <Building className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-bold text-[#0a1936] mb-1">{t('about.p1Title')}</h5>
              <p className="text-xs text-slate-500">
                {t('about.p1Desc')}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-bold text-[#0a1936] mb-1">{t('about.p2Title')}</h5>
              <p className="text-xs text-slate-500">
                {t('about.p2Desc')}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-bold text-[#0a1936] mb-1">{t('about.p3Title')}</h5>
              <p className="text-xs text-slate-500">
                {t('about.p3Desc')}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-bold text-[#0a1936] mb-1">{t('about.p4Title')}</h5>
              <p className="text-xs text-slate-500">
                {t('about.p4Desc')}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
