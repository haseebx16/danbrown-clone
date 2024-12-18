"use client";

import React, { useEffect } from 'react';
import { font2 } from './font/poppins';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Run animation only once when scrolled into view
    });
  }, []);

  return (
    <section className={`${font2.className} bg-gray-100 min-h-screen`}>
      <div className='flex flex-col md:justify-center justify-start items-start md:p-12 pt-4 pl-3 md:items-center'>
        <h1 className='md:text-5xl text-2xl font-bold text-left md:text-center'>
          A wide range of ghostwriting services For you to avail and becoming a published author!
        </h1>
        <p className='text-gray-500 md:pt-6 pt-3 pb-8 md:pb-0 md:text-center text-left max-w-4xl'>
          At Dan Brown Academy, our clients can avail a wide range of ghostwriting services to get one step closer to becoming a successfully published author. We are sure you will find our range of services to be comprehensive.
        </p>
      </div>
      <div className='md:flex'>
        <div
          className='md:w-1/2'
          data-aos='flip-right'
        >
          <img
            src='/img-ser.jpg'
            className='md:block hidden w-[40rem] h-[25rem]'
            alt="Ghostwriting Services"
          />
          <div className='py-8 md:w-[37rem] w-screen h-[12rem] md:ml-10 px-8 bg-violet-800 text-white'>
            <p className='text-3xl'>Book Editing</p>
            <p className='text-md mt-2'>
              We have a team of editors who are going to scrutinize your manuscript for errors while also offering stylistic changes to the overall tone and readability of your book.
            </p>
          </div>
        </div>

        <div
          className='md:w-1/2 md:mt-0'
          data-aos='fade-right' // AOS animation for flying in from below
        >
          <div className='py-4 md:py-8 md:w-[37rem] w-screen h-[10rem] px-8 bg-blue-800 text-white'>
            <p className='text-3xl'>Ghost Writing</p>
            <p className='text-md mt-2'>
              We have a team of professional writers, each specializing in a particular niche, who will take your idea/story and turn it into a written masterpiece!
            </p>
          </div>
          <div className='py-8 px-8 md:w-[37rem] w-screen h-[10rem] bg-blue-900 text-white'>
            <p className='text-3xl'>Publication & Printing</p>
            <p className='text-md mt-2'>
              Forget about the troubles and hassles of publishing your book through a publishing agency. Let us take care of that for you too!
            </p>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div
              className='py-8 md:h-[17rem] h-[13rem] md:w-[19rem] w-screen px-8 bg-cyan-500 text-white'
              data-aos='fade-left' // AOS animation for flying in from below
            >
              <p className='text-3xl'>Book Marketing</p>
              <p className='text-md mt-2'>
                You thought it was over? After we write, edit, format, AND publish your book, we’re going to help you promote, distribute, and market it! This way, we’ll ensure your book gets the sales it deserves.
              </p>
            </div>
            <div
              className='py-8 md:h-[17rem] h-[15rem] md:w-[18rem] w-screen px-8 bg-cyan-600 text-white'
              data-aos='fade-up-right' // AOS animation for flying in from below
            >
              <p className='md:text-2xl text-3xl'>Formatting & Proofreading</p>
              <p className='md:text-sm text-md mt-2'>
                Our team of dedicated proofreaders gives your book one last look (after the writing and editing phase) to fix any overlooked technical errors while also formatting the book to industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
