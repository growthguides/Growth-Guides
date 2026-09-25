import React, { useState } from 'react';
import { ASSETS, MENTORS } from '../data/mockData';

interface CoachingPageProps {
  onOpenBooking: () => void;
}

export const CoachingPage: React.FC<CoachingPageProps> = ({ onOpenBooking }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    onOpenBooking();
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#fbf9f6] pb-12 pt-6 md:pt-10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eae8e5] text-[#081534] shadow-sm">
                <span className="material-symbols-outlined text-[#ff7a30] text-sm">verified</span>
                <span className="font-label-md text-xs font-bold uppercase tracking-wider text-[#45464e]">
                  Integrated Mentorship for 9th &amp; 10th Graders
                </span>
              </div>

              <h1 className="font-display text-[#081534] tracking-tight">
                Beyond Just Marks: Balancing Academic Mastery with Mental Resilience.
              </h1>

              <p className="font-body-lg text-body-lg text-[#45464e] leading-relaxed max-w-xl">
                A synchronized coaching framework engineered specifically for early teens. We blend deep conceptual mastery for high-stakes school boards with accredited cognitive wellness strategies.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href="#plans-section"
                  className="px-6 py-3.5 rounded-full bg-[#ff7a30] text-white font-label-lg text-sm font-semibold shadow-[0_4px_14px_rgba(255,122,48,0.35)] hover:bg-[#a04100] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Explore Coaching Plans
                </a>
                <a
                  href="#week-cadence"
                  className="px-5 py-3.5 rounded-full bg-white text-[#081534] font-label-lg text-sm font-semibold border border-[#081534]/10 shadow-sm hover:bg-[#efeeeb] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm text-[#ff7a30]">calendar_today</span>
                  <span>How A Week Works</span>
                </a>
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 pt-6 max-w-lg">
                <div className="flex flex-col bg-white p-3.5 rounded-2xl shadow-sm border border-[#081534]/5">
                  <span className="font-headline-md text-headline-md text-[#081534] font-bold">98.4%</span>
                  <span className="font-label-sm text-xs text-[#45464e]">Exam Confidence Index</span>
                </div>
                <div className="flex flex-col bg-white p-3.5 rounded-2xl shadow-sm border border-[#081534]/5">
                  <span className="font-headline-md text-headline-md text-[#a04100] font-bold">1:1 Ratio</span>
                  <span className="font-label-sm text-xs text-[#45464e]">Dedicated Mentor Pair</span>
                </div>
                <div className="flex flex-col bg-white p-3.5 rounded-2xl shadow-sm border border-[#081534]/5">
                  <span className="font-headline-md text-headline-md text-[#003131] font-bold">4 Board</span>
                  <span className="font-label-sm text-xs text-[#45464e]">Curricula Covered</span>
                </div>
              </div>
            </div>

            {/* Right Visual Photo with Dual-Care Protocol Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#efeeeb] border-4 border-white">
                <img
                  className="w-full h-96 object-cover"
                  alt="Student smiling studying alongside mentor"
                  src={ASSETS.ananyaLibrary}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081534]/80 via-transparent to-transparent"></div>

                {/* Floating Dual-Care Protocol Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ffdbcc] text-[#a04100] flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-xl">psychology</span>
                    </div>
                    <div>
                      <h4 className="font-title-md text-[#081534] font-bold text-xs">Dual-Care Protocol</h4>
                      <p className="font-body-sm text-[11px] text-[#45464e]">
                        Academic Tutor + Wellness Counselor
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Pillars Section */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="font-label-sm text-xs font-bold text-[#a04100] uppercase tracking-widest">
              Two Pillars. One Unified Goal.
            </span>
            <h2 className="font-headline-lg text-[#081534]">The Synergy of Mastery and Calm</h2>
            <p className="font-body-md text-sm text-[#45464e]">
              Academic pressure peaks during 9th and 10th grades. Our curriculum pairs subject excellence with the emotional foundation required to sustain it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pillar 01: Academic Coaching */}
            <div className="bg-[#f5f3f0] p-6 lg:p-8 rounded-3xl shadow-sm border border-[#081534]/5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-[#081534] text-white flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-2xl">school</span>
                  </span>
                  <span className="text-xs font-semibold text-[#45464e]">
                    CBSE • ICSE • IGCSE • State
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-[#a04100] uppercase">PILLAR 01</span>
                  <h3 className="font-headline-md text-[#081534] font-bold">1-on-1 Academic Coaching</h3>
                  <p className="text-xs text-[#45464e] mt-1 leading-relaxed">
                    Rigorous, personalized curriculum execution designed to demystify complex subjects and build rock-solid foundational concepts.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-2xl shadow-2xs space-y-1">
                    <div className="flex items-center gap-2 font-bold text-xs text-[#081534]">
                      <span className="material-symbols-outlined text-[#ff7a30] text-sm">menu_book</span>
                      <span>Tailored Board Blueprints</span>
                    </div>
                    <p className="text-[11px] text-[#45464e] pl-6 leading-relaxed">
                      Syllabus pacing aligned to exact school calendars with proactive unit pre-learning.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-2xl shadow-2xs space-y-1">
                    <div className="flex items-center gap-2 font-bold text-xs text-[#081534]">
                      <span className="material-symbols-outlined text-[#ff7a30] text-sm">functions</span>
                      <span>STEM Concept Clarification</span>
                    </div>
                    <p className="text-[11px] text-[#45464e] pl-6 leading-relaxed">
                      Step-by-step diagnostic breakdown of physics kinematics, quadratic math, and organic chemistry foundations.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-2xl shadow-2xs space-y-1">
                    <div className="flex items-center gap-2 font-bold text-xs text-[#081534]">
                      <span className="material-symbols-outlined text-[#ff7a30] text-sm">autorenew</span>
                      <span>Active Recall &amp; Spaced Repetition</span>
                    </div>
                    <p className="text-[11px] text-[#45464e] pl-6 leading-relaxed">
                      Mock papers analyzed through error taxonomy charts to turn recurring mistakes into strengths.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-2xl shadow-2xs space-y-1">
                    <div className="flex items-center gap-2 font-bold text-xs text-[#081534]">
                      <span className="material-symbols-outlined text-[#ff7a30] text-sm">flag</span>
                      <span>Weekly Micro-Milestone Reviews</span>
                    </div>
                    <p className="text-[11px] text-[#45464e] pl-6 leading-relaxed">
                      Parent and student visibility with objective scorecard updates every Sunday evening.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#081534] text-white rounded-2xl flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#8691b7] block text-[10px] uppercase font-semibold">Focus Areas</span>
                  <span className="font-semibold">Mathematics • Science • English &amp; Critical Writing</span>
                </div>
                <span className="material-symbols-outlined text-sm text-[#ffdbcc]">grid_view</span>
              </div>
            </div>

            {/* Pillar 02: Youth Wellness & Mindset */}
            <div className="bg-[#f5f3f0] p-6 lg:p-8 rounded-3xl shadow-sm border border-[#081534]/5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-[#ff7a30] text-white flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-2xl">spa</span>
                  </span>
                  <span className="text-xs font-semibold text-[#45464e]">
                    Cognitive Wellness Certified
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-[#a04100] uppercase">PILLAR 02</span>
                  <h3 className="font-headline-md text-[#081534] font-bold">1-on-1 Youth Wellness &amp; Mindset</h3>
                  <p className="text-xs text-[#45464e] mt-1 leading-relaxed">
                    Dedicated psychologist-backed guidance to combat burnout, balance digital habits, and instill unshakable self-worth.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-2xl shadow-2xs space-y-1">
                    <div className="flex items-center gap-2 font-bold text-xs text-[#081534]">
                      <span className="material-symbols-outlined text-[#a04100] text-sm">self_improvement</span>
                      <span>Performance Anxiety Alleviation</span>
                    </div>
                    <p className="text-[11px] text-[#45464e] pl-6 leading-relaxed">
                      Somatic breathing triggers and cognitive reframing techniques designed specifically for exam hall blackouts.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-2xl shadow-2xs space-y-1">
                    <div className="flex items-center gap-2 font-bold text-xs text-[#081534]">
                      <span className="material-symbols-outlined text-[#a04100] text-sm">phonelink_erase</span>
                      <span>Dopamine &amp; Screen Regulation</span>
                    </div>
                    <p className="text-[11px] text-[#45464e] pl-6 leading-relaxed">
                      Practical, shame-free frameworks for handling smartphone notifications, study sleep cycles, and late-night focus.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-2xl shadow-2xs space-y-1">
                    <div className="flex items-center gap-2 font-bold text-xs text-[#081534]">
                      <span className="material-symbols-outlined text-[#a04100] text-sm">favorite</span>
                      <span>Peer Pressure &amp; Identity Defense</span>
                    </div>
                    <p className="text-[11px] text-[#45464e] pl-6 leading-relaxed">
                      Constructive self-talk patterns to eliminate comparisons with friends or classmates.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-2xl shadow-2xs space-y-1">
                    <div className="flex items-center gap-2 font-bold text-xs text-[#081534]">
                      <span className="material-symbols-outlined text-[#a04100] text-sm">lock</span>
                      <span>Strictly Confidential Sanctuary</span>
                    </div>
                    <p className="text-[11px] text-[#45464e] pl-6 leading-relaxed">
                      A verified neutral safe-space where teens can voice doubts without parental or academic judgment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#eae8e5] text-[#081534] rounded-2xl flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#76777f] block text-[10px] uppercase font-semibold">Ethos</span>
                  <span className="font-semibold">Empathy First • Evidence-Based • Non-Punitive</span>
                </div>
                <span className="material-symbols-outlined text-sm text-[#ff7a30]">psychology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Cadence: A Week in the Mentoring Program */}
      <section className="w-full py-12 bg-[#f5f3f0]" id="week-cadence">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-sm text-xs font-bold text-[#a04100] uppercase tracking-widest">
                Structured Cadence
              </span>
              <h2 className="font-headline-lg text-[#081534] mt-1">A Week in the Mentoring Program</h2>
            </div>
            <p className="font-body-md text-xs text-[#45464e] max-w-md">
              We don’t overwhelm students with endless daily coaching calls. Routine creates calm and sustainable excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* MON */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#081534]/5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#eae8e5] text-[#081534] font-label-sm text-xs font-semibold">
                    Phase 01
                  </span>
                  <span className="font-headline-sm text-headline-sm text-[#ff7a30] font-bold">MON</span>
                </div>
                <div>
                  <h3 className="font-title-md text-[#081534] font-bold">Goal Setting &amp; Horizon Planning</h3>
                  <p className="text-xs text-[#45464e] mt-1 leading-relaxed">
                    30-minute strategic huddle to review the school week ahead, allocate topic priorities, and schedule revision blocks.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-[#45464e]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">check</span>
                    Priority checklist formulation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">check</span>
                    Identification of difficult homework items
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-[#efeeeb] mt-6 text-xs text-[#a04100] font-semibold">
                30 mins 1-on-1 virtual
              </div>
            </div>

            {/* WED */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#081534]/5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#eae8e5] text-[#081534] font-label-sm text-xs font-semibold">
                    Phase 02
                  </span>
                  <span className="font-headline-sm text-headline-sm text-[#ff7a30] font-bold">WED</span>
                </div>
                <div>
                  <h3 className="font-title-md text-[#081534] font-bold">Mid-Week Deep Academic Deep-Dive</h3>
                  <p className="text-xs text-[#45464e] mt-1 leading-relaxed">
                    Targeted academic coaching tackling current school modules. Direct problem solving, formula derivation, and conceptual clarity.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-[#45464e]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">check</span>
                    Live question dissection
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">check</span>
                    Rapid test assessment feedback
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-[#efeeeb] mt-6 text-xs text-[#a04100] font-semibold">
                60 mins interactive session
              </div>
            </div>

            {/* FRI */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#081534]/5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#eae8e5] text-[#081534] font-label-sm text-xs font-semibold">
                    Phase 03
                  </span>
                  <span className="font-headline-sm text-headline-sm text-[#ff7a30] font-bold">FRI</span>
                </div>
                <div>
                  <h3 className="font-title-md text-[#081534] font-bold">Wellness Check &amp; Reflection</h3>
                  <p className="text-xs text-[#45464e] mt-1 leading-relaxed">
                    Mindfulness exercise, decompression talk, peer dynamic check-ins, and establishing healthy digital boundaries for the weekend.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-[#45464e]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">check</span>
                    Stress level scoring check
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">check</span>
                    Restorative weekend recovery plan
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-[#efeeeb] mt-6 text-xs text-[#a04100] font-semibold">
                45 mins wellness session
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Mentors Who Guide Your Journey */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="font-label-sm text-xs font-bold text-[#a04100] uppercase tracking-widest">
              Expert Guidance
            </span>
            <h2 className="font-headline-lg text-[#081534]">The Mentors Who Guide Your Journey</h2>
            <p className="font-body-md text-sm text-[#45464e]">
              Our mentors hold degrees in psychology, education, and analytical sciences from top institutions, vetted for deep empathetic rapport with teens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MENTORS.map((m) => (
              <div
                key={m.id}
                className="bg-[#f5f3f0] rounded-3xl p-6 shadow-sm border border-[#081534]/5 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={m.imageUrl}
                      alt={m.name}
                      className="w-full h-48 object-cover rounded-2xl shadow-xs"
                    />
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#081534]/85 text-white backdrop-blur-md text-[11px] font-bold">
                      {m.role}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-title-md text-[#081534] font-bold">{m.name}</h3>
                    <p className="text-xs text-[#ff7a30] font-bold mt-0.5">{m.title}</p>
                    <p className="text-xs text-[#45464e] mt-2 leading-relaxed">{m.bio}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#eae8e5] text-xs text-[#081534] font-medium flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-[#a04100]">school</span>
                  <span>{m.education}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent, Tailored Guidance Tracks */}
      <section className="w-full py-12 bg-[#f5f3f0]" id="plans-section">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="font-label-sm text-xs font-bold text-[#a04100] uppercase tracking-widest">
              Coaching Plans
            </span>
            <h2 className="font-headline-lg text-[#081534]">Transparent, Tailored Guidance Tracks</h2>
            <p className="font-body-md text-sm text-[#45464e]">
              Select the level of support that matches your grade level, upcoming milestones, and personal goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Starter Clarity Track */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-[#081534]/5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-[#45464e] uppercase tracking-wider">Foundation</span>
                  <h3 className="font-headline-sm text-[#081534] font-bold mt-1">Starter Clarity Track</h3>
                  <p className="text-xs text-[#45464e] mt-1 leading-relaxed">
                    Ideal for students entering 9th grade seeking to establish study rhythm and learn baseline stress management.
                  </p>
                </div>

                <div className="py-2 border-y border-[#efeeeb]">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-display text-[#081534]">4 Weeks</span>
                    <span className="text-xs text-[#45464e]">/ diagnostic trial</span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-[#45464e]">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm mt-0.5">check</span>
                    <span>Diagnostic strength &amp; learning style audit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm mt-0.5">check</span>
                    <span>4x 1-on-1 Academic Subject Sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm mt-0.5">check</span>
                    <span>2x Youth Wellness &amp; Habit check-ins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm mt-0.5">check</span>
                    <span>Personalized study schedule design</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleSelectPlan('Starter Clarity Track')}
                className="w-full py-3 rounded-full bg-[#f5f3f0] text-[#081534] font-label-lg text-sm hover:bg-[#eae8e5] transition-colors font-bold cursor-pointer"
              >
                Get Started
              </button>
            </div>

            {/* 3-Month Prep & Wellness (Most Popular) */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border-2 border-[#ff7a30] flex flex-col justify-between space-y-6 relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#ff7a30] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                Most Popular
              </div>

              <div className="space-y-4 pt-1">
                <div>
                  <span className="text-xs font-bold text-[#a04100] uppercase tracking-wider">Board Intensive</span>
                  <h3 className="font-headline-sm text-[#081534] font-bold mt-1">3–Month Prep &amp; Wellness</h3>
                  <p className="text-xs text-[#45464e] mt-1 leading-relaxed">
                    Designed for 10th graders preparing for pre-boards and boards with rigorous exam rehearsal and mindset fortitude.
                  </p>
                </div>

                <div className="py-2 border-y border-[#efeeeb]">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-display text-[#ff7a30]">12 Weeks</span>
                    <span className="text-xs text-[#45464e]">/ structured cycle</span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-[#45464e]">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm mt-0.5">check</span>
                    <span>Dedicated Academic + Wellness Duo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm mt-0.5">check</span>
                    <span>12x Academic Mentorship Sessions (Math/Sci)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm mt-0.5">check</span>
                    <span>6x Anxiety Relief &amp; Mindset Workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm mt-0.5">check</span>
                    <span>3 Proctored Full-Length Mock Exam Analyses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm mt-0.5">check</span>
                    <span>Bi-weekly parent progress consultation</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleSelectPlan('3-Month Prep & Wellness')}
                className="w-full py-3.5 rounded-full bg-[#ff7a30] text-white font-label-lg text-sm shadow-[0_4px_14px_rgba(255,122,48,0.35)] hover:bg-[#a04100] transition-colors font-bold cursor-pointer"
              >
                Book 3–Month Program
              </button>
            </div>

            {/* Full-Year Transformation */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-[#081534]/5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-[#45464e] uppercase tracking-wider">Complete Journey</span>
                  <h3 className="font-headline-sm text-[#081534] font-bold mt-1">Full–Year Transformation</h3>
                  <p className="text-xs text-[#45464e] mt-1 leading-relaxed">
                    Comprehensive 360-degree academic mastery, stream discovery, and executive functioning mentorship across the school year.
                  </p>
                </div>

                <div className="py-2 border-y border-[#efeeeb]">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-display text-[#081534]">Academic Year</span>
                    <span className="text-xs text-[#45464e]">/ holistic care</span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-[#45464e]">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm mt-0.5">check</span>
                    <span>Full continuous syllabus coverage &amp; pre-learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm mt-0.5">check</span>
                    <span>Weekly Academic + Bi-weekly Wellness sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm mt-0.5">check</span>
                    <span>Stream selection diagnostic test (Post-10th roadmap)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm mt-0.5">check</span>
                    <span>Priority 24/7 mentor doubt helpline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm mt-0.5">check</span>
                    <span>Comprehensive term report portfolio</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleSelectPlan('Full-Year Transformation')}
                className="w-full py-3 rounded-full bg-[#081534] text-white font-label-lg text-sm hover:bg-[#1e2a4a] transition-colors font-bold cursor-pointer"
              >
                Join Annual Track
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Speak with Senior Counselor Banner */}
      <section className="w-full py-10 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="p-8 md:p-12 rounded-3xl bg-[#081534] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase font-bold text-[#ffdbcc] tracking-wider">Zero Obligation</span>
              <h3 className="font-headline-md text-white">Speak with a Senior Academic Counselor First</h3>
              <p className="text-xs text-[#8691b7] leading-relaxed">
                Schedule a complimentary 25-minute discovery consultation for you and your child. We’ll assess current performance pain points and identify the exact guidance fit.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-full bg-[#ff7a30] text-white font-label-lg text-sm font-semibold shadow-md hover:bg-[#a04100] transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Book Free Diagnostic Call</span>
              <span className="material-symbols-outlined text-sm">call</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
