export interface Teacher {
  id: string;
  name: string;
  role: string;
  category: 'kepala-sekolah' | 'guru-kelas';
  image: string;
  phone?: string;
}

export interface CurriculumItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  color: string;
  accentBg: string;
  tag: string;
  activities: string[];
}

export interface FeaturedProgram {
  id: string;
  title: string;
  description: string;
  schedule: string;
  badge: string;
  icon: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'playground' | 'kelas' | 'kegiatan' | 'brosur';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SCHOOL_INFO = {
  name: "TK Dewi Sartika",
  fullName: "Taman Kanak-Kanak Dewi Sartika",
  district: "Kec. Kawalu, Kota Tasikmalaya",
  address: "Jl. Perintis Kemerdekaan No. 180, Kawalu, Kota Tasikmalaya, Jawa Barat",
  googleMapsUrl: "https://maps.google.com/?q=Jl.+Perintis+Kemerdekaan+No.+180,+Kawalu,+Kota+Tasikmalaya",
  instagram: "@tkdewisartikaa_tasikmalaya",
  instagramUrl: "https://www.instagram.com/tkdewisartikaa_tasikmalaya",
  slogan: "Pendidikan Bermutu Untuk Semua - Ramah Anak",
  subText: "Ayo belajar bersama kami, bersama kita tumbuh!",
  description:
    "TK Dewi Sartika merupakan lembaga pendidikan anak usia dini yang berkomitmen memberikan layanan pendidikan yang berkualitas, menyenangkan, dan berkarakter. Kami merancang pembelajaran untuk membantu anak tumbuh dan berkembang secara optimal, baik dari aspek kognitif, sosial-emosional, bahasa, fisik motorik, maupun nilai moral.",
  logo: "/assets/aistudio/IMG-20261030-WA0012_a6fcfdcd.jpg",
  academicYear: "2026/2027",
  operatingHours: "Senin s/d Jumat, Pukul 08.00 - 12.00 WIB",
  establishedInfo: "Mencetak Generasi Berkarakter Sejak Dini di Kawalu Tasikmalaya",
};

export const VISION = "Menumbuhkan kembangkan karakter anak usia dini yang cerdas dan berakhlak karimah.";

export const MISSIONS = [
  "Mempersiapkan sejak dini sumber daya manusia yang beriman dan bertakwa kepada Tuhan Yang Maha Esa dan memiliki akhlak mulia.",
  "Mengarahkan anak menjadi anak yang cerdas intelektual dan emosional, kreatif serta mandiri.",
  "Meningkatkan kualitas anak didik untuk memenuhi kebutuhan pendidikan dasar yang sehat.",
  "Membangun silaturahmi antara murid, tenaga pendidik dan orang tua."
];

export const OBJECTIVES = [
  "Membentuk murid yang cerdas secara intelektual, emosional, kreatif dan mandiri dalam kehidupan sehari-hari.",
  "Menghasilkan murid yang memiliki kualitas baik sehingga siap menghadapi jenjang pendidikan dasar yang sehat.",
  "Menumbuhkan karakter murid yang beriman, bertakwa kepada Tuhan Yang Maha Esa dan berakhlak mulia sejak dini.",
  "Menciptakan hubungan harmonis antara murid, guru tenaga pendidik dan orang tua dalam mendukung proses pendidikan."
];

export const CORE_VALUES = [
  {
    title: "Berakhlak Karimah",
    desc: "Menanamkan nilai-nilai religius, sopan santun, dan cinta kasih sesama sejak dini.",
    color: "#C5892F"
  },
  {
    title: "Cerdas & Kreatif",
    desc: "Menstimulasi potensi eksplorasi daya pikir, logika berhitung, dan imajinasi seni anak.",
    color: "#2C1A14"
  },
  {
    title: "Mandiri & Disiplin",
    desc: "Melatih anak terbiasa mengurus diri sendiri, bertanggung jawab, dan percaya diri.",
    color: "#059669"
  },
  {
    title: "Ramah Anak & Hangat",
    desc: "Lingkungan bermain dan belajar yang aman, menyenangkan, serta bebas dari tekanan.",
    color: "#D97706"
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: "iis-kurnia",
    name: "Iis Kurnia, S.Pd AUD",
    role: "Kepala Sekolah",
    category: "kepala-sekolah",
    image: "/assets/aistudio/IMG-20261030-WA0018_a1611a35.jpg",
    phone: "0852-2365-4689"
  },
  {
    id: "didah-rodiah",
    name: "Didah Rodiah, S.Pd AUD",
    role: "Guru Kelas",
    category: "guru-kelas",
    image: "/assets/aistudio/IMG-20261030-WA0015_31fd3712.jpg",
    phone: "0813-2128-2905"
  },
  {
    id: "leni-mikial",
    name: "Leni Mikial Aini, S.Pd AUD",
    role: "Guru Kelas",
    category: "guru-kelas",
    image: "/assets/aistudio/IMG-20261030-WA0019_60a28139.jpg",
    phone: "0852-8865-1356"
  },
  {
    id: "resa-sulistiya",
    name: "Resa Sulistiya R, S.Pd",
    role: "Guru Kelas",
    category: "guru-kelas",
    image: "/assets/aistudio/IMG-20261030-WA0020_8fcba005.jpg"
  },
  {
    id: "dadah",
    name: "Dadah, S.Pd",
    role: "Guru Kelas",
    category: "guru-kelas",
    image: "/assets/aistudio/IMG-20261030-WA0017_df5bd4fc.jpg",
    phone: "0856-0601-1288"
  },
  {
    id: "andini-salvira",
    name: "Andini Salvira Juniyanti",
    role: "Guru Kelas",
    category: "guru-kelas",
    image: "/assets/aistudio/IMG-20261030-WA0016_738e10c3.jpg"
  },
  {
    id: "elsa-husnul",
    name: "Elsa Husnul Khotimah",
    role: "Guru Kelas",
    category: "guru-kelas",
    image: "/assets/aistudio/IMG-20261030-WA0014_c3b29b2a.jpg"
  },
  {
    id: "nur-azizah",
    name: "Nur Azizah, S.Pd",
    role: "Guru Kelas",
    category: "guru-kelas",
    image: "/assets/aistudio/IMG-20261030-WA0013_b6d68e40.jpg"
  }
];

export const CURRICULUM_ITEMS: CurriculumItem[] = [
  {
    id: "huruf-bahasa",
    title: "Pengenalan Huruf & Bahasa",
    subtitle: "Literasi Dini & Komunikasi",
    description: "Anak dikenalkan huruf serta kosakata sederhana melalui cerita dongeng menarik, senandung lagu, permainan tebak kata, dan aktivitas membaca awal yang menyenangkan tanpa tekanan.",
    iconName: "BookOpen",
    color: "#2563EB",
    accentBg: "#EFF6FF",
    tag: "Literasi & Komunikasi",
    activities: [
      "Mengenal bentuk alfabet & fonik suara",
      "Bercerita dan mendengarkan dongeng bermakna",
      "Bernyanyi lagu edukatif anak",
      "Permainan kartu kata & tebak gambar"
    ]
  },
  {
    id: "angka-berhitung",
    title: "Pengenalan Angka & Berhitung",
    subtitle: "Numerasi & Logika Awal",
    description: "Anak belajar mengenal angka, konsep kuantitas/jumlah, membandingkan besar-kecil, serta berhitung sederhana melalui media konkrit dan permainan edukatif yang merangsang logika dan konsentrasi.",
    iconName: "Calculator",
    color: "#D97706",
    accentBg: "#FEF3C7",
    tag: "Numerasi & Logika",
    activities: [
      "Mengenal lambang bilangan 1 - 20",
      "Menghitung benda konkrit & buah-buahan",
      "Permainan menyusun balok bertingkat",
      "Pola urutan & teka-teki logika sederhana"
    ]
  },
  {
    id: "warna-bentuk",
    title: "Warna, Bentuk, dan Objek",
    subtitle: "Kognitif & Observasi Lingkungan",
    description: "Anak diajak mengenali berbagai warna primer & sekunder, bentuk geometri (lingkaran, segitiga, kotak), serta benda-benda di sekitarnya untuk melatih kemampuan kognitif dan daya observasi alam.",
    iconName: "Palette",
    color: "#E11D48",
    accentBg: "#FFE4E6",
    tag: "Kognitif & Sensorik",
    activities: [
      "Identifikasi warna primer & pencampuran warna",
      "Mengenal bentuk geometri dasar",
      "Mengelompokkan benda berdasarkan atribut",
      "Observasi lingkungan alam sekitar sekolah"
    ]
  },
  {
    id: "menggambar-kreativitas",
    title: "Menggambar & Kreativitas",
    subtitle: "Imajinasi & Keterampilan Tangan",
    description: "Anak dilatih mengekspresikan imajinasi bebas melalui kegiatan menggambar, mewarnai, menempel kolase bahan alam, dan menciptakan aneka kerajinan tangan edukatif.",
    iconName: "Brush",
    color: "#7C3AED",
    accentBg: "#F3E8FF",
    tag: "Karya & Estetika",
    activities: [
      "Menggambar bebas & mewarnai gambar tematik",
      "Membuat kolase dari kertas dan daun kering",
      "Melipat origami sederhana",
      "Membentuk playdough / plastisin aman"
    ]
  },
  {
    id: "seni-motorik",
    title: "Seni dan Motorik",
    subtitle: "Gerak, Ritme & Ketangkasan Fisik",
    description: "Anak aktif mengikuti kegiatan seni seperti bernyanyi bersama, tarian anak, senam pagi ceria, dan bermain alat musik ritmis sederhana untuk mengasah motorik kasar, motorik halus, rasa percaya diri, dan irama.",
    iconName: "Music",
    color: "#059669",
    accentBg: "#ECFDF5",
    tag: "Motorik & Percaya Diri",
    activities: [
      "Senam irama anak ceria setiap pagi",
      "Bermain perkusi sederhana & rebana",
      "Gerak tari tradisional & kreasi nusantara",
      "Latihan motorik halus (meronce, menggunting rapi)"
    ]
  },
  {
    id: "pembiasaan-karakter",
    title: "Pembiasaan Nilai Karakter",
    subtitle: "Adab, Disiplin & Empati Sosial",
    description: "Anak dibiasakan bersikap mandiri, antre rapi, disiplin, berucap tolong-maaf-terima kasih, kerja sama tim, serta peduli terhadap lingkungan dan empati kepada sesama teman.",
    iconName: "HeartHandshake",
    color: "#B45309",
    accentBg: "#FFFBEB",
    tag: "Karakter & Budi Pekerti",
    activities: [
      "Budaya 5S (Senyum, Salam, Sapa, Sopan, Santun)",
      "Merapikan mainan dan sepatu sendiri",
      "Berbagi bekal sehat dan saling membantu",
      "Menjaga kebersihan kelas dan toilet training"
    ]
  }
];

export const FEATURED_PROGRAMS: FeaturedProgram[] = [
  {
    id: "murajaah",
    title: "Murajaah Surat Pendek & Hadits",
    description: "Pembiasaan menghafal dan mengulang surat-surat Juz 30 pilihan serta hadits-hadits pendek akhlak yang menyejukkan hati.",
    schedule: "Setiap Pagi Sebelum Pembelajaran",
    badge: "Spiritual Unggulan",
    icon: "Scroll",
    highlights: ["Surat An-Nas s/d Ad-Duha", "Hadits senyum adalah sedekah", "Hadits kebersihan sebagian iman"]
  },
  {
    id: "sholat-dhuha-jumat-berbagi",
    title: "Pembiasaan Sholat Dhuha & Jumat Berbagi",
    description: "Praktik wudhu dan sholat dhuha berjamaah di musholla sekolah, dirangkai dengan kegiatan infaq sukarela Jumat Berbagi untuk melatih kedermawanan.",
    schedule: "Sholat Dhuha Harian & Jumat Berbagi",
    badge: "Amaliyah Harian",
    icon: "Sparkles",
    highlights: ["Praktik wudhu mandiri & tertib", "Bacaan gerakan sholat sesuai sunnah", "Melatih empati berbagi sesama"]
  },
  {
    id: "giat-mengaji",
    title: "Giat Mengaji (Iqro & Makhorijul Huruf)",
    description: "Bimbingan privat intensif metode Iqro bertahap dengan pendampingan guru kelas agar anak lancar membaca huruf hijaiyah secara tartil.",
    schedule: "Senin s/d Kamis Terjadwal",
    badge: "Literasi Quran",
    icon: "BookOpenCheck",
    highlights: ["Metode talaqqi yang sabar", "Kartu prestasi ngaji santri", "Pengenalan doa harian & adab"]
  },
  {
    id: "outing-fieldtrip",
    title: "Outing Class & Fieldtrip Edukatif",
    description: "Eksplorasi belajar di luar kelas mengunjungi sentra pertanian, pemadam kebakaran, peternakan, maupun taman alam untuk memperkaya wawasan riil.",
    schedule: "1 - 2 Kali Setiap Semester",
    badge: "Pengalaman Nyata",
    icon: "Compass",
    highlights: ["Kunjungan profesi dan wisata edukasi", "Interaksi langsung dengan alam", "Mempererat bonding guru, anak & wali"]
  },
  {
    id: "ekskul",
    title: "Ekstrakurikuler Pilihan",
    description: "Wadah penyaluran bakat anak dalam bidang Tahfidz cilik, Seni Mewarnai & Melukis, serta Seni Tari kreasi anak nusantara.",
    schedule: "Jadwal Sore / Akhir Pekan Fleksibel",
    badge: "Bakat & Minat",
    icon: "Award",
    highlights: ["Tahfidz Quran Cilik", "Seni Mewarnai & Kaligrafi", "Tari Tradisional & Kreasi Modern"]
  }
];

export const REGISTRATION_INFO = {
  academicYear: "2026/2027",
  targetAge: "Anak Usia 4 - 6 Tahun",
  scheduleTime: "Senin s/d Jumat, Pukul 08.00 - 12.00 WIB",
  location: "Kantor Sekretariat TK Dewi Sartika, Jl. Perintis Kemerdekaan No. 180, Kawalu, Kota Tasikmalaya",
  requirements: [
    {
      title: "Anak Usia 4 - 6 Tahun",
      desc: "Kelompok A (usia 4-5 tahun) dan Kelompok B (usia 5-6 tahun per Juli 2026)."
    },
    {
      title: "Fotocopy Kartu Keluarga (KK)",
      desc: "Menyerahkan 2 lembar fotocopy KK orang tua / wali yang masih berlaku."
    },
    {
      title: "Fotocopy Akta Kelahiran",
      desc: "Menyerahkan 2 lembar fotocopy akta kelahiran calon siswa."
    },
    {
      title: "Mengisi Formulir Pendaftaran",
      desc: "Mengisi formulir resmi secara langsung di sekolah atau melalui formulir daring ini."
    }
  ],
  steps: [
    {
      step: "01",
      title: "Konsultasi & Kunjungan",
      desc: "Bunda/Ayah dapat datang langsung meninjau sekolah dan fasilitas atau chat via WhatsApp panitia."
    },
    {
      step: "02",
      title: "Pengisian Formulir",
      desc: "Melengkapi data identitas anak dan orang tua serta memilih kelompok kelas belajar."
    },
    {
      step: "03",
      title: "Penyerahan Berkas",
      desc: "Membawa fotocopy KK dan Akta Kelahiran ke sekretariat sekolah pada jam operasional."
    },
    {
      step: "04",
      title: "Selamat Bergabung!",
      desc: "Anak mendapatkan perlengkapan belajar, seragam sekolah, dan siap memulai petualangan baru!"
    }
  ],
  contacts: [
    {
      name: "Ibu Iis Kurnia, S.Pd. AUD",
      role: "Kepala Sekolah",
      phone: "0852-2365-4689",
      waNumber: "6285223654689",
      message: "Halo Ibu Iis Kurnia, saya ingin menanyakan informasi pendaftaran murid baru di TK Dewi Sartika."
    },
    {
      name: "Bu Didah Rodiah, S.Pd. AUD",
      role: "Guru Kelas / Panitia SPMB",
      phone: "0813-2128-2905",
      waNumber: "6281321282905",
      message: "Halo Bu Didah, saya ingin konsultasi mengenai syarat dan alur pendaftaran murid baru TK Dewi Sartika."
    },
    {
      name: "Bu Leni Mikial A, S.Pd. AUD",
      role: "Guru Kelas / Panitia SPMB",
      phone: "0852-8865-1356",
      waNumber: "6285288651356",
      message: "Halo Bu Leni, saya ingin bertanya tentang program kurikulum dan jadwal belajar di TK Dewi Sartika."
    },
    {
      name: "Bu Dadah, S.Pd.",
      role: "Guru Kelas / Panitia SPMB",
      phone: "0856-0601-1288",
      waNumber: "6285606011288",
      message: "Halo Bu Dadah, saya berminat mendaftarkan putra/putri saya ke TK Dewi Sartika, mohon informasi formulirnya."
    }
  ]
};

export interface GalleryPhoto {
  id: string;
  title: string;
  mainCategory: 'fasilitas' | 'kegiatan';
  subCategory: 'taman-bermain' | 'ruang-kelas' | 'outing-class' | 'pentas-seni' | 'prestasi';
  categoryBadge: string;
  image: string;
  description: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  // --- FASILITAS: TAMAN BERMAIN (OUTDOOR & INDOOR) ---
  {
    id: "p-play-1",
    title: "Taman Bermain Outdoor Beratap & Ramah Anak",
    mainCategory: "fasilitas",
    subCategory: "taman-bermain",
    categoryBadge: "Fasilitas · Taman Bermain",
    image: "/assets/aistudio/IMG_7429_19e80430.jpg",
    description: "Area bermain luar ruangan berkanopi teduh dengan ayunan ganda, perosotan landai, titian ketangkasan ban warna-warni yang aman dari terik matahari dan hujan."
  },
  {
    id: "p-play-2",
    title: "Ruang Serbaguna & Area Bermain Indoor",
    mainCategory: "fasilitas",
    subCategory: "taman-bermain",
    categoryBadge: "Fasilitas · Ruang Serbaguna",
    image: "/assets/aistudio/IMG_7432_025f1c55.jpg",
    description: "Ruang serbaguna luas dengan lantai bersih, lorong ulat bermain, ayunan mini, dan mural pemandangan kota & awan yang merangsang imajinasi anak."
  },
  {
    id: "p-play-3",
    title: "Arena Ketangkasan & Terowongan Ulat Ceria",
    mainCategory: "fasilitas",
    subCategory: "taman-bermain",
    categoryBadge: "Fasilitas · Taman Bermain",
    image: "/assets/aistudio/IMG_7512_59235a08.jpg",
    description: "Wahana terowongan ulat ungu interaktif, ayunan balita, dan papan jungkat-jungkit kuning di ruangan berlantai keramik bersih dan dinding mural cerah."
  },

