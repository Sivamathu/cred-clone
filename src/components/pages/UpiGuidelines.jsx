import React, { useState } from 'react';
import { ArrowLeft, ShieldAlert, CheckCircle2, QrCode } from 'lucide-react';

const UpiGuidelines = ({ navigate }) => {
  const [ticketId, setTicketId] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ticketId) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setTicketId('');
    }, 4000);
  };

  const guidelinesList = [
    { title: '1. Daily Transaction Limits', content: 'As per NPCI mandates, the maximum cumulative UPI transaction limit is ₹1,00,000 per user per day. Specific banking partners may enforce lower ceilings (e.g. ₹25,000 for new linked accounts during the first 24 hours).' },
    { title: '2. UPI PIN Security', content: 'UPI PIN inputs are encrypted via NPCI-certified SDK structures. CRED never stores or captures your 4-digit or 6-digit payment PIN. PIN verification occurs entirely on bank servers.' },
    { title: '3. Transaction Dispute Resolution', content: 'Pending transaction states are auto-reconciled within 48 hours. If money is debited but not credited to the merchant, our UPI engine triggers chargeback logs to initiate bank refunds.' }
  ];

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-28 pb-24 px-6 md:px-12 w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[35vw] h-[35vw] bg-brand-green/3 rounded-full blur-[150px] pointer-events-none" />

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
            <QrCode size={14} />
            payment regulations
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            UPI guidelines.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
            NPCI specifications and security advice governing standard UPI payments, card linking, and merchant settlements.
          </p>
        </div>

        {/* Guidelines layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Main guidelines lists */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <h2 className="font-heading font-extrabold text-xl text-white border-b border-white/5 pb-3">
              NPCI Compliance Standards
            </h2>

            <div className="flex flex-col gap-6">
              {guidelinesList.map((guide, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-brand-green">{guide.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {guide.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dispute ticket submittals */}
          <div className="md:col-span-4 bg-gradient-to-br from-brand-dark to-brand-light-grey border border-white/5 rounded-2xl p-6 flex flex-col gap-5 shadow-2xl">
            <h3 className="font-heading font-extrabold text-lg text-white">Dispute Console</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              if you encountered a pending or failed transaction status but money was debited, file a tracking request using your 12-digit UPI Transaction ID (RRN):
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-1">
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">UPI RRN ID</span>
              <input
                type="text"
                maxLength="12"
                pattern="\d{12}"
                placeholder="e.g. 628394827182"
                value={ticketId}
                onChange={(e) => setTicketId(e.target.value)}
                className="w-full bg-brand-black border border-white/10 rounded-lg p-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-green/50 transition-colors font-mono"
                required
              />

              <button
                type="submit"
                className="w-full py-2.5 bg-white text-black font-extrabold text-xs tracking-wider uppercase border border-black shadow-[2px_2px_0px_0px_#00e676] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                FILE DISPUTE TICKET
              </button>
            </form>

            {submitted && (
              <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-4 text-[10px] text-brand-green/90 flex items-start gap-2">
                <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" />
                <span>Ticket registered. Reconciliations scripts will audit this RRN with your bank node. Status notifications will update via SMS.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpiGuidelines;
