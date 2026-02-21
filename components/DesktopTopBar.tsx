import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface DesktopTopBarProps {
  isDarkMode: boolean;
}

interface SocialItem {
  id: string;
  key: string;
}

export const DesktopTopBar = ({ isDarkMode }: DesktopTopBarProps) => {
  const { language, toggleLanguage, t } = useLanguage();

  const socialItems: SocialItem[] = [
    { id: 'instagram', key: 'nav.instagram' },
    { id: 'facebook', key: 'nav.facebook' },
    { id: 'linkedin', key: 'nav.linkedin' },
  ];

  return (
    <div className="hidden md:flex flex-wrap items-center justify-between gap-4">
      {/* Social Links */}
      <div className="flex gap-2">
        {socialItems.map((social) => (
          <a
            key={social.id}
            href="#"
            className={`flex items-center gap-3 px-5 py-2.5 ${
              isDarkMode ? 'bg-[#1e1e1e]' : 'bg-gray-100'
            } rounded-full text-[10px] font-bold uppercase tracking-widest ${
              isDarkMode ? 'text-white/50' : 'text-gray-500'
            } hover:text-amber-500 transition-all border ${
              isDarkMode ? 'border-white/5' : 'border-gray-200'
            }`}
          >
            {t(social.key)}
            <svg
              className="w-3 h-3 rotate-[-45deg]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        ))}
      </div>

      {/* Language Toggle Sliding Button */}
      <div
        className={`flex items-center ${
          isDarkMode ? 'bg-[#1e1e1e]' : 'bg-gray-100'
        } rounded-full p-1 border ${isDarkMode ? 'border-white/5' : 'border-gray-200'}`}
      >
        <button
          onClick={() => language !== 'en' && toggleLanguage()}
          className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-bold uppercase tracking-widest text-xs ${
            language === 'en'
              ? isDarkMode
                ? 'bg-white text-black shadow-lg'
                : 'bg-gray-900 text-white shadow-lg'
              : `${isDarkMode ? 'text-white/50' : 'text-gray-500'} hover:text-amber-500`
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
              ? isDarkMode
                ? 'bg-white text-black shadow-lg'
                : 'bg-gray-900 text-white shadow-lg'
              : `${isDarkMode ? 'text-white/50' : 'text-gray-500'} hover:text-amber-500`
          }`}
          title="Danish"
        >
          <span>🇩🇰</span>
          <span>DA</span>
        </button>
      </div>
    </div>
  );
};
