import React, { useState } from 'react';
import { ASSETS, TESTIMONIALS } from '../data/mockData';

interface StudentStoriesPageProps {
  onOpenBooking: () => void;
}

export const StudentStoriesPage: React.FC<StudentStoriesPageProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'pcm-to-commerce' | 'applied-design' | 'parent-harmony'>('all');

  const detailedStories = [
    {
      id: 'ananya-story',
      category: 'pcm-to-commerce',
      name: 'Ananya Roy',
      tagline: 'From Math Panic in PCM to 96% in Economics & Applied Math',
      grade: 'Grade 10 ICSE → Now 11th Commerce with Math',
      image: ASSETS.ananyaLibrary,
      quote: '“Everyone in my school took Science because it looked prestigious. Within 2 months of grade 10, I was studying 6 hours a day and crying every Sunday. Growth Guides showed my parents that top-tier Economics, Actuarial Science, and Investment Banking require high math rigor without the engineering burnout.”',
      before: 'Overwhelmed, averaging 64% in school tests, considering dropping out of competitive tracks.',
      after: 'Top 3% in regional commerce aptitude, clear goal for St. Stephen’s / SRCC, peaceful household.',
      counselorQuote: '“Ananya was a natural econometrician forced into a physics mold. The moment we shifted her focus, her innate enthusiasm carried her.” — Dr. Neha Kapoor'
    },
    {
      id: 'rhea-story',
      category: 'applied-design',
      name: 'Rhea Deshmukh',
      tagline: 'Discovering Spatial Reasoning and Industrial Product Design',
      grade: 'Grade 10 CBSE → Now 11th Applied Design',
      image: ASSETS.rheaDeshmukh,
      quote: '“I was told that drawing and sketching were just frivolous hobbies. My Growth Guides mentor tested my spatial reasoning and 3D perception—and showed my parents that UI/UX and product design are among the most valued industries worldwide.”',
      before: 'Felt invisible in traditional rote memorization classes; low confidence.',
      after: 'Built a 12-piece portfolio in 10th grade; won national design hackathon.',
      counselorQuote: '“Spatial thinkers wither under pure rote examination. Rhea needed permission to see her visual intelligence as an asset.” — Meera Ranganathan'
    },
    {
      id: 'aryan-story',
      category: 'parent-harmony',
      name: 'Aryan Menon & Parents (Vikram & Sunita)',
      tagline: 'Bridging the Generational Expectation Gap in Bengaluru',
      grade: 'Grade 10 CBSE → Confidently Finalized Emerging Tech & AI',
      image: ASSETS.menonParents,
      quote: '“We thought Engineering was the only secure future for our son. Growth Guides walked us through 15 modern roles in data ethics, computational linguistics, and biotechnology that didn’t exist when we went to college. The relief of not fighting at dinner is priceless.”',
      before: 'Frequent shouting matches over coaching class schedules; high student isolation.',
      after: 'Aligned family strategy; Aryan maintains a healthy 8-hour sleep schedule with high grades.',
      counselorQuote: '“Parent anxiety comes from deep love and lack of reliable industry data. Once we showed them the data, harmony returned.” — Vikram Sengupta'
    }
  ];

  const filtered = detailedStories.filter((s) => {
    if (filter === 'all') return true;
    return s.category === filter;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-[#fbf9f6] pb-12 pt-6 md:pt-10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eae8e5] text-[#081534] text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm text-[#ff7a30]">auto_stories</span>
              Real Student Transformations
            </div>

            <h1 className="font-display text-[#081534] tracking-tight">
              "The Greatest Relief Was Knowing There Isn't Just One Right Path."
            </h1>

            <p className="font-body-lg text-body-lg text-[#45464e] leading-relaxed">
              Read how 9th and 10th grade students across CBSE, ICSE, and IB resolved stream dilemmas, overcame board exam panic, and discovered their authentic strengths.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full bg-[#ff7a30] text-white font-label-lg text-sm shadow-[0_4px_14px_rgba(255,122,48,0.35)] hover:bg-[#a04100] transition-colors font-bold cursor-pointer"
              >
                Start Your Own Transformation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="w-full bg-[#f5f3f0] py-6 border-y border-[#081534]/5">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-[#45464e] mr-2">Story Category:</span>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#081534] text-white shadow-sm'
                : 'bg-white text-[#45464e] hover:bg-[#eae8e5]'
            }`}
          >
            All Stories
          </button>
          <button
            onClick={() => setFilter('pcm-to-commerce')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === 'pcm-to-commerce'
                ? 'bg-[#081534] text-white shadow-sm'
                : 'bg-white text-[#45464e] hover:bg-[#eae8e5]'
            }`}
          >
            Science to Commerce Shifts
          </button>
          <button
            onClick={() => setFilter('applied-design')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === 'applied-design'
                ? 'bg-[#081534] text-white shadow-sm'
                : 'bg-white text-[#45464e] hover:bg-[#eae8e5]'
            }`}
          >
            Design &amp; Creative Careers
          </button>
          <button
            onClick={() => setFilter('parent-harmony')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === 'parent-harmony'
                ? 'bg-[#081534] text-white shadow-sm'
                : 'bg-white text-[#45464e] hover:bg-[#eae8e5]'
            }`}
          >
            Parent-Teen Alignment
          </button>
        </div>
      </section>

      {/* Detailed Story Cards */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 space-y-10">
          {filtered.map((story) => (
            <div
              key={story.id}
              className="p-6 md:p-10 rounded-3xl bg-[#f5f3f0] shadow-sm border border-[#081534]/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-4 relative">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-80 object-cover rounded-2xl shadow-md border-2 border-white"
                />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#081534]/90 text-white backdrop-blur-md text-[11px] font-bold">
                  {story.grade}
                </span>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#a04100]">
                    Verified Case Study
                  </span>
                  <h3 className="font-headline-md text-[#081534] font-bold mt-1">
                    {story.tagline}
                  </h3>
                  <p className="text-xs text-[#76777f]">Featuring {story.name}</p>
                </div>

                <blockquote className="text-sm text-[#081534] italic leading-relaxed bg-white p-4 rounded-2xl border-l-4 border-[#ff7a30]">
                  {story.quote}
                </blockquote>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-red-50 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-red-900 block">Before Growth Guides:</span>
                    <p className="text-red-800 text-[11px]">{story.before}</p>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-emerald-900 block">After 1-on-1 Mentorship:</span>
                    <p className="text-emerald-800 text-[11px]">{story.after}</p>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl text-xs text-[#45464e] border border-[#081534]/5">
                  <p className="italic">{story.counselorQuote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid of Short Quotes from mockData */}
      <section className="w-full py-12 bg-[#f5f3f0]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h2 className="font-headline-lg text-[#081534]">More Voices from Our Community</h2>
            <p className="font-body-md text-sm text-[#45464e]">
              Over 10,000 families guided across CBSE, ICSE, IB, and State Boards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 rounded-3xl shadow-sm border border-[#081534]/5 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#ff7a30]">
                    {[...Array(t.stars)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm fill-icon">
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-[#081534] leading-relaxed italic">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#efeeeb]">
                  <img
                    src={t.imageUrl}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#eae8e5]"
                  />
                  <div>
                    <h4 className="font-title-md text-xs text-[#081534] font-bold">{t.name}</h4>
                    <p className="font-body-sm text-[11px] text-[#45464e]">{t.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