  // --- FASILITAS: RUANG KELAS BELAJAR INTERAKTIF ---
  {
    id: "p-class-1",
    title: "Ruang Kelas Sentra Belajar & Loker Siswa",
    mainCategory: "fasilitas",
    subCategory: "ruang-kelas",
    categoryBadge: "Fasilitas · Ruang Kelas",
    image: "/assets/aistudio/IMG_7517_4eabf2a4.jpg",
    description: "Ruang kelas bernuansa kuning ceria dilengkapi loker buku bertingkat, papan tulis interaktif, poster huruf mangga, dan foto kenegaraan resmi."
  },
  {
    id: "p-class-2",
    title: "Ruang Belajar Ceria & Meja Kelompok",
    mainCategory: "fasilitas",
    subCategory: "ruang-kelas",
    categoryBadge: "Fasilitas · Ruang Kelas",
    image: "/assets/aistudio/IMG_7516_5bae149a.jpg",
    description: "Susunan kursi warna-warni ergonomis, kipas angin penyejuk, hiasan dinding pelangi, dan gantungan karya seni kreasi origami anak."
  },
  {
    id: "p-class-3",
    title: "Ruang Kelas Bersih, Terang & Tertata Rapi",
    mainCategory: "fasilitas",
    subCategory: "ruang-kelas",
    categoryBadge: "Fasilitas · Ruang Kelas",
    image: "/assets/aistudio/IMG_7515_b6b8e685.jpg",
    description: "Pencahayaan alami dengan jendela kaca berhias stiker tematik, rak buku bacaan dongeng, lemari perlengkapan, dan pintu hijau yang segar."
  },
  {
    id: "p-class-4",
    title: "Fasilitas Layar Multimedia & Smart Display",
    mainCategory: "fasilitas",
    subCategory: "ruang-kelas",
    categoryBadge: "Fasilitas · Ruang Multimedia",
    image: "/assets/aistudio/IMG_7508_34ad2bda.jpg",
    description: "Layar TV digital interaktif ukuran besar untuk mendukung media pembelajaran audio-visual modern, video edukasi anak, dan kisah teladan islami."
  },
  {
    id: "p-class-5",
    title: "Sentra Literasi, Balok & Alat Peraga Edukatif",
    mainCategory: "fasilitas",
    subCategory: "ruang-kelas",
    categoryBadge: "Fasilitas · Ruang Kelas",
    image: "/assets/aistudio/IMG_7511_36cc651b.jpg",
    description: "Lemari peraga bertingkat berisi bola dunia (globe), miniatur rambu lalu lintas, rukun iman hias, karpet motif ceria, dan kursi santai anak."
  },
  {
    id: "p-class-6",
    title: "Pojok Seni, Menggambar & Display Portofolio",
    mainCategory: "fasilitas",
    subCategory: "ruang-kelas",
    categoryBadge: "Fasilitas · Ruang Kelas",
    image: "/assets/aistudio/IMG_7518_0c4976c5.jpg",
    description: "Dinding apresiasi tempat memamerkan karya gambar anak, hiasan bunga handmade, modul pembelajaran bagian tumbuhan, dan meja kegiatan mandiri."
  },
  {
    id: "p-class-7",
    title: "Sudut Edukasi Tematik & Poster Kesehatan Anak",
    mainCategory: "fasilitas",
    subCategory: "ruang-kelas",
    categoryBadge: "Fasilitas · Ruang Kelas",
    image: "/assets/aistudio/IMG_7509_97da096a.jpg",
    description: "Dilengkapi poster cara menggosok gigi dan pencegahan plak, gantungan bebek warna-warni, serta rak susun rapi untuk stimulasi visual anak."
  },

