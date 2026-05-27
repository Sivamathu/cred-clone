import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Mail, Share2, FileText, CheckCircle2 } from 'lucide-react';

const Press = ({ navigate }) => {
  const [downloadedAsset, setDownloadedAsset] = useState(null);

  const triggerDownload = (assetName) => {
    setDownloadedAsset(assetName);
    setTimeout(() => setDownloadedAsset(null), 3000);
  };

  const pressReleases = [
    {
      date: 'May 20, 2026',
      title: 'CRED launches premium virtual card vaults with PCI-compliant dynamic CVV rotation',
      category: 'Product Launch',
      excerpt: 'CRED expands its suite of high-trust credentials management by introducing customizable glassmorphic virtual card hubs allowing instant theme customizations.'
    },
    {
      date: 'March 14, 2026',
      title: 'CRED Garage features expand to cover national toll systems and real-time vehicle logs',
      category: 'Updates',
      excerpt: 'CRED members can now track dynamic fuel tax calculations, FASTag balance logs, and vehicle valuations directly from the mobile console.'
    },
    {
      date: 'January 09, 2026',
      title: 'CRED Mint surpasses 150,000 active lenders earning up to 9% p.a.',
      category: 'Milestone',
      excerpt: 'CRED announces a major milestone for its peer-to-peer investment platform, maintaining 0.0% NPA levels through rigorous member filtering algorithms.'
    },
    {
      date: 'November 28, 2025',
      title: 'CRED acquires AI-driven portfolio tracker to power advanced CRED Money analytics',
      category: 'M&A',
      excerpt: 'The strategic acquisition integrates predictive monthly recurring cost checks and multi-bank ledger synchronization into the member dashboard.'
    }
  ];

  const brandAssets = [
    { name: 'Primary SVG Logo', size: '1.2 MB', format: 'SVG/EPS' },
    { name: 'Brand Color Swatches', size: '400 KB', format: 'HEX/RGB' },
    { name: 'Premium Card 3D Assets', size: '18.4 MB', format: 'PNG/GLTF' },
    { name: 'Press Kit Complete Guide', size: '4.8 MB', format: 'PDF' }
  ];

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-28 pb-24 px-6 md:px-12 w-full overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-brand-pink/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-[30vw] h-[30vw] bg-brand-green/3 rounded-full blur-[120px] pointer-events-none" />

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
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-pink uppercase">
            pressroom
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            CRED news & <br />brand assets.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
            official press releases, brand guidelines, and high-fidelity media kits for CRED partnerships and announcements.
          </p>
        </div>

        {/* Brand Assets Section */}
        <div className="mb-20 text-left">
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white mb-8 tracking-wide border-b border-white/5 pb-3">
            download brand assets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {brandAssets.map((asset) => (
              <div
                key={asset.name}
                className="bg-brand-dark border border-white/5 p-6 flex flex-col justify-between h-48 hover:border-brand-pink/30 hover:shadow-[0_0_20px_rgba(255,51,102,0.05)] transition-all duration-300 rounded-xl"
              >
                <div className="flex flex-col gap-1.5">
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">{asset.format}</span>
                  <h3 className="font-heading font-bold text-sm text-white">{asset.name}</h3>
                  <span className="text-gray-600 text-xs mt-1">{asset.size}</span>
                </div>

                <button
                  onClick={() => triggerDownload(asset.name)}
                  className={`w-full py-2 border text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 ${
                    downloadedAsset === asset.name
                      ? 'bg-brand-green text-black border-brand-green'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white hover:text-black hover:border-white'
                  }`}
                >
                  {downloadedAsset === asset.name ? (
                    <>
                      <CheckCircle2 size={13} />
                      DOWNLOADED
                    </>
                  ) : (
                    <>
                      <Download size={13} />
                      DOWNLOAD KIT
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Press Releases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Main Feed */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white mb-2 tracking-wide border-b border-white/5 pb-3">
              press releases
            </h2>
            <div className="flex flex-col gap-6">
              {pressReleases.map((release, i) => (
                <div
                  key={i}
                  className="bg-brand-dark/50 border border-white/5 p-6 hover:border-white/15 transition-all duration-300 rounded-xl flex flex-col gap-3 group"
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-brand-pink font-semibold uppercase tracking-wider text-[10px] bg-brand-pink/10 px-2 py-0.5 border border-brand-pink/20 rounded">
                      {release.category}
                    </span>
                    <span className="text-gray-500 font-medium font-sans">{release.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-brand-pink transition-colors">
                    {release.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {release.excerpt}
                  </p>
                  <div className="flex gap-4 mt-2">
                    <button className="text-[11px] font-bold uppercase tracking-wider text-white hover:text-brand-pink transition-colors flex items-center gap-1.5 cursor-pointer">
                      <FileText size={12} />
                      Read Release
                    </button>
                    <button className="text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer">
                      <Share2 size={12} />
                      Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Contact */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h2 className="font-heading font-extrabold text-xl text-white tracking-wide border-b border-white/5 pb-3">
              media contacts
            </h2>
            <div className="bg-gradient-to-br from-brand-dark to-brand-light-grey border border-white/5 p-6 rounded-xl flex flex-col gap-4">
              <p className="text-gray-400 text-xs leading-relaxed">
                if you are a journalist, writer, or analyst seeking resources or seeking to connect for quotes and features, get in touch with our team:
              </p>
              
              <div className="flex flex-col gap-3.5 mt-2">
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Corporate Communications</span>
                  <a href="mailto:press@cred.club" className="text-xs text-white hover:text-brand-pink font-semibold flex items-center gap-2 mt-1">
                    <Mail size={12} className="text-brand-pink" />
                    press@cred.club
                  </a>
                </div>
                
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">General Partnerships</span>
                  <a href="mailto:partners@cred.club" className="text-xs text-white hover:text-brand-pink font-semibold flex items-center gap-2 mt-1">
                    <Mail size={12} className="text-brand-pink" />
                    partners@cred.club
                  </a>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 flex flex-col gap-2 mt-2">
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">response timeline</span>
                <span className="text-[10px] text-gray-400 font-sans">Our PR team typically responds to verified publications within 12 business hours.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Press;
