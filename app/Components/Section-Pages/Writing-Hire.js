"use client";

import React from 'react';
import { font2 } from '../font/poppins';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import localFont from "next/font/local";

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const WritingHire = ({ picsrc ,head, text1, text2,bg }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    });

  return (
    <div
      className={`${timesNewRoman.className} h-auto md:h-[39rem] bg-gradient-to-b from-red-700 via-red-900 to-black`}
    >
      <div className="flex flex-col md:flex-row p-4 justify-center items-center">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={picsrc}
            alt="Hire Ghostwriter"
            data-aos="flip-right"
            className="w-96 h-[21rem] mt-8 md:w-[35rem] md:h-[30rem]"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 md:pl-8">
          <h1 data-aos="fade-down" className="text-3xl md:text-5xl text-white font-bold md:pt-4">
            {head}
          </h1>
          <p data-aos="fade-up-right" className="text-white md:text-lg mt-4">
            {text1}
          </p>
          <p data-aos="fade-up" className="text-white md:text-lg mt-4">
            {text2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WritingHire;
