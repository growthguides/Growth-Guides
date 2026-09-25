import React, { useState } from 'react';
import { ASSETS } from '../data/mockData';

interface WellnessPageProps {
  onOpenBooking: () => void;
}

export const WellnessPage: React.FC<WellnessPageProps> = ({ onOpenBooking }) => {
  const [stressScore, setStressScore] = useState<number>(3);
  const [sleepHours, setSleepHours] = useState<number>(6);
  const [screenCheck, setScreenCheck] = useState<'high' | 'moderate' | 'low'>('high');

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-[#fbf9f6] pb-12 pt-6 md:pt-10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffdbcc] text-[#351000] text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">spa</span>
              Adolescent Cognitive Health &amp; Exam Calm
            </div>

            <h1 className="font-display text-[#081534] tracking-tight">
              Calm Under Pressure: The Psychological Backbone for 9th &amp; 10th.
            </h1>

            <p className="font-body-lg text-body-lg text-[#45464e] leading-relaxed">
              When teenagers freeze in exam halls or spiral into late-night revision panic, it is not a lack of intelligence—it is nervous system dysregulation. We coach youth on somatic de-escalation, REM sleep defense, and constructive self-worth.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full bg-[#ff7a30] text-white font-label-lg text-sm shadow-[0_4px_14px_rgba(255,122,48,0.35)] hover:bg-[#a04100] transition-colors font-bold cursor-pointer"
              >
                Book 1-on-1 Wellness Mentoring Call
              </button>
              <a
                href="#stress-meter"
                className="px-5 py-3.5 rounded-full bg-white text-[#081534] font-label-lg text-sm font-semibold border border-[#081534]/10 shadow-sm hover:bg-[#efeeeb] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Take 2-Min Wellness Check</span>
                <span className="material-symbols-outlined text-sm">arrow_downward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Adolescent Mindset */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="font-label-sm text-xs font-bold text-[#a04100] uppercase tracking-widest">
              Clinical Psychology Framework
            </span>
            <h2 className="font-headline-lg text-[#081534]">The Four Calming Pillars</h2>
            <p className="font-body-md text-sm text-[#45464e]">
              Co-designed with Dr. Ananya Sharma (NIMHANS) for high-stakes board candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[#f5f3f0] space-y-3 border border-[#081534]/5">
              <div className="w-12 h-12 rounded-2xl bg-[#081534] text-white flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-xl text-[#ffdbcc]">air</span>
              </div>
              <h3 className="font-title-md text-[#081534] font-bold text-sm">
                Somatic Reset &amp; Breath Cadence
              </h3>
              <p className="text-xs text-[#45464e] leading-relaxed">
                4-7-8 breathing patterns and physical grounding exercises that drop elevated heart rates and abort fight-or-flight panics inside exam rooms.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f5f3f0] space-y-3 border border-[#081534]/5">
              <div className="w-12 h-12 rounded-2xl bg-[#ff7a30] text-white flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-xl">bedtime</span>
              </div>
              <h3 className="font-title-md text-[#081534] font-bold text-sm">
                Circadian &amp; REM Sleep Hygiene
              </h3>
              <p className="text-xs text-[#45464e] leading-relaxed">
                Why all-nighters reduce memory consolidation by 40%. Practical bedtime shutdowns that teens can actually adopt without guilt.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f5f3f0] space-y-3 border border-[#081534]/5">
              <div className="w-12 h-12 rounded-2xl bg-[#003131] text-[#91f3f2] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-xl">phonelink_erase</span>
              </div>
              <h3 className="font-title-md text-[#081534] font-bold text-sm">
                Dopamine &amp; Screen Sanctuaries
              </h3>
              <p className="text-xs text-[#45464e] leading-relaxed">
                Replacing punitive phone bans with collaborative "friction zones" so study focus returns naturally without family conflict.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f5f3f0] space-y-3 border border-[#081534]/5">
              <div className="w-12 h-12 rounded-2xl bg-[#a04100] text-white flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-xl text-[#ffdbcc]">psychology</span>
              </div>
              <h3 className="font-title-md text-[#081534] font-bold text-sm">
                Identity &amp; Peer Comparison Defense
              </h3>
              <p className="text-xs text-[#45464e] leading-relaxed">
                Separating self-esteem from marks. Building emotional immunity against toxic relative chatter and school hallway rank gossip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stress & Focus Meter */}
      <section className="w-full py-12 bg-[#f5f3f0]" id="stress-meter">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="p-6 md:p-10 rounded-3xl bg-white shadow-md border border-[#081534]/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#efeeeb] text-[#081534] text-xs font-bold uppercase">
                <span className="material-symbols-outlined text-sm text-[#ff7a30]">speed</span>
                Interactive Diagnostic Tool
              </div>
              <h2 className="font-headline-lg text-[#081534]">
                Current Teenage Academic Stress Meter
              </h2>
              <p className="font-body-md text-xs text-[#45464e] leading-relaxed">
                Adjust the sliders based on the past 14 days of study routines to view a rapid cognitive wellness summary.
              </p>

              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-[#081534]">
                    <span>Perceived Exam Anxiety Level</span>
                    <span className="text-[#a04100]">{stressScore} / 5</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={stressScore}
                    onChange={(e) => setStressScore(Number(e.target.value))}
                    className="w-full accent-[#ff7a30] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#76777f]">
                    <span>1 (Very Calm)</span>
                    <span>3 (Frequent Butterflies)</span>
                    <span>5 (Panic &amp; Blankouts)</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-[#081534]">
                    <span>Average Nightly Sleep</span>
                    <span className="text-[#a04100]">{sleepHours} Hours</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="9"
                    value={sleepHours}
                    onChange={(e) => setSleepHours(Number(e.target.value))}
                    className="w-full accent-[#ff7a30] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#76777f]">
                    <span>4 Hours (Severe Deficit)</span>
                    <span>7 Hours (Recommended)</span>
                    <span>9 Hours (Optimal Recovery)</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="block text-xs font-bold text-[#081534]">Late-Night Smartphone Exposure</span>
                  <div className="grid grid-cols-3 gap-2">
                    {(['high', 'moderate', 'low'] as const).map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setScreenCheck(lvl)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold capitalize transition-all cursor-pointer ${
                          screenCheck === lvl
                            ? 'bg-[#081534] text-white shadow-sm'
                            : 'bg-[#f5f3f0] text-[#45464e] hover:bg-[#eae8e5]'
                        }`}
                      >
                        {lvl} Exposure
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#f5f3f0] p-6 sm:p-8 rounded-3xl space-y-4 border border-[#081534]/5">
              <div className="flex items-center justify-between pb-2 border-b border-[#eae8e5]">
                <span className="text-xs uppercase font-bold text-[#081534]">Prescribed Wellness Action Plan</span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                  stressScore >= 4 || sleepHours <= 5 ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {stressScore >= 4 || sleepHours <= 5 ? 'Elevated Fatigue Risk' : 'Manageable Baseline'}
                </span>
              </div>

              <div className="p-4 bg-white rounded-2xl shadow-2xs space-y-2">
                <h4 className="font-title-md text-[#081534] font-bold text-sm">
                  {stressScore >= 4
                    ? 'Recommended: Somatic De-escalation & Exam Rehearsal'
                    : 'Recommended: Habit Lock & Time Management Sprint'}
                </h4>
                <p className="text-xs text-[#45464e] leading-relaxed">
                  {stressScore >= 4
                    ? 'Your teen shows signs of sympathetic nervous system overdrive. We recommend twice-weekly breathwork paired with timed, low-stakes mock drills to extinguish the fight-or-flight panic cycle.'
                    : 'Current indicators show good coping, but sleep architecture needs defense to ensure long-term retention through board examinations.'}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#ff7a30] text-white font-label-lg text-xs font-semibold shadow-md hover:bg-[#a04100] transition-colors cursor-pointer"
                >
                  Discuss with Dr. Ananya Sharma
                </button>
                <span className="text-[11px] text-[#76777f]">Free 30-min discovery session</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Advisory Guide Box */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="p-8 md:p-12 rounded-3xl bg-[#081534] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold text-[#ffdbcc] uppercase tracking-wider">For Parents</span>
              <h3 className="font-headline-md text-white">
                "How to Talk About Board Marks Without Triggering Defensive Resistance"
              </h3>
              <p className="text-xs text-[#8691b7] leading-relaxed">
                Download our 12-page counselor cheat-sheet on translating parent worry into empowering teamwork. Includes 7 constructive conversation starters.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full bg-white text-[#081534] font-label-lg text-xs font-bold hover:bg-[#f5f3f0] transition-colors shrink-0 cursor-pointer shadow-md"
            >
              Get Parent Advisory Guidebook
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
