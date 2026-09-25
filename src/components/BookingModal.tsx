import React, { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGrade?: string;
  defaultFocus?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultGrade = 'Grade 10 (Stream Selection Imminent)',
  defaultFocus = 'Stream Selection & 11th Subject Roadmap'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState(defaultGrade);
  const [focus, setFocus] = useState(defaultFocus);
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 4:00 PM');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'GG-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-[#081534]/10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#45464e] hover:bg-[#efeeeb] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {!submitted ? (
          <div>
            <div className="space-y-1 mb-6 pr-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff7a30]/10 text-[#a04100] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#ff7a30]"></span>
                Complimentary 30-Min Family Video Call
              </div>
              <h3 className="font-headline-md text-headline-md text-[#081534] tracking-tight pt-1">
                Book Your Pathway &amp; Clarity Call
              </h3>
              <p className="font-body-sm text-body-sm text-[#45464e]">
                Talk 1-on-1 with a certified academic and adolescent wellness mentor. Zero cost, no obligation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#45464e] mb-1">
                  Student / Parent Name *
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Priya & Rajesh Sharma"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] text-[#1b1c1a] text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7a30] transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#45464e] mb-1">
                    Student Current Grade
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#f5f3f0] text-[#1b1c1a] text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7a30] transition-all"
                  >
                    <option>Grade 10 (Stream Selection Imminent)</option>
                    <option>Grade 9 (Preparing for Board Year)</option>
                    <option>Grade 8 (Early Exploration)</option>
                    <option>Grade 11 (Stream Adjustment / Re-evaluation)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#45464e] mb-1">
                    Primary Discussion Focus
                  </label>
                  <select
                    value={focus}
                    onChange={(e) => setFocus(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#f5f3f0] text-[#1b1c1a] text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7a30] transition-all"
                  >
                    <option>Stream Selection &amp; 11th Subject Roadmap</option>
                    <option>Board Exam Anxiety &amp; Mindset Calm</option>
                    <option>Academic Coaching &amp; Study Systems</option>
                    <option>Confidence &amp; Public Speaking Workshops</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#45464e] mb-1">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] text-[#1b1c1a] text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7a30] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#45464e] mb-1">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="parent@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] text-[#1b1c1a] text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7a30] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#45464e] mb-1">
                  Preferred Discovery Slot
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Tomorrow, 4:00 PM', 'Saturday, 11:00 AM', 'Sunday, 5:30 PM'].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedDate(slot)}
                      className={`p-2 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                        selectedDate === slot
                          ? 'bg-[#081534] text-white border-[#081534] shadow-sm'
                          : 'bg-[#f5f3f0] text-[#45464e] border-transparent hover:border-[#76777f]/30'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#ff7a30] text-white font-label-lg text-sm font-semibold shadow-[0_4px_14px_rgba(255,122,48,0.35)] hover:bg-[#a04100] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Confirm Free 30-Min Call
                </button>
                <p className="text-[11px] text-[#76777f] text-center mt-2">
                  🔒 Strictly confidential. Both student and at least one parent are invited to attend.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold text-[#a04100] tracking-wider">
                Booking Reference: {bookingRef}
              </span>
              <h3 className="font-headline-md text-[#081534]">Session Confirmed!</h3>
              <p className="text-sm text-[#45464e] max-w-sm mx-auto">
                Thank you <strong>{name}</strong>! We've scheduled your 30-minute discovery call for <strong>{selectedDate}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#f5f3f0] text-left space-y-2 text-xs text-[#45464e]">
              <div className="flex items-center gap-2 text-[#081534] font-semibold">
                <span className="material-symbols-outlined text-sm text-[#ff7a30]">video_camera_front</span>
                <span>Google Meet Link dispatched to {email || phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-emerald-600">check_circle</span>
                <span>Focus: {focus}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-emerald-600">check_circle</span>
                <span>Includes 10th Stream Diagnostic Report PDF</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-full bg-[#081534] text-white font-label-lg text-sm hover:bg-[#1e2a4a] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
