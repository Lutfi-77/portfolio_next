'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { assets } from '@/utils/assets';

// Tech SVG Icons
const Icons = {
  react: (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#61DAFB]">
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(120 12 12)"
      />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  nextjs: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-foreground"
    >
      <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM18.3 19.3L9.6 8.2V16.8H8V7.2H9.8L18.5 18.3H18.3Z" />
    </svg>
  ),
  tailwind: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-[#38BDF8]"
    >
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  ),
  javascript: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-[#F7DF1E]"
    >
      <path d="M3 3h18v18H3V3z" fill="#F7DF1E" />
      <path
        d="M12.5 17.5c.7.4 1.5.7 2.4.7 1.5 0 2.3-.7 2.3-1.8 0-1.1-.8-1.6-2.2-2.2l-.6-.3c-1.9-.8-3.1-1.8-3.1-3.9 0-2.3 1.8-3.9 4.6-3.9 1.3 0 2.3.3 3 .7l-.8 2.3c-.6-.3-1.3-.5-2.2-.5-1.1 0-1.9.5-1.9 1.4 0 .9.7 1.4 2 1.9l.6.2c2.2.9 3.4 1.9 3.4 4.1 0 2.5-1.9 4.1-5.1 4.1-1.6 0-2.8-.4-3.7-.9l.7-2.3zm-7.5.2l2.4-1.4c.5.9 1 1.5 2 1.5.9 0 1.4-.4 1.4-1.8V7.8h3.1v8c0 2.9-1.7 4.2-4.1 4.2-2.1 0-3.4-1-4.1-2.5z"
        fill="#000000"
      />
    </svg>
  ),
  html5: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-[#E34F26]"
    >
      <path d="M3 2l1.7 18.5 7.3 2 7.3-2L21 2H3zm14.4 5.5h-8l.2 2.5h7.6l-.6 6.3-4.6 1.3-4.6-1.3-.3-3.5h2.5l.1 1.8 2.3.6 2.3-.6.2-2.5H7.3L6.8 5h10.8l-.2 2.5z" />
    </svg>
  ),
  css3: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-[#1572B6]"
    >
      <path d="M3 2l1.7 18.5 7.3 2 7.3-2L21 2H3zm14.4 5.5h-8l.2 2.5h7.6l-.6 6.3-4.6 1.3-4.6-1.3-.3-3.5h2.5l.1 1.8 2.3.6 2.3-.6.2-2.5H7.3L6.8 5h10.8l-.2 2.5z" />
    </svg>
  ),
  bootstrap: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-[#7952B3]"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.8 13.4c-1.3.1-2.2-.2-2.8-.7v2.8H9.8V6.5h3.4c1.8 0 3 .8 3 2.4 0 1-.5 1.8-1.4 2.1 1.2.3 1.9 1.2 1.9 2.4 0 1.7-1.3 2.4-2.9 2.4zm-.9-5.9c.7 0 1.2-.4 1.2-1.1 0-.7-.5-1.1-1.2-1.1h-1.7v2.2h1.7zm.3 4.2c.8 0 1.4-.4 1.4-1.2 0-.8-.6-1.2-1.4-1.2h-2v2.4h2z" />
    </svg>
  ),
  php: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-[#777BB4]"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4.7 13.5H5.8l1.4-7h2.3c1.6 0 2.5.8 2.2 2.3-.3 1.6-1.5 2.5-2.9 2.5h-1l-.5 2.2zm1.6-4.2h.8c.8 0 1.3-.4 1.5-1.2.2-.8-.2-1.2-.9-1.2h-.9l-.5 2.4zm5.5 4.2h-1.5l1.4-7h2.3c1.6 0 2.5.8 2.2 2.3-.3 1.6-1.5 2.5-2.9 2.5h-1l-.5 2.2zm1.6-4.2h.8c.8 0 1.3-.4 1.5-1.2.2-.8-.2-1.2-.9-1.2h-.9l-.5 2.4z" />
    </svg>
  ),
  laravel: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-[#FF2D20]"
    >
      <path d="M21.5 6.2l-8.6-5a1.8 1.8 0 00-1.8 0l-8.6 5A1.8 1.8 0 001.6 7.8v10.4a1.8 1.8 0 00.9 1.6l8.6 5a1.8 1.8 0 001.8 0l8.6-5a1.8 1.8 0 00.9-1.6V7.8a1.8 1.8 0 00-.9-1.6zm-9.5-3.3l7 4-7 4.1-7-4.1 7-4zm-8 6.5l7 4.1v7.9l-7-4.1V9.4zm9 12v-7.9l7-4.1v7.9l-7 4.1z" />
    </svg>
  ),
  codeigniter: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-[#EE4623]"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5c-3.5 0-5.5-2.2-5.5-4.5 0-2.8 2.8-4.5 4-6.5.5 1.5 1.5 2.5 2.5 3.5 1.2 1.2 2 2.5 2 4.5 0 1.7-1.3 3-3 3z" />
    </svg>
  ),
  mysql: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-[#4479A1]"
    >
      <path d="M12 3C6.5 3 2 6.5 2 10.8c0 3 2.2 5.6 5.5 6.8v3.4l3.5-2.3c.3 0 .7.1 1 .1 5.5 0 10-3.5 10-7.8S17.5 3 12 3z" />
    </svg>
  ),
  git: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-[#F05032]"
    >
      <path d="M21.7 10.3l-8-8c-.4-.4-1-.4-1.4 0l-1.8 1.8 2.3 2.3c.4-.1.9 0 1.2.3.4.4.4 1 0 1.4l-2.3 2.3v5.1c.3.1.6.4.8.7.4.7.1 1.6-.6 2-.7.4-1.6.1-2-.6-.3-.5-.2-1.1.1-1.5v-4.9l-2.5-2.5c-.4.3-1 .2-1.4-.2-.4-.4-.4-1 0-1.4.3-.3.8-.4 1.2-.3l2.4-2.4L7.9 2.3c-.4-.4-1-.4-1.4 0l-4.2 4.2c-.4.4-.4 1 0 1.4l8 8c.4.4 1 .4 1.4 0l10-10c.4-.4.4-1 0-1.4z" />
    </svg>
  ),
  api: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-4 h-4 text-emerald-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
};

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const techStack = {
    frontend: [
      { name: 'React.js', icon: Icons.react },
      { name: 'Next.js', icon: Icons.nextjs },
      { name: 'Tailwind CSS', icon: Icons.tailwind },
      { name: 'JavaScript (ES6+)', icon: Icons.javascript },
      { name: 'HTML5', icon: Icons.html5 },
      { name: 'CSS3', icon: Icons.css3 },
      { name: 'Bootstrap', icon: Icons.bootstrap },
    ],
    backend: [
      { name: 'Laravel', icon: Icons.laravel },
      { name: 'CodeIgniter 3', icon: Icons.codeigniter },
      { name: 'PHP', icon: Icons.php },
      { name: 'RESTful API', icon: Icons.api },
    ],
    database: [
      { name: 'MySQL', icon: Icons.mysql },
      { name: 'Git & GitHub', icon: Icons.git },
    ],
  };

  return (
    <section id="aboutMe" className="py-24 relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/70 border border-foreground/10 text-xs font-medium text-foreground/80 mb-3 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Get to Know Me
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          About <span className="text-gray-400">Me</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto rounded-full mt-3" />
      </motion.div>

      {/* Modern Bento Grid Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
      >
        {/* ================= CARD 1: MAIN HERO / PROFILE (Span 2 col on desktop) ================= */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="md:col-span-2 lg:col-span-2 p-6 md:p-8 rounded-3xl bg-card/50 hover:bg-card/70 backdrop-blur-xl border border-foreground/10 hover:border-foreground/20 shadow-card flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute -right-12 -top-12 w-44 h-44 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all duration-500 pointer-events-none" />

          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-foreground/15 p-0.5 bg-background shadow-sm">
                  <Image
                    src={assets.profile}
                    alt="Mohammad Dawan Lutfi"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg text-foreground leading-tight">
                    Mohammad Dawan Lutfi
                  </h3>
                  <p className="text-xs text-foreground/60">
                    Web Developer • Full Stack Enthusiast
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/60 border border-foreground/10 text-xs text-foreground/80 backdrop-blur-sm">
                <span>📍 Bogor, Indonesia</span>
              </div>
            </div>

            <h4 className="text-lg md:text-xl font-semibold text-foreground mb-3 leading-snug">
              Membangun aplikasi web fungsional, responsif, dan memberikan
              dampak nyata.
            </h4>
            <p className="text-sm md:text-base text-foreground/75 leading-relaxed text-justify">
              Lulusan{' '}
              <span className="text-foreground font-semibold">
                Sarjana Informatika
              </span>{' '}
              dari{' '}
              <span className="text-foreground font-semibold">
                Universitas Nusa Mandiri
              </span>{' '}
              dengan spesialisasi Rekayasa Perangkat Lunak. Berpengalaman
              mengerjakan berbagai proyek web freelance — mulai dari merancang{' '}
              <span className="text-foreground font-semibold">
                Point of Sale (POS)
              </span>
              , platform e-commerce, dashboard interaktif, hingga company
              profile dengan integrasi teknologi visual modern.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-6 pt-5 border-t border-foreground/10">
            <a
              href="/CV/CV_Mohammad Dawan Lutfi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-foreground text-background font-medium text-xs md:text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV (PDF)
            </a>
            <a
              href="/CV/portofolio_mohammad dawan lutfi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-card border border-foreground/15 text-foreground hover:bg-background font-medium text-xs md:text-sm transition-colors flex items-center gap-2"
            >
              <span>📂 Portofolio Lengkap</span>
            </a>
          </div>
        </motion.div>

        {/* ================= CARD 2: INTERACTIVE CODE TERMINAL ================= */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="md:col-span-1 lg:col-span-2 p-5 rounded-3xl bg-card/60 hover:bg-card/80 backdrop-blur-xl border border-foreground/10 shadow-card flex flex-col justify-between font-mono text-xs overflow-hidden"
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-foreground/10 text-foreground/50">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="text-[11px] font-medium text-foreground/70">
              developer.config.js
            </span>
            <span className="text-[10px]">UTF-8</span>
          </div>

          <div className="space-y-1.5 text-foreground/90 leading-relaxed overflow-x-auto py-1">
            <p>
              <span className="text-purple-400 font-semibold">const</span>{' '}
              <span className="text-blue-400">developer</span> = &#123;
            </p>
            <p className="pl-4">
              <span className="text-gray-400">name:</span>{' '}
              <span className="text-emerald-400">'Mohammad Dawan Lutfi'</span>,
            </p>
            <p className="pl-4">
              <span className="text-gray-400">role:</span>{' '}
              <span className="text-emerald-400">
                'Web Developer (Full Stack)'
              </span>
              ,
            </p>
            <p className="pl-4">
              <span className="text-gray-400">gpa:</span>{' '}
              <span className="text-amber-400">3.98</span>,{' '}
              <span className="text-foreground/40">// Sarjana Informatika</span>
            </p>
            <p className="pl-4">
              <span className="text-gray-400">coreStack:</span> [
              <span className="text-cyan-400">'React'</span>,{' '}
              <span className="text-cyan-400">'Next.js'</span>,{' '}
              <span className="text-cyan-400">'Tailwind'</span>,{' '}
              <span className="text-cyan-400">'Laravel'</span>
              ],
            </p>
            <p className="pl-4">
              <span className="text-gray-400">openToWork:</span>{' '}
              <span className="text-green-400 font-semibold">true</span>,
            </p>
            <p className="pl-4">
              <span className="text-gray-400">motto:</span>{' '}
              <span className="text-emerald-400">
                'Write clean, scale fast, deliver value.'
              </span>
            </p>
            <p>&#125;;</p>
          </div>

          <div className="mt-3 pt-2.5 border-t border-foreground/10 flex items-center justify-between text-[11px] text-foreground/60">
            <span className="flex items-center gap-1.5 text-green-500">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
              Terminal Status: Ready
            </span>
            <span>Javascript Ready</span>
          </div>
        </motion.div>

        {/* ================= CARD 3: KEY STATS - GPA / IPK ================= */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="p-5 rounded-3xl bg-card/50 hover:bg-card/70 backdrop-blur-xl border border-foreground/10 shadow-card flex flex-col justify-between relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-foreground/60">
              Prestasi Akademik
            </span>
            <span className="p-2 rounded-xl bg-foreground/5 text-lg">🏆</span>
          </div>
          <div className="my-2">
            <div className="text-3xl md:text-4xl font-extrabold text-foreground">
              3.98
            </div>
            <div className="text-xs text-foreground/70 mt-1 font-medium">
              IPK Sarjana Informatika (S.Kom)
            </div>
          </div>
          <div className="text-[11px] text-foreground/50 pt-2 border-t border-foreground/10">
            Universitas Nusa Mandiri • 2024
          </div>
        </motion.div>

        {/* ================= CARD 4: KEY STATS - PROJECTS COUNT ================= */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="p-5 rounded-3xl bg-card/50 hover:bg-card/70 backdrop-blur-xl border border-foreground/10 shadow-card flex flex-col justify-between relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-foreground/60">
              Pengalaman Proyek
            </span>
            <span className="p-2 rounded-xl bg-foreground/5 text-lg">🚀</span>
          </div>
          <div className="my-2">
            <div className="text-3xl md:text-4xl font-extrabold text-foreground">
              6+
            </div>
            <div className="text-xs text-foreground/70 mt-1 font-medium">
              Proyek Web Nyata Terselesaikan
            </div>
          </div>
          <div className="text-[11px] text-foreground/50 pt-2 border-t border-foreground/10">
            POS, E-Commerce, 3D Web & Profil
          </div>
        </motion.div>

        {/* ================= CARD 5: EDUCATION JOURNEY (Span 2 col) ================= */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="md:col-span-2 lg:col-span-2 p-6 rounded-3xl bg-card/50 hover:bg-card/70 backdrop-blur-xl border border-foreground/10 shadow-card flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-foreground/5 text-base">
                🎓
              </span>
              <h4 className="font-bold text-base md:text-lg text-foreground">
                Riwayat Pendidikan
              </h4>
            </div>
            <span className="text-xs text-foreground/50">Formal Education</span>
          </div>

          <div className="space-y-4">
            {/* Kampus */}
            <div className="p-3.5 rounded-2xl bg-background/50 border border-foreground/10 relative">
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <h5 className="font-bold text-sm text-foreground">
                  Universitas Nusa Mandiri
                </h5>
                <span className="px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-500 font-semibold text-[11px] border border-green-500/20">
                  2020 — 2024
                </span>
              </div>
              <p className="text-xs font-medium text-foreground/80">
                Sarjana Informatika (S.Kom) • Rekayasa Perangkat Lunak
              </p>
              <p className="text-[11px] text-foreground/60 mt-1">
                Lulus dengan Indeks Prestasi Kumulatif (IPK):{' '}
                <strong className="text-foreground">3.98 / 4.00</strong>
              </p>
            </div>

            {/* SMK */}
            <div className="p-3.5 rounded-2xl bg-background/50 border border-foreground/10 relative">
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <h5 className="font-bold text-sm text-foreground">
                  SMK Tri Dharma 2 Bogor
                </h5>
                <span className="px-2.5 py-0.5 rounded-full bg-foreground/10 text-foreground font-semibold text-[11px]">
                  2017 — 2020
                </span>
              </div>
              <p className="text-xs font-medium text-foreground/80">
                Kompetensi Keahlian: Rekayasa Perangkat Lunak (RPL)
              </p>
              <p className="text-[11px] text-foreground/60 mt-1">
                Fokus fondasi pemrograman web, algoritma logika, & manajemen
                database.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= CARD 6: TECH STACK ARSENAL WITH LOGOS (Span 2 col on md/lg) ================= */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="md:col-span-2 lg:col-span-2 p-6 rounded-3xl bg-card/50 hover:bg-card/70 backdrop-blur-xl border border-foreground/10 shadow-card flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-foreground/5 text-base">
                ⚡
              </span>
              <h4 className="font-bold text-base md:text-lg text-foreground">
                Keahlian & Teknologi
              </h4>
            </div>
            <span className="text-xs text-foreground/50">Tech Arsenal</span>
          </div>

          <div className="space-y-4">
            {/* Frontend */}
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-foreground/50 block mb-2">
                Frontend Development
              </span>
              <div className="flex flex-wrap gap-2">
                {techStack.frontend.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-background/60 hover:bg-background border border-foreground/10 text-xs font-medium text-foreground shadow-sm transition-all cursor-default"
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-foreground/50 block mb-2">
                Backend & Database
              </span>
              <div className="flex flex-wrap gap-2">
                {techStack.backend.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-background/60 hover:bg-background border border-foreground/10 text-xs font-medium text-foreground shadow-sm transition-all cursor-default"
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span>{item.name}</span>
                  </motion.div>
                ))}
                {techStack.database.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-background/60 hover:bg-background border border-foreground/10 text-xs font-medium text-foreground shadow-sm transition-all cursor-default"
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= CARD 7: SERVICES / SPECIALIZATION (Span 2 col) ================= */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="md:col-span-2 lg:col-span-2 p-6 rounded-3xl bg-card/50 hover:bg-card/70 backdrop-blur-xl border border-foreground/10 shadow-card flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-foreground/5 text-base">
                💼
              </span>
              <h4 className="font-bold text-base md:text-lg text-foreground">
                Fokus & Spesialisasi
              </h4>
            </div>
            <span className="text-xs text-foreground/50">Core Strengths</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-background/50 border border-foreground/10 flex flex-col justify-between">
              <span className="text-xl mb-2">🛒</span>
              <div>
                <h5 className="font-bold text-xs md:text-sm text-foreground mb-1">
                  POS & E-Commerce
                </h5>
                <p className="text-[11px] text-foreground/60 leading-relaxed">
                  Sistem kasir digital, manajemen inventaris, dan alur transaksi
                  toko online.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-background/50 border border-foreground/10 flex flex-col justify-between">
              <span className="text-xl mb-2">⚙️</span>
              <div>
                <h5 className="font-bold text-xs md:text-sm text-foreground mb-1">
                  CRUD & Dashboard
                </h5>
                <p className="text-[11px] text-foreground/60 leading-relaxed">
                  Panel admin terstruktur, autentikasi aman, dan pengolahan data
                  efisien.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-background/50 border border-foreground/10 flex flex-col justify-between">
              <span className="text-xl mb-2">📱</span>
              <div>
                <h5 className="font-bold text-xs md:text-sm text-foreground mb-1">
                  Modern UI/UX
                </h5>
                <p className="text-[11px] text-foreground/60 leading-relaxed">
                  Desain responsif, animasi halus dengan Motion, dan layout
                  adaptif.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
