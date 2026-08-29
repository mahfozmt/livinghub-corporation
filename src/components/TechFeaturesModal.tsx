import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Calculator, 
  RefreshCw, 
  Split, 
  FileText, 
  Bell, 
  ShieldAlert, 
  FileSpreadsheet, 
  Receipt, 
  FolderArchive, 
  ShieldCheck, 
  Users, 
  Radio, 
  ShoppingBag, 
  Building,
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface TechFeaturesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechFeaturesModal: React.FC<TechFeaturesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const coreFeatures = [
    {
      icon: <Calculator className="w-5 h-5 text-[#0062eb]" />,
      title: "Smart Treasurer Dashboard (স্মার্ট ট্রেজারার ড্যাশবোর্ড)",
      enSubtitle: "Real-time Financial Insights",
      desc: "Instant overview of Cash in Hand, Total Receivables, Estimated Payables (generator fuel, guards, utilities), and comprehensive Income vs. Expense charts.",
      highlights: ["Cash in Hand Tracking", "Receivables & Pending Dues", "Payables Forecast", "Income vs Expense Graphs"]
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#0062eb]" />,
      title: "Automatic Recurring Billing (অটোমেটিক রিকারিং বিলিং)",
      enSubtitle: "Zero-Touch Monthly Service Charge",
      desc: "Automatically issues fixed monthly maintenance and service charge bills to flat owners/tenants without repetitive manual bill generation.",
      highlights: ["Automated Monthly Run", "Auto-delivery to Tenant Inboxes", "Zero Manual Overhead"]
    },
    {
      icon: <Split className="w-5 h-5 text-[#0062eb]" />,
      title: "At-Actual Expense Splitting (পোস্ট-পেইড / অ্যাট-অ্যাকচুয়াল বিলিং)",
      enSubtitle: "Proportional Utility Sharing",
      desc: "For societies with variable expenses (common electricity, WASA water, generator fuel), simply enter total cost—the system splits it proportionally by flat count or square footage.",
      highlights: ["Split by Square Feet or Flat Count", "Variable Utility Calculation", "Transparent Breakdown"]
    },
    {
      icon: <FileText className="w-5 h-5 text-[#0062eb]" />,
      title: "Ad-Hoc & Custom Billing (এডহক বা কাস্টম বিল এন্ট্রি)",
      enSubtitle: "Emergency & Event Cost Allocation",
      desc: "Quickly levy emergency repairs (lift failure, roof maintenance) or cultural celebrations across individual units or evenly distributed building-wide.",
      highlights: ["Single-Unit or All-Flat Billing", "1-Click Issue", "Customizable Invoicing"]
    },
    {
      icon: <Bell className="w-5 h-5 text-[#0062eb]" />,
      title: "Smart Due Alerts & SMS (স্মার্ট নোটিফিকেশন ও বকেয়া অ্যালার্ট)",
      enSubtitle: "Automated Friendly Reminders",
      desc: "Automated SMS and app notifications sent immediately upon bill creation and before deadline dates—eliminating awkward verbal follow-ups.",
      highlights: ["Instant Generation Alert", "Pre-Due SMS Triggers", "Overdue Reminders"]
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-[#0062eb]" />,
      title: "Real-Time Expense & Loan Notifications (খরচ ও কর্জের নোটিফিকেশন)",
      enSubtitle: "100% Financial Integrity",
      desc: "Instant committee-wide notifications whenever significant emergency repairs are posted or contingency loans are accepted from committee members.",
      highlights: ["Instant Audit Trail", "Zero Misunderstandings", "Committee-Wide Transparency"]
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-[#0062eb]" />,
      title: "1-Click Consolidated Reports (এক-ক্লিকে মাসিক রিপোর্ট)",
      enSubtitle: "Meeting-Ready Financial Statements",
      desc: "Generate monthly and annual consolidated statements, pending due sheets, and bank reconciliations in 1 click ahead of monthly committee meetings.",
      highlights: ["Exportable Summary", "Audit-Ready PDFs", "Instant Meeting Printouts"]
    },
    {
      icon: <Receipt className="w-5 h-5 text-[#0062eb]" />,
      title: "Digital Payment & Instant Receipts (ডিজিটাল পেমেন্ট ও মানি রিসিট)",
      enSubtitle: "Online Collection & Manual Cash Logging",
      desc: "Residents can pay digitally with immediate automated receipts generated, while treasurers can log physical cash collections with equal ease.",
      highlights: ["Digital Invoice Generation", "Online Gateways Support", "Cash Logging System"]
    }
  ];

  const auxiliaryFeatures = [
    {
      icon: <FolderArchive className="w-5 h-5 text-indigo-600" />,
      title: "Document Vault & Digital Archive (ফাইল রিপোজিটরি)",
      desc: "Shared digital vault for holding tax receipts, trade licenses, utility archives, and building blueprints accessible to authenticated residents 24/7."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      title: "Automated Police Verification (অটোমেটেড পুলিশ ভেরিফিকেশন)",
      desc: "Eliminates tedious manual paperwork by instantly compiling and generating official Police Tenant Verification Forms from tenant app profiles."
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-600" />,
      title: "Staff Attendance & Payroll (স্টাফ ও পে-রোল ম্যানেজমেন্ট)",
      desc: "Track daily attendance, overtime, advance deductions, and disburse monthly wages for security guards, cleaning staff, and building supervisors."
    },
    {
      icon: <Radio className="w-5 h-5 text-indigo-600" />,
      title: "Digital Notice Board & Intercom Directory (নোটিশ বোর্ড ও ডিরেক্টরি)",
      desc: "Broadcast emergency announcements to all residents instantly, with an in-app digital directory connecting flats and committee leadership."
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-indigo-600" />,
      title: "Society E-Commerce & Amenities (ই-কমার্স ও সেলফ-কেয়ার)",
      desc: "In-house module for ordering daily essentials, booking common community spaces (rooftop, community hall), and requesting handyman services."
    },
    {
      icon: <Building className="w-5 h-5 text-indigo-600" />,
      title: "Flat & Compliance Management (ফ্ল্যাট ও কমপ্লায়েন্স)",
      desc: "Centralized tracking of vacant units, assigned parking slots, tenant turnover history, and digitized community bylaws/regulations."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0062eb]">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#0a1936] flex items-center gap-2">
                Livinghub Technologies Feature Suite
              </h2>
              <p className="text-xs text-slate-500">
                Complete 14-Module Smart Housing Society &amp; Property ERP Breakdown
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-400 hover:text-slate-700 border border-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-8 bg-slate-50/50">
          {/* Highlight Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-cyan-50 to-white border border-blue-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#0062eb] text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Why Housing Societies Choose LivingHub</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Reduces committee workload by <strong>80%</strong>, guarantees <strong>100% financial transparency</strong>, and establishes a completely <strong>paperless community</strong>.
              </p>
            </div>
            <a 
              href="https://www.livinghub.tech/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0062eb] hover:bg-[#004ec4] transition-colors whitespace-nowrap shadow-sm"
            >
              <span>Visit livinghub.tech</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Section 1: Core Financial Features */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0062eb]" />
              <h3 className="text-base font-bold text-[#0a1936] uppercase tracking-wider text-xs">
                1. Core Financial &amp; Treasurer Modules (ট্রেজারার ও কমিটির মূল ফিচারসমূহ)
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coreFeatures.map((f, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 shrink-0 mt-0.5">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0a1936] mb-0.5">{f.title}</h4>
                      <p className="text-[11px] text-[#0062eb] font-semibold mb-1.5">{f.enSubtitle}</p>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">{f.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {f.highlights.map((h, i) => (
                          <span key={i} className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                            <CheckCircle2 className="w-2.5 h-2.5 text-[#0062eb]" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Auxiliary Features */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              <h3 className="text-base font-bold text-[#0a1936] uppercase tracking-wider text-xs">
                2. Auxiliary &amp; Building Operations Suite (অক্সিলিয়ারি বা সহায়ক ফিচারসমূহ)
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {auxiliaryFeatures.map((f, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-200 shadow-sm transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-100 shrink-0 mt-0.5">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0a1936] mb-1">{f.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-white flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">
            Powered by Livinghub Technologies ERP
          </span>
          <button 
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            Close Feature View
          </button>
        </div>
      </div>
    </div>
  );
};
