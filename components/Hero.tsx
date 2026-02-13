
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden mesh-bg">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-10 grayscale mix-blend-multiply" 
          alt="Historic Home"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-left animate-[fadeIn_0.8s_ease-out]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full text-brand-cyan font-black text-xs mb-8 tracking-widest uppercase">
            <span className="w-2 h-2 bg-brand-pink rounded-full animate-pulse"></span>
            Fayetteville's #1 Odor Squad
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif text-brand-deep leading-[1.05] mb-8">
            Mystery <span className="text-gradient italic">Sewage Smell?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 font-light leading-relaxed max-w-xl">
            We use industrial-grade <span className="marker-underline font-bold text-brand-deep">Smoke Testing</span> and laser-accurate sensors to find the gas leak you can't see.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#assistant" 
              className="px-10 py-5 bg-brand-deep text-white rounded-3xl font-black text-lg hover:bg-brand-pink transition-all shadow-2xl hover:-translate-y-1 text-center"
            >
              Start Diagnostic
            </a>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-brand-pink">
                <i className="fas fa-play text-xl"></i>
              </div>
              <div>
                <p className="font-black text-brand-deep text-lg leading-none">See Smoke Testing</p>
                <p className="text-slate-400 text-sm font-medium">90-second demo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block animate-[fadeIn_1s_ease-out]">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-pink/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600" 
                className="rounded-[2.5rem] shadow-2xl floating border-4 border-white"
                alt="Modern Bathroom"
              />
              <div className="bg-brand-pink p-8 rounded-[2.5rem] shadow-xl text-white">
                <p className="text-4xl font-black">100%</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Accuracy Rate</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-brand-cyan p-8 rounded-[2.5rem] shadow-xl text-white">
                <p className="text-4xl font-black">2.4k</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Local Homes Fixed</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600" 
                className="rounded-[2.5rem] shadow-2xl border-4 border-white"
                alt="Technician at work"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
