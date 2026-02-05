import React from 'react';
import { About } from '../components/About';
import { BottomSection } from '../components/BottomSection';

interface AboutPageProps {
  isDarkMode: boolean;
  aiTip: string;
}

export function AboutPage({ isDarkMode, aiTip }: AboutPageProps) {
  return (
    <>
      <About isDarkMode={isDarkMode} />
      <BottomSection isDarkMode={isDarkMode} aiTip={aiTip} />
    </>
  );
}
