import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Sparkles, ArrowRight, Heart, Users, BookOpen, ShieldCheck, Sun } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onRegisterClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onRegisterClick }) => {
  return (
    <section id="beranda" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle organic warm background decorations */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#F5EBD7]/60 via-[#F7EFE1]/40 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-40 right-4 w-72 h-72 bg-[#E9D8A6]/20 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-4 w-80 h-80 bg-[#C5892F]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Trust Slogan Banner (Kemendikdasmen Ramah Anak & Slogan) */}
            <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-semibold text-[#7A5B45]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F2ECE1] rounded-md text-[#4A2E20] border border-[#E4D5B7]">
                <Sun className="w-3.5 h-3.5 text-[#C5892F]" />
                KEMENDIKDASMEN RAMAH ANAK
              </span>
              <span className="hidden sm:inline-block text-[#B89F82]">·</span>
              <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-md border border-[#FDE68A]">
                #PendidikanBermutuUntukSemua
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2C1A14] leading-[1.12] tracking-tight mb-5 max-w-2xl">
              Selamat Datang di <br />
              <span className="text-[#C5892F] relative inline-block">
                TK Dewi Sartika
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#E4D5B7] -z-10"
                  viewBox="0 0 300 20"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 15C60 6 180 5 297 14"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Sub-headline & Tagline */}
            <p className="text-xl sm:text-2xl font-semibold text-[#5C3B28] mb-3">
              "{SCHOOL_INFO.slogan}"
            </p>

            <p className="text-base sm:text-lg text-[#614735] leading-relaxed mb-8 max-w-xl">
              {SCHOOL_INFO.subText} Lembaga pendidikan anak usia dini yang berkomitmen
              menghadirkan suasana belajar yang ceria, islami, penuh kasih sayang, dan
              berkarakter di Kawalu, Kota Tasikmalaya.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onRegisterClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-[#C5892F] hover:bg-[#A97223] active:bg-[#8F5F1B] rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-5 h-5 text-amber-200" />
                <span>Daftar Sekarang (SPMB 2026/2027)</span>
              </button>

              <button
                type="button"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#2C1A14] bg-white hover:bg-[#F2ECE1] border border-[#E0D5BE] rounded-xl transition-all shadow-xs"
              >
                <span>Jelajahi Profil</span>
                <ArrowRight className="w-4 h-4 text-[#7A5B45]" />
              </button>
            </div>

            {/* Quiet Quick Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-10 mt-10 border-t border-[#E8DFC8] w-full">
              <div>
                <div className="font-heading text-2xl font-bold text-[#2C1A14] tabular-nums">8</div>
                <div className="text-xs text-[#7A5B45] font-medium">Tenaga Pendidik</div>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-[#2C1A14] tabular-nums">6</div>
                <div className="text-xs text-[#7A5B45] font-medium">Aspek Materi Belajar</div>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-[#2C1A14] tabular-nums">5</div>
                <div className="text-xs text-[#7A5B45] font-medium">Program Unggulan</div>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-[#C5892F] tabular-nums">4-6</div>
                <div className="text-xs text-[#7A5B45] font-medium">Tahun Kelompok Belajar</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Anchor & Official Crest Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Frame */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E6DBCE] shadow-lg relative z-10">
                
                {/* School Emblem Showcase */}
                <div className="flex flex-col items-center text-center pb-6 border-b border-[#F0E8DC]">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#FAF7F2] p-2 border-2 border-[#E4D5B7] shadow-inner mb-4 flex items-center justify-center">
                    <img
                      src={SCHOOL_INFO.logo}
                      alt="Lambang Resmi TK Dewi Sartika"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#2C1A14]">
                    TK Dewi Sartika
                  </h3>
                  <p className="text-xs text-[#7A5B45] mt-1">
                    Kecamatan Kawalu · Kota Tasikmalaya
                  </p>
                </div>

                {/* Real Snapshot Snippets */}
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EDE4D5]">
                    <div className="w-10 h-10 rounded-lg bg-[#E9D8A6] flex items-center justify-center shrink-0 text-[#4A2E20]">
                      <Heart className="w-5 h-5 text-[#C5892F]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#2C1A14]">
                        Pendidikan Karakter & Akhlak
                      </div>
                      <div className="text-xs text-[#7A5B45] leading-snug mt-0.5">
                        Pembiasaan sholat dhuha, murajaah, hadits, dan nilai kesopanan sehari-hari.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EDE4D5]">
                    <div className="w-10 h-10 rounded-lg bg-[#E0EBD8] flex items-center justify-center shrink-0 text-[#2D5A27]">
                      <ShieldCheck className="w-5 h-5 text-[#2E7D32]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#2C1A14]">
                        Taman Bermain Outdoor Luas
                      </div>
                      <div className="text-xs text-[#7A5B45] leading-snug mt-0.5">
                        Area stimulasi motorik anak yang aman, hijau, dan dilengkapi wahana permainan.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EDE4D5]">
                    <div className="w-10 h-10 rounded-lg bg-[#E2EDF8] flex items-center justify-center shrink-0 text-[#1E3A8A]">
                      <Users className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#2C1A14]">
                        Guru Berpengalaman & Ramah
                      </div>
                      <div className="text-xs text-[#7A5B45] leading-snug mt-0.5">
                        Didampingi 8 pendidik profesional yang sabar dan berdedikasi tinggi.
                      </div>
                    </div>
                  </div>
                </div>

                {/* SPMB Callout Strip inside card */}
                <div className="mt-6 pt-4 border-t border-[#F0E8DC] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#4A2E20] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    Pendaftaran Dibuka: TA {SCHOOL_INFO.academicYear}
                  </div>
                  <a
                    href="#pendaftaran"
                    className="text-[#C5892F] hover:text-[#9A671E] font-semibold underline underline-offset-2"
                  >
                    Cek Syarat →
                  </a>
                </div>

              </div>

              {/* Decorative soft backdrop element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#E8DFC8]/40 rounded-3xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
