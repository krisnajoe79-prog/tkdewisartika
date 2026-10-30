import React from 'react';
import { Teacher } from '../data/schoolData';
import { X, Phone, MessageCircle, Sparkles } from 'lucide-react';

interface TeacherModalProps {
  teacher: Teacher | null;
  onClose: () => void;
}

export const TeacherModal: React.FC<TeacherModalProps> = ({ teacher, onClose }) => {
  if (!teacher) return null;

  const waUrl = teacher.phone
    ? `https://wa.me/62${teacher.phone.replace(/[^0-9]/g, '').replace(/^0/, '')}?text=${encodeURIComponent(
        `Halo ${teacher.name}, saya ingin konsultasi mengenai pembelajaran murid di TK Dewi Sartika.`
      )}`
    : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2C1A14]/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 border border-[#E8DFC8] my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#2C1A14] shadow-md transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Left Column: Authentic Teacher Poster Card Image */}
          <div className="md:col-span-6 bg-[#FAF7F2] p-4 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#E8DFC8]">
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#E0D5BE] w-full max-w-[280px]">
              <img
                src={teacher.image}
                alt={`Poster Resmi ${teacher.name}`}
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Teacher Details */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FAF0DC] text-[#9A671E] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#C5892F]" />
                <span>{teacher.role}</span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-[#2C1A14] leading-tight">
                {teacher.name}
              </h3>

              <div className="text-sm font-semibold text-[#7A5B45] mt-1 mb-6">
                Jabatan: {teacher.role}
              </div>

              {/* Nomor Telepon / Kontak jika ada (jika tidak ada kosongkan) */}
              {teacher.phone ? (
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8] space-y-1.5 mb-6">
                  <div className="text-xs font-bold text-[#7A5B45] uppercase tracking-wider">
                    Nomor Telepon / Kontak:
                  </div>
                  <div className="text-base font-bold text-[#2C1A14] flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>{teacher.phone}</span>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#F2ECE1] flex items-center gap-3">
              {waUrl ? (
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hubungi via WhatsApp</span>
                </a>
              ) : null}

              <button
                type="button"
                onClick={onClose}
                className={`py-3 rounded-xl bg-[#F2ECE1] hover:bg-[#E8DFC8] text-[#2C1A14] text-xs font-semibold transition-colors ${
                  waUrl ? 'px-5' : 'w-full'
                }`}
              >
                Tutup
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
