import React, { useState } from 'react';
import { Cohort } from '../types';

interface ReserveSeatModalProps {
  cohort: Cohort | null;
  onClose: () => void;
  onSeatReserved?: (cohortId: string) => void;
}

export const ReserveSeatModal: React.FC<ReserveSeatModalProps> = ({
  cohort,
  onClose,
  onSeatReserved
}) => {
  const [studentName, setStudentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!cohort) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSeatReserved) {
      onSeatReserved(cohort.id);
    }
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-[#081534]/10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#45464e] hover:bg-[#efeeeb] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {!confirmed ? (
          <div className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff7a30]/10 text-[#a04100] text-xs font-bold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ff7a30] animate-ping"></span>
                {cohort.seatsRemaining} Seats Remaining
              </div>
              <h3 className="font-headline-md text-headline-md text-[#081534]">
                Reserve Cohort Seat
              </h3>
              <p className="text-xs text-[#45464e] mt-1">
                {cohort.title}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#f5f3f0] space-y-1 text-xs text-[#45464e]">
              <div className="font-semibold text-[#081534] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#ff7a30]">calendar_month</span>
                <span>{cohort.month} {cohort.day} • {cohort.formatLabel}</span>
              </div>
              <div>{cohort.schedule}</div>
              <div className="text-[#a04100] font-bold">Class limit: strictly {cohort.classLimit} students</div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#45464e] mb-1">
                  Student Full Name *
                </label>
                <input
                  required
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="e.g. Aarav Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f3f0] text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7a30]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#45464e] mb-1">
                  Parent Mobile / WhatsApp *
                </label>
                <input
                  required
                  type="tel"
                  value={parentPhone}
                  onChange={(e) => setParentPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f3f0] text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7a30]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#45464e] mb-1">
                  Parent / Student Email *
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="parent@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f3f0] text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7a30]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#081534] text-white font-label-lg text-sm hover:bg-[#1e2a4a] transition-colors font-semibold cursor-pointer shadow-md"
                >
                  Confirm Reservation (Hold for 24h)
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">check_circle</span>
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold text-[#a04100] tracking-wider">
                Seat Confirmed
              </span>
              <h3 className="font-headline-md text-[#081534]">Welcome, {studentName}!</h3>
              <p className="text-xs text-[#45464e]">
                We've reserved 1 seat for <strong>{cohort.title}</strong> on {cohort.month} {cohort.day}.
              </p>
            </div>
            <div className="p-3 bg-[#f5f3f0] rounded-xl text-xs text-[#45464e] text-left">
              <span>Classroom login credentials and orientation kit sent to <strong>{email || parentPhone}</strong>.</span>
            </div>
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-full bg-[#081534] text-white font-label-lg text-sm hover:bg-[#1e2a4a] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
