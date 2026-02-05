import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface AboutProps {
  isDarkMode: boolean;
}

export function About({ isDarkMode }: AboutProps) {
  const { t } = useLanguage();
  const cardPrimary = isDarkMode ? 'bg-[#1e1e1e] border-white/5' : 'bg-white border-gray-100 shadow-sm';
  const cardSecondary = isDarkMode ? 'bg-[#2a2a2a] border-white/5' : 'bg-gray-100 border-gray-200';
  const cardAccent = isDarkMode ? 'bg-[#8c8c8c]' : 'bg-gray-300';
  const textTitle = isDarkMode ? 'text-white' : 'text-gray-900';
  const textBody = isDarkMode ? 'text-white/50' : 'text-gray-500';

  return (
    <>
      <div className={`col-span-12 lg:col-span-8 ${cardPrimary} rounded-bento p-12 border min-h-[500px] flex flex-col justify-center relative overflow-hidden transition-all duration-500`}>
        <div className={`absolute top-0 right-0 w-64 h-64 bg-amber-500/${isDarkMode ? '5' : '10'} blur-[120px]`}></div>
        <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-6 block">{t('about.legacy')}</span>
        <h1 className={`text-5xl md:text-7xl font-bold ${textTitle} mb-8 leading-tight`}>
          {t('about.title')} <br/><span className={isDarkMode ? 'text-[#8c8c8c]' : 'text-gray-400'}>{t('about.titleAlt')}</span> {t('about.titleEnd')}
        </h1>
        <p className={`${isDarkMode ? 'text-white/60' : 'text-gray-600'} text-xl max-w-2xl leading-relaxed`}>
          {t('about.description')}
        </p>
      </div>
      <div className={`col-span-12 lg:col-span-4 h-[500px] rounded-bento overflow-hidden relative border ${isDarkMode ? 'border-white/5' : 'border-gray-100'} group transition-all`}>
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-700" />
        <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-black' : 'from-gray-200'} via-transparent to-transparent`}></div>
        <div className="absolute bottom-10 left-10">
          <div className={`text-6xl font-black ${textTitle} mb-1`}>42+</div>
          <p className="text-amber-500 font-bold uppercase tracking-widest text-xs">{t('about.engineers')}</p>
        </div>
      </div>
      <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={`${cardSecondary} p-12 rounded-bento border hover:translate-y-[-4px] transition-all`}>
          <h3 className={`text-3xl font-bold ${textTitle} mb-6`}>{t('about.mission')}</h3>
          <p className={`${textBody} text-lg`}>{t('about.missionDesc')}</p>
        </div>
        <div className={`${cardAccent} p-12 rounded-bento border border-transparent hover:translate-y-[-4px] transition-all`}>
          <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>{t('about.vision')}</h3>
          <p className={`${isDarkMode ? 'text-white/80' : 'text-gray-700'} text-lg`}>{t('about.visionDesc')}</p>
        </div>
        <div className={`${isDarkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'} p-12 rounded-bento border border-transparent hover:translate-y-[-4px]  transition-all`}>
          <h3 className="text-3xl font-bold mb-6">{t('about.values')}</h3>
          <p className={`font-medium text-lg italic opacity-70`}>{t('about.valuesDesc')}</p>
        </div>
      </div>
    </>
  );
}
