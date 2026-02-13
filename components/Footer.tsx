
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-deep text-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/5 rounded-full -mr-64 -mt-64 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full -ml-64 -mb-64 blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-white/10 pb-20 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-black text-white mb-8 block tracking-tighter">
              ODOR<span className="text-brand-pink">PRO</span>
            </span>
            <p className="text-slate-400 leading-relaxed font-light text-base pr-8">
              Northwest Arkansas' most scientific sewer odor tracking squad. We find the gas, fix the leak, and restore your home's air.
            </p>
          </div>
          
          <div>
            <h4 className="font-black text-xs mb-10 uppercase tracking-[0.4em] text-brand-cyan">Connect</h4>
            <div className="space-y-8">
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} 
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 cyan-pink-gradient rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all text-white">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <span className="font-black text-2xl tracking-tighter">{BUSINESS_INFO.phone}</span>
              </a>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <i className="fas fa-map-marker-alt text-brand-pink"></i>
                </div>
                <span className="text-slate-400 text-sm font-bold max-w-[150px]">{BUSINESS_INFO.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs mb-10 uppercase tracking-[0.4em] text-brand-cyan">The Territory</h4>
            <div className="grid grid-cols-2 gap-4 text-slate-400 text-sm font-black uppercase tracking-widest">
              <span className="hover:text-brand-pink cursor-default transition-colors">Fayetteville</span>
              <span className="hover:text-brand-pink cursor-default transition-colors">Bentonville</span>
              <span className="hover:text-brand-pink cursor-default transition-colors">Springdale</span>
              <span className="hover:text-brand-pink cursor-default transition-colors">Rogers</span>
              <span className="hover:text-brand-pink cursor-default transition-colors">Farmington</span>
              <span className="hover:text-brand-pink cursor-default transition-colors">Centerton</span>
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs mb-10 uppercase tracking-[0.4em] text-brand-cyan">Ready for Rick?</h4>
            <p className="text-slate-400 text-sm mb-6 font-medium italic">We're usually in the field, but our office staff is ready to dispatch help.</p>
            <div className="flex gap-4">
               <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-pink transition-all border border-white/10">
                 <i className="fab fa-instagram"></i>
               </a>
               <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-cyan transition-all border border-white/10">
                 <i className="fab fa-facebook-f"></i>
               </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase font-black tracking-[0.4em] text-slate-600">
            &copy; {new Date().getFullYear()} Odor Pro Northwest Arkansas • A Licensed Tech Service
          </p>
          <div className="flex gap-10 text-[10px] uppercase font-black tracking-[0.3em] text-slate-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Liability Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
