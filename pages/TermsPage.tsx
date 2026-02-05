import React, { useEffect } from 'react';
import { Terms } from '../components/Terms';
import { BottomSection } from '../components/BottomSection';

interface TermsPageProps {
  isDarkMode: boolean;
  aiTip: string;
}

export function TermsPage({ isDarkMode, aiTip }: TermsPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Terms isDarkMode={isDarkMode} />
      <BottomSection isDarkMode={isDarkMode} aiTip={aiTip} />
    </>
  );
}
