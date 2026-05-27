import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import credBlackCard from '../assets/cred_black_card.png';
import { ArrowDown } from 'lucide-react';


const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Transform coordinates for gentle background and card parallax
  const cardY = useTransform(scrollY, [0, 800], [0, 150]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textScale = useTransform(scrollY, [0, 400], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normal coordinates between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-radial from-brand-grey via-brand-black to-brand-black pt-24 px-6 md:px-12 overflow-hidden select-none">
      {/* Background Neon Glows */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-brand-green/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-brand-blue/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Main Container */}
      <motion.div 
        style={{ opacity: textOpacity, scale: textScale }}
        className="z-10 text-center max-w-5xl flex flex-col items-center gap-6 md:gap-8 mt-12 md:mt-0"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-green uppercase"
        >
          Exclusive Club for High Credit Scorers
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-black text-4xl sm:text-6xl md:text-8xl tracking-tight text-white leading-[1.05]"
        >
          Rewards for paying <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600">
            bills on time.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 font-sans text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
        >
          join 25M+ members who save money, earn cashbacks, and unlock premium rewards with every transaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 flex flex-col sm:flex-row gap-4 items-center"
        >
          <a href="/rewards">
          <button className="neopop-press-lg px-8 py-4 bg-white text-black font-bold text-base border-2 border-black shadow-neopop-white-lg hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all font-heading tracking-wide">
            Claim Rewards Now
          </button>
          </a>
        </motion.div>
      </motion.div>

      {/* Floating 3D Card Section */}
      <motion.div
        style={{ y: cardY }}
        className="relative z-25 mt-16 md:mt-24 w-72 sm:w-96 md:w-[480px] aspect-[1.586/1]"
      >
        <motion.div
          style={{
            rotateX: mousePosition.y * -15,
            rotateY: mousePosition.x * 15,
            transformStyle: "preserve-3d",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="w-full h-full relative cursor-pointer"
        >
          {/* Main Card Graphic */}
          <img
            src={credBlackCard}
            alt="CRED Black Card"
            className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,230,118,0.25)] select-none pointer-events-none"
          />

          {/* Reflections/Glow Overlays */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/0 via-white/5 to-brand-blue/0 rounded-[20px] pointer-events-none mix-blend-overlay" />
        </motion.div>
      </motion.div>

      {/* Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-1.5 text-gray-500 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll to Explore</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
