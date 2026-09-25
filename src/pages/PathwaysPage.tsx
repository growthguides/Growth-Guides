import React, { useState } from 'react';
import { StreamKey } from '../types';
import { ASSETS } from '../data/mockData';

interface PathwaysPageProps {
  initialStream?: StreamKey;
  onOpenBooking: () => void;
}

export const PathwaysPage: React.FC<PathwaysPageProps> = ({
  initialStream = 'science',
  onOpenBooking
}) => {
  const [activeStream, setActiveStream] = useState<StreamKey>(initialStream);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [downloadEmail, setDownloadEmail] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const quizQuestions = [
    {
      q: 'When faced with a complex school science project, what excited you the most?',
      options: [
        { text: 'Calculating formulas & testing physical models', type: 'science' },
        { text: 'Budgeting materials & pitching the idea to teachers', type: 'commerce' },
        { text: 'Crafting the narrative, storytelling & visual design', type: 'arts' }
      ]
    },
    {
      q: 'On a free Saturday afternoon, which activity sounds most naturally engaging?',
      options: [
        { text: 'Troubleshooting computer software or building DIY electronics', type: 'science' },
        { text: 'Researching how startups monetize or tracking crypto/stock trends', type: 'commerce' },
        { text: 'Debating global politics, philosophy, or sketching creative ideas', type: 'arts' }
      ]
    },
    {
      q: 'Which school subject do you absorb with the least mental resistance?',
      options: [
        { text: 'Mathematics, Physics or Biology experiments', type: 'science' },
        { text: 'Social sciences, Commercial Studies, or Economics', type: 'commerce' },
        { text: 'English Literature, Creative Arts, or Civics & History', type: 'arts' }
      ]
    }
  ];

  const handleAnswer = (type: string) => {
    const updated = [...quizAnswers, type];
    setQuizAnswers(updated);
    if (currentQuizQuestion < quizQuestions.length) {
      setCurrentQuizQuestion(currentQuizQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuizQuestion(1);
    setQuizAnswers([]);
    setQuizCompleted(false);
  };

  const getQuizResult = () => {
    const counts: Record<string, number> = { science: 0, commerce: 0, arts: 0 };
    quizAnswers.forEach((ans) => {
      counts[ans] = (counts[ans] || 0) + 1;
    });

    let winner = 'science';
    if (counts.commerce > counts.science && counts.commerce >= counts.arts) winner = 'commerce';
    if (counts.arts > counts.science && counts.arts > counts.commerce) winner = 'arts';

    if (winner === 'science') {
      return {
        title: 'Strong Scientific & STEM Inclination',
        desc: 'You enjoy empirical inquiry, structured systems, and quantitative problem solving. Consider diving deep into PCM or PCB specializations.'
      };
    } else if (winner === 'commerce') {
      return {
        title: 'Strong Business & Strategic Mindset',
        desc: 'You possess analytical pragmatism, market curiosity, and operational instinct. Commerce with Math will open formidable leadership options.'
      };
    } else {
      return {
        title: 'Strong Humanities & Creative Instinct',
        desc: 'You excel in conceptual synthesis, communication, and human dynamics. Top-tier design, law, or public policy degrees suit you.'
      };
    }
  };

  const handleDownloadHandbook = (e: React.FormEvent) => {
    e.preventDefault();
    if (downloadEmail) {
      setDownloadSuccess(true);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Subtle decorative ambient glows behind main header */}
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-8 pt-8 md:pt-10 pb-6 overflow-hidden">
        <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-[#ff7a30]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-[#74d6d6]/20 blur-3xl pointer-events-none"></div>

        {/* Editorial Header & Overview */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eae8e5] text-[#45464e] shadow-sm">
              <span className="material-symbols-outlined text-[#ff7a30] text-base">explore</span>
              <span className="font-label-md text-label-md tracking-wide uppercase font-bold text-[#a04100]">
                Decision Hub • Grade 9 &amp; 10
              </span>
            </div>
            <h1 className="font-display text-[#081534] tracking-tight">
              What’s Next After 10th? <br />
              <span className="text-[#ff7a30]">Stream Explorer</span> &amp; Roadmap.
            </h1>
            <p className="font-body-lg text-body-lg text-[#45464e] max-w-2xl leading-relaxed">
              Making the transition from 10th standard shouldn’t feel like a high-stakes gamble. Compare core subjects, entrance tests, stress factors, and future career horizons side-by-side.
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-md shrink-0 border border-[#081534]/5">
            <div className="flex flex-col pr-4 border-r border-[#eae8e5]">
              <span className="font-headline-md text-headline-md text-[#081534] font-bold">4 Major</span>
              <span className="font-label-sm text-label-sm text-[#45464e]">Academic Streams</span>
            </div>
            <div className="flex flex-col pr-4 border-r border-[#eae8e5]">
              <span className="font-headline-md text-headline-md text-[#ff7a30] font-bold">120+</span>
              <span className="font-label-sm text-label-sm text-[#45464e]">Emerging Pathways</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-[#081534] font-bold">98.4%</span>
              <span className="font-label-sm text-label-sm text-[#45464e]">Clarity Index</span>
            </div>
          </div>
        </div>

        {/* Interactive Stream Navigator Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-4">
          <button
            onClick={() => setActiveStream('science')}
            className={`px-5 py-2.5 rounded-full font-label-lg text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeStream === 'science'
                ? 'bg-[#081534] text-white shadow-md font-bold'
                : 'bg-white text-[#45464e] hover:text-[#081534] shadow-sm'
            }`}
          >
            <span className="material-symbols-outlined text-lg">science</span> Science (PCM / PCB)
          </button>
          <button
            onClick={() => setActiveStream('commerce')}
            className={`px-5 py-2.5 rounded-full font-label-lg text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeStream === 'commerce'
                ? 'bg-[#081534] text-white shadow-md font-bold'
                : 'bg-white text-[#45464e] hover:text-[#081534] shadow-sm'
            }`}
          >
            <span className="material-symbols-outlined text-lg">payments</span> Commerce (Math / Non-Math)
          </button>
          <button
            onClick={() => setActiveStream('arts')}
            className={`px-5 py-2.5 rounded-full font-label-lg text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeStream === 'arts'
                ? 'bg-[#081534] text-white shadow-md font-bold'
                : 'bg-white text-[#45464e] hover:text-[#081534] shadow-sm'
            }`}
          >
            <span className="material-symbols-outlined text-lg">palette</span> Arts &amp; Humanities
          </button>
          <button
            onClick={() => setActiveStream('applied')}
            className={`px-5 py-2.5 rounded-full font-label-lg text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeStream === 'applied'
                ? 'bg-[#081534] text-white shadow-md font-bold'
                : 'bg-white text-[#45464e] hover:text-[#081534] shadow-sm'
            }`}
          >
            <span className="material-symbols-outlined text-lg">memory</span> Vocational &amp; Applied AI
          </button>
        </div>

        {/* Dynamic Stream Content Area */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left/Main Feature Column (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 lg:p-8 shadow-md border border-[#081534]/5 transition-all">
            {/* Science Panel */}
            {activeStream === 'science' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#ffdbcc] text-[#351000] font-label-sm text-xs uppercase tracking-wider mb-2 font-bold">
                      Analytical &amp; Empirical
                    </span>
                    <h2 className="font-headline-lg text-[#081534]">Science: PCM &amp; PCB Specializations</h2>
                  </div>
                  <div className="flex items-center gap-2 bg-[#efeeeb] px-3.5 py-1.5 rounded-full w-fit">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">equalizer</span>
                    <span className="font-label-sm text-xs text-[#1b1c1a]">
                      Effort Curve: <strong>High Rigor</strong>
                    </span>
                  </div>
                </div>

                <p className="font-body-md text-[#45464e] leading-relaxed">
                  Built for inquisitive problem-solvers who enjoy conceptual deduction, mathematical proofs, experimental observation, and technological innovation. It acts as an open gate to STEM, medical frontiers, and quantitative sciences.
                </p>

                {/* PCM vs PCB Breakdown Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* PCM Card */}
                  <div className="bg-[#f5f3f0] p-5 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#081534] text-white flex items-center justify-center font-headline-sm">
                        <span className="material-symbols-outlined text-xl">precision_manufacturing</span>
                      </div>
                      <span className="font-label-sm text-xs px-2.5 py-1 rounded bg-[#e4e2df] text-[#45464e] font-semibold">
                        Engineering Track
                      </span>
                    </div>
                    <div>
                      <h3 className="font-title-md text-[#081534] font-bold">PCM (Physics, Chem, Math)</h3>
                      <p className="font-body-sm text-[#45464e] mt-1">
                        Combinations with Computer Science, Information Practices, or Physical Education.
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <span className="font-label-sm text-xs text-[#081534] font-bold uppercase tracking-wider">Top Careers:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {['Software Architecture', 'Robotics & AI', 'Aerospace', 'Defense & NDA'].map((c) => (
                          <span key={c} className="px-2 py-0.5 rounded-full bg-white text-[#1b1c1a] font-label-sm text-xs shadow-2xs">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-1">
                      <span className="font-label-sm text-xs text-[#a04100] font-bold">Target Exams:</span>
                      <p className="font-body-sm text-[#45464e] text-xs mt-0.5">JEE Main / Adv, NDA, CUET, BITSAT, IISER IAT</p>
                    </div>
                  </div>

                  {/* PCB Card */}
                  <div className="bg-[#f5f3f0] p-5 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#ff7a30] text-white flex items-center justify-center font-headline-sm">
                        <span className="material-symbols-outlined text-xl">eyeglasses_2</span>
                      </div>
                      <span className="font-label-sm text-xs px-2.5 py-1 rounded bg-[#e4e2df] text-[#45464e] font-semibold">
                        Life Sciences
                      </span>
                    </div>
                    <div>
                      <h3 className="font-title-md text-[#081534] font-bold">PCB (Physics, Chem, Biology)</h3>
                      <p className="font-body-sm text-[#45464e] mt-1">
                        Combinations with Biotechnology, Psychology, or Fine Arts for multidisciplinary insight.
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <span className="font-label-sm text-xs text-[#081534] font-bold uppercase tracking-wider">Top Careers:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {['Medicine (MBBS/BDS)', 'Genomics & Biotech', 'Neuroscience', 'Public Health'].map((c) => (
                          <span key={c} className="px-2 py-0.5 rounded-full bg-white text-[#1b1c1a] font-label-sm text-xs shadow-2xs">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-1">
                      <span className="font-label-sm text-xs text-[#a04100] font-bold">Target Exams:</span>
                      <p className="font-body-sm text-[#45464e] text-xs mt-0.5">NEET-UG, CUET Biology, ICAR, AIIMS Allied Health</p>
                    </div>
                  </div>
                </div>

                {/* Reality Check */}
                <div className="bg-[#efeeeb] p-4 rounded-xl flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#a04100] text-2xl shrink-0 mt-0.5">psychology_alt</span>
                  <div>
                    <h4 className="font-title-md text-[#081534] font-bold">Senior Counselor’s Reality Check</h4>
                    <p className="font-body-sm text-[#45464e] mt-1 leading-relaxed">
                      Students choosing Science purely because of societal expectation without an intrinsic interest in conceptual physics or heavy problem-solving face high burnout in grade 11. Evaluate your persistent curiosity first.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Commerce Panel */}
            {activeStream === 'commerce' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#91f3f2] text-[#002020] font-label-sm text-xs uppercase tracking-wider mb-2 font-bold">
                      Markets, Capital &amp; Strategy
                    </span>
                    <h2 className="font-headline-lg text-[#081534]">Commerce: With Math vs. Without Math</h2>
                  </div>
                  <div className="flex items-center gap-2 bg-[#efeeeb] px-3.5 py-1.5 rounded-full w-fit">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">equalizer</span>
                    <span className="font-label-sm text-xs text-[#1b1c1a]">
                      Effort Curve: <strong>Moderate-High</strong>
                    </span>
                  </div>
                </div>

                <p className="font-body-md text-[#45464e] leading-relaxed">
                  Unlocks the architecture of commerce, global financial markets, enterprise operations, and consumer trends. Perfect for analytical thinkers with strong pragmatic reasoning and strategic minds.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#f5f3f0] p-5 rounded-2xl space-y-4">
                    <span className="font-label-sm text-xs px-2.5 py-1 rounded bg-[#e4e2df] text-[#45464e] font-bold">
                      Quantitative Focus
                    </span>
                    <h3 className="font-title-md text-[#081534] font-bold">Commerce with Mathematics</h3>
                    <p className="font-body-sm text-[#45464e]">
                      Accountancy, Business Studies, Economics + Applied/Core Math. Crucial for Tier-1 Economics &amp; Finance degrees.
                    </p>
                    <div className="space-y-1">
                      <span className="font-label-sm text-xs text-[#081534] font-bold uppercase">Key Career Horizons:</span>
                      <p className="font-body-sm text-[#1b1c1a] text-xs">Investment Banking, Actuarial Science, FinTech Consulting, Chartered Accountancy (CA).</p>
                    </div>
                    <div className="pt-1">
                      <span className="font-label-sm text-xs text-[#a04100] font-bold">Crucial Admissions:</span>
                      <p className="font-body-sm text-[#45464e] text-xs mt-0.5">IPMAT (IIM Indore/Rohtak), CUET (SRCC, St. Stephen’s), CA Foundation.</p>
                    </div>
                  </div>

                  <div className="bg-[#f5f3f0] p-5 rounded-2xl space-y-4">
                    <span className="font-label-sm text-xs px-2.5 py-1 rounded bg-[#e4e2df] text-[#45464e] font-bold">
                      Enterprise Focus
                    </span>
                    <h3 className="font-title-md text-[#081534] font-bold">Commerce without Mathematics</h3>
                    <p className="font-body-sm text-[#45464e]">
                      Replaces Math with Entrepreneurship, Legal Studies, Informatics Practices, or Mass Communication.
                    </p>
                    <div className="space-y-1">
                      <span className="font-label-sm text-xs text-[#081534] font-bold uppercase">Key Career Horizons:</span>
                      <p className="font-body-sm text-[#1b1c1a] text-xs">Company Secretary (CS), Corporate Law, Advertising &amp; Brand Management, Supply Chain.</p>
                    </div>
                    <div className="pt-1">
                      <span className="font-label-sm text-xs text-[#a04100] font-bold">Crucial Admissions:</span>
                      <p className="font-body-sm text-[#45464e] text-xs mt-0.5">SET, NMIMS NPAT, CUET BBA/BMS Programs, CLAT.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Arts Panel */}
            {activeStream === 'arts' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#ffdbcc] text-[#351000] font-label-sm text-xs uppercase tracking-wider mb-2 font-bold">
                      Human Behavior, Culture &amp; Governance
                    </span>
                    <h2 className="font-headline-lg text-[#081534]">Arts &amp; Humanities: Beyond Boundaries</h2>
                  </div>
                  <div className="flex items-center gap-2 bg-[#efeeeb] px-3.5 py-1.5 rounded-full w-fit">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">equalizer</span>
                    <span className="font-label-sm text-xs text-[#1b1c1a]">
                      Effort Curve: <strong>High Writing &amp; Research</strong>
                    </span>
                  </div>
                </div>

                <p className="font-body-md text-[#45464e] leading-relaxed">
                  No longer a default backup, modern humanities is the launchpad for high-impact fields: policy, international diplomacy, creative strategy, clinical psychology, and constitutional law.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#f5f3f0] p-4 rounded-xl space-y-2">
                    <div className="text-[#a04100] font-bold font-title-md">Legal &amp; Policy</div>
                    <p className="font-body-sm text-[#45464e] text-xs">History, Pol Science, Legal Studies. Sets up candidates for National Law Universities.</p>
                    <span className="inline-block font-label-sm text-xs text-[#081534] font-bold mt-1">Exams: CLAT, AILET, SLAT</span>
                  </div>
                  <div className="bg-[#f5f3f0] p-4 rounded-xl space-y-2">
                    <div className="text-[#a04100] font-bold font-title-md">Mind &amp; Behavior</div>
                    <p className="font-body-sm text-[#45464e] text-xs">Psychology, Sociology, English Literature. Bridges clinical, organizational, and counseling work.</p>
                    <span className="inline-block font-label-sm text-xs text-[#081534] font-bold mt-1">Exams: CUET, TISS BAT</span>
                  </div>
                  <div className="bg-[#f5f3f0] p-4 rounded-xl space-y-2">
                    <div className="text-[#a04100] font-bold font-title-md">Design &amp; Media</div>
                    <p className="font-body-sm text-[#45464e] text-xs">Fine Arts, Media Studies, Geography. Leading into spatial, visual, and interaction design.</p>
                    <span className="inline-block font-label-sm text-xs text-[#081534] font-bold mt-1">Exams: NID DAT, NIFT, UCEED</span>
                  </div>
                </div>
              </div>
            )}

            {/* Applied Panel */}
            {activeStream === 'applied' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#91f3f2] text-[#002020] font-label-sm text-xs uppercase tracking-wider mb-2 font-bold">
                      Future-Proof Skill Sets
                    </span>
                    <h2 className="font-headline-lg text-[#081534]">Vocational, Applied Fields &amp; Applied AI</h2>
                  </div>
                  <div className="flex items-center gap-2 bg-[#efeeeb] px-3.5 py-1.5 rounded-full w-fit">
                    <span className="material-symbols-outlined text-[#ff7a30] text-sm">equalizer</span>
                    <span className="font-label-sm text-xs text-[#1b1c1a]">
                      Effort Curve: <strong>Project &amp; Portfolio Driven</strong>
                    </span>
                  </div>
                </div>

                <p className="font-body-md text-[#45464e] leading-relaxed">
                  Under NEP 2020 guidelines, vocational streams blend academic fundamentals with hands-on skill training in fast-growing industries including Game Art, Hospitality Leadership, Applied AI, and Sustainable Design.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#f5f3f0] rounded-xl space-y-2">
                    <h4 className="font-title-md text-[#081534] font-bold">Creative Technologies</h4>
                    <p className="font-body-sm text-[#45464e] text-xs">
                      VFX, Animation, Game Design, XR Development, and Audio Engineering with portfolio-based university entries.
                    </p>
                  </div>
                  <div className="p-4 bg-[#f5f3f0] rounded-xl space-y-2">
                    <h4 className="font-title-md text-[#081534] font-bold">Applied Sciences &amp; Ops</h4>
                    <p className="font-body-sm text-[#45464e] text-xs">
                      Hospitality Management (NCHMCT JEE), Sports Analytics, Culinary Arts, and Aviation Ground Management.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Diagnostic Matrix Quick Widget (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Assessment Teaser Card */}
            <div className="bg-[#081534] text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e2a4a] text-[#8691b7] font-label-sm text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#ff7a30]"></span> Interactive Diagnostic
                </div>
                <h3 className="font-headline-md text-headline-md text-white">
                  Not sure which stream fits your cognitive style?
                </h3>
                <p className="font-body-sm text-xs text-[#8691b7]">
                  Answer 3 fast diagnostic scenarios right now to identify your natural inclination across scientific, business, or expressive streams.
                </p>

                {/* Mini Quiz Container */}
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl space-y-3 border border-white/10">
                  {!quizCompleted ? (
                    <>
                      <div className="flex justify-between items-center text-[#8691b7] font-label-sm text-xs">
                        <span>Diagnostic Snapshot</span>
                        <span>Question {currentQuizQuestion} of {quizQuestions.length}</span>
                      </div>
                      <p className="font-title-md text-white font-medium text-sm">
                        {quizQuestions[currentQuizQuestion - 1].q}
                      </p>
                      <div className="space-y-2 pt-1">
                        {quizQuestions[currentQuizQuestion - 1].options.map((opt) => (
                          <button
                            key={opt.text}
                            onClick={() => handleAnswer(opt.type)}
                            className="w-full text-left p-3 rounded-xl bg-white/15 hover:bg-white/25 transition-all text-white font-body-sm text-xs flex items-center justify-between cursor-pointer"
                          >
                            <span>{opt.text}</span>
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="space-y-3 text-center py-2 animate-in fade-in">
                      <div className="w-12 h-12 rounded-full bg-[#ff7a30] text-white mx-auto flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl">verified</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-white">
                        {getQuizResult().title}
                      </h4>
                      <p className="font-body-sm text-xs text-[#8691b7]">
                        {getQuizResult().desc}
                      </p>
                      <button
                        onClick={handleResetQuiz}
                        className="text-[#ffdbcc] font-label-sm text-xs underline hover:text-white cursor-pointer"
                      >
                        Retake Diagnostic
                      </button>
                    </div>
                  )}
                </div>

                <div className="pt-1">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center justify-center w-full px-4 py-3 rounded-full bg-[#ff7a30] text-white font-label-lg text-sm shadow-md hover:bg-[#a04100] transition-all font-semibold cursor-pointer"
                  >
                    Take Full 45-Min Psychometric Test
                  </button>
                </div>
              </div>
            </div>

            {/* Parent Confidence Badge Card */}
            <div className="bg-[#f5f3f0] p-5 rounded-2xl shadow-sm space-y-2 border border-[#081534]/5">
              <div className="flex items-center gap-2 text-[#081534] font-title-md font-bold">
                <span className="material-symbols-outlined text-[#a04100] text-xl">family_restroom</span>
                <span>Parent Advisory Note</span>
              </div>
              <p className="font-body-sm text-[#45464e] text-xs leading-relaxed">
                Streams in 11th are not irreversible traps. With the National Credit Framework (NCrF), students can cross-elect subjects across fields like Economics with Biology or Coding with Fine Arts.
              </p>
              <div className="pt-1">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1 font-label-sm text-xs text-[#a04100] font-bold hover:underline cursor-pointer"
                >
                  <span>Read Parent Handbook on 10th Transition</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comparative Matrix Section */}
        <div className="mt-12 pt-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="font-label-sm text-xs font-bold text-[#a04100] uppercase tracking-widest">
              At-A-Glance Evaluation
            </span>
            <h2 className="font-headline-lg text-[#081534] mt-1">Compare Streams Side-By-Side</h2>
            <p className="font-body-md text-[#45464e] text-sm mt-1">
              Objective comparisons to help students and families weigh time commitments, career flexibilities, and entrance expectations.
            </p>
          </div>

          <div className="w-full overflow-x-auto rounded-2xl shadow-md bg-white border border-[#081534]/5">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#efeeeb] text-[#081534] font-title-md text-sm">
                  <th className="p-4">Dimension</th>
                  <th className="p-4">Science (PCM/B)</th>
                  <th className="p-4">Commerce</th>
                  <th className="p-4">Arts &amp; Humanities</th>
                  <th className="p-4">Applied &amp; Vocational</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eae8e5] font-body-sm text-xs text-[#45464e]">
                <tr className="hover:bg-[#f5f3f0] transition-colors">
                  <td className="p-4 font-bold text-[#081534]">Typical Weekly Study Load</td>
                  <td className="p-4 text-[#ff7a30] font-bold">28 - 36 hours (Labs + Coaching)</td>
                  <td className="p-4">18 - 24 hours (Case Studies)</td>
                  <td className="p-4">16 - 22 hours (Reading &amp; Papers)</td>
                  <td className="p-4">20 - 25 hours (Hands-on Studios)</td>
                </tr>
                <tr className="hover:bg-[#f5f3f0] transition-colors">
                  <td className="p-4 font-bold text-[#081534]">Math Dependency</td>
                  <td className="p-4">Vital in PCM, Moderate in PCB</td>
                  <td className="p-4">High for Top Finance, Low for General BBA</td>
                  <td className="p-4">Optional (Statistical track available)</td>
                  <td className="p-4">Functional / Practical Math</td>
                </tr>
                <tr className="hover:bg-[#f5f3f0] transition-colors">
                  <td className="p-4 font-bold text-[#081534]">Stream Switch Flexibility</td>
                  <td className="p-4">Maximum (Can switch to Arts/Commerce)</td>
                  <td className="p-4">High (Can switch to Humanities/Law/Design)</td>
                  <td className="p-4">Moderate (Restricted from core Tech/Med)</td>
                  <td className="p-4">Specialized industry pathway</td>
                </tr>
                <tr className="hover:bg-[#f5f3f0] transition-colors">
                  <td className="p-4 font-bold text-[#081534]">Average Time to Career Entry</td>
                  <td className="p-4">4 - 6 Years (B.Tech / MBBS + Residency)</td>
                  <td className="p-4">3 - 5 Years (B.Com / CA / MBA)</td>
                  <td className="p-4">3 - 5 Years (BA + Masters / LLB)</td>
                  <td className="p-4">2 - 4 Years (Direct Skill Placement)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Timeline Roadmap */}
        <div className="mt-12 pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="font-label-sm text-xs font-bold text-[#a04100] uppercase tracking-widest">
                Chronological Gameplan
              </span>
              <h2 className="font-headline-lg text-[#081534] mt-1">Your Step-by-Step Transition Timeline</h2>
              <p className="font-body-md text-[#45464e] max-w-2xl text-sm leading-relaxed">
                A stress-free operational calendar from your pre-board revisions through securing admission into your chosen 11th standard program.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff7a30]"></span>
              <span className="font-label-sm text-xs text-[#45464e]">Optimal Action Window</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Milestone 1 */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#081534]/5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#eae8e5] text-[#081534] flex items-center justify-center font-bold text-xs">
                    01
                  </span>
                  <span className="font-label-sm text-xs text-[#a04100] font-bold">Nov – Jan</span>
                </div>
                <h3 className="font-title-md text-[#081534] font-bold">Aptitude &amp; Pre-Board Mapping</h3>
                <p className="font-body-sm text-[#45464e] text-xs leading-relaxed">
                  Take comprehensive aptitude assessments before exam pressure builds. Identify baseline strengths without judgment.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#efeeeb] text-xs text-[#45464e] flex items-center gap-1.5 font-medium">
                <span className="material-symbols-outlined text-sm text-[#ff7a30]">task_alt</span>
                <span>Complete Diagnostic</span>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#081534]/5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#eae8e5] text-[#081534] flex items-center justify-center font-bold text-xs">
                    02
                  </span>
                  <span className="font-label-sm text-xs text-[#a04100] font-bold">Feb – Mar</span>
                </div>
                <h3 className="font-title-md text-[#081534] font-bold">10th Boards &amp; Exam Calm</h3>
                <p className="font-body-sm text-[#45464e] text-xs leading-relaxed">
                  Zero career panic. Focus strictly on finishing standard board examinations with emotional balance and confidence.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#efeeeb] text-xs text-[#45464e] flex items-center gap-1.5 font-medium">
                <span className="material-symbols-outlined text-sm text-[#ff7a30]">task_alt</span>
                <span>Focus on Core Boards</span>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#081534]/5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#ff7a30] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    03
                  </span>
                  <span className="font-label-sm text-xs text-[#a04100] font-bold">Apr – May</span>
                </div>
                <h3 className="font-title-md text-[#081534] font-bold">Taster Workshops &amp; Visits</h3>
                <p className="font-body-sm text-[#45464e] text-xs leading-relaxed">
                  Attend 2-day micro-workshops: coding, accounting simulations, or creative writing labs before finalizing school enrollments.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#efeeeb] text-xs text-[#45464e] flex items-center gap-1.5 font-medium">
                <span className="material-symbols-outlined text-sm text-[#ff7a30]">task_alt</span>
                <span>School Interviews &amp; Trial Labs</span>
              </div>
            </div>

            {/* Milestone 4 */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#081534]/5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#eae8e5] text-[#081534] flex items-center justify-center font-bold text-xs">
                    04
                  </span>
                  <span className="font-label-sm text-xs text-[#a04100] font-bold">June – Jul</span>
                </div>
                <h3 className="font-title-md text-[#081534] font-bold">11th Kickoff &amp; Habit Prep</h3>
                <p className="font-body-sm text-[#45464e] text-xs leading-relaxed">
                  Bridge the syllabus jump! 11th grade concepts are 3x deeper than 10th. Establish structured study systems early.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#efeeeb] text-xs text-[#45464e] flex items-center gap-1.5 font-medium">
                <span className="material-symbols-outlined text-sm text-[#ff7a30]">task_alt</span>
                <span>Stream Finalization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Story & Student Testimonial Mosaic */}
        <div className="mt-12 pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 relative">
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-xl relative bg-[#efeeeb]">
              <img
                className="w-full h-full object-cover"
                alt="High school student smiling in library"
                src={ASSETS.ananyaLibrary}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081534]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="font-label-sm text-xs uppercase tracking-wider text-[#ff7a30] font-bold">
                  Success Profile
                </span>
                <p className="font-title-md font-semibold text-sm">
                  Ananya R. • Switched from PCM to Commerce with Math
                </p>
                <p className="font-body-sm text-xs text-[#f5f3f0] mt-0.5">
                  "I was feeling overwhelmed until the stream diagnostic showed my true affinity for economic modeling."
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <span className="font-label-sm text-xs font-bold text-[#a04100] uppercase tracking-widest">
              Real Transformations
            </span>
            <h2 className="font-headline-lg text-[#081534]">
              "The greatest relief was knowing there isn't just one right path."
            </h2>
            <p className="font-body-md text-[#45464e] leading-relaxed text-sm">
              Over 14,000 10th graders used the Growth Guides stream explorer last year. Our student cohort reported a 74% reduction in academic anxiety when parents and students evaluated streams together using data instead of peer expectations.
            </p>

            {/* Counselor Highlight Bento Item */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-[#081534]/5">
              <img
                className="w-14 h-14 rounded-full object-cover shrink-0 ring-2 ring-[#efeeeb]"
                alt="Dr. Neha Kapoor"
                src={ASSETS.drNehaKapoor}
              />
              <div>
                <h4 className="font-title-md text-[#081534] font-bold">Dr. Neha Kapoor</h4>
                <p className="font-body-sm text-xs text-[#45464e]">
                  Chief Academic Counselor &amp; Ex-CBSE Evaluator (18+ Yrs Guidance)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Conversion Banners */}
        <div className="mt-12 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Lead Magnet: Free PDF Guidebook */}
          <div className="bg-[#f5f3f0] p-6 lg:p-8 rounded-3xl flex flex-col justify-between shadow-sm relative overflow-hidden border border-[#081534]/5">
            <div className="space-y-3 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eae8e5] text-[#a04100] font-label-sm text-xs font-bold">
                <span className="material-symbols-outlined text-sm">download</span> Free E-Book (84 Pages)
              </div>
              <h3 className="font-headline-md text-[#081534]">
                The Complete After-10th Stream Handbook
              </h3>
              <p className="font-body-sm text-[#45464e] text-xs leading-relaxed">
                Includes 120+ career trees, subject syllabi comparisons across CBSE/ICSE/IB, and a self-audit checklist for 10th standard families.
              </p>

              <form onSubmit={handleDownloadHandbook} className="pt-2 space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    className="w-full px-4 py-2.5 rounded-xl bg-white text-[#1b1c1a] placeholder:text-[#45464e]/60 font-body-sm text-xs outline-none shadow-sm focus:ring-2 focus:ring-[#ff7a30]"
                    placeholder="Enter student or parent email"
                    required
                    type="email"
                    value={downloadEmail}
                    onChange={(e) => setDownloadEmail(e.target.value)}
                  />
                  <button
                    className="px-6 py-2.5 rounded-xl bg-[#081534] text-white font-label-lg text-xs whitespace-nowrap hover:bg-[#1e2a4a] transition-colors shadow-sm font-semibold cursor-pointer"
                    type="submit"
                  >
                    Get Instant PDF
                  </button>
                </div>
                {downloadSuccess && (
                  <p className="text-xs text-[#a04100] font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-emerald-600">check_circle</span>
                    Guidebook dispatched to {downloadEmail}! Check your inbox.
                  </p>
                )}
              </form>
            </div>
            <div className="text-[11px] text-[#76777f] mt-4">
              Updated for the 2025–2026 Academic Year • Zero Spam Policy
            </div>
          </div>

          {/* 1-on-1 Mentorship Booking Card */}
          <div className="bg-[#a04100] text-white p-6 lg:p-8 rounded-3xl flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="space-y-3 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff7a30]/40 text-white font-label-sm text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-white"></span> Senior Guidance Desk
              </div>
              <h3 className="font-headline-md text-white">
                Still Confused? Talk to a Certified Stream Counselor
              </h3>
              <p className="font-body-sm text-xs text-white/90 leading-relaxed">
                Book a dedicated 30-minute family discovery video call. We analyze school report cards, behavioral passions, and outline practical subject roadmaps.
              </p>
              <div className="pt-3 flex flex-wrap gap-3 items-center">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-2.5 rounded-full bg-white text-[#a04100] font-label-lg text-xs font-bold shadow-md hover:bg-[#f5f3f0] transition-all cursor-pointer"
                >
                  Schedule Free 1-on-1 Call
                </button>
                <span className="text-xs text-white/80 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span> 14 slots open this week
                </span>
              </div>
            </div>
            <div className="mt-4 text-[11px] text-white/70">
              Trusted by over 35,000+ parents across CBSE, ICSE &amp; State Boards
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
