import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectsProps {
  isDarkMode: boolean;
}

export function Projects({ isDarkMode }: ProjectsProps) {
  const { t } = useLanguage();
  const cardPrimary = isDarkMode ? 'bg-[#1e1e1e] border-white/5' : 'bg-white border-gray-100 shadow-sm';
  const cardSecondary = isDarkMode ? 'bg-[#2a2a2a] border-white/5' : 'bg-gray-100 border-gray-200';
  const cardAccent = isDarkMode ? 'bg-[#8c8c8c]' : 'bg-gray-300';
  const textTitle = isDarkMode ? 'text-white' : 'text-gray-900';
  const textBody = isDarkMode ? 'text-white/50' : 'text-gray-500';

  return (
    <>
      <div className={`col-span-12 lg:col-span-6 h-[500px] ${cardPrimary} rounded-bento relative overflow-hidden group border shadow-xl`}>
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000" />
        <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-black' : 'from-gray-900'} via-transparent to-transparent`}></div>
        <div className="absolute inset-0 p-12 flex flex-col justify-end">
          <div className="flex gap-2 mb-6">
            <span className="bg-amber-500 text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-amber-500/20">{t('projects.caseStudy')}</span>
          </div>
          <h3 className="text-5xl font-black text-white mb-4 tracking-tighter">{t('projects.grandBistro')}</h3>
          <p className="text-white/50 text-xl max-w-md">{t('projects.grandDesc')}</p>
        </div>
      </div>
      <div className={`col-span-12 lg:col-span-6 h-[500px] ${cardSecondary} rounded-bento relative overflow-hidden group border shadow-xl`}>
        <img src="https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000" />
        <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-black' : 'from-gray-900'} via-transparent to-transparent`}></div>
        <div className="absolute inset-0 p-12 flex flex-col justify-end">
          <div className="flex gap-2 mb-6">
            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>{t('projects.integration')}</span>
          </div>
          <h3 className="text-5xl font-black text-white mb-4 tracking-tighter">{t('projects.skyline')}</h3>
          <p className="text-white/50 text-xl max-w-md">{t('projects.skylineDesc')}</p>
        </div>
      </div>
      <div className={`${cardAccent} col-span-12 lg:col-span-4 rounded-bento p-12 border border-transparent flex flex-col justify-between transition-all`}>
        <h3 className={`text-5xl font-black tracking-tighter leading-none mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('projects.metrics')}</h3>
        <div className="space-y-10">
          <div>
            <div className={`font-black text-5xl mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>0.4s</div>
            <p className="opacity-60 font-bold uppercase tracking-widest text-xs">{t('projects.latency')}</p>
          </div>
          <div>
            <div className={`font-black text-5xl mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>99.99%</div>
            <p className="opacity-60 font-bold uppercase tracking-widest text-xs">{t('projects.uptime')}</p>
          </div>
        </div>
      </div>
      <div className={`${isDarkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'} col-span-12 lg:col-span-8 rounded-bento p-12 flex flex-col justify-center relative overflow-hidden shadow-2xl transition-all`}>
        <div className="text-[12rem] absolute top-[-2rem] left-[-2rem] font-serif italic opacity-[0.03] select-none pointer-events-none">"</div>
        <h3 className="text-4xl font-bold mb-10 leading-tight max-w-2xl relative z-10 italic">
          {t('projects.testimonial')}
        </h3>
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-16 h-16 rounded-3xl bg-slate-200 overflow-hidden shadow-xl border-4 border-white">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-black text-xl">{t('projects.testimonyName')}</p>
            <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">{t('projects.testimonyRole')}</p>
          </div>
        </div>
      </div>
    </>
  );
}
