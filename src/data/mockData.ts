import { Mentor, Cohort, Testimonial, WorkshopModule } from '../types';

export const ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1V0iqWFCHvkC0dhMmM71BFlIT5FfOnNS6WdXwoahbZMH3h7s-NX9eHMT7KNgCjMWJw3HTvOsFYEaZu4nPBcE5Ten2Tp6vaxTXEQNi3o46gIHmgbTLFmLcC6ejANuzwQtvYxsuNXNKMf5nsOxAuL_k6JS78enjxpSAcahJP2lfRgTwoNlNyA6-H78YBen2x54BEImLaZge_eTXrvzbp8acacn-uFurvU6-zQuWE7C4w7XScrrZE50SEPIg',
  userProfile: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd8BXFEloXE0pZ9wnWlPA9VbP1ffBtNquOsx5cjqcRUG59S3Q3eZw8tLJWM3bkxK9-8C9XI-mmPzKwlWhtGi_yWM5SPiLyBfn_KDJOS3BfGxG2FudkOY_M9xHTP5FreZYID6Hwj77whotconUlUVZtNvBoR38FE1jCUFdQxPmNqlWP9d1C4RY8iiGAomh5JgLx6Jn1wUKD_O8m0Fft39OAl2YTta6VVxQK_5wfg7v4EQvIg9GsFsGZ',
  aaravStudent: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD79PAJ538d9HpZoI6DSp8CFCXtkanJm7RslhfhJwrdJB-7F0B2dZuKyvI0_HBWSVIoWOUurW81WcbveRGGmZCyNL5QvlqZYJ7AG8sgym7HLtEczj918-czP-xe3X2G3X586GPxBUM555vOTYbqW3J5RSC2FX0BDT7GeMaulDLAKZFegszMxa3UN6QKGXyIt8wZ26gjhuctKlJQ0WFhHMdeZh5mSQZZLVTiqEYja-2LuP0w6tDJsYpv',
  ananyaLibrary: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBczosbffoQPegHtpLXBgpOnLh3qnM3uV_DBt3i9l-qHbXRWvd_8HMmvu24WQ0zttC9Ac2Niu3QVw-McWJOIJqzutqTiTzsBnjJN2tDSKzkIGxaYwyRfZRsefPejh9dEA7rnUz6h8oO1xCgPkloCZDXrrRxT8HDu77dqxKeb22oukIaE52Rch-yVieagFF3UQzerTWrKt-cvzG8pMEiX2E3NdIGLtjfi-EwSDH-O9jhAo3AORv3rXki',
  drNehaKapoor: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwjyiYSfMZ9xLOyTRukRuGjh8ftg0Ompn8Pa2qSbFARgg6eqBhn_zMpaxEgLToDkRNgomiAjPfTE-Jovhx41pi3JrsPrw2qZnueCDGGEduD3xGIH_OyYeMwv4GjI4wXerRP7iUrkYh_S_LES6iGWL5gxAhjqN3eSSTZegfx6tf5gHWn_XxYJtWrjNSw_Emb45zX5ZkqCeqd_Y0nIvGf_iwPoGUIpYHpB7mPqM5IRIx50J8UJA1FEFo',
  rheaDeshmukh: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdGnYUSV3Wx7nD9DKG-r8AvW4s4LO0zS6c9huANPBzJmYrBmCM6iOzPQ5BiMIy89vYjAWg7sd4oSFtbU2zrzvYqhBs7f2H60URGHwb9YoxTHqYndcHjkQE6eQT9lqLwTLY8slPS1-eIFqpv-aU89v6wLXoGW8oSGCOKOsmOwuXVa3FHDBLNTQiQNx1rq4tHJwRcKiWovmOrIklMGrLDL3AE7yeEWkuYiWjU099PKxzm97LhgvA87_1',
  menonParents: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq5tdPDmhC4KtDxmYxrl35LK264vaN9boT57ZSL6obC4JlWe7UKE0Hcw6RrRDu4BDKzBqpuqNzfdtKusMsZfRIoRoPr4Pe7UMuxNLc3T5J8clAGLxi9mY44RASm8T6MkCmH8dL7Pp-aPA-MihmmuUO8R3IRYPd9S7YUXm937wHOgPYdBMw3ljAMagZ4N6mvbxoGJj8dS7OtxpOepIi5D5hUVn2rR5wuwfYwtkNuynRm0fKW6ailZ2k',
  workshopClassroom: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkkr8_T0fFu7ExCK2SZJvFyoobkNb3fTUSzJz0DdDTEqcdBq-8ZcdzJMoN_j8p2XSjoPaSOt8CuF9fGXBzEXixTzuIaQUNfl8_nB2AZ7zKcjEdA0Fr1h3OKf6BAZnDCfuUxwMirct0eYqBichCOhLpaiJqc5Al5bAKzDxTPY7_4ZKRyux5g1Q3eBRj0K6BO1_A440nVO7BCXF_9SwzQU9-Jyukfget0LgruF1QCUDrBLelTJoGfhqT',
  // Study mentorship illustration image (for coaching hero right side)
  coachingHeroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBczosbffoQPegHtpLXBgpOnLh3qnM3uV_DBt3i9l-qHbXRWvd_8HMmvu24WQ0zttC9Ac2Niu3QVw-McWJOIJqzutqTiTzsBnjJN2tDSKzkIGxaYwyRfZRsefPejh9dEA7rnUz6h8oO1xCgPkloCZDXrrRxT8HDu77dqxKeb22oukIaE52Rch-yVieagFF3UQzerTWrKt-cvzG8pMEiX2E3NdIGLtjfi-EwSDH-O9jhAo3AORv3rXki'
};

