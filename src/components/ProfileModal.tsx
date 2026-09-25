import React, { useState } from 'react';
import { ASSETS } from '../data/mockData';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToDiagnostic: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onNavigateToDiagnostic
}) => {
  const [activeProfile, setActiveProfile] = useState<'aarav' | 'ananya' | 'rhea'>('aarav');

  if (!isOpen) return null;

  const profiles = {
    aarav: {
      name: 'Aarav Sharma',
      grade: 'Grade 10 Student • CBSE',
      classYear: 'Class of 2025',
      image: ASSETS.aaravStudent,
      topAffinity: '92% Match',
      primaryStream: 'Commerce & Data',
      split: { primary: 58, secondary: 26, tertiary: 16 },
      labels: ['Commerce & Data (58%)', 'Applied Design (26%)', 'Science Tech (16%)'],
      strengths: ['Analytical Reasoning', 'Spatial Visualization', 'Verbal Fluency'],
      counselorTip: 'Don’t let peer pressure pick your stream. Look at what problems energize you on a Sunday morning.',
      mentor: 'Vikram Sengupta (STEM) + Dr. Ananya Sharma (Mindset)'
    },
    ananya: {
      name: 'Ananya Roy',
      grade: 'Grade 10 Student • ICSE',
      classYear: 'Class of 2025',
      image: ASSETS.ananyaLibrary,
      topAffinity: '94% Match',
      primaryStream: 'Commerce with Applied Math',
      split: { primary: 64, secondary: 22, tertiary: 14 },
      labels: ['Economics & Analytics (64%)', 'Applied Math (22%)', 'Policy & Law (14%)'],
      strengths: ['Quantitative Synthesis', 'Macro Thinking', 'Empirical Deductions'],
      counselorTip: 'Economics at university level requires robust math foundations. Pair business studies with core/applied mathematics.',
      mentor: 'Meera Ranganathan (Habits) + Vikram Sengupta (Math)'
    },
    rhea: {
      name: 'Rhea Deshmukh',
      grade: '10th Graduate • Now 11th Applied Design',
      classYear: 'Class of 2024',
      image: ASSETS.rheaDeshmukh,
      topAffinity: '96% Match',
      primaryStream: 'Design & Architecture',
      split: { primary: 70, secondary: 18, tertiary: 12 },
      labels: ['Spatial & UI Design (70%)', 'Humanities (18%)', 'Computer Tech (12%)'],
      strengths: ['Visual Composition', 'Empathy Mapping', 'Physical Prototyping'],
      counselorTip: 'Build an early design portfolio in 10th and 11th rather than only focusing on textbook marks. Portfolio drives 50% of NID/UCEED selections.',
      mentor: 'Dr. Neha Kapoor (Career) + Dr. Ananya Sharma (Anxiety Relief)'
    }
  };

  const curr = profiles[activeProfile];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-[#081534]/10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#45464e] hover:bg-[#efeeeb] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Profile Switcher Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-[#efeeeb] rounded-full mb-5 w-fit">
          <button
            onClick={() => setActiveProfile('aarav')}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              activeProfile === 'aarav' ? 'bg-[#081534] text-white' : 'text-[#45464e] hover:text-[#081534]'
            }`}
          >
            Aarav (Grade 10)
          </button>
          <button
            onClick={() => setActiveProfile('ananya')}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              activeProfile === 'ananya' ? 'bg-[#081534] text-white' : 'text-[#45464e] hover:text-[#081534]'
            }`}
          >
            Ananya (Switched)
          </button>
          <button
            onClick={() => setActiveProfile('rhea')}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              activeProfile === 'rhea' ? 'bg-[#081534] text-white' : 'text-[#45464e] hover:text-[#081534]'
            }`}
          >
            Rhea (Design)
          </button>
        </div>

        {/* Header Profile card */}
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#efeeeb]">
          <div className="flex items-center gap-3">
            <img
              src={curr.image}
              alt={curr.name}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-[#eae8e5] border-2 border-white shadow-sm"
            />
            <div>
              <h3 className="font-headline-sm text-headline-sm text-[#081534] font-bold">
                {curr.name}
              </h3>
              <p className="text-xs text-[#45464e]">{curr.grade}</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#ffdbcc] text-[#351000] text-xs font-bold whitespace-nowrap">
            {curr.classYear}
          </span>
        </div>

        {/* Aptitude & Interest Affinity */}
        <div className="py-4 space-y-3">
          <div className="p-4 rounded-2xl bg-[#f5f3f0] space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#45464e] uppercase tracking-wider">
                Aptitude &amp; Interest Affinity
              </span>
              <span className="text-xs font-bold text-[#a04100] px-2 py-0.5 rounded-full bg-white shadow-sm">
                {curr.topAffinity}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-3 bg-[#eae8e5] rounded-full overflow-hidden flex">
              <div
                className="h-full bg-[#ff7a30] rounded-l-full transition-all duration-500"
                style={{ width: `${curr.split.primary}%` }}
              ></div>
              <div
                className="h-full bg-[#003131] transition-all duration-500"
                style={{ width: `${curr.split.secondary}%` }}
              ></div>
              <div
                className="h-full bg-[#bac5ee] rounded-r-full transition-all duration-500"
                style={{ width: `${curr.split.tertiary}%` }}
              ></div>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] text-[#45464e] pt-1">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#ff7a30]"></span> {curr.labels[0]}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#003131]"></span> {curr.labels[1]}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#bac5ee]"></span> {curr.labels[2]}
              </span>
            </div>
          </div>

          {/* Strengths card */}
          <div className="p-4 rounded-2xl bg-white border border-[#081534]/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#081534] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#ff7a30]">psychology</span>
                Strengths Report
              </span>
              <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {curr.strengths.map((str) => (
                <span
                  key={str}
                  className="px-2.5 py-1 rounded-lg bg-[#f5f3f0] text-[#081534] text-xs font-medium"
                >
                  {str}
                </span>
              ))}
            </div>
          </div>

          {/* Mentor tip */}
          <div className="p-4 rounded-2xl bg-[#081534] text-white flex items-start gap-3">
            <span className="material-symbols-outlined text-[#ffdbcc] text-lg shrink-0 mt-0.5">
              lightbulb
            </span>
            <p className="text-xs text-white/90 leading-relaxed">
              <strong className="text-[#ffdbcc]">Mentor Tip:</strong> “{curr.counselorTip}”
            </p>
          </div>

          {/* Assigned Protocol */}
          <div className="p-3 bg-[#f5f3f0] rounded-xl flex items-center justify-between text-xs text-[#45464e]">
            <span className="font-semibold text-[#081534]">Dual-Care Mentors:</span>
            <span>{curr.mentor}</span>
          </div>
        </div>

        <div className="pt-2 flex gap-3">
          <button
            onClick={() => {
              onClose();
              onNavigateToDiagnostic();
            }}
            className="flex-1 py-3 rounded-full bg-[#ff7a30] text-white font-label-lg text-sm text-center shadow-md font-semibold hover:bg-[#a04100] transition-colors cursor-pointer"
          >
            Retake Diagnostic Test
          </button>
        </div>
      </div>
    </div>
  );
};
