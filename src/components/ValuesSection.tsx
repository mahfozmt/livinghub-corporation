import React from 'react';
import { ShieldCheck, Cpu, Award, HeartHandshake, Sparkles } from 'lucide-react';

export const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: <Cpu className="w-6 h-6 text-[#0062eb]" />,
      title: "Technological Excellence",
      desc: "We build intuitive, robust, and scalable software solutions designed to simplify complex multi-party operations."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Financial Integrity & Transparency",
      desc: "Whether in society accounting or transparent eSIM rates, we stand firmly for zero hidden costs and total accountability."
    },
    {
      icon: <Award className="w-6 h-6 text-amber-600" />,
      title: "Customer-Centric Innovation",
      desc: "Our products solve real-world daily headaches, from tedious housing committee paperwork to stressful travel data searches."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-indigo-600" />,
      title: "Sustainable Long-Term Growth",
      desc: "We build solid partnerships with clients, building associations, telecom operators, and vendors based on mutual trust."
    }
  ];

  return (
    <section id="values" className="py-24 relative bg-[#f8fafc] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0062eb] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#0062eb]" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1936] tracking-tight mb-4">
            Our Core Corporate <span className="text-[#0062eb]">Values</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The fundamental standards that drive our product development, venture incubation, and customer interactions across all entities.
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
