import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Award, Activity, Smartphone, Gift, Coins, CheckCircle2, Sparkles, QrCode, ArrowRight } from 'lucide-react';
import credRewardsTreasure from '../assets/cred_rewards_treasure.png';

const FeaturesSection = ({ navigate }) => {
  const [selectedCard, setSelectedCard] = useState('black');
  const [scratched, setScratched] = useState(false);
  const [creditScore, setCreditScore] = useState(790);

  const creditCards = {
    black: { name: 'CRED Black metal', number: '•••• •••• •••• 8839', color: 'from-zinc-800 to-zinc-950', border: 'border-white/10' },
    neon: { name: 'CRED Pulse active', number: '•••• •••• •••• 4022', color: 'from-emerald-900 to-teal-950', border: 'border-brand-green/20' },
    gold: { name: 'CRED Sovereign gold', number: '•••• •••• •••• 9102', color: 'from-amber-900 via-amber-950 to-orange-950', border: 'border-brand-gold/20' }
  };

  const paymentMethods = [
    { name: 'tap to pay', href: '/tap', icon: <Smartphone className="text-brand-blue" size={18} /> },
    { name: 'pay anyone', href: '/pay-via-upi', icon: <Sparkles className="text-brand-gold" size={18} /> },
    { name: 'rupay card on upi', href: '/upi-on-credit', icon: <CreditCard className="text-brand-pink" size={18} /> },
    { name: 'scan & pay', href: '/cred-pay', icon: <QrCode className="text-brand-green" size={18} /> }
  ];

  const handleMethodClick = (e, href) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <section id="features" className="relative bg-brand-black py-24 md:py-36 px-6 md:px-12 overflow-hidden border-t border-white/5">
      {/* Accent Background Glows */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-brand-pink/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[35vw] h-[35vw] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-green uppercase">
            one-stop app
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
            products engineered for <br />
            your luxury lifestyle.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            pay bills, monitor credit reports, pay merchants directly via UPI, and win cashback along the way.
          </p>
        </div>

        {/* Features Core Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: Credit Card Bill Payments (lg:col-span-7) */}
          <div className="lg:col-span-7 p-8 bg-brand-light-grey border border-white/5 shadow-neopop-card rounded-2xl flex flex-col justify-between gap-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] pointer-events-none" />
            <div className="flex justify-between items-start z-10">
              <div className="flex flex-col gap-2">
                <div className="p-3 bg-white/5 rounded-lg w-fit text-brand-green">
                  <CreditCard size={24} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mt-4">
                  credit card bill payments
                </h3>
                <p className="text-gray-400 text-sm max-w-sm mt-1">
                  clear bills from any bank instantly. get reminders, automated bills tracking, and zero interest traps.
                </p>
              </div>
            </div>

            {/* Interactive Card Selector Mockup */}
            <div className="flex flex-col md:flex-row gap-6 items-center z-10">
              <div className="flex md:flex-col gap-2 w-full md:w-1/3">
                {Object.keys(creditCards).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCard(key)}
                    className={`px-4 py-2 border text-left text-xs font-semibold capitalize transition-all duration-300 ${
                      selectedCard === key
                        ? 'bg-white text-black border-white shadow-[2px_2px_0px_0px_#00e676]'
                        : 'bg-brand-black text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    {key} card
                  </button>
                ))}
              </div>

              {/* Dynamic Credit Card Display */}
              <motion.div
                key={selectedCard}
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.4 }}
                className={`w-full md:w-2/3 aspect-[1.586/1] bg-gradient-to-r ${creditCards[selectedCard].color} rounded-xl p-6 border ${creditCards[selectedCard].border} flex flex-col justify-between shadow-2xl relative`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-widest text-gray-400 uppercase font-medium">CRED Upgrades Premium</span>
                    <span className="text-sm font-bold text-white mt-0.5">{creditCards[selectedCard].name}</span>
                  </div>
                  <span className="text-lg font-black italic text-white/50">PLATINUM</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-base tracking-widest text-white/80">{creditCards[selectedCard].number}</span>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-[9px] uppercase tracking-wider text-gray-500">authorized signature</span>
                    <div className="h-6 w-8 bg-white/10 rounded-md" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Card 2: Rewards Store (lg:col-span-5) */}
          <div className="lg:col-span-5 p-8 bg-brand-light-grey border border-white/5 shadow-neopop-card rounded-2xl flex flex-col justify-between gap-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-36 h-36 bg-brand-green/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            <div className="flex flex-col gap-2 z-10">
              <div className="p-3 bg-white/5 rounded-lg w-fit text-brand-gold">
                <Award size={24} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mt-4">
                exclusive rewards
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                spend CRED coins to claim rewards, luxury staycations, electronic drops, and premium products.
              </p>
            </div>

            {/* Generated Rewards Image Overlay */}
            <div className="relative w-full flex justify-center py-4 z-10">
              <motion.img
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                src={credRewardsTreasure}
                alt="CRED Rewards"
                className="h-44 object-contain filter drop-shadow-[0_15px_30px_rgba(212,175,55,0.2)] select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Card 3: Credit Score Tracker (lg:col-span-4) */}
          <div id="credit-score" className="lg:col-span-4 p-8 bg-brand-light-grey border border-white/5 shadow-neopop-card rounded-2xl flex flex-col justify-between gap-6 relative overflow-hidden">
            <div className="flex flex-col gap-2">
              <div className="p-3 bg-white/5 rounded-lg w-fit text-brand-blue">
                <Activity size={24} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mt-4">
                credit score tracking
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                check and track your Experian and CRIF credit scores instantly. get alert reports for any modifications.
              </p>
            </div>

            {/* Interactive Credit Score Circle Dial */}
            <div className="flex flex-col items-center justify-center py-4">
              <div className="relative flex items-center justify-center w-36 h-36">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="72"
                    cy="72"
                    r="60"
                    stroke="#1a1a1a"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="72"
                    cy="72"
                    r="60"
                    stroke="#00e5ff"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 60}
                    initial={{ strokeDashoffset: 2 * Math.PI * 60 }}
                    whileInView={{ strokeDashoffset: (2 * Math.PI * 60) * (1 - (creditScore - 300) / 600) }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-heading font-black text-white">{creditScore}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-blue">excellent</span>
                </div>
              </div>

              {/* Interaction buttons */}
              <div className="flex gap-4 mt-6">
                <button 
                  onClick={() => setCreditScore(Math.min(900, creditScore + 10))}
                  className="px-2.5 py-1 bg-white/5 border border-white/10 hover:border-brand-blue/30 text-white font-semibold text-[10px] uppercase tracking-wide transition-all"
                >
                  Improve score
                </button>
                <button 
                  onClick={() => setCreditScore(790)}
                  className="px-2.5 py-1 bg-white/5 border border-white/10 hover:border-brand-blue/30 text-white font-semibold text-[10px] uppercase tracking-wide transition-all"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: UPI & CRED Coins / Interactive Payments (lg:col-span-4) */}
          <div id="payments" className="lg:col-span-4 p-8 bg-brand-light-grey border border-white/5 shadow-neopop-card rounded-2xl flex flex-col justify-between gap-6 relative overflow-hidden">
            <div className="flex flex-col gap-2">
              <div className="p-3 bg-white/5 rounded-lg w-fit text-brand-pink">
                <Coins size={24} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mt-4">
                UPI & Payment Options
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                link credit cards, scan QR codes, tap for instore payments, and pay anyone instantly.
              </p>
            </div>

            {/* Clickable Payment Methods Selector */}
            <div className="flex flex-col gap-2.5 py-2">
              {paymentMethods.map((method) => (
                <a
                  key={method.name}
                  href={method.href}
                  onClick={(e) => handleMethodClick(e, method.href)}
                  className="flex items-center justify-between p-3 glass hover:bg-white/5 border border-white/5 rounded-xl transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 group-hover:bg-white/10 rounded-md transition-colors">
                      {method.icon}
                    </div>
                    <span className="text-xs font-semibold text-white capitalize group-hover:text-brand-green transition-colors">
                      {method.name}
                    </span>
                  </div>
                  <ArrowRight size={14} className="text-gray-500 group-hover:text-brand-green group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Card 5: Cashback Scratch Interaction (lg:col-span-4) */}
          <div className="lg:col-span-4 p-8 bg-brand-light-grey border border-white/5 shadow-neopop-card rounded-2xl flex flex-col justify-between gap-6 relative overflow-hidden">
            <div className="flex flex-col gap-2">
              <div className="p-3 bg-white/5 rounded-lg w-fit text-brand-green">
                <Gift size={24} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mt-4">
                assured cashback
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                win guaranteed cashback directly to your bank account with every card bill payment.
              </p>
            </div>

            {/* Interactive Scratch-to-Win Cashback */}
            <div className="relative w-full aspect-[1.8/1] flex items-center justify-center mt-2">
              <div className="absolute inset-0 bg-brand-black border border-white/5 flex flex-col items-center justify-center rounded-xl p-4 text-center">
                <CheckCircle2 size={32} className="text-brand-green animate-pulse mb-2" />
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">cashback unlocked!</span>
                <span className="text-3xl font-heading font-black text-white mt-1">$250.00</span>
                <span className="text-[9px] text-brand-green mt-1">Credited directly to Card ending in 8839</span>
              </div>

              {/* Scratch Mask Overlay */}
              {!scratched && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setScratched(true)}
                  className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-dark to-brand-blue p-4 flex flex-col items-center justify-center rounded-xl cursor-pointer border border-white/20 shadow-2xl text-center select-none"
                >
                  <span className="text-sm font-heading font-extrabold text-black uppercase tracking-wider bg-white/90 px-3 py-1 rounded shadow-md">
                    Claim Cashback
                  </span>
                  <span className="text-[10px] text-white font-medium mt-2 tracking-wide">
                    Click card to scratch & reveal
                  </span>
                </motion.div>
              )}
            </div>

            {scratched && (
              <button 
                onClick={() => setScratched(false)}
                className="w-full py-1 text-gray-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest text-center"
              >
                Reset offer
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
