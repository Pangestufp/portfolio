export const profile = {
  name: "Fedrik Pangestu",
  title: "Full Stack Developer",
  tagline: "...",
  avatar: "/portfolio/projects/profil.jpg",
  location: "Jakarta, Indonesia",
  about: "Information Systems undergraduate with internship experience in in-house web application development within finance operations. Experienced in developing and maintaining internal applications. Interested in junior software developer or IT-related roles.",
  email: "FedrikPangestu1@gmail.com",
  github: "https://github.com/Pangestufp",
  linkedin: "https://id.linkedin.com/in/fedrik-pangestu",
}

export const experiences = [
  {
    company: "PT Mayora Indah Tbk",
    role: "IT In-House Web Application Intern",
    period: "3 February 2025 - 2 February 2026",
    desc: "Developed and supported internal web-based applications for finance processes",
    tech: ["Java", "Spring MVC", "Oracle DB"],
  },
]

export const skills = [
  { category: "Backend", items: ["GO (GIN)","PHP (Laravel)","Java (Spring MVC)", "Oracle DB", "MySQL", "PostgreSQL", "REST API"] },
  { category: "Frontend", items: ["React", "Flutter"] },
  { category: "Tools", items: ["Docker", "Git"] },
]

export const projects = [
  {
    type: "fullstack",
    title: "Sistem Support Ticket",
    desc: "Aplikasi manajemen tiket support sederhana berbasis web dengan workflow approval bertingkat.",
    tech: ["Gin", "React", "MySQL", "Redis", "Docker"],
    images: [
      "/portfolio/projects/ticket-1.png",
      "/portfolio/projects/ticket-2.png",
      "/portfolio/projects/ticket-3.png",
      "/portfolio/projects/ticket-4.png",
      "/portfolio/projects/ticket-5.png",
    ],
    repo: "https://github.com/Pangestufp/sistem-support-sederhana.git",
  },
  {
    type: "erd",
    title: "Procurement and Finance Management System",
    desc: "Sistem ini merupakan rancangan Entity Relationship Diagram (ERD) untuk aplikasi manajemen pengadaan dan keuangan yang mencakup siklus lengkap procure-to-pay, mulai dari Purchase Requisition hingga Payment. Desain ini mempertimbangkan kontrol keuangan nyata seperti 3-way matching, valuasi stok dengan metode FIFO, pencatatan jurnal double-entry otomatis per transaksi, serta workflow yang dinamis dengan dukungan branching kondisional. Selain itu, sistem dilengkapi dengan modul otorisasi berbasis peran (RBAC) untuk mengatur hak akses menu dan modul secara granular.",
    images: [
      "/portfolio/projects/erd.png",
    ],
    repo: "https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&layers=1&nav=1&title=procure%20management.drawio&dark=auto#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1qDKk4Lnk0RfmB3hLCbILISUEyh18UoB7%26export%3Ddownload#%7B%22pageId%22%3A%22qzR26Mp1xTLJmugvIME2%22%7D",
  },
  {
    type: "fullstack",
    title: "Sistem Inventaris dan Pemesanan Barang",
    desc: "Aplikasi mobile untuk manajemen inventaris dan pembelian sederhana yang dirancang untuk mengelola stok produk, menangani pemesanan barang, serta menyediakan layanan prediksi untuk membantu pengelolaan persediaan.",
    tech: ["Laravel","FastAPI","Flutter (GetX)", "MySQL"],
    images: [
      "/portfolio/projects/inven-1.png",
      "/portfolio/projects/inven-2.png",
      "/portfolio/projects/inven-3.png",
      "/portfolio/projects/inven-4.jpg",
      "/portfolio/projects/inven-5.jpg",
    ],
    repo: "https://github.com/Pangestufp/825220009-FEDRIKPANGESTU-KODE-PROGRAM.git",
  },
  {
    type: "fullstack",
    title: "Sistem Kelola Stok UMKM",
    desc: "Aplikasi mobile untuk pengelolaan data stok barang UMKM. Fitur meliputi input stok masuk/keluar, laporan inventaris, dan manajemen pengeluaran.",
    tech: ["Firebase", "Flutter"],
    images: [
      "/portfolio/projects/stok-1.png",
      "/portfolio/projects/stok-2.png",
      "/portfolio/projects/stok-3.png",
      "/portfolio/projects/stok-4.png",
    ],
    repo: "https://github.com/Pangestufp/Aplikasi-kelola-data-stok-umkm.git",
  },
  {
    type: "fullstack",
    title: "Sistem Peminjaman Sederhana",
    desc: "Aplikasi pencatatan peminjaman uang dengan fitur approval.",
    tech: ["Spring MVC", "MySQL"],
    images: [
      "/portfolio/projects/pin-1.png",
      "/portfolio/projects/pin-2.jpeg",
      "/portfolio/projects/pin-3.jpeg",
      "/portfolio/projects/pin-4.jpeg",
      "/portfolio/projects/pin-5.jpeg",
    ],
    repo: "https://github.com/Pangestufp/sistem-peminjaman-sederhana.git",
  },
]
