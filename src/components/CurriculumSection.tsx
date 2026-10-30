import React, { useState } from 'react';
import { CURRICULUM_ITEMS, FEATURED_PROGRAMS, CurriculumItem, FeaturedProgram } from '../data/schoolData';
import {
  BookOpen,
  Calculator,
  Palette,
  Brush,
  Music,
  HeartHandshake,
  Scroll,
  Sparkles,
  BookOpenCheck,
  Compass,
  Award,
  ChevronRight,
  Check,
  Star
} from 'lucide-react';

export const CurriculumSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'materi' | 'program'>('materi');
  const [selectedCurriculum, setSelectedCurriculum] = useState<CurriculumItem>(CURRICULUM_ITEMS[0]);

  const getCurriculumIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-blue-600" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-amber-600" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-rose-600" />;
      case 'Brush':
        return <Brush className="w-6 h-6 text-purple-600" />;
      case 'Music':
        return <Music className="w-6 h-6 text-emerald-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-amber-700" />;
      default:
        return <Star className="w-6 h-6 text-amber-600" />;
    }
  };

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scroll':
        return <Scroll className="w-6 h-6 text-[#C5892F]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#059669]" />;
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-6 h-6 text-[#2563EB]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#D97706]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#7C3AED]" />;
      default:
        return <Star className="w-6 h-6 text-[#C5892F]" />;
    }
  };

  return (
    <section id="kurikulum" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5892F] uppercase tracking-wider mb-2">
            <Star className="w-4 h-4" />
            <span>Kurikulum Ramah Anak & Berkarakter</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2C1A14] tracking-tight">
            Program Pembelajaran & Kurikulum
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#614735]">
            Menggabungkan stimulasi kognitif, motorik, bahasa, dan nilai religius islami dalam suasana bermain yang menggembirakan.
          </p>

          {/* Interactive Mode Segmented Tabs */}
          <div className="mt-8 inline-flex p-1.5 bg-[#EDE4D5] rounded-2xl border border-[#DECDB7]">
            <button
              type="button"
              onClick={() => setActiveTab('materi')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'materi'
                  ? 'bg-white text-[#2C1A14] shadow-sm'
                  : 'text-[#614735] hover:text-[#2C1A14]'
              }`}
            >
              6 Materi Utama (Hal yang Dipelajari)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('program')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'program'
                  ? 'bg-white text-[#2C1A14] shadow-sm'
                  : 'text-[#614735] hover:text-[#2C1A14]'
              }`}
            >
              5 Program Unggulan & Ekskul
            </button>
          </div>
        </div>

        {/* Tab 1: 6 Materi Pembelajaran */}
        {activeTab === 'materi' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CURRICULUM_ITEMS.map((item, index) => {
                const isSelected = selectedCurriculum.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedCurriculum(item)}
                    className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#C5892F] shadow-md ring-2 ring-[#C5892F]/20'
                        : 'border-[#E8DFC8] hover:border-[#DECDB7] shadow-xs hover:shadow-sm'
                    }`}
                  >
                    <div>
                      {/* Top Bar inside card */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center border border-[#E8DFC8]"
                          style={{ backgroundColor: item.accentBg }}
                        >
                          {getCurriculumIcon(item.iconName)}
                        </div>
                        <span className="text-xs font-semibold text-[#8C6F56] tracking-wide">
                          Materi 0{index + 1}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl font-bold text-[#2C1A14] mb-1">
                        {item.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#C5892F] mb-3">
                        {item.subtitle}
                      </div>

                      <p className="text-sm text-[#614735] leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    {/* Activities List */}
                    <div className="pt-4 border-t border-[#F2ECE1]">
                      <div className="text-xs font-bold text-[#4A2E20] uppercase tracking-wider mb-2.5">
                        Aktivitas & Metode Belajar:
                      </div>
                      <ul className="space-y-1.5">
                        {item.activities.map((act, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-[#5C3B28]">
                            <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note banner */}
            <div className="mt-10 p-6 rounded-2xl bg-[#FFFDF9] border border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#B45309] flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#2C1A14]">
                    Pendekatan "Belajar Sambil Bermain, Bermain Seraya Belajar"
                  </div>
                  <div className="text-xs text-[#7A5B45]">
                    Seluruh materi disesuaikan dengan tahapan usia tanpa membebani anak, mengutamakan kenyamanan dan kegembiraan.
                  </div>
                </div>
              </div>
              <a
                href="#pendaftaran"
                className="px-4 py-2 text-xs font-semibold text-white bg-[#C5892F] hover:bg-[#A97223] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Konsultasikan Kelas Anak
              </a>
            </div>
          </div>
        )}

        {/* Tab 2: 5 Program Unggulan & Ekstrakurikuler */}
        {activeTab === 'program' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURED_PROGRAMS.map((prog, idx) => (
                <div
                  key={prog.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFC8] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8] flex items-center justify-center">
                        {getProgramIcon(prog.icon)}
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FAF0DC] text-[#9A671E] border border-[#EDE0C8]">
                        {prog.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-[#2C1A14] mb-2">
                      {prog.title}
                    </h3>

                    <p className="text-sm text-[#614735] leading-relaxed mb-4">
                      {prog.description}
                    </p>

                    <div className="inline-block text-xs font-medium text-[#7A5B45] bg-[#FAF7F2] px-3 py-1.5 rounded-lg border border-[#EDE6D6] mb-4">
                      ⏰ {prog.schedule}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#F2ECE1]">
                    <div className="text-xs font-bold text-[#4A2E20] uppercase tracking-wider mb-2">
                      Cakupan Program:
                    </div>
                    <ul className="space-y-1.5">
                      {prog.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-[#5C3B28]">
                          <Check className="w-3.5 h-3.5 text-[#C5892F] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Ekstrakurikuler Highlight Spotlight */}
            <div className="bg-gradient-to-r from-[#2C1A14] to-[#4A2E20] text-white rounded-3xl p-8 sm:p-10 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C5892F] text-white text-xs font-bold uppercase tracking-wider mb-3">
                    <Award className="w-3.5 h-3.5" />
                    <span>Ekstrakurikuler Terpadu</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
                    Wadah Minat & Bakat: Tahfidz, Mewarnai & Seni Tari
                  </h3>
                  <p className="text-sm text-[#D7C7BA] leading-relaxed">
                    Setiap anak memiliki potensi unik yang berbeda. Melalui program ekstrakurikuler terstruktur, anak dibimbing melatih ketajaman hafalan Al-Quran, kepekaan warna dan seni rupa, serta kelenturan gerak tubuh melalui seni tari tradisional dan kreasi.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                    <div className="font-bold text-sm text-[#FDE68A]">Tahfidz Cilik</div>
                    <div className="text-xs text-[#E5D7CC]">Menghafal surat pilihan dan hadits adab</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                    <div className="font-bold text-sm text-[#FDE68A]">Seni Mewarnai & Kaligrafi</div>
                    <div className="text-xs text-[#E5D7CC]">Melatih komposisi warna dan keindahan</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                    <div className="font-bold text-sm text-[#FDE68A]">Seni Tari Kreasi</div>
                    <div className="text-xs text-[#E5D7CC]">Melatih irama, kelincahan, dan keberanian tampil</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
