
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-brand-cyan/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 cyan-pink-gradient rounded-xl flex items-center justify-center shadow-lg shadow-brand-cyan/30">
              <i className="fas fa-search text-white text-lg"></i>
            </div>
            <span className="text-2xl font-black tracking-tighter text-brand-deep">
              ODOR<span className="text-brand-pink underline decoration-brand-cyan underline-offset-4">PRO</span>
            </span>
          </div>
          
          <nav className="hidden lg:flex space-x-10">
            <a href="#services" className="text-slate-600 hover:text-brand-cyan font-bold transition-all text-sm uppercase tracking-widest">Methods</a>
            <a href="#smoke-testing" className="text-slate-600 hover:text-brand-pink font-bold transition-all text-sm uppercase tracking-widest">Real Stories</a>
            <a href="#assistant" className="text-slate-600 hover:text-brand-cyan font-bold transition-all text-sm uppercase tracking-widest">AI Expert</a>
            <a href="#faq" className="text-slate-600 hover:text-brand-pink font-bold transition-all text-sm uppercase tracking-widest">FAQ</a>
          </nav>

          <a 
            href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} 
            className="cyan-pink-gradient text-white px-6 py-3 rounded-2xl font-black flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-brand-pink/20"
          >
            <i className="fas fa-phone-alt"></i>
            <span className="hidden sm:inline">Call Rick</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
