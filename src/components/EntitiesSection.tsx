import React, { useState } from 'react';
import { 
  Building2, 
  Globe2, 
  ShoppingBag, 
  ShieldCheck,
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  ExternalLink,
  ChevronRight,
  Cpu,
  Boxes,
  Briefcase
} from 'lucide-react';
import { TechFeaturesModal } from './TechFeaturesModal';
import { useLanguage } from '../context/LanguageContext';

export const EntitiesSection: React.FC = () => {
  const { t } = useLanguage();
  const [isTechModalOpen, setIsTechModalOpen] = useState(false);

  return (
    <section id="entities" className="py-24 relative bg-[#f8fafc] border-b border-slate-200/60">
      <TechFeaturesModal isOpen={isTechModalOpen} onClose={() => setIsTechModalOpen(false)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0062eb] text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-[#0062eb]" />
            <span>{t('entities.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a1936] tracking-tight mb-4">
            {t('entities.title')} <span className="text-[#0062eb]">{t('entities.titleHighlight')}</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('entities.subtitle')}
          </p>
        </div>

        {/* ========================================================= */}
        {/* 1. LIVINGHUB TECHNOLOGIES */}
        {/* ========================================================= */}
        <div id="livinghub-tech" className="mb-20 scroll-mt-24">
          <div className="white-card rounded-3xl p-8 sm:p-10 lg:p-12 border-slate-200 relative overflow-hidden bg-white shadow-md hover:shadow-xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Details */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-[#0062eb] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" /> {t('tech.badge')}
                  </span>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" /> {t('tech.live')}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1936] mb-3 leading-tight">
                  {t('tech.title')}
                </h3>
                <p className="text-[#0062eb] text-sm sm:text-base font-semibold mb-4">
                  {t('tech.tagline')}
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {t('tech.desc')}
                </p>

                {/* Key feature pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0062eb] shrink-0 mt-0.5" />
                    <span><strong>{t('tech.f1Title')}</strong>: {t('tech.f1Desc')}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0062eb] shrink-0 mt-0.5" />
                    <span><strong>{t('tech.f2Title')}</strong>: {t('tech.f2Desc')}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0062eb] shrink-0 mt-0.5" />
                    <span><strong>{t('tech.f3Title')}</strong>: {t('tech.f3Desc')}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0062eb] shrink-0 mt-0.5" />
                    <span><strong>{t('tech.f4Title')}</strong>: {t('tech.f4Desc')}</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="https://www.livinghub.tech/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0062eb] to-[#00b4d8] hover:from-[#004ec4] hover:to-[#0284c7] shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 group active:scale-95"
                  >
                    <span>{t('tech.btnVisit')}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <button 
                    onClick={() => setIsTechModalOpen(true)}
                    className="px-6 py-3.5 rounded-xl text-xs font-bold text-[#0062eb] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all flex items-center gap-2"
                  >
                    <span>{t('tech.btnPdf')}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Feature Summary Card */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 shadow-md relative">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono text-[#0062eb] font-semibold">livinghub.tech/erp</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 mb-4 flex items-center justify-center shadow-inner">
                    <img 
                      src="./Livinghub final logo.png" 
                      alt="Livinghub Technologies Logo" 
                      className="h-12 object-contain"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">{t('tech.stat1Label')}</span>
                      <span className="text-xs font-bold text-[#0062eb]">{t('tech.stat1Val')}</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">{t('tech.stat2Label')}</span>
                      <span className="text-xs font-bold text-emerald-600">{t('tech.stat2Val')}</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">{t('tech.stat3Label')}</span>
                      <span className="text-xs font-bold text-[#0062eb]">{t('tech.stat3Val')}</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">{t('tech.stat4Label')}</span>
                      <span className="text-xs font-bold text-indigo-600">{t('tech.stat4Val')}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                    <span>{t('tech.statFooter')}</span>
                    <a href="https://www.livinghub.tech/" target="_blank" rel="noopener noreferrer" className="text-[#0062eb] font-bold hover:underline flex items-center gap-1">
                      {t('tech.statDemo')} <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. ESGN (E SIM GLOBAL NETWORKS) */}
        {/* ========================================================= */}
        <div id="esgn" className="mb-20 scroll-mt-24">
          <div className="white-card rounded-3xl p-8 sm:p-10 lg:p-12 border-slate-200 relative overflow-hidden bg-white shadow-md hover:shadow-xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Details */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5" /> {t('esgn.badge')}
                  </span>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" /> {t('esgn.live')}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1936] mb-3 leading-tight">
                  {t('esgn.title')}
                </h3>
                <p className="text-emerald-600 text-sm sm:text-base font-semibold mb-4">
                  {t('esgn.tagline')}
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {t('esgn.desc')}
                </p>

                {/* Key feature pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>{t('esgn.f1Title')}</strong>: {t('esgn.f1Desc')}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>{t('esgn.f2Title')}</strong>: {t('esgn.f2Desc')}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>{t('esgn.f3Title')}</strong>: {t('esgn.f3Desc')}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>{t('esgn.f4Title')}</strong>: {t('esgn.f4Desc')}</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="https://esimglobalnetworks.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-500/20 transition-all flex items-center gap-2 group active:scale-95"
                  >
                    <span>{t('esgn.btnVisit')}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Info Card */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 shadow-md relative">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono text-emerald-600 font-semibold">esimglobalnetworks.com</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 mb-4 flex items-center justify-center shadow-inner">
                    <img 
                      src="./eSIM_Global_Network-01logo.png" 
                      alt="ESGN Logo" 
                      className="h-14 object-contain"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">{t('esgn.stat1Label')}</span>
                      <span className="text-xs font-bold text-emerald-600">{t('esgn.stat1Val')}</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">{t('esgn.stat2Label')}</span>
                      <span className="text-xs font-bold text-emerald-600">{t('esgn.stat2Val')}</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">{t('esgn.stat3Label')}</span>
                      <span className="text-xs font-bold text-teal-700">{t('esgn.stat3Val')}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                    <span>{t('esgn.statFooter')}</span>
                    <a href="https://esimglobalnetworks.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline flex items-center gap-1">
                      {t('esgn.statBrowse')} <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. LIVINGHUB LIFESTYLE */}
        {/* ========================================================= */}
        <div id="lifestyle" className="mb-20 scroll-mt-24">
          <div className="white-card rounded-3xl p-8 sm:p-10 lg:p-12 border-slate-200 relative overflow-hidden bg-white shadow-md hover:shadow-xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Details */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5" /> {t('lifestyle.badge')}
                  </span>
                  <span className="text-xs text-amber-700 font-bold px-2.5 py-0.5 rounded-full bg-amber-100/70 border border-amber-300">
                    {t('lifestyle.upcoming')}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1936] mb-3 leading-tight">
                  {t('lifestyle.title')}
                </h3>
                <p className="text-amber-600 text-sm sm:text-base font-semibold mb-4">
                  {t('lifestyle.tagline')}
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {t('lifestyle.desc')}
                </p>

                {/* Key feature pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>{t('lifestyle.f1Title')}</strong>: {t('lifestyle.f1Desc')}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>{t('lifestyle.f2Title')}</strong>: {t('lifestyle.f2Desc')}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>{t('lifestyle.f3Title')}</strong>: {t('lifestyle.f3Desc')}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>{t('lifestyle.f4Title')}</strong>: {t('lifestyle.f4Desc')}</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="https://livinghublifestyle.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 shadow-md shadow-amber-500/20 transition-all flex items-center gap-2 group active:scale-95"
                  >
                    <span>{t('lifestyle.btnVisit')}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a 
                    href="#contact" 
                    className="px-6 py-3.5 rounded-xl text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-all"
                  >
                    <span>{t('lifestyle.btnInquiry')}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Info Card */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 shadow-md relative">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono text-amber-700 font-semibold">livinghublifestyle.com</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 mb-4 flex items-center justify-center shadow-inner">
                    <img 
                      src="./livinghub lifestyle logo.png" 
                      alt="Livinghub Lifestyle Logo" 
                      className="h-14 object-contain"
                    />
                  </div>

                  <div className="text-center py-4 px-4 rounded-xl bg-slate-50 border border-slate-200/80 mb-4">
                    <h4 className="text-sm font-bold text-[#0a1936] mb-1">{t('lifestyle.boxTitle')}</h4>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto">
                      {t('lifestyle.boxDesc')}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">{t('lifestyle.stat1Label')}</span>
                      <span className="text-xs font-bold text-amber-700">{t('lifestyle.stat1Val')}</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">{t('lifestyle.stat2Label')}</span>
                      <span className="text-xs font-bold text-[#0a1936]">{t('lifestyle.stat2Val')}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                    <span>{t('lifestyle.statFooter')}</span>
                    <a href="https://livinghublifestyle.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-bold hover:underline flex items-center gap-1">
                      {t('lifestyle.statPreview')} <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. CORPORATE & GOVERNMENT B2B ENTERPRISE SOLUTIONS */}
        {/* ========================================================= */}
        <div id="b2b-gov" className="scroll-mt-24">
          <div className="white-card rounded-3xl p-8 sm:p-10 lg:p-12 border-slate-200 relative overflow-hidden bg-white shadow-md hover:shadow-xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Details */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" /> {t('b2b.badge')}
                  </span>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block animate-pulse" /> {t('b2b.live')}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1936] mb-3 leading-tight">
                  {t('b2b.title')}
                </h3>
                <p className="text-indigo-600 text-sm sm:text-base font-semibold mb-4">
                  {t('b2b.tagline')}
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {t('b2b.desc')}
                </p>

                {/* Key feature pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span><strong>{t('b2b.f1Title')}</strong>: {t('b2b.f1Desc')}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span><strong>{t('b2b.f2Title')}</strong>: {t('b2b.f2Desc')}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span><strong>{t('b2b.f3Title')}</strong>: {t('b2b.f3Desc')}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span><strong>{t('b2b.f4Title')}</strong>: {t('b2b.f4Desc')}</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-md shadow-indigo-500/20 transition-all flex items-center gap-2 group active:scale-95"
                  >
                    <span>{t('b2b.btnInquire')}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Info Card */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 shadow-md relative">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono text-indigo-600 font-semibold">livinghubcorp.com/b2b</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 mb-4 flex items-center justify-center shadow-inner">
                    <img
                      src="./LivingHub corporation.png"
                      alt="Livinghub Corporation Logo"
                      className="h-12 object-contain"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 flex items-center gap-2.5">
                      <Cpu className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span className="text-[11px] font-bold text-indigo-950">Software Engineering</span>
                    </div>
                    <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center gap-2.5">
                      <Boxes className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="text-[11px] font-bold text-blue-950">IT Infrastructure</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0062eb]/10 border border-blue-200 flex items-center gap-2.5">
                      <Briefcase className="w-4 h-4 text-[#0062eb] shrink-0" />
                      <span className="text-[11px] font-bold text-slate-900">Tech Procurement</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-slate-700 shrink-0" />
                      <span className="text-[11px] font-bold text-slate-800">Gov Supply</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">{t('b2b.stat1Label')}</span>
                      <span className="text-xs font-bold text-indigo-600">{t('b2b.stat1Val')}</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">{t('b2b.stat2Label')}</span>
                      <span className="text-xs font-bold text-[#0a1936]">{t('b2b.stat2Val')}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                    <span>{t('b2b.statFooter')}</span>
                    <a href="#contact" className="text-indigo-600 font-bold hover:underline flex items-center gap-1">
                      {t('b2b.statContact')} <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
