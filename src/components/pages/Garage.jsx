import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Car, ShieldCheck, CreditCard, Search, CheckCircle2, AlertTriangle, Compass } from 'lucide-react';

const Garage = ({ navigate }) => {
  const [vehicleNo, setVehicleNo] = useState('DL 03 CA 8839');
  const [fastagAmount, setFastagAmount] = useState('1000');
  const [fastagState, setFastagState] = useState('idle'); // idle, recharging, success
  const [challanState, setChallanState] = useState('idle'); // idle, checking, success

  const vehicles = [
    { model: 'BMW M3 Competition', no: 'DL 03 CA 8839', status: 'Active', fastag: '$450.00', color: 'from-blue-900 to-indigo-950' },
    { model: 'Porsche 911 GT3', no: 'MH 12 TS 4022', status: 'Active', fastag: '$1,200.00', color: 'from-red-950 to-zinc-900' }
  ];

  const [activeVehicle, setActiveVehicle] = useState(vehicles[0]);

  const handleFastagRecharge = (e) => {
    e.preventDefault();
    setFastagState('recharging');
    setTimeout(() => {
      setFastagState('success');
    }, 2000);
  };

  const handleChallanSearch = (e) => {
    e.preventDefault();
    setChallanState('checking');
    setTimeout(() => {
      setChallanState('success');
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-32 pb-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* Background Glows */}
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
          back to upgrades
        </button>

        {/* Top Grid: Title and Vehicle cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
          {/* Left Column: Description & Car list */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-green uppercase flex items-center gap-2">
              <Car size={14} />
              CRED GARAGE
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-none">
              manage your <br />
              vehicles.
            </h1>
            <p className="text-gray-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed mt-2">
              park all your vehicles in one place. track active RTO challans, maintain vehicle insurance records, analyze monthly fuel expenses, and recharge FASTag instantly.
            </p>

            {/* Vehicle selection dashboard */}
            <div className="flex flex-col gap-3 mt-4">
              <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Your Garage Vehicles</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vehicles.map((v) => (
                  <button
                    key={v.no}
                    onClick={() => {
                      setActiveVehicle(v);
                      setVehicleNo(v.no);
                    }}
                    className={`p-5 rounded-xl border text-left bg-gradient-to-r ${v.color} flex flex-col justify-between aspect-[2.2/1] relative overflow-hidden transition-all duration-300 cursor-pointer ${
                      activeVehicle.no === v.no
                        ? 'border-brand-green shadow-[0_0_15px_rgba(0,230,118,0.25)]'
                        : 'border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-x-8 -translate-y-8 pointer-events-none" />
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white">{v.model}</span>
                        <span className="text-[10px] text-gray-400 font-mono tracking-widest mt-0.5">{v.no}</span>
                      </div>
                      <span className="text-[8px] bg-white/15 px-2 py-0.5 rounded font-bold uppercase tracking-wider text-brand-green">
                        {v.status}
                      </span>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className="flex flex-col">
                        <span className="text-[8px] text-gray-400 uppercase tracking-widest">FASTag Balance</span>
                        <span className="text-sm font-heading font-black text-white">{v.fastag}</span>
                      </div>
                      <Car size={24} className="text-white/20" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive FASTag recharge / Challan checker */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6 w-full z-10"
          >
            {/* Box A: FASTag Recharge */}
            <div className="p-6 bg-brand-light-grey border border-white/5 shadow-neopop-card rounded-2xl relative overflow-hidden flex flex-col gap-4">
              <h3 className="font-heading text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <CreditCard size={16} className="text-brand-green" />
                FASTag Balance Recharge
              </h3>

              <AnimatePresence mode="wait">
                {fastagState === 'idle' && (
                  <motion.form
                    key="idle-fastag"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFastagRecharge}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex justify-between items-center bg-brand-black/60 px-4 py-2 border border-white/5 rounded-lg">
                      <span className="text-xs text-gray-400 font-semibold truncate">Recharging for: {activeVehicle.model}</span>
                      <span className="text-xs text-white font-mono">{activeVehicle.no}</span>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Recharge Amount"
                        value={fastagAmount}
                        onChange={(e) => setFastagAmount(e.target.value)}
                        className="w-2/3 px-3 py-2 bg-brand-black/60 border border-white/10 rounded-lg text-sm text-white focus:border-brand-green"
                      />
                      <button
                        type="submit"
                        className="w-1/3 bg-white text-black font-heading font-black text-xs border border-black shadow-[2px_2px_0px_0px_#00e676] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
                      >
                        RECHARGE
                      </button>
                    </div>
                  </motion.form>
                )}

                {fastagState === 'recharging' && (
                  <motion.div
                    key="recharging-fastag"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 py-3"
                  >
                    <div className="w-5 h-5 border-2 border-brand-green/20 border-t-brand-green rounded-full animate-spin" />
                    <span className="text-xs text-gray-400">Verifying FASTag limits & routing cash...</span>
                  </motion.div>
                )}

                {fastagState === 'success' && (
                  <motion.div
                    key="success-fastag"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 bg-brand-green/10 border border-brand-green/20 p-3 rounded-lg"
                  >
                    <CheckCircle2 className="text-brand-green flex-shrink-0" size={18} />
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-white">Recharge Success</span>
                      <span className="text-[10px] text-brand-green">Loaded ${fastagAmount} onto tag linked with {activeVehicle.no}</span>
                    </div>
                    <button
                      onClick={() => setFastagState('idle')}
                      className="ml-auto text-[9px] font-bold text-gray-500 hover:text-white uppercase"
                    >
                      Reset
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Box B: Challan Status Check */}
            <div className="p-6 bg-brand-light-grey border border-white/5 shadow-neopop-card rounded-2xl relative overflow-hidden flex flex-col gap-4">
              <h3 className="font-heading text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Search size={16} className="text-brand-blue" />
                RTO Traffic Challan Tracker
              </h3>

              <AnimatePresence mode="wait">
                {challanState === 'idle' && (
                  <motion.form
                    key="idle-challan"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleChallanSearch}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      placeholder="Vehicle Registration No"
                      value={vehicleNo}
                      onChange={(e) => setVehicleNo(e.target.value)}
                      className="w-2/3 px-3 py-2 bg-brand-black/60 border border-white/10 rounded-lg text-sm text-white focus:border-brand-blue uppercase font-mono tracking-wider"
                    />
                    <button
                      type="submit"
                      className="w-1/3 bg-white text-black font-heading font-black text-xs border border-black shadow-[2px_2px_0px_0px_#00e5ff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
                    >
                      CHECK NOW
                    </button>
                  </motion.form>
                )}

                {challanState === 'checking' && (
                  <motion.div
                    key="checking-challan"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 py-3"
                  >
                    <div className="w-5 h-5 border-2 border-brand-blue/20 border-t-brand-blue rounded-full animate-spin" />
                    <span className="text-xs text-gray-400">Scanning traffic division database...</span>
                  </motion.div>
                )}

                {challanState === 'success' && (
                  <motion.div
                    key="success-challan"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 bg-brand-blue/10 border border-brand-blue/20 p-3.5 rounded-lg text-left"
                  >
                    <CheckCircle2 className="text-brand-blue flex-shrink-0 animate-bounce" size={20} />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">0 Active Challans Found</span>
                      <span className="text-[10px] text-gray-500">Clean record registered for {vehicleNo}. Drive safe!</span>
                    </div>
                    <button
                      onClick={() => setChallanState('idle')}
                      className="ml-auto text-[9px] font-bold text-gray-500 hover:text-white uppercase"
                    >
                      Check another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Garage;
