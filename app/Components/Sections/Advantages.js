"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaPenNib, FaBook, FaAward } from 'react-icons/fa';
import { font2 } from '../font/poppins';
import localFont from "next/font/local";

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const Advantages = () => {
  // Animation Variants
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const highlightVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
  };

  // Scroll-based animation control
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const elementTop = ref.current?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.8) {
        controls.start("visible");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);

  return (
    <section ref={ref} className={`${timesNewRoman.className}`}>
      <div className="w-full min-h-screen bg-customBeige">
        {/* Heading with Highlight */}
        <motion.h1
          className="text-4xl md:text-6xl p-12 pb-4 font-bold md:max-w-2xl relative inline-block"
          variants={headingVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Animated Highlight */}
          <motion.span
            className="absolute inset-0 bg-yellow-100 h-[20%] top-[25%] z-0"
            variants={highlightVariants}
            initial="hidden"
            animate={controls}
          />
          <span className="relative z-10">The Advantages Of Becoming An Author</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="p-12 font-medium text-md md:text-xl pt-0 text-gray-500 max-w-3xl"
          variants={headingVariants}
          initial="hidden"
          animate={controls}
        >
          Is writing a viable career? In short, yes! But it takes very strong writing skills to
          stand out among the countless aspiring online writers out there. It also takes a lot of
          hard work and dependability, along with a humble attitude. Stephen King Academy is here to
          alleviate the hard work aspect of becoming a writer so you can enjoy the benefits of
          receiving royalties, recognition, and credibility with your stories and your ideas. The
          world deserves to know what you have to share!
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 px-12 pb-12">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center max-w-xs md:w-52 text-center"
            variants={cardVariants}
            initial="hidden"
            animate={controls}
          >
            <FaPenNib className="text-4xl text-violet-700 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Express Your Creativity</h2>
            <p className="text-gray-500">
              Share your unique perspective and stories with the world, leaving a lasting impact.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center md:w-52 max-w-xs text-center"
            variants={cardVariants}
            initial="hidden"
            animate={controls}
          >
            <FaBook className="text-4xl text-violet-700 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Publish Your Vision</h2>
            <p className="text-gray-500">
              Turn your ideas into a professionally crafted book that resonates with readers
              worldwide.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center md:w-52 max-w-xs text-center"
            variants={cardVariants}
            initial="hidden"
            animate={controls}
          >
            <FaAward className="text-4xl text-violet-700 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Gain Recognition</h2>
            <p className="text-gray-500">
              Establish yourself as an expert and earn respect in your field by sharing your knowledge and experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
