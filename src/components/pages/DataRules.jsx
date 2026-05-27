import React, { useState } from 'react';
import { ArrowLeft, Database, CheckCircle2 } from 'lucide-react';

const DataRules = ({ navigate }) => {
  const [requestedAudit, setRequestedAudit] = useState(false);

  const triggerAudit = () => {
    setRequestedAudit(true);
    setTimeout(() => setRequestedAudit(false), 4000);
  };

  const steps = [
    { num: '01', title: 'Data Ingestion & Filtering', desc: 'read-only transactional SMS alerts and bank ledgers are scanned only upon explicit member consent to compile card statements.' },
    { num: '02', title: 'Dynamic Tokenization', desc: 'card details are routed directly into secure PCI-DSS vaults and swapped for random, encrypted alphanumeric token keys.' },
    { num: '03', title: 'Siloed Storage Pools', desc: 'personal identifiability elements are separated from card balances, stored in isolated, access-regulated databases.' },
    { num: '04', title: 'Purging & Retention', desc: 'closed accounts automatically trigger clean-up scripts, wiping structural balance history from servers within 30 days.' }
  ];

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-28 pb-24 px-6 md:px-12 w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[35vw] h-[35vw] bg-brand-green/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10 text-left">
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-200 mb-10 text-xs font-semibold uppercase tracking-wider cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to home
        </button>

        <div className="flex flex-col gap-4 mb-12">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-green uppercase flex items-center gap-2">
            <Database size={14} />
            database compliance
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            data collection rules.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
            understanding our strict limits. check the protocols that ensure your financial parameters stay private and encrypted.
          </p>
        </div>

        {/* Pipeline & Audit Panel */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Rules List */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <h2 className="font-heading font-extrabold text-xl text-white border-b border-white/5 pb-3">
              Data Processing Pipeline
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="bg-brand-dark/30 border border-white/5 p-6 rounded-2xl flex flex-col gap-3 hover:border-brand-green/20 transition-all duration-300"
                >
                  <span className="font-heading font-black text-2xl text-brand-green">{step.num}</span>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white">{step.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Audit Request Card */}
          <div className="md:col-span-4 bg-gradient-to-br from-brand-dark to-brand-light-grey border border-white/5 rounded-2xl p-6 flex flex-col gap-5 shadow-2xl">
            <h3 className="font-heading font-extrabold text-lg text-white">Security Request</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              request an audit logs file of all your stored data. you will receive an encrypted JSON payload on your registered mobile number:
            </p>

            {requestedAudit ? (
              <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-4 text-[10px] text-brand-green/90 flex items-start gap-2">
                <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" />
                <span>Audit scheduled. Secure data pack is compiling. You will receive an SMS link shortly.</span>
              </div>
            ) : (
              <button
                onClick={triggerAudit}
                className="w-full py-2.5 bg-white text-black font-extrabold text-xs tracking-wider uppercase border border-black shadow-[2px_2px_0px_0px_#00e676] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer mt-2"
              >
                REQUEST DATA AUDIT
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataRules;
