'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '@/utils/projects';

const MyWorks = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'E-Commerce', 'POS APP', 'Company Profile'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="myWorks" className="py-24 relative">
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/70 border border-foreground/10 text-xs font-medium text-foreground/80 mb-3 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Featured Work
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Selected <span className="text-gray-400">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto rounded-full mt-3 mb-4" />
        <p className="text-sm md:text-base text-foreground/70 max-w-xl mx-auto">
          Koleksi proyek website nyata yang pernah saya kembangkan, mulai dari
          aplikasi kasir (POS), platform e-commerce, hingga company profile.
        </p>
      </motion.div>

      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-card/40 backdrop-blur-md border border-foreground/10 rounded-2xl shadow-card">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-foreground'
                    : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-card rounded-xl border border-foreground/15 shadow-sm -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between p-5 rounded-3xl bg-card/50 hover:bg-card/75 backdrop-blur-xl border border-foreground/10 hover:border-foreground/25 shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div>
                {/* Project Image Container */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-background/50 border border-foreground/10 mb-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold border border-white/15 tracking-wide">
                      {project.category || 'Web Project'}
                    </span>
                  </div>

                  {/* Quick Expand Button on Image */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 cursor-pointer"
                    title="Lihat Detail"
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>

                {/* Project Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-green-500 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <span className="text-xs text-foreground/40 font-mono">
                    0{project.id}
                  </span>
                </h3>

                <p className="text-xs md:text-sm text-foreground/75 leading-relaxed line-clamp-3 mb-4 text-justify">
                  {project.description}
                </p>
              </div>

              {/* Card Footer: Tech Stack & CTA */}
              <div className="pt-4 border-t border-foreground/10 mt-auto">
                {/* Tech Chips */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-background/60 border border-foreground/10 text-[10px] font-medium text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-foreground/5 text-[10px] text-foreground/60">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                )}

                {/* Action Link */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2 px-3 rounded-xl bg-background/50 hover:bg-foreground hover:text-background border border-foreground/10 text-xs font-semibold text-foreground flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                >
                  <span>Lihat Detail Proyek</span>
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ================= PROJECT DETAIL MODAL POPUP ================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-card border border-foreground/20 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-background/80 hover:bg-background border border-foreground/10 text-foreground transition-colors cursor-pointer z-10"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Image */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 bg-background/60 border border-foreground/10">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-semibold border border-white/15">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Modal Info */}
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {selectedProject.title}
              </h3>

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2">
                  Deskripsi & Peran Pengerjaan
                </h4>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed text-justify">
                  {selectedProject.description}
                </p>
              </div>

              {/* Modal Technologies */}
              {selectedProject.technologies && (
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2.5">
                    Teknologi yang Digunakan
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl bg-background border border-foreground/10 text-xs font-medium text-foreground shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div className="pt-4 border-t border-foreground/10 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MyWorks;
