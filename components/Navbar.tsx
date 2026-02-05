
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar = ({ isDarkMode, onToggleTheme }: NavbarProps) => {
  const location = useLocation();
  const currentPage = location.pathname.slice(1) || 'home';
  const { language, toggleLanguage, t } = useLanguage();
  
  // Navigation items with translation keys
  const navItems = [
    { id: 'home', labelKey: 'nav.home' },
    { id: 'about', labelKey: 'nav.about' },
    { id: 'services', labelKey: 'nav.services' },
    { id: 'projects', labelKey: 'nav.projects' },
    { id: 'team', labelKey: 'nav.team' },
  ];

  // Social items with translation keys
  const socialItems = [
    { id: 'instagram', key: 'nav.instagram' },
    { id: 'facebook', key: 'nav.facebook' },
    { id: 'linkedin', key: 'nav.linkedin' },
  ];

  // Style constants for better readability
  const bgColor = isDarkMode ? 'bg-[#1e1e1e]' : 'bg-white shadow-xl';
  const utilityBg = isDarkMode ? 'bg-[#1e1e1e]' : 'bg-gray-100';
  const textColor = isDarkMode ? 'text-white/50' : 'text-gray-500';
  const buttonHoverColor = isDarkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100';
  const activeBg = isDarkMode ? 'bg-white text-black' : 'bg-gray-900 text-white';
  const inactiveBg = isDarkMode ? 'text-white/40 hover:text-white' : 'text-gray-500 hover:text-gray-900';

  return (
    <div className="col-span-12 flex flex-col gap-4 mb-2">
      {/* Top Utility Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Social Links */}
        <div className="flex gap-2">
          {socialItems.map((social) => (
            <a 
              key={social.id} 
              href="#" 
              className={`flex items-center gap-3 px-5 py-2.5 ${utilityBg} rounded-full text-[10px] font-bold uppercase tracking-widest ${textColor} hover:text-amber-500 transition-all border ${isDarkMode ? 'border-white/5' : 'border-gray-200'}`}
            >
              {t(social.key)}
              <svg className="w-3 h-3 rotate-[-45deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          ))}
        </div>
        
        {/* Language Toggle Sliding Button */}
        <div className={`flex items-center ${utilityBg} rounded-full p-1 border ${isDarkMode ? 'border-white/5' : 'border-gray-200'}`}>
          <button
            onClick={() => language !== 'en' && toggleLanguage()}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-bold uppercase tracking-widest text-xs ${
              language === 'en'
                ? isDarkMode ? 'bg-white text-black shadow-lg' : 'bg-gray-900 text-white shadow-lg'
                : `${textColor} hover:text-amber-500`
            }`}
            title="English"
          >
            <span>🇬🇧</span>
            <span>EN</span>
          </button>
          
          <button
            onClick={() => language !== 'da' && toggleLanguage()}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-bold uppercase tracking-widest text-xs ${
              language === 'da'
                ? isDarkMode ? 'bg-white text-black shadow-lg' : 'bg-gray-900 text-white shadow-lg'
                : `${textColor} hover:text-amber-500`
            }`}
            title="Danish"
          >
            <span>🇩🇰</span>
            <span>DA</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`${bgColor} rounded-full flex flex-wrap items-center p-2 border ${isDarkMode ? 'border-white/5' : 'border-gray-100'} transition-all duration-500`}>
        <div className={`hidden md:flex items-center ml-2`}>
          <Link to="/">
            <Logo isDarkMode={isDarkMode} />
          </Link>
        </div>
        
        <div className="flex-1 flex justify-center lg:justify-end items-center gap-1 px-4 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id === 'home' ? '/' : `/${item.id}`}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                currentPage === item.id || (item.id === 'home' && currentPage === '') 
                ? activeBg
                : `${inactiveBg} ${buttonHoverColor}`
              }`}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-4 ml-2">
          {/* Theme Toggle Button */}
          <button 
            onClick={onToggleTheme}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${isDarkMode ? 'bg-white/5 text-amber-500 hover:bg-white/10' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
            title={isDarkMode ? t('switchLight') : t('switchDark')}
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z"/></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
