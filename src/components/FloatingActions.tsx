import React, { useState, useEffect } from 'react';
import { REGISTRATION_INFO } from '../data/schoolData';
import { MessageCircle, ArrowUp, X, Sparkles } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatMenuOpen, setIsChatMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-2xl bg-white border border-[#E8DFC8] text-[#2C1A14] hover:bg-[#FAF7F2] shadow-md hover:shadow-lg transition-all focus:outline-hidden group"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-5 h-5 text-[#C5892F] group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Floating Chat Menu Popup */}
      {isChatMenuOpen && (
        <div className="pointer-events-auto w-80 bg-white rounded-3xl p-5 shadow-2xl border border-[#E8DFC8] mb-2 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#F2ECE1]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-[#2C1A14]">
                  Konsultasi WhatsApp
                </h4>
                <p className="text-[11px] text-[#7A5B45]">Pilih panitia yang ingin dihubungi:</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatMenuOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-2">
            {REGISTRATION_INFO.contacts.map((contact, idx) => {
              const waUrl = `https://wa.me/${contact.waNumber}?text=${encodeURIComponent(
                contact.message
              )}`;
              return (
                <a
                  key={idx}
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsChatMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#FAF7F2] border border-transparent hover:border-[#E8DFC8] transition-colors group"
                >
                  <div>
                    <div className="text-xs font-bold text-[#2C1A14] group-hover:text-emerald-700">
                      {contact.name}
                    </div>
                    <div className="text-[11px] text-[#7A5B45]">
                      {contact.role}
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    Chat
                  </span>
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#F2ECE1] text-[11px] text-[#7A5B45] text-center">
            Penerimaan Murid Baru TA 2026/2027
          </div>
        </div>
      )}

      {/* Main WhatsApp Bubble Button */}
      <button
        type="button"
        onClick={() => setIsChatMenuOpen(!isChatMenuOpen)}
        className="pointer-events-auto flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
        aria-label="Buka WhatsApp Panitia"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">Tanya Panitia (WA)</span>
        <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
      </button>

    </div>
  );
};
