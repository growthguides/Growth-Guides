import React from 'react';
import { WorkshopModule } from '../types';

interface SyllabusModalProps {
  module: WorkshopModule | null;
  onClose: () => void;
  onEnroll: (moduleTitle: string) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  module,
  onClose,
  onEnroll
}) => {
  if (!module) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-[#081534]/10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#45464e] hover:bg-[#efeeeb] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#f5f3f0] text-xs font-bold text-[#081534]">
              {module.moduleNumber}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#ffdbcc] text-xs font-bold text-[#351000]">
              {module.syllabusHours}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#dae2ff] text-xs font-bold text-[#0d1a39]">
              Cap: {module.cohortCap}
            </span>
          </div>

          <h3 className="font-headline-md text-headline-md text-[#081534]">
            {module.title}
          </h3>

          <p className="text-sm text-[#45464e] leading-relaxed">
            {module.syllabusDetails?.overview || module.description}
          </p>

          {/* Session breakdown */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#a04100]">
              Session-by-Session Breakdown
            </h4>

            {module.syllabusDetails?.sessions?.map((s) => (
              <div
                key={s.sessionNum}
                className="p-4 rounded-xl bg-[#f5f3f0] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#081534] text-white text-xs font-bold flex items-center justify-center">
                      0{s.sessionNum}
                    </span>
                    <span className="font-semibold text-sm text-[#081534]">
                      {s.topic}
                    </span>
                  </div>
                  <p className="text-xs text-[#45464e] pl-8">
                    Target Outcome: {s.outcome}
                  </p>
                </div>
                <span className="text-xs font-bold text-[#ff7a30] shrink-0 sm:text-right pl-8 sm:pl-0">
                  {s.duration}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#efeeeb] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-[#76777f]">
              Classroom Limit: Maximum 16 teens to guarantee microphone airtime
            </span>
            <button
              onClick={() => {
                onClose();
                onEnroll(module.title);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#ff7a30] text-white font-label-lg text-sm shadow-[0_4px_14px_rgba(255,122,48,0.35)] hover:bg-[#a04100] transition-colors font-semibold cursor-pointer"
            >
              Enroll in Next Cohort
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
