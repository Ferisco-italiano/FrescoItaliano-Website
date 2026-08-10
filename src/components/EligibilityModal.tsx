import React, { useState } from 'react';
import { X, CheckCircle2, Building, MapPin, User, Mail, MessageSquare, Sparkles, Send, ShieldCheck } from 'lucide-react';

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EligibilityModal: React.FC<EligibilityModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessBuilding: '',
    address: '',
    footTraffic: '100-250 occupants/day',
    message:
      'Hello Fresco Team, I would like to verify if my location qualifies for a zero-cap-ex Fresco Italian espresso machine placement. Please assess our foot traffic and contact me with machine availability.',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#211D1A]/50 backdrop-blur-md animate-in fade-in duration-300">
      {/* Modal Card */}
      <div className="bg-white border border-[#E3DDD3] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-xl relative overflow-hidden text-left max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF8F5] text-[#8C8378] hover:text-[#211D1A] border border-[#E3DDD3] transition-colors focus:outline-none"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            {/* Modal Header */}
            <div className="space-y-2 border-b border-[#E3DDD3] pb-4 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#211D1A]/40 text-[#211D1A] text-[11px] font-mono uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" /> Placement Qualification
              </div>
              <h3 className="font-centaur text-3xl font-bold text-[#211D1A]">
                Check Location Eligibility
              </h3>
              <p className="font-sans-clean text-xs text-[#514A44]">
                Verify if your building qualifies for a zero-cap-ex Bianchi Italian espresso machine with fresh Java Blend beans.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-sans-clean text-xs">
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[#514A44] font-medium flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#211D1A]" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E3DDD3] focus:border-[#211D1A] rounded-xl px-3.5 py-2.5 text-[#211D1A] placeholder-[#B5AB9C] focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#514A44] font-medium flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#211D1A]" /> Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@propertygroup.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E3DDD3] focus:border-[#211D1A] rounded-xl px-3.5 py-2.5 text-[#211D1A] placeholder-[#B5AB9C] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Business / Building Name */}
              <div className="space-y-1">
                <label className="text-[#514A44] font-medium flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#211D1A]" /> Business or Building Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Halifax Commerce Tower / Apex Plaza"
                  value={formData.businessBuilding}
                  onChange={(e) => setFormData({ ...formData, businessBuilding: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E3DDD3] focus:border-[#211D1A] rounded-xl px-3.5 py-2.5 text-[#211D1A] placeholder-[#B5AB9C] focus:outline-none transition-colors"
                />
              </div>

              {/* Location Address */}
              <div className="space-y-1">
                <label className="text-[#514A44] font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#211D1A]" /> Location Address *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 1801 Barrington St, Halifax, NS B3J 3L7"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E3DDD3] focus:border-[#211D1A] rounded-xl px-3.5 py-2.5 text-[#211D1A] placeholder-[#B5AB9C] focus:outline-none transition-colors"
                />
              </div>

              {/* Estimated Foot Traffic */}
              <div className="space-y-1">
                <label className="text-[#514A44] font-medium">Estimated Daily Occupants / Foot Traffic</label>
                <select
                  value={formData.footTraffic}
                  onChange={(e) => setFormData({ ...formData, footTraffic: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E3DDD3] focus:border-[#211D1A] rounded-xl px-3.5 py-2.5 text-[#211D1A] focus:outline-none transition-colors"
                >
                  <option value="50-100 occupants/day">50 - 100 occupants / day</option>
                  <option value="100-250 occupants/day">100 - 250 occupants / day (Ideal)</option>
                  <option value="250-500 occupants/day">250 - 500 occupants / day (High Yield)</option>
                  <option value="500+ occupants/day">500+ occupants / day (Priority Hub)</option>
                </select>
              </div>

              {/* Pre-filled Editable Message */}
              <div className="space-y-1">
                <label className="text-[#514A44] font-medium flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#211D1A]" /> Pre-filled Inquiry Message
                  </span>
                  <span className="text-[10px] text-[#8C8378] font-mono">Editable</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E3DDD3] focus:border-[#211D1A] rounded-xl p-3 text-[#211D1A] placeholder-[#B5AB9C] focus:outline-none transition-colors leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gold-button w-full py-4 rounded-xl text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Verifying Location Coordinates...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Location Inquiry</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-[#8C8378] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Commitment • Instant Assessment Response</span>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation View */
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#211D1A]">
                Verification Pending • Priority Hub
              </span>
              <h3 className="font-centaur text-3xl font-bold text-[#211D1A]">
                Inquiry Received, {formData.name.split(' ')[0]}!
              </h3>
              <p className="font-sans-clean text-xs text-[#514A44] max-w-md mx-auto leading-relaxed">
                We have logged your building inquiry for <strong className="text-[#211D1A]">{formData.businessBuilding}</strong> at <span className="underline">{formData.address}</span>.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E3DDD3] max-w-md mx-auto text-left font-sans-clean text-xs space-y-2">
              <p className="text-[11px] font-mono text-[#211D1A] uppercase">Assigned Placement Ref:</p>
              <p className="font-mono text-[#211D1A] font-bold">#FI-LOC-{Math.floor(100000 + Math.random() * 900000)}</p>
              <p className="text-[#8C8378] text-[11px]">
                A Fresco regional site coordinator will conduct an initial foot-traffic audit and reply to <span className="text-[#211D1A]">{formData.email}</span> within 24 business hours.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="gold-button px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold cursor-pointer"
            >
              Back To Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
