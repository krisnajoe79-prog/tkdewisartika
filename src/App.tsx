/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CurriculumSection } from './components/CurriculumSection';
import { TeachersSection } from './components/TeachersSection';
import { FacilitiesGallery } from './components/FacilitiesGallery';
import { RegistrationSection } from './components/RegistrationSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { TeacherModal } from './components/TeacherModal';
import { ImageModal } from './components/ImageModal';
import { Teacher } from './data/schoolData';

export default function App() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [modalImage, setModalImage] = useState<{
    isOpen: boolean;
    image: string;
    title: string;
    description: string;
  }>({
    isOpen: false,
    image: '',
    title: '',
    description: ''
  });

  const handleOpenImage = (image: string, title: string, description: string) => {
    setModalImage({
      isOpen: true,
      image,
      title,
      description
    });
  };

  const handleCloseImage = () => {
    setModalImage((prev) => ({ ...prev, isOpen: false }));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C1A14] flex flex-col selection:bg-[#E9D8A6] selection:text-[#2C1A14]">
      {/* Fixed Header / Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="grow">
        {/* Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('tentang')}
          onRegisterClick={() => scrollToSection('pendaftaran')}
        />

        {/* Tentang Kami, Profil, Visi, Misi, Tujuan */}
        <AboutSection />

        {/* Kurikulum & Materi Pembelajaran serta Program Unggulan */}
        <CurriculumSection />

        {/* Tenaga Pendidik (Kepala Sekolah & Guru Kelas) */}
        <TeachersSection onSelectTeacher={(t) => setSelectedTeacher(t)} />

        {/* Fasilitas & Galeri Kegiatan Murid */}
        <FacilitiesGallery onOpenImageModal={handleOpenImage} />

        {/* SPMB 2026/2027: Syarat Pendaftaran & Formulir Mandiri */}
        <RegistrationSection />

        {/* FAQ - Pertanyaan Umum Calon Wali Murid */}
        <FaqSection />

        {/* Kontak, Alamat & Lokasi Google Maps */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Actions (WhatsApp Quick Panel & Scroll to Top) */}
      <FloatingActions />

      {/* Teacher Profile Poster Modal */}
      <TeacherModal
        teacher={selectedTeacher}
        onClose={() => setSelectedTeacher(null)}
      />

      {/* Photo Lightbox Modal */}
      <ImageModal
        isOpen={modalImage.isOpen}
        image={modalImage.image}
        title={modalImage.title}
        description={modalImage.description}
        onClose={handleCloseImage}
      />
    </div>
  );
}
