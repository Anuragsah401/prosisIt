import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface PrivacyProps {
  isDarkMode: boolean;
}

export function Privacy({ isDarkMode }: PrivacyProps) {
  const { t } = useLanguage();
  const cardPrimary = isDarkMode ? 'bg-[#1e1e1e] border-white/5' : 'bg-white border-gray-100 shadow-sm';
  const cardSecondary = isDarkMode ? 'bg-[#2a2a2a] border-white/5' : 'bg-gray-100 border-gray-200';
  const cardAccent = isDarkMode ? 'bg-[#8c8c8c]' : 'bg-gray-300';
  const textTitle = isDarkMode ? 'text-white' : 'text-gray-900';
  const textBody = isDarkMode ? 'text-white/50' : 'text-gray-500';

  return (
    <>
      <div className={`${cardPrimary} col-span-12 rounded-bento p-12 border flex flex-col justify-center min-h-[300px] transition-all`}>
        <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-6 block">{t('privacy.header')}</span>
        <h1 className={`text-6xl font-black ${textTitle} mb-6 tracking-tighter`}>{t('privacy.title')}</h1>
        <p className={`${textBody} text-xl`}>{t('privacy.lastUpdated')}</p>
      </div>
      <div className={`${cardSecondary} col-span-12 lg:col-span-6 rounded-bento p-12 border transition-all`}>
        <h3 className={`text-3xl font-bold ${textTitle} mb-8`}>{t('privacy.dataArchitecture')}</h3>
        <ul className={`space-y-6 ${textBody} text-lg leading-relaxed`}>
          <li className="flex gap-4"><span className="text-amber-500 font-bold">01</span> {t('privacy.point1')}</li>
          <li className="flex gap-4"><span className="text-amber-500 font-bold">02</span> {t('privacy.point2')}</li>
          <li className="flex gap-4"><span className="text-amber-500 font-bold">03</span> {t('privacy.point3')}</li>
        </ul>
      </div>
      <div className={`${cardAccent} col-span-12 lg:col-span-6 rounded-bento p-12 border border-transparent flex flex-col justify-between transition-all`}>
        <div>
          <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-8`}>{t('privacy.aiEthics')}</h3>
          <p className={`${isDarkMode ? 'text-white/90' : 'text-gray-800'} text-xl leading-relaxed mb-10 font-medium`}>
            {t('privacy.aiDesc')}
          </p>
        </div>
        <div className={`p-6 ${isDarkMode ? 'bg-black/30' : 'bg-white/50'} rounded-3xl border ${isDarkMode ? 'border-white/10' : 'border-black/5'} opacity-60 text-sm font-bold uppercase tracking-widest text-center`}>
          {t('privacy.humanRight')}
        </div>
      </div>
    </>
  );
}
