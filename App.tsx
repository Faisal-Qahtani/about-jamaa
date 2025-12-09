import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DetailedFeatures from './components/DetailedFeatures';
import Team from './components/Team';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import ProjectNote from './components/ProjectNote';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen font-sans selection:bg-accent selection:text-primary bg-background">
        <Navbar />
        <Hero />
        <DetailedFeatures />
        <Features />
        <Team />
        <CallToAction />
        <ProjectNote />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default App;
