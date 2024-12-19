"use client";

import React from 'react';
import { font2 } from './font/poppins';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className={`${font2.className} relative bg-gray-100  text-black pt-16 pb-12`}>
      {/* Image Section */}
      <div className="md:flex items-center overflow-hidden">
        {/* Left: Image */}
        <motion.div
          className="md:w-1/2 px-4 overflow-hidden"
          initial={{ x: -100, opacity: 0 }} // Initial animation state
          animate={{ x: 0, opacity: 1 }} // Final animation state
          transition={{ duration: 1.0, ease: 'easeInOut' }} // Animation properties
        >
          <img
            src="/about-img.png"  // Replace with the actual image path
            alt="About Image"
            className="rounded-lg w-full"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="md:w-1/2 px-4 mt-8 md:mt-0 overflow-hidden"
          initial={{ x: 100, opacity: 0 }} // Initial animation state
          animate={{ x: 0, opacity: 1 }} // Final animation state
          transition={{ duration: 1, ease: 'easeInOut' }} // Animation properties
        >
          <h2 className="md:text-6xl text-4xl font-extrabold leading-tight">Welcoming You to The Wonderful World of Becoming a Published Author</h2>
          <p className="mt-4 text-lg text-gray-500">
            Dan Brown Academy welcomes you, our esteemed potential client, to the wonderful and magnificent world of ghostwriting! Ghostwriting is a professional service offered by talented and creative professional writers who are willing to use their expertise with the written word to formulate your ideas and concepts into a worded reality.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            It’s a great service to avail, especially for those too busy to write their own books but have concepts, ideas, or personal experiences to share with the rest of the world (such as celebrities or entrepreneurs). Ghostwriting is also really useful to aspiring writers suffering from writer’s block or those who have stories to tell but aren’t confident in their ability to write it down.
          </p>
          <div className="flex space-x-4">
            <button className="bg-violet-700 mt-8 text-white font-bold uppercase px-4 py-2 tracking-widest">Contact Our Expert!</button>
            <button className="bg-sky-900 mt-8 text-white font-bold uppercase px-4 py-2 tracking-widest">Live Chat</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
