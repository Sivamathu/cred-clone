import React, { useState } from 'react';
import { ArrowLeft, Briefcase, Key, CheckCircle2 } from 'lucide-react';

const MerchantTerms = ({ navigate }) => {
  const [mdrAmount, setMdrAmount] = useState(100000);
  const [mdrRate, setMdrRate] = useState(1.9); // 1.9% standard credit card MDR rate

  const [generatedKey, setGeneratedKey] = useState(false);

  const calculateMdrCost = () => {
    return ((mdrAmount * mdrRate) / 100).toFixed(0);
  };

  const generateCredentials = () => {
    setGeneratedKey(true);
    setTimeout(() => setGeneratedKey(false), 5000);
  };

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
            <Briefcase size={14} />
            merchant services
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            merchant terms.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
            review settlement cycles, commission charts, and API integrations for CRED Pay merchant accounts.
          </p>
        </div>

        {/* Merchant Calculator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Controls */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <h2 className="font-heading font-extrabold text-xl text-white border-b border-white/5 pb-3">
              MDR Fees Simulator
            </h2>

            {/* Sales Volume Slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                <span className="text-gray-400">Monthly Processing Volume</span>
                <span className="text-brand-pink font-sans text-sm">₹{mdrAmount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="10000000"
                step="50000"
                value={mdrAmount}
                onChange={(e) => setMdrAmount(Number(e.target.value))}
                className="w-full accent-brand-pink cursor-pointer bg-brand-light-grey"
              />
            </div>

            {/* MDR rate slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                <span className="text-gray-400">Merchant Discount Rate (MDR)</span>
                <span className="text-brand-pink font-sans text-sm">{mdrRate}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="3.5"
                step="0.05"
                value={mdrRate}
                onChange={(e) => setMdrRate(Number(e.target.value))}
                className="w-full accent-brand-pink cursor-pointer bg-brand-light-grey"
              />
            </div>
          </div>

          {/* Results card */}
          <div className="md:col-span-5 bg-gradient-to-br from-brand-dark to-brand-light-grey border border-white/5 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-pink" />
            
            <div className="flex flex-col items-center gap-1.5 text-center">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Est. MDR Processing Fee</span>
              <span className="text-4xl font-heading font-black text-white tracking-tight">₹{Number(calculateMdrCost()).toLocaleString()}</span>
              <span className="text-[10px] text-gray-500 font-sans mt-2">net settlements arrive within T+1 days of credit facilitation.</span>
            </div>

            <div className="border-t border-white/5 pt-4 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5 text-left">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">developer integration</span>
                <span className="text-gray-400 text-xs leading-normal">generate mock API client IDs to test credentials loops in staging:</span>
              </div>

              {generatedKey ? (
                <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-4 flex flex-col gap-1.5 text-left font-mono text-[10px] text-brand-green">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 size={12} />
                    <span>CREDENTIALS GENERATED</span>
                  </div>
                  <span className="text-gray-300 break-all select-all mt-1">client_id: cred_sandbox_9283f9823h89d</span>
                  <span className="text-gray-300 break-all select-all">client_secret: csec_2398h9d2389d</span>
                </div>
              ) : (
                <button
                  onClick={generateCredentials}
                  className="w-full py-2 bg-brand-pink text-white font-extrabold text-xs tracking-wider uppercase border border-brand-pink rounded hover:bg-brand-pink/90 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Key size={14} />
                  GENERATE API KEYS
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantTerms;
