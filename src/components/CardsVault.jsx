import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, Shield, RefreshCw } from 'lucide-react';

const CardsVault = () => {
  const [activeTheme, setActiveTheme] = useState('black');
  const [cardNumber, setCardNumber] = useState('4920 •••• •••• 9283');
  const [logMessage, setLogMessage] = useState('Vault initialized. Card token is active & secure.');
  const [isFlipped, setIsFlipped] = useState(false);

  const cardThemes = {
    black: { name: 'Matte Black', gradient: 'from-zinc-800 to-zinc-950', border: 'border-white/10', glow: 'shadow-[0_0_20px_rgba(255,255,255,0.05)]' },
    gold: { name: 'Sovereign Gold', gradient: 'from-amber-900 via-amber-950 to-orange-950', border: 'border-brand-gold/20', glow: 'shadow-[0_0_20px_rgba(212,175,55,0.15)]' },
    neon: { name: 'Pulse Neon', gradient: 'from-emerald-900 to-teal-950', border: 'border-brand-green/20', glow: 'shadow-[0_0_20px_rgba(0,230,118,0.15)]' },
    pink: { name: 'Cyber Pink', gradient: 'from-pink-900 to-rose-950', border: 'border-brand-pink/20', glow: 'shadow-[0_0_20px_rgba(255,64,129,0.15)]' }
  };

  const rotateToken = () => {
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    setCardNumber(`4920 •••• •••• ${randomDigits}`);
    setLogMessage(`Token Rotated. Generated new secure virtual credential key linked to RTO database.`);
  };

  return (
    <section id="cards-vault" className="relative bg-brand-black py-24 md:py-36 px-6 md:px-12 border-t border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[35vw] h-[35vw] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: UI Description & Customizer */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-left">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-blue uppercase flex items-center gap-2">
            <Shield size={14} className="text-brand-blue" />
            virtual cards vault
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            your personalized <br />
            credentials.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            generate and customize encrypted virtual cards for secure online checkouts. toggle CVV visibility, rotate token keys, and switch between premium card aesthetics instantly.
          </p>

          {/* Theme Customizer buttons */}
          <div className="flex flex-col gap-2.5 mt-2">
            <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Select Card Theme</span>
            <div className="grid grid-cols-2 gap-2.5">
              {Object.keys(cardThemes).map((themeKey) => (
                <button
                  key={themeKey}
                  onClick={() => {
                    setActiveTheme(themeKey);
                    setLogMessage(`Switched card theme to ${cardThemes[themeKey].name}. Gradient layers refreshed.`);
                  }}
                  className={`px-4 py-2 border text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTheme === themeKey
                      ? 'bg-white text-black border-white shadow-[2px_2px_0px_0px_#00e5ff]'
                      : 'bg-brand-light-grey text-gray-400 border-white/5 hover:border-white/10 hover:text-white'
                  }`}
                >
                  {cardThemes[themeKey].name}
                </button>
              ))}
            </div>
          </div>

          {/* Key rotation trigger */}
          <button
            onClick={rotateToken}
            className="w-full neopop-press py-3 bg-white text-black font-extrabold text-xs border border-black shadow-[3px_3px_0px_0px_#00e676] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2 tracking-wider mt-2"
          >
            <RefreshCw size={14} />
            ROTATE VIRTUAL TOKEN KEY
          </button>

          {/* Interactive Console Screen */}
          <div className="bg-brand-dark border-2 border-brand-accent-grey p-4 rounded font-mono text-[11px] text-brand-green/80 flex items-start gap-2 shadow-inner mt-4">
            <Terminal size={14} className="mt-0.5 flex-shrink-0 text-brand-green" />
            <span className="leading-relaxed">{logMessage}</span>
          </div>
        </div>

        {/* Right Column: Glassmorphic Flippable Card */}
        <div className="lg:col-span-7 flex flex-col justify-center items-center py-12">
          {/* Flippable card animation */}
          <div 
            className="w-full max-w-[400px] aspect-[1.586/1] cursor-pointer relative perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              transformTemplate={({ rotateY }) => `rotateY(${rotateY})`}
              className={`w-full h-full relative transform-style-3d rounded-2xl ${cardThemes[activeTheme].glow}`}
            >
              {/* Front Side */}
              <div className={`absolute inset-0 w-full h-full bg-gradient-to-r ${cardThemes[activeTheme].gradient} rounded-2xl p-8 flex flex-col justify-between backface-hidden border ${cardThemes[activeTheme].border} transition-all duration-500`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.05] pointer-events-none rounded-2xl" />
                <div className="flex justify-between items-start z-10">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] tracking-widest text-white/50 font-bold uppercase">CRED Virtual Card</span>
                    <span className="text-sm font-heading font-black text-white mt-1 uppercase tracking-wide">Glassmorphic {cardThemes[activeTheme].name}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Shield className="text-white/80" size={20} />
                  </div>
                </div>
                <div className="flex flex-col gap-2 z-10 text-left">
                  <span className="font-mono text-xl tracking-widest text-white">{cardNumber}</span>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-[9px] uppercase tracking-widest text-white/40">click card to flip</span>
                    <div className="h-6 w-9 bg-white/15 rounded-md" />
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 w-full h-full glass rounded-2xl p-8 flex flex-col justify-between backface-hidden rotate-y-180 border border-brand-green/20 bg-brand-black/90">
                <div className="flex justify-between items-center text-left">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">CVV SECURITY</span>
                    <span className="text-[9px] text-gray-600 font-sans">rotates dynamically</span>
                  </div>
                  <span className="text-sm font-black text-brand-green bg-brand-green/10 px-3 py-1 border border-brand-green/20 rounded">928</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-gray-400 font-sans leading-relaxed">
                    this virtual credential is encrypted using secure end-to-end tokenization protocols and linked to PCI networks.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <p className="text-gray-500 text-center text-xs mt-8">
            Click the card to reveal secure CVV and tokenization regulations.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CardsVault;
