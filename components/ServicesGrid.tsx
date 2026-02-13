
import React from 'react';
import { SERVICES } from '../constants';

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col items-center text-center mb-24">
        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-brand-pink mb-4">Our Methodology</h2>
        <h3 className="text-5xl font-serif text-brand-deep italic">How we track the smell down...</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {SERVICES.map((service, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 cyan-pink-gradient opacity-0 group-hover:opacity-10 rounded-[3rem] transition-all duration-500 blur-2xl -z-10"></div>
            <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-4 transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-20 h-20 cyan-pink-gradient rounded-3xl flex items-center justify-center text-white text-3xl mb-10 shadow-lg shadow-brand-pink/30 group-hover:scale-110 transition-transform">
                <i className={`fas ${service.icon}`}></i>
              </div>
              
              <h3 className="text-2xl font-black text-brand-deep mb-6 leading-tight">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-light text-lg mb-10">
                {service.description}
              </p>
              
              <div className="w-12 h-1 bg-brand-cyan rounded-full transition-all group-hover:w-32 group-hover:bg-brand-pink"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
