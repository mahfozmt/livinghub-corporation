import React from 'react';
import { Building2, Globe2, ShoppingBag, ExternalLink, ArrowUp, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a1936] text-slate-300 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1 & 2: Corporation Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img 
                src="./LivingHub corporation.png" 
                alt="Livinghub Corporation" 
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert" 
              />
            </div>

            <p className="text-slate-300 leading-relaxed text-xs max-w-sm pt-2">
              Incubating, financing, and scaling innovative technology platforms across smart housing society management, international telecom data, and modern lifestyle retail.
            </p>

            <div className="pt-2 text-[11px] text-slate-400">
              Corporate Headquarters: Dhaka, Bangladesh (Global Digital Operations).
            </div>
          </div>

          {/* Column 3: Subsidiary Ventures */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-[#00b4d8]">
              Operating Ventures
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="https://www.livinghub.tech/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Building2 className="w-3.5 h-3.5 text-[#00b4d8]" />
                  <span>Livinghub Technologies</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a 
                  href="https://esimglobalnetworks.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ESGN (eSIM Global)</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a 
                  href="https://livinghublifestyle.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                  <span>Livinghub Lifestyle</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-slate-200">
              Corporate Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About the Corporation</a>
              </li>
              <li>
                <a href="#entities" className="hover:text-white transition-colors">Ventures Portfolio</a>
              </li>
              <li>
                <a href="#values" className="hover:text-white transition-colors">Guiding Principles</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Leadership &amp; Inquiries</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Channels */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-slate-200">
              Contact Channels
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#00b4d8]" />
                <a href="mailto:info@livinghubcorp.com" className="hover:text-white">info@livinghubcorp.com</a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                <a href="mailto:support@livinghub.tech" className="hover:text-white">support@livinghub.tech</a>
              </li>
              <li className="pt-3">
                <button 
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold border border-slate-700 transition-colors"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Back to Top</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Livinghub Corporation. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-slate-200 transition-colors">Terms of Service</a>
            <span>&bull;</span>
            <a href="https://www.livinghub.tech/" target="_blank" rel="noopener noreferrer" className="text-[#00b4d8] hover:underline">livinghub.tech</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
