"use client";

import React from 'react'
import { font2 } from './font/poppins'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Numbers = () => {

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);

  return (
    <section className={`${font2.className} mt-8 mb-8`}>
      <div className='flex flex-col md:flex-row items-center md:space-x-4 justify-center'>
        <div data-aos="fade-right" className='bg-gray-100 flex flex-col md:items-start md:justify-start md:p-6 items-center shadow-purple-500 shadow-sm justify-center rounded-md md:w-80 w-screen h-32 md:h-40'>
            <h1 className='text-4xl font-bold md:text-6xl whitespace-nowrap text-gray-800'>35K+</h1>
            <p className='text-purple-500 text-lg md:text-xl whitespace-nowrap font-medium'>Completed Projects</p>
            <p className='text-gray-800 text-lg md:text-xl whitespace-nowrap font-medium'>Our Company Has Worked</p>
        </div>
        <div data-aos="fade-up" className='bg-gray-100 flex flex-col mt-3 md:mt-0 md:items-start md:justify-start md:p-6 items-center shadow-purple-500 shadow-sm justify-center rounded-md md:w-80 w-screen h-32 md:h-40'>
            <h1 className='text-4xl font-bold md:text-6xl whitespace-nowrap text-gray-800'>10000+</h1>
            <p className='text-purple-500 text-lg md:text-xl whitespace-nowrap font-medium'>Hours Spent</p>
            <p className='text-gray-800 text-lg md:text-xl whitespace-nowrap font-medium'>Hours Spent Working</p>
        </div>
        <div data-aos="fade-left" className='bg-gray-100 flex flex-col mt-3 md:items-start md:justify-start md:p-6 md:mt-0 items-center shadow-purple-500 shadow-sm justify-center rounded-md md:w-80 w-screen h-32 md:h-40'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-800'>500+</h1>
            <p className='text-purple-500 text-lg md:text-xl font-medium'>Happy Clients</p>
            <p className='text-gray-800 text-lg md:text-xl font-medium'>Our Company's Happy Clients</p>
        </div>
      </div>
    </section>
  )
}

export default Numbers