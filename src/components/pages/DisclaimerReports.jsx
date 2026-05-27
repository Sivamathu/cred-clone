import React from 'react';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

const DisclaimerReports = ({ navigate }) => {
  const disclaimers = [
    {
      title: 'P2P Investments (CRED Mint)',
      content: 'Lending through CRED Mint involves peer-to-peer (P2P) investment structures. Investments are subject to credit risks, default risks, and repayment timelines. Past performances are not indicative of future return cycles. Interest yields are calculated based on borrower repayments, facilitated via RBI-registered NBFC P2P platforms.'
    },
    {
      title: 'Credit Score Bureau Data (Experian/CRIF)',
      content: 'Credit score records displayed on the dashboard are fetched from registered bureau databases (CRIF High Mark / Experian). Scores are compiled based on historical credit card repay records, loan accounts, and payment behaviors. CRED has no control over score calculation formulas or corrections.'
    },
    {
      title: 'General Financial Advisory Disclaimer',
      content: 'Calculators, tools, estimations, and reports provided on the site are illustrative simulations and do not constitute legal financial advisories. Members are advised to perform independent checks or consult authorized investment analysts before committing capital.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-28 pb-24 px-6 md:px-12 w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[35vw] h-[35vw] bg-brand-pink/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10 text-left">
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-200 mb-10 text-xs font-semibold uppercase tracking-wider cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to home
        </button>

        <div className="flex flex-col gap-4 mb-12">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-pink uppercase flex items-center gap-2">
            <AlertTriangle size={14} />
            legal declarations
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            disclaimers.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
            critical disclosures and risk warnings governing P2P investments, credit score metrics, and dashboard reports.
          </p>
        </div>

        {/* Declarations Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-3xl">
          {disclaimers.map((item, i) => (
            <div
              key={i}
              className="bg-brand-dark/40 border border-white/5 p-6 rounded-2xl flex flex-col gap-3 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-pink" />
              <h2 className="font-heading font-extrabold text-base sm:text-lg text-white">
                {item.title}
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisclaimerReports;
