import React, { useState } from 'react';
import { ASSETS, WORKSHOP_MODULES, UPCOMING_COHORTS } from '../data/mockData';
import { Cohort, WorkshopModule } from '../types';

interface WorkshopsPageProps {
  onOpenBooking: () => void;
  onViewSyllabus: (module: WorkshopModule) => void;
  onReserveCohort: (cohort: Cohort) => void;
}

export const WorkshopsPage: React.FC<WorkshopsPageProps> = ({
  onOpenBooking,
  onViewSyllabus,
  onReserveCohort
}) => {
  const [activeGradeFilter, setActiveGradeFilter] = useState<'all' | 'junior' | 'senior'>('all');
  
  // Interactive Self-Diagnostic state
  const [q1Answer, setQ1Answer] = useState<number | null>(0);
  const [q2Answer, setQ2Answer] = useState<number | null>(1);

  // School inquiry form
  const [schoolName, setSchoolName] = useState('');
  const [educatorName, setEducatorName] = useState('');
  const [schoolEmail, setSchoolEmail] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const filteredCohorts = UPCOMING_COHORTS.filter((c) => {
    if (activeGradeFilter === 'all') return true;
    return c.gradeTier === activeGradeFilter;
  });

  const handleSchoolSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (schoolName && educatorName && schoolEmail) {
      setInquirySubmitted(true);
    }
  };

   };

  const openMicrosoftForm = () => {
    window.open('https://forms.cloud.microsoft/r/BJykiPwR6s', '_blank');
  };

  return (
    <div className="flex flex-col w-full">
      {/* FREE CAREER GUIDANCE WORKSHOP BANNER */}
      <div className="bg-[#0a4100] text-white text-center py-4 px-4 sticky top-0 z-50">
        <p className="font-bold">🎯 FREE Career Guidance Workshop - Oct 10, 17, 24 @ 5PM IST</p>
        <button 
          onClick={openMicrosoftForm}
          className="mt-2 bg-white text-[#0a4100] font-bold px-8 py-2 rounded-full hover:bg-gray-100"
        >
          Register Now - Limited Seats
        </button>
      </div>
      {/* Immersive Sub-Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#f5f3f0] py-10 md:py-12">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#ff7a30]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute left-1/3 -bottom-24 w-80 h-80 rounded-full bg-[#74d6d6]/20 blur-3xl pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white shadow-sm border border-[#081534]/5">
                <span className="material-symbols-outlined text-[#a04100] text-sm">stars</span>
                <span className="font-label-md text-xs text-[#a04100] tracking-wide uppercase font-bold">
                  Grades 9 &amp; 10 Foundational Labs
                </span>
              </div>

              <h1 className="font-display text-[#081534] tracking-tight">
                Future-Ready Skills: The Toolkit School Syllabi Often Miss.
              </h1>

              <p className="font-body-lg text-body-lg text-[#45464e] max-w-xl leading-relaxed">
                Textbooks build memory, but life demands presence. We prepare 9th and 10th graders with the poise, composure, and dynamic communication required to thrive in high-stakes academics, admissions, and modern careers.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href="#cohorts-schedule"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#ff7a30] text-white font-label-lg text-sm shadow-[0_4px_14px_rgba(255,122,48,0.35)] hover:bg-[#a04100] active:scale-[0.98] transition-all font-semibold cursor-pointer"
                >
                  <span>Explore Live Bootcamps</span>
                  <span className="material-symbols-outlined text-sm">arrow_downward</span>
                </a>
                <a
                  href="#school-partner"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#081534] font-label-lg text-sm shadow-sm hover:bg-[#efeeeb] transition-colors border border-[#081534]/5 font-semibold cursor-pointer"
                >
                  School &amp; Campus Inquiry
                </a>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#081534] flex items-center justify-center text-white text-xs font-bold ring-2 ring-white">SG</div>
                  <div className="w-9 h-9 rounded-full bg-[#ff7a30] flex items-center justify-center text-white text-xs font-bold ring-2 ring-white">AK</div>
                  <div className="w-9 h-9 rounded-full bg-[#003131] flex items-center justify-center text-[#91f3f2] text-xs font-bold ring-2 ring-white">ML</div>
                  <div className="w-9 h-9 rounded-full bg-[#eae8e5] flex items-center justify-center text-[#081534] text-xs font-bold ring-2 ring-white">+4.2k</div>
                </div>
                <div className="text-[#45464e] font-body-sm text-xs">
                  <strong className="text-[#081534] font-bold block text-sm">4,280+</strong>
                  High schoolers mentored across 60+ partner schools
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white p-2 border border-[#081534]/10">
                <img
                  className="w-full h-80 object-cover rounded-2xl"
                  alt="High school students in active workshop lab"
                  src={ASSETS.workshopClassroom}
                />
                <div className="mt-2 p-3.5 rounded-2xl bg-[#f5f3f0] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ff7a30]/20 flex items-center justify-center text-[#a04100]">
                      <span className="material-symbols-outlined">record_voice_over</span>
                    </div>
                    <div>
                      <h4 className="font-title-md text-xs text-[#081534] font-bold">Micro-Simulation Mode</h4>
                      <p className="font-body-sm text-[11px] text-[#45464e]">Live roleplay with instant mentor feedback</p>
                    </div>
                  </div>
                  <span className="inline-flex px-2.5 py-1 rounded-full bg-[#003131] text-[#91f3f2] text-[11px] font-bold">
                    Active Lab
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Badges Band */}
      <section className="w-full bg-white py-8 border-y border-[#081534]/5">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#f5f3f0] shadow-sm flex flex-col justify-center border border-[#081534]/5">
              <span className="font-display text-[#a04100] tracking-tight">88%</span>
              <span className="font-label-lg text-sm text-[#081534] mt-1 font-bold">Reduced Stage Anxiety</span>
              <span className="font-body-sm text-xs text-[#45464e] mt-1">Measured post 4-week public speaking circle</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#f5f3f0] shadow-sm flex flex-col justify-center border border-[#081534]/5">
              <span className="font-display text-[#081534] tracking-tight">3.4x</span>
              <span className="font-label-lg text-sm text-[#081534] mt-1 font-bold">Better Study Cadence</span>
              <span className="font-body-sm text-xs text-[#45464e] mt-1">Adoption of Eisenhower priority matrix &amp; Pomodoro</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#f5f3f0] shadow-sm flex flex-col justify-center border border-[#081534]/5">
              <span className="font-display text-[#ff7a30] tracking-tight">1:8</span>
              <span className="font-label-lg text-sm text-[#081534] mt-1 font-bold">Mentor to Student Ratio</span>
              <span className="font-body-sm text-xs text-[#45464e] mt-1">Guaranteed personalized coaching &amp; roleplay airtime</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#f5f3f0] shadow-sm flex flex-col justify-center border border-[#081534]/5">
              <span className="font-display text-[#081534] tracking-tight">100%</span>
              <span className="font-label-lg text-sm text-[#081534] mt-1 font-bold">Interactive Simulations</span>
              <span className="font-body-sm text-xs text-[#45464e] mt-1">Zero passive lectures; all case studies &amp; feedback</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Skill Modules Bento */}
      <section className="w-full py-12 bg-[#f5f3f0]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-md text-xs text-[#a04100] tracking-wider uppercase font-bold">
                Curriculum Framework
              </span>
              <h2 className="font-headline-lg text-[#081534] tracking-tight mt-1">
                4 Core Foundational Competencies
              </h2>
            </div>
            <p className="font-body-md text-xs text-[#45464e] max-w-md">
              Structured specifically for Grade 9 &amp; 10 students preparing for competitive stream selections, summer leadership academies, and board year composure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WORKSHOP_MODULES.map((mod) => (
              <div
                key={mod.id}
                className="p-6 lg:p-8 rounded-3xl bg-white shadow-md border border-[#081534]/5 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#ff7a30]/15 flex items-center justify-center text-[#a04100]">
                      <span className="material-symbols-outlined text-2xl">{mod.icon}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#f5f3f0] font-label-sm text-xs text-[#081534] font-semibold">
                      {mod.moduleNumber}
                    </span>
                  </div>

                  <h3 className="font-headline-md text-[#081534] font-bold">
                    {mod.title}
                  </h3>

                  <p className="font-body-md text-xs text-[#45464e] leading-relaxed">
                    {mod.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    {mod.points.map((pt) => (
                      <div key={pt} className="flex items-center gap-2 text-[#45464e] text-xs">
                        <span className="material-symbols-outlined text-[#a04100] text-sm">check_circle</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#efeeeb] flex items-center justify-between">
                  <button
                    onClick={() => onViewSyllabus(mod)}
                    className="inline-flex items-center gap-1.5 text-[#a04100] font-label-lg text-xs font-bold hover:underline cursor-pointer"
                  >
                    <span>View {mod.syllabusHours}</span>
                    <span className="material-symbols-outlined text-sm">north_east</span>
                  </button>
                  <span className="font-label-sm text-xs text-[#76777f]">
                    Cohort Cap: {mod.cohortCap}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anatomy of Lab Section */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="p-8 md:p-12 rounded-3xl bg-[#081534] text-white">
            <div className="max-w-2xl space-y-2">
              <span className="font-label-md text-xs text-[#ff7a30] uppercase tracking-widest font-bold">
                Pedagogy That Sticks
              </span>
              <h2 className="font-headline-lg tracking-tight">How A Growth Guides Lab Actually Runs</h2>
              <p className="font-body-md text-xs text-[#8691b7] leading-relaxed">
                We reject tedious 2-hour monologues. Every single 90-minute session is split into four deliberate, rapid-fire tactile segments:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="p-5 rounded-2xl bg-white/10 space-y-2 border border-white/5">
                <div className="font-display text-display text-[#ff7a30]">
                  15<span className="text-xl">m</span>
                </div>
                <h4 className="font-title-md text-white font-bold text-sm">Mental Model Primer</h4>
                <p className="font-body-sm text-[11px] text-[#8691b7] leading-relaxed">
                  High-density core concept breakdown with real student case studies.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 space-y-2 border border-white/5">
                <div className="font-display text-display text-[#91f3f2]">
                  40<span className="text-xl">m</span>
                </div>
                <h4 className="font-title-md text-white font-bold text-sm">Live Simulation Lab</h4>
                <p className="font-body-sm text-[11px] text-[#8691b7] leading-relaxed">
                  Breakout rooms: Mock town halls, timer drills, or impromptu speech rounds.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 space-y-2 border border-white/5">
                <div className="font-display text-display text-[#ff7a30]">
                  25<span className="text-xl">m</span>
                </div>
                <h4 className="font-title-md text-white font-bold text-sm">Peer Feedback Circle</h4>
                <p className="font-body-sm text-[11px] text-[#8691b7] leading-relaxed">
                  Structured rubric evaluations where teens learn by observing others' delivery.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 space-y-2 border border-white/5">
                <div className="font-display text-display text-[#dae2ff]">
                  10<span className="text-xl">m</span>
                </div>
                <h4 className="font-title-md text-white font-bold text-sm">Mentor Takeaways &amp; Log</h4>
                <p className="font-body-sm text-[11px] text-[#8691b7] leading-relaxed">
                  Personalized growth rubric log stored in each student's portfolio locker.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ff7a30]">workspace_premium</span>
                <span className="font-label-lg text-xs font-semibold">
                  Includes Credentialed Certificate of Completion &amp; Diagnostic Scorecard
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[#8691b7] text-xs">
                <span className="material-symbols-outlined text-sm">security</span>
                <span>Recorded in COPPA &amp; GDPR-compliant safe digital classrooms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Cohorts & Weekend Bootcamps Schedule */}
      <section className="w-full py-12 bg-[#f5f3f0]" id="cohorts-schedule">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-md text-xs text-[#a04100] tracking-wider uppercase font-bold">
                Enrollment Open
              </span>
              <h2 className="font-headline-lg text-[#081534] tracking-tight mt-1">
                Upcoming Interactive Cohorts
              </h2>
            </div>
            <div className="flex items-center gap-1 bg-white p-1 rounded-full shadow-sm border border-[#081534]/5">
              <button
                onClick={() => setActiveGradeFilter('all')}
                className={`px-4 py-1.5 rounded-full font-label-md text-xs font-semibold transition-all cursor-pointer ${
                  activeGradeFilter === 'all'
                    ? 'bg-[#081534] text-white shadow-sm'
                    : 'text-[#45464e] hover:text-[#081534]'
                }`}
              >
                All Tracks
              </button>
              <button
                onClick={() => setActiveGradeFilter('junior')}
                className={`px-4 py-1.5 rounded-full font-label-md text-xs font-semibold transition-all cursor-pointer ${
                  activeGradeFilter === 'junior'
                    ? 'bg-[#081534] text-white shadow-sm'
                    : 'text-[#45464e] hover:text-[#081534]'
                }`}
              >
                Grades 8-10
              </button>
              <button
                onClick={() => setActiveGradeFilter('senior')}
                className={`px-4 py-1.5 rounded-full font-label-md text-xs font-semibold transition-all cursor-pointer ${
                  activeGradeFilter === 'senior'
                    ? 'bg-[#081534] text-white shadow-sm'
                    : 'text-[#45464e] hover:text-[#081534]'
                }`}
              >
                Grades 11-12
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredCohorts.map((cohort) => (
              <div
                key={cohort.id}
                className="p-6 rounded-3xl bg-white shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:shadow-md transition-shadow border border-[#081534]/5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#f5f3f0] flex flex-col items-center justify-center shrink-0 border border-[#081534]/5">
                    <span className="font-label-sm text-[11px] text-[#a04100] font-bold uppercase">{cohort.month}</span>
                    <span className="font-headline-md text-headline-md text-[#081534] font-bold -mt-1">{cohort.day}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#ffdbcc] text-[#351000] font-label-sm text-[11px] font-bold">
                        {cohort.gradeLabel}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#f5f3f0] font-label-sm text-[11px] text-[#45464e] font-semibold">
                        {cohort.formatLabel}
                      </span>
                    </div>
                    <h4 className="font-title-md text-[#081534] font-bold text-sm">{cohort.title}</h4>
                    <p className="font-body-sm text-xs text-[#45464e]">{cohort.schedule}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between lg:justify-end gap-6 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#efeeeb]">
                  <div className="text-right">
                    <div className="flex items-center gap-1.5 justify-end">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff7a30] animate-pulse"></span>
                      <span className="font-label-md text-xs text-[#081534] font-bold">{cohort.seatsRemaining} Seats Remaining</span>
                    </div>
                    <span className="font-body-sm text-[11px] text-[#45464e]">Class limit: {cohort.classLimit} students</span>
                  </div>
                  <button
                    onClick={() => onReserveCohort(cohort)}
                    className="px-6 py-2.5 rounded-full bg-[#081534] text-white font-label-lg text-xs font-semibold hover:bg-[#1e2a4a] transition-colors cursor-pointer shadow-sm"
                  >
                    Reserve Seat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Skills Assessment Widget */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="p-6 md:p-10 rounded-3xl bg-[#f5f3f0] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#081534]/5">
            <div className="lg:col-span-6 space-y-4">
              <span className="font-label-md text-xs text-[#a04100] uppercase tracking-wider font-bold">
                Self-Diagnostic
              </span>
              <h2 className="font-headline-lg text-[#081534] tracking-tight">
                Not sure which workshop your teen needs first?
              </h2>
              <p className="font-body-md text-xs text-[#45464e] leading-relaxed">
                Answer 2 quick diagnostic questions about current study patterns and public speaking confidence to receive an instant curriculum recommendation.
              </p>

              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <label className="font-label-lg text-xs text-[#081534] font-bold block">
                    1. When asked to speak extempore in class, they usually:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      onClick={() => setQ1Answer(0)}
                      className={`text-left p-3 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        q1Answer === 0
                          ? 'bg-[#081534] text-white shadow-sm'
                          : 'bg-white text-[#1b1c1a] hover:bg-[#eae8e5]'
                      }`}
                    >
                      Freeze up or rush through answers
                    </button>
                    <button
                      onClick={() => setQ1Answer(1)}
                      className={`text-left p-3 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        q1Answer === 1
                          ? 'bg-[#081534] text-white shadow-sm'
                          : 'bg-white text-[#1b1c1a] hover:bg-[#eae8e5]'
                      }`}
                    >
                      Comfortable, but lack structured clarity
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label-lg text-xs text-[#081534] font-bold block">
                    2. How do they handle homework &amp; exam schedules?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      onClick={() => setQ2Answer(0)}
                      className={`text-left p-3 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        q2Answer === 0
                          ? 'bg-[#081534] text-white shadow-sm'
                          : 'bg-white text-[#1b1c1a] hover:bg-[#eae8e5]'
                      }`}
                    >
                      Chronic procrastination until late midnight
                    </button>
                    <button
                      onClick={() => setQ2Answer(1)}
                      className={`text-left p-3 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        q2Answer === 1
                          ? 'bg-[#081534] text-white shadow-sm'
                          : 'bg-white text-[#1b1c1a] hover:bg-[#eae8e5]'
                      }`}
                    >
                      Works hard but experiences high exam anxiety
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl shadow-md border border-[#081534]/5 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#efeeeb]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#a04100]">tune</span>
                  <span className="font-title-md text-[#081534] font-bold text-sm">Recommended Pathway</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#ffdbcc] text-[#351000] text-[11px] font-bold">
                  Dynamic Match
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#f5f3f0] space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-title-md text-[#081534] font-bold text-sm">
                    {q1Answer === 0
                      ? 'Foundational Oratory & Composure Sprint'
                      : 'Time Architecture & Mindset Mastery Sprint'}
                  </h4>
                  <span className="font-label-md text-xs text-[#a04100] font-bold">
                    {q1Answer === 0 ? '94% Match' : '91% Match'}
                  </span>
                </div>
                <p className="font-body-sm text-xs text-[#45464e] leading-relaxed">
                  {q1Answer === 0
                    ? 'Designed to quickly dismantle performance apprehension through low-stakes verbal simulations and body language re-alignment.'
                    : 'Targeted systems to eliminate chronic cramming, build executive function, and reduce exam blackout panic.'}
                </p>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex items-center justify-between font-label-sm text-xs text-[#45464e]">
                  <span>Confidence Metric Baseline</span>
                  <span className="font-bold text-[#081534]">Needs Boost (+40% avg.)</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-[#efeeeb] overflow-hidden">
                  <div className="w-3/5 h-full bg-[#ff7a30] rounded-full"></div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ff7a30] text-white font-label-lg text-xs font-semibold shadow-sm hover:bg-[#a04100] transition-colors cursor-pointer"
                >
                  <span>Book Priority Assessment Call</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <span className="font-label-sm text-[11px] text-[#76777f]">Free 20-min consult</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School & Campus Partnerships */}
      <section className="w-full py-12 bg-[#f5f3f0]" id="school-partner">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-label-md text-xs text-[#a04100] tracking-wider uppercase font-bold">
                For Principals &amp; Educators
              </span>
              <h2 className="font-headline-lg text-[#081534] tracking-tight">
                Bring Growth Guides Workshops Directly to Your Campus
              </h2>
              <p className="font-body-md text-xs text-[#45464e] leading-relaxed">
                Complement your school's CBSE, ICSE, IB, or Cambridge curriculum with turnkey experiential life-skill bootcamps. Delivered on-premise or seamlessly via our secure cohort rooms.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-xs text-[#a04100] border border-[#081534]/5">
                    <span className="material-symbols-outlined text-base">school</span>
                  </div>
                  <div>
                    <h4 className="font-title-md text-xs text-[#081534] font-bold">Custom Grade 9-10 Assemblies</h4>
                    <p className="font-body-sm text-[11px] text-[#45464e]">High-engagement keynote sessions followed by small-group breakout clinics.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-xs text-[#a04100] border border-[#081534]/5">
                    <span className="material-symbols-outlined text-base">family_restroom</span>
                  </div>
                  <div>
                    <h4 className="font-title-md text-xs text-[#081534] font-bold">Parent Orientation Synergy</h4>
                    <p className="font-body-sm text-[11px] text-[#45464e]">Coaching sessions bridging parent expectations with modern high-school realities.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-6 md:p-8 rounded-3xl bg-white shadow-md border border-[#081534]/5">
                <h3 className="font-headline-sm text-[#081534] font-bold mb-1">
                  Request Campus Workshop Deck &amp; Syllabus
                </h3>
                <p className="font-body-sm text-xs text-[#45464e] mb-6">
                  Our academic partnerships director will share dates, educator references, and customized pricing.
                </p>

                {!inquirySubmitted ? (
                  <form onSubmit={handleSchoolSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#45464e] mb-1">
                          Educator / Coordinator Name *
                        </label>
                        <input
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f3f0] text-xs text-[#1b1c1a] focus:outline-none focus:ring-2 focus:ring-[#ff7a30]"
                          placeholder="e.g. Dr. Radhika Sharma"
                          required
                          type="text"
                          value={educatorName}
                          onChange={(e) => setEducatorName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#45464e] mb-1">
                          Institutional Email *
                        </label>
                        <input
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f3f0] text-xs text-[#1b1c1a] focus:outline-none focus:ring-2 focus:ring-[#ff7a30]"
                          placeholder="principal@academicschool.edu"
                          required
                          type="email"
                          value={schoolEmail}
                          onChange={(e) => setSchoolEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#45464e] mb-1">
                          School / Organization Name *
                        </label>
                        <input
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f3f0] text-xs text-[#1b1c1a] focus:outline-none focus:ring-2 focus:ring-[#ff7a30]"
                          placeholder="Heritage International Academy"
                          required
                          type="text"
                          value={schoolName}
                          onChange={(e) => setSchoolName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#45464e] mb-1">
                          Approximate Student Batch Size
                        </label>
                        <select className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f3f0] text-xs text-[#1b1c1a] focus:outline-none focus:ring-2 focus:ring-[#ff7a30]">
                          <option>50 – 120 students (Single Grade)</option>
                          <option>120 – 300 students (Grades 9 &amp; 10)</option>
                          <option>300+ students (Whole Campus)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#45464e] mb-1.5">
                        Primary Workshop Interest
                      </label>
                      <div className="flex flex-wrap gap-2">
                        <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f3f0] text-xs text-[#45464e] cursor-pointer hover:bg-[#eae8e5]">
                          <input defaultChecked className="accent-[#ff7a30]" type="checkbox" /> Public Speaking &amp; Debating
                        </label>
                        <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f3f0] text-xs text-[#45464e] cursor-pointer hover:bg-[#eae8e5]">
                          <input defaultChecked className="accent-[#ff7a30]" type="checkbox" /> Exam Stress Navigation
                        </label>
                        <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f3f0] text-xs text-[#45464e] cursor-pointer hover:bg-[#eae8e5]">
                          <input className="accent-[#ff7a30]" type="checkbox" /> Interview &amp; Resume Basics
                        </label>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <button
                        className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#ff7a30] text-white font-label-lg text-xs font-semibold shadow-md hover:bg-[#a04100] active:scale-[0.98] transition-all cursor-pointer"
                        type="submit"
                      >
                        Submit Institutional Request
                      </button>
                      <span className="text-[11px] text-[#76777f]">
                        Direct Helpline: 1800-GROWTH-EDU
                      </span>
                    </div>
                  </form>
                ) : (
                  <div className="p-6 rounded-2xl bg-emerald-50 text-center space-y-2">
                    <span className="material-symbols-outlined text-3xl text-emerald-600">verified</span>
                    <h4 className="font-headline-sm text-emerald-950 font-bold">Request Submitted!</h4>
                    <p className="text-xs text-emerald-800">
                      Thank you {educatorName}. Our institutional partnerships coordinator will share syllabus materials with <strong>{schoolEmail}</strong> within 24 business hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
