"use client";

import React, { useEffect } from 'react'
import { font2 } from '../font/poppins'
import AOS from 'aos';
import 'aos/dist/aos.css';
import localFont from "next/font/local";

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const Hire = () => {

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);

  return (
    <section className={`${timesNewRoman.className} md:mt-0 mt-24`}>
        <div className='flex flex-col'>
            <div className=' flex-col bg-gradient-to-b from-red-800 via-red-950 to-black p-6 md:p-12 flex justify-center items-center md:justify-start md:items-start'>
                <p data-aos="fade-down" className='text-white font-bold text-3xl md:text-5xl text-center md:text-left md:max-w-4xl'>Get Started By Hiring Our Services And Taking The First Step To Your Ambition</p>
                <div className='flex flex-row md:mt-4 space-x-4'>
                    <button data-aos="fade-up-right" className='text-black mt-5 bg-white px-4 py-2 rounded-md hover:bg-black hover:text-white duration-300'>Let's Get Started</button>
                    <button data-aos="fade-up-left" className='text-white mt-5 bg-black px-4 py-2 rounded-md hover:bg-white hover:text-black duration-300'>Live Chat</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hire