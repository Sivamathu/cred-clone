import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Gift, Award, CheckCircle2, AlertTriangle, Key, Sparkles, Coins, ShoppingBag } from 'lucide-react';

const Rewards = ({ navigate }) => {
  const [coins, setCoins] = useState(350000);
  const [checkInDone, setCheckInDone] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [redeemedVouchers, setRedeemedVouchers] = useState([]);
  const [mysteryReward, setMysteryReward] = useState(null);
  const [mysteryState, setMysteryState] = useState('idle'); // idle, opening, opened

  const rewardsList = [
    { id: 'stay', name: 'Alila Diwa Goa Luxury Stay', cost: 150000, desc: '3 nights stay in a premium villa. breakfast & flights included.', category: 'staycation', tag: 'Luxury' },
    { id: 'kbd', name: 'Cyberpunk Mechanical Keyboard', cost: 80000, desc: 'Hot-swappable custom switches with RGB underglow customization.', category: 'electronics', tag: 'Tech Drop' },
    { id: 'phones', name: 'Premium Noise-Cancelling Headphones', cost: 120000, desc: 'Advanced hybrid ANC with 45-hour playback limit and custom EQ.', category: 'electronics', tag: 'Audio Drop' },
    { id: 'gift', name: 'Amazon Luxury Gift Card', cost: 50000, desc: '$50 flat gift voucher redeemable across premium store catalogs.', category: 'vouchers', tag: 'Voucher' }
  ];

  const mysteryBoxCost = 50000;
  const mysteryBoxRewards = [
    'Assured $250.00 Cashback directly to linked Credit Card',
    '80% Discount Voucher on Alila Luxury Stays',
    'Free entry code for next premium Electronics Drop event',
    'Premium CRED Metal Card custom engravings voucher'
  ];

  const claimDailyCoins = () => {
    if (checkInDone) return;
    setCoins(prev => prev + 15000);
    setCheckInDone(true);
  };

  const openMysteryBox = () => {
    if (coins < mysteryBoxCost) {
      alert('Insufficient CRED coins balance!');
      return;
    }
    setCoins(prev => prev - mysteryBoxCost);
    setMysteryState('opening');
    setMysteryReward(null);

    setTimeout(() => {
      const idx = Math.floor(Math.random() * mysteryBoxRewards.length);
      setMysteryReward(mysteryBoxRewards[idx]);
      setMysteryState('opened');
    }, 2000);
  };

  const handleRedeem = (item) => {
    if (coins < item.cost) {
      alert(`Insufficient CRED coins! You need ${item.cost - coins} more coins.`);
      return;
    }
    setCoins(prev => prev - item.cost);
    setRedeemedVouchers(prev => [...prev, item.name]);
    alert(`Success! Redeemed ${item.name}. Code sent to your mobile.`);
  };

  const filteredRewards = activeTab === 'all' 
    ? rewardsList 
    : rewardsList.filter(r => r.category === activeTab);

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-32 pb-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-brand-pink/5 rounded-full blur-[180px] pointer-events-none" />

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
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-gold uppercase flex items-center gap-2">
              <Gift size={14} />
              CRED REWARDS
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-none">
              spend coins. <br />
              claim privilege.
            </h1>
            <p className="text-gray-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed mt-2">
              spend accumulated CRED coins to purchase staycation drops, premium electronics catalog vouchers, or scratch cards for assured cashbacks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 p-6 bg-brand-light-grey border border-white/5 rounded-2xl flex flex-col gap-5 text-left"
          >
            <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider flex items-center gap-1">
              <Coins className="text-brand-gold" size={14} /> Your CRED Coins Balance
            </span>
            <span className="text-4xl font-heading font-black text-white">{coins.toLocaleString()}</span>
            
            <button
              onClick={claimDailyCoins}
              disabled={checkInDone}
              className={`w-full py-3 border rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                checkInDone
                  ? 'bg-brand-black text-gray-600 border-white/5 cursor-not-allowed'
                  : 'bg-white/5 text-brand-gold border-brand-gold/30 hover:bg-brand-gold/10'
              }`}
            >
              {checkInDone ? 'DAILY COINS CLAIMED (+15k)' : 'CLAIM DAILY CHECK-IN COINS'}
            </button>
          </motion.div>
        </div>

        {/* Mystery Box Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          <div className="lg:col-span-7 p-8 bg-brand-light-grey border border-white/5 shadow-neopop-card rounded-2xl flex flex-col justify-between gap-6 relative overflow-hidden">
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles size={18} className="text-brand-gold" />
                Mystery Box Chamber
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                Spend <strong>50,000 coins</strong> to unlock a mystery reward code directly.
              </p>
            </div>

            <div className="relative w-full aspect-[2/1] bg-brand-black/50 border border-white/5 rounded-xl flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {mysteryState === 'idle' && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <ShoppingBag className="text-brand-gold animate-bounce" size={48} />
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Box Sealed</span>
                  </motion.div>
                )}

                {mysteryState === 'opening' && (
                  <motion.div
                    key="opening"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="w-12 h-12 border-4 border-brand-gold/10 border-t-brand-gold rounded-full animate-spin" />
                    <span className="text-xs text-gray-400">Unwrapping seals & resolving crypt-codes...</span>
                  </motion.div>
                )}

                {mysteryState === 'opened' && (
                  <motion.div
                    key="opened"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-3 p-6 text-center"
                  >
                    <Award size={48} className="text-brand-green" />
                    <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Reward Unlocked!</span>
                    <p className="text-sm font-semibold text-white max-w-sm">{mysteryReward}</p>
                    <button
                      onClick={() => setMysteryState('idle')}
                      className="mt-2 text-[9px] text-gray-500 hover:text-white uppercase font-bold tracking-widest"
                    >
                      Unlock another box
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={openMysteryBox}
              disabled={mysteryState === 'opening' || coins < mysteryBoxCost}
              className="w-fit neopop-press px-6 py-3 bg-white text-black font-extrabold text-xs border border-black shadow-[3px_3px_0px_0px_#ffd54f] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer disabled:opacity-50"
            >
              SPEND 50K COINS & UNLOCK
            </button>
          </div>

          {/* Vouchers claimed List */}
          <div className="lg:col-span-5 p-8 bg-brand-light-grey border border-white/5 rounded-2xl flex flex-col justify-between gap-6 text-left relative overflow-hidden">
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-base font-bold text-white uppercase tracking-wider">
                Claimed Rewards
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                Codes and voucher receipts generated in your current session.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 min-h-[140px] overflow-y-auto">
              {redeemedVouchers.length === 0 && (
                <div className="flex flex-col items-center justify-center text-center text-xs text-gray-600 gap-1.5 py-6">
                  <span>No items claimed.</span>
                  <span className="text-[10px]">Spend coins in the market below to get vouchers.</span>
                </div>
              )}
              {redeemedVouchers.map((item, idx) => (
                <div key={idx} className="p-3 bg-white/5 border border-white/5 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="text-brand-green flex-shrink-0" size={14} />
                  <span className="text-[11px] font-semibold text-white truncate">{item}</span>
                </div>
              ))}
            </div>

            <span className="text-[8px] text-gray-600 leading-normal flex items-start gap-1">
              *All vouchers are sent via SMS to your registered member phone number instantly.
            </span>
          </div>
        </div>

        {/* Marketplace section */}
        <div className="flex flex-col gap-6 mt-6">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">rewards market</span>
            <div className="flex gap-2">
              {['all', 'staycation', 'electronics', 'vouchers'].map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`px-3 py-1.5 border text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === t
                      ? 'bg-brand-gold/15 text-brand-gold border-brand-gold/30'
                      : 'bg-brand-black/50 text-gray-400 border-white/5 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredRewards.map((reward) => (
              <div key={reward.id} className="p-6 bg-brand-light-grey border border-white/5 rounded-2xl flex flex-col justify-between gap-6 text-left relative overflow-hidden group">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-brand-gold font-bold uppercase tracking-wider w-fit">{reward.tag}</span>
                    <h3 className="font-heading font-black text-lg text-white mt-1 group-hover:text-brand-gold transition-colors">{reward.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-brand-gold">
                    <Coins size={14} />
                    <span className="text-xs font-bold font-mono">{(reward.cost / 1000)}k</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{reward.desc}</p>
                <button
                  onClick={() => handleRedeem(reward)}
                  className="w-full py-3 bg-white text-black font-heading font-black text-xs border border-black shadow-[3px_3px_0px_0px_#ffd54f] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer uppercase tracking-wider"
                >
                  REDEEM NOW ({reward.cost.toLocaleString()} Coins)
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Rewards;
