import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Activity, Info, Calendar, Percent, ShieldCheck, Download, RefreshCw } from 'lucide-react';

const CreditScore = ({ navigate }) => {
  const [paymentsPunctual, setPaymentsPunctual] = useState(100); // 0 to 100%
  const [utilization, setUtilization] = useState(25); // 0 to 100%
  const [historyAge, setHistoryAge] = useState(4); // years
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Compute mock score: Base is 300, max is 900.
  // Punctuality: weight 35% (max 210 points)
  // Utilization: weight 30% (max 180 points, lower utilization is better. 0-30% is best)
  // History age: weight 15% (max 90 points, older is better, capped at 10 years)
  // Base fixed elements: weight 20% (120 points)
  const calculateScore = () => {
    const punctualityScore = (paymentsPunctual / 100) * 210;
    
    let utilScore = 180;
    if (utilization > 30) {
      utilScore = Math.max(0, 180 - ((utilization - 30) / 70) * 180);
    }

    const ageScore = Math.min(10, historyAge) * 9;
    
    return Math.floor(300 + punctualityScore + utilScore + ageScore + 120);
  };

  const score = calculateScore();

  const getScoreRating = (val) => {
    if (val >= 800) return { label: 'excellent', color: 'text-brand-green' };
    if (val >= 750) return { label: 'very good', color: 'text-brand-blue' };
    if (val >= 680) return { label: 'good', color: 'text-brand-gold' };
    return { label: 'fair', color: 'text-brand-pink' };
  };

  const rating = getScoreRating(score);

  const startDownloadReport = () => {
    setIsDownloading(true);
    setDownloadSuccess(false);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
    }, 2500);
  };

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-32 pb-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[35vw] h-[35vw] bg-brand-green/5 rounded-full blur-[180px] pointer-events-none" />

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
          back to Home
        </button>

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-blue uppercase flex items-center gap-2">
              <Activity size={14} />
              CRED CREDIT SCORE
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-none">
              simulate your <br />
              standing.
            </h1>
            <p className="text-gray-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed mt-2">
              Interactive credit score simulator. Adjust payments history, utilization ratios, and credit age parameters to examine simulated score updates instantly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center py-4 bg-brand-light-grey border border-white/5 rounded-2xl shadow-2xl relative"
          >
            {/* The circular score dial */}
            <div className="relative flex items-center justify-center w-48 h-48">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="75"
                  stroke="#161616"
                  strokeWidth="12"
                  fill="transparent"
                />
                <motion.circle
                  cx="96"
                  cy="96"
                  r="75"
                  stroke={score >= 800 ? '#00e676' : score >= 750 ? '#00e5ff' : score >= 680 ? '#ffd54f' : '#ff4081'}
                  strokeWidth="12"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 75}
                  animate={{ strokeDashoffset: (2 * Math.PI * 75) * (1 - (score - 300) / 600) }}
                  transition={{ type: 'spring', stiffness: 60, damping: 15 }}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-5xl font-heading font-black text-white">{score}</span>
                <span className={`text-[10px] uppercase font-bold tracking-widest mt-1.5 ${rating.color}`}>
                  {rating.label}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sliders and Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* Sliders Column */}
          <div className="lg:col-span-7 p-8 bg-brand-light-grey border border-white/5 shadow-neopop-card rounded-2xl flex flex-col gap-6 text-left">
            <h3 className="font-heading text-base font-bold text-white uppercase tracking-wider">
              Simulator Controls
            </h3>

            {/* Slider 1: Payments Punctuality */}
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between items-baseline">
                <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider flex items-center gap-1">
                  <Calendar size={12} /> On-Time Payments
                </span>
                <span className="text-sm font-semibold text-white">{paymentsPunctual}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                step="1"
                value={paymentsPunctual}
                onChange={(e) => setPaymentsPunctual(parseInt(e.target.value))}
                className="w-full h-1 bg-brand-black rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
            </div>

            {/* Slider 2: Credit Utilization */}
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between items-baseline">
                <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider flex items-center gap-1">
                  <Percent size={12} /> Credit Limit Usage
                </span>
                <span className="text-sm font-semibold text-white">{utilization}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={utilization}
                onChange={(e) => setUtilization(parseInt(e.target.value))}
                className="w-full h-1 bg-brand-black rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
              <span className="text-[9px] text-gray-500 font-sans mt-0.5">Tip: Keep utilization below 30% to maximize standing.</span>
            </div>

            {/* Slider 3: Age of History */}
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between items-baseline">
                <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider flex items-center gap-1">
                  <ShieldCheck size={12} /> Age of Credit Accounts
                </span>
                <span className="text-sm font-semibold text-white">{historyAge} {historyAge === 1 ? 'Year' : 'Years'}</span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                step="1"
                value={historyAge}
                onChange={(e) => setHistoryAge(parseInt(e.target.value))}
                className="w-full h-1 bg-brand-black rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
            </div>
          </div>

          {/* Action Column: Download report */}
          <div className="lg:col-span-5 p-8 bg-brand-light-grey border border-white/5 rounded-2xl flex flex-col justify-between gap-6 text-left relative overflow-hidden">
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-base font-bold text-white uppercase tracking-wider">
                Credit Bureau Records
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                Your Experian score dashboard is synced directly using bank credentials. Download the consolidated monthly credit bureau audit statement.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs text-gray-400 border-b border-white/5 pb-2">
                <span>Bureau Agency</span>
                <span className="font-bold text-white uppercase tracking-wider">Experian PLC</span>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-400 border-b border-white/5 pb-2">
                <span>Last Updated</span>
                <span className="font-bold text-white">May 2026</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {isDownloading ? (
                <motion.div
                  key="downloading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-3 bg-brand-blue/10 border border-brand-blue/20 p-4 rounded-lg"
                >
                  <RefreshCw className="text-brand-blue animate-spin" size={18} />
                  <span className="text-xs text-brand-blue font-semibold">Compiling PDF statement data...</span>
                </motion.div>
              ) : downloadSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-3 bg-brand-green/10 border border-brand-green/20 p-4 rounded-lg"
                >
                  <ShieldCheck className="text-brand-green flex-shrink-0" size={18} />
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-white">Statement Downloaded</span>
                    <span className="text-[9px] text-brand-green mt-0.5">Saved as CRED_Credit_Report_Experian.pdf</span>
                  </div>
                  <button onClick={() => setDownloadSuccess(false)} className="ml-auto text-[9px] font-bold text-gray-500 uppercase">Reset</button>
                </motion.div>
              ) : (
                <button
                  onClick={startDownloadReport}
                  className="w-full neopop-press py-4.5 bg-white text-black font-extrabold text-sm border-2 border-black shadow-neopop-white hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all font-heading tracking-wider flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  DOWNLOAD PDF REPORT
                </button>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreditScore;
