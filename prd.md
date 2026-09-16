# PRD: Contact Me Section

## Tujuan

Membuat section **Contact Me** baru sebagai komponen React di `c:\Users\USER\Documents\Code\LEARN\NEXTJS\cv\components\contact-me.jsx`, lalu mendaftarkannya di `c:\Users\USER\Documents\Code\LEARN\NEXTJS\cv\app\page.jsx` sebagai section terakhir setelah `<MyWorks />`.

---

## Tech Stack Proyek (Sudah Terinstal, JANGAN Install Apapun)

| Dependency       | Versi        |
|------------------|--------------|
| Next.js          | 16.3.4       |
| React            | 19.2.8       |
| Tailwind CSS     | v4           |
| motion           | ^13.1.1      |

> [!CAUTION]
> - Gunakan `'use client'` di baris pertama karena menggunakan `motion` dan interaktivitas.
> - Import motion dari `motion/react`, **BUKAN** dari `framer-motion`.
> - Jangan install package baru apapun.

---

## Design System yang WAJIB Diikuti

Semua section lain di proyek ini menggunakan pola visual yang konsisten. Section Contact Me **harus mengikuti pola yang sama persis**.

### 1. Section Wrapper

```jsx
<section id="contactMe" className="py-24 relative">
```

### 2. Background Decorative Glow

Setiap section memiliki glow ambient di belakang. Contoh:

```jsx
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
```

### 3. Section Header (WAJIB IKUTI POLA INI)

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.5 }}
  className="text-center mb-14"
>
  {/* Badge Pill */}
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/70 border border-foreground/10 text-xs font-medium text-foreground/80 mb-3 backdrop-blur-md">
    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
    Teks Badge
  </div>

  {/* Judul */}
  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
    Kata Pertama <span className="text-gray-400">Kata Kedua</span>
  </h2>

  {/* Garis Aksen Hijau */}
  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto rounded-full mt-3" />
</motion.div>
```

- Badge teks untuk Contact Me: `"Let's Connect"`
- Judul: `Contact` (putih/foreground) + `Me` (gray-400)

### 4. Stagger Container Animation Pattern

```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
```

### 5. Card Styling Pattern

Setiap card/bento item menggunakan class pattern ini:

```
rounded-3xl bg-card/50 hover:bg-card/70 backdrop-blur-xl border border-foreground/10 shadow-card
```

Dengan `whileHover={{ y: -4 }}` dari motion.

### 6. Color Tokens (dari `globals.css`)

| Token              | Light              | Dark               |
|--------------------|--------------------|--------------------|
| `--background`     | `#ffffff`          | `#202224`          |
| `--foreground`     | `#171717`          | `#ededed`          |
| `--color-card`     | `#34363a`          | `#34363a`          |
| `--shadow-card`    | inset shadow       | inset shadow       |
| Aksen hijau        | `green-500` / `green-600` | sama          |

### 7. Teks Opacity Convention

- Teks utama: `text-foreground`
- Teks sekunder: `text-foreground/80` atau `text-foreground/75`
- Teks tersier / label: `text-foreground/60` atau `text-foreground/50`
- Label uppercase: `text-[11px] uppercase tracking-wider font-semibold text-foreground/50`

---

## Layout & Konten yang Diinginkan

Gunakan layout **Bento Grid** yang konsisten dengan section About Me.

Grid container: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5`

### Card 1: Info Kontak Utama (Span 2 kolom)

- Judul card: "Mari Berkolaborasi" atau "Hubungi Saya"
- Paragraf ajakan singkat (1-2 kalimat) mengajak pengunjung untuk menghubungi
- Tampilkan info kontak berikut dalam bentuk list items dengan icon SVG inline:
  - **Email**: `lutfi.dawan77@gmail.com`
  - **Telepon/WhatsApp**: `+62 857-7210-4408`
  - **Lokasi**: `Kota Bogor, Jawa Barat, Indonesia`
- Setiap item kontak harus bisa di-klik:
  - Email → `mailto:lutfi.dawan77@gmail.com`
  - WhatsApp → `https://wa.me/6285772104408`
  - Lokasi → tidak perlu link, hanya teks
