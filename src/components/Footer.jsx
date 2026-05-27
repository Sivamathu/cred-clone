import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = ({ navigate }) => {
  const footerLinks = [
    {
      title: 'about',
      links: ['about CRED', 'careers', 'press & media', 'in the news']
    },
    {
      title: 'resources',
      links: ['articles', 'calculators', 'credit tools', 'financial rules']
    },
    {
      title: 'policy',
      links: ['security guidelines', 'privacy policy', 'terms & conditions', 'data collection rules']
    },
    {
      title: 'legal',
      links: ['bank partnerships', 'merchant terms', 'UPI guidelines', 'disclaimer reports']
    },
    {
      title: 'developer',
      links: ['sivamathu T']
    }
  ];

  const routeMapping = {
    'about CRED': '/about',
    'careers': '/careers',
    'press & media': '/press',
    'in the news': '/news',
    'articles': '/articles',
    'calculators': '/calculators',
    'credit tools': '/credit-tools',
    'financial rules': '/financial-rules',
    'security guidelines': '/security-guidelines',
    'privacy policy': '/privacy-policy',
    'terms & conditions': '/terms-conditions',
    'data collection rules': '/data-rules',
    'bank partnerships': '/bank-partnerships',
    'merchant terms': '/merchant-terms',
    'UPI guidelines': '/upi-guidelines',
    'disclaimer reports': '/disclaimer-reports',
    'sivamathu T': '/developer'
  };

  
  return (
    <footer className="relative bg-brand-black pt-24 pb-12 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-brand-green/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16">
        
        {/* Footer Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-white/5">
          <div className="flex flex-col gap-2">
            <span className="font-heading font-black text-3xl tracking-widest text-white">
              CRED<span className="text-brand-green">.</span>
            </span>
            <p className="text-gray-500 text-xs sm:text-sm tracking-wide">
              experience financial privileges. join the members-only club.
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-white/30 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-all duration-300"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Directory Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 lg:gap-16">
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <span className="font-heading font-bold text-xs uppercase tracking-[0.25em] text-brand-green">
                {section.title}
              </span>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => {
                  const route = routeMapping[link];
                  return (
                    <li key={link}>
                      <a
                        href={route || '#'}
                        onClick={(e) => {
                          if (route && navigate) {
                            e.preventDefault();
                            navigate(route);
                          }
                        }}
                        className="text-sm text-gray-500 hover:text-white transition-all duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Block */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-center sm:text-left">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-gray-600">
              © {new Date().getFullYear()} CRED. All rights reserved.
            </span>
            <span className="text-[10px] text-gray-600 max-w-xl leading-normal">
              CRED is a registered financial services interface. All transactions and card bills settlements are routed through authorized banking interfaces. credit score calculations depend on CRIF/Experian bureaus.
            </span>
          </div>

          
        </div>

      </div>
    </footer>
  );
};

export default Footer;
