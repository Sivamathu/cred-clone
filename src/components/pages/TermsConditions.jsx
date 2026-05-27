import React, { useState } from 'react';
import { ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';

const TermsConditions = ({ navigate }) => {
  const [signatureName, setSignatureName] = useState('');
  const [signed, setSigned] = useState(false);

  const handleSign = (e) => {
    e.preventDefault();
    if (!signatureName) return;
    setSigned(true);
  };

  const termsList = [
    { title: '1. Member Eligibility', content: 'Membership is restricted to individuals with a verified credit score of 750 or above from bureaus such as Experian or CRIF. CRED reserves the right to terminate access if credit standings decline.' },
    { title: '2. Payment Settlements', content: 'CRED operates as a payment facilitator. While most credit card bills settle instantly, banks may take up to 2-3 business days. Members are advised to clear outstanding dues 3 days before expiry.' },
    { title: '3. Cashback & Coin Rewards', content: 'CRED Coins are virtual loyalty tokens with no monetary value. Redemptions on the rewards storefront depend on partner brand stock levels and discount allocations.' },
    { title: '4. Platform Fee & Surcharges', content: 'Standard card bill payments are free of extra surcharges. Specific convenience fees may apply to custom utility payments or credit line distributions.' }
  ];

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-28 pb-24 px-6 md:px-12 w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[35vw] h-[35vw] bg-brand-pink/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10 text-left">
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-200 mb-10 text-xs font-semibold uppercase tracking-wider cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to home
        </button>

        <div className="flex flex-col gap-4 mb-12">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-pink uppercase flex items-center gap-2">
            <FileText size={14} />
            platform guidelines
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            terms & conditions.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
            read our agreement protocols detailing membership requirements, transaction rules, and service structures.
          </p>
        </div>

        {/* Terms Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Main Terms list */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <h2 className="font-heading font-extrabold text-xl text-white border-b border-white/5 pb-3">
              Membership Agreement
            </h2>

            <div className="flex flex-col gap-6">
              {termsList.map((term, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-brand-pink">{term.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {term.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Signature */}
          <div className="md:col-span-4 bg-gradient-to-br from-brand-dark to-brand-light-grey border border-white/5 rounded-2xl p-6 flex flex-col gap-5 shadow-2xl">
            <h3 className="font-heading font-extrabold text-lg text-white">Acceptance Panel</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              type your full legal name below to simulate signing and accepting the gated membership terms of services:
            </p>

            {signed ? (
              <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-5 text-center flex flex-col items-center gap-2">
                <CheckCircle2 size={24} className="text-brand-green" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Signed Digital Contract</span>
                <span className="font-mono italic text-sm text-brand-green border-b border-brand-green/20 pb-1 mt-1 font-semibold">{signatureName}</span>
                <span className="text-[9px] text-gray-500 font-sans mt-1">Signed on: {new Date().toLocaleDateString()}</span>
              </div>
            ) : (
              <form onSubmit={handleSign} className="flex flex-col gap-3">
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">digital signature</span>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  value={signatureName}
                  onChange={(e) => setSignatureName(e.target.value)}
                  className="w-full bg-brand-black border border-white/10 rounded-lg p-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-pink/50 transition-colors"
                  required
                />

                <button
                  type="submit"
                  className="w-full py-2.5 bg-white text-black font-extrabold text-xs tracking-wider uppercase border border-black shadow-[2px_2px_0px_0px_#ff3366] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
                >
                  SIGN AGREEMENT
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
