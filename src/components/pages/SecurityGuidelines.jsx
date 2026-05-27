import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, CheckCircle2, ShieldAlert, Key, Smartphone, AlertTriangle } from 'lucide-react';

const SecurityGuidelines = ({ navigate }) => {
  const [securityScore, setSecurityScore] = useState(60);
  const [checks, setChecks] = useState({
    twoFa: false,
    biometrics: false,
    strongPassword: true,
    dynamicCvv: false
  });

  const toggleCheck = (key) => {
    const updated = { ...checks, [key]: !checks[key] };
    setChecks(updated);

    // Calculate score dynamically
    let score = 20; // baseline
    if (updated.twoFa) score += 20;
    if (updated.biometrics) score += 20;
    if (updated.strongPassword) score += 20;
    if (updated.dynamicCvv) score += 20;
    setSecurityScore(score);
  };

  const steps = [
    { key: 'twoFa', title: 'Two-Factor Authentication (2FA)', desc: 'enable app-based MFA for high-value transactional releases.', icon: <Key size={16} /> },
    { key: 'biometrics', title: 'Biometric Access Control', desc: 'require face ID / fingerprint verification to load card numbers.', icon: <Smartphone size={16} /> },
    { key: 'strongPassword', title: 'Strong Encryption Passphrase', desc: 'use alphanumeric passwords separate from payment pins.', icon: <ShieldAlert size={16} /> },
    { key: 'dynamicCvv', title: 'Dynamic CVV Rotations', desc: 'activate dynamic tokens to rotate cvv codes on checkouts.', icon: <ShieldCheck size={16} /> }
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
            <ShieldCheck size={14} />
            protection protocols
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            security guidelines.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
            take proactive control. manage your account authentication safety indicators and audit access checks.
          </p>
        </div>

        {/* Security Checklist Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* List */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <h2 className="font-heading font-extrabold text-xl text-white border-b border-white/5 pb-3">
              App Configuration Guidelines
            </h2>

            <div className="flex flex-col gap-3.5">
              {steps.map((step) => (
                <div
                  key={step.key}
                  onClick={() => toggleCheck(step.key)}
                  className={`border p-5 rounded-xl cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                    checks[step.key]
                      ? 'bg-brand-green/5 border-brand-green/30'
                      : 'bg-brand-dark/40 border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg border flex-shrink-0 ${
                    checks[step.key]
                      ? 'bg-brand-green/10 border-brand-green/20 text-brand-green'
                      : 'bg-white/5 border-white/10 text-gray-500'
                  }`}>
                    {step.icon}
                  </div>

                  <div className="flex flex-col gap-1 text-left flex-grow">
                    <h3 className="font-heading font-bold text-sm text-white">{step.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                  </div>

                  <div className="flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={checks[step.key]}
                      onChange={() => {}} // handled by parent onClick
                      className="accent-brand-green cursor-pointer h-4 w-4 rounded"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Meter Output */}
          <div className="md:col-span-5 bg-gradient-to-br from-brand-dark to-brand-light-grey border border-white/5 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-green" />
            
            <div className="flex flex-col items-center gap-1.5 text-center">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">security health score</span>
              <span className="text-5xl font-heading font-black text-white tracking-tight mt-1">{securityScore}%</span>
              
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border rounded mt-2.5 ${
                securityScore >= 80
                  ? 'text-brand-green bg-brand-green/10 border-brand-green/20'
                  : securityScore >= 60
                  ? 'text-brand-blue bg-brand-blue/10 border-brand-blue/20'
                  : 'text-brand-pink bg-brand-pink/10 border-brand-pink/20'
              }`}>
                {securityScore >= 80 ? 'Optimal Protection' : securityScore >= 60 ? 'Standard Security' : 'Low Security Check'}
              </span>
            </div>

            <div className="border-t border-white/5 pt-4 flex flex-col gap-2">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">compliance report</span>
              <span className="text-gray-400 text-xs leading-relaxed">
                {securityScore >= 80 
                  ? 'your credentials logs are completely tokenized. device accesses match baseline security requirements.'
                  : 'activate multi-factor options or dynamic cvv to upgrade device status to absolute protection.'}
              </span>
            </div>

            <div className="bg-brand-green/5 border border-brand-green/20 rounded p-4 text-[10px] text-brand-green/90 flex items-start gap-2">
              <AlertTriangle size={14} className="flex-shrink-0 mt-0.5" />
              <span>CRED security never asks for your card pin, CVV codes, or OTP keys via call, text, or email logs. Keep guidelines active.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityGuidelines;
