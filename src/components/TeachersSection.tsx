import React, { useState } from 'react';
import { TEACHERS, Teacher } from '../data/schoolData';
import { Users, Sparkles, ZoomIn, Phone, Heart } from 'lucide-react';

interface TeachersSectionProps {
  onSelectTeacher: (teacher: Teacher) => void;
}

export const TeachersSection: React.FC<TeachersSectionProps> = ({ onSelectTeacher }) => {
  const [filter, setFilter] = useState<'all' | 'kepala-sekolah' | 'guru-kelas'>('all');

  const filteredTeachers = TEACHERS.filter((t) => {
    if (filter === 'all') return true;
    return t.category === filter;
  });

  return (
    <section id="guru" className="py-20 bg-white border-y border-[#EDE6D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5892F] uppercase tracking-wider mb-2">
            <Users className="w-4 h-4" />
            <span>Pendidik Berakhlak & Berdedikasi</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2C1A14] tracking-tight">
            Tenaga Pendidik TK Dewi Sartika
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#614735]">
            Dipimpin oleh Kepala Sekolah yang visioner dan didukung dewan guru yang sabar, kompeten, serta penuh kasih sayang dalam mendampingi buah hati Anda.
          </p>

          {/* Interactive Filter Control */}
          <div className="mt-8 inline-flex p-1 bg-[#F2ECE1] rounded-2xl border border-[#DECDB7]">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-[#2C1A14] shadow-xs'
                  : 'text-[#614735] hover:text-[#2C1A14]'
              }`}
            >
              Semua Pendidik ({TEACHERS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('kepala-sekolah')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
                filter === 'kepala-sekolah'
                  ? 'bg-white text-[#2C1A14] shadow-xs'
                  : 'text-[#614735] hover:text-[#2C1A14]'
              }`}
            >
              Kepala Sekolah
            </button>
            <button
              type="button"
              onClick={() => setFilter('guru-kelas')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
                filter === 'guru-kelas'
                  ? 'bg-white text-[#2C1A14] shadow-xs'
                  : 'text-[#614735] hover:text-[#2C1A14]'
              }`}
            >
              Guru Kelas (7)
            </button>
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredTeachers.map((teacher) => {
            const isKepala = teacher.category === 'kepala-sekolah';
            return (
              <div
                key={teacher.id}
                onClick={() => onSelectTeacher(teacher)}
                className={`bg-[#FAF7F2] rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  isKepala
                    ? 'border-[#C5892F] shadow-sm hover:shadow-md ring-2 ring-[#C5892F]/20'
                    : 'border-[#E8DFC8] hover:border-[#C5892F]/60 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Poster / Portrait Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#ECE3D2]">
                  <img
                    src={teacher.image}
                    alt={`Foto ${teacher.name}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Scrim at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-[#2C1A14] text-xs font-semibold shadow-md">
                      <ZoomIn className="w-3.5 h-3.5 text-[#C5892F]" />
                      Lihat Kartu Lengkap
                    </span>
                  </div>

                  {/* Role Badge on Image */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-bold shadow-xs ${
                        isKepala
                          ? 'bg-[#2C1A14] text-[#E9D8A6] border border-[#C5892F]'
                          : 'bg-white/95 text-[#2C1A14] border border-[#E8DFC8]'
                      }`}
                    >
                      {teacher.role}
                    </span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-5 flex flex-col justify-between grow">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#2C1A14] group-hover:text-[#C5892F] transition-colors leading-snug">
                      {teacher.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#7A5B45] mt-1">
                      {teacher.role}
                    </div>

                    {/* Nomor Telepon / Kontak jika ada, jika tidak ada kosongkan */}
                    {teacher.phone ? (
                      <div className="mt-4 pt-3 border-t border-[#E8DFC8]/60 flex items-center gap-2 text-xs font-medium text-[#2C1A14]">
                        <span className="p-1 rounded-md bg-emerald-100 text-emerald-800">
                          <Phone className="w-3.5 h-3.5" />
                        </span>
                        <span>{teacher.phone}</span>
                      </div>
                    ) : null}
                  </div>

                  {/* Bottom Action strip */}
                  <div className="pt-3 mt-4 border-t border-[#E8DFC8] flex items-center justify-between text-xs">
                    <span className="text-[#C5892F] font-semibold group-hover:underline flex items-center gap-1">
                      Lihat Foto Kartu <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note under grid */}
        <div className="mt-12 text-center text-xs text-[#7A5B45]">
          Klik pada kartu guru di atas untuk memperbesar dan melihat kartu tenaga pendidik resmi TK Dewi Sartika.
        </div>

      </div>
    </section>
  );
};
