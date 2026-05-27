import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, Code, CheckCircle2, Shield, Award, Terminal } from 'lucide-react';

const Developer = ({ navigate }) => {
  const [copiedText, setCopiedText] = useState(null);
  const [pingActive, setPingActive] = useState(false);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 3000);
  };

  const triggerPing = () => {
    setPingActive(true);
    setTimeout(() => setPingActive(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-28 pb-24 px-6 md:px-12 w-full overflow-hidden">
      {/* Background visual components */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-brand-green/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-[30vw] h-[30vw] bg-brand-blue/3 rounded-full blur-[150px] pointer-events-none" />

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
            <Code size={14} />
            system architect
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            sivamathu T.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
            lead software engineer responsible for the design systems, micro-frontend router state integrations, and 3D UI interfaces.
          </p>
        </div>

        {/* Developer Profile card and Terminal info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Card profile */}
          <div className="md:col-span-5 bg-gradient-to-br from-brand-dark to-brand-light-grey border border-white/5 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/3 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-green" />

            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest">CRED CORE BUILDER</span>
                <h3 className="font-heading font-black text-xl text-white mt-1">Sivamathu T</h3>
                <span className="text-xs text-gray-500 font-sans mt-0.5">Full Stack Engineer</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Shield className="text-brand-green" size={18} />
              </div>
            </div>

            {/* Profile specifications */}
            <div className="flex flex-col gap-4 border-t border-white/5 pt-6 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-bold uppercase tracking-wider">Status</span>
                <span className="text-brand-green font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
                  Active / Online
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-bold uppercase tracking-wider">Email</span>
                <button
                  onClick={() => copyToClipboard('sivamathu2005@gmail.com', 'email')}
                  className="text-gray-300 hover:text-brand-green transition-colors cursor-pointer font-semibold font-sans flex items-center gap-1"
                >
                  sivamathu2005@gmail.com
                </button>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-bold uppercase tracking-wider">Phone</span>
                <button
                  onClick={() => copyToClipboard('9342259122', 'phone')}
                  className="text-gray-300 hover:text-brand-green transition-colors cursor-pointer font-semibold font-sans flex items-center gap-1"
                >
                  +91 9342259122
                </button>
              </div>
            </div>

            {/* Success alert */}
            {copiedText && (
              <div className="bg-brand-green/5 border border-brand-green/20 rounded p-3 text-[10px] text-brand-green/90 text-center flex items-center justify-center gap-1.5 transition-all">
                <CheckCircle2 size={12} />
                <span>Copied {copiedText} parameters to clipboard!</span>
              </div>
            )}
          </div>

          {/* Console / Terminal details */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <h2 className="font-heading font-extrabold text-xl text-white border-b border-white/5 pb-3">
              Developer Console Info
            </h2>

            <div className="bg-brand-dark border-2 border-brand-accent-grey p-5 rounded-xl font-mono text-[11px] text-brand-green/90 shadow-inner flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-white/5 pb-2 text-[10px] text-gray-500 uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <Terminal size={12} />
                  credentials-ledger.sh
                </span>
                <span>v1.0.4</span>
              </div>

              <div className="flex flex-col gap-2">
                <span>$ ping -c 1 sivamathu-T-node</span>
                <span>PING sivamathu-T-node (127.0.0.1) 56(84) bytes of data.</span>
                <span>64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.12 ms</span>
                <span className="text-gray-500 font-sans text-[10px] mt-1">--- sivamathu-T-node ping statistics ---</span>
                <span>1 packets transmitted, 1 received, 0% packet loss, time 0ms</span>
              </div>

              <div className="border-t border-white/5 pt-3 mt-2 flex justify-between items-center">
                <span className="text-gray-500 font-sans text-[10px]">Ping host nodes network latency check:</span>
                <button
                  onClick={triggerPing}
                  className="px-3 py-1 border border-brand-green/20 hover:border-brand-green/50 text-brand-green text-[10px] uppercase font-bold tracking-wider rounded cursor-pointer transition-colors"
                >
                  {pingActive ? 'PINGING...' : 'RUN PING TEST'}
                </button>
              </div>
            </div>

            {/* Experience timeline */}
            <div className="flex flex-col gap-4 text-left mt-2">
              <h3 className="font-heading font-extrabold text-base text-white">Stack Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Vite.js', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'PCI Tokenizations', 'State Routing'].map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-bold text-gray-400 bg-brand-light-grey border border-white/5 px-2.5 py-1.5 rounded uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Developer;
