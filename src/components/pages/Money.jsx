import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, ShieldCheck, CheckCircle2, ChevronRight, Activity, Wallet, PieChart, Sparkles } from 'lucide-react';

const Money = ({ navigate }) => {
  const [activeAccount, setActiveAccount] = useState('all');

  const bankAccounts = [
    { id: 'hdfc', name: 'HDFC Savings Account', balance: 14250, acNo: '•••• 9839', logo: '🏦', color: 'from-blue-900/50 to-indigo-950/50' },
    { id: 'icici', name: 'ICICI Current Account', balance: 28400, acNo: '•••• 4022', logo: '🏛️', color: 'from-orange-900/50 to-stone-950/50' },
    { id: 'sbi', name: 'SBI Salary Account', balance: 3950, acNo: '•••• 9102', logo: '🏢', color: 'from-cyan-900/50 to-slate-950/50' }
  ];

  const transactions = [
    { date: 'Today', category: 'Food & Dining', desc: 'Cafe Coffee Day', amount: 15.00, account: 'hdfc', type: 'debit' },
    { date: 'Yesterday', category: 'Utilities', desc: 'Electricity Bill', amount: 120.00, account: 'icici', type: 'debit' },
    { date: '25 May', category: 'Investment', desc: 'CRED Mint Interest', amount: 75.00, account: 'hdfc', type: 'credit' },
    { date: '24 May', category: 'Automobile', desc: 'FASTag Auto Recharge', amount: 50.00, account: 'sbi', type: 'debit' }
  ];

  const totalBalance = bankAccounts.reduce((acc, curr) => acc + curr.balance, 0);

  const filteredTransactions = activeAccount === 'all' 
    ? transactions 
    : transactions.filter(t => t.account === activeAccount);

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-32 pb-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-brand-green/5 rounded-full blur-[180px] pointer-events-none" />

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
          back to upgrades
        </button>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
          {/* Left Column: UI Descriptions */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-blue uppercase flex items-center gap-2">
              <Wallet size={14} className="text-brand-blue" />
              CRED MONEY
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-none">
              know where <br />
              your money is.
            </h1>
            <p className="text-gray-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed mt-2">
              consolidate all your bank account balances in one place. CRED Money analyzes transaction logs, tracks hidden charges, flags double-billing, and offers category spending insights.
            </p>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
              linking is securely established via standard Account Aggregator guidelines. CRED never stores your login passwords or intercepts transactions.
            </p>

            {/* Dashboard Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="p-5 bg-brand-light-grey border border-white/5 rounded-xl flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Total Linked Assets</span>
                <span className="text-2xl font-heading font-black text-white">${totalBalance.toLocaleString()}</span>
                <span className="text-[9px] text-brand-green mt-1">Across {bankAccounts.length} savings accounts</span>
              </div>
              <div className="p-5 bg-brand-light-grey border border-white/5 rounded-xl flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Monthly Spend Index</span>
                <span className="text-2xl font-heading font-black text-brand-pink">$2,410.00</span>
                <span className="text-[9px] text-gray-500 mt-1">Average -12% decrease from last cycle</span>
              </div>
            </div>

            {/* Back Button */}
            <button
              onClick={() => navigate('/')}
              className="mt-6 w-fit neopop-press px-8 py-3.5 bg-brand-blue text-black font-extrabold text-sm border-2 border-black shadow-neopop-blue hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all font-heading tracking-wider"
            >
              EXPLORE OTHER FEATURES
            </button>
          </motion.div>

          {/* Right Column: Bank Accounts & Transaction Board */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 p-8 bg-brand-light-grey border border-white/5 rounded-2xl shadow-2xl relative z-10 overflow-hidden flex flex-col gap-6"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.03] pointer-events-none" />
            <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <PieChart size={18} className="text-brand-blue" />
              Linked Bank Accounts
            </h3>

            {/* Account List cards */}
            <div className="flex flex-col gap-3">
              {bankAccounts.map((acc) => (
                <button
                  key={acc.id}
                  onClick={() => setActiveAccount(activeAccount === acc.id ? 'all' : acc.id)}
                  className={`p-4 bg-gradient-to-r ${acc.color} border text-left rounded-xl transition-all flex justify-between items-center cursor-pointer ${
                    activeAccount === acc.id
                      ? 'border-brand-blue shadow-[0_0_10px_rgba(0,229,255,0.15)]'
                      : 'border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{acc.logo}</span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">{acc.name}</span>
                      <span className="text-[10px] text-gray-500 font-mono">{acc.acNo}</span>
                    </div>
                  </div>
                  <span className="font-heading font-black text-sm text-white">${acc.balance.toLocaleString()}</span>
                </button>
              ))}
            </div>

            {/* Filter control indicator */}
            <div className="flex justify-between items-center border-t border-white/5 pt-4">
              <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">
                Recent Transactions {activeAccount !== 'all' && `(${activeAccount.toUpperCase()})`}
              </span>
              {activeAccount !== 'all' && (
                <button 
                  onClick={() => setActiveAccount('all')}
                  className="text-[9px] font-bold text-brand-blue hover:text-white uppercase tracking-wider transition-colors"
                >
                  Show all
                </button>
              )}
            </div>

            {/* Transactions Log List */}
            <div className="flex flex-col gap-2.5">
              {filteredTransactions.map((tx, idx) => (
                <div 
                  key={idx}
                  className="glass p-3 rounded-lg border border-white/5 flex justify-between items-center text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-heading ${
                      tx.type === 'credit' ? 'bg-brand-green/10 text-brand-green' : 'bg-white/5 text-white'
                    }`}>
                      {tx.desc[0]}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">{tx.desc}</span>
                      <span className="text-[9px] text-gray-500 capitalize">{tx.date} • {tx.category}</span>
                    </div>
                  </div>
                  <span className={`text-xs font-black ${
                    tx.type === 'credit' ? 'text-brand-green' : 'text-gray-400'
                  }`}>
                    {tx.type === 'credit' ? '+' : '-'}${tx.amount.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <span className="text-[9px] text-gray-600 font-sans leading-normal flex items-start gap-1">
              <ShieldCheck size={10} className="mt-0.5 flex-shrink-0 text-brand-blue" />
              Balances update in real-time. Connected securely via central Account Aggregator regulatory networks.
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Money;
