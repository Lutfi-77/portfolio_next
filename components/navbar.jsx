'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#aboutMe' },
  { name: 'Projects', href: '#myWorks' },
  { name: 'Contact', href: '#contactMe' },
];

const Navbar = () => {
  const [active, setActive] = useState('#hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => {
        const el = document.querySelector(item.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          return { href: item.href, top: rect.top };
        }
        return null;
      }).filter(Boolean);

      const current = sections.find((section) => section.top >= -100 && section.top <= 200);
      if (current) {
        setActive(current.href);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
      setActive(href);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
    >
      <nav
        className={`flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 shadow-card transition-all duration-300 ${
          scrolled ? 'bg-card/70 backdrop-blur-xl' : 'bg-card/40 backdrop-blur-md'
        }`}
      >
        {/* Brand/Logo Avatar Mini */}
        <div className="flex items-center mr-2 pr-4 border-r border-foreground/10">
          <span className="font-bold text-sm tracking-tight">
            Lutfi<span className="text-green-500">.</span>
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`relative px-4 py-1.5 text-xs font-medium transition-colors ${
                  isActive ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-background/50 rounded-full border border-foreground/15 shadow-sm -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Status Indicator */}
        <div className="hidden sm:flex items-center ml-2 pl-4 border-l border-foreground/10">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/40 border border-foreground/5 text-[10px] font-semibold text-foreground/70 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Available
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
