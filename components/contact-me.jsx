'use client';

import React from 'react';
import { motion } from 'motion/react';

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

const ContactMe = () => {
  return (
    <section id="contactMe" className="py-24 relative">
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
          Let's Connect
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Contact <span className="text-gray-400">Me</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto rounded-full mt-3" />
      </motion.div>

      {/* Bento Grid Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
      >
        {/* Card 1: Info Kontak Utama */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4 }}
          className="md:col-span-2 p-6 md:p-8 rounded-3xl bg-card/50 hover:bg-card/70 backdrop-blur-xl border border-foreground/10 shadow-card flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Mari Berkolaborasi
            </h3>
            <p className="text-sm md:text-base text-foreground/75 mb-6 leading-relaxed">
              Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif,
              atau peluang untuk menjadi bagian dari visi Anda.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:dawanlutfi225@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-2xl bg-background/50 border border-foreground/10 group-hover:bg-green-500/10 group-hover:border-green-500/20 transition-all">
                  <svg
                    className="w-5 h-5 text-foreground/70 group-hover:text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-foreground/50">
                    Email
                  </p>
                  <p className="text-sm font-medium text-foreground/80">
                    dawanlutfi225@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="https://wa.me/+6285710683416"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-2xl bg-background/50 border border-foreground/10 group-hover:bg-green-500/10 group-hover:border-green-500/20 transition-all">
                  <svg
                    className="w-5 h-5 text-foreground/70 group-hover:text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-foreground/50">
                    Telepon / WhatsApp
                  </p>
                  <p className="text-sm font-medium text-foreground/80">
                    +6285710683416
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-2xl bg-background/50 border border-foreground/10">
                  <svg
                    className="w-5 h-5 text-foreground/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-foreground/50">
                    Lokasi
                  </p>
                  <p className="text-sm font-medium text-foreground/80">
                    Kota Bogor, Jawa Barat, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Social Media Links */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4 }}
          className="md:col-span-2 p-6 md:p-8 rounded-3xl bg-card/50 hover:bg-card/70 backdrop-blur-xl border border-foreground/10 shadow-card"
        >
          <h3 className="text-xl font-bold text-foreground mb-6">
            Temukan Saya
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                name: 'LinkedIn',
                handle: 'Mohammad Dawan Lutfi',
                url: 'https://www.linkedin.com/in/mohammad-dawan-lutfi-647167279/',
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                name: 'GitHub',
                handle: 'Lutfi-77',
                url: 'https://github.com/Lutfi-77',
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
              },
              // {
              //   name: 'Instagram',
              //   handle: '@dawanlutfi_',
              //   url: 'https://www.instagram.com/dawanlutfi_/',
              //   icon: (
              //     <svg
              //       className="w-5 h-5"
              //       fill="currentColor"
              //       viewBox="0 0 24 24"
              //     >
              //       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              //     </svg>
              //   ),
              // },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="p-4 rounded-2xl bg-background/50 border border-foreground/10 hover:bg-background transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="text-foreground/70 group-hover:text-green-500 transition-colors">
                    {social.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {social.name}
                    </p>
                    <p className="text-[10px] text-foreground/50">
                      {social.handle}
                    </p>
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-foreground/30 group-hover:text-foreground/60 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Card 3: Quick CTA — Download CV */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4 }}
          className="md:col-span-2 p-6 md:p-8 rounded-3xl bg-card/50 hover:bg-card/70 backdrop-blur-xl border border-foreground/10 shadow-card flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="p-2 rounded-xl bg-foreground/5 text-xl">📄</span>
            <h3 className="text-xl font-bold text-foreground">
              Curriculum Vitae
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/CV/CV_Mohammad Dawan Lutfi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-foreground text-background rounded-xl px-5 py-3 font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
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
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV (PDF)
            </a>
            <a
              href="/CV/portofolio_mohammad dawan lutfi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-card border border-foreground/15 text-foreground rounded-xl px-5 py-3 font-medium text-sm flex items-center justify-center gap-2 hover:bg-background transition-colors"
            >
              Portofolio Lengkap
            </a>
          </div>
        </motion.div>

        {/* Card 4: Status Ketersediaan */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4 }}
          className="md:col-span-2 p-6 md:p-8 rounded-3xl bg-card/50 hover:bg-card/70 backdrop-blur-xl border border-foreground/10 shadow-card flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-bold text-foreground">
              Available for Work
            </span>
          </div>
          <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
            Saat ini saya terbuka untuk peluang kerja dan proyek freelance baru.
          </p>
          <div className="mt-4 pt-4 border-t border-foreground/10">
            <p className="text-[11px] uppercase tracking-wider font-semibold text-foreground/50">
              Respons Waktu
            </p>
            <p className="text-xs text-foreground/70">
              Biasanya merespons dalam &lt; 24 jam
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
