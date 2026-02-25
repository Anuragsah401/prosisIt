import React from 'react';
import { ChevronRight, Smartphone, BarChart3 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AnimatedBox } from './AnimatedBox';

interface ServicesProps {
  isDarkMode: boolean;
}

export function Services({ isDarkMode }: ServicesProps) {
  const { t } = useLanguage();
  const cardPrimary = isDarkMode ? 'bg-[#1e1e1e] border-white/5' : 'bg-white border-gray-100 shadow-sm';
  const cardAccent = isDarkMode ? 'bg-[#8c8c8c]' : 'bg-gray-300';
  const textTitle = isDarkMode ? 'text-white' : 'text-gray-900';
  const textBody = isDarkMode ? 'text-white/50' : 'text-gray-500';

  return (
    <>
      <AnimatedBox
        className={`${cardAccent} col-span-12 lg:col-span-4 rounded-bento p-12 border border-transparent h-[600px] flex flex-col justify-between group transition-all`}
        index={0}
      >
        <h2 className={`text-5xl font-black leading-none tracking-tighter ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('services.customStacks')}</h2>
        <div className="space-y-4">
          {[t('services.pos'), t('services.kds'), t('services.hotel')].map((service, idx) => (
            <div key={idx} className={`flex justify-between items-center py-5 border-b ${isDarkMode ? 'border-white/20' : 'border-black/10'} group/item cursor-pointer`}>
              <span className={`font-bold text-xl group-hover/item:translate-x-2 transition-transform ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{service}</span>
              <div className={`w-8 h-8 rounded-full border ${isDarkMode ? 'border-white/20' : 'border-black/20'} flex items-center justify-center group-hover/item:bg-amber-500 group-hover/item:text-black transition-all`}>
                <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </AnimatedBox>
      <div className="col-span-12 lg:col-span-8 grid grid-cols-1 gap-4">
        {[
          { title: t('services.mobileOrdering'), icon: Smartphone, bg: cardPrimary },
          { title: t('services.dataAnalytics'), icon: BarChart3, bg: isDarkMode ? 'bg-[#2a2a2a] border-white/5' : 'bg-gray-100 border-gray-200' }
        ].map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <React.Fragment key={`service-${idx}`}>
              <AnimatedBox
                className={`${item.bg} rounded-bento p-10 border flex flex-col justify-center min-h-[300px] transition-all duration-500 shadow-xl`}
                index={idx + 1}
              >
                <div className="w-16 h-16 bg-amber-500 rounded-3xl flex items-center justify-center mb-8 shadow-lg shadow-amber-500/20">
                  <IconComponent size={32} className="text-black" />
                </div>
                <h3 className={`text-3xl font-bold mb-4 ${textTitle}`}>{item.title}</h3>
                <p className={`${textBody} text-lg leading-relaxed`}>{t('services.mobileDesc')}</p>
              </AnimatedBox>
            </React.Fragment>
          );
        })}
        <AnimatedBox
          className={`${isDarkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'} rounded-bento p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group shadow-2xl transition-all`}
          index={3}
        >
          <div className="max-w-lg relative z-10">
            <h3 className="text-4xl font-black mb-6 tracking-tighter uppercase">{t('services.ready')}</h3>
            <p className="opacity-60 font-medium text-xl">{t('services.readyDesc')}</p>
          </div>
          <button className={`relative z-10 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl`}>{t('services.getQuote')}</button>
          <div className={`absolute right-[-10%] bottom-[-50%] text-[15rem] font-black ${isDarkMode ? 'text-black/[0.03]' : 'text-white/[0.03]'} select-none pointer-events-none`}>SCALE</div>
        </AnimatedBox>
      </div>
    </>
  );
}
