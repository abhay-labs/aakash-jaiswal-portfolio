import React, { useState } from 'react';
import { PROFILE_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = 'Wedding Photography & Films' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService,
    timeline: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: initialService,
        timeline: '',
        message: ''
      });
    }, 5000);
  };

  const whatsappNumber = PROFILE_INFO.contact.whatsapp.replace(/\D/g, '');
  const defaultMsg = encodeURIComponent('Hi Aakash! I came across your portfolio and would like to discuss a project.');

  return (
    <section id="contact" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-mono mb-2">
              <span>// 09 — LET'S COLLABORATE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Have a Story Worth Capturing?
            </h2>
            <p className="text-sm text-zinc-400 mt-3 leading-relaxed font-light">
              Let's create something extraordinary together. Whether planning a destination wedding, launching a commercial campaign, or looking for high-retention video editing, share your vision below.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300">
                  ✉
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">Direct Email</span>
                  <a href={`mailto:${PROFILE_INFO.contact.email}`} className="text-sm text-zinc-200 hover:text-amber-300 font-mono transition-colors">
                    {PROFILE_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300">
                  ☎
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">Phone / Booking Call</span>
                  <a href={`tel:${PROFILE_INFO.contact.phone.replace(/\s+/g, '')}`} className="text-sm text-zinc-200 hover:text-amber-300 font-mono transition-colors">
                    {PROFILE_INFO.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300">
                  📍
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">Primary Base</span>
                  <span className="text-sm text-zinc-200 font-mono">{PROFILE_INFO.contact.city}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase tracking-wider font-bold transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2"
            >
              💬 Chat Directly on WhatsApp
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/80 border border-zinc-800/90 shadow-2xl">
            <h3 className="text-xl font-display font-bold text-white mb-2">Project Brief Submission</h3>
            <p className="text-xs text-zinc-400 mb-6 font-light">Fill out the details below and Aakash will personally review your brief within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] uppercase font-mono text-zinc-400 mb-1.5">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Siddharth Mehta"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-mono text-zinc-400 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] uppercase font-mono text-zinc-400 mb-1.5">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 00000"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-mono text-zinc-400 mb-1.5">Primary Discipline *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="Wedding Photography & Films">Wedding Photography &amp; Films</option>
                    <option value="Portrait & Headshot Session">Portrait &amp; Headshot Session</option>
                    <option value="Commercial & Product Campaign">Commercial &amp; Product Campaign</option>
                    <option value="Event Photography & Highlights">Event Photography &amp; Highlights</option>
                    <option value="Fashion & Editorial Lookbook">Fashion &amp; Editorial Lookbook</option>
                    <option value="Cinematic Video Editing & Color">Cinematic Video Editing &amp; Color</option>
                    <option value="Instagram Reels & Viral Shorts">Instagram Reels &amp; Viral Shorts</option>
                    <option value="Comprehensive Media Package">Comprehensive Media Package</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-mono text-zinc-400 mb-1.5">Estimated Shoot Date / Timeline</label>
                <input
                  type="text"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  placeholder="e.g. Next Month / December 2026 / Flexible"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-mono text-zinc-400 mb-1.5">Project Details &amp; Creative Vision *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your requirements, locations, deliverables, and aesthetic references..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                ></textarea>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-amber-400/20 border border-amber-400/50 text-amber-200 text-xs">
                  ✓ Inquiry Dispatched Successfully! Thank you, {formData.name}. Aakash will get back to you shortly.
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs uppercase tracking-widest font-bold transition-all shadow-xl shadow-amber-400/20"
              >
                Submit Project Inquiry →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
