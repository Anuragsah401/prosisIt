import React, { useEffect } from 'react';
import { Privacy } from '../components/Privacy';
import { BottomSection } from '../components/BottomSection';

interface PrivacyPageProps {
  isDarkMode: boolean;
  aiTip: string;
}

export function PrivacyPage({ isDarkMode, aiTip }: PrivacyPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Privacy isDarkMode={isDarkMode} />
      <BottomSection isDarkMode={isDarkMode} aiTip={aiTip} />
    </>
  );
}
