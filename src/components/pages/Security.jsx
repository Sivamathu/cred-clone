import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Shield, ShieldCheck, ShieldAlert, Key, EyeOff, Radio, Lock, ToggleLeft, ToggleRight, Sparkles } from 'lucide-react';

const Security = ({ navigate }) => {
  const [scanState, setScanState] = useState('idle'); // idle, scanning, complete
  const [scanLogs, setScanLogs] = useState([]);
  const [shieldEnabled, setShieldEnabled] = useState(true);
  const [spamFilterEnabled, setSpamFilterEnabled] = useState(true);
  const [alertsEnabled, setAlertsEnabled] = useState(false);

  const startSecurityScan = () => {
    setScanState('scanning');
    setScanLogs([]);
    
    const logs = [
      'Initializing PCI-DSS token audit...',
      'Checking cryptographic key rotations...',
      'Verifying device-level biometric integration...',
      'Scanning connected bank API endpoints...',
      'Analyzing SSL handshake certificates...',
      'Vulnerability audit completed successfully.'
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setScanLogs(prev => [...prev, log]);
        if (index === logs.length - 1) {
          setScanState('complete');
        }
      }, (index + 1) * 800);
    });
  };

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-32 pb-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-brand-green/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-brand-blue/5 rounded-full blur-[180px] pointer-events-none" />

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
          back to home
        </button>

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-green uppercase flex items-center gap-2">
              <Shield size={14} />
              CRED SECURITY
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-none">
              impenetrable <br />
              fortress.
            </h1>
            <p className="text-gray-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed mt-2">
              CRED employs banking-grade PCI-DSS compliance frameworks alongside dual-layered cryptographic tokenization. Your credit details and credentials are never stored or exposed directly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 p-6 bg-brand-light-grey border border-white/5 rounded-2xl flex flex-col gap-6"
          >
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Radio size={16} className="text-brand-green animate-pulse" />
              security dashboard
            </h3>
            
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center bg-brand-black/60 p-4 border border-white/5 rounded-xl text-left">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Shield Tokenization</span>
                  <span className="text-[10px] text-gray-500 mt-0.5">Encrypts card details on the device</span>
                </div>
                <button onClick={() => setShieldEnabled(!shieldEnabled)} className="text-brand-green">
                  {shieldEnabled ? <ToggleRight size={32} /> : <ToggleLeft size={32} className="text-gray-600" />}
                </button>
              </div>

              <div className="flex justify-between items-center bg-brand-black/60 p-4 border border-white/5 rounded-xl text-left">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Zero Spam Filter</span>
                  <span className="text-[10px] text-gray-500 mt-0.5">Blocks marketing calls & data leaks</span>
                </div>
                <button onClick={() => setSpamFilterEnabled(!spamFilterEnabled)} className="text-brand-green">
                  {spamFilterEnabled ? <ToggleRight size={32} /> : <ToggleLeft size={32} className="text-gray-600" />}
                </button>
              </div>

              <div className="flex justify-between items-center bg-brand-black/60 p-4 border border-white/5 rounded-xl text-left">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Real-Time Threat Alerts</span>
                  <span className="text-[10px] text-gray-500 mt-0.5">Instant alerts on score drops & fraud checks</span>
                </div>
                <button onClick={() => setAlertsEnabled(!alertsEnabled)} className="text-brand-green">
                  {alertsEnabled ? <ToggleRight size={32} /> : <ToggleLeft size={32} className="text-gray-600" />}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Security Scanner Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          <div className="lg:col-span-7 p-8 bg-brand-light-grey border border-white/5 shadow-neopop-card rounded-2xl flex flex-col justify-between gap-6 relative overflow-hidden">
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Key size={16} className="text-brand-green" />
                Vulnerability Scan Simulator
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                Audit your active device, bank credentials, and tokenization keys directly through our mock system checker.
              </p>
            </div>

            <div className="flex flex-col gap-3 min-h-[160px] bg-brand-black/70 p-4 rounded border border-white/5 font-mono text-[11px] text-brand-green/80 text-left">
              {scanLogs.length === 0 && (
                <span className="text-gray-600 italic">No scan performed yet. Click the button below to initialize.</span>
              )}
              {scanLogs.map((log, idx) => (
                <div key={idx} className="flex gap-2">
                  <span>➜</span>
                  <span>{log}</span>
                </div>
              ))}
              {scanState === 'scanning' && (
                <div className="w-4 h-4 border-2 border-brand-green/20 border-t-brand-green rounded-full animate-spin mt-2" />
              )}
            </div>

            <button
              onClick={startSecurityScan}
              disabled={scanState === 'scanning'}
              className="w-fit neopop-press px-6 py-3 bg-white text-black font-extrabold text-xs border border-black shadow-[3px_3px_0px_0px_#00e676] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer disabled:opacity-50"
            >
              INITIALIZE COMPLIANCE SCAN
            </button>
          </div>

          {/* Compliance Status info */}
          <div className="lg:col-span-5 p-8 bg-brand-light-grey border border-white/5 rounded-2xl flex flex-col justify-between items-center text-center">
            <AnimatePresence mode="wait">
              {scanState !== 'complete' ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="flex flex-col items-center gap-4 py-8"
                >
                  <Lock className="text-gray-500 animate-pulse" size={56} />
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">System Locked</span>
                  <p className="text-[11px] text-gray-600 max-w-xs">Scan the system to generate your real-time PCI-DSS threat compliance score.</p>
                </motion.div>
              ) : (
                <motion.div
                  key="secure"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="flex flex-col items-center gap-4 py-8"
                >
                  <ShieldCheck className="text-brand-green animate-bounce" size={64} />
                  <span className="text-xs font-bold text-brand-green uppercase tracking-wider">System Compliant</span>
                  <div className="flex flex-col gap-1 text-center mt-2">
                    <span className="text-2xl font-heading font-black text-white">100% SECURE</span>
                    <p className="text-[11px] text-gray-400 max-w-xs mt-1">Zero security leak vectors found. Token key rotation matches PCI-DSS 4.0 guidelines.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Security;
