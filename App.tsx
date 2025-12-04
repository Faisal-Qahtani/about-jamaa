import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DetailedFeatures from './components/DetailedFeatures';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen font-sans selection:bg-accent selection:text-primary bg-background">
        <Navbar />
        <Hero />
        <DetailedFeatures />
        <Features />
        <CallToAction />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default App;