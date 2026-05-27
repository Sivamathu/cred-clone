import React from 'react';
import { motion } from 'framer-motion';
import credAppDashboard from '../assets/cred_app_dashboard.png';

const TrustSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="trust-about" className="relative min-h-screen bg-brand-black py-24 md:py-36 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-brand-green/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Trust & Exclusivity Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 flex flex-col gap-8 md:gap-12"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-brand-gold uppercase">
              exclusivity guaranteed
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
              an exclusive community of high trust individuals.
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-6 max-w-2xl">
            <p className="text-gray-300 font-sans text-base sm:text-lg md:text-xl leading-relaxed">
              CRED is a members-only club that rewards you for being financially responsible. We believe that good financial behavior should be celebrated, not taken for granted.
            </p>
            <p className="text-gray-400 font-sans text-sm sm:text-base md:text-lg leading-relaxed">
              Every member of CRED goes through a strict credit background score screening. Once admitted, you get access to direct credit card bill settlements, premium curated rewards, and transparent interest-free money options.
            </p>
          </motion.div>

          {/* NeoPOP privilege badges */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            <div className="p-6 bg-brand-light-grey border-2 border-white/5 shadow-neopop-card hover:border-brand-gold/20 transition-colors">
              <h3 className="font-heading text-lg font-bold text-white mb-2 uppercase tracking-wide">
                members only
              </h3>
              <p className="text-gray-400 text-sm">
                Access is restricted to individuals holding a credit score above 750+.
              </p>
            </div>
            <div className="p-6 bg-brand-light-grey border-2 border-white/5 shadow-neopop-card hover:border-brand-green/20 transition-colors">
              <h3 className="font-heading text-lg font-bold text-white mb-2 uppercase tracking-wide">
                zero cost loops
              </h3>
              <p className="text-gray-400 text-sm">
                No hidden charges, zero spam emails, and immediate instant cashbacks.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: High-Fidelity Phone Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 70, damping: 18 }}
          className="lg:col-span-5 flex justify-center relative mt-12 lg:mt-0"
        >
          {/* Subtle phone border glow shadow */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/10 to-brand-green/10 rounded-[48px] blur-2xl opacity-60 scale-95 pointer-events-none" />
          
          {/* The Phone Container */}
          <div className="relative w-72 sm:w-80 md:w-96 aspect-[1/2] rounded-[48px] border-4 border-gray-800 bg-black overflow-hidden shadow-2xl">
            {/* Phone notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-30" />
            
            {/* App screenshot */}
            <img
              src={credAppDashboard}
              alt="CRED App Dashboard"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TrustSection;
