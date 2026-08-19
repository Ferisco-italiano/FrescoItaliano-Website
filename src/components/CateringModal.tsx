import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Users, Coffee, Send, Sparkles, MapPin } from 'lucide-react';

interface CateringModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CateringModal: React.FC<CateringModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventName: '',
    eventDate: '',
    guestCount: '50-150 guests',
    location: 'Halifax / HRM Area',
    message: 'Hello Fresco Team, we are organizing an event and would like to hire an on-site Fresco Italian mobile barista pop-up bar. Please provide catering availability and quotes.',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'ce432ae5-c737-45d9-8749-5b1874da10d9',
          subject: `New Event Catering Inquiry — ${formData.eventName}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          event_name: formData.eventName,
          event_date: formData.eventDate,
          guest_count: formData.guestCount,
          location: formData.location,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError('Something went wrong sending your inquiry. Please try again.');
      }
    } catch {
      setSubmitError('Something went wrong sending your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#211D1A]/50 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white border border-[#E3DDD3] rounded-3xl max-w-3xl w-full shadow-xl relative overflow-hidden text-left max-h-[90vh] flex flex-col">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF8F5] text-[#8C8378] hover:text-[#211D1A] border border-[#E3DDD3] transition-colors focus:outline-none z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-10">

        {!submitted ? (
          <div className="space-y-8">
            {/* Header Banner */}
            <div className="space-y-3 border-b border-[#E3DDD3] pb-6 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#211D1A]/40 text-[#211D1A] text-[11px] font-mono uppercase tracking-widest">
                <Coffee className="w-3.5 h-3.5" /> Mobile Italian Barista Bar
              </div>
              <h2 className="font-centaur text-3xl sm:text-4xl font-bold text-[#211D1A]">
                Event Catering Inquiries.
              </h2>
              <p className="font-sans-clean text-xs sm:text-sm text-[#514A44] leading-relaxed">
                Elevate your gala, corporate launch, wedding, or public summit with a live Fresco mobile Italian espresso bar. Serving freshly extracted espresso, lattes, and nitro cold brew on-site.
              </p>
            </div>

            {/* Catering Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 font-sans-clean text-xs">
              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E3DDD3] space-y-1">
                <span className="text-[10px] font-mono text-[#211D1A] uppercase">Turnkey Setup</span>
                <p className="font-centaur text-lg font-bold text-[#211D1A]">Full Barista Station</p>
                <p className="text-[#8C8378] text-[11px]">Includes commercial Italian machinery & professional baristas.</p>
              </div>

              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E3DDD3] space-y-1">
                <span className="text-[10px] font-mono text-[#211D1A] uppercase">SCA 80+ Specialty</span>
                <p className="font-centaur text-lg font-bold text-[#211D1A]">Java Blend Beans</p>
                <p className="text-[#8C8378] text-[11px]">Specialty beans ground fresh per order with custom branded cups.</p>
              </div>

              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E3DDD3] space-y-1">
                <span className="text-[10px] font-mono text-[#211D1A] uppercase">High Output</span>
                <p className="font-centaur text-lg font-bold text-[#211D1A]">200+ Drinks / Hour</p>
                <p className="text-[#8C8378] text-[11px]">Rapid extraction to handle heavy guest volume without delays.</p>
              </div>
            </div>

            {/* Inquiry Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-sans-clean text-xs pt-2">
              <h3 className="font-centaur text-xl font-bold text-[#211D1A] border-b border-[#E3DDD3] pb-2">
                Event Details & Quote Request
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[#514A44] font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E3DDD3] focus:border-[#211D1A] rounded-xl px-3.5 py-2.5 text-[#211D1A] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#514A44] font-medium">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="david@eventgroup.ca"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E3DDD3] focus:border-[#211D1A] rounded-xl px-3.5 py-2.5 text-[#211D1A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-[#514A44] font-medium">Event Name / Type *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tech Summit Gala"
                    value={formData.eventName}
                    onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E3DDD3] focus:border-[#211D1A] rounded-xl px-3.5 py-2.5 text-[#211D1A] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#514A44] font-medium">Estimated Date</label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E3DDD3] focus:border-[#211D1A] rounded-xl px-3.5 py-2.5 text-[#211D1A] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#514A44] font-medium">Guest Count</label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E3DDD3] focus:border-[#211D1A] rounded-xl px-3.5 py-2.5 text-[#211D1A] focus:outline-none"
                  >
                    <option value="25-50 guests">25 - 50 guests</option>
                    <option value="50-150 guests">50 - 150 guests</option>
                    <option value="150-300 guests">150 - 300 guests</option>
                    <option value="300+ guests">300+ guests</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[#514A44] font-medium">Pre-filled Catering Inquiry Message</label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E3DDD3] focus:border-[#211D1A] rounded-xl p-3 text-[#211D1A] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="gold-button w-full py-4 rounded-xl text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Request...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Event Catering Request</span>
                  </>
                )}
              </button>
              {submitError && (
                <p className="text-[11px] text-red-600 text-center">{submitError}</p>
              )}
            </form>
          </div>
        ) : (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#211D1A]">
                Catering Quote Inquiry Received
              </span>
              <h3 className="font-centaur text-3xl font-bold text-[#211D1A]">
                Inquiry Logged, {formData.name.split(' ')[0]}!
              </h3>
              <p className="font-sans-clean text-xs text-[#514A44] max-w-md mx-auto">
                We have received your event catering inquiry for <strong className="text-[#211D1A]">{formData.eventName}</strong>. Our event director will review date availability and respond to <span className="underline">{formData.email}</span> within 24 hours.
              </p>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="gold-button px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold"
            >
              Close
            </button>
          </div>
        )}

        </div>
      </div>
    </div>
  );
};
