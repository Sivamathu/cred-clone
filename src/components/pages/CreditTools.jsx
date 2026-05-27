import React, { useState } from 'react';
import { ArrowLeft, ShieldAlert, CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react';

const CreditTools = ({ navigate }) => {
  const [totalLimit, setTotalLimit] = useState(500000);
  const [usedLimit, setUsedLimit] = useState(150000);

  const calculateUtilization = () => {
    if (totalLimit === 0) return 0;
    return ((usedLimit / totalLimit) * 100).toFixed(1);
  };

  const getHealthStatus = (ratio) => {
    if (ratio <= 10) return { label: 'Optimum', color: 'text-brand-green bg-brand-green/10 border-brand-green/20', desc: 'Fantastic! Under 10% indicates excellent debt-management behavior.' };
    if (ratio <= 30) return { label: 'Healthy', color: 'text-brand-blue bg-brand-blue/10 border-brand-blue/20', desc: 'Good! Standard bureau advice is to maintain utilization below 30%.' };
    if (ratio <= 50) return { label: 'Moderate Risk', color: 'text-brand-gold bg-brand-gold/10 border-brand-gold/20', desc: 'Caution. Utilizations over 30% might impact credit score logs negatively.' };
    return { label: 'High Risk', color: 'text-brand-pink bg-brand-pink/10 border-brand-pink/20', desc: 'Warning! High ratios suggest credit reliance, lowering bureaus rating scores.' };
  };

  const ratio = Number(calculateUtilization());
  const status = getHealthStatus(ratio);

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-28 pb-24 px-6 md:px-12 w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[35vw] h-[35vw] bg-brand-pink/5 rounded-full blur-[150px] pointer-events-none" />

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
            <ShieldAlert size={14} />
            audit engine
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            CRED credit tools.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
            evaluate credit limits health metrics, check card eligibilities, and audit utilization indexes.
          </p>
        </div>

        {/* Auditor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Controls */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <h2 className="font-heading font-extrabold text-xl text-white border-b border-white/5 pb-3">
              Credit Utilization Ratio (CUR) Auditor
            </h2>

            {/* Total credit limit slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                <span className="text-gray-400">Total Credit Limit (Across all cards)</span>
                <span className="text-white font-sans text-sm">₹{totalLimit.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="50000"
                max="3000000"
                step="50000"
                value={totalLimit}
                onChange={(e) => {
                  setTotalLimit(Number(e.target.value));
                  if (usedLimit > Number(e.target.value)) setUsedLimit(Number(e.target.value));
                }}
                className="w-full accent-brand-pink cursor-pointer bg-brand-light-grey"
              />
            </div>

            {/* Spent balance slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                <span className="text-gray-400">Total Card Balance (Current Month Bills)</span>
                <span className="text-white font-sans text-sm">₹{usedLimit.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="0"
                max={totalLimit}
                step="5000"
                value={usedLimit}
                onChange={(e) => setUsedLimit(Number(e.target.value))}
                className="w-full accent-brand-pink cursor-pointer bg-brand-light-grey"
              />
            </div>
          </div>

          {/* Health index card */}
          <div className="md:col-span-5 bg-gradient-to-br from-brand-dark to-brand-light-grey border border-white/5 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-pink" />
            <div className="flex flex-col items-center gap-1.5 text-center">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">CUR Utilization</span>
              <span className="text-4xl font-heading font-black text-white tracking-tight">{ratio}%</span>
              
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border rounded mt-2 ${status.color}`}>
                {status.label}
              </span>
            </div>

            <div className="border-t border-white/5 pt-4 flex flex-col gap-2">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">auditor report</span>
              <p className="text-gray-400 text-xs leading-relaxed">
                {status.desc}
              </p>
            </div>

            <div className="bg-brand-pink/5 border border-brand-pink/20 rounded p-4 text-[10px] text-brand-pink/90 flex items-start gap-2">
              <HelpCircle size={14} className="flex-shrink-0 mt-0.5" />
              <span>For optimum credit building, spread transaction balances across multiple card accounts or ask banks to enhance card limits.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditTools;
