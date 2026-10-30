import React from 'react';
import { SCHOOL_INFO, REGISTRATION_INFO } from '../data/schoolData';
import {
  MapPin,
  Phone,
  Instagram,
  Clock,
  ExternalLink,
  MessageCircle,
  Sparkles,
  Building2
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="kontak" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5892F] uppercase tracking-wider mb-2">
            <Building2 className="w-4 h-4" />
            <span>Terhubung Bersama Kami</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2C1A14] tracking-tight">
            Kontak & Lokasi Sekolah
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#614735]">
            Kami selalu terbuka menyambut kehadiran Ayah, Bunda, dan ananda tercinta. Silakan hubungi kami atau kunjungi langsung gedung TK Dewi Sartika.
          </p>
        </div>

        {/* 4 WhatsApp Officer Cards */}
        <div className="mb-14">
          <h3 className="font-heading text-xl font-bold text-[#2C1A14] mb-6 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-emerald-600" />
            <span>Kontak Person WhatsApp / Telepon Panitia:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REGISTRATION_INFO.contacts.map((contact, idx) => {
              const waUrl = `https://wa.me/${contact.waNumber}?text=${encodeURIComponent(contact.message)}`;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#E8DFC8] shadow-xs hover:border-[#C5892F]/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm mb-4 border border-emerald-200">
                      WA
                    </div>
                    <h4 className="font-heading text-base font-bold text-[#2C1A14] leading-snug">
                      {contact.name}
                    </h4>
                    <div className="text-xs text-[#7A5B45] font-medium mt-1">
                      {contact.role}
                    </div>
                    <div className="text-sm font-bold text-[#2C1A14] mt-3 tabular-nums">
                      {contact.phone}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#F2ECE1]">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Location & Map Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Detail Info Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-[#E8DFC8] shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FAF0DC] text-[#C5892F] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#7A5B45]">
                    Alamat Lengkap
                  </div>
                  <div className="text-base font-bold text-[#2C1A14] mt-1 leading-snug">
                    {SCHOOL_INFO.address}
                  </div>
                  <div className="text-xs text-[#614735] mt-1">
                    Patokan: Kawasan strategis Kawalu, Kota Tasikmalaya, akses mudah dijangkau kendaraan roda dua maupun roda empat.
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4 pt-6 border-t border-[#F2ECE1]">
                <div className="w-11 h-11 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 border border-pink-100">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#7A5B45]">
                    Instagram Resmi
                  </div>
                  <a
                    href={SCHOOL_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#C5892F] hover:underline mt-1 block"
                  >
                    {SCHOOL_INFO.instagram}
                  </a>
                  <div className="text-xs text-[#614735] mt-0.5">
                    Ikuti update dokumentasi kegiatan harian dan pengumuman terbaru kami.
                  </div>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="flex items-start gap-4 pt-6 border-t border-[#F2ECE1]">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#7A5B45]">
                    Jam Operasional & Pelayanan
                  </div>
                  <div className="text-base font-bold text-[#2C1A14] mt-1">
                    {SCHOOL_INFO.operatingHours}
                  </div>
                  <div className="text-xs text-[#614735] mt-0.5">
                    Sabtu, Minggu & Hari Libur Nasional: Tutup (Konsultasi via WhatsApp tetap dilayani)
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Google Maps Navigation Button */}
            <div className="pt-8 mt-6 border-t border-[#F2ECE1]">
              <a
                href={SCHOOL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2C1A14] hover:bg-[#4A2E20] text-white text-sm font-semibold transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#C5892F]" />
                <span>Buka Petunjuk Arah di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70 ml-1" />
              </a>
            </div>
          </div>

          {/* Right: Embedded Interactive Map / Frame */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-sm flex flex-col">
            <div className="p-4 bg-[#FAF7F2] border-b border-[#E8DFC8] flex items-center justify-between text-xs">
              <span className="font-semibold text-[#4A2E20] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5892F]" />
                Peta Lokasi: Jl. Perintis Kemerdekaan No. 180, Kawalu
              </span>
              <span className="text-[#7A5B45]">Kota Tasikmalaya</span>
            </div>

            <div className="grow w-full min-h-[350px] relative bg-[#EDE4D5]">
              <iframe
                title="Peta Lokasi TK Dewi Sartika Kawalu Tasikmalaya"
                src="https://maps.google.com/maps?q=Jl.+Perintis+Kemerdekaan+No.+180,+Kawalu,+Kota+Tasikmalaya&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[350px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