- Gunakan icon SVG inline sederhana (envelope, phone, map-pin), **JANGAN** install icon library

### Card 2: Social Media Links (Span 2 kolom)

- Judul card: "Temukan Saya" atau "Social Media"
- Tampilkan link sosial media dalam grid `grid-cols-1 sm:grid-cols-2` di dalam card:
  - **LinkedIn**: `https://www.linkedin.com/in/mohammad-dawan-lutfi/`
  - **GitHub**: `https://github.com/Lutfi-77`
  - **Instagram**: `https://www.instagram.com/dawanlutfi_/`
- Setiap link ditampilkan sebagai sub-card kecil (rounded-2xl, bg-background/50, border border-foreground/10) dengan:
  - SVG icon sosial media (sederhana, inline)
  - Nama platform
  - Username / handle
  - Arrow icon ke kanan
- Link membuka tab baru (`target="_blank" rel="noopener noreferrer"`)
- Gunakan `hover:bg-background` dan efek `whileHover={{ x: 4 }}` dari motion pada setiap sub-card

### Card 3: Quick CTA — Download CV (Span 2 kolom)

- Card yang menampilkan ajakan download CV dan portofolio
- Tombol utama: "Download CV (PDF)" → link ke `/CV/CV_Mohammad Dawan Lutfi.pdf`
- Tombol sekunder: "Portofolio Lengkap" → link ke `/CV/portofolio_mohammad dawan lutfi.pdf`
- Styling tombol utama: `bg-foreground text-background rounded-xl px-5 py-2.5 font-medium text-sm`
- Styling tombol sekunder: `bg-card border border-foreground/15 text-foreground rounded-xl px-5 py-2.5`
- Tambahkan icon download SVG inline pada tombol utama

### Card 4: Status Ketersediaan (Span 2 kolom)

- Indikator status "Available for Work" dengan dot hijau `animate-pulse`
- Teks: "Saat ini saya terbuka untuk peluang kerja dan proyek freelance baru."
- Bisa ditambahkan estimasi waktu respons: "Biasanya merespons dalam < 24 jam"

---

## File yang Perlu Diubah

### 1. [NEW] `c:\Users\USER\Documents\Code\LEARN\NEXTJS\cv\components\contact-me.jsx`

- Buat komponen `ContactMe` sesuai spesifikasi di atas
- Export default

### 2. [MODIFY] `c:\Users\USER\Documents\Code\LEARN\NEXTJS\cv\app\page.jsx`

Tambahkan import dan render `<ContactMe />` setelah `<MyWorks />`:

```jsx
import ContactMe from '@/components/contact-me';

// Di dalam return:
<div className="container mx-auto">
  <Hero />
  <AboutMe />
  <MyWorks />
  <ContactMe />  {/* ← TAMBAHKAN INI */}
</div>
```

---

## Checklist Verifikasi

- [ ] File `contact-me.jsx` dibuat di folder `components/`
- [ ] `'use client'` ada di baris pertama
- [ ] Import motion dari `motion/react`
- [ ] Section header mengikuti pola badge + judul + garis aksen hijau
- [ ] Background glow dekoratif ada
- [ ] Semua card menggunakan `rounded-3xl bg-card/50 ... backdrop-blur-xl border border-foreground/10 shadow-card`
- [ ] `whileHover={{ y: -4 }}` pada setiap card utama
- [ ] `containerVariants` dan `cardVariants` dengan stagger animation digunakan
- [ ] `whileInView` digunakan untuk trigger animasi saat scroll
- [ ] Semua link kontak dan sosmed berfungsi dan membuka tab baru
- [ ] Layout responsif: 1 kolom di mobile, grid bento di desktop
- [ ] `page.jsx` telah diupdate untuk import dan render `<ContactMe />`
- [ ] Tidak ada package baru yang diinstall
- [ ] Tidak ada library icon external (gunakan SVG inline)
