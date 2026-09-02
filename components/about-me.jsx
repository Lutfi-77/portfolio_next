'use client';
import React, { useState } from 'react';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabItems = {
    profile: (
      <p className="text-justify col-span-2 h-full">
        Saya adalah lulusan Sarjana Informatika dari Universitas Nusa Mandiri
        dengan latar belakang Rekayasa Perangkat Lunak. Berpengalaman dalam
        mengerjakan berbagai proyek pengembangan web freelance, mulai dari
        merancang landing page yang responsif, dashboard interaktif, hingga
        sistem POS. Memiliki keahlian utama di ekosistem frontend modern
        (React.js, Next.js, Tailwind CSS) serta backend (PHP, Laravel,
        CodeIgniter). Saya selalu antusias mempelajari teknologi baru dan siap
        berkontribusi dalam menghadirkan solusi digital yang efisien dan
        bernilai tinggi.
      </p>
    ),

    education: (
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="font-semibold text-lg">Universitas Nusa Mandiri</h3>
          <p className="text-foreground/70">Sarjana Informatika (S.Kom)</p>
          <span className="text-sm text-foreground/50">2020 - 2024</span>
        </div>
        <div>
          <h3 className="font-semibold text-lg">SMK Tri Dharma 2 Bogor</h3>
          <p className="text-foreground/70">Sarjana Informatika (S.Kom)</p>
          <span className="text-sm text-foreground/50">2017 - 2020</span>
        </div>
      </div>
    ),
  };

  return (
    <section id="aboutMe" className="py-28">
      <h1 className="text-3xl text-center after:content-[''] after:w-1/4 after:h-1 after:block after:m-auto after:rounded-full after:bg-foreground after:mt-2 pb-3">
        About Me
      </h1>
      <div className="grid grid-cols-3 gap-5 items-start">
        <div className="tab-list">
          <button
            className="tab-items px-5 py-2.5 w-full text-left bg-card text-foreground font-medium shadow-sm transition-all block hover:bg-background hover:border hover:border-card"
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            className="tab-items px-5 py-2.5 w-full text-left bg-card text-foreground font-medium shadow-sm transition-all block hover:bg-background hover:border hover:border-card"
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>
        <div className="md:col-span-2 min-h-[220px] flex items-start">
          {tabItems[activeTab]}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
