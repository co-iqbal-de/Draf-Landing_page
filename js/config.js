/* ============================================================
   ABADI JAYA — config.js
   ============================================================
   File ini adalah SATU-SATUNYA tempat kamu perlu edit
   untuk mengubah konten website:
     - Nomor WhatsApp
     - Menu Navigasi
     - Data Produk
     - Testimoni
     - FAQ
     - Statistik (counter angka)
   ============================================================ */

/* ===================== KONTAK ===================== */
/* Ganti dengan nomor WhatsApp aktif (format: kode negara + nomor, tanpa + atau 0 di depan) */
const WA_NUMBER = '6285786775305';

/* Pesan default saat buka WhatsApp dari tombol navbar/hero/CTA */
const WA_DEFAULT_MSG = 'Halo saya ingin memesan produk Abadi Jaya';


/* ===================== MENU NAVIGASI ===================== */
/*
  Cara kustomisasi:
  - Tambah item: tambahkan baris baru { label: 'Nama', href: '#id-section' }
  - Hapus item:  hapus baris atau tambahkan // di depannya
  - Ubah urutan: geser baris ke posisi yang diinginkan
*/
const NAV_ITEMS = [
  { label: 'Beranda',      href: '#beranda'    },
  { label: 'Produk',       href: '#produk'     },
  { label: 'Keunggulan',   href: '#keunggulan' },
  { label: 'Testimoni',    href: '#testimoni'  },
  { label: 'Tentang Kami', href: '#tentang'    },
  { label: 'FAQ',          href: '#faq'        },
  { label: 'Hubungi Kami', href: '#kontak'     },
  // Contoh menambah menu baru:
  // { label: 'Blog',       href: '#blog'       },
];


/* ===================== STATISTIK ===================== */
/*
  Angka akhir yang ditampilkan setelah counter berhenti.
  Contoh: pelanggan: 5200 → ditampilkan sebagai "5.200+"
*/
const STATS = {
  pelanggan: 5200,   // Pelanggan Puas
  produk:    150,    // Produk Terjual (dalam ribuan → "150rb+")
  tahun:     2005,   // Tahun Berdiri
  rating:    4.9,    // Rating Pelanggan (/5)
};


/* ===================== KATALOG PRODUK ===================== */
/*
  Setiap produk:
    name      : nama produk
    weight    : berat / ukuran kemasan
    category  : 'original' atau 'pedas' (dipakai untuk filter)
    price     : harga tampil (string bebas)
    desc      : deskripsi singkat
    rating    : nilai bintang (desimal, max 5)
    reviews   : jumlah ulasan
    badge     : label badge (kosongkan '' untuk tidak tampil)
    badgeType : 'best' (kuning) | 'hot' (merah) | '' (tidak ada)
    img       : path foto produk, atau '' untuk placeholder ikon
                Contoh: 'assets/images/abon-original-100.jpg'
*/
const PRODUCTS = [
  {
    name: 'Abon Sapi Original', weight: '100gr', category: 'original',
    price: 'Rp 28.000',
    desc: 'Abon sapi original dengan rasa gurih khas Solo. Cocok untuk teman makan nasi sehari-hari.',
    rating: 4.9, reviews: 127, badge: 'Terlaris', badgeType: 'best', img: 'assets/images/manis.png',
  },
  {
    name: 'Abon Sapi Original', weight: '250gr', category: 'original',
    price: 'Rp 62.000',
    desc: 'Kemasan ekonomis untuk keluarga. Gurih dan renyah dengan cita rasa tradisional yang otentik.',
    rating: 4.8, reviews: 89, badge: '', badgeType: '', img: 'assets/images/manis.png',
  },
  {
    name: 'Abon Sapi Original', weight: '500gr', category: 'original',
    price: 'Rp 118.000',
    desc: 'Pilihan terbaik untuk oleh-oleh atau stok bulanan. Cita rasa premium dalam kemasan jumbo.',
    rating: 4.9, reviews: 64, badge: 'Hemat', badgeType: 'best', img: 'assets/images/abon.png',
  },
  {
    name: 'Abon Sapi Pedas', weight: '100gr', category: 'pedas',
    price: 'Rp 30.000',
    desc: 'Varian pedas untuk pecinta rasa yang lebih menggigit. Dibuat dengan cabai pilihan tanpa MSG.',
    rating: 4.7, reviews: 98, badge: 'Baru', badgeType: 'hot', img: 'assets/images/pedas.png',
  },
  {
    name: 'Abon Sapi Pedas', weight: '250gr', category: 'pedas',
    price: 'Rp 68.000',
    desc: 'Ukuran ideal untuk keluarga yang suka pedas. Perpaduan sempurna antara gurih dan pedas alami.',
    rating: 4.8, reviews: 75, badge: '', badgeType: '', img: 'assets/images/pedas.png',
  },
  {
    name: 'Abon Sapi Pedas', weight: '500gr', category: 'pedas',
    price: 'Rp 128.000',
    desc: 'Kemasan jumbo varian pedas. Pilihan terbaik untuk reseller atau oleh-oleh dalam jumlah banyak.',
    rating: 4.7, reviews: 42, badge: 'Favorit', badgeType: 'hot', img: 'assets/images/abon.png',
  },
];


