import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown, CreditCard, Sparkles, Smartphone, QrCode, Car, Coins, TrendingUp, Info, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ currentPath, navigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPaymentsDropdown, setShowPaymentsDropdown] = useState(false);
  const [showUpgradesDropdown, setShowUpgradesDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'credit score', href: '/credit-score' },
    { name: 'rewards', href: '/rewards' },
    { name: 'security', href: '/security' },
    { name: 'cards vault', href: '#cards-vault' },
  ];

  const paymentOptions = [
    { name: 'tap to pay', desc: 'contactless payments with credit card', href: '/tap', icon: <Smartphone className="text-brand-blue" size={18} /> },
    { name: 'pay anyone', desc: 'send money to any bank account or contact', href: '/pay-via-upi', icon: <Sparkles className="text-brand-gold" size={18} /> },
    { name: 'rupay card on upi', desc: 'use credit limit via upi scan', href: '/upi-on-credit', icon: <CreditCard className="text-brand-pink" size={18} /> },
    { name: 'scan & pay', desc: 'scan any QR online or offline', href: '/cred-pay', icon: <QrCode className="text-brand-green" size={18} /> },
  ];

  const upgradesOptions = [
    { name: 'CRED garage', desc: 'manage vehicles, FASTag recharges, & challans', href: '/garage', icon: <Car className="text-brand-green" size={18} /> },
    { name: 'CRED mint', desc: 'lend to high-trust members and earn 9% p.a.', href: '/mint', icon: <Coins className="text-brand-gold" size={18} /> },
    { name: 'CRED money', desc: 'consolidate all bank account balances & analytics', href: '/money', icon: <TrendingUp className="text-brand-blue" size={18} /> },
  ];

  const companyOptions = [
    { name: 'about CRED', desc: 'discover our mission, team, and story', href: '/about', icon: <Info className="text-brand-blue" size={18} /> },
    { name: 'careers', desc: 'join our premium team and build the future', href: '/careers', icon: <Briefcase className="text-brand-green" size={18} /> },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      if (currentPath !== '/') {
        navigate('/');
        // Wait for page transition to home, then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
  };

  // Close dropdowns on click outside
  useEffect(() => {
    const closeDropdowns = () => {
      setShowPaymentsDropdown(false);
      setShowUpgradesDropdown(false);
      setShowCompanyDropdown(false);
    };
    document.addEventListener('click', closeDropdowns);
    return () => document.removeEventListener('click', closeDropdowns);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <div 
          onClick={(e) => handleLinkClick(e, '/')} 
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <span className="font-heading font-black text-2xl tracking-widest text-white">
            CRED<span className="text-brand-green">.</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 z-50">
          
          {/* Payments Dropdown */}
          <div 
            className="relative"
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setShowPaymentsDropdown(true)}
            onMouseLeave={() => setShowPaymentsDropdown(false)}
          >
            <button 
              onClick={() => {
                setShowPaymentsDropdown(!showPaymentsDropdown);
                setShowUpgradesDropdown(false);
                setShowCompanyDropdown(false);
              }}
              className="flex items-center gap-1 font-medium text-sm text-gray-400 hover:text-white transition-colors duration-200 tracking-wide font-sans capitalize cursor-pointer select-none"
            >
              payments
              <ChevronDown size={14} className={`transition-transform duration-300 ${showPaymentsDropdown ? 'rotate-180 text-brand-green' : ''}`} />
            </button>

            {/* Dropdown Card */}
            <AnimatePresence>
              {showPaymentsDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-3 w-80 bg-black rounded-xl p-4 shadow-2xl border border-white/10 flex flex-col gap-2 z-50"
                >
                  <div className="absolute top-0 left-10 -translate-y-1 w-3 h-3 bg-[#0a0a0a] border-t border-l border-white/10 rotate-45 pointer-events-none" />
                  <span className="text-[10px] font-bold tracking-widest text-brand-green uppercase mb-1 px-2">payments options</span>
                  {paymentOptions.map((opt) => (
                    <a
                      key={opt.name}
                      href={opt.href}
                      onClick={(e) => {
                        setShowPaymentsDropdown(false);
                        handleLinkClick(e, opt.href);
                      }}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-all group"
                    >
                      <div className="p-2 bg-white/5 group-hover:bg-white/10 rounded-md transition-colors flex-shrink-0">
                        {opt.icon}
                      </div>
                      <div className="flex flex-col gap-0.5 text-left">
                        <span className="text-sm font-semibold text-white group-hover:text-brand-green capitalize transition-colors">
                          {opt.name}
                        </span>
                        <span className="text-[10px] text-gray-500 font-sans leading-normal">
                          {opt.desc}
                        </span>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Upgrades Dropdown */}
          <div 
            className="relative"
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setShowUpgradesDropdown(true)}
            onMouseLeave={() => setShowUpgradesDropdown(false)}
          >
            <button 
              onClick={() => {
                setShowUpgradesDropdown(!showUpgradesDropdown);
                setShowPaymentsDropdown(false);
                setShowCompanyDropdown(false);
              }}
              className="flex items-center gap-1 font-medium text-sm text-gray-400 hover:text-white transition-colors duration-200 tracking-wide font-sans capitalize cursor-pointer select-none"
            >
              upgrades
              <ChevronDown size={14} className={`transition-transform duration-300 ${showUpgradesDropdown ? 'rotate-180 text-brand-green' : ''}`} />
            </button>

            {/* Dropdown Card */}
            <AnimatePresence>
              {showUpgradesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-3 w-80 bg-black dropdown-text rounded-xl p-4 shadow-2xl border border-white/10 flex flex-col gap-2 z-50"
                >
                  <div className="absolute top-0 left-10 -translate-y-1 w-3 h-3 bg-[#0a0a0a] border-t border-l border-white/10 rotate-45 pointer-events-none" />
                  <span className="text-[10px] font-bold tracking-widest text-brand-green uppercase mb-1 px-2">members services</span>
                  {upgradesOptions.map((opt) => (
                    <a
                      key={opt.name}
                      href={opt.href}
                      onClick={(e) => {
                        setShowUpgradesDropdown(false);
                        handleLinkClick(e, opt.href);
                      }}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-all group"
                    >
                      <div className="p-2 bg-white/5 group-hover:bg-white/10 rounded-md transition-colors flex-shrink-0">
                        {opt.icon}
                      </div>
                      <div className="flex flex-col gap-0.5 text-left">
                        <span className="text-sm font-semibold text-white group-hover:text-brand-green capitalize transition-colors">
                          {opt.name.replace('CRED ', '')}
                        </span>
                        <span className="text-[10px] text-gray-500 font-sans leading-normal">
                          {opt.desc}
                        </span>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Company Dropdown */}
          <div 
            className="relative"
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setShowCompanyDropdown(true)}
            onMouseLeave={() => setShowCompanyDropdown(false)}
          >
            <button 
              onClick={() => {
                setShowCompanyDropdown(!showCompanyDropdown);
                setShowPaymentsDropdown(false);
                setShowUpgradesDropdown(false);
              }}
              className="flex items-center gap-1 font-medium text-sm text-gray-400 hover:text-white transition-colors duration-200 tracking-wide font-sans capitalize cursor-pointer select-none"
            >
              company
              <ChevronDown size={14} className={`transition-transform duration-300 ${showCompanyDropdown ? 'rotate-180 text-brand-green' : ''}`} />
            </button>

            {/* Dropdown Card */}
            <AnimatePresence>
              {showCompanyDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-3 w-80 bg-black rounded-xl p-4 shadow-2xl border border-white/10 flex flex-col gap-2 z-50"
                >
                  <div className="absolute top-0 left-10 -translate-y-1 w-3 h-3 bg-[#0a0a0a] border-t border-l border-white/10 rotate-45 pointer-events-none" />
                  <span className="text-[10px] font-bold tracking-widest text-brand-green uppercase mb-1 px-2">company overview</span>
                  {companyOptions.map((opt) => (
                    <a
                      key={opt.name}
                      href={opt.href}
                      onClick={(e) => {
                        setShowCompanyDropdown(false);
                        handleLinkClick(e, opt.href);
                      }}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-all group"
                    >
                      <div className="p-2 bg-white/5 group-hover:bg-white/10 rounded-md transition-colors flex-shrink-0">
                        {opt.icon}
                      </div>
                      <div className="flex flex-col gap-0.5 text-left">
                        <span className="text-sm font-semibold text-white group-hover:text-brand-green capitalize transition-colors">
                          {opt.name}
                        </span>
                        <span className="text-[10px] text-gray-500 font-sans leading-normal">
                          {opt.desc}
                        </span>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-medium text-sm text-gray-400 hover:text-white transition-colors duration-200 tracking-wide font-sans capitalize"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://play.google.com/store/apps/details?id=com.dreamplug.androidapp&hl=en_IN">
          <button className="neopop-press px-6 py-2.5 bg-white text-black font-semibold text-sm border-2 border-black shadow-neopop-white hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all font-heading">
            Download App
          </button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-brand-green p-1 transition-colors z-50 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-black/98 backdrop-blur-lg pt-24 px-8 md:hidden flex flex-col justify-between pb-10 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {/* Payment subpages list */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold tracking-widest text-brand-green uppercase text-left">payments options</span>
                <div className="grid grid-cols-2 gap-2">
                  {paymentOptions.map((opt) => (
                    <a
                      key={opt.name}
                      href={opt.href}
                      onClick={(e) => {
                        setIsOpen(false);
                        handleLinkClick(e, opt.href);
                      }}
                      className="flex items-center gap-2 p-2.5 bg-white/5 rounded-xl border border-white/5 text-left"
                    >
                      <div className="p-1.5 bg-white/5 rounded text-brand-green">
                        {opt.icon}
                      </div>
                      <span className="font-heading text-xs font-semibold text-white capitalize truncate">{opt.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Upgrades subpages list */}
              <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                <span className="text-[10px] font-bold tracking-widest text-brand-green uppercase text-left">upgrades</span>
                <div className="grid grid-cols-2 gap-2">
                  {upgradesOptions.map((opt) => (
                    <a
                      key={opt.name}
                      href={opt.href}
                      onClick={(e) => {
                        setIsOpen(false);
                        handleLinkClick(e, opt.href);
                      }}
                      className="flex items-center gap-2 p-2.5 bg-white/5 rounded-xl border border-white/5 text-left"
                    >
                      <div className="p-1.5 bg-white/5 rounded text-brand-green">
                        {opt.icon}
                      </div>
                      <span className="font-heading text-xs font-semibold text-white capitalize truncate">{opt.name.replace('CRED ', '')}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Company subpages list */}
              <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                <span className="text-[10px] font-bold tracking-widest text-brand-green uppercase text-left">company</span>
                <div className="grid grid-cols-2 gap-2">
                  {companyOptions.map((opt) => (
                    <a
                      key={opt.name}
                      href={opt.href}
                      onClick={(e) => {
                        setIsOpen(false);
                        handleLinkClick(e, opt.href);
                      }}
                      className="flex items-center gap-2 p-2.5 bg-white/5 rounded-xl border border-white/5 text-left cursor-pointer"
                    >
                      <div className="p-1.5 bg-white/5 rounded text-brand-green">
                        {opt.icon}
                      </div>
                      <span className="font-heading text-xs font-semibold text-white capitalize truncate">{opt.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* General menu items */}
              <nav className="flex flex-col gap-3 border-t border-white/5 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      setIsOpen(false);
                      handleLinkClick(e, link.href);
                    }}
                    className="font-heading text-lg font-bold text-gray-300 hover:text-brand-green transition-colors py-1 flex items-center justify-between capitalize"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="text-gray-500" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <button className="w-full neopop-press px-6 py-4 bg-brand-green text-black font-bold text-center border-2 border-black shadow-neopop-black hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all font-heading">
                Download CRED App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
