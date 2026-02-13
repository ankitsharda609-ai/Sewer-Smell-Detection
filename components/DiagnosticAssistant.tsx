
import React, { useState, useRef, useEffect } from 'react';
import { getDiagnosticResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const DiagnosticAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hi! I'm Rick's AI helper. I've studied over 10 years of Rick's smoke testing field notes in Fayetteville. Describe your issue—I'm here to help you breathe easy again." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const botResponse = await getDiagnosticResponse(userMsg);
    
    setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
    setIsLoading(false);
  };

  return (
    <section id="assistant" className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <div className="inline-block px-4 py-1.5 bg-brand-pink/10 border border-brand-pink/20 rounded-full text-brand-pink font-black text-xs mb-6 tracking-[0.3em] uppercase">
            24/7 Virtual Expert
          </div>
          <h2 className="text-6xl font-serif text-brand-deep italic leading-tight mb-8">
            Diagnostic <span className="text-gradient underline decoration-brand-cyan">on Demand</span>
          </h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed mb-10">
            Unsure if you have a dangerous leak? Our AI is trained on local NWA plumbing anomalies. Get an instant assessment before you book a truck.
          </p>
          <div className="p-8 bg-brand-cyan/5 rounded-3xl border border-brand-cyan/20 flex gap-6">
             <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-cyan shadow-lg">
                <i className="fas fa-biohazard text-2xl"></i>
             </div>
             <div>
                <p className="font-black text-brand-deep text-lg mb-1">Safety First Protocol</p>
                <p className="text-slate-500 text-sm font-medium">If the smell is sharp and metallic, open all windows immediately.</p>
             </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="cyan-pink-gradient p-1.5 rounded-[3.5rem] shadow-2xl shadow-brand-cyan/20">
            <div className="bg-white rounded-[3.2rem] overflow-hidden flex flex-col h-[700px]">
              {/* Header */}
              <div className="bg-brand-deep text-white p-10 flex items-center gap-6">
                <div className="w-16 h-16 cyan-pink-gradient rounded-2xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-brain text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-black text-2xl tracking-tighter">OdorBot v2.0</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse"></span>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Active Diagnostic Node</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div ref={scrollRef} className="flex-grow overflow-y-auto p-10 space-y-10 bg-slate-50/50">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-6 rounded-[2.5rem] text-base leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-brand-deep text-white rounded-br-none' 
                        : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none font-medium'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start animate-pulse">
                    <div className="bg-white text-slate-400 p-6 rounded-[2.5rem] border border-slate-100 rounded-bl-none flex items-center gap-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                        <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                        <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                      </div>
                      Rick's data is loading...
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="p-8 bg-white border-t border-slate-100 flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about a smell..."
                  className="flex-grow p-6 bg-slate-50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-cyan/20 border-2 border-transparent transition-all"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="cyan-pink-gradient text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl hover:scale-105 transition-all disabled:opacity-50"
                >
                  <i className="fas fa-paper-plane text-xl"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticAssistant;
