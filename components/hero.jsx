'use client';

import React from 'react';
import { assets } from '@/utils/assets';
import { motion } from 'motion/react';
import Image from 'next/image';

const Hero = () => {
  const container = {
    start: { opacity: 0 },
    to: { opacity: 1, transition: { staggerChildren: 0.18 } },
  };

  const items = {
    start: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 },
  };

  return (
    <>
      <section id="hero" className="hero pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-5 md:mt-36">
          <motion.div
            variants={container}
            initial="start"
            animate="to"
            className="profile-text m-auto"
          >
            <motion.h3 variants={items}>
              <span className="bg-green-600 w-3 h-3 mr-2 inline-block rounded-full animate-ping"></span>
              Available for hire
            </motion.h3>
            <motion.h1 variants={items} className="text-4xl">
              Hi, I'm Mohammad Dawan Lutfi a
              <span className="text-gray-400"> Web Developer</span>
            </motion.h1>
            <motion.p variants={items}>
              A dedicated Web Developer passionate about crafting intuitive &
              scalable digital experiences.
            </motion.p>
            {/* <div className="social flex gap-3 pt-5">
              <motion.div
                variants={items}
                className="py-1 px-3 rounded-full bg-card shadow-card hover:shadow-hover duration-300 transition-shadow ease-in-out"
              >
                Instagram
              </motion.div>
              <motion.div
                variants={items}
                className="py-1 px-3 rounded-full bg-card shadow-card hover:shadow-hover duration-300 transition-shadow ease-in-out"
              >
                Instagram
              </motion.div>
              <motion.div
                variants={items}
                className="py-1 px-3 rounded-full bg-card shadow-card hover:shadow-hover duration-300 transition-shadow ease-in-out"
              >
                Instagram
              </motion.div>
            </div> */}
          </motion.div>
          <div className="image mt-auto">
            <div className="mx-auto w-2/3 mt-5 md:w-1/2 md:ml-auto md:mr-0 rounded-2xl p-[2px] bg-gradient-to-bl from-green-600 via-transparent to-transparent overflow-hidden">
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-background">
                <Image
                  src={assets.profile}
                  alt="profile"
                  className="rounded-2xl w-full h-auto object-cover block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
