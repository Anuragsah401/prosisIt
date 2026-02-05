import React from 'react';
import { Home } from '../components/Home';
import { BottomSection } from '../components/BottomSection';

interface HomePageProps {
  isDarkMode: boolean;
  aiTip: string;
}

export function HomePage({ isDarkMode, aiTip }: HomePageProps) {
  return (
    <>
      <Home isDarkMode={isDarkMode} />
      <BottomSection isDarkMode={isDarkMode} aiTip={aiTip} />
    </>
  );
}
