import React from 'react';
import { SCHOOL_INFO, VISION, MISSIONS, OBJECTIVES, CORE_VALUES } from '../data/schoolData';
import { CheckCircle2, Target, Eye, Sparkles, BookHeart, Compass, FileText } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-white border-y border-[#EDE6D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5892F] uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Mengenal Lebih Dekat</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2C1A14] tracking-tight">
            Tentang TK Dewi Sartika
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#614735] leading-relaxed">
            {SCHOOL_INFO.description}
          </p>
        </div>

        {/* 4 Core Pillars / Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#E8DFC8] hover:border-[#C5892F]/60 transition-all shadow-xs group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E0D5BE] flex items-center justify-center font-heading font-bold text-[#C5892F] mb-4 group-hover:scale-110 transition-transform">
                0{idx + 1}
              </div>
              <h3 className="font-heading text-lg font-bold text-[#2C1A14] mb-2">
                {val.title}
              </h3>
              <p className="text-sm text-[#614735] leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Visi & Misi Main Feature Card */}
        <div className="bg-gradient-to-br from-[#FAF7F2] via-white to-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#E8DFC8] shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Visi Block */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#2C1A14] text-white rounded-2xl p-8 shadow-md">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C5892F] text-white text-xs font-semibold uppercase tracking-wider mb-6">
                  <Eye className="w-4 h-4" />
                  <span>Visi Sekolah</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold leading-snug tracking-tight text-white mb-6">
                  "{VISION}"
                </h3>
                <p className="text-sm text-[#D7C7BA] leading-relaxed mb-6">
                  Menjadi fondasi kokoh bagi pembentukan akhlak karimah, kemandirian berpikir, dan kesiapan mental anak sebelum melangkah ke jenjang pendidikan dasar.
                </p>
              </div>

              {/* Direct SPMB Link */}
              <div className="pt-6 border-t border-white/15">
                <a
                  href="#pendaftaran"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#E9D8A6] hover:text-white transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Informasi Pendaftaran Murid Baru (SPMB) →</span>
                </a>
              </div>
            </div>

            {/* Right: Misi List */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#7A5B45] uppercase tracking-wider mb-4">
                <Target className="w-4 h-4 text-[#C5892F]" />
                <span>Misi Sekolah</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#2C1A14] mb-6">
                Langkah Nyata Mewujudkan Visi
              </h3>

              <div className="space-y-4">
                {MISSIONS.map((misi, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#EADBCC] shadow-xs hover:border-[#C5892F]/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#FAF0DC] text-[#C5892F] flex items-center justify-center shrink-0 font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-sm sm:text-base text-[#4A2E20] leading-relaxed pt-0.5">
                      {misi}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Tujuan Sekolah (4 Poin) */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#FAF0DC] flex items-center justify-center text-[#C5892F]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-[#2C1A14]">
                Tujuan Pendidikan Sekolah
              </h3>
              <p className="text-xs sm:text-sm text-[#7A5B45]">
                Target capaian perkembangan murid di TK Dewi Sartika
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OBJECTIVES.map((goal, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8] hover:bg-white transition-all shadow-xs"
              >
                <div className="p-2 rounded-lg bg-[#E6F4EA] text-[#1E7E34] shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#7A5B45] uppercase tracking-wider mb-1">
                    Capaian 0{index + 1}
                  </div>
                  <p className="text-sm sm:text-base text-[#2C1A14] font-medium leading-relaxed">
                    {goal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
