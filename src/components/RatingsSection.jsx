import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Smartphone, ShieldCheck, TrendingUp } from 'lucide-react';

// Animated CountUp Sub-component
const CountUp = ({ value, duration = 1.5, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseFloat(value);
    if (isNaN(end)) return;

    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    const stepValue = end / totalSteps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= totalSteps) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(currentStep * stepValue));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const RatingsSection = () => {
  return (
    <section className="relative bg-brand-black py-24 md:py-36 px-6 md:px-12 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-brand-green/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto flex flex-col gap-20">
        
        {/* Core Store Ratings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* App Store column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 md:pr-12 md:border-r border-white/5"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-heading font-black text-6xl sm:text-7xl text-white">4.8</span>
              <div className="flex flex-col">
                <div className="flex text-brand-gold gap-0.5">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">App Store Rating</span>
              </div>
            </div>
            
            <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide">
              "perfect app for payment consolidation."
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              "with CRED, keeping track of credit cycles has never been easier. I have linked all three cards and clear bills in one go. The coin-store redemption rewards are a massive bonus."
            </p>
            <span className="text-xs text-brand-green font-semibold tracking-wide">— Sarah K., Member since 2021</span>
          </motion.div>

          {/* Google Play store column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-heading font-black text-6xl sm:text-7xl text-white">4.7</span>
              <div className="flex flex-col">
                <div className="flex text-brand-green gap-0.5">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Play Store Rating</span>
              </div>
            </div>

            <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide">
              "extremely fast settlement cycles."
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              "instant credit updates. My previous bank payments used to hang in limbo for two business days, but CRED clears the transaction instantaneously. Recommended for all heavy card spenders."
            </p>
            <span className="text-xs text-brand-green font-semibold tracking-wide">— David M., Member since 2023</span>
          </motion.div>

        </div>

        {/* Big Statistics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6">
          
          <div className="p-8 bg-brand-light-grey border border-white/5 rounded-2xl flex items-center gap-6 shadow-neopop-card">
            <div className="p-4 bg-brand-green/10 text-brand-green rounded-xl">
              <Smartphone size={32} />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-3xl md:text-4xl text-white">
                <CountUp value="25" suffix="M+" />
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">active credit members</span>
            </div>
          </div>

          <div className="p-8 bg-brand-light-grey border border-white/5 rounded-2xl flex items-center gap-6 shadow-neopop-card">
            <div className="p-4 bg-brand-gold/10 text-brand-gold rounded-xl">
              <TrendingUp size={32} />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-3xl md:text-4xl text-white">
                $<CountUp value="15" suffix="B+" />
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">credit bills cleared</span>
            </div>
          </div>

          <div className="p-8 bg-brand-light-grey border border-white/5 rounded-2xl flex items-center gap-6 shadow-neopop-card">
            <div className="p-4 bg-brand-blue/10 text-brand-blue rounded-xl">
              <ShieldCheck size={32} />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-3xl md:text-4xl text-white">
                <CountUp value="99.9" suffix="%" />
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">instant refund SLA</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RatingsSection;
