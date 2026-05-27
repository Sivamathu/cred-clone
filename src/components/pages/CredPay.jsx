import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, QrCode, CheckCircle2, ShieldCheck, Zap, Image, Flashlight } from 'lucide-react';

const CredPay = ({ navigate }) => {
  const [scanState, setScanState] = useState('scanning'); // scanning, processing, success
  const [flashlight, setFlashlight] = useState(false);

  const triggerScan = () => {
    setScanState('processing');
    setTimeout(() => {
      setScanState('success');
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-32 pb-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-brand-green/5 rounded-full blur-[150px] pointer-events-none" />
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
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-green uppercase flex items-center gap-2">
              <QrCode size={14} className="text-brand-green animate-pulse" />
              Scan and Pay with CRED Pay
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-none">
              scan any QR. <br />
              get assured coins.
            </h1>
            <p className="text-gray-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed mt-2">
              pay at offline stores, scanning any local merchant UPI QR code. link multiple bank accounts and cards for automated checkout.
            </p>
            <p className="text-gray-400 font-sans text-sm sm:text-base max-w-xl leading-relaxed">
              accumulate guaranteed cashbacks and 100% assured CRED coins with every scan transaction. support both static paper QR prints and dynamic digital payment terminals.
            </p>

            {/* Verification items */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-green/10 text-brand-green rounded-lg flex-shrink-0 mt-0.5">
                  <Zap size={18} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wide">lightning-fast routing</h3>
                  <p className="text-xs text-gray-400">CRED Pay links directly with banking switches, cutting settlement lag times by over 80%.</p>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <button
              onClick={() => navigate('/')}
              className="mt-6 w-fit neopop-press px-8 py-3.5 bg-brand-green text-black font-extrabold text-sm border-2 border-black shadow-neopop-green hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all font-heading tracking-wider"
            >
              EXPLORE OTHER FEATURES
            </button>
          </motion.div>

          {/* Right Column: Interactive Scan Viewfinder Simulator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 p-8 bg-brand-light-grey border border-white/5 rounded-2xl shadow-2xl relative z-10 overflow-hidden flex flex-col gap-6 items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.03] pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {scanState === 'scanning' && (
                <motion.div
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full flex flex-col gap-6 items-center"
                >
                  <div className="flex flex-col items-center gap-1 text-center">
                    <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">QR Scanner View</h3>
                    <p className="text-xs text-gray-500 font-sans">Align merchant QR code within the highlighted viewfinder frame.</p>
                  </div>

                  {/* Simulated viewfinder */}
                  <div 
                    onClick={triggerScan}
                    className="relative w-64 h-64 border-2 border-dashed border-white/10 rounded-2xl flex items-center justify-center cursor-pointer group bg-black/60 shadow-inner overflow-hidden"
                  >
                    {/* Viewfinder brackets */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-brand-green rounded-tl-md group-hover:scale-105 transition-transform" />
                    <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-brand-green rounded-tr-md group-hover:scale-105 transition-transform" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-brand-green rounded-bl-md group-hover:scale-105 transition-transform" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-brand-green rounded-br-md group-hover:scale-105 transition-transform" />

                    {/* QR Code Graphic Center */}
                    <QrCode size={100} className="text-white/20 group-hover:text-brand-green/30 transition-colors" />

                    {/* Flashing scan laser */}
                    <motion.div
                      animate={{ y: [-100, 100, -100] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                      className="absolute left-0 right-0 h-0.5 bg-brand-green shadow-[0_0_10px_#00e676]"
                    />

                    {/* Flashlight beam simulation */}
                    {flashlight && (
                      <div className="absolute inset-0 bg-white/10 pointer-events-none mix-blend-overlay" />
                    )}

                    <div className="absolute bottom-3 text-[10px] text-gray-500 font-bold uppercase tracking-wider bg-black/80 px-3 py-1 rounded">
                      click here to scan
                    </div>
                  </div>

                  {/* Scanner controls */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => setFlashlight(!flashlight)}
                      className={`p-3 border rounded-full transition-all ${
                        flashlight 
                          ? 'bg-brand-green text-black border-brand-green' 
                          : 'bg-brand-black/50 text-gray-400 border-white/5 hover:text-white'
                      }`}
                      aria-label="Toggle Flashlight"
                    >
                      <Flashlight size={16} />
                    </button>
                    <button
                      onClick={triggerScan}
                      className="p-3 bg-brand-black/50 border border-white/5 hover:text-white text-gray-400 rounded-full transition-all"
                      aria-label="Upload QR from Gallery"
                    >
                      <Image size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {scanState === 'processing' && (
                <motion.div
                  key="processing"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full border-4 border-brand-green/10 border-t-brand-green animate-spin mb-6" />
                  <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider">Processing QR Data</h4>
                  <p className="text-gray-500 text-xs mt-2 max-w-xs">Reading cryptographic keys and verifying merchant details...</p>
                </motion.div>
              )}

              {scanState === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <CheckCircle2 size={56} className="text-brand-green animate-bounce mb-6" />
                  <h4 className="font-heading text-xl font-black text-white uppercase tracking-wider">Scan Successful</h4>
                  <p className="text-gray-400 text-sm mt-1">Merchant Verified: **Cafe Premium Ltd**</p>
                  <span className="text-[10px] text-brand-green mt-2 font-semibold bg-brand-green/10 px-3 py-1 border border-brand-green/20 rounded">
                    +150 CRED Coins Assured
                  </span>

                  <button
                    onClick={() => {
                      setScanState('scanning');
                    }}
                    className="mt-8 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-brand-green/20 text-white font-semibold text-xs uppercase tracking-wider transition-all"
                  >
                    Scan another QR
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

export default CredPay;
