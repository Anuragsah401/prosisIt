import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TeamProps {
  isDarkMode: boolean;
}

export function Team({ isDarkMode }: TeamProps) {
  const { t } = useLanguage();
  const cardPrimary = isDarkMode ? 'bg-[#1e1e1e] border-white/5' : 'bg-white border-gray-100 shadow-sm';
  const cardAccent = isDarkMode ? 'bg-[#8c8c8c]' : 'bg-gray-300';
  const cardSecondary = isDarkMode ? 'bg-[#2a2a2a] border-white/5' : 'bg-gray-100 border-gray-200';

  const members = [
    { nameKey: 'team.alexRole', roleKey: 'team.alexRole', image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop", descKey: "team.alexDesc", span: "col-span-12 lg:col-span-7", color: cardPrimary },
    { name: "Sarah Chen", roleKey: 'team.sarahRole', image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop", descKey: "team.sarahDesc", span: "col-span-12 lg:col-span-5", color: cardAccent },
    { name: "Jamal Williams", roleKey: 'team.jamalRole', image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop", descKey: "team.jamalDesc", span: "col-span-12 lg:col-span-4", color: cardSecondary },
    { name: "Emily Thompson", roleKey: 'team.emilyRole', image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop", descKey: "team.emilyDesc", span: "col-span-12 lg:col-span-4", color: isDarkMode ? 'bg-white text-black' : 'bg-gray-900 text-white' },
    { name: "David García", roleKey: 'team.davidRole', image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop", descKey: "team.davidDesc", span: "col-span-12 lg:col-span-4", color: cardPrimary }
  ];

  return (
    <>
      <div className={`${isDarkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'} col-span-12 rounded-bento p-12 flex flex-col justify-center min-h-[300px] mb-4 shadow-2xl transition-all`}>
        <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-4 block">{t('team.header')}</span>
        <h1 className="text-6xl font-black tracking-tighter leading-none uppercase">{t('team.title')} <br/>{t('team.titleAlt')}</h1>
        <p className="opacity-40 text-xl mt-6 max-w-2xl">{t('team.description')}</p>
      </div>
      
      {members.map((member, i) => (
        <div key={i} className={`${member.span} ${member.color} rounded-bento p-10 border group relative overflow-hidden flex flex-col justify-between h-[450px] transition-all shadow-xl`}>
          <div className="flex justify-between items-start z-10">
            <div>
              <h3 className="text-3xl font-black tracking-tighter uppercase">{member.name || t(member.nameKey || '')}</h3>
              <p className={`font-bold uppercase tracking-widest text-xs mt-1 text-amber-500`}>{t(member.roleKey)}</p>
            </div>
            <div className={`w-20 h-20 rounded-2xl overflow-hidden shadow-2xl border-2 ${isDarkMode ? 'border-white/20' : 'border-black/10'}`}>
              <img src={member.image} className="w-full h-full object-cover" alt={member.name} />
            </div>
          </div>
          
          <p className={`text-lg max-w-[200px] leading-snug z-10 opacity-60`}>
            {t(member.descKey)}
          </p>

          <div className="absolute -bottom-10 -right-10 text-[12rem] font-black opacity-[0.03] select-none pointer-events-none group-hover:scale-110 transition-transform duration-700">
            {(member.name || t(member.nameKey || '')).split(' ')[0]}
          </div>
        </div>
      ))}
    </>
  );
}
