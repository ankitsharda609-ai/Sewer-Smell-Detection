
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-24">
        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-brand-cyan mb-4">Common Concerns</h2>
        <h3 className="text-5xl font-serif text-brand-deep italic">Neighbors ask us...</h3>
      </div>

      <div className="space-y-8">
        {FAQS.map((faq, index) => (
          <div key={index} className={`bg-white rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${openIndex === index ? 'border-brand-pink/50 shadow-2xl shadow-brand-pink/10 translate-x-4' : 'border-slate-100 shadow-sm'}`}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-10 text-left focus:outline-none"
            >
              <span className="font-black text-brand-deep text-xl pr-8 tracking-tight leading-tight">{faq.question}</span>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${openIndex === index ? 'cyan-pink-gradient text-white rotate-180 shadow-lg shadow-brand-pink/30' : 'bg-slate-50 text-slate-300'}`}>
                <i className="fas fa-chevron-down"></i>
              </div>
            </button>
            <div 
              className={`px-10 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[600px] pb-10 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="pt-8 border-t border-slate-50">
                <p className="text-slate-500 leading-relaxed font-light text-lg italic">
                  "{faq.answer}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <div className="inline-flex flex-col items-center">
          <p className="text-slate-400 text-sm font-black uppercase tracking-widest mb-4">Still got that smell?</p>
          <a href="mailto:rick@sewersmellpro.com" className="text-brand-pink font-black text-2xl hover:text-brand-cyan transition-colors italic font-serif">
            Email Rick's Dispatch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
