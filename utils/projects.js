import posImage from '@/public/project/project_dapur.jpg';
import karate from '@/public/project/karate.png';
import duaCahaya from '@/public/project/dua_cahaya.png';
import araStore from '@/public/project/ara_store.png';
import nsSkin from '@/public/project/nsskin.png';
import totem from '@/public/project/totem.png';

export const projects = [
  {
    id: 1,
    title: 'Dapur Ammih',
    category: 'POS APP',
    description:
      'Aplikasi Point of Sale (POS) untuk membantu pemilik warung/UMKM mencatat transaksi penjualan secara digital, menggantikan pencatatan manual. Mengerjakan proyek secara full stack — mulai dari perancangan database, sistem backend, hingga tampilan antarmuka aplikasi kasir.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS', 'Laravel'],
    image: posImage,
  },
  {
    id: 2,
    title: 'JF Dettac Taekwondo',
    category: 'Company Profile',
    description:
      'Website informasi untuk tempat pelatihan taekwondo, menampilkan daftar kelas yang tersedia beserta galeri dokumentasi kegiatan latihan. Mengembangkan sistem CRUD untuk data kelas dan galeri, serta membangun sebagian tampilan frontend untuk pengguna.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'MySQL',
      'Tailwind CSS',
      'Laravel',
    ],
    image: karate,
  },
  {
    id: 3,
    title: 'PT. Dua Cahaya Sakti',
    category: 'Company Profile',
    description:
      'Website company profile untuk menampilkan informasi perusahaan beserta daftar layanan/jasa yang ditawarkan kepada calon klien. Bertanggung jawab membangun sistem CRUD untuk data jasa perusahaan dan mengembangkan tampilan frontend website.',
    technologies: [
      'CSS',
      'JavaScript',
      'PHP',
      'MySQL',
      'Tailwind CSS',
      'Laravel',
    ],
    image: duaCahaya,
  },
  {
    id: 4,
    title: 'Al-Rasyid Store',
    category: 'E-Commerce',
    description:
      'Platform penjualan sepatu online yang memungkinkan pengguna menjelajahi katalog produk berdasarkan kategori, melihat detail produk, dan melakukan pemesanan secara online. Membangun sistem CRUD untuk data produk dan kategori di sisi admin, serta mengembangkan tampilan frontend untuk pengalaman belanja pengguna.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'MySQL',
      'Tailwind CSS',
      'Laravel',
    ],
    image: araStore,
  },
  {
    id: 5,
    title: 'NSSkin',
    category: 'E-Commerce',
    description:
      'Platform penjualan produk kecantikan yang juga menampilkan informasi klinik kecantikan terkait bagi pengguna yang ingin berkonsultasi. Membangun tampilan frontend serta sistem CRUD untuk data produk dan data klinik.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'MySQL',
      'Tailwind CSS',
      'Laravel',
    ],
    image: nsSkin,
  },
  {
    id: 6,
    title: 'Totem Project',
    category: 'Company Profile',
    description:
      'Website company profile untuk brand mainan anak, dengan tampilan visual produk berbasis gambar 3D interaktif untuk memperkuat kesan menarik bagi pengunjung. Membangun tampilan frontend website, termasuk integrasi elemen visual 3D pada halaman produk.',
    technologies: ['React JS', 'CSS', 'JavaScript', 'Tailwind CSS', 'Laravel'],
    image: totem,
  },
];
