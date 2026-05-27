import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Newspaper, Quote, Bookmark, Heart, ExternalLink } from 'lucide-react';

const News = ({ navigate }) => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
  const [likes, setLikes] = useState({});

  const toggleBookmark = (id) => {
    if (bookmarkedArticles.includes(id)) {
      setBookmarkedArticles(bookmarkedArticles.filter((item) => item !== id));
    } else {
      setBookmarkedArticles([...bookmarkedArticles, id]);
    }
  };

  const handleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const newsCoverage = [
    {
      id: 1,
      publication: 'TechCrunch',
      logoText: 'TC',
      color: 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5',
      date: 'April 28, 2026',
      headline: 'How CRED is redefining fintech security via dynamic virtual tokenizations',
      snippet: 'CRED has rolled out high-trust virtual cards in a move to protect digital commerce. The platform has engineered a custom micro-frontend architecture permitting members to control and cycle credit keys on demand.',
      author: 'Manish Singh',
      link: 'https://techcrunch.com'
    },
    {
      id: 2,
      publication: 'Bloomberg',
      logoText: 'BB',
      color: 'border-brand-blue/20 text-brand-blue bg-brand-blue/5',
      date: 'March 11, 2026',
      headline: 'CRED Mint logs record peer-to-peer growth amid rising credit demand',
      snippet: 'CRED’s P2P investment vehicle has captured a significant market share by guaranteeing high interest payouts of up to 9% p.a. to creditworthy lenders. Analysts point to the members-only filter as its structural shield.',
      author: 'Saritha Rai',
      link: 'https://bloomberg.com'
    },
    {
      id: 3,
      publication: 'Economic Times',
      logoText: 'ET',
      color: 'border-orange-500/20 text-orange-400 bg-orange-500/5',
      date: 'January 22, 2026',
      headline: 'CRED Garage transforms vehicular ecosystem with FASTag recharges',
      snippet: 'By consolidating parking allocations, fuel diagnostics, FASTag accounts, and digital challan records, CRED’s vehicle manager is rapidly turning into an all-in-one automobile assistant for premium Indian vehicle owners.',
      author: 'Pranav Mukul',
      link: 'https://economictimes.indiatimes.com'
    },
    {
      id: 4,
      publication: 'Forbes',
      logoText: 'FB',
      color: 'border-brand-gold/20 text-brand-gold bg-brand-gold/5',
      date: 'November 05, 2025',
      headline: 'The premiumization of lifestyle finance: Inside CRED’s member community',
      snippet: 'CRED has succeeded in carving out a gated community of creditworthy individuals. The strategic addition of curated rewards, financial planning dashboards, and lifestyle perks makes it a digital-first club for high earners.',
      author: 'Ananya Bhattacharya',
      link: 'https://forbes.com'
    },
    {
      id: 5,
      publication: 'CNBC',
      logoText: 'CN',
      color: 'border-purple-500/20 text-purple-400 bg-purple-500/5',
      date: 'September 18, 2025',
      headline: 'CRED Money helps consumers manage multiple bank balances seamlessly',
      snippet: 'CRED’s capital analytics manager provides users with detailed categories expenditure lists and alert trackers. It leverages secure read-only APIs to consolidate balance metrics without storing raw bank details.',
      author: 'Arjun Kharpal',
      link: 'https://cnbc.com'
    }
  ];

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-28 pb-24 px-6 md:px-12 w-full overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[35vw] h-[35vw] bg-brand-green/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/10 w-[40vw] h-[40vw] bg-brand-blue/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Navigation & Header */}
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-200 mb-10 text-xs font-semibold uppercase tracking-wider cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to home
        </button>

        <div className="flex flex-col gap-4 text-left mb-16">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-green uppercase flex items-center gap-2">
            <Newspaper size={14} />
            coverage
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            CRED in the <br />spotlight.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
            see what leading global publications, business journals, and technology reporters have to say about CRED's ecosystem, growth, and security.
          </p>
        </div>

        {/* Featured Editorial Quote */}
        <div className="bg-gradient-to-r from-brand-dark via-brand-light-grey to-brand-dark border-2 border-brand-accent-grey p-8 md:p-12 rounded-2xl mb-16 text-left relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/3 rounded-full blur-3xl pointer-events-none" />
          <Quote className="text-brand-green/20 absolute top-6 left-6" size={80} />
          
          <div className="relative z-10 pl-6 md:pl-10">
            <span className="text-xs text-brand-green font-bold uppercase tracking-widest block mb-4">featured report</span>
            <p className="font-heading font-bold text-lg sm:text-2xl text-white leading-relaxed mb-6">
              "CRED is building something far more valuable than a mere utility app; they are building a high-trust membership network that re-imagines how wealthy consumers transact, invest, and organize their finances."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-green/15 flex items-center justify-center font-heading font-bold text-xs text-brand-green">
                E
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">The Economist</span>
                <span className="text-[10px] text-gray-500 font-sans">Technology & Finance Quarterly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Articles List */}
        <div className="flex flex-col gap-6 text-left">
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-wide border-b border-white/5 pb-3 mb-4">
            media reports
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsCoverage.map((item) => (
              <div
                key={item.id}
                className="bg-brand-dark/50 border border-white/5 p-6 hover:border-brand-green/25 hover:shadow-[0_0_25px_rgba(0,230,118,0.02)] transition-all duration-300 rounded-xl flex flex-col justify-between gap-6 group"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border rounded ${item.color}`}>
                      {item.publication}
                    </span>
                    <span className="text-gray-500 text-xs font-medium font-sans">{item.date}</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-brand-green transition-colors leading-snug">
                      {item.headline}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {item.snippet}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <span className="text-gray-500 text-[11px] font-medium font-sans">
                    By {item.author}
                  </span>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleLike(item.id)}
                      className="text-gray-500 hover:text-red-400 transition-colors flex items-center gap-1 text-[11px] font-bold cursor-pointer"
                    >
                      <Heart size={14} className={likes[item.id] ? 'fill-red-500 text-red-500' : ''} />
                      <span>{likes[item.id] || 0}</span>
                    </button>
                    
                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className="text-gray-500 hover:text-brand-green transition-colors cursor-pointer"
                      title={bookmarkedArticles.includes(item.id) ? 'Bookmarked' : 'Bookmark'}
                    >
                      <Bookmark size={14} className={bookmarkedArticles.includes(item.id) ? 'fill-brand-green text-brand-green' : ''} />
                    </button>
                    
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                      title="Read Official Article"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default News;