  // --- KEGIATAN: OUTING CLASS & FIELDTRIP ALAM ---
  {
    id: "p-act-1",
    title: "Outing Class Tanam Padi & Mengenal Profesi Petani",
    mainCategory: "kegiatan",
    subCategory: "outing-class",
    categoryBadge: "Kegiatan · Outing Class",
    image: "/assets/aistudio/612410797_18018328679800822_3552268669644867068_n_5ed28438.webp",
    description: "Keseruan murid-murid turun langsung ke lumpur sawah belajar cara menanam padi sambil memegang plang cita-cita 'Calon Kapolri' dan 'Calon Presiden'."
  },
  {
    id: "p-act-2",
    title: "Eksplorasi Sawah: Menumbuhkan Cinta Alam & 'Calon Ulama'",
    mainCategory: "kegiatan",
    subCategory: "outing-class",
    categoryBadge: "Kegiatan · Outing Class",
    image: "/assets/aistudio/612182201_18018328670800822_3214638699077438128_n_443ce424.webp",
    description: "Didampingi guru dan orang tua, anak-anak belajar menyemai benih padi dengan sabar di lumpur sawah yang melatih sensorik dan rasa syukur."
  },
  {
    id: "p-act-3",
    title: "Edukasi Pembibitan Tanaman di Hamparan Hijau",
    mainCategory: "kegiatan",
    subCategory: "outing-class",
    categoryBadge: "Kegiatan · Outing Class",
    image: "/assets/aistudio/612265905_18018328625800822_7779141605620833546_n_c40f8d67.webp",
    description: "Aktivitas luar ruangan melingkar di atas rumput hijau segar, mengenalkan proses fotosintesis, tanah subur, dan cara merawat tanaman sejak dini."
  },
  {
    id: "p-act-4",
    title: "Fieldtrip Edukasi di Landmark Kota Tasikmalaya",
    mainCategory: "kegiatan",
    subCategory: "outing-class",
    categoryBadge: "Kegiatan · Fieldtrip",
    image: "/assets/aistudio/803925807_18051902918800822_2819504293652339097_n_f80f50ca.webp",
    description: "Kunjungan luar sekolah di monumen ikonik KOTA TASIKMALAYA, mengenalkan sejarah kota, tata ruang publik, dan membangun kebersamaan ceria."
  },
  {
    id: "p-act-5",
    title: "Foto Bersama Santri & Guru saat Fieldtrip Terbuka",
    mainCategory: "kegiatan",
    subCategory: "outing-class",
    categoryBadge: "Kegiatan · Fieldtrip",
    image: "/assets/aistudio/805119400_18051902939800822_3715356140699766624_n_4edf6e28.webp",
    description: "Kekompakan seluruh dewan guru pendidik bersama santriwan-santriwati TK Dewi Sartika berseragam olahraga biru dalam agenda fieldtrip edukatif."
  },
  {
    id: "p-act-6",
    title: "Cooking Class Koki Cilik Membuat Roti (Istana Roti)",
    mainCategory: "kegiatan",
    subCategory: "outing-class",
    categoryBadge: "Kegiatan · Cooking Class",
    image: "/assets/aistudio/610695696_18018328589800822_1307150351745367762_n_f7a822fc.webp",
    description: "Praktik langsung membuat aneka olahan roti dengan memakai celemek dan topi koki oranye, melatih kemandirian motorik halus dan rasa bangga berkarya."
  },
  {
    id: "p-act-7",
    title: "Kunjungan Profesi Kuliner Bersama Guru & Siswa",
    mainCategory: "kegiatan",
    subCategory: "outing-class",
    categoryBadge: "Kegiatan · Outing Class",
    image: "/assets/aistudio/611682701_18018328607800822_1848554054955197705_n_04ef759d.webp",
    description: "Kegembiraan melambaikan tangan bersama seluruh murid berpakaian apron koki di pelataran pabrik roti setelah menyelesaikan sesi praktek memasak."
  },

