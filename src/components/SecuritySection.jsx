import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, EyeOff, Lock, AlertTriangle } from 'lucide-react';
import credSecurityShield from '../assets/cred_security_shield.png';

const SecuritySection = () => {
  const securityItems = [
    {
      icon: <Lock className="text-brand-green" size={24} />,
      title: "PCI-DSS compliance",
      desc: "industry standard encryption protocols ensuring your card numbers are fully tokenized and never exposed directly."
    },
    {
      icon: <EyeOff className="text-brand-blue" size={24} />,
      title: "zero spam policy",
      desc: "we do not share your phone number or transactional emails with marketing agencies. your inbox remains pristine."
    },
    {
      icon: <AlertTriangle className="text-brand-pink" size={24} />,
      title: "smart fraud detection",
      desc: "automated tracking flag anomalies, unauthorized transactions, double charges, and hidden card charges immediately."
    }
  ];

  return (
    <section id="security" className="relative bg-brand-black py-24 md:py-36 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Glow effect behind security shield */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-brand-green/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Security Scanner Visual */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-12">
          {/* Radar scan lines */}
          <div className="absolute w-72 sm:w-80 md:w-96 aspect-square border border-brand-green/10 rounded-full flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeOut" }}
              className="absolute w-full h-full border border-brand-green/20 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeOut", delay: 2 }}
              className="absolute w-full h-full border border-brand-green/10 rounded-full"
            />
          </div>

          {/* Secure Shield Graphic */}
          <motion.img
            animate={{ 
              y: [0, -8, 0],
              filter: ["drop-shadow(0 10px 20px rgba(0,230,118,0.25))", "drop-shadow(0 15px 35px rgba(0,230,118,0.4))", "drop-shadow(0 10px 20px rgba(0,230,118,0.25))"]
            }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            src={credSecurityShield}
            alt="CRED Security Shield"
            className="w-56 sm:w-64 md:w-72 object-contain relative z-10 select-none pointer-events-none"
          />
        </div>

        {/* Right Column: Copy & Feature Grid */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-green uppercase flex items-center gap-2">
              <ShieldCheck size={14} />
              impenetrable infrastructure
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1]">
              security first. <br />
              and second. <br />
              and always.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-2 leading-relaxed">
              we protect your private financial records with strict access controls, dual tokenized verification, and real-time monitoring engines.
            </p>
          </div>

          {/* Info cards list */}
          <div className="flex flex-col gap-6 max-w-2xl">
            {securityItems.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={item.title}
                className="p-6 bg-brand-light-grey border border-white/5 shadow-neopop-card rounded-xl flex gap-6 hover:border-brand-green/20 transition-all duration-300 group"
              >
                <div className="p-3 bg-white/5 rounded-lg h-fit flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading font-bold text-white text-lg uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SecuritySection;
