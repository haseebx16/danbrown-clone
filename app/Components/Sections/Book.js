"use client";

import React from 'react';
import { useEffect } from 'react';
import { font2 } from '../font/poppins';
import AOS from 'aos';
import 'aos/dist/aos.css';
import localFont from "next/font/local";
import { font } from '../font/font';

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const Book = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

  return (
    <section className={`${timesNewRoman.className} bg-gray-100 h-screen md:h-[35rem] relative`}>
        <div className="absolute top-0 left-0 mt-8 h-72 w-2 bg-red-700 md:block hidden" />
      <div className='md:flex'>
        <div className='md:w-1/2 pt-8 md:pl-8 pl-4'>
          <h1 data-aos="fade-right" className='md:text-5xl text-3xl font-bold relative'>
            
            <span className='relative text-black z-10'>
              It’s time to get started Sharing your ideas with The World
            </span>
          </h1>
          <p data-aos="fade-left" className={`${font.className} text-gray-500 md:text-xl md:mt-4`}>There are a lot of people who have so many stories to tell but never really get around to telling them because they can’t write. Then there’s people who have a lot to share but aren’t able to because they lack the time to write. Let us take care of the writing hassle for you!</p>
          <div className='flex flex-col md:flex-row'>
            <p data-aos="fade-up-right" className='text-red-700 font-extralight mt-6 text-3xl'>How To Make Your Book The Best Book There Is:</p>
            <div className={` ${font.className} flex flex-col`}>
                <p data-aos="fade-up-left" className='mt-4 text-gray-800'>&#8226; Being Published Online</p> 
                <p data-aos="fade-up-right" className='text-gray-800'>&#8226; An Eye-Catching Design</p> 
                <p data-aos="fade-up-left" className='text-gray-800'>&#8226; Fast And Affordable Self-Publishing</p> 
                <p data-aos="fade-up-right" className='text-gray-800'>&#8226; Additions, Revisions and Re-Editions !</p> 
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-up" className='md:w-1/2 flex items-center justify-center'>
            <img src='/book.png' className='mt-10 h-96 w-auto'/>
        </div>
      </div>
    </section>
  );
};

export default Book;
