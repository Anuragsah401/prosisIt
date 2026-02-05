import React from 'react';
import { Services } from '../components/Services';
import { BottomSection } from '../components/BottomSection';

interface ServicesPageProps {
  isDarkMode: boolean;
  aiTip: string;
}

export function ServicesPage({ isDarkMode, aiTip }: ServicesPageProps) {
  return (
    <>
      <Services isDarkMode={isDarkMode} />
      <BottomSection isDarkMode={isDarkMode} aiTip={aiTip} />
    </>
  );
}
