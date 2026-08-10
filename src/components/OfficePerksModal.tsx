import React, { useState } from 'react';
import { X, CheckCircle2, Coffee, Users, Gift, Send, Sparkles, Award } from 'lucide-react';

interface OfficePerksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfficePerksModal: React.FC<OfficePerksModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    employeeCount: '25-100 employees',
    message: 'Hello Fresco Team, we would like to offer the perk of unlimited Italian espresso to our team in our office breakroom. Please provide package options.',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#211D1A]/50 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white border border-[#E3DDD3] rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-xl relative overflow-hidden text-left max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF8F5] text-[#8C8378] hover:text-[#211D1A] border border-[#E3DDD3] transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-8">
            {/* Header Banner */}
            <div className="space-y-3 border-b border-[#E3DDD3] pb-6 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#211D1A]/40 text-[#211D1A] text-[11px] font-mono uppercase tracking-widest">
                <Gift className="w-3.5 h-3.5" /> Corporate Perks Program
              </div>
              <h2 className="font-centaur text-3xl sm:text-4xl font-bold text-[#211D1A]">
                Give The Perk Of Espresso.
              </h2>
              <p className="font-sans-clean text-xs sm:text-sm text-[#514A44] leading-relaxed">
                Transform your office coffee breakroom from generic drip pots to an authentic Italian espresso bar experience powered by Bianchi machinery and Nova Scotia's Java Blend SCA 80+ roasts.
              </p>
            </div>

            {/* 3 Corporate Benefit Cards */}
            <div className="grid sm:grid-cols-3 gap-4 font-sans-clean text-xs">
              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E3DDD3] space-y-1">
                <div className="flex items-center gap-1.5 text-[#211D1A] font-bold">
                  <Coffee className="w-4 h-4" /> 15-Second Espresso Shots
                </div>
                <p className="text-[#8C8378] text-[11px]">
                  Zero line-ups in the morning. Fresh ground beans per single extraction.
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E3DDD3] space-y-1">
                <div className="flex items-center gap-1.5 text-[#211D1A] font-bold">
                  <Award className="w-4 h-4" /> SCA 80+ Java Blend
                </div>
                <p className="text-[#8C8378] text-[11px]">
                  Specialty beans roasted fresh weekly in Nova Scotia for clean focus.
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E3DDD3] space-y-1">
                <div className="flex items-center gap-1.5 text-[#211D1A] font-bold">
                  <Users className="w-4 h-4" /> Boost Team Morale
                </div>
                <p className="text-[#8C8378] text-[11px]">
                  Creates a vibrant internal gathering point that employees genuinely love.
                </p>
              </div>
            </div>

            {/* Inquiry Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-sans-clean text-xs pt-2">
              <h3 className="font-centaur text-xl font-bold text-[#211D1A] border-b border-[#E3DDD3] pb-2">
                Office Perk Inquiry Form
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[#514A44] font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E3DDD3] focus:border-[#211D1A] rounded-xl px-3.5 py-2.5 text-[#211D1A] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#514A44] font-medium">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@techcompany.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E3DDD3] focus:border-[#211D1A] rounded-xl px-3.5 py-2.5 text-[#211D1A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[#514A44] font-medium">Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Innovations Inc."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E3DDD3] focus:border-[#211D1A] rounded-xl px-3.5 py-2.5 text-[#211D1A] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#514A44] font-medium">Office Headcount</label>
                  <select
                    value={formData.employeeCount}
                    onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E3DDD3] focus:border-[#211D1A] rounded-xl px-3.5 py-2.5 text-[#211D1A] focus:outline-none"
                  >
                    <option value="10-25 employees">10 - 25 employees</option>
                    <option value="25-100 employees">25 - 100 employees</option>
                    <option value="100-300 employees">100 - 300 employees</option>
                    <option value="300+ employees">300+ employees</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[#514A44] font-medium">Pre-filled Perk Request Message</label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E3DDD3] focus:border-[#211D1A] rounded-xl p-3 text-[#211D1A] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="gold-button w-full py-4 rounded-xl text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Submit Office Perk Request</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#211D1A]">
                Corporate Perk Request Confirmation
              </span>
              <h3 className="font-centaur text-3xl font-bold text-[#211D1A]">
                Thank You, {formData.name.split(' ')[0]}!
              </h3>
              <p className="font-sans-clean text-xs text-[#514A44] max-w-md mx-auto">
                We have received your office perk request for <strong className="text-[#211D1A]">{formData.companyName}</strong>. Our corporate account team will reach out to <span className="underline">{formData.email}</span> with a custom coffee breakroom proposal.
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
  );
};
