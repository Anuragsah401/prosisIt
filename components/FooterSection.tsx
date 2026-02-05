import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  isDarkMode: boolean;
}

export function Footer({ isDarkMode }: FooterProps) {
  const location = useLocation();
  const currentPage = location.pathname.slice(1) || 'home';
  const { t } = useLanguage();
  return (
    <div className={`max-w-[1600px] mx-auto mt-16 pb-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t ${isDarkMode ? 'border-white/5' : 'border-gray-200'} pt-8`}>
      <div className="flex items-center gap-3">
         <div className={`w-6 h-6 ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'} rounded flex items-center justify-center text-[10px] font-black`}>P</div>
         <p className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-white/20' : 'text-gray-400'}`}>{t('footer.copyright')}</p>
      </div>
      <div className="flex gap-10">
          {['privacy', 'terms'].map((page) => (
            <Link 
              key={page}
              to={`/${page}`}
              className={`text-[10px] font-bold uppercase tracking-widest transition-all ${currentPage === page ? 'text-amber-500' : (isDarkMode ? 'text-white/20 hover:text-white' : 'text-gray-400 hover:text-gray-900')}`}
            >
              {page === 'privacy' ? t('footer.privacy') : t('footer.terms')}
            </Link>
          ))}
      </div>
    </div>
  );
}
