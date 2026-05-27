import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, Info } from 'lucide-react';

const FinancialRules = ({ navigate }) => {
  const [income, setIncome] = useState(100000);
  const [rule72Rate, setRule72Rate] = useState(9); // Mint rate is 9%

  const needs = (income * 0.5).toFixed(0);
  const wants = (income * 0.3).toFixed(0);
  const savings = (income * 0.2).toFixed(0);

  const calculateDoubleYears = () => {
    if (rule72Rate === 0) return '∞';
    return (72 / rule72Rate).toFixed(1);
  };

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
            <TrendingUp size={14} />
            finance rules
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            financial guidelines.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
            learn and play with the gold standards of wealth-building, asset allocations, and debt ratios.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="flex flex-col gap-12">
          
          {/* Rule 1: 50/30/20 Budgeting */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-brand-dark/30 border border-white/5 p-8 rounded-2xl">
            <div className="md:col-span-7 flex flex-col gap-4">
              <h2 className="font-heading font-extrabold text-xl text-white">
                The 50/30/20 Budget Allocation Rule
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                divides your net post-tax income into three spending categories: 50% for Needs (rent, utilities), 30% for Wants (lifestyle, dining out), and 20% for Savings (investments, emergency reserves).
              </p>

              <div className="flex flex-col gap-2 mt-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                  <span className="text-gray-500">Monthly Post-Tax Net Income</span>
                  <span className="text-brand-green font-sans text-sm">₹{income.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="1000000"
                  step="10000"
                  value={income}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="w-full accent-brand-green cursor-pointer bg-brand-light-grey"
                />
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-3">
              {/* Needs bar */}
              <div className="bg-brand-dark border border-white/5 p-3 rounded-lg flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Needs (50%)</span>
                  <span className="text-xs text-white leading-normal mt-0.5">Rent, groceries, loans</span>
                </div>
                <span className="text-sm font-extrabold font-sans text-brand-green">₹{Number(needs).toLocaleString()}</span>
              </div>

              {/* Wants bar */}
              <div className="bg-brand-dark border border-white/5 p-3 rounded-lg flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Wants (30%)</span>
                  <span className="text-xs text-white leading-normal mt-0.5">Entertainment, travel, shopping</span>
                </div>
                <span className="text-sm font-extrabold font-sans text-brand-blue">₹{Number(wants).toLocaleString()}</span>
              </div>

              {/* Savings bar */}
              <div className="bg-brand-dark border border-white/5 p-3 rounded-lg flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Savings & Debt (20%)</span>
                  <span className="text-xs text-white leading-normal mt-0.5">SIPs, stocks, extra repayments</span>
                </div>
                <span className="text-sm font-extrabold font-sans text-brand-pink">₹{Number(savings).toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Rule 2: Rule of 72 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-brand-dark/30 border border-white/5 p-8 rounded-2xl">
            <div className="md:col-span-7 flex flex-col gap-4">
              <h2 className="font-heading font-extrabold text-xl text-white">
                The Rule of 72 (Asset Doubling Timeline)
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                a mathematical formula that calculates how many years it will take for your investment to double at a fixed annual interest rate. divide 72 by your interest percentage.
              </p>

              <div className="flex flex-col gap-2 mt-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                  <span className="text-gray-500">Annual Return Rate (%)</span>
                  <span className="text-brand-green font-sans text-sm">{rule72Rate}%</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="30"
                  step="0.5"
                  value={rule72Rate}
                  onChange={(e) => setRule72Rate(Number(e.target.value))}
                  className="w-full accent-brand-green cursor-pointer bg-brand-light-grey"
                />
              </div>
            </div>

            <div className="md:col-span-5 bg-gradient-to-br from-brand-dark to-brand-light-grey border border-white/5 rounded-xl p-6 text-center">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Est. Years to Double Assets</span>
              <span className="text-5xl font-heading font-black text-white tracking-tight mt-1.5 block">{calculateDoubleYears()} Years</span>
              <span className="text-[10px] text-gray-500 font-sans mt-2 block">invested capital accumulates doubling multiplier under compounded yield interest.</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FinancialRules;
