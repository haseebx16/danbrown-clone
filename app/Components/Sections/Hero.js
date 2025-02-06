"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import ContactModal from "./ContactModal";
import { font } from "../font/font";

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openLiveChat = () => {
    if (typeof Tawk_API !== "undefined") {
      Tawk_API.toggle(); // This opens the live chat
    } else {
      console.error("Tawk_API is not loaded yet.");
    }
  };

  return (
    <div className={`${timesNewRoman.className} relative text-black`}>
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Image */}
      <img
        src="/hero-books.jpg"
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
        <h1 className="text-md md:text-3xl font-bold uppercase leading-relaxed">
          Manifest Your <br /> Concepts Through Ghost Writing
        </h1>
        <p className="text-3xl md:text-8xl font-bold leading-tight mt-4">
          You Conceive We <br /> Construct Your Book
        </p>
        <p className={`${font.className} mt-6 md:mt-8 text-lg max-w-3xl`}>
          Get rid of the troubles and tediousness of writing your own book. Let
          us ghostwrite your book, and you take the credit for it. Our expert
          team ensures that your vision is brought to life, transforming your
          ideas into a polished, professional book.
        </p>
        <div className="flex space-x-2 mt-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="bg-red-700 font-bold uppercase px-4 py-2 tracking-widest"
            onClick={openModal}
          >
            Let's get started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-black font-bold uppercase px-4 py-2 tracking-widest"
            onClick={openLiveChat} // Trigger live chat opening
          >
            Live Chat
          </motion.button>
        </div>
      </motion.div>

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Hero;
