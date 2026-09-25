export type PageType = 
  | 'home' 
  | 'pathways-after-10th' 
  | '1-on-1-coaching' 
  | 'wellness-mentoring' 
  | 'skill-workshops' 
  | 'student-stories';

export type StreamKey = 'science' | 'commerce' | 'arts' | 'applied';

export interface Mentor {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  education: string;
  tags: string[];
  imageUrl: string;
}

export interface Cohort {
  id: string;
  month: string;
  day: string;
  gradeTier: 'junior' | 'senior';
  gradeLabel: string;
  formatLabel: string;
  title: string;
  schedule: string;
  seatsRemaining: number;
  classLimit: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  detail: string;
  imageUrl: string;
  stars: number;
}

export interface WorkshopModule {
  id: string;
  moduleNumber: string;
  title: string;
  description: string;
  points: string[];
  syllabusHours: string;
  cohortCap: string;
  icon: string;
  accentBg: string;
  syllabusDetails?: {
    overview: string;
    sessions: { sessionNum: number; topic: string; duration: string; outcome: string }[];
  };
}
