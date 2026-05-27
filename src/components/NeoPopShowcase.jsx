import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu } from 'lucide-react';

const NeoPopShowcase = () => {
  const [logMessage, setLogMessage] = useState('Interactive Console: Click any NeoPOP button...');
  const [isFlipped, setIsFlipped] = useState(false);

  const handleButtonClick = (actionName) => {
    setLogMessage(`Console -> Triggered [${actionName}] Action. NeoPOP 3D translation offset applied.`);
  };

  return (
    <section id="neopop-ui" className="relative bg-brand-black py-24 md:py-36 px-6 md:px-12 border-t border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[35vw] h-[35vw] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: UI Description */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-blue uppercase flex items-center gap-2">
            <Cpu size={14} className="text-brand-blue" />
            NeoPOP Design Language
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            modern 3D UI patterns.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            CRED uses the NeoPOP styling framework, creating modern web designs characterized by solid, thick borders, high-contrast flat shapes, and responsive 3D buttons that respond physically when pressed.
          </p>

          {/* Interactive Console Screen */}
          <div className="bg-brand-dark border-2 border-brand-accent-grey p-4 rounded font-mono text-xs text-brand-green/80 flex items-start gap-2 shadow-inner">
            <Terminal size={14} className="mt-0.5 flex-shrink-0 text-brand-green" />
            <span className="leading-relaxed">{logMessage}</span>
          </div>
        </div>

        {/* Right Column: Interaction Sandbox Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          {/* Card A: 3D Buttons Sandbox */}
          <div className="p-8 bg-brand-light-grey border border-white/5 rounded-2xl flex flex-col gap-6">
            <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles size={16} className="text-brand-gold" />
              Interactive Buttons
            </h3>
            
            <div className="flex flex-col gap-4">
              {/* White Button */}
              <button 
                onClick={() => handleButtonClick('Primary White')}
                className="neopop-press w-full py-4.5 bg-white text-black font-extrabold text-sm border-2 border-black shadow-neopop-white hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all font-heading tracking-wider text-center"
              >
                PRIMARY WHITE
              </button>

              {/* Neon Green Button */}
              <button 
                onClick={() => handleButtonClick('Secondary Green')}
                className="neopop-press w-full py-4.5 bg-brand-green text-black font-extrabold text-sm border-2 border-black shadow-neopop-green hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all font-heading tracking-wider text-center"
              >
                SECONDARY GREEN
              </button>

              {/* Cyber Pink Button */}
              <button 
                onClick={() => handleButtonClick('Accent Pink')}
                className="neopop-press w-full py-4.5 bg-brand-pink text-white font-extrabold text-sm border-2 border-black shadow-neopop-pink hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all font-heading tracking-wider text-center"
              >
                ACCENT PINK
              </button>
            </div>
          </div>

          {/* Card B: Glassmorphic Flippable Card */}
          <div className="p-8 bg-brand-light-grey border border-white/5 rounded-2xl flex flex-col justify-between items-center gap-8">
            <div className="w-full flex justify-between items-center">
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
                Hover Glass Card
              </h3>
              <span className="text-[9px] uppercase bg-white/5 px-2 py-0.5 text-gray-400 font-semibold border border-white/10 rounded">
                Hover or Click
              </span>
            </div>

            {/* Flippable card animation */}
            <div 
              className="w-full max-w-[280px] aspect-[1.586/1] cursor-pointer relative perspective-1000"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                transformTemplate={({ rotateY }) => `rotateY(${rotateY})`}
                className="w-full h-full relative transform-style-3d shadow-2xl rounded-xl"
              >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full glass rounded-xl p-5 flex flex-col justify-between backface-hidden border border-white/10">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] tracking-widest text-brand-green font-bold uppercase">NeoPOP Card</span>
                    <div className="w-6 h-6 rounded-full bg-white/10" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-sm tracking-widest text-white">4920 •••• •••• 9283</span>
                    <span className="text-[8px] uppercase tracking-wide text-gray-500 mt-1">click to flip</span>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full glass rounded-xl p-5 flex flex-col justify-between backface-hidden rotate-y-180 border border-brand-green/20 bg-brand-black/90">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">CVV SECURITY</span>
                    <span className="text-xs font-black text-brand-green bg-brand-green/10 px-2 py-0.5 border border-brand-green/20 rounded">928</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] text-gray-400 font-sans leading-relaxed">
                      this virtual credential is encrypted using secure end-to-end tokenization protocols.
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            <p className="text-gray-400 text-center text-xs">
              Flip the card to inspect backend tokenization details.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default NeoPopShowcase;
