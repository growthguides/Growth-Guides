import React, { useState } from 'react';
import { PageType, StreamKey } from '../types';
import { ASSETS } from '../data/mockData';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onSelectStream: (stream: StreamKey) => void;
  onOpenBooking: () => void;
  onOpenProfile: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectStream,
  onOpenBooking,
  onOpenProfile
}) => {
  const [formName, setFormName] = useState('');
  const [formGrade, setFormGrade] = useState('Grade 10 (Stream Selection Imminent)');
  const [formPhone, setFormPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formName && formPhone) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Interactive Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#fbf9f6] pb-12 pt-6 md:pt-10">
        {/* Ambient organic gradient blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#dae2ff]/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-[#ffdbcc]/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-[#91f3f2]/20 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Hero Left Column: Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eae8e5] text-[#081534] shadow-sm">
                <span className="material-symbols-outlined text-[#ff7a30] text-sm fill-icon">
                  verified
                </span>
                <span className="font-label-md text-xs font-bold tracking-wider uppercase text-[#45464e]">
                  Transitions Program for 9th &amp; 10th Graders
                </span>
              </div>

              <h1 className="font-display text-[#081534] tracking-tight max-w-2xl">
                Empowering Young Minds: Discover Your True Potential &amp; Pathway After 10th
              </h1>

              <p className="font-body-lg text-body-lg text-[#45464e] max-w-xl leading-relaxed">
                Comprehensive career guidance, 1-on-1 academic coaching, and youth wellness mentoring tailored for 9th and 10th-grade students preparing for the biggest decisions of their school life.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-1 w-full sm:w-auto">
                <button
                  onClick={() => {
                    onNavigate('pathways-after-10th');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#ff7a30] text-white font-label-lg text-sm shadow-lg shadow-[#ff7a30]/25 hover:bg-[#a04100] active:scale-[0.98] transition-all font-semibold cursor-pointer"
                >
                  <span>Explore Pathways After 10th</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#081534] text-white font-label-lg text-sm shadow-md hover:bg-[#1e2a4a] active:scale-[0.98] transition-all font-semibold cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base text-[#ffdbcc]">calendar_today</span>
                  <span>Book Free Clarity Session</span>
                </button>
              </div>

              {/* Trust Badges & Metrics Row */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 pt-6 w-full max-w-lg">
                <div className="flex flex-col bg-white p-3.5 md:p-4 rounded-2xl shadow-sm border border-[#081534]/5">
                  <span className="font-headline-md text-headline-md text-[#081534] font-bold">10,000+</span>
                  <span className="font-label-sm text-xs text-[#45464e]">Students Guided</span>
                </div>
                <div className="flex flex-col bg-white p-3.5 md:p-4 rounded-2xl shadow-sm border border-[#081534]/5">
                  <span className="font-headline-md text-headline-md text-[#a04100] font-bold">98%</span>
                  <span className="font-label-sm text-xs text-[#45464e]">Decision Clarity Score</span>
                </div>
                <div className="flex flex-col bg-white p-3.5 md:p-4 rounded-2xl shadow-sm border border-[#081534]/5">
                  <span className="font-headline-md text-headline-md text-[#003131] font-bold">50+</span>
                  <span className="font-label-sm text-xs text-[#45464e]">Certified Mentors</span>
                </div>
              </div>
            </div>

            {/* Hero Right Column: Interactive Diagnostic & Visual Snapshot */}
            <div className="lg:col-span-5 relative">
              <div
                onClick={onOpenProfile}
                className="relative bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-[#081534]/10 flex flex-col gap-4 cursor-pointer hover:border-[#ff7a30]/30 transition-all"
                title="Click to view detailed student profile"
              >
                {/* Student Profile Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#eae8e5]"
                      alt="Aarav Sharma"
                      src={ASSETS.aaravStudent}
                    />
                    <div>
                      <h4 className="font-title-md text-[#081534] font-bold">Aarav Sharma</h4>
                      <p className="font-body-sm text-xs text-[#45464e]">Grade 10 Student • CBSE</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#ffdbcc] text-[#351000] font-label-sm text-xs font-semibold">
                    Class of 2025
                  </span>
                </div>

                {/* Live Diagnostic Result Card */}
                <div className="bg-[#f5f3f0] p-4 rounded-2xl flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-label-md text-xs font-bold text-[#45464e]">
                      Aptitude &amp; Interest Affinity
                    </span>
                    <span className="font-label-sm text-xs text-[#a04100] font-bold">
                      92% Match
                    </span>
                  </div>

                  {/* Multi-track Progress Bar */}
                  <div className="w-full h-3 bg-[#eae8e5] rounded-full overflow-hidden flex">
                    <div className="h-full bg-[#ff7a30] rounded-l-full" style={{ width: '58%' }}></div>
                    <div className="h-full bg-[#003131]" style={{ width: '26%' }}></div>
                    <div className="h-full bg-[#bac5ee] rounded-r-full" style={{ width: '16%' }}></div>
                  </div>

                  <div className="flex justify-between text-[#45464e] pt-1 text-[11px]">
                    <span className="flex items-center gap-1 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#ff7a30]"></span> Commerce &amp; Data
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#003131]"></span> Applied Design
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#bac5ee]"></span> Science Tech
                    </span>
                  </div>
                </div>

                {/* Interactive Goal Pathway Indicator */}
                <div className="p-3.5 bg-white rounded-2xl shadow-sm border border-[#081534]/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#a04100]/10 flex items-center justify-center text-[#a04100]">
                      <span className="material-symbols-outlined">psychology</span>
                    </div>
                    <div>
                      <p className="font-label-lg text-sm text-[#081534] font-bold">Strengths Report</p>
                      <p className="font-body-sm text-xs text-[#45464e]">Analytical, Spatial, Verbal</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#ff7a30]">check_circle</span>
                </div>

                {/* Floating Micro Mentor Note */}
                <div className="p-3.5 bg-[#081534] text-white rounded-2xl flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#ffdbcc] text-lg shrink-0 mt-0.5">
                    lightbulb
                  </span>
                  <p className="font-body-sm text-xs leading-relaxed text-white/90">
                    <strong className="text-[#ffdbcc]">Mentor Tip:</strong> “Don’t let peer pressure pick your stream. Look at what problems energize you on a Sunday morning.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stream Selector Preview */}
      <section className="w-full py-12 bg-[#f5f3f0]" id="pathways-hub">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <span className="font-label-md text-xs uppercase tracking-wider text-[#a04100] font-bold">
                Unpack Your 11th &amp; 12th Choices
              </span>
              <h2 className="font-headline-lg text-[#081534]">Interactive Stream Selector Preview</h2>
              <p className="font-body-md text-sm text-[#45464e]">
                Explore core subjects, emerging career trajectories, and real college entrance pathways for each major academic stream.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-label-md text-xs text-[#45464e]">Filtering:</span>
              <span className="px-3 py-1 rounded-full bg-[#081534] text-white font-label-sm text-xs font-semibold">
                All 4 Major Tracks
              </span>
            </div>
          </div>

          {/* Stream Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Science Track Card */}
            <div
              onClick={() => {
                onSelectStream('science');
                onNavigate('pathways-after-10th');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-[#081534]/5"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#dae2ff] flex items-center justify-center text-[#081534]">
                    <span className="material-symbols-outlined text-2xl">biotech</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#eae8e5] text-[#1b1c1a] font-label-sm text-[11px] font-semibold">
                    PCM / PCB / PCMB
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-[#081534] group-hover:text-[#a04100] transition-colors font-bold">
                    Science &amp; Tech
                  </h3>
                  <p className="font-body-sm text-xs text-[#45464e] mt-1 leading-relaxed">
                    For curious minds fascinated by natural phenomena, computational systems, biomedical innovation, and engineering.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Robotics', 'Medicine', 'Data Science', 'Aviation'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#f5f3f0] text-[#45464e] font-label-sm text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#efeeeb] flex items-center justify-between text-[#081534] font-label-md">
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold text-xs text-[#ff7a30]">
                  Explore 14 Careers <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </div>

            {/* Commerce Track Card */}
            <div
              onClick={() => {
                onSelectStream('commerce');
                onNavigate('pathways-after-10th');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-[#081534]/5"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#ffdbcc] flex items-center justify-center text-[#a04100]">
                    <span className="material-symbols-outlined text-2xl">query_stats</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#eae8e5] text-[#1b1c1a] font-label-sm text-[11px] font-semibold">
                    With or Without Math
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-[#081534] group-hover:text-[#a04100] transition-colors font-bold">
                    Commerce &amp; FinTech
                  </h3>
                  <p className="font-body-sm text-xs text-[#45464e] mt-1 leading-relaxed">
                    For strategic builders drawn to financial markets, corporate strategy, entrepreneurship, and economic policy.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Investment', 'Chartered Acct', 'Startups', 'Actuarial'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#f5f3f0] text-[#45464e] font-label-sm text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#efeeeb] flex items-center justify-between text-[#081534] font-label-md">
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold text-xs text-[#ff7a30]">
                  Explore 12 Careers <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </div>

            {/* Arts & Humanities Track Card */}
            <div
              onClick={() => {
                onSelectStream('arts');
                onNavigate('pathways-after-10th');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-[#081534]/5"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#91f3f2] flex items-center justify-center text-[#003131]">
                    <span className="material-symbols-outlined text-2xl">palette</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#eae8e5] text-[#1b1c1a] font-label-sm text-[11px] font-semibold">
                    Diverse Electives
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-[#081534] group-hover:text-[#a04100] transition-colors font-bold">
                    Arts &amp; Humanities
                  </h3>
                  <p className="font-body-sm text-xs text-[#45464e] mt-1 leading-relaxed">
                    For creative thinkers, writers, and cultural analysts eager to shape media, public policy, psychology, and design.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Psychology', 'Law & Justice', 'Journalism', 'UI/UX Design'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#f5f3f0] text-[#45464e] font-label-sm text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#efeeeb] flex items-center justify-between text-[#081534] font-label-md">
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold text-xs text-[#ff7a30]">
                  Explore 16 Careers <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </div>

            {/* Vocational & Emerging Track Card */}
            <div
              onClick={() => {
                onSelectStream('applied');
                onNavigate('pathways-after-10th');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-[#081534]/5"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#ffb693] flex items-center justify-center text-[#351000]">
                    <span className="material-symbols-outlined text-2xl">hub</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#eae8e5] text-[#1b1c1a] font-label-sm text-[11px] font-semibold">
                    Skill-First
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-[#081534] group-hover:text-[#a04100] transition-colors font-bold">
                    Emerging Vocational
                  </h3>
                  <p className="font-body-sm text-xs text-[#45464e] mt-1 leading-relaxed">
                    Applied pathways for digital creators, hospitality innovators, game designers, and specialized technicians.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Animation', 'Culinary Arts', 'Cybersecurity', 'Sports Mgmt'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#f5f3f0] text-[#45464e] font-label-sm text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#efeeeb] flex items-center justify-between text-[#081534] font-label-md">
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold text-xs text-[#ff7a30]">
                  Explore 9 Careers <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Methodology Section */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
            <span className="font-label-md text-xs uppercase tracking-wider text-[#a04100] font-bold">
              Our Core Methodology
            </span>
            <h2 className="font-headline-lg text-[#081534]">
              How Growth Guides Transforms Transition Stress into Clarity
            </h2>
            <p className="font-body-md text-sm text-[#45464e]">
              We don’t rely on generic questionnaire printouts. Our three-step transformation blends psychometrics, mentor dialogues, and interactive exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="bg-[#f5f3f0] p-6 lg:p-8 rounded-3xl shadow-sm flex flex-col justify-between border border-[#081534]/5">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#081534] text-white flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-3xl text-[#ffdbcc]">target</span>
                </div>
                <div className="space-y-1">
                  <span className="font-label-sm text-xs text-[#a04100] font-bold">STAGE 01</span>
                  <h3 className="font-headline-sm text-[#081534] font-bold">Goal Setting &amp; Clarity</h3>
                </div>
                <p className="font-body-sm text-xs text-[#45464e] leading-relaxed">
                  We map your cognitive strengths, natural aptitude, intrinsic motivations, and lifestyle dreams. No forced assumptions—just authentic alignment with who you are today and who you want to become.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-[#1b1c1a]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">check</span>
                    Strength Identification Assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">check</span>
                    Aptitude &amp; Spatial Diagnostic
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">check</span>
                    Personal Aspiration Blueprint
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={onOpenBooking}
                  className="font-label-md text-xs text-[#a04100] font-bold hover:underline cursor-pointer"
                >
                  Includes 1-on-1 debrief call →
                </button>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#f5f3f0] p-6 lg:p-8 rounded-3xl shadow-sm flex flex-col justify-between relative overflow-hidden border border-[#081534]/5">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ffdbcc]/40 rounded-bl-full pointer-events-none"></div>
              <div className="space-y-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#ff7a30] text-white flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-3xl">route</span>
                </div>
                <div className="space-y-1">
                  <span className="font-label-sm text-xs text-[#a04100] font-bold">STAGE 02</span>
                  <h3 className="font-headline-sm text-[#081534] font-bold">Pathways After 10th</h3>
                </div>
                <p className="font-body-sm text-xs text-[#45464e] leading-relaxed">
                  Unpack subject combinations across CBSE, ICSE, State Boards, and International curricula. Map direct connections from school syllabus to college entrance exams and over 40 modern professions.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-[#1b1c1a]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">check</span>
                    Complete Board Stream Breakdown
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">check</span>
                    Entrance Exam Timeline Map
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">check</span>
                    40+ Emerging Career Blueprints
                  </li>
                </ul>
              </div>
              <div className="pt-6 relative z-10">
                <button
                  onClick={() => {
                    onNavigate('pathways-after-10th');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-label-md text-xs text-[#a04100] font-bold hover:underline cursor-pointer"
                >
                  Custom roadmaps delivered →
                </button>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#f5f3f0] p-6 lg:p-8 rounded-3xl shadow-sm flex flex-col justify-between border border-[#081534]/5">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#003131] text-[#91f3f2] flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-3xl">group_work</span>
                </div>
                <div className="space-y-1">
                  <span className="font-label-sm text-xs text-[#a04100] font-bold">STAGE 03</span>
                  <h3 className="font-headline-sm text-[#081534] font-bold">Interactive Workshops</h3>
                </div>
                <p className="font-body-sm text-xs text-[#45464e] leading-relaxed">
                  Hands-on decision sprints, live career simulations, and interactive peer problem-solving. Students practice evaluating trade-offs and build resilience before making their final grade 11 selection.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-[#1b1c1a]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">check</span>
                    Live Day-in-the-Life Simulations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">check</span>
                    Decision-Matrix Masterclasses
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">check</span>
                    Peer Exchange Circles
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => {
                    onNavigate('skill-workshops');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-label-md text-xs text-[#a04100] font-bold hover:underline cursor-pointer"
                >
                  Weekly live cohort sessions →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic 360° Growth Matrix */}
      <section className="w-full py-12 bg-[#f5f3f0]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Explanation */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#081534] shadow-sm border border-[#081534]/5">
                <span className="material-symbols-outlined text-[#a04100] text-sm">balance</span>
                <span className="font-label-md text-xs font-bold uppercase tracking-wider">Dual-Engine Mentoring</span>
              </div>
              <h2 className="font-headline-lg text-[#081534]">
                The Holistic 360° Growth Matrix
              </h2>
              <p className="font-body-md text-sm text-[#45464e] leading-relaxed">
                True excellence during 9th and 10th grade isn’t achieved through academic cramming alone. Students thrive when rigorous academic planning is matched with emotional balance, stress immunity, and self-confidence.
              </p>
              <div className="p-4 rounded-2xl bg-white shadow-sm flex items-start gap-3 border border-[#081534]/5">
                <div className="w-10 h-10 rounded-xl bg-[#ffdbcc] flex items-center justify-center shrink-0 text-[#a04100]">
                  <span className="material-symbols-outlined text-lg">hotel_class</span>
                </div>
                <div>
                  <h4 className="font-title-md text-sm text-[#081534] font-bold">Parent &amp; Child Harmony</h4>
                  <p className="font-body-sm text-xs text-[#45464e] mt-0.5 leading-relaxed">
                    Our dual-track method bridges generation gaps in career conversations, turning family dinner discussions from battlegrounds into collaborative strategizing.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Comparison Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Academic Coaching */}
              <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col justify-between border border-[#081534]/5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-[#081534] flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-lg">menu_book</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#dae2ff] text-[#081534] font-label-sm text-xs font-bold">
                      Intellectual Edge
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-[#081534] font-bold">Academic Coaching</h3>
                    <p className="font-body-sm text-xs text-[#45464e] mt-1">
                      Structured systems to convert study hours into measurable mastery.
                    </p>
                  </div>
                  <div className="space-y-2 pt-1">
                    <div className="p-3 bg-[#f5f3f0] rounded-xl space-y-0.5">
                      <p className="font-label-md text-xs text-[#081534] font-semibold">Active Recall &amp; Spaced Systems</p>
                      <p className="font-body-sm text-[11px] text-[#45464e]">Scientifically validated retention protocols for Science &amp; Math.</p>
                    </div>
                    <div className="p-3 bg-[#f5f3f0] rounded-xl space-y-0.5">
                      <p className="font-label-md text-xs text-[#081534] font-semibold">Board Exam Strategy &amp; Timing</p>
                      <p className="font-body-sm text-[11px] text-[#45464e]">Answer structure calibration and section prioritization.</p>
                    </div>
                    <div className="p-3 bg-[#f5f3f0] rounded-xl space-y-0.5">
                      <p className="font-label-md text-xs text-[#081534] font-semibold">Weakness Diagnosis Engine</p>
                      <p className="font-body-sm text-[11px] text-[#45464e]">Pinpointing conceptual gaps before they trigger exam panic.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#efeeeb] flex items-center text-[#a04100] font-label-sm text-xs font-semibold">
                  <span className="material-symbols-outlined text-sm mr-1">task_alt</span> Certified Academic Mentors
                </div>
              </div>

              {/* Wellness Mentoring */}
              <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col justify-between border border-[#081534]/5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-[#ff7a30] flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-lg">spa</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#ffdbcc] text-[#a04100] font-label-sm text-xs font-bold">
                      Mental Well-being
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-[#081534] font-bold">Wellness Mentoring</h3>
                    <p className="font-body-sm text-xs text-[#45464e] mt-1">
                      Nurturing inner resilience, focus resilience, and emotional steadiness.
                    </p>
                  </div>
                  <div className="space-y-2 pt-1">
                    <div className="p-3 bg-[#f5f3f0] rounded-xl space-y-0.5">
                      <p className="font-label-md text-xs text-[#081534] font-semibold">Exam Calm &amp; Anxiety Relief</p>
                      <p className="font-body-sm text-[11px] text-[#45464e]">Breathwork, physical grounding, and performance de-escalation.</p>
                    </div>
                    <div className="p-3 bg-[#f5f3f0] rounded-xl space-y-0.5">
                      <p className="font-label-md text-xs text-[#081534] font-semibold">Imposter Syndrome &amp; Self-Worth</p>
                      <p className="font-body-sm text-[11px] text-[#45464e]">Building self-confidence detached from peer comparison.</p>
                    </div>
                    <div className="p-3 bg-[#f5f3f0] rounded-xl space-y-0.5">
                      <p className="font-label-md text-xs text-[#081534] font-semibold">Digital Hygiene &amp; Sleep Cycles</p>
                      <p className="font-body-sm text-[11px] text-[#45464e]">Restoring REM sleep cycles essential for teenage cognitive function.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#efeeeb] flex items-center text-[#a04100] font-label-sm text-xs font-semibold">
                  <span className="material-symbols-outlined text-sm mr-1">task_alt</span> Adolescent Psychology Specialists
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Soft Skills & Readiness */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1 max-w-xl">
              <span className="font-label-md text-xs uppercase tracking-wider text-[#a04100] font-bold">
                Future-Ready Capabilities
              </span>
              <h2 className="font-headline-lg text-[#081534]">Specialized Soft Skills &amp; Readiness Modules</h2>
              <p className="font-body-md text-sm text-[#45464e]">
                Equipping early high-schoolers with indispensable human skills that standard board syllabi overlook.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-[#45464e] font-label-sm text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff7a30]"></span> Interactive Cohort Sprints
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Skill 1 */}
            <div
              onClick={() => {
                onNavigate('skill-workshops');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#f5f3f0] p-6 rounded-3xl hover:bg-white transition-all hover:shadow-lg flex flex-col justify-between group cursor-pointer border border-[#081534]/5"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#081534] flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-2xl text-[#ffdbcc]">record_voice_over</span>
                </div>
                <div>
                  <h3 className="font-title-md text-[#081534] group-hover:text-[#a04100] transition-colors font-bold text-sm">
                    Communication &amp; Presentation
                  </h3>
                  <p className="font-body-sm text-xs text-[#45464e] mt-1 leading-relaxed">
                    Overcoming stage fright, organizing persuasive thoughts, and presenting ideas clearly in group projects or public speaking.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#efeeeb] mt-4">
                <span className="font-label-sm text-[11px] text-[#45464e]">
                  Includes: Video speech critique sprints
                </span>
              </div>
            </div>

            {/* Skill 2 */}
            <div
              onClick={() => {
                onNavigate('skill-workshops');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#f5f3f0] p-6 rounded-3xl hover:bg-white transition-all hover:shadow-lg flex flex-col justify-between group cursor-pointer border border-[#081534]/5"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ff7a30] flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-2xl">badge</span>
                </div>
                <div>
                  <h3 className="font-title-md text-[#081534] group-hover:text-[#a04100] transition-colors font-bold text-sm">
                    Career Exploration &amp; Interviews
                  </h3>
                  <p className="font-body-sm text-xs text-[#45464e] mt-1 leading-relaxed">
                    Foundational mock interviews for scholarship applications, summer internships, and prestigious youth exchange programs.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#efeeeb] mt-4">
                <span className="font-label-sm text-[11px] text-[#45464e]">
                  Includes: Early resume crafting exercises
                </span>
              </div>
            </div>

            {/* Skill 3 */}
            <div
              onClick={() => {
                onNavigate('skill-workshops');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#f5f3f0] p-6 rounded-3xl hover:bg-white transition-all hover:shadow-lg flex flex-col justify-between group cursor-pointer border border-[#081534]/5"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#003131] flex items-center justify-center text-[#91f3f2]">
                  <span className="material-symbols-outlined text-2xl">hourglass_top</span>
                </div>
                <div>
                  <h3 className="font-title-md text-[#081534] group-hover:text-[#a04100] transition-colors font-bold text-sm">
                    Stress &amp; Time Mastery
                  </h3>
                  <p className="font-body-sm text-xs text-[#45464e] mt-1 leading-relaxed">
                    Pomodoro variations for teens, cognitive load management, beating exam procrastination, and balancing hobby passions.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#efeeeb] mt-4">
                <span className="font-label-sm text-[11px] text-[#45464e]">
                  Includes: Custom digital planner toolkit
                </span>
              </div>
            </div>

            {/* Skill 4 */}
            <div
              onClick={() => {
                onNavigate('skill-workshops');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#f5f3f0] p-6 rounded-3xl hover:bg-white transition-all hover:shadow-lg flex flex-col justify-between group cursor-pointer border border-[#081534]/5"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#a04100] flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-2xl text-[#ffdbcc]">handshake</span>
                </div>
                <div>
                  <h3 className="font-title-md text-[#081534] group-hover:text-[#a04100] transition-colors font-bold text-sm">
                    Professional Etiquette &amp; Values
                  </h3>
                  <p className="font-body-sm text-xs text-[#45464e] mt-1 leading-relaxed">
                    Email writing etiquette, constructive feedback reception, conflict resolution in team setups, and academic integrity.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#efeeeb] mt-4">
                <span className="font-label-sm text-[11px] text-[#45464e]">
                  Includes: Digital citizenship checklist
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Spotlight */}
      <section className="w-full py-12 bg-[#f5f3f0]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="font-label-md text-xs uppercase tracking-wider text-[#a04100] font-bold">
              Voices of Transformation
            </span>
            <h2 className="font-headline-lg text-[#081534]">Trusted by 10,000+ Students &amp; Families</h2>
            <p className="font-body-md text-sm text-[#45464e]">
              Here is what occurs when clarity replaces guesswork during critical transition years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Testimonial */}
            <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm flex flex-col justify-between border border-[#081534]/5">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#ff7a30]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg fill-icon">
                      star
                    </span>
                  ))}
                </div>
                <blockquote className="font-body-lg text-sm text-[#081534] leading-relaxed">
                  “I was constantly overwhelmed by everyone telling me that picking Science was the only real choice. Growth Guides helped me discover my spatial reasoning strengths and showed me the world of Architecture &amp; Industrial Design. My exam anxiety dropped because I finally have a real goal I care about.”
                </blockquote>
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-[#efeeeb] mt-4">
                <img
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#eae8e5]"
                  alt="Rhea Deshmukh"
                  src={ASSETS.rheaDeshmukh}
                />
                <div>
                  <p className="font-title-md text-[#081534] font-bold text-sm">Rhea Deshmukh</p>
                  <p className="font-body-sm text-xs text-[#45464e]">10th Grade Graduate • Now 11th Applied Design</p>
                </div>
              </div>
            </div>

            {/* Parent Testimonial */}
            <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm flex flex-col justify-between border border-[#081534]/5">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#ff7a30]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg fill-icon">
                      star
                    </span>
                  ))}
                </div>
                <blockquote className="font-body-lg text-sm text-[#081534] leading-relaxed">
                  “As parents, we were worried about career shifts we didn’t fully comprehend ourselves. The 1-on-1 advisor sat with both my son and us, presented factual data on future job security, and resolved our disagreements peacefully. The wellness mentor was equally exceptional in calming board-exam panic.”
                </blockquote>
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-[#efeeeb] mt-4">
                <img
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#eae8e5]"
                  alt="Vikram & Sunita Menon"
                  src={ASSETS.menonParents}
                />
                <div>
                  <p className="font-title-md text-[#081534] font-bold text-sm">Vikram &amp; Sunita Menon</p>
                  <p className="font-body-sm text-xs text-[#45464e]">Parents of Aryan Menon • Bengaluru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Banner */}
      <section className="w-full py-12 bg-white" id="booking-section">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="relative rounded-3xl bg-[#081534] text-white overflow-hidden p-6 sm:p-10 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Background decorative ambient circles */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#ff7a30]/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-16 -top-16 w-80 h-80 bg-[#003131]/30 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-4 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#ffdbcc]">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <span className="font-label-sm text-xs uppercase tracking-wider font-semibold">
                  Limited Free Sessions Every Month
                </span>
              </div>
              <h2 className="font-headline-lg text-white tracking-tight">
                Schedule Your Free 30-Minute Pathway &amp; Wellness Clarity Call
              </h2>
              <p className="font-body-md text-xs sm:text-sm text-[#8691b7] leading-relaxed">
                Connect with a certified academic and teenage wellness coach. Review current academic hurdles, uncover innate interests, and receive a customized 9th/10th grade action plan—completely obligation-free.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1 text-[#8691b7] font-label-md text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#ffdbcc] text-base">check_circle</span>
                  No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#ffdbcc] text-base">check_circle</span>
                  Parents &amp; Students joint call
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#ffdbcc] text-base">check_circle</span>
                  Free Diagnostic PDF
                </span>
              </div>
            </div>

            {/* Quick Booking Mini Form */}
            <div className="w-full lg:w-96 bg-white text-[#1b1c1a] p-6 rounded-3xl shadow-xl relative z-10 space-y-4">
              <h4 className="font-title-md text-[#081534] font-bold">Claim Your Free Slot</h4>
              {!formSubmitted ? (
                <form className="space-y-3" onSubmit={handleBookingSubmit}>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#45464e] mb-1">
                      Student / Parent Name *
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f3f0] text-[#1b1c1a] text-xs focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#ff7a30] transition-colors"
                      placeholder="e.g. Priya Sharma"
                      required
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#45464e] mb-1">
                      Current Grade Level
                    </label>
                    <select
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f3f0] text-[#1b1c1a] text-xs focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#ff7a30] transition-colors"
                      value={formGrade}
                      onChange={(e) => setFormGrade(e.target.value)}
                    >
                      <option>Grade 9 (Preparing for Board Year)</option>
                      <option>Grade 10 (Stream Selection Imminent)</option>
                      <option>Grade 8 (Early Exploration)</option>
                      <option>Parent of 9th / 10th Grader</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#45464e] mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f3f0] text-[#1b1c1a] text-xs focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#ff7a30] transition-colors"
                      placeholder="+91 98765 43210"
                      required
                      type="tel"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                    />
                  </div>
                  <button
                    className="w-full py-3 px-4 rounded-full bg-[#ff7a30] text-white font-label-lg text-sm shadow-md hover:bg-[#a04100] active:scale-[0.98] transition-all font-semibold cursor-pointer"
                    type="submit"
                  >
                    Confirm Clarity Call
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">check_circle</span>
                  </div>
                  <h4 className="font-headline-sm text-[#081534] font-bold">Request Received!</h4>
                  <p className="text-xs text-[#45464e]">
                    A certified counselor will reach out via WhatsApp/Phone at <strong>{formPhone}</strong> within 24 hours.
                  </p>
                </div>
              )}
              <p className="font-label-sm text-[11px] text-[#45464e] text-center">
                Prefer a phone call directly? Call{' '}
                <a className="text-[#a04100] font-bold hover:underline" href="tel:1800GROWTHEDU">
                  1800-GROWTH-EDU
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
