import React from 'react';
import { PageType, StreamKey } from '../types';
import { ASSETS } from '../data/mockData';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
  onSelectStream?: (stream: StreamKey) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBooking,
  onSelectStream
}) => {
  return (
    <footer className="w-full bg-[#f5f3f0] mt-12 border-t border-[#081534]/5">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & mission */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 text-left cursor-pointer"
            >
              <img
                alt="Growth Guides Logo"
                className="h-8 w-auto object-contain"
                src={ASSETS.logo}
              />
              <span className="font-headline-sm text-headline-sm text-[#081534] font-bold">
                Growth Guides
              </span>
            </button>
            <p className="font-body-sm text-body-sm text-[#45464e] max-w-sm leading-relaxed">
              Empowering 9th and 10th grade students to discover their authentic strengths, navigate career possibilities, and flourish academically with holistic guidance.
            </p>
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#1b1c1a] shadow-[0_1px_8px_rgba(0,0,0,0.04)] border border-[#081534]/5">
                <span className="material-symbols-outlined text-[#a04100] text-sm">support_agent</span>
                <span className="font-label-sm text-label-sm text-[#45464e]">Parent Helpline:</span>
                <a href="tel:1800GROWTHEDU" className="font-label-sm text-label-sm text-[#081534] font-bold hover:underline">
                  1800-GROWTH-EDU
                </a>
              </div>
            </div>
          </div>

          {/* Grade 9 & 10 Hub */}
          <div>
            <h4 className="font-title-md text-title-md text-[#081534] mb-3 font-bold">
              Grade 9 &amp; 10 Hub
            </h4>
            <ul className="space-y-2 text-sm text-[#45464e]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('pathways-after-10th');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#081534] transition-colors cursor-pointer text-left"
                >
                  Pathways After 10th
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('pathways-after-10th');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#081534] transition-colors cursor-pointer text-left"
                >
                  Stream Selector Diagnostic
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('skill-workshops');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#081534] transition-colors cursor-pointer text-left"
                >
                  Foundation Skill Workshops
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('wellness-mentoring');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#081534] transition-colors cursor-pointer text-left"
                >
                  Exam Calm &amp; Wellness
                </button>
              </li>
            </ul>
          </div>

          {/* Streams Explorer */}
          <div>
            <h4 className="font-title-md text-title-md text-[#081534] mb-3 font-bold">
              Streams Explorer
            </h4>
            <ul className="space-y-2 text-sm text-[#45464e]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('pathways-after-10th');
                    onSelectStream?.('science');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#081534] transition-colors cursor-pointer text-left"
                >
                  Science &amp; Technology
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('pathways-after-10th');
                    onSelectStream?.('commerce');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#081534] transition-colors cursor-pointer text-left"
                >
                  Commerce &amp; Economics
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('pathways-after-10th');
                    onSelectStream?.('arts');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#081534] transition-colors cursor-pointer text-left"
                >
                  Arts &amp; Humanities
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('pathways-after-10th');
                    onSelectStream?.('applied');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#081534] transition-colors cursor-pointer text-left"
                >
                  Vocational &amp; Emerging Fields
                </button>
              </li>
            </ul>
          </div>

          {/* Mentorship & Advice */}
          <div>
            <h4 className="font-title-md text-title-md text-[#081534] mb-3 font-bold">
              Mentorship &amp; Advice
            </h4>
            <ul className="space-y-2 text-sm text-[#45464e]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('1-on-1-coaching');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#081534] transition-colors cursor-pointer text-left"
                >
                  Certified Mentors
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('student-stories');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#081534] transition-colors cursor-pointer text-left"
                >
                  Student Transformations
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('wellness-mentoring');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#081534] transition-colors cursor-pointer text-left"
                >
                  Parent Advisory Circle
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-[#a04100] font-semibold hover:underline cursor-pointer text-left"
                >
                  Book Diagnostics Call
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & copyright strip */}
        <div className="mt-10 pt-6 border-t border-[#eae8e5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#45464e]">
          <p>© 2025–2026 Growth Guides Educational Initiative. Built for confident next steps.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#081534] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#081534] cursor-pointer">Terms of Guidance</span>
            <span className="hover:text-[#081534] cursor-pointer">Child Safety Charter</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
