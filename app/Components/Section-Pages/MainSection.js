"use client";

import React, { useEffect } from 'react'
import { font2 } from '../font/poppins';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from '../Sections/Nav';
import AboutNumber from './AboutNumber';

const MainSection = ({ subHead, mainHead, text }) => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

  return (
    <>
        <Nav />
      <div
        className={`${font2.className} bg-gradient-to-br from-cyan-500 to-orange-300 h-[25rem] md:h-[35rem]`}
      >
        <div className="flex flex-col justify-center items-center md:items-start md:justify-start p-12 text-white">
          <h1 data-aos="fade-down" className="text-xl md:text-3xl pt-12">
            {subHead}
          </h1>
          <h1
            data-aos="fade-up-right"
            className="text-2xl md:text-6xl md:max-w-sm pt-2 font-bold"
          >
            {mainHead}
          </h1>
          <p
            data-aos="fade-up-left"
            className="font-light md:text-left md:text-xl pt-2 text-center max-w-sm"
          >
            {text}
          </p>
          <div data-aos="fade-up" className="space-x-2">
            <button className="bg-purple-700 px-4 py-2 mt-4 rounded-md text-white">
              Let's Get Started
            </button>
            <button className="bg-sky-700 px-4 py-2 mt-4 rounded-md text-white">
              Live Chat
            </button>
          </div>
        </div>
      </div>
      <AboutNumber/>
    </>
  )
}

export default MainSection