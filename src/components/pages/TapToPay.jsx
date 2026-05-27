import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ShieldAlert, Cpu, ArrowLeft, Radio } from 'lucide-react';
import credBlackCard from '../../assets/cred_black_card.png';

const TapToPay = ({ navigate }) => {
  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-32 pb-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* Background Neon Glows */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-brand-green/5 rounded-full blur-[180px] pointer-events-none" />

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
          
          {/* Left Column: Descriptions */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-blue uppercase flex items-center gap-2">
              <Radio size={14} className="animate-pulse" />
              contactless experience
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-none">
              tap to pay <br />
              with CRED.
            </h1>
            <p className="text-gray-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed mt-2">
              the frictionless life awaits: reduce your credit card payments to just a tap. make instant in-store purchases by tapping your phone against any NFC POS reader.
            </p>
            <p className="text-gray-400 font-sans text-sm sm:text-base max-w-xl leading-relaxed">
              CRED secures your card digits using tokenization. A virtual representation is loaded onto your device so your physical details are never leaked to local systems.
            </p>

            {/* Feature Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-5 bg-brand-light-grey border border-white/5 rounded-xl flex flex-col gap-2">
                <Cpu className="text-brand-blue" size={20} />
                <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wide">tokenized credentials</h3>
                <p className="text-gray-400 text-xs">Your raw card digits are replaced with an encrypted card token for maximum merchant security.</p>
              </div>
              <div className="p-5 bg-brand-light-grey border border-white/5 rounded-xl flex flex-col gap-2">
                <ShieldAlert className="text-brand-green" size={20} />
                <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wide">secure authorization</h3>
                <p className="text-gray-400 text-xs">Transactions are only initialized when the phone is unlocked via your biometric thumbprint or passcode.</p>
              </div>
            </div>

            {/* Back Button */}
            <button
              onClick={() => navigate('/')}
              className="mt-6 w-fit neopop-press px-8 py-3.5 bg-brand-blue text-black font-extrabold text-sm border-2 border-black shadow-neopop-blue hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all font-heading tracking-wider"
            >
              EXPLORE OTHER FEATURES
            </button>
          </motion.div>

          {/* Right Column: NFC animation visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative py-12"
          >
            {/* Contactless waves visual */}
            <div className="absolute flex items-center justify-center w-64 h-64 border border-brand-blue/10 rounded-full">
              <motion.div
                animate={{ scale: [1, 1.3], opacity: [0.6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeOut" }}
                className="absolute w-full h-full border border-brand-blue/20 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.6], opacity: [0.3, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeOut", delay: 1.5 }}
                className="absolute w-full h-full border border-brand-blue/10 rounded-full"
              />
              <Smartphone size={40} className="text-brand-blue animate-bounce" />
            </div>

            {/* Float credit card mockup */}
            <div className="relative mt-32 w-64 sm:w-72 aspect-[1.586/1] z-10">
              <motion.img
                animate={{ 
                  y: [0, -10, 0],
                  rotateZ: [-2, 2, -2]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                src={credBlackCard}
                alt="CRED Card NFC"
                className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,229,255,0.25)] select-none pointer-events-none"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default TapToPay;
