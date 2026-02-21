import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface DesktopNavItemsProps {
  isDarkMode: boolean;
  currentPage: string;
}

interface NavItem {
  id: string;
  labelKey: string;
}

export const DesktopNavItems = ({
  isDarkMode,
  currentPage,
}: DesktopNavItemsProps) => {
  const { t } = useLanguage();

  const navItems: NavItem[] = [
    { id: 'home', labelKey: 'nav.home' },
    { id: 'about', labelKey: 'nav.about' },
    { id: 'services', labelKey: 'nav.services' },
    { id: 'projects', labelKey: 'nav.projects' },
    { id: 'team', labelKey: 'nav.team' },
  ];

  return (
    <div className="hidden md:flex flex-1 justify-center lg:justify-end items-center gap-1 px-4 overflow-x-auto no-scrollbar">
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.id === 'home' ? '/' : `/${item.id}`}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
            currentPage === item.id || (item.id === 'home' && currentPage === '')
              ? isDarkMode
                ? 'bg-white text-black'
                : 'bg-gray-900 text-white'
              : isDarkMode
              ? 'text-white/40 hover:text-white hover:bg-white/5'
              : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          {t(item.labelKey)}
        </Link>
      ))}
    </div>
  );
};
