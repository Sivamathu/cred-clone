import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Coins, TrendingUp, ShieldCheck, Info, ChevronRight } from 'lucide-react';

const Mint = ({ navigate }) => {
  const [investment, setInvestment] = useState(10000);
  const [period, setPeriod] = useState(3); // years

  const interestRate = 0.09; // 9% p.a.
  
  // Calculate compound interest: A = P * (1 + r)^t
  const totalReturns = Math.floor(investment * Math.pow(1 + interestRate, period));
  const interestEarned = totalReturns - investment;

  const comparisonFD = Math.floor(investment * Math.pow(1 + 0.06, period));
  const fdEarned = comparisonFD - investment;

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-32 pb-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[35vw] h-[35vw] bg-brand-pink/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-6xl w-full mx-auto z-10 flex flex-col gap-12">
        {/* Back Link */}
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer w-fit"
        >
          <ArrowLeft size={16} />
          back to upgrades
        </button>

        {/* Top Grid: Title and Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
          {/* Left Column: Description & Perks */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-gold uppercase flex items-center gap-2">
              <Coins size={14} className="animate-pulse" />
              CRED MINT
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-none">
              earn up to <br />
              9% p.a.
            </h1>
            <p className="text-gray-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed mt-2">
              lend to high-trust members and watch your capital grow. CRED Mint connects premium creditworthy investors directly with borrowing members holding verified credit histories.
            </p>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
              every borrower on CRED is vetted across strict parameters. risk is diversified across thousands of profiles, maintaining historical default rates at under 0.5%.
            </p>

            {/* Metrics points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex gap-3">
                <div className="p-2 bg-brand-gold/10 text-brand-gold rounded-lg flex-shrink-0 mt-0.5">
                  <ShieldCheck size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white uppercase tracking-wide">Fully Diversified Risk</span>
                  <span className="text-[11px] text-gray-500">Your investment is split automatically among thousands of high-trust borrowers to reduce micro-exposure.</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="p-2 bg-brand-gold/10 text-brand-gold rounded-lg flex-shrink-0 mt-0.5">
                  <TrendingUp size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white uppercase tracking-wide">9% Inflation Beating Yield</span>
                  <span className="text-[11px] text-gray-500">Earn up to 1.5x of standard banking deposits returns, with direct interest credit payouts.</span>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <button
              onClick={() => navigate('/')}
              className="mt-6 w-fit neopop-press px-8 py-3.5 bg-brand-gold text-black font-extrabold text-sm border-2 border-black shadow-neopop-gold hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all font-heading tracking-wider"
            >
              EXPLORE OTHER FEATURES
            </button>
          </motion.div>

          {/* Right Column: Dynamic Investment Slider Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 p-8 bg-brand-light-grey border border-white/5 rounded-2xl shadow-2xl relative z-10 overflow-hidden flex flex-col gap-6"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.03] pointer-events-none" />
            <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <TrendingUp size={18} className="text-brand-gold" />
              Yield Calculator
            </h3>

            {/* Amount Slider */}
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between items-baseline">
                <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Investment Amount</span>
                <span className="text-xl font-heading font-black text-white">${investment.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="100000"
                step="5000"
                value={investment}
                onChange={(e) => setInvestment(parseInt(e.target.value))}
                className="w-full h-1.5 bg-brand-black rounded-lg appearance-none cursor-pointer accent-brand-gold"
              />
              <div className="flex justify-between text-[9px] text-gray-600 font-bold uppercase">
                <span>$5,000</span>
                <span>$100,000</span>
              </div>
            </div>

            {/* Period selector */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider text-left">Investment Tenure</span>
              <div className="grid grid-cols-3 gap-2">
                {[1, 3, 5].map((y) => (
                  <button
                    key={y}
                    onClick={() => setPeriod(y)}
                    className={`py-2 rounded-lg border text-xs font-semibold uppercase transition-all ${
                      period === y
                        ? 'bg-brand-gold/15 text-brand-gold border-brand-gold'
                        : 'bg-brand-black/50 text-gray-400 border-white/5 hover:border-white/10 hover:text-white'
                    }`}
                  >
                    {y} {y === 1 ? 'Year' : 'Years'}
                  </button>
                ))}
              </div>
            </div>

            {/* Display Yield results */}
            <div className="flex flex-col gap-4 border-t border-white/5 pt-4">
              <div className="flex justify-between items-center bg-brand-black/50 p-4 border border-white/5 rounded-xl text-left">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Estimated Returns</span>
                  <span className="text-xl font-heading font-black text-brand-gold">${totalReturns.toLocaleString()}</span>
                </div>
                <div className="flex flex-col gap-0.5 text-right">
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Interest Earned (9%)</span>
                  <span className="text-sm font-semibold text-white">+${interestEarned.toLocaleString()}</span>
                </div>
              </div>

              {/* Comparison vs Fixed Deposit */}
              <div className="flex flex-col gap-2 p-4 bg-white/5 rounded-xl text-left text-xs">
                <div className="flex justify-between items-center text-gray-400">
                  <span>Standard FD Returns (6%):</span>
                  <span className="font-semibold text-white">${comparisonFD.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center font-bold text-brand-green border-t border-white/5 pt-2">
                  <span>Extra earned with CRED Mint:</span>
                  <span>+${(interestEarned - fdEarned).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <span className="text-[9px] text-gray-600 font-sans leading-normal flex items-start gap-1">
              <Info size={10} className="mt-0.5 flex-shrink-0" />
              CRED Mint is routed via regulated P2P NBFC partners. Estimated yields are subject to credit outcomes. Past performance is not indicative of future returns.
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
