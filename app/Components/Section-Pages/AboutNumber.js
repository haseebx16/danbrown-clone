"use client";

import React, { useEffect } from 'react'
import { font2 } from '../font/poppins'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutNumber = () => {

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);

  return (
    <section className={`${font2.className} bg-gradient-to-br from-cyan-900 to-sky-900 p-12 `}>
        <div className='flex justify-center items-center'>
            <div className='text-white flex md:flex-row flex-col space-y-8 md:space-y-0 justify-center items-center md:space-x-28'>
                <h1 data-aos="fade-right" className='text-2xl font-bold'><span className='text-yellow-300'>500+</span> Published Books</h1>
                <h1 data-aos="fade-right" className='text-2xl font-bold'><span className='text-yellow-300'>10+</span> NYT Best Sellers</h1>
                <h1 data-aos="fade-right" className='text-2xl font-bold'><span className='text-yellow-300'>15+</span> National Best Sellers</h1>
                <h1 data-aos="fade-right" className='text-2xl font-bold'><span className='text-yellow-300'>BBC</span> Featured Company</h1>
            </div>
        </div>
    </section>
  )
}

export default AboutNumber