export const MENTORS: Mentor[] = [
  {
    id: 'dr-ananya',
    name: 'Dr. Ananya Sharma, Ph.D.',
    title: 'Lead Mindset Coach & Child Psychologist',
    role: 'Adolescent Psychology',
    bio: 'Specializes in exam panic desensitization and student intrinsic motivation. 11+ years guiding 9th and 10th graders through board stress.',
    education: 'M.Sc. Clinical Psychology, NIMHANS',
    tags: ['Adolescent Psychology', '2x Youth Wellness & Habit Check-ins'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwjyiYSfMZ9xLOyTRukRuGjh8ftg0Ompn8Pa2qSbFARgg6eqBhn_zMpaxEgLToDkRNgomiAjPfTE-Jovhx41pi3JrsPrw2qZnueCDGGEduD3xGIH_OyYeMwv4GjI4wXerRP7iUrkYh_S_LES6iGWL5gxAhjqN3eSSTZegfx6tf5gHWn_XxYJtWrjNSw_Emb45zX5ZkqCeqd_Y0nIvGf_iwPoGUIpYHpB7mPqM5IRIx50J8UJA1FEFo'
  },
  {
    id: 'vikram-sengupta',
    name: 'Vikram Sengupta, M.Ed.',
    title: 'Senior Academic Strategist (Math/Physics)',
    role: 'STEM Pedagogy',
    bio: 'Former ICSE board examiner known for intuitive problem visualization that turns low-scoring students into confident analytical thinkers.',
    education: 'B.Tech & M.Ed. Curriculum & Teaching',
    tags: ['STEM Pedagogy', 'Former Board Examiner'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD79PAJ538d9HpZoI6DSp8CFCXtkanJm7RslhfhJwrdJB-7F0B2dZuKyvI0_HBWSVIoWOUurW81WcbveRGGmZCyNL5QvlqZYJ7AG8sgym7HLtEczj918-czP-xe3X2G3X586GPxBUM555vOTYbqW3J5RSC2FX0BDT7GeMaulDLAKZFegszMxa3UN6QKGXyIt8wZ26gjhuctKlJQ0WFhHMdeZh5mSQZZLVTiqEYja-2LuP0w6tDJsYpv'
  },
  {
    id: 'meera-ranganathan',
    name: 'Meera Ranganathan',
    title: 'Youth Habit & Wellness Mentor',
    role: 'Habits & Executive Function',
    bio: 'Passionate about screen addiction recovery, sleep cycle optimization, and teaching teenagers gentle accountability without nagging.',
    education: 'Certified ICF Youth Life Coach',
    tags: ['Habits & Executive Function', 'Certified ICF Youth Coach'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdGnYUSV3Wx7nD9DKG-r8AvW4s4LO0zS6c9huANPBzJmYrBmCM6iOzPQ5BiMIy89vYjAWg7sd4oSFtbU2zrzvYqhBs7f2H60URGHwb9YoxTHqYndcHjkQE6eQT9lqLwTLY8slPS1-eIFqpv-aU89v6wLXoGW8oSGCOKOsmOwuXVa3FHDBLNTQiQNx1rq4tHJwRcKiWovmOrIklMGrLDL3AE7yeEWkuYiWjU099PKxzm97LhgvA87_1'
  }
];

export const WORKSHOP_MODULES: WorkshopModule[] = [
  {
    id: 'mod-1',
    moduleNumber: 'Module 01',
    title: 'Communication, Interpersonal & Presentation Mastery',
    description: 'Transform anxious thoughts into articulate verbal influence. Students master structuring impromptu opinions, debate etiquette, active listening, and open posture cues.',
    points: [
      'The 60-Second Extempore Framework',
      'Active Listening & Non-Aggressive Rebuttal Tactics',
      'Slide Deck Narrative Delivery (without reading slides)'
    ],
    syllabusHours: '12-Hour Syllabus',
    cohortCap: '16 Students',
    icon: 'campaign',
    accentBg: 'bg-secondary-container/15 text-secondary',
    syllabusDetails: {
      overview: 'Comprehensive training to eradicate classroom stage fear and give teenagers conversational poise in debate, student council, and presentations.',
      sessions: [
        { sessionNum: 1, topic: 'Physical Composure & Breath Cadence', duration: '2 Hours', outcome: 'Eliminate nervous tremors and vocal quivers under observation' },
        { sessionNum: 2, topic: 'The 60-Second Extempore Architecture', duration: '3 Hours', outcome: 'Formulate Point-Reason-Example-Point (PREP) on any surprise topic' },
        { sessionNum: 3, topic: 'Interactive Debate & Empathetic Rebuttals', duration: '3 Hours', outcome: 'Challenge assertions logically without aggressive posturing' },
        { sessionNum: 4, topic: 'Slide Narrative Design & Live Showcase', duration: '4 Hours', outcome: 'Deliver 5-minute visual presentation with zero slide reading' }
      ]
    }
  },
  {
    id: 'mod-2',
    moduleNumber: 'Module 02',
    title: 'Time Architecture & Student Stress Navigation',
    description: 'Tackle the homework vs. revision vs. downtime spiral. Teens develop tactical workflows to eliminate chronic cramming and build nervous system regulation during exam weeks.',
    points: [
      'Eisenhower Matrix personalized for board syllabi',
      'Cortisol de-escalation: 3-minute somatic reset breathing',
      'Phone distraction boundaries & deep study sprints'
    ],
    syllabusHours: '8-Hour Syllabus',
    cohortCap: '16 Students',
    icon: 'timelapse',
    accentBg: 'bg-tertiary-container/10 text-on-tertiary-container',
    syllabusDetails: {
      overview: 'Practical psychological workflows to master academic time management without teenage burnout or family friction.',
      sessions: [
        { sessionNum: 1, topic: 'Cognitive Load Mapping & Task Categorization', duration: '2 Hours', outcome: 'Sort high-yield board priorities vs busywork distractions' },
        { sessionNum: 2, topic: 'Deep Work Architecture (25/5 Pomodoro Adaptation)', duration: '2 Hours', outcome: 'Design smartphone-free study sanctuaries that teenagers enjoy' },
        { sessionNum: 3, topic: 'Somatic Nervous System Reset Protocols', duration: '2 Hours', outcome: 'Lower heart rate and exam blackout panic within 180 seconds' },
        { sessionNum: 4, topic: 'Weekend Cadence & Restorative Rest', duration: '2 Hours', outcome: 'Protect 8-hour sleep cycles without sacrificing grades' }
      ]
    }
  },
  {
    id: 'mod-3',
    moduleNumber: 'Module 03',
    title: 'Career Trajectory & Interview Simulation',
    description: 'Prepare for competitive residential programs, student council elections, and international summer academies. Learn how to speak about your projects with conviction.',
    points: [
      'Crafting a 10th-grade holistic activity profile',
      'Behavioral STAR method adapted for teenage life context',
      '3x Mock Panel Interviews with detailed video reviews'
    ],
    syllabusHours: '10-Hour Syllabus',
    cohortCap: '12 Students',
    icon: 'psychology_alt',
    accentBg: 'bg-primary-container/10 text-primary',
    syllabusDetails: {
      overview: 'Early exposure to college admissions thinking, activity resumes, and mock interviewing with former admissions officers.',
      sessions: [
        { sessionNum: 1, topic: 'Extracurricular Story Mining', duration: '2.5 Hours', outcome: 'Uncover genuine spike projects instead of laundry lists of hobbies' },
        { sessionNum: 2, topic: 'STAR Behavioral Framework for Youth', duration: '2.5 Hours', outcome: 'Answer "Tell me about yourself" and failure questions with depth' },
        { sessionNum: 3, topic: 'Simulated Panel Interviews (Session 1 & 2)', duration: '3 Hours', outcome: 'Handle unexpected questions and tricky committee prompts' },
        { sessionNum: 4, topic: 'Video Review & Personal Brand Dossier', duration: '2 Hours', outcome: 'Receive personalized critique video and polished activity profile' }
      ]
    }
  },
  {
    id: 'mod-4',
    moduleNumber: 'Module 04',
    title: 'Digital Citizenship & Professional Etiquette',
    description: 'The nuances schools rarely teach: cold emailing professors for research mentorships, respectful online collaboration, LinkedIn hygiene, and digital reputation care.',
    points: [
      'Writing crisp, polite professional emails that get replies',
      'Online conflict resolution & constructive digital discussions',
      'Building a clean portfolio site using no-code platforms'
    ],
    syllabusHours: '6-Hour Syllabus',
    cohortCap: '16 Students',
    icon: 'verified_user',
    accentBg: 'bg-secondary-fixed/50 text-on-secondary-fixed',
    syllabusDetails: {
      overview: 'Equipping teenagers with mature communication protocols for professors, scholarship committees, and professional internships.',
      sessions: [
        { sessionNum: 1, topic: 'The High-School Cold Outreach Architecture', duration: '2 Hours', outcome: 'Draft inquiry letters to research labs, NGOs, and mentors' },
        { sessionNum: 2, topic: 'Digital Reputation & Ethical Online Discourse', duration: '2 Hours', outcome: 'Safeguard social profiles from college admissions screening red-flags' },
        { sessionNum: 3, topic: 'Personal Project One-Pager & Portfolio Hub', duration: '2 Hours', outcome: 'Publish a clean, single-page showcase of authentic student work' }
      ]
    }
  }
];

export const UPCOMING_COHORTS: Cohort[] = [
  {
    id: 'cohort-1',
    month: 'OCT',
    day: '18',
    gradeTier: 'junior',
    gradeLabel: 'Grades 8-10',
    formatLabel: 'Weekend Sprint (2 Days)',
    title: 'The Fearless Speaker Intensive: Debating & Storytelling',
    schedule: 'Sat & Sun • 10:00 AM – 1:00 PM EST • Zoom Live Interactive',
    seatsRemaining: 4,
    classLimit: 14
  },
  {
    id: 'cohort-2',
    month: 'OCT',
    day: '25',
    gradeTier: 'junior',
    gradeLabel: 'Grades 8-10',
    formatLabel: '3-Week Evening Cohort',
    title: 'Student Productivity Operating System & Exam Calmness',
    schedule: 'Tuesdays & Thursdays • 6:30 PM – 8:00 PM EST • Hybrid Exercises',
    seatsRemaining: 7,
    classLimit: 16
  },
  {
    id: 'cohort-3',
    month: 'NOV',
    day: '08',
    gradeTier: 'senior',
    gradeLabel: 'Grades 11-12',
    formatLabel: 'Mastery Bootcamp (4 Sessions)',
    title: 'High-Stakes Interviewing & College Program Admissions Pitch',
    schedule: 'Saturdays • 1:00 PM – 4:00 PM EST • Includes 1:1 Video Coaching',
    seatsRemaining: 2,
    classLimit: 10
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rhea Deshmukh',
    detail: '10th Grade Graduate • Now 11th Applied Design',
    stars: 5,
    imageUrl: ASSETS.rheaDeshmukh,
    quote: '“I was constantly overwhelmed by everyone telling me that picking Science was the only real choice. Growth Guides helped me discover my spatial reasoning strengths and showed me the world of Architecture & Industrial Design. My exam anxiety dropped because I finally have a real goal I care about.”'
  },
  {
    id: 'test-2',
    name: 'Vikram & Sunita Menon',
    detail: 'Parents of Aryan Menon • Bengaluru',
    stars: 5,
    imageUrl: ASSETS.menonParents,
    quote: '“As parents, we were worried about career shifts we didn’t fully comprehend ourselves. The 1-on-1 advisor sat with both my son and us, presented factual data on future job security, and resolved our disagreements peacefully. The wellness mentor was equally exceptional in calming board-exam panic.”'
  },
  {
    id: 'test-3',
    name: 'Kabir Thapar',
    detail: 'Grade 10 CBSE • Switched to Commerce with Applied Math',
    stars: 5,
    imageUrl: ASSETS.aaravStudent,
    quote: '“The live simulation lab on budget modeling in commerce showed me exactly why math makes sense in business. Instead of memorizing formulas blindly, I now see the roadmap clearly. My parents and I are finally on the same page.”'
  }
];
