import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CreditCard, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

const UpiOnCredit = ({ navigate }) => {
  const [selectedBank, setSelectedBank] = useState('');
  const [linkingState, setLinkingState] = useState('idle'); // idle, linking, success

  const banks = [
    { name: 'HDFC Bank', logo: '🏦' },
    { name: 'ICICI Bank', logo: '🏛️' },
    { name: 'SBI', logo: '🏢' },
    { name: 'Axis Bank', logo: '🏪' },
    { name: 'PNB', logo: '🏛️' },
    { name: 'Canara Bank', logo: '🏦' }
  ];

  const handleBankSelect = (bankName) => {
    setSelectedBank(bankName);
    setLinkingState('linking');
    setTimeout(() => {
      setLinkingState('success');
    }, 2500);
  };

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-32 pb-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-brand-pink/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-brand-blue/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Page Header */}
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
          back to payments
        </button>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-6">
          
          {/* Left Column: UI Descriptions */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-pink uppercase flex items-center gap-2">
              <CreditCard size={14} className="text-brand-pink animate-pulse" />
              rupay credit card on upi
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-none">
              credit limit. <br />
              now on UPI.
            </h1>
            <p className="text-gray-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed mt-2">
              link your RuPay credit card to UPI on CRED and scan any merchant QR to make seamless payments directly using your credit card limit.
            </p>
            <p className="text-gray-400 font-sans text-sm sm:text-base max-w-xl leading-relaxed">
              No need to carry physical plastic card. Enjoy the convenience of UPI while accumulating credit points, reward milestones, and deferring payments via monthly cycles.
            </p>

            {/* Verification items */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-pink/10 text-brand-pink rounded-lg flex-shrink-0 mt-0.5">
                  <ShieldCheck size={18} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wide">secure card tokenization</h3>
                  <p className="text-xs text-gray-400">CRED works directly with RuPay & NPCI servers to tokenize credentials under RBI guidelines.</p>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <button
              onClick={() => navigate('/')}
              className="mt-6 w-fit neopop-press px-8 py-3.5 bg-brand-pink text-white font-extrabold text-sm border-2 border-black shadow-neopop-pink hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all font-heading tracking-wider"
            >
              EXPLORE OTHER FEATURES
            </button>
          </motion.div>

          {/* Right Column: Interactive Link Bank Selector */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 p-8 bg-brand-light-grey border border-white/5 rounded-2xl shadow-2xl relative z-10 overflow-hidden flex flex-col gap-6"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.03] pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {linkingState === 'idle' && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5"
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <CreditCard size={18} className="text-brand-pink" />
                      Select Bank
                    </h3>
                    <p className="text-xs text-gray-500 font-sans">Choose your RuPay credit card issuer bank to link with CRED UPI.</p>
                  </div>

                  {/* Grid of Banks */}
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {banks.map((b) => (
                      <button
                        key={b.name}
                        onClick={() => handleBankSelect(b.name)}
                        className="p-4 bg-brand-black/50 border border-white/5 hover:border-brand-pink/30 hover:bg-white/5 text-left rounded-xl transition-all flex items-center gap-3 group cursor-pointer"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform">{b.logo}</span>
                        <span className="text-xs font-semibold text-white group-hover:text-brand-pink transition-colors truncate">{b.name}</span>
                      </button>
                    ))}
                  </div>

                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl flex gap-3 text-left">
                    <HelpCircle size={18} className="text-gray-500 flex-shrink-0 mt-0.5" />
                    <p className="text-[10px] text-gray-500 leading-normal">
                      Only RuPay variant credit cards can be linked to UPI under current regulatory framework. Visa and Mastercard options are not supported.
                    </p>
                  </div>
                </motion.div>
              )}

              {linkingState === 'linking' && (
                <motion.div
                  key="linking"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full border-4 border-brand-pink/10 border-t-brand-pink animate-spin mb-6" />
                  <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider">Linking credit card</h4>
                  <p className="text-gray-500 text-xs mt-2 max-w-xs">Querying {selectedBank} for RuPay credentials linked to your mobile...</p>
                </motion.div>
              )}

              {linkingState === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <CheckCircle2 size={56} className="text-brand-green animate-bounce mb-6" />
                  <h4 className="font-heading text-xl font-black text-white uppercase tracking-wider">Linking Successful</h4>
                  <p className="text-gray-400 text-sm mt-1">{selectedBank} RuPay Card linked successfully!</p>
                  <span className="text-[10px] text-gray-600 mt-2 font-mono uppercase">Card Ref: xxxx-xxxx-4022</span>

                  <button
                    onClick={() => {
                      setLinkingState('idle');
                      setSelectedBank('');
                    }}
                    className="mt-8 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-brand-pink/20 text-white font-semibold text-xs uppercase tracking-wider transition-all"
                  >
                    Link another card
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default UpiOnCredit;
