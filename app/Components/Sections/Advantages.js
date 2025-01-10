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
    <div className={`${timesNewRoman.className} relative text-black`}>
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Image */}
      <img
        src="/advantages-bg.jpg"
        className="w-full h-[30rem] md:h-[35rem] object-cover"
        alt="Hero Background"
      />

      {/* Text */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
      >
        <h1 className="text-xl md:text-5xl pt-6 font-bold uppercase leading-relaxed">
          The Advantages Of<br/> Becoming An Author
        </h1>
        
        <p className="mt-6 md:mt-4 text-justify max-w-2xl whitespace-wrap text-lg md:text-xl">
        Is writing a viable career? In short, yes! But it takes very strong writing skills to stand out among the countless aspiring online writers out there. It also takes a lot of hard work and dependability, along with a humble attitude. Stephen King Academy is here to alleviate the hard work aspect of becoming a writer so you can enjoy the benefits of receiving royalties, recognition, and credibility with your stories and your ideas. The world deserves to know what you have to share!
        </p>
        <div className="">
          <button className="px-12 py-2 bg-purple-700 text-xl mt-8 hover:bg-white hover:text-black duration-300 text-white font-bold">Let's Get Started</button>
        </div>
              </motion.div>
    </div>
  );
};

export default Advantages;
