import React, { useState } from 'react';
import { ArrowLeft, Landmark, RefreshCw, CheckCircle2 } from 'lucide-react';

const BankPartnerships = ({ navigate }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [latencies, setLatencies] = useState({ HDFC: 12, ICICI: 15, SBI: 22, AXIS: 14 });

  const triggerRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setLatencies({
        HDFC: Math.floor(8 + Math.random() * 10),
        ICICI: Math.floor(10 + Math.random() * 12),
        SBI: Math.floor(15 + Math.random() * 15),
        AXIS: Math.floor(8 + Math.random() * 12)
      });
      setRefreshing(false);
    }, 1500);
  };

  const partners = [
    { key: 'HDFC', name: 'HDFC Bank Ltd.', desc: 'Primary card settlement partner enabling real-time payment clearings and custom credit line facilities.', status: 'Active', latency: latencies.HDFC },
    { key: 'ICICI', name: 'ICICI Bank Ltd.', desc: 'Unified Payments Interface (UPI) acquiring node facilitating high-throughput scan-to-pay triggers.', status: 'Active', latency: latencies.ICICI },
    { key: 'SBI', name: 'State Bank of India', desc: 'Direct clearing interface supporting consolidated net worth balance metrics and statements queries.', status: 'Active', latency: latencies.SBI },
    { key: 'AXIS', name: 'Axis Bank Ltd.', desc: 'Credit card rewards issuer partner supporting customized partner discounts and cashback settlements.', status: 'Active', latency: latencies.AXIS }
  ];

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-28 pb-24 px-6 md:px-12 w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[35vw] h-[35vw] bg-brand-blue/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10 text-left">
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-200 mb-10 text-xs font-semibold uppercase tracking-wider cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to home
        </button>

        <div className="flex flex-col gap-4 mb-12">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-blue uppercase flex items-center gap-2">
            <Landmark size={14} />
            authorized networks
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            bank partnerships.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
            real-time clearing nodes and credit validation channels powered by India's leading banking institutions.
          </p>
        </div>

        {/* Partnerships Panel */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Main bank partners grid */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <h2 className="font-heading font-extrabold text-xl text-white">
                Clearing Nodes Health
              </h2>

              <button
                onClick={triggerRefresh}
                disabled={refreshing}
                className="flex items-center gap-1.5 text-[10px] font-bold text-brand-blue uppercase tracking-wider hover:text-white cursor-pointer transition-colors"
              >
                <RefreshCw size={12} className={refreshing ? 'animate-spin' : ''} />
                {refreshing ? 'pinging APIs...' : 'ping systems'}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {partners.map((partner) => (
                <div
                  key={partner.key}
                  className="bg-brand-dark/30 border border-white/5 p-6 rounded-2xl flex flex-col justify-between h-[230px] hover:border-brand-blue/20 transition-all duration-300"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="font-heading font-black text-sm text-white">{partner.name}</span>
                      <span className="text-[10px] text-brand-green font-bold bg-brand-green/5 px-2 py-0.5 border border-brand-green/10 rounded flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
                        {partner.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed mt-1">{partner.desc}</p>
                  </div>

                  <div className="border-t border-white/5 pt-4 flex justify-between items-center text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                    <span>API Latency</span>
                    <span className="text-brand-blue font-mono text-[11px] font-medium lowercase">{partner.latency}ms</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Audit */}
          <div className="md:col-span-4 bg-gradient-to-br from-brand-dark to-brand-light-grey border border-white/5 rounded-2xl p-6 flex flex-col gap-5 shadow-2xl">
            <h3 className="font-heading font-extrabold text-lg text-white">Clearing Standards</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              all banking integrations leverage ISO 20022 messaging formats and encrypted VPN layers, ensuring security parameters comply with RBI regulatory frameworks.
            </p>

            <div className="border-t border-white/5 pt-4 flex flex-col gap-3 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-bold uppercase tracking-wider">clearing system</span>
                <span className="text-gray-300 font-semibold font-sans">RTGS/NEFT/IMPS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-bold uppercase tracking-wider">security standard</span>
                <span className="text-gray-300 font-semibold font-sans">AES-256 GCM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-bold uppercase tracking-wider">audit rating</span>
                <span className="text-brand-green font-semibold font-sans">A++ Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankPartnerships;
