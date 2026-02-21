import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { MobileSidebar } from './MobileSidebar';
import { MobileMenuButton } from './MobileMenuButton';
import { DesktopTopBar } from './DesktopTopBar';
import { DesktopNavItems } from './DesktopNavItems';
import { ThemeToggleButton } from './ThemeToggleButton';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar = ({ isDarkMode, onToggleTheme }: NavbarProps) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname.slice(1) || 'home';

  return (
    <div className="col-span-12 flex flex-col gap-4 mb-2">
      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
        isDarkMode={isDarkMode}
        onToggleTheme={onToggleTheme}
        currentPage={currentPage}
      />

      {/* Desktop Top Utility Bar */}
      <DesktopTopBar isDarkMode={isDarkMode} />

      {/* Main Navigation Bar */}
      <div
        className={`${
          isDarkMode ? 'bg-[#1e1e1e]' : 'bg-white shadow-xl'
        } rounded-full flex flex-wrap items-center p-2 border ${
          isDarkMode ? 'border-white/5' : 'border-gray-100'
        } transition-all duration-500`}
      >
        {/* Mobile Logo */}
        <div className={`md:hidden flex items-center`}>
          <Link to="/">
            <Logo isDarkMode={isDarkMode} />
          </Link>
        </div>

        {/* Desktop Logo */}
        <div className={`hidden md:flex items-center ml-2`}>
          <Link to="/">
            <Logo isDarkMode={isDarkMode} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <MobileMenuButton
          isOpen={isMobileSidebarOpen}
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          isDarkMode={isDarkMode}
        />

        {/* Desktop Navigation Items */}
        <DesktopNavItems isDarkMode={isDarkMode} currentPage={currentPage} />

        {/* Desktop Theme Toggle */}
        <div className="hidden md:flex items-center gap-4 ml-2">
          <ThemeToggleButton
            isDarkMode={isDarkMode}
            onToggleTheme={onToggleTheme}
          />
        </div>
      </div>
    </div>
  );
};
