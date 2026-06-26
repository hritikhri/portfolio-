import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import CurrentlyLearning from './components/CurrentlyLearning';
import Certifications from './components/Certifications';
import GithubSection from './components/GithubSection';
import BeyondCoding from './components/BeyondCoding';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';
import BuiltWithAI from './components/BuiltWithAI';
import CodingProfiles from './components/CodingProfiles';


const AppContent: React.FC = () => {
  return (
    <div
      className="relative min-h-screen transition-colors duration-300"
      style={{
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Journey />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <BuiltWithAI/>
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <CurrentlyLearning />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <GithubSection />
        <SectionDivider />
        <CodingProfiles />
        <SectionDivider />
        <BeyondCoding />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
