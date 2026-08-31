import React from 'react';
import { ShieldCheck, Cpu, Award, HeartHandshake, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ValuesSection: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Cpu className="w-6 h-6 text-[#0062eb]" />,
      title: t('values.v1Title'),
      desc: t('values.v1Desc')
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: t('values.v2Title'),
      desc: t('values.v2Desc')
    },
    {
      icon: <Award className="w-6 h-6 text-amber-600" />,
      title: t('values.v3Title'),
      desc: t('values.v3Desc')
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-indigo-600" />,
      title: t('values.v4Title'),
      desc: t('values.v4Desc')
    }
  ];

  return (
    <section id="values" className="py-24 relative bg-[#f8fafc] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0062eb] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#0062eb]" />
            <span>{t('values.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1936] tracking-tight mb-4">
            {t('values.title')} <span className="text-[#0062eb]">{t('values.titleHighlight')}</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('values.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="white-card p-6 rounded-2xl border-slate-200 bg-white hover:border-blue-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {v.icon}
              </div>
              <h3 className="text-base font-bold text-[#0a1936] mb-2">{v.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
