import { useState } from 'react';
import { PageType, StreamKey, WorkshopModule, Cohort } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { SyllabusModal } from './components/SyllabusModal';
import { ReserveSeatModal } from './components/ReserveSeatModal';
import { ProfileModal } from './components/ProfileModal';

import { HomePage } from './pages/HomePage';
import { PathwaysPage } from './pages/PathwaysPage';
import { CoachingPage } from './pages/CoachingPage';
import { WorkshopsPage } from './pages/WorkshopsPage';
import { WellnessPage } from './pages/WellnessPage';
import { StudentStoriesPage } from './pages/StudentStoriesPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('pathways-after-10th');
  const [activeStream, setActiveStream] = useState<StreamKey>('science');
  
  // Modals state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeSyllabusModule, setActiveSyllabusModule] = useState<WorkshopModule | null>(null);
  const [activeReserveCohort, setActiveReserveCohort] = useState<Cohort | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectStream = (stream: StreamKey) => {
    setActiveStream(stream);
    setCurrentPage('pathways-after-10th');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a] flex flex-col font-sans selection:bg-[#ff7a30] selection:text-white">
      {/* Fixed Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Main Page Content Body */}
      <main className="w-full pt-20 flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectStream={handleSelectStream}
            onOpenBooking={() => setIsBookingOpen(true)}
            onOpenProfile={() => setIsProfileOpen(true)}
          />
        )}

        {currentPage === 'pathways-after-10th' && (
          <PathwaysPage
            key={activeStream}
            initialStream={activeStream}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentPage === '1-on-1-coaching' && (
          <CoachingPage
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentPage === 'skill-workshops' && (
          <WorkshopsPage
            onOpenBooking={() => setIsBookingOpen(true)}
            onViewSyllabus={(module) => setActiveSyllabusModule(module)}
            onReserveCohort={(cohort) => setActiveReserveCohort(cohort)}
          />
        )}

        {currentPage === 'wellness-mentoring' && (
          <WellnessPage
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentPage === 'student-stories' && (
          <StudentStoriesPage
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
        onSelectStream={handleSelectStream}
      />

      {/* Modals & Dialogs */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <SyllabusModal
        module={activeSyllabusModule}
        onClose={() => setActiveSyllabusModule(null)}
        onEnroll={() => {
          setIsBookingOpen(true);
        }}
      />

      <ReserveSeatModal
        cohort={activeReserveCohort}
        onClose={() => setActiveReserveCohort(null)}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onNavigateToDiagnostic={() => {
          setCurrentPage('pathways-after-10th');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
