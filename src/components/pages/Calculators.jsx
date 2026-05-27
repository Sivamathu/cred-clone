import React, { useState } from 'react';
import { ArrowLeft, Calculator, HelpCircle } from 'lucide-react';

const Calculators = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState('emi');

  // Slider States
  const [emiAmount, setEmiAmount] = useState(500000);
  const [emiRate, setEmiRate] = useState(10.5);
  const [emiTenure, setEmiTenure] = useState(36);

  const [cardDebt, setCardDebt] = useState(50000);
  const [cardApr, setCardApr] = useState(42); // 42% standard credit card APR
  const [minPaymentRate, setMinPaymentRate] = useState(5); // 5% minimum payment

  // EMI calculation formulas
  const calculateEmi = () => {
    const P = emiAmount;
    const r = emiRate / 12 / 100;
    const n = emiTenure;
    if (r === 0) return (P / n).toFixed(0);
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return emi.toFixed(0);
  };

  const calculateTotalInterest = () => {
    const emi = calculateEmi();
    return (emi * emiTenure - emiAmount).toFixed(0);
  };

  // Card Debt calculations
  const calculateMinPayment = () => {
    return ((cardDebt * minPaymentRate) / 100).toFixed(0);
  };

  const calculateAprCost = () => {
    return ((cardDebt * (cardApr / 100)) / 12).toFixed(0);
  };

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-28 pb-24 px-6 md:px-12 w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[40vw] h-[40vw] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10 text-left">
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-200 mb-10 text-xs font-semibold uppercase tracking-wider cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to home
        </button>

        <div className="flex flex-col gap-4 mb-12">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-blue uppercase flex items-center gap-2">
            <Calculator size={14} />
            finance tools
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            CRED calculators.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
            run simulation numbers on repayment logs, loan compounding interests, and credit card carrying penalties.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-3 mb-10 border-b border-white/5 pb-4">
          <button
            onClick={() => setActiveTab('emi')}
            className={`px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider border transition-all duration-200 cursor-pointer ${
              activeTab === 'emi'
                ? 'bg-white text-black border-white shadow-[3px_3px_0px_0px_#00e5ff]'
                : 'bg-brand-dark text-gray-400 border-white/5 hover:text-white'
            }`}
          >
            Loan EMI Calculator
          </button>
          <button
            onClick={() => setActiveTab('card')}
            className={`px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider border transition-all duration-200 cursor-pointer ${
              activeTab === 'card'
                ? 'bg-white text-black border-white shadow-[3px_3px_0px_0px_#ff3366]'
                : 'bg-brand-dark text-gray-400 border-white/5 hover:text-white'
            }`}
          >
            Credit APR Costs
          </button>
        </div>

        {/* Calculator Body */}
        {activeTab === 'emi' ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Input Controls */}
            <div className="md:col-span-7 flex flex-col gap-6">
              {/* Principal amount */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                  <span className="text-gray-400">Loan Principal</span>
                  <span className="text-brand-blue font-sans text-sm">₹{emiAmount.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="50000"
                  value={emiAmount}
                  onChange={(e) => setEmiAmount(Number(e.target.value))}
                  className="w-full accent-brand-blue cursor-pointer bg-brand-light-grey"
                />
              </div>

              {/* Interest rate */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                  <span className="text-gray-400">Interest Rate (p.a.)</span>
                  <span className="text-brand-blue font-sans text-sm">{emiRate}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="24"
                  step="0.1"
                  value={emiRate}
                  onChange={(e) => setEmiRate(Number(e.target.value))}
                  className="w-full accent-brand-blue cursor-pointer bg-brand-light-grey"
                />
              </div>

              {/* Tenure months */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                  <span className="text-gray-400">Tenure Duration</span>
                  <span className="text-brand-blue font-sans text-sm">{emiTenure} Months</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="120"
                  step="6"
                  value={emiTenure}
                  onChange={(e) => setEmiTenure(Number(e.target.value))}
                  className="w-full accent-brand-blue cursor-pointer bg-brand-light-grey"
                />
              </div>
            </div>

            {/* Results Screen */}
            <div className="md:col-span-5 bg-gradient-to-br from-brand-dark to-brand-light-grey border border-white/5 rounded-2xl p-6 flex flex-col gap-6 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue" />
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Monthly EMI</span>
                <span className="text-4xl font-heading font-black text-white tracking-tight">₹{Number(calculateEmi()).toLocaleString()}</span>
              </div>

              <div className="flex flex-col gap-4 border-t border-white/5 pt-6 text-left text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold uppercase tracking-wider">Total Principal</span>
                  <span className="text-gray-300 font-semibold font-sans">₹{emiAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold uppercase tracking-wider">Compounded Interest</span>
                  <span className="text-brand-blue font-semibold font-sans">₹{Number(calculateTotalInterest()).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/5 pt-4">
                  <span className="text-gray-400 font-bold uppercase tracking-wider">Total Repayments</span>
                  <span className="text-white font-extrabold font-sans text-sm">₹{(emiAmount + Number(calculateTotalInterest())).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Card Repayments Inputs */}
            <div className="md:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                  <span className="text-gray-400">Card Outstanding Balance</span>
                  <span className="text-brand-pink font-sans text-sm">₹{cardDebt.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="1000000"
                  step="5000"
                  value={cardDebt}
                  onChange={(e) => setCardDebt(Number(e.target.value))}
                  className="w-full accent-brand-pink cursor-pointer bg-brand-light-grey"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                  <span className="text-gray-400">Card APR (Annual Percentage Rate)</span>
                  <span className="text-brand-pink font-sans text-sm">{cardApr}%</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="48"
                  step="1"
                  value={cardApr}
                  onChange={(e) => setCardApr(Number(e.target.value))}
                  className="w-full accent-brand-pink cursor-pointer bg-brand-light-grey"
                />
              </div>
            </div>

            {/* Repayments cost panel */}
            <div className="md:col-span-5 bg-gradient-to-br from-brand-dark to-brand-light-grey border border-white/5 rounded-2xl p-6 flex flex-col gap-6 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-pink" />
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Monthly APR Penalty</span>
                <span className="text-3xl font-heading font-black text-white tracking-tight">₹{Number(calculateAprCost()).toLocaleString()}</span>
                <span className="text-[10px] text-gray-500 font-sans leading-relaxed mt-1">estimated if you carry the balance over the next billing cycle.</span>
              </div>

              <div className="flex flex-col gap-4 border-t border-white/5 pt-6 text-left text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold uppercase tracking-wider">Minimum Amount Due</span>
                  <span className="text-brand-pink font-semibold font-sans">₹{Number(calculateMinPayment()).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold uppercase tracking-wider">Outstanding Liability</span>
                  <span className="text-gray-300 font-semibold font-sans">₹{cardDebt.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="bg-brand-pink/5 border border-brand-pink/20 rounded p-4 text-[10px] text-brand-pink/90 text-left flex items-start gap-2">
                <HelpCircle size={14} className="flex-shrink-0 mt-0.5" />
                <span>Paying only the minimum due will trigger high APR interest charges on your balance. Always aim to settle total credit balances.</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculators;
