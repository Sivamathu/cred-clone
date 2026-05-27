import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Compass, Target, Users, Landmark, Quote } from 'lucide-react';

const About = ({ navigate }) => {
  const stats = [
    { label: 'trust score threshold', value: '750+' },
    { label: 'active premium members', value: '25M+' },
    { label: 'monthly transaction flow', value: '35%' },
  ];

  const values = [
    {
      icon: <Compass className="text-brand-blue" size={20} />,
      title: "trust as a foundation",
      desc: "we believe individuals who have proven their financial trustworthiness deserve better experiences, transparent rules, and premium rewards."
    },
    {
      icon: <Target className="text-brand-green" size={20} />,
      title: "incentivized goodness",
      desc: "good financial behaviour should be celebrated. we design ecosystems where responsible actions directly translate into compound personal benefits."
    },
    {
      icon: <Users className="text-brand-gold" size={20} />,
      title: "exclusive community",
      desc: "a network of high-trust individuals acting together. our members share financial disciplines, elevating the collective trust index."
    }
  ];

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-32 pb-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* Background gradients */}
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
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-green uppercase">
              ABOUT CRED
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-none">
              we create <br />
              trust loops.
            </h1>
            <p className="text-gray-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed mt-2">
              CRED is a members-only club that rewards individuals for being financially responsible. We operate under the core conviction that high credit scorers deserve better rules, exclusive brand associations, and frictionless transactional experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 p-8 bg-brand-light-grey border border-white/5 rounded-2xl flex flex-col gap-6"
          >
            <Quote className="text-brand-green" size={24} />
            <p className="text-gray-400 italic text-sm leading-relaxed">
              "We started CRED with a simple question: why are the most responsible citizens not rewarded for their behaviour? Our mission is to build a reliable network of premium individuals who collectively demand better privileges."
            </p>
            <span className="text-xs text-white font-bold uppercase tracking-wider">— Kunal Shah, Founder, CRED</span>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {stats.map((s, idx) => (
            <div key={idx} className="p-8 bg-brand-light-grey border border-white/5 rounded-2xl flex flex-col justify-center shadow-neopop-card">
              <span className="font-heading font-black text-4xl text-white">{s.value}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-2">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Pillars of CRED */}
        <div className="flex flex-col gap-6 mt-6">
          <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">our core values</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="p-6 bg-brand-light-grey border border-white/5 rounded-2xl flex flex-col gap-4">
                <div className="p-3 bg-white/5 rounded-lg w-fit">
                  {v.icon}
                </div>
                <h3 className="font-heading font-bold text-white text-lg uppercase tracking-wide">{v.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-start">
          <button
            onClick={() => navigate('/')}
            className="neopop-press px-8 py-3.5 bg-white text-black font-extrabold text-sm border-2 border-black shadow-neopop-white hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all font-heading tracking-wider"
          >
            EXPLORE THE CLUB
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;