  // --- KEGIATAN: PENTAS SENI, TARI & PELEPASAN SISWA ---
  {
    id: "p-art-1",
    title: "Pentas Seni Tari Kreasi Anak (Pelepasan Angkatan)",
    mainCategory: "kegiatan",
    subCategory: "pentas-seni",
    categoryBadge: "Kegiatan · Pentas Seni",
    image: "/assets/aistudio/tkdewisartika_tasikmalaya_de3353ebe6914b918d00930a405ca1cc_d8e97aea.webp",
    description: "Penampilan tari kreasi anak putri memakai gaun overall denim dan hiasan bando lucu di panggung pelepasan siswa berlatar balon warna-warni."
  },
  {
    id: "p-art-2",
    title: "Penampilan Seni Tari Tradisional Nusantara",
    mainCategory: "kegiatan",
    subCategory: "pentas-seni",
    categoryBadge: "Kegiatan · Pentas Seni",
    image: "/assets/aistudio/tkdewisartika_tasikmalaya_c7f789ff511e4c8394a4043ed33f4147_dfa3aec5.webp",
    description: "Aksi memukau para santri putra dengan busana adat hitam-emas bermahkota bulu tradisional, melatih keberanian dan cinta seni budaya bangsa."
  },
  {
    id: "p-art-3",
    title: "Pentas Tari Ceria Anak Laki-Laki Bergaris",
    mainCategory: "kegiatan",
    subCategory: "pentas-seni",
    categoryBadge: "Kegiatan · Pentas Seni",
    image: "/assets/aistudio/tkdewisartika_tasikmalaya_898a8f51b095440d804501603dec24a0_ddecc06e.webp",
    description: "Kekompakan gerak dan langkah tari santri cilik dengan kostum kemeja garis dan topi navy yang energik dan mengundang decak kagum orang tua."
  },
  {
    id: "p-art-4",
    title: "Wisuda Pelepasan Siswa & Pengalungan Medali",
    mainCategory: "kegiatan",
    subCategory: "pentas-seni",
    categoryBadge: "Kegiatan · Wisuda & Kelulusan",
    image: "/assets/aistudio/tkdewisartika_tasikmalaya_974e18a6c5034d2e8c8638bc824f8a60_ecce72e1.webp",
    description: "Momen membanggakan kelulusan murid TK Dewi Sartika mengenakan setelan seragam marun dan medali prestasi didampingi kepala sekolah dan para guru."
  },

