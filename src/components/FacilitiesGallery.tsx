import React, { useState } from 'react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/schoolData';
import {
  LayoutGrid,
  ZoomIn,
  Sun,
  BookOpen,
  Sparkles,
  Compass,
  Award,
  Music,
  Users,
  Heart
} from 'lucide-react';

interface FacilitiesGalleryProps {
  onOpenImageModal: (image: string, title: string, description: string) => void;
}

export const FacilitiesGallery: React.FC<FacilitiesGalleryProps> = ({ onOpenImageModal }) => {
  const [mainTab, setMainTab] = useState<'all' | 'fasilitas' | 'kegiatan'>('all');
  const [subCategory, setSubCategory] = useState<string>('all');

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    // Check main tab
    if (mainTab !== 'all' && photo.mainCategory !== mainTab) {
      return false;
    }
    // Check subcategory
    if (subCategory !== 'all' && photo.subCategory !== subCategory) {
      return false;
    }
    return true;
  });

  const countFasilitas = GALLERY_PHOTOS.filter((p) => p.mainCategory === 'fasilitas').length;
  const countKegiatan = GALLERY_PHOTOS.filter((p) => p.mainCategory === 'kegiatan').length;

  return (
    <section id="galeri" className="py-20 bg-[#FAF7F2] border-t border-[#EDE6D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5892F] uppercase tracking-wider mb-2">
            <LayoutGrid className="w-4 h-4" />
            <span>Dokumentasi Nyata Sekolah</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2C1A14] tracking-tight">
            Galeri Fasilitas & Kegiatan Murid
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#614735]">
            Potret lengkap sarana prasarana ramah anak (ruang kelas & taman bermain) serta keceriaan aktivitas belajar langsung, outing class sawah, cooking class, hingga pentas seni di TK Dewi Sartika.
          </p>

          {/* Primary Main Tab Selector (Semua vs Fasilitas vs Kegiatan) */}
          <div className="mt-8 inline-flex p-1.5 bg-[#EDE4D5] rounded-2xl border border-[#DECDB7] shadow-xs">
            <button
              type="button"
              onClick={() => {
                setMainTab('all');
                setSubCategory('all');
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                mainTab === 'all'
                  ? 'bg-white text-[#2C1A14] shadow-xs'
                  : 'text-[#614735] hover:text-[#2C1A14]'
              }`}
            >
              Semua Galeri ({GALLERY_PHOTOS.length})
            </button>
            <button
              type="button"
              onClick={() => {
                setMainTab('fasilitas');
                setSubCategory('all');
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                mainTab === 'fasilitas'
                  ? 'bg-white text-[#2C1A14] shadow-xs'
                  : 'text-[#614735] hover:text-[#2C1A14]'
              }`}
            >
              <Sun className="w-4 h-4 text-amber-600" />
              <span>Fasilitas Sekolah ({countFasilitas})</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMainTab('kegiatan');
                setSubCategory('all');
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                mainTab === 'kegiatan'
                  ? 'bg-white text-[#2C1A14] shadow-xs'
                  : 'text-[#614735] hover:text-[#2C1A14]'
              }`}
            >
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>Kegiatan & Outing ({countKegiatan})</span>
            </button>
          </div>
        </div>

        {/* Secondary Sub-Category Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setSubCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              subCategory === 'all'
                ? 'bg-[#2C1A14] text-white shadow-xs'
                : 'bg-white text-[#614735] border border-[#DECDB7] hover:bg-[#FAF7F2]'
            }`}
          >
            Tampilkan Semua
          </button>

          {(mainTab === 'all' || mainTab === 'fasilitas') && (
            <>
              <button
                type="button"
                onClick={() => setSubCategory('taman-bermain')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 ${
                  subCategory === 'taman-bermain'
                    ? 'bg-[#C5892F] text-white shadow-xs'
                    : 'bg-white text-[#614735] border border-[#DECDB7] hover:bg-[#FAF7F2]'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>Taman Bermain (Outdoor & Indoor)</span>
              </button>
              <button
                type="button"
                onClick={() => setSubCategory('ruang-kelas')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 ${
                  subCategory === 'ruang-kelas'
                    ? 'bg-[#C5892F] text-white shadow-xs'
                    : 'bg-white text-[#614735] border border-[#DECDB7] hover:bg-[#FAF7F2]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                <span>Ruang Kelas & Multimedia</span>
              </button>
            </>
          )}

          {(mainTab === 'all' || mainTab === 'kegiatan') && (
            <>
              <button
                type="button"
                onClick={() => setSubCategory('outing-class')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 ${
                  subCategory === 'outing-class'
                    ? 'bg-[#059669] text-white shadow-xs'
                    : 'bg-white text-[#614735] border border-[#DECDB7] hover:bg-[#FAF7F2]'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-emerald-500" />
                <span>Outing Class & Fieldtrip Sawah</span>
              </button>
              <button
                type="button"
                onClick={() => setSubCategory('pentas-seni')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 ${
                  subCategory === 'pentas-seni'
                    ? 'bg-[#059669] text-white shadow-xs'
                    : 'bg-white text-[#614735] border border-[#DECDB7] hover:bg-[#FAF7F2]'
                }`}
              >
                <Music className="w-3.5 h-3.5 text-purple-500" />
                <span>Pentas Seni & Tari</span>
              </button>
              <button
                type="button"
                onClick={() => setSubCategory('prestasi')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 ${
                  subCategory === 'prestasi'
                    ? 'bg-[#059669] text-white shadow-xs'
                    : 'bg-white text-[#614735] border border-[#DECDB7] hover:bg-[#FAF7F2]'
                }`}
              >
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>Lomba & Prestasi Murid</span>
              </button>
            </>
          )}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo) => {
            const isFasilitas = photo.mainCategory === 'fasilitas';
            const isPrestasi = photo.subCategory === 'prestasi';

            if (isPrestasi) {
              return (
                <div
                  key={photo.id}
                  onClick={() => onOpenImageModal(photo.image, '', '')}
                  className="bg-white rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-xs hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  {/* Hanya Foto Saja */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#ECE3D2]">
                    <img
                      src={photo.image}
                      alt="Dokumentasi Murid TK Dewi Sartika"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {/* Gradient Scrim on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#2C1A14] text-xs font-semibold shadow-lg">
                        <ZoomIn className="w-4 h-4 text-[#C5892F]" />
                        Lihat Foto Penuh
                      </span>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={photo.id}
                onClick={() => onOpenImageModal(photo.image, photo.title, photo.description)}
                className="bg-white rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                {/* Photo Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#ECE3D2]">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Gradient Scrim on hover */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#2C1A14] text-xs font-semibold shadow-lg">
                      <ZoomIn className="w-4 h-4 text-[#C5892F]" />
                      Lihat Foto Penuh
                    </span>
                  </div>

                  {/* Top Badge */}
                  {photo.categoryBadge && (
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-3 py-1 rounded-lg text-[11px] font-bold shadow-xs ${
                          isFasilitas
                            ? 'bg-amber-100/95 text-amber-900 border border-amber-300'
                            : 'bg-emerald-100/95 text-emerald-900 border border-emerald-300'
                        }`}
                      >
                        {photo.categoryBadge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Details Container */}
                <div className="p-5 flex flex-col justify-between grow">
                  <div>
                    <h3 className="font-heading text-base font-bold text-[#2C1A14] group-hover:text-[#C5892F] transition-colors leading-snug mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-[#614735] leading-relaxed line-clamp-3">
                      {photo.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#F2ECE1] flex items-center justify-between text-[11px] text-[#7A5B45]">
                    <span>TK Dewi Sartika Tasikmalaya</span>
                    <span className="text-[#C5892F] font-semibold group-hover:underline flex items-center gap-1">
                      Perbesar →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF0DC] text-[#C5892F] flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-[#2C1A14]">
                Ingin Mengunjungi & Melihat Fasilitas Secara Langsung?
              </h4>
              <p className="text-xs sm:text-sm text-[#7A5B45] mt-0.5">
                Ayah & Bunda dipersilakan berkunjung ke sekolah setiap hari kerja untuk survei kelas dan konsultasi dengan guru.
              </p>
            </div>
          </div>
          <a
            href="#pendaftaran"
            className="px-6 py-3 rounded-xl bg-[#C5892F] hover:bg-[#A97223] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs whitespace-nowrap shrink-0"
          >
            Daftar / Buat Janji Kunjungan
          </a>
        </div>

      </div>
    </section>
  );
};
