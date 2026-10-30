import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Instagram, MapPin, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#2C1A14] text-[#E5D7CC] pt-16 pb-12 border-t border-[#3E2723]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center">
                <img
                  src={SCHOOL_INFO.logo}
                  alt="Logo TK Dewi Sartika"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  TK Dewi Sartika
                </h3>
                <p className="text-xs text-[#C5892F]">Kawalu · Kota Tasikmalaya</p>
              </div>
            </div>

            <p className="text-sm text-[#C4B2A2] leading-relaxed max-w-sm">
              "{SCHOOL_INFO.slogan}"
            </p>
            <p className="text-xs text-[#9D8776] leading-relaxed max-w-sm">
              Mendidik dengan hati, membentuk karakter mulia, cerdas, kreatif, dan berakhlakul karimah sejak usia dini.
            </p>

            <div className="pt-2">
              <a
                href={SCHOOL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#C5892F] text-xs font-semibold text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>{SCHOOL_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* Navigasi Cepat */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-sm font-bold uppercase tracking-wider text-white">
              Navigasi Halaman
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#beranda" className="hover:text-[#C5892F] transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-[#C5892F] transition-colors">
                  Tentang Kami & Visi Misi
                </a>
              </li>
              <li>
                <a href="#kurikulum" className="hover:text-[#C5892F] transition-colors">
                  Program & Kurikulum
                </a>
              </li>
              <li>
                <a href="#guru" className="hover:text-[#C5892F] transition-colors">
                  Tenaga Pendidik
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-[#C5892F] transition-colors">
                  Fasilitas & Galeri
                </a>
              </li>
              <li>
                <a href="#pendaftaran" className="hover:text-[#C5892F] transition-colors">
                  Syarat Pendaftaran (SPMB)
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#C5892F] transition-colors">
                  Kontak & Lokasi
                </a>
              </li>
            </ul>
          </div>

          {/* Sekretariat & Kontak */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-sm font-bold uppercase tracking-wider text-white">
              Sekretariat Pendaftaran
            </div>
            <div className="text-xs text-[#C4B2A2] space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5892F] shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </p>
              <p className="text-[#9D8776]">
                Jam Buka: {SCHOOL_INFO.operatingHours}
              </p>
              <p className="text-[#9D8776]">
                Penerimaan Murid Baru Tahun Pelajaran 2026/2027
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#pendaftaran"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C5892F] hover:bg-[#A97223] text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Daftar Sekarang</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9D8776]">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} TK Dewi Sartika Kawalu Kota Tasikmalaya. Seluruh Hak Cipta Dilindungi.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#C5892F] hover:text-white transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
