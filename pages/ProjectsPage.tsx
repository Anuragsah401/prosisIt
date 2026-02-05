import React from 'react';
import { Projects } from '../components/Projects';
import { BottomSection } from '../components/BottomSection';

interface ProjectsPageProps {
  isDarkMode: boolean;
  aiTip: string;
}

export function ProjectsPage({ isDarkMode, aiTip }: ProjectsPageProps) {
  return (
    <>
      <Projects isDarkMode={isDarkMode} />
      <BottomSection isDarkMode={isDarkMode} aiTip={aiTip} />
    </>
  );
}
