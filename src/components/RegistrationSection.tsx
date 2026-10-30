import React, { useState } from 'react';
import { REGISTRATION_INFO } from '../data/schoolData';
import {
  FileText,
  Clock,
  MapPin,
  CheckCircle,
  Sparkles,
  Send,
  MessageSquare,
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';

export const RegistrationSection: React.FC = () => {
  // Form State
  const [childName, setChildName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [classOption, setClassOption] = useState('Kelompok A (4-5 Tahun)');
  const [parentName, setParentName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [selectedOfficer, setSelectedOfficer] = useState(REGISTRATION_INFO.contacts[0].waNumber);
  const [additionalNote, setAdditionalNote] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!childName.trim() || !parentName.trim() || !whatsappNumber.trim()) {
      alert('Mohon lengkapi Nama Calon Siswa, Nama Orang Tua, dan Nomor WhatsApp.');
      return;
    }

    const message = `*FORMULIR PENDAFTARAN SPMB TK DEWI SARTIKA (2026/2027)*
--------------------------------------------
• Nama Calon Murid : ${childName}
• Tanggal Lahir : ${birthDate || '-'}
• Pilihan Kelas : ${classOption}
• Nama Orang Tua/Wali : ${parentName}
• No. WhatsApp : ${whatsappNumber}
• Alamat Tinggal : ${homeAddress || '-'}
• Catatan/Pertanyaan : ${additionalNote || 'Mohon info kelanjutan pendaftaran & pengambilan formulir fisik.'}
--------------------------------------------
_Pesan ini dikirim melalui formulir pendaftaran daring Website TK Dewi Sartika._`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${selectedOfficer}?text=${encodedMessage}`;

    setFormSubmitted(true);
    window.open(waUrl, '_blank');
  };

  const handleCopyText = () => {
    const message = `FORMULIR SPMB TK DEWI SARTIKA 2026/2027:
Nama Murid: ${childName}
Tanggal Lahir: ${birthDate}
Pilihan: ${classOption}
Nama Orang Tua: ${parentName}
WhatsApp: ${whatsappNumber}
Alamat: ${homeAddress}`;
    navigator.clipboard.writeText(message);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="pendaftaran" className="py-20 bg-white border-y border-[#EDE6D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5892F] uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Penerimaan Murid Baru (SPMB)</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2C1A14] tracking-tight">
            Informasi & Syarat Pendaftaran
          </h2>
          <p className="mt-3 text-lg font-semibold text-[#7A5B45]">
            Tahun Pelajaran {REGISTRATION_INFO.academicYear}
          </p>
          <p className="mt-2 text-base text-[#614735]">
            Mari wujudkan masa emas buah hati Anda bersama lingkungan belajar yang ramah anak, nyaman, dan berkarakter islami.
          </p>
        </div>

        {/* 2-Column Split: Requirements & Working Hours VS Interactive Registration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Requirements & Schedule */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Syarat Pendaftaran Card */}
            <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FAF0DC] flex items-center justify-center text-[#C5892F]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#2C1A14]">
                    Syarat Pendaftaran Murid Baru
                  </h3>
                  <p className="text-xs text-[#7A5B45]">Persyaratan administrasi calon peserta didik</p>
                </div>
              </div>

              <div className="space-y-4">
                {REGISTRATION_INFO.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#E6F4EA] text-[#1E7E34] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#2C1A14]">{req.title}</div>
                      <div className="text-xs text-[#614735] mt-0.5 leading-relaxed">{req.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Waktu & Lokasi Card */}
            <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] shadow-xs space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white border border-[#E0D5BE] text-[#C5892F] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#7A5B45] uppercase tracking-wider">
                    Waktu Pendaftaran
                  </div>
                  <div className="text-base font-bold text-[#2C1A14] mt-0.5">
                    {REGISTRATION_INFO.scheduleTime}
                  </div>
                  <div className="text-xs text-[#614735] mt-1">
                    Bunda & Ayah dapat datang langsung ke kantor sekretariat pada jam kerja.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8DFC8] flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white border border-[#E0D5BE] text-[#C5892F] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#7A5B45] uppercase tracking-wider">
                    Lokasi Sekretariat
                  </div>
                  <div className="text-sm font-bold text-[#2C1A14] mt-0.5">
                    {REGISTRATION_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Langkah Pendaftaran Roadmap */}
            <div className="p-6 rounded-3xl bg-[#FAF0DC]/50 border border-[#EADBCC]">
              <h4 className="font-heading font-bold text-base text-[#2C1A14] mb-4">
                Alur Mudah 4 Langkah Pendaftaran:
              </h4>
              <div className="space-y-3">
                {REGISTRATION_INFO.steps.map((st, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-heading font-bold text-xs px-2 py-0.5 bg-[#C5892F] text-white rounded-md shrink-0">
                      {st.step}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-[#2C1A14]">{st.title}: </span>
                      <span className="text-xs text-[#614735]">{st.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Online Registration Form Simulator */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#E8DFC8] shadow-md">
              <div className="mb-6 pb-6 border-b border-[#E8DFC8]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FEF3C7] text-[#92400E] text-xs font-bold mb-2">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Formulir Daring Mandiri</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#2C1A14]">
                  Formulir Peminatan / Pendaftaran Awal
                </h3>
                <p className="text-xs sm:text-sm text-[#614735] mt-1 leading-relaxed">
                  Isi data di bawah ini untuk terhubung langsung dengan Panitia SPMB TK Dewi Sartika via WhatsApp. Data otomatis terangkum rapi.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Child Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E20] mb-1.5">
                    Nama Lengkap Calon Siswa <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="Contoh: Muhammad Rayyan Alfatih"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DECDB7] text-[#2C1A14] text-sm focus:outline-hidden focus:border-[#C5892F] focus:ring-2 focus:ring-[#C5892F]/20 transition-all placeholder:text-[#A8927F]"
                  />
                </div>

                {/* Birth Date & Class Option */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E20] mb-1.5">
                      Tanggal Lahir Anak
                    </label>
                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#DECDB7] text-[#2C1A14] text-sm focus:outline-hidden focus:border-[#C5892F] focus:ring-2 focus:ring-[#C5892F]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E20] mb-1.5">
                      Pilihan Kelompok Belajar
                    </label>
                    <select
                      value={classOption}
                      onChange={(e) => setClassOption(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#DECDB7] text-[#2C1A14] text-sm focus:outline-hidden focus:border-[#C5892F] focus:ring-2 focus:ring-[#C5892F]/20 transition-all"
                    >
                      <option value="Kelompok A (4-5 Tahun)">Kelompok A (Usia 4 - 5 Tahun)</option>
                      <option value="Kelompok B (5-6 Tahun)">Kelompok B (Usia 5 - 6 Tahun)</option>
                      <option value="Konsultasi Terlebih Dahulu">Konsultasi Usia Dahulu</option>
                    </select>
                  </div>
                </div>

                {/* Parent Name & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E20] mb-1.5">
                      Nama Orang Tua / Wali <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="Contoh: Ibu Rina / Bpk. Rudi"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#DECDB7] text-[#2C1A14] text-sm focus:outline-hidden focus:border-[#C5892F] focus:ring-2 focus:ring-[#C5892F]/20 transition-all placeholder:text-[#A8927F]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E20] mb-1.5">
                      Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder="Contoh: 08123456789"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#DECDB7] text-[#2C1A14] text-sm focus:outline-hidden focus:border-[#C5892F] focus:ring-2 focus:ring-[#C5892F]/20 transition-all placeholder:text-[#A8927F]"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E20] mb-1.5">
                    Alamat Domisili Singkat
                  </label>
                  <input
                    type="text"
                    value={homeAddress}
                    onChange={(e) => setHomeAddress(e.target.value)}
                    placeholder="Contoh: Jl. Perintis Kemerdekaan, Kawalu, Kota Tasikmalaya"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DECDB7] text-[#2C1A14] text-sm focus:outline-hidden focus:border-[#C5892F] focus:ring-2 focus:ring-[#C5892F]/20 transition-all placeholder:text-[#A8927F]"
                  />
                </div>

                {/* Target Officer Contact */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E20] mb-1.5">
                    Kirimkan Formulir Kepada Panitia:
                  </label>
                  <select
                    value={selectedOfficer}
                    onChange={(e) => setSelectedOfficer(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DECDB7] text-[#2C1A14] text-sm focus:outline-hidden focus:border-[#C5892F] focus:ring-2 focus:ring-[#C5892F]/20 transition-all font-medium"
                  >
                    {REGISTRATION_INFO.contacts.map((c, idx) => (
                      <option key={idx} value={c.waNumber}>
                        {c.name} ({c.role} - {c.phone})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Note */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E20] mb-1.5">
                    Pertanyaan / Catatan Khusus
                  </label>
                  <textarea
                    rows={3}
                    value={additionalNote}
                    onChange={(e) => setAdditionalNote(e.target.value)}
                    placeholder="Tuliskan jika ada pertanyaan mengenai biaya, seragam, jadwal belajar, atau kebutuhan khusus anak..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DECDB7] text-[#2C1A14] text-sm focus:outline-hidden focus:border-[#C5892F] focus:ring-2 focus:ring-[#C5892F]/20 transition-all placeholder:text-[#A8927F]"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#059669] hover:bg-[#047857] active:bg-[#065F46] rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Formulir ke WhatsApp Panitia</span>
                  </button>

                  {childName && (
                    <button
                      type="button"
                      onClick={handleCopyText}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-semibold text-[#4A2E20] bg-white border border-[#DECDB7] rounded-xl hover:bg-[#FAF7F2] transition-colors whitespace-nowrap"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      <span>{isCopied ? 'Tersalin!' : 'Salin Teks'}</span>
                    </button>
                  )}
                </div>

                {/* Information hint */}
                <div className="flex items-start gap-2 text-xs text-[#7A5B45] pt-2">
                  <AlertCircle className="w-4 h-4 text-[#C5892F] shrink-0 mt-0.5" />
                  <span>
                    Setelah mengklik tombol di atas, Anda akan dialihkan ke WhatsApp resmi panitia dengan data pendaftaran yang sudah terformat rapi.
                  </span>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
