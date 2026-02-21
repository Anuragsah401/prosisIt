import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ThemeToggleButtonProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const ThemeToggleButton = ({
  isDarkMode,
  onToggleTheme,
}: ThemeToggleButtonProps) => {
  const { t } = useLanguage();

  return (
    <button
      onClick={onToggleTheme}
      className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
        isDarkMode
          ? 'bg-white/5 text-amber-500 hover:bg-white/10'
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}
      title={isDarkMode ? t('switchLight') : t('switchDark')}
    >
      {isDarkMode ? (
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
      ) : (
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
      )}
    </button>
  );
};