  // --- KEGIATAN: LOMBA & PRESTASI MURID (HANYA FOTO) ---
  {
    id: "p-prest-1",
    title: "",
    mainCategory: "kegiatan",
    subCategory: "prestasi",
    categoryBadge: "",
    image: "/assets/aistudio/611607558_18018349589800822_2697590591352515961_n_a160b3e9.webp",
    description: ""
  },
  {
    id: "p-prest-2",
    title: "",
    mainCategory: "kegiatan",
    subCategory: "prestasi",
    categoryBadge: "",
    image: "/assets/aistudio/610749898_18018349559800822_3851363793366831796_n_70329856.webp",
    description: ""
  },
  {
    id: "p-prest-3",
    title: "",
    mainCategory: "kegiatan",
    subCategory: "prestasi",
    categoryBadge: "",
    image: "/assets/aistudio/845924255_18056554649800822_192686093784816056_n_c4b71fcb.webp",
    description: ""
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Kapan periode pendaftaran murid baru Tahun Pelajaran 2026/2027 dibuka?",
    answer: "Pendaftaran sudah dibuka mulai sekarang setiap hari kerja (Senin s/d Jumat) pukul 08.00 - 12.00 WIB. Mengingat kuota per kelas dibatasi agar perhatian guru maksimal, kami menyarankan orang tua untuk mendaftar lebih awal."
  },
  {
    question: "Berapa batas usia anak yang dapat mendaftar?",
    answer: "Untuk Kelompok A berkisar 4 - 5 tahun, dan Kelompok B berkisar 5 - 6 tahun. Anak yang mendekati usia 4 tahun dapat dikonsultasikan terlebih dahulu dengan Kepala Sekolah."
  },
  {
    question: "Bagaimana metode pembelajaran agama Islam di TK Dewi Sartika?",
    answer: "Kami menerapkan pembiasaan amaliyah harian seperti Sholat Dhuha, Giat Mengaji Iqro, Murajaah surat pendek dan hadits setiap pagi, doa sehari-hari, serta program Jumat Berbagi untuk memupuk karakter dermawan sejak dini."
  },
  {
    question: "Apakah orang tua boleh mendampingi anak saat awal masuk sekolah?",
    answer: "Tentu saja! Pada masa orientasi dan adaptasi (MPLS), kami memberikan pendampingan secara bertahap dan ramah anak hingga si kecil merasa aman, nyaman, dan mandiri berinteraksi dengan guru dan teman-temannya."
  },
  {
    question: "Apakah tersedia fasilitas antar-jemput atau seragam?",
    answer: "Setiap murid baru akan mendapatkan paket seragam sekolah resmi, perlengkapan belajar, dan buku panduan. Untuk teknis penjemputan dapat berkoordinasi langsung dengan staf administrasi sekolah."
  }
];
