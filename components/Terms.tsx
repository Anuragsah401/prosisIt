import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface TermsProps {
  isDarkMode: boolean;
}

export function Terms({ isDarkMode }: TermsProps) {
  const { t } = useLanguage();
  const cardPrimary = isDarkMode ? 'bg-[#1e1e1e] border-white/5' : 'bg-white border-gray-100 shadow-sm';
  const cardSecondary = isDarkMode ? 'bg-[#2a2a2a] border-white/5' : 'bg-gray-100 border-gray-200';
  const cardAccent = isDarkMode ? 'bg-[#8c8c8c]' : 'bg-gray-300';
  const textTitle = isDarkMode ? 'text-white' : 'text-gray-900';
  const textBody = isDarkMode ? 'text-white/50' : 'text-gray-500';

  return (
    <>
      <div className={`${cardAccent} col-span-12 rounded-bento p-12 border border-transparent flex flex-col justify-center min-h-[300px] transition-all`}>
        <h1 className={`text-6xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6 tracking-tighter`}>{t('terms.title')}</h1>
        <p className={`${isDarkMode ? 'text-white/80' : 'text-gray-800'} text-xl font-medium`}>{t('terms.subtitle')}</p>
      </div>
      <div className={`${cardPrimary} col-span-12 lg:col-span-8 rounded-bento p-12 border transition-all`}>
        <div className="mb-12">
            <h3 className={`text-3xl font-bold ${textTitle} mb-6`}>{t('terms.license')}</h3>
            <p className={`${textBody} text-lg leading-relaxed`}>
              {t('terms.licenseDesc')}
            </p>
        </div>
        <div>
            <h3 className={`text-3xl font-bold ${textTitle} mb-6`}>{t('terms.uptime')}</h3>
            <p className={`${textBody} text-lg leading-relaxed`}>
              {t('terms.uptimeDesc')}
            </p>
        </div>
      </div>
      <div className={`${cardSecondary} col-span-12 lg:col-span-4 rounded-bento p-12 border flex flex-col justify-between transition-all`}>
        <div className="mb-12">
          <h3 className={`text-3xl font-bold ${textTitle} mb-6`}>{t('terms.billing')}</h3>
          <p className={`${textBody} text-lg`}>{t('terms.billingDesc')}</p>
        </div>
        <div className={`pt-10 border-t ${isDarkMode ? 'border-white/5' : 'border-black/5'}`}>
           <h3 className={`text-3xl font-bold ${textTitle} mb-6`}>{t('terms.support')}</h3>
           <p className={`${textBody} text-lg`}>{t('terms.supportDesc')}</p>
        </div>
      </div>
    </>
  );
}
