"use client";

import React, { useEffect } from 'react';
import { font2 } from '../font/poppins';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutBrilliant = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

  return (
    <div className={` ${font2.className} bg-white py-10 relative px-4 sm:px-6 lg:px-8`}>
      <div className="text-center">
        <h2 data-aos="fade-right" className="text-3xl md:text-6xl font-bold text-gray-900 sm:text-4xl">
          <span
            className="absolute inset-0 bg-yellow-100 h-[1%] md:left-[25%] md:h-[5%] top-[4%] md:top-[8%] z-0"
            style={{ width: '50%' }}
          ></span>
          <span className="relative z-10">
            Our Brilliant Is <br /> Seen Through Our Work
          </span>
        </h2>
      </div>
      <div className="mt-10 flex flex-col md:flex-row items-center md:items-start md:space-x-10">
        {/* Left Section (Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 md:w-1/2">
          <div data-aos="fade-right" className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-4xl font-bold text-indigo-600">10+</p>
            <p className="mt-2 text-gray-700">Years of Experience</p>
          </div>
          <div data-aos="fade-left" className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-4xl font-bold text-green-600">1000+</p>
            <p className="mt-2 text-gray-700">Books Written</p>
          </div>
          <div data-aos="fade-right" className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-4xl font-bold text-purple-600">100+</p>
            <p className="mt-2 text-gray-700">Internationally Acclaimed Books</p>
          </div>
          <div data-aos="fade-left" className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-4xl font-bold text-blue-600">500+</p>
            <p className="mt-2 text-gray-700">Native English Writers</p>
          </div>
        </div>
        {/* Right Section (Content) */}
        <div data-aos="fade-up" className="mt-10 md:mt-0 md:w-1/2">
          <p className="text-lg text-gray-700">
            We don’t mean to brag about how good we are at what we do but, hey,
            we deserve to say a little something. With more than a decade of
            being in the ghostwriting industry, Dan Brown Academy is weathered
            and experienced to deal with projects of any kind. We’ve helped
            materialize our clients’ concepts, ideas, and stories into a fully
            written book, and we’ve assisted our clients with their
            already-written manuscripts via meticulous editing and proofreading.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            With more than a thousand books written, more than a hundred of
            which went on to become internationally acclaimed books, our team
            of more than five hundred native English writers are here to
            provide you with an exceptional ghostwriting experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBrilliant;
