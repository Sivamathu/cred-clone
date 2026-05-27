import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Briefcase, MapPin, Send, CheckCircle2, Star, Sparkles } from 'lucide-react';

const Careers = ({ navigate }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationState, setApplicationState] = useState('idle'); // idle, submitting, success
  const [candidateEmail, setCandidateEmail] = useState('');

  const jobCategories = [
    {
      title: 'Engineering & Data',
      jobs: [
        { title: 'Frontend Developer (React)', location: 'Bengaluru, India', exp: '3-6 yrs' },
        { title: 'Backend Developer (Node.js/Go)', location: 'Bengaluru, India', exp: '4-8 yrs' },
        { title: 'Data Scientist (Risk Engines)', location: 'Remote / India', exp: '5+ yrs' }
      ]
    },
    {
      title: 'Product & Design',
      jobs: [
        { title: 'Product Manager (Payments)', location: 'Bengaluru, India', exp: '4-6 yrs' },
        { title: 'UI/UX Interaction Designer', location: 'Bengaluru, India', exp: '2-5 yrs' }
      ]
    },
    {
      title: 'Finance & Risk',
      jobs: [
        { title: 'Payments Settlement Analyst', location: 'Bengaluru, India', exp: '2-4 yrs' },
        { title: 'Risk Compliance Lead', location: 'Bengaluru, India', exp: '6+ yrs' }
      ]
    }
  ];

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!candidateEmail) return;
    setApplicationState('submitting');
    setTimeout(() => {
      setApplicationState('success');
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-32 pb-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] bg-brand-green/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[35vw] h-[35vw] bg-brand-pink/5 rounded-full blur-[180px] pointer-events-none" />

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
          back to Home
        </button>

        {/* Top Grid: Hero Copy & Cultural Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-pink uppercase flex items-center gap-2">
              <Briefcase size={14} />
              JOIN THE TEAM
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-none">
              work with <br />
              the top 1%.
            </h1>
            <p className="text-gray-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed mt-2">
              CRED is a team of high-performing individuals building trust systems for the creditworthy. We encourage self-governed autonomy, fast iterations, and obsession over visual design and clean code architectures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 p-6 bg-brand-light-grey border border-white/5 rounded-2xl flex flex-col gap-4"
          >
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="text-brand-gold animate-spin" size={16} />
              the CRED culture
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-gray-400">
              <li className="flex gap-2">
                <span className="text-brand-green font-bold">✓</span>
                <span><strong>autonomy:</strong> zero micro-management. you own your project from blueprint to launch.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green font-bold">✓</span>
                <span><strong>design first:</strong> we care about every micro-interaction, shadow offset, and pixel alignment.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green font-bold">✓</span>
                <span><strong>direct benefits:</strong> competitive compensation, premium tech gear, and health wellness allowances.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Core Layout: Openings list & Application Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6">
          {/* Job listings (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">open roles ({jobCategories.reduce((acc, curr) => acc + curr.jobs.length, 0)})</span>
            
            <div className="flex flex-col gap-8">
              {jobCategories.map((cat, catIdx) => (
                <div key={catIdx} className="flex flex-col gap-4 text-left">
                  <h3 className="font-heading font-black text-lg text-brand-green uppercase tracking-wider">{cat.title}</h3>
                  <div className="flex flex-col gap-3">
                    {cat.jobs.map((job, jobIdx) => (
                      <button
                        key={jobIdx}
                        onClick={() => {
                          setSelectedJob(job);
                          setApplicationState('idle');
                        }}
                        className={`p-5 bg-brand-black border text-left rounded-xl transition-all flex justify-between items-center cursor-pointer ${
                          selectedJob?.title === job.title
                            ? 'border-brand-pink shadow-[0_0_15px_rgba(255,64,129,0.15)] bg-white/5'
                            : 'border-white/5 hover:border-white/10 hover:bg-white/5'
                        }`}
                      >
                        <div className="flex flex-col gap-1.5">
                          <span className="text-sm font-bold text-white">{job.title}</span>
                          <div className="flex gap-4 text-[10px] text-gray-500 font-sans">
                            <span className="flex items-center gap-1"><MapPin size={10} />{job.location}</span>
                            <span>Exp: {job.exp}</span>
                          </div>
                        </div>
                        <span className="text-[10px] text-brand-pink font-bold uppercase tracking-wider border border-brand-pink/20 px-3 py-1 rounded">apply</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Application sandbox panel (lg:col-span-5) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 p-8 bg-brand-light-grey border border-white/5 rounded-2xl shadow-2xl overflow-hidden flex flex-col gap-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.03] pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {!selectedJob && (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <Briefcase className="text-gray-600 mb-4 animate-pulse" size={40} />
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Select a job opening</span>
                    <p className="text-gray-600 text-[11px] mt-2 max-w-xs leading-normal">
                      Click on any open role on the left to review application requirements and submit your portfolio directly.
                    </p>
                  </motion.div>
                )}

                {selectedJob && (
                  <motion.div
                    key={selectedJob.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="flex flex-col gap-5 text-left"
                  >
                    <div className="flex flex-col gap-1 border-b border-white/5 pb-4">
                      <span className="text-[10px] font-bold text-brand-pink uppercase tracking-widest">selected position</span>
                      <h3 className="font-heading text-lg font-black text-white">{selectedJob.title}</h3>
                      <span className="text-[10px] text-gray-500 font-sans mt-0.5">{selectedJob.location} • Experience: {selectedJob.exp}</span>
                    </div>

                    {applicationState === 'idle' && (
                      <form onSubmit={handleApplySubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Candidate Email</span>
                          <input
                            type="email"
                            required
                            placeholder="your.name@domain.com"
                            value={candidateEmail}
                            onChange={(e) => setCandidateEmail(e.target.value)}
                            className="w-full px-4 py-2.5 bg-brand-black/60 border border-white/10 rounded-lg text-sm text-white placeholder-gray-600 focus:border-brand-pink transition-colors font-sans"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Resume/Portfolio Link</span>
                          <input
                            type="url"
                            required
                            placeholder="https://github.com/profile or portfolio URL"
                            className="w-full px-4 py-2.5 bg-brand-black/60 border border-white/10 rounded-lg text-sm text-white placeholder-gray-600 focus:border-brand-pink transition-colors font-sans"
                          />
                        </div>

                        <button
                          type="submit"
                          className="neopop-press w-full py-4 bg-brand-pink text-white font-extrabold text-sm border-2 border-black shadow-neopop-pink hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all font-heading tracking-wider"
                        >
                          SUBMIT APPLICATION
                        </button>
                      </form>
                    )}

                    {applicationState === 'submitting' && (
                      <div className="flex flex-col items-center justify-center py-10 text-center">
                        <div className="w-12 h-12 rounded-full border-4 border-brand-pink/10 border-t-brand-pink animate-spin mb-4" />
                        <span className="text-xs text-gray-400">Uploading resume profiles & checking alignment parameters...</span>
                      </div>
                    )}

                    {applicationState === 'success' && (
                      <div className="flex flex-col items-center justify-center py-6 text-center">
                        <CheckCircle2 size={48} className="text-brand-green animate-bounce mb-4" />
                        <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider">Application Received</h4>
                        <p className="text-gray-400 text-xs mt-2 max-w-xs leading-normal">
                          Successfully registered portfolio for {selectedJob.title}. We will contact you at <strong>{candidateEmail}</strong> if there is a match.
                        </p>
                        <button
                          onClick={() => {
                            setApplicationState('idle');
                            setCandidateEmail('');
                          }}
                          className="mt-6 px-4 py-2 bg-white/5 border border-white/10 hover:border-brand-pink/20 text-white font-semibold text-xs uppercase tracking-wider transition-all"
                        >
                          apply for another role
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Careers;
