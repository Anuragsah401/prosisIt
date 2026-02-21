import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  currentPage: string;
}

interface NavItem {
  id: string;
  labelKey: string;
}

interface SocialItem {
  id: string;
  key: string;
}

export const MobileSidebar = ({
  isOpen,
  onClose,
  isDarkMode,
  onToggleTheme,
  currentPage,
}: MobileSidebarProps) => {
  const { language, toggleLanguage, t } = useLanguage();

  const navItems: NavItem[] = [
    { id: 'home', labelKey: 'nav.home' },
    { id: 'about', labelKey: 'nav.about' },
    { id: 'services', labelKey: 'nav.services' },
    { id: 'projects', labelKey: 'nav.projects' },
    { id: 'team', labelKey: 'nav.team' },
  ];

  const socialItems: SocialItem[] = [
    { id: 'instagram', key: 'nav.instagram' },
    { id: 'facebook', key: 'nav.facebook' },
    { id: 'linkedin', key: 'nav.linkedin' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-screen w-64 ${
          isDarkMode ? 'bg-[#1e1e1e]' : 'bg-white'
        } border-l ${
          isDarkMode ? 'border-white/5' : 'border-gray-200'
        } transform transition-transform duration-300 z-40 md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header with Logo and Close Button */}
        <div
          className="flex justify-between items-center p-4 border-b"
          style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : '#e5e7eb' }}
        >
          <Link to="/" onClick={onClose}>
            <Logo isDarkMode={isDarkMode} />
          </Link>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-all ${
              isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id === 'home' ? '/' : `/${item.id}`}
                onClick={onClose}
                className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                  currentPage === item.id || (item.id === 'home' && currentPage === '')
                    ? isDarkMode
                      ? 'bg-white text-black'
                      : 'bg-gray-900 text-white'
                    : isDarkMode
                    ? 'text-white/60 hover:text-white hover:bg-white/5'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </div>
        </nav>

        {/* Social Items */}
        <div
          className={`border-t p-4 ${
            isDarkMode ? 'border-white/5' : 'border-gray-200'
          }`}
        >
          <p
            className={`text-xs font-bold uppercase tracking-widest mb-3 ${
              isDarkMode ? 'text-white/40' : 'text-gray-500'
            }`}
          >
            Follow Us
          </p>
          <div className="flex flex-col gap-2">
            {socialItems.map((social) => (
              <a
                key={social.id}
                href="#"
                className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-all ${
                  isDarkMode
                    ? 'bg-white/5 hover:bg-white/10 text-white/60 hover:text-amber-500'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-amber-500'
                }`}
              >
                <span className="text-sm font-semibold">{t(social.key)}</span>
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
        </div>

        {/* Bottom Utilities */}
        <div
          className={`border-t p-4 flex flex-col gap-3 ${
            isDarkMode ? 'border-white/5' : 'border-gray-200'
          }`}
        >
          {/* Language Toggle */}
          <div
            className={`flex items-center gap-2 ${
              isDarkMode ? 'bg-white/5' : 'bg-gray-100'
            } rounded-lg p-1`}
          >
            <button
              onClick={() => {
                if (language !== 'en') toggleLanguage();
              }}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded transition-all duration-300 font-bold text-xs ${
                language === 'en'
                  ? isDarkMode
                    ? 'bg-white text-black shadow-lg'
                    : 'bg-gray-900 text-white shadow-lg'
                  : `${
                      isDarkMode
                        ? 'text-white/40 hover:text-amber-500'
                        : 'text-gray-500 hover:text-amber-500'
                    }`
              }`}
            >
              <span>🇬🇧</span>
              <span>EN</span>
            </button>

            <button
              onClick={() => {
                if (language !== 'da') toggleLanguage();
              }}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded transition-all duration-300 font-bold text-xs ${
                language === 'da'
                  ? isDarkMode
                    ? 'bg-white text-black shadow-lg'
                    : 'bg-gray-900 text-white shadow-lg'
                  : `${
                      isDarkMode
                        ? 'text-white/40 hover:text-amber-500'
                        : 'text-gray-500 hover:text-amber-500'
                    }`
              }`}
            >
              <span>🇩🇰</span>
              <span>DA</span>
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold transition-all ${
              isDarkMode
                ? 'bg-white/5 text-amber-500 hover:bg-white/10'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
            title={isDarkMode ? t('switchLight') : t('switchDark')}
          >
            {isDarkMode ? (
              <>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z"
                  />
                </svg>
                <span>{t('switchLight')}</span>
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
                <span>{t('switchDark')}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};
