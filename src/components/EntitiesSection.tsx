import React, { useState } from 'react';
import { 
  Building2, 
  Globe2, 
  ShoppingBag, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { TechFeaturesModal } from './TechFeaturesModal';

export const EntitiesSection: React.FC = () => {
  const [isTechModalOpen, setIsTechModalOpen] = useState(false);

  return (
    <section id="entities" className="py-24 relative bg-[#f8fafc] border-b border-slate-200/60">
      <TechFeaturesModal isOpen={isTechModalOpen} onClose={() => setIsTechModalOpen(false)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0062eb] text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-[#0062eb]" />
            <span>Core Business Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a1936] tracking-tight mb-4">
            Our Three Operating <span className="text-[#0062eb]">Ventures</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Livinghub Corporation steers specialized high-growth operating brands across property technology, international telecommunications, and digital consumer commerce.
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
                    <Building2 className="w-3.5 h-3.5" /> PropTech &amp; SaaS
                  </span>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" /> Live Enterprise Platform
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1936] mb-3 leading-tight">
                  Livinghub Technologies
                </h3>
                <p className="text-[#0062eb] text-sm sm:text-base font-semibold mb-4">
                  Next-Gen Smart Housing Society &amp; Automated Building Management Platform
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Transforming manual society accounting and building administration into an automated, 100% transparent digital ecosystem. Designed specifically for treasurers, committee members, and residents to eliminate spreadsheets, billing disputes, and paper receipts.
                </p>

                {/* Key feature pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0062eb] shrink-0 mt-0.5" />
                    <span><strong>Smart Treasurer Dashboard</strong>: Real-time Cash, Receivables &amp; Payables.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0062eb] shrink-0 mt-0.5" />
                    <span><strong>Automatic Recurring Billing</strong>: Zero-touch monthly service charges.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0062eb] shrink-0 mt-0.5" />
                    <span><strong>At-Actual Expense Split</strong>: Common electricity, water &amp; fuel split.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0062eb] shrink-0 mt-0.5" />
                    <span><strong>Automated Police Form</strong>: 1-click digital tenant verification generation.</span>
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
                    <span>Visit livinghub.tech</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <button 
                    onClick={() => setIsTechModalOpen(true)}
                    className="px-6 py-3.5 rounded-xl text-xs font-bold text-[#0062eb] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all flex items-center gap-2"
                  >
                    <span>View All 14 PDF Features</span>
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
                      <span className="text-xs text-slate-700 font-medium">Treasurer Workload Reduction</span>
                      <span className="text-xs font-bold text-[#0062eb]">~80% Saved</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">Financial Transparency</span>
                      <span className="text-xs font-bold text-emerald-600">100% Real-Time</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">Billing Dispute Elimination</span>
                      <span className="text-xs font-bold text-[#0062eb]">1-Click Auto Due Alerts</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">Document Vault</span>
                      <span className="text-xs font-bold text-indigo-600">Holding Tax, Licenses &amp; Dues</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Deployed Platform</span>
                    <a href="https://www.livinghub.tech/" target="_blank" rel="noopener noreferrer" className="text-[#0062eb] font-bold hover:underline flex items-center gap-1">
                      Explore Live Demo <ArrowUpRight className="w-3 h-3" />
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
                    <Globe2 className="w-3.5 h-3.5" /> International Telecom
                  </span>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" /> Live Global Platform
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1936] mb-3 leading-tight">
                  ESGN (E SIM Global Networks)
                </h3>
                <p className="text-emerald-600 text-sm sm:text-base font-semibold mb-4">
                  Borderless High-Speed Travel Data &amp; Digital SIM Connectivity Across 150+ Countries
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  ESGN provides international travelers, frequent flyers, and global enterprises with instant, prepaid high-speed 4G/5G mobile connectivity. Say goodbye to physical SIM cards, airport queues, and exorbitant roaming fees.
                </p>

                {/* Key feature pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Instant QR Activation</strong>: Delivered via email in seconds.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>150+ Global Destinations</strong>: Seamless local tier-1 network access.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Zero Roaming Shock</strong>: Transparent prepaid pricing with no hidden fees.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Multi-Carrier Reliability</strong>: Auto-switches to the strongest local signal.</span>
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
                    <span>Visit esimglobalnetworks.com</span>
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
                      <span className="text-xs text-slate-700 font-medium">Global Coverage</span>
                      <span className="text-xs font-bold text-emerald-600">150+ Countries &amp; Regions</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">Activation Time</span>
                      <span className="text-xs font-bold text-emerald-600">Instant Under 60 Seconds</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">Hardware Support</span>
                      <span className="text-xs font-bold text-teal-700">iOS, Android &amp; eSIM Tablets</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Live eSIM Store</span>
                    <a href="https://esimglobalnetworks.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline flex items-center gap-1">
                      Browse Regional Plans <ArrowUpRight className="w-3 h-3" />
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
        <div id="lifestyle" className="scroll-mt-24">
          <div className="white-card rounded-3xl p-8 sm:p-10 lg:p-12 border-slate-200 relative overflow-hidden bg-white shadow-md hover:shadow-xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Details */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5" /> Modern E-Commerce
                  </span>
                  <span className="text-xs text-amber-700 font-bold px-2.5 py-0.5 rounded-full bg-amber-100/70 border border-amber-300">
                    Upcoming Launch
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1936] mb-3 leading-tight">
                  Livinghub Lifestyle
                </h3>
                <p className="text-amber-600 text-sm sm:text-base font-semibold mb-4">
                  Curated E-Commerce &amp; Lifestyle Essentials for Modern Smart Living
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Livinghub Lifestyle is our upcoming digital retail venture, thoughtfully designed to bring premium lifestyle essentials, home automation accessories, and smart living everyday goods directly to consumer doorsteps.
                </p>

                {/* Key feature pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Curated Collections</strong>: Handpicked quality lifestyle products.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Smart Living Integration</strong>: Gadgets and accessories for modern homes.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Seamless Digital Checkout</strong>: Rapid fulfillment and responsive support.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Community Synergy</strong>: Special privileges for LivingHub ecosystem users.</span>
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
                    <span>Visit livinghublifestyle.com</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a 
                    href="#contact" 
                    className="px-6 py-3.5 rounded-xl text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-all"
                  >
                    <span>Partnership &amp; Vendor Inquiry</span>
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
                    <h4 className="text-sm font-bold text-[#0a1936] mb-1">E-Commerce in Active Development</h4>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto">
                      Preparing a premier catalog of lifestyle goods, modern living utilities, and smart gadgets.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">Platform Stage</span>
                      <span className="text-xs font-bold text-amber-700">Pre-Launch &amp; Vendor Onboarding</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium">Category Scope</span>
                      <span className="text-xs font-bold text-[#0a1936]">Smart Living &amp; Lifestyle Essentials</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Reserved Domain</span>
                    <a href="https://livinghublifestyle.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-bold hover:underline flex items-center gap-1">
                      Visit Preview <ArrowUpRight className="w-3 h-3" />
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
