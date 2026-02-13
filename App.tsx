
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import MaintenanceGuide from './components/MaintenanceGuide';
import FAQ from './components/FAQ';
import DiagnosticAssistant from './components/DiagnosticAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <div id="services" className="py-16 bg-white">
          <ServicesGrid />
        </div>

        <div id="maintenance" className="py-16 bg-gray-50">
          <MaintenanceGuide />
        </div>

        <div id="assistant" className="py-16 bg-white">
          <DiagnosticAssistant />
        </div>

        <div id="faq" className="py-16 bg-gray-50">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
