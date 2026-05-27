import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, Send, CheckCircle2, User, Search, ShieldCheck } from 'lucide-react';

const PayAnyone = ({ navigate }) => {
  const [amount, setAmount] = useState('500');
  const [recipient, setRecipient] = useState('');
  const [transferState, setTransferState] = useState('idle'); // idle, sending, success

  const contacts = [
    { name: 'Aditya Sen', phone: '98273 09281', initials: 'AS' },
    { name: 'Pooja Mehta', phone: '81023 99283', initials: 'PM' },
    { name: 'Kunal Verma', phone: '70281 92839', initials: 'KV' }
  ];

  const handleTransferSubmit = (e) => {
    e.preventDefault();
    if (!recipient) return;
    setTransferState('sending');
    setTimeout(() => {
      setTransferState('success');
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-32 pb-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[35vw] h-[35vw] bg-brand-pink/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Page Header */}
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
          back to payments
        </button>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-6">
          
          {/* Left Column: UI Descriptions */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-gold uppercase flex items-center gap-2">
              <Sparkles size={14} className="text-brand-gold animate-spin" />
              PEER TO PEER TRANSFERS
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-none">
              pay anyone. <br />
              directly.
            </h1>
            <p className="text-gray-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed mt-2">
              send money to friends, family, or any phone contact instantly. link your bank account directly on CRED and routing cash safely without intermediate steps.
            </p>
            <p className="text-gray-400 font-sans text-sm sm:text-base max-w-xl leading-relaxed">
              assured security loops protect every transfer. check out your contact ledger directly in-app, scan personal UPI QR codes, or type their phone number directly.
            </p>

            {/* Verification highlights */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-gold/10 text-brand-gold rounded-lg flex-shrink-0 mt-0.5">
                  <ShieldCheck size={18} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wide">100% verified identities</h3>
                  <p className="text-xs text-gray-400">CRED resolves contact names before debiting your account to prevent wrong payment transfers.</p>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <button
              onClick={() => navigate('/')}
              className="mt-6 w-fit neopop-press px-8 py-3.5 bg-brand-gold text-black font-extrabold text-sm border-2 border-black shadow-neopop-gold hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all font-heading tracking-wider"
            >
              EXPLORE OTHER FEATURES
            </button>
          </motion.div>

          {/* Right Column: Interactive UPI Transfer Sandbox */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 p-8 bg-brand-light-grey border border-white/5 rounded-2xl shadow-2xl relative z-10 overflow-hidden flex flex-col gap-6"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.03] pointer-events-none" />
            <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Send size={16} className="text-brand-gold" />
              Quick UPI Transfer
            </h3>

            <AnimatePresence mode="wait">
              {transferState === 'idle' && (
                <motion.form
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleTransferSubmit}
                  className="flex flex-col gap-5"
                >
                  {/* Select Mock Contact */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Select Contact</span>
                    <div className="grid grid-cols-3 gap-2">
                      {contacts.map((c) => (
                        <button
                          key={c.name}
                          type="button"
                          onClick={() => setRecipient(c.name)}
                          className={`p-3 rounded-lg border text-center transition-all ${
                            recipient === c.name
                              ? 'bg-brand-gold/10 text-brand-gold border-brand-gold'
                              : 'bg-brand-black/50 text-gray-400 border-white/5 hover:border-white/10 hover:text-white'
                          }`}
                        >
                          <div className="w-8 h-8 rounded-full bg-white/5 mx-auto flex items-center justify-center text-xs font-bold font-heading mb-1 text-white">
                            {c.initials}
                          </div>
                          <span className="text-[10px] font-semibold truncate block">{c.name.split(' ')[0]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Manual search input */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Or Enter Name/UPI ID</span>
                    <div className="relative">
                      <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        placeholder="name, phone, or upi ID"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 bg-brand-black/60 border border-white/10 rounded-lg text-sm text-white placeholder-gray-600 focus:border-brand-gold transition-colors font-sans"
                      />
                    </div>
                  </div>

                  {/* Amount input */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Amount ($)</span>
                    <input
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-black/60 border border-white/10 rounded-lg text-2xl font-heading font-black text-white placeholder-gray-600 focus:border-brand-gold transition-colors text-center"
                    />
                  </div>

                  <button
                    type="submit"
                    className="neopop-press w-full py-4.5 bg-white text-black font-extrabold text-sm border-2 border-black shadow-neopop-white hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all font-heading tracking-wider"
                  >
                    PAY VIA CRED UPI
                  </button>
                </motion.form>
              )}

              {transferState === 'sending' && (
                <motion.div
                  key="sending"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full border-4 border-brand-gold/10 border-t-brand-gold animate-spin mb-6" />
                  <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider">Connecting Bank Server</h4>
                  <p className="text-gray-500 text-xs mt-2 max-w-xs">Authorizing UPI transaction for ${amount} to {recipient}...</p>
                </motion.div>
              )}

              {transferState === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <CheckCircle2 size={56} className="text-brand-green animate-bounce mb-6" />
                  <h4 className="font-heading text-xl font-black text-white uppercase tracking-wider">Payment Successful</h4>
                  <p className="text-gray-400 text-sm mt-1">Transferred ${amount} to {recipient}</p>
                  <span className="text-[10px] text-gray-600 mt-2 font-mono uppercase">Ref ID: TXN928374102</span>

                  <button
                    onClick={() => {
                      setTransferState('idle');
                      setRecipient('');
                    }}
                    className="mt-8 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-brand-gold/20 text-white font-semibold text-xs uppercase tracking-wider transition-all"
                  >
                    Send another payment
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default PayAnyone;
