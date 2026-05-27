import React, { useState } from 'react';
import { ArrowLeft, Lock, ChevronDown, CheckCircle2 } from 'lucide-react';

const PrivacyPolicy = ({ navigate }) => {
  const [openSection, setOpenSection] = useState(null);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [optOutSuccess, setOptOutSuccess] = useState(false);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!submittedEmail) return;
    setOptOutSuccess(true);
    setTimeout(() => {
      setOptOutSuccess(false);
      setSubmittedEmail('');
    }, 4000);
  };

  const sections = [
    {
      id: 1,
      title: '1. What data do we collect?',
      content: 'We collect your mobile number, credit card details (card network, last 4 digits for billing registration), email logs (for sending monthly payment reports), and transaction history processed via the platform to manage cashbacks and rewards calculations.'
    },
    {
      id: 2,
      title: '2. Encryption & Data Protection Standards',
      content: 'All credentials data is processed using AES-256 encryption. PCI-DSS network tokenization converts sensitive details into secure token keys, ensuring raw numbers are never stored in plain text databases.'
    },
    {
      id: 3,
      title: '3. Data Sharing with Banking Partners',
      content: 'We share necessary settlement records with partner banks (e.g. HDFC, ICICI) to resolve payment processes. We never sell your personal metrics to third-party advertisers.'
    },
    {
      id: 4,
      title: '4. Cookies & Web Trackers',
      content: 'We use secure cookies to remember session validations and member status. You can block trackers inside your browser settings, though it might impact automatic payment approvals.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-28 pb-24 px-6 md:px-12 w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[35vw] h-[35vw] bg-brand-blue/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10 text-left">
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-200 mb-10 text-xs font-semibold uppercase tracking-wider cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to home
        </button>

        <div className="flex flex-col gap-4 mb-12">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-green uppercase flex items-center gap-2">
            <Lock size={14} />
            legal compliance
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            privacy policy.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
            your data privacy is built into our core protocols. review how we manage, store, and process parameters.
          </p>
        </div>

        {/* Policy Contents */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Accordion list */}
          <div className="md:col-span-8 flex flex-col gap-3">
            <h2 className="font-heading font-extrabold text-xl text-white border-b border-white/5 pb-3 mb-2">
              Sections Index
            </h2>

            <div className="flex flex-col gap-3">
              {sections.map((sec) => (
                <div
                  key={sec.id}
                  className="bg-brand-dark/30 border border-white/5 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(sec.id)}
                    className="w-full p-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-white">{sec.title}</span>
                    <ChevronDown
                      size={18}
                      className={`text-gray-500 transition-transform duration-300 ${
                        openSection === sec.id ? 'rotate-180 text-brand-green' : ''
                      }`}
                    />
                  </button>

                  {openSection === sec.id && (
                    <div className="px-5 pb-5 pt-1 border-t border-white/5 bg-brand-dark/10">
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                        {sec.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Opt-out controls */}
          <div className="md:col-span-4 bg-gradient-to-br from-brand-dark to-brand-light-grey border border-white/5 rounded-2xl p-6 flex flex-col gap-5 shadow-2xl">
            <h3 className="font-heading font-extrabold text-lg text-white">Data Management Console</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              as a premium CRED member, you can request an audit copy of all personal records or opt out of metrics analysis tools:
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-1">
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">email identification</span>
              <input
                type="email"
                placeholder="registered-email@domain.com"
                value={submittedEmail}
                onChange={(e) => setSubmittedEmail(e.target.value)}
                className="w-full bg-brand-black border border-white/10 rounded-lg p-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-green/50 transition-colors"
                required
              />

              <button
                type="submit"
                className="w-full py-2.5 bg-white text-black font-extrabold text-xs tracking-wider uppercase border border-black shadow-[2px_2px_0px_0px_#00e676] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                REQUEST DATA OPT-OUT
              </button>
            </form>

            {optOutSuccess && (
              <div className="bg-brand-green/5 border border-brand-green/20 rounded p-4 text-[10px] text-brand-green/90 flex items-start gap-2">
                <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" />
                <span>Opt-out request received. Verification token sent to your registered address.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
