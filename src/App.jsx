import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import FeaturesSection from './components/FeaturesSection';
import CardsVault from './components/CardsVault';
import RatingsSection from './components/RatingsSection';
import SecuritySection from './components/SecuritySection';
import Footer from './components/Footer';

// Payments subpages imports
import TapToPay from './components/pages/TapToPay';
import PayAnyone from './components/pages/PayAnyone';
import UpiOnCredit from './components/pages/UpiOnCredit';
import CredPay from './components/pages/CredPay';

// Upgrades subpages imports
import Garage from './components/pages/Garage';
import Mint from './components/pages/Mint';
import Money from './components/pages/Money';
import About from './components/pages/About';
import Careers from './components/pages/Careers';
import Security from './components/pages/Security';
import CreditScore from './components/pages/CreditScore';
import Rewards from './components/pages/Rewards';
import Press from './components/pages/Press';
import News from './components/pages/News';
import Developer from './components/pages/Developer';

// Resources subpages imports
import Articles from './components/pages/Articles';
import Calculators from './components/pages/Calculators';
import CreditTools from './components/pages/CreditTools';
import FinancialRules from './components/pages/FinancialRules';

// Policy subpages imports
import SecurityGuidelines from './components/pages/SecurityGuidelines';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsConditions from './components/pages/TermsConditions';
import DataRules from './components/pages/DataRules';

// Legal subpages imports
import BankPartnerships from './components/pages/BankPartnerships';
import MerchantTerms from './components/pages/MerchantTerms';
import UpiGuidelines from './components/pages/UpiGuidelines';
import DisclaimerReports from './components/pages/DisclaimerReports';

import './App.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Custom router navigate helper
  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Sync browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle hash scrolling on page load if hash exists
  useEffect(() => {
    if (currentPath === '/' && window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, [currentPath]);

  return (
    <div className="relative min-h-screen bg-brand-black text-white w-full overflow-x-hidden selection:bg-brand-green selection:text-black">
      <Navbar currentPath={currentPath} navigate={navigate} />
      
      <main className="w-full">
        {currentPath === '/tap' && <TapToPay navigate={navigate} />}
        {currentPath === '/pay-via-upi' && <PayAnyone navigate={navigate} />}
        {currentPath === '/upi-on-credit' && <UpiOnCredit navigate={navigate} />}
        {currentPath === '/cred-pay' && <CredPay navigate={navigate} />}
        
        {/* New Upgrades Subpages */}
        {currentPath === '/garage' && <Garage navigate={navigate} />}
        {currentPath === '/mint' && <Mint navigate={navigate} />}
        {currentPath === '/money' && <Money navigate={navigate} />}
        {currentPath === '/about' && <About navigate={navigate} />}
        {currentPath === '/careers' && <Careers navigate={navigate} />}
        {currentPath === '/security' && <Security navigate={navigate} />}
        {currentPath === '/credit-score' && <CreditScore navigate={navigate} />}
        {currentPath === '/rewards' && <Rewards navigate={navigate} />}
        {currentPath === '/press' && <Press navigate={navigate} />}
        {currentPath === '/news' && <News navigate={navigate} />}

        {/* Resources subpages */}
        {currentPath === '/articles' && <Articles navigate={navigate} />}
        {currentPath === '/calculators' && <Calculators navigate={navigate} />}
        {currentPath === '/credit-tools' && <CreditTools navigate={navigate} />}
        {currentPath === '/financial-rules' && <FinancialRules navigate={navigate} />}

        {/* Policy subpages */}
        {currentPath === '/security-guidelines' && <SecurityGuidelines navigate={navigate} />}
        {currentPath === '/privacy-policy' && <PrivacyPolicy navigate={navigate} />}
        {currentPath === '/terms-conditions' && <TermsConditions navigate={navigate} />}
        {currentPath === '/data-rules' && <DataRules navigate={navigate} />}

        {/* Legal subpages */}
        {currentPath === '/bank-partnerships' && <BankPartnerships navigate={navigate} />}
        {currentPath === '/merchant-terms' && <MerchantTerms navigate={navigate} />}
        {currentPath === '/upi-guidelines' && <UpiGuidelines navigate={navigate} />}
        {currentPath === '/disclaimer-reports' && <DisclaimerReports navigate={navigate} />}
        {currentPath === '/developer' && <Developer navigate={navigate} />}
        
        {/* Render Home contents for base path or unmatched routes */}
        {!['/tap', '/pay-via-upi', '/upi-on-credit', '/cred-pay', '/garage', '/mint', '/money', '/about', '/careers', '/security', '/credit-score', '/rewards', '/press', '/news', '/articles', '/calculators', '/credit-tools', '/financial-rules', '/security-guidelines', '/privacy-policy', '/terms-conditions', '/data-rules', '/bank-partnerships', '/merchant-terms', '/upi-guidelines', '/disclaimer-reports', '/developer'].includes(currentPath) && (
          <>
            <Hero />
            <TrustSection />
            <FeaturesSection navigate={navigate} />
            <CardsVault />
            <RatingsSection />
            <SecuritySection />
          </>
        )}
      </main>
      
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
