import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { AnimatedBox } from './AnimatedBox';

interface HomeProps {
  isDarkMode: boolean;
}

export function Home({ isDarkMode }: HomeProps) {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <>
      <div className="col-span-12 lg:col-span-5 grid grid-rows-6 gap-4 h-[700px]">
        <AnimatedBox
          className={`row-span-2 ${isDarkMode ? 'bg-[#2a2a2a] border-white/5' : 'bg-gray-100 border-gray-200'} rounded-bento p-10 flex items-center border transition-all duration-500`}
          index={0}
        >
           <h2 className={`text-4xl md:text-5xl font-semibold leading-tight ${isDarkMode ? 'text-white/90' : 'text-gray-800'}`}>
             {t('home.secure')} <br />{t('home.automated')} <br />{t('home.global')}
           </h2>
        </AnimatedBox>
        <AnimatedBox
          className={`row-span-4 ${isDarkMode ? 'bg-[#8c8c8c]' : 'bg-gray-300'} rounded-bento p-10 flex flex-col justify-between border border-transparent relative overflow-hidden group transition-all duration-500`}
          index={1}
        >
          <div className="z-10">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-clip leading-tight break-words ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {t('home.title')}
            </h1>
            <p className={`${isDarkMode ? 'text-white/80' : 'text-gray-700'} text-lg max-w-md mb-8 leading-relaxed`}>
              {t('home.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => navigate('/services')} className={`${isDarkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'} px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-xl`}>
                {t('home.getStarted')} 
                <svg className="w-4 h-4 rotate-[-45deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </div>
          <div className={`absolute -bottom-10 -right-10 text-[10rem] font-bold ${isDarkMode ? 'text-white/5' : 'text-black/5'} pointer-events-none select-none`}>pro</div>
        </AnimatedBox>
      </div>

      <AnimatedBox
        className="col-span-12 lg:col-span-7 h-[700px] relative rounded-bento overflow-hidden group shadow-2xl"
        index={2}
      >
        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop" alt="Abstract Art" className="w-full h-full object-cover brightness-75 transition-transform duration-1000 group-hover:scale-110" />
        <div className={`absolute top-8 right-8 w-64 ${isDarkMode ? 'bg-white/90 backdrop-blur-xl' : 'bg-white/95'} rounded-[2rem] p-6 text-black animate-subtle shadow-2xl`}>
          <div className="w-full h-32 rounded-2xl mb-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-bold leading-tight mb-2">{t('home.trendTitle')}</h3>
          <p className="text-xs text-black/60 mb-4 leading-relaxed italic">{t('home.trendDesc')}</p>
        </div>
        <div className={`absolute bottom-8 right-8 w-64 ${isDarkMode ? 'bg-[#1e1e1e]/90 backdrop-blur-xl' : 'bg-gray-900/95'} rounded-[2rem] p-6 text-white border border-white/10 shadow-2xl transition-all duration-500`}>
          <h3 className="text-2xl font-bold mb-2">{t('home.talkTitle')}</h3>
          <p className="text-sm text-white/50 mb-6">{t('home.talkDesc')}</p>
          <div className="flex gap-4">
             <button className="bg-amber-500 text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-amber-500/20">{t('home.connect')}</button>
          </div>
        </div>
      </AnimatedBox>
    </>
  );
}
