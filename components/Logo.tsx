
import React from 'react';

export const Logo = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <div className="flex items-center space-x-3 group cursor-pointer">
    <div className={`relative w-10 h-10 ${isDarkMode ? 'bg-white' : 'bg-gray-900'} rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
      <svg viewBox="0 0 24 24" className={`w-6 h-6 ${isDarkMode ? 'text-black' : 'text-white'} fill-current`} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" />
      </svg>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-current"></div>
    </div>
    <span className={`text-2xl font-extrabold tracking-tighter ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      prosys<span className="text-amber-500">IT</span>
    </span>
  </div>
);
