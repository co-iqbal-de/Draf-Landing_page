# ABADI JAYA — Landing Page

## Struktur Folder

```
abadi-jaya/
│
├── index.html              ← Halaman utama (struktur HTML saja)
│
├── css/
│   ├── variables.css       ← Warna, font, dark mode — EDIT DI SINI untuk ganti tema
│   ├── layout.css          ← Navbar, hero, stats, animasi, responsive
│   └── components.css      ← Kartu produk, FAQ, footer, dll
│
├── js/
│   ├── config.js           ← DATA WEBSITE — nomor WA, menu, produk, FAQ (EDIT DI SINI)
│   └── main.js             ← Logika UI (loader, scroll, counter, render produk, dll)
│
└── assets/
    └── images/             ← Letakkan semua foto di sini
        ├── logo.png                 (logo navbar)
        ├── hero-product.png         (foto produk di hero)
        ├── foto-produksi.jpg        (foto section Tentang Kami)
        ├── sertifikat-halal.jpg     (foto sertifikat halal)
        ├── sertifikat-umkm.jpg      (foto sertifikat UMKM)
        ├── produk-lokal.jpg         (foto produk lokal)
        └── standar-higienis.jpg     (foto standar higienis)
```

---

## Cara Edit Konten (Tanpa Coding)

### Ganti Nomor WhatsApp
Buka `js/config.js`, cari baris:
```js
const WA_NUMBER = '6281234567890';
```
Ganti `6281234567890` dengan nomor aktif (tanpa `+` atau `0` di depan).

---

### Tambah / Hapus Menu Navbar
Buka `js/config.js`, cari `NAV_ITEMS`:
```js
const NAV_ITEMS = [
  { label: 'Beranda', href: '#beranda' },
  // tambah baris di sini, atau hapus baris yang tidak perlu
];
```

---

### Tambah / Edit Produk
Buka `js/config.js`, cari `PRODUCTS`. Setiap produk berbentuk:
```js
{
  name: 'Abon Sapi Original', weight: '100gr', category: 'original',
  price: 'Rp 28.000',
  desc: 'Deskripsi singkat produk.',
  rating: 4.9, reviews: 127,
  badge: 'Terlaris', badgeType: 'best',  // badge: '' untuk tidak tampil
  img: 'assets/images/nama-foto.jpg',    // img: '' untuk ikon placeholder
},
```
Salin satu blok produk, tempelkan di bawahnya, lalu ubah datanya.

---

### Tambah / Edit Testimoni
Buka `js/config.js`, cari `TESTIMONIALS`:
```js
{
  name: 'Nama Pelanggan', city: 'Kota', stars: 5,
  avatar: 'assets/images/avatar.jpg',  // avatar: '' untuk inisial
  text: 'Isi ulasan pelanggan.',
},
```

---

### Tambah / Edit FAQ
Buka `js/config.js`, cari `FAQS`:
```js
{
  q: 'Pertanyaan?',
  a: 'Jawaban lengkap di sini.',
},
```

---

### Ganti Warna Tema
Buka `css/variables.css`, cari bagian `:root`:
```css
--green:      #1E7D32;   /* warna hijau utama */
--green-dark: #145a23;   /* hijau lebih gelap */
--red:        #D32F2F;   /* merah aksen */
--gold:       #d4a017;   /* tombol navbar */
```

---

### Pasang Foto Logo di Navbar
1. Simpan file logo ke `assets/images/logo.png`
2. Buka `index.html`, cari komentar `Mode B — gambar logo`
3. Hapus blok "Mode A" (ikon + teks)
4. Hapus komentar dari baris `<img src="assets/images/logo.png" ...>`

---

### Pasang Foto Produk
1. Simpan foto ke `assets/images/`
2. Buka `js/config.js`, pada data produk yang ingin diberi foto:
```js
img: 'assets/images/abon-original-100.jpg',
```

---

### Pasang Foto Sertifikasi
Buka `index.html`, cari section `SERTIFIKASI`.
Di setiap card ada komentar HTML yang menjelaskan cara mengganti ikon dengan foto:
```html
<!--
  <img src="assets/images/sertifikat-halal.jpg" alt="Sertifikat Halal"
       style="width:100%;height:100%;object-fit:cover;">
-->
```
Hapus komentar `<!-- -->` dan sesuaikan path foto.

---

## Catatan Teknis
- File harus dibuka lewat **web server** (bukan double-click langsung), karena menggunakan beberapa file terpisah.
- Cara mudah: gunakan ekstensi **Live Server** di VS Code, atau upload ke hosting.
- Semua font dan ikon dimuat dari CDN — butuh koneksi internet.
