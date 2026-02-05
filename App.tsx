
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TeamPage } from './pages/TeamPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { Footer } from './components/FooterSection';

export default function App() {
  const [aiTip, setAiTip] = useState<string>("Loading digital insight...");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    async function fetchAiTip() {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: "Provide a very short (max 10 words) visionary slogan for hospitality IT automation.",
        });
        setAiTip(response.text?.replace(/[".]/g, '') || "Digitizing flavors for the modern era");
      } catch (error) {
        setAiTip("Efficiency is the ingredient that scales hospitality");
      }
    }
    fetchAiTip();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#000' : '#f8f9fa';
    document.body.style.color = isDarkMode ? '#fff' : '#1a202c';
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <LanguageProvider>
        <div className={`min-h-screen p-4 md:p-8 selection:bg-amber-500 selection:text-black transition-colors duration-500`}>
          <div className="bento-container">
            
            <Navbar 
              isDarkMode={isDarkMode}
              onToggleTheme={toggleTheme}
            />

            <Routes>
              <Route path="/" element={<HomePage isDarkMode={isDarkMode} aiTip={aiTip} />} />
              <Route path="/about" element={<AboutPage isDarkMode={isDarkMode} aiTip={aiTip} />} />
              <Route path="/services" element={<ServicesPage isDarkMode={isDarkMode} aiTip={aiTip} />} />
              <Route path="/projects" element={<ProjectsPage isDarkMode={isDarkMode} aiTip={aiTip} />} />
              <Route path="/team" element={<TeamPage isDarkMode={isDarkMode} aiTip={aiTip} />} />
              <Route path="/privacy" element={<PrivacyPage isDarkMode={isDarkMode} aiTip={aiTip} />} />
              <Route path="/terms" element={<TermsPage isDarkMode={isDarkMode} aiTip={aiTip} />} />
            </Routes>
          </div>
          
          {/* Footer */}
          <Footer isDarkMode={isDarkMode} />
        </div>
      </LanguageProvider>
    </Router>
  );
}
