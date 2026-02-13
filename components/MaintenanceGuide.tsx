
import React from 'react';
import { TESTIMONIALS } from '../constants';

const MaintenanceGuide: React.FC = () => {
  return (
    <section id="smoke-testing" className="max-w-7xl mx-auto px-6 py-24">
      <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-slate-100">
        <div className="lg:w-2/5 p-16 bg-brand-deep text-white flex flex-col justify-between relative">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-cyan/10 to-transparent pointer-events-none"></div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-brand-cyan mb-12">Neighborhood Voices</h3>
            <div className="space-y-16">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-8 top-0 text-brand-pink opacity-20 group-hover:opacity-100 transition-opacity">
                    <i className="fas fa-quote-left text-4xl"></i>
                  </div>
                  <p className="text-2xl font-serif italic font-light leading-relaxed mb-6 text-slate-100">"{t.text}"</p>
                  <div>
                    <p className="font-black text-white text-lg tracking-tight">{t.name}</p>
                    <p className="text-brand-cyan text-xs font-black uppercase tracking-widest">{t.neighborhood}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} className="w-12 h-12 rounded-full border-4 border-brand-deep" alt="Avatar" />
                ))}
              </div>
              <p className="text-sm font-bold text-slate-400">Join 400+ fixed homes in Fayetteville.</p>
            </div>
          </div>
        </div>

        <div className="lg:w-3/5 p-16 lg:p-24 bg-white">
          <h2 className="text-5xl font-serif text-brand-deep mb-12 italic">The Detection Manual</h2>
          
          <div className="space-y-16">
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 text-5xl font-black text-brand-cyan/20">01</div>
              <h4 className="text-2xl font-black text-brand-deep mb-4 italic tracking-tight">The "Dry Trap" Effect</h4>
              <p className="text-slate-500 leading-relaxed text-lg font-light">
                Unused floor drains are common culprits. We'll show you how to maintain your traps to prevent NWA's humidity from turning your guest bath into a gas chamber.
              </p>
            </div>

            <div className="relative pl-12">
              <div className="absolute left-0 top-0 text-5xl font-black text-brand-pink/20">02</div>
              <h4 className="text-2xl font-black text-brand-deep mb-4 italic tracking-tight">Attic Vent Breaks</h4>
              <p className="text-slate-500 leading-relaxed text-lg font-light">
                Historic Fayetteville foundations shift. We use <span className="text-brand-cyan font-bold">Safe-Smoke™</span> to find these separations in minutes without cutting your drywall.
              </p>
            </div>

            <div className="relative pl-12">
              <div className="absolute left-0 top-0 text-5xl font-black text-brand-cyan/20">03</div>
              <h4 className="text-2xl font-black text-brand-deep mb-4 italic tracking-tight">Wax Seal Failure</h4>
              <p className="text-slate-500 leading-relaxed text-lg font-light">
                Does your toilet rock? That's a sign. A $20 seal could be the difference between a smelly home and a fresh one.
              </p>
            </div>
          </div>

          <div className="mt-20 p-12 cyan-pink-gradient rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-white">
              <p className="text-3xl font-black mb-2 tracking-tighter">Ready to fix it?</p>
              <p className="font-medium opacity-90">Book a Dickson St session today.</p>
            </div>
            <a href="tel:8443406413" className="w-full md:w-auto bg-white text-brand-deep px-10 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl">Speak with Rick</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceGuide;
