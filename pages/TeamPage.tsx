import React from 'react';
import { Team } from '../components/Team';
import { BottomSection } from '../components/BottomSection';

interface TeamPageProps {
  isDarkMode: boolean;
  aiTip: string;
}

export function TeamPage({ isDarkMode, aiTip }: TeamPageProps) {
  return (
    <>
      <Team isDarkMode={isDarkMode} />
      <BottomSection isDarkMode={isDarkMode} aiTip={aiTip} />
    </>
  );
}
