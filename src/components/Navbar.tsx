import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Menu, X, PhoneCall, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenRegisterModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegisterModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Kurikulum', href: '#kurikulum' },
    { label: 'Guru & Pendidik', href: '#guru' },
    { label: 'Fasilitas & Galeri', href: '#galeri' },
    { label: 'Syarat Pendaftaran', href: '#pendaftaran' },
    { label: 'Kontak', href: '#kontak' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFC8]'
            : 'bg-[#FAF7F2] border-b border-[#EDE6D6]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">
            {/* Zone 1: Brand Wordmark & Official Emblem */}
            <a
              href="#beranda"
              onClick={(e) => handleNavClick(e, '#beranda')}
              className="flex items-center gap-3 shrink-0 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white p-1 border border-[#E4D5B7] shadow-xs flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
                <img
                  src={SCHOOL_INFO.logo}
                  alt="Logo Resmi TK Dewi Sartika"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#2C1A14] leading-tight">
                  TK Dewi Sartika
                </span>
                <span className="text-xs text-[#7A5B45] font-medium hidden sm:inline-block">
                  Kawalu · Kota Tasikmalaya
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Single-line, quiet hover) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#4A2E20]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#C5892F] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C5892F] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary CTA Button */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href="#pendaftaran"
                onClick={(e) => handleNavClick(e, '#pendaftaran')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#C5892F] hover:bg-[#A97223] active:bg-[#8F5F1B] rounded-xl shadow-xs transition-colors whitespace-nowrap shrink-0"
              >
                <Sparkles className="w-4 h-4" />
                <span>Daftar SPMB</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-[#2C1A14] bg-[#F2ECE1] hover:bg-[#E8DFC8] transition-colors focus:outline-hidden"
                aria-label="Buka Menu Navigasi"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#2C1A14]/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#FAF7F2] p-6 shadow-xl flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E8DFC8]">
                <div className="flex items-center gap-3">
                  <img
                    src={SCHOOL_INFO.logo}
                    alt="Logo"
                    className="w-10 h-10 object-contain rounded-lg bg-white p-1 border border-[#E8DFC8]"
                  />
                  <div>
                    <div className="font-heading font-bold text-lg text-[#2C1A14]">
                      TK Dewi Sartika
                    </div>
                    <div className="text-xs text-[#7A5B45]">Pendidikan Ramah Anak</div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-[#2C1A14] hover:bg-[#F2ECE1]"
                  aria-label="Tutup Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="py-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-3 rounded-xl text-[#2C1A14] font-medium text-base hover:bg-[#F2ECE1] transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#C5892F] text-xs font-bold">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom drawer actions */}
            <div className="pt-6 border-t border-[#E8DFC8] space-y-3">
              <a
                href="#pendaftaran"
                onClick={(e) => handleNavClick(e, '#pendaftaran')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C5892F] text-white font-semibold text-sm shadow-xs hover:bg-[#A97223] transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                Daftar Sekarang (SPMB)
              </a>
              <a
                href="#kontak"
                onClick={(e) => handleNavClick(e, '#kontak')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-[#E8DFC8] text-[#2C1A14] font-medium text-sm hover:bg-[#F2ECE1] transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#C5892F]" />
                Hubungi Panitia
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
