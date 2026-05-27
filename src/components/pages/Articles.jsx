import React, { useState } from 'react';
import { ArrowLeft, Search, BookOpen, Clock, Heart, Share2 } from 'lucide-react';

const Articles = ({ navigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'credit cards', 'wealth planning', 'security', 'lifestyle'];

  const articles = [
    {
      id: 1,
      title: '5 Habits of High-Score Credit Card Users',
      category: 'credit cards',
      readTime: '4 min read',
      date: 'May 24, 2026',
      snippet: 'Unlocking maximum reward multipliers, managing automated repayments, and maintaining credit utilization ratios under 10%.'
    },
    {
      id: 2,
      title: 'Demystifying P2P Yields: Risk vs Return',
      category: 'wealth planning',
      readTime: '6 min read',
      date: 'May 18, 2026',
      snippet: 'An analytical deep dive into peer-to-peer lending frameworks. Learn how filtered member bases mitigate capital risks.'
    },
    {
      id: 3,
      title: 'Dynamic CVV and Card Tokenization Explained',
      category: 'security',
      readTime: '5 min read',
      date: 'May 12, 2026',
      snippet: 'How digital payments are evolving. Exploring PCI network integrations and dynamic cryptographic key cycles.'
    },
    {
      id: 4,
      title: 'Inside Gated Communities: Gaining Premium Perks',
      category: 'lifestyle',
      readTime: '3 min read',
      date: 'May 05, 2026',
      snippet: 'A look into how curated communities receive premium privileges, exclusive rewards, and direct merchant discounts.'
    },
    {
      id: 5,
      title: 'How Multi-Bank Ledgering Optimizes Net Worth Tracker',
      category: 'wealth planning',
      readTime: '8 min read',
      date: 'April 27, 2026',
      snippet: 'Consolidating multiple accounts into unified insights. Learn how to track recurring debits, investments, and cash flows.'
    }
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-28 pb-24 px-6 md:px-12 w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[35vw] h-[35vw] bg-brand-green/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10 text-left">
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-200 mb-10 text-xs font-semibold uppercase tracking-wider cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </button>

        <div className="flex flex-col gap-4 mb-12">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-green uppercase flex items-center gap-2">
            <BookOpen size={14} />
            knowledge base
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            CRED articles.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
            smart financial tips, analytical guides, and exclusive lifestyle features written by industry experts.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center border-b border-white/5 pb-8 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 border text-[10px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-black border-white shadow-[2px_2px_0px_0px_#00e676]'
                    : 'bg-brand-dark text-gray-400 border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-dark/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-xs font-semibold text-white placeholder-gray-500 focus:outline-none focus:border-brand-green/50 transition-colors"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                className="bg-brand-dark/30 border border-white/5 p-6 hover:border-brand-green/20 hover:shadow-[0_0_20px_rgba(0,230,118,0.02)] transition-all duration-300 rounded-2xl flex flex-col justify-between h-[280px] group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-brand-green font-bold uppercase tracking-wider bg-brand-green/5 px-2 py-0.5 border border-brand-green/10 rounded">
                      {art.category}
                    </span>
                    <span className="text-gray-500 font-medium font-sans flex items-center gap-1">
                      <Clock size={12} />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-lg sm:text-xl text-white group-hover:text-brand-green transition-colors mt-2 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {art.snippet}
                  </p>
                </div>

                <div className="flex justify-between items-center border-t border-white/5 pt-4">
                  <span className="text-gray-500 text-[10px] font-semibold tracking-wider uppercase font-sans">
                    {art.date}
                  </span>
                  
                  <div className="flex gap-4">
                    <button className="text-gray-500 hover:text-white transition-colors cursor-pointer">
                      <Heart size={14} />
                    </button>
                    <button className="text-gray-500 hover:text-white transition-colors cursor-pointer">
                      <Share2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-brand-dark/20 border border-dashed border-white/5 rounded-2xl">
            <p className="text-gray-500 text-sm">No articles match your search parameters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