/* ===================== TESTIMONI ===================== */
/*
  Setiap testimoni:
    name   : nama pelanggan
    city   : kota asal
    text   : isi ulasan
    stars  : jumlah bintang (1–5)
    avatar : path foto, atau '' untuk inisial huruf pertama nama
*/
const TESTIMONIALS = [
  {
    name: 'Sari Dewi', city: 'Jakarta', stars: 5, avatar: '',
    text: 'Abon sapi ABADI JAYA benar-benar berbeda dari yang lain. Rasa tradisional Solonya sangat terasa. Sudah berlangganan lebih dari 3 tahun!',
  },
  {
    name: 'Budi Santoso', city: 'Surabaya', stars: 5, avatar: '',
    text: 'Cocok banget buat oleh-oleh. Keluarga di Surabaya selalu minta dikirimkan abon ini. Kualitas konsisten dan pengiriman cepat.',
  },
  {
    name: 'Fitri Handayani', city: 'Bandung', stars: 5, avatar: '',
    text: 'Varian pedasnya juara! Tidak terlalu pedas tapi pedasnya tepat. Sudah habis 2 kemasan 500gr dalam sebulan, hehe.',
  },
  {
    name: 'Rizky Prasetyo', city: 'Yogyakarta', stars: 5, avatar: '',
    text: 'Sebagai asli Solo, saya bisa bilang ini memang autentik. Resepnya konsisten dari dulu sampai sekarang. Recommended!',
  },
  {
    name: 'Aulia Rahman', city: 'Semarang', stars: 5, avatar: '',
    text: 'Pesan pertama kali karena rekomendasi teman, dan langsung ketagihan. Abon paling gurih yang pernah saya coba.',
  },
  {
    name: 'Dewi Kusuma', city: 'Malang', stars: 5, avatar: '',
    text: 'Anak-anak saya yang biasanya pilih-pilih makan, langsung habiskan nasi saat dibuatkan lauk abon ini. Luar biasa!',
  },
];


/* ===================== FAQ ===================== */
/*
  Setiap pertanyaan:
    q : pertanyaan
    a : jawaban
*/
const FAQS = [
  {
    q: 'Berapa lama masa simpan produk ABADI JAYA?',
    a: 'Produk kami memiliki masa simpan hingga 6 bulan dalam kondisi penyimpanan yang tepat, yaitu disimpan di tempat kering dan tidak terkena sinar matahari langsung. Setelah dibuka, disarankan dikonsumsi dalam 2-3 bulan.',
  },
  {
    q: 'Apakah produk ABADI JAYA sudah bersertifikat halal?',
    a: 'Ya, seluruh produk ABADI JAYA diproduksi dengan bahan-bahan yang halal dan mengikuti prosedur yang sesuai syariat Islam. Kami berkomitmen untuk menjaga kehalalan produk kami di setiap tahap produksi.',
  },
  {
    q: 'Apakah bisa dikirim ke luar kota atau luar Jawa?',
    a: 'Tentu saja! Kami melayani pengiriman ke seluruh wilayah Indonesia. Pengiriman menggunakan jasa ekspedisi terpercaya dengan kemasan yang aman untuk menjaga kualitas produk selama pengiriman.',
  },
  {
    q: 'Apakah ABADI JAYA menerima reseller atau distributor?',
    a: 'Ya, kami membuka peluang kerjasama sebagai reseller dengan harga khusus. Hubungi kami melalui WhatsApp untuk mendapatkan informasi harga reseller dan ketentuan yang berlaku.',
  },
  {
    q: 'Berapa minimum pemesanan untuk pembelian?',
    a: 'Tidak ada minimum pemesanan untuk pembelian eceran. Namun untuk harga reseller dan pengiriman gratis, kami memiliki ketentuan minimum pembelian tertentu yang bisa ditanyakan langsung via WhatsApp.',
  },
  {
    q: 'Apakah tersedia kemasan untuk korporat atau souvenir?',
    a: 'Kami menyediakan layanan kemasan khusus untuk kebutuhan korporat, event, atau souvenir pernikahan. Hubungi kami untuk konsultasi desain kemasan dan harga spesial untuk pemesanan dalam jumlah banyak.',
  },
];
