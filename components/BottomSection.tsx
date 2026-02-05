import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface BottomSectionProps {
  isDarkMode: boolean;
  aiTip: string;
}

export function BottomSection({ isDarkMode, aiTip }: BottomSectionProps) {
  const { t } = useLanguage();
  const cardPrimary = isDarkMode ? 'bg-[#1e1e1e] border-white/5' : 'bg-white border-gray-100 shadow-sm';
  const cardAccent = isDarkMode ? 'bg-[#8c8c8c]' : 'bg-gray-300';

  return (
    <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
      <div className={`${isDarkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'} md:col-span-3 rounded-bento p-10 flex flex-col justify-center border border-transparent shadow-2xl transition-all duration-500`}>
        <div className="text-5xl font-black mb-2 tracking-tighter">+129k</div>
        <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">{t('bottom.deployments')}</div>
      </div>
      
      <div className={`${cardAccent} md:col-span-4 rounded-bento p-8 flex items-center gap-6 border border-transparent group transition-all duration-500`}>
        <div className="flex-1">
          <h4 className={`text-xl font-black leading-tight uppercase tracking-tighter ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('bottom.expertise')}</h4>
        </div>
        <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-2xl shrink-0 group-hover:rotate-6 transition-transform">
           <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className={`${cardPrimary} md:col-span-5 rounded-bento p-10 flex flex-col justify-center border overflow-hidden relative shadow-2xl transition-all duration-500`}>
        <div className="flex items-center gap-4 z-10">
            <div className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-ping"></div>
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.3em]">{t('bottom.aiStream')}</span>
        </div>
        <p className={`text-2xl font-semibold mt-5 z-10 italic leading-relaxed ${isDarkMode ? 'text-white/90' : 'text-gray-700'}`}>
           "{aiTip}"
        </p>
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 blur-[100px]"></div>
      </div>
    </div>
  );
}
