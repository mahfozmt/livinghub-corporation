import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Building2, Loader2, AlertCircle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; 

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedEntity, setSelectedEntity] = useState('Livinghub Corp');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== "YOUR_ACCESS_KEY_HERE") {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `New Corporate Inquiry for ${selectedEntity} - from ${formData.name}`,
            from_name: formData.name,
            entity: selectedEntity,
            name: formData.name,
            email: formData.email,
            phone: formData.phone || "Not provided",
            message: formData.message,
          }),
        });

        const result = await response.json();
        if (result.success) {
          setSubmitted(true);
        } else {
          setErrorMessage(result.message || "Failed to submit. Please try again or email us directly.");
        }
      } catch (err) {
        setErrorMessage("Network error occurred. Please try again or reach us via email.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 700);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact info & Corporate HQ */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0062eb] text-xs font-bold uppercase tracking-wider mb-4">
              <MessageSquare className="w-3.5 h-3.5 text-[#0062eb]" />
              <span>{t('contact.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1936] tracking-tight mb-4">
              {t('contact.title')} <span className="text-[#0062eb]">{t('contact.titleHighlight')}</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 text-[#0062eb] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-semibold uppercase tracking-wider">{t('contact.emailHeader')}</span>
                  <a href="mailto:info@livinghubcorp.com" className="text-sm font-bold text-[#0a1936] hover:text-[#0062eb] transition-colors">
                    info@livinghubcorp.com
                  </a>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {t('contact.supportText')} <a href="mailto:support@livinghub.tech" className="text-[#0062eb] hover:underline">support@livinghub.tech</a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-semibold uppercase tracking-wider">{t('contact.venturesHeader')}</span>
                  <div className="text-xs font-semibold text-slate-700 space-y-0.5 mt-1">
                    <div>• Livinghub Technologies (<a href="https://www.livinghub.tech/" target="_blank" rel="noopener noreferrer" className="text-[#0062eb] hover:underline">livinghub.tech</a>)</div>
                    <div>• ESGN Global (<a href="https://esimglobalnetworks.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">esimglobalnetworks.com</a>)</div>
                    <div>• Livinghub Lifestyle (<a href="https://livinghublifestyle.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">livinghublifestyle.com</a>)</div>
                    <div>• Corporate & Gov IT Solutions (<a href="#b2b-gov" className="text-indigo-600 hover:underline">B2B & Public Sector Services</a>)</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-semibold uppercase tracking-wider">{t('contact.hqHeader')}</span>
                  <span className="text-sm font-bold text-[#0a1936] block">
                    {t('contact.hqName')}
                  </span>
                  <span className="text-xs text-slate-500">
                    {t('contact.hqLoc')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="white-card p-8 sm:p-10 rounded-3xl border-slate-200 bg-white shadow-lg relative">
              <h3 className="text-xl font-bold text-[#0a1936] mb-1">{t('contact.formTitle')}</h3>
              <p className="text-xs text-slate-500 mb-6">
                {t('contact.formSubtitle')}
              </p>

              {errorMessage && (
                <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 mb-1">{t('contact.successTitle')}</h4>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto mb-4 leading-relaxed">
                    {t('contact.successMsg')} <strong className="font-semibold">{selectedEntity}</strong>. {t('contact.successMsgEnd')}
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 shadow-sm"
                  >
                    {t('contact.btnSendAnother')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Entity Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t('contact.formTarget')}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                      {['Livinghub Corp', 'Livinghub Tech', 'ESGN Global', 'Lifestyle', 'B2B & Gov Solutions'].map((entity) => (
                        <button
                          key={entity}
                          type="button"
                          onClick={() => setSelectedEntity(entity)}
                          className={`px-2.5 py-2 rounded-xl text-xs font-bold border transition-all text-center ${
                            selectedEntity === entity
                              ? 'bg-blue-50 border-[#0062eb] text-[#0062eb] shadow-sm ring-1 ring-[#0062eb]'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {entity}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {t('contact.nameLabel')}
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder={t('contact.namePlaceholder')}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs placeholder-slate-400 focus:outline-none focus:border-[#0062eb] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {t('contact.phoneLabel')}
                      </label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder={t('contact.phonePlaceholder')}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs placeholder-slate-400 focus:outline-none focus:border-[#0062eb] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t('contact.emailLabel')}
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder={t('contact.emailPlaceholder')}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs placeholder-slate-400 focus:outline-none focus:border-[#0062eb] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t('contact.msgLabel')}
                    </label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder={t('contact.msgPlaceholder')}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs placeholder-slate-400 focus:outline-none focus:border-[#0062eb] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0062eb] to-[#00b4d8] hover:from-[#004ec4] hover:to-[#0284c7] disabled:opacity-75 shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{t('contact.btnSending')}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t('contact.btnSubmit')}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
