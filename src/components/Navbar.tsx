import React, { useState } from 'react';
import { PageType } from '../types';
import { ASSETS } from '../data/mockData';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
  onOpenProfile
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'Pathways After 10th', page: 'pathways-after-10th' },
    { label: '1-on-1 Coaching', page: '1-on-1-coaching' },
    { label: 'Wellness Mentoring', page: 'wellness-mentoring' },
    { label: 'Skill Workshops', page: 'skill-workshops' },
    { label: 'Student Stories', page: 'student-stories' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fbf9f6]/90 backdrop-blur-xl border-b border-[#081534]/5 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 shrink-0 text-left cursor-pointer group"
          title="Growth Guides Home"
        >
          <img
            alt="Growth Guides Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src={ASSETS.logo}
          />
          <span className="font-headline-sm text-headline-sm text-[#081534] tracking-tight font-bold">
            Growth Guides
          </span>
        </button>

        {/* Desktop Nav Zone */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`font-label-lg transition-colors whitespace-nowrap cursor-pointer text-sm ${
                  isActive
                    ? 'text-[#ff7a30] font-bold border-b-2 border-[#ff7a30] pb-0.5'
                    : 'text-[#45464e] font-semibold hover:text-[#081534]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#ff7a30] text-white font-label-lg text-sm shadow-[0_4px_14px_rgba(255,122,48,0.35)] hover:bg-[#a04100] active:scale-[0.98] transition-all cursor-pointer font-semibold"
          >
            Book Free Consultation
          </button>

          {/* Student Profile Avatar */}
          <button
            onClick={onOpenProfile}
            title="View Student Diagnostic Profile"
            className="flex items-center gap-1.5 p-1 rounded-full hover:ring-2 hover:ring-[#ff7a30]/50 transition-all cursor-pointer"
          >
            <img
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-[#eae8e5] border border-white"
              src={ASSETS.userProfile}
            />
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#081534] hover:bg-[#efeeeb] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#ffffff] border-b border-[#081534]/10 shadow-xl px-6 py-5 flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[#efeeeb]">
            <span className="text-xs uppercase tracking-wider font-bold text-[#a04100]">Navigation</span>
            <span className="text-xs text-[#76777f]">Grade 9 &amp; 10 Hub</span>
          </div>

          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-left py-2 px-3 rounded-lg font-label-lg transition-colors ${
              currentPage === 'home'
                ? 'bg-[#ff7a30]/10 text-[#ff7a30] font-bold'
                : 'text-[#45464e] hover:bg-[#efeeeb]'
            }`}
          >
            Home / Overview
          </button>

          {navLinks.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left py-2 px-3 rounded-lg font-label-lg transition-colors ${
                  isActive
                    ? 'bg-[#ff7a30]/10 text-[#ff7a30] font-bold'
                    : 'text-[#45464e] hover:bg-[#efeeeb]'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <div className="pt-2 border-t border-[#efeeeb] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-[#ff7a30] text-white font-label-lg text-sm text-center shadow-md font-semibold"
            >
              Book Free Consultation
            </button>
            <div className="flex items-center justify-center gap-1 text-xs text-[#45464e] py-1">
              <span className="material-symbols-outlined text-sm text-[#ff7a30]">support_agent</span>
              <span>Parent Helpline: <strong>1800-GROWTH-EDU</strong></span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
