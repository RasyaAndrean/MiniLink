<p align="center">
  <img src="https://img.icons8.com/fluency/96/link.png" alt="MiniLink Logo" width="80" />
</p>

<h1 align="center">MiniLink</h1>

<p align="center">
  <strong>Pemendek link minimalis, cepat, dan tanpa server.</strong>
</p>

<p align="center">
  <a href="https://rasyaandrean.github.io/MiniLink/">
    <img src="https://img.shields.io/badge/Live%20Demo-MiniLink-6366f1?style=for-the-badge&logo=github" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/github/languages/top/RasyaAndrean/MiniLink?style=for-the-badge&color=f59e0b" alt="Top Language" />
  <img src="https://img.shields.io/github/repo-size/RasyaAndrean/MiniLink?style=for-the-badge&color=10b981" alt="Repo Size" />
  <img src="https://img.shields.io/github/last-commit/RasyaAndrean/MiniLink?style=for-the-badge&color=6366f1" alt="Last Commit" />
</p>

---

## Tentang

MiniLink adalah website pemendek URL yang berjalan sepenuhnya di sisi klien. Tidak memerlukan backend, database, atau API eksternal — semua data disimpan langsung di browser menggunakan `localStorage` dan redirect dilakukan melalui hash-based routing.

Cocok untuk penggunaan personal, demo, atau sebagai referensi belajar web development.

## Preview

<p align="center">
  <img src="https://rasyaandrean.github.io/MiniLink/preview.png" alt="MiniLink Preview" width="500" />
</p>

> Belum ada screenshot? Buka situs, ambil screenshot, lalu simpan sebagai `preview.png` di root repo.

## Fitur

| Fitur | Keterangan |
|---|---|
| Singkatkan URL | Ubah link panjang menjadi link pendek dalam satu klik |
| Custom Alias | Tentukan sendiri nama pendek yang mudah diingat |
| Copy to Clipboard | Salin hasil link pendek langsung ke clipboard |
| Persistensi Data | URL tersimpan di `localStorage`, tidak hilang saat refresh |
| Redirect Otomatis | Buka link pendek dan langsung diarahkan ke URL asli |
| Tanpa Backend | Berjalan 100% di browser, tanpa server atau database |
| GitHub Pages Ready | Langsung deploy, termasuk `404.html` untuk deep link support |

## Cara Pakai

1. Buka **[rasyaandrean.github.io/MiniLink](https://rasyaandrean.github.io/MiniLink/)**
2. Tempel URL panjang di kolom input
3. *(Opsional)* Isi alias custom, misalnya `promo-saya`
4. Klik **Singkatkan URL**
5. Salin link pendek yang dihasilkan dan bagikan

## Struktur Proyek

```
MiniLink/
├── index.html          # Halaman utama
├── css/
│   └── style.css       # Styling aplikasi
├── js/
│   └── script.js       # Logic & fungsi utama
├── 404.html            # GitHub Pages redirect handler
└── README.md           # Dokumentasi
```

## Tech Stack

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-222?style=flat-square&logo=github&logoColor=white" />
</p>

- **HTML5** — Struktur halaman semantik
- **CSS3** — Styling modern dengan CSS Variables
- **JavaScript (Vanilla)** — Tanpa framework, murni JS
- **localStorage** — Penyimpanan data di browser
- **GitHub Pages** — Hosting gratis untuk static site

## Cara Kerja

```
Pengguna input URL panjang
        │
        ▼
  Validasi URL (http/https)
        │
        ▼
  Generate alias (random / custom)
        │
        ▼
  Simpan ke localStorage
        │
        ▼
  Tampilkan short URL:
  rasyaandrean.github.io/MiniLink/#alias
        │
        ▼
  Saat dibuka → baca hash → lookup localStorage → redirect
```

## Deploy Sendiri

1. **Fork** repo ini
2. Buka **Settings** > **Pages**
3. Set source ke branch `main`, folder `/ (root)`
4. Situs akan aktif di `https://<username>.github.io/MiniLink/`
5. Update `BASE_URL` di `js/script.js` sesuai domain kamu

## Limitasi

- Data disimpan per-browser (tidak sinkron antar perangkat)
- Link pendek hanya bisa diakses dari browser yang sama yang membuatnya
- Kapasitas `localStorage` terbatas (~5-10 MB per domain)
- Tidak ada analytics atau tracking klik

## Kontribusi

Kontribusi sangat diterima! Silakan:

1. Fork repo ini
2. Buat branch baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -m "Tambah fitur baru"`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat **Pull Request**

## Lisensi

Proyek ini bersifat open-source dan bebas digunakan untuk keperluan apapun.

---

<p align="center">
  Dibuat dengan ♥ oleh <strong>Rasya Andrean</strong>
</p>
