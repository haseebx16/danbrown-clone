"use client";

import React, { useEffect } from 'react'
import { font2 } from '../font/poppins'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

  return (
    <footer className={`${font2.className} bg-blue-900 text-gray-300 mt-2 `}>
    <div className="container mx-auto flex flex-wrap justify-evenly items-center space-y-6 md:space-y-0">
      {/* Logo Section */}
      <div className="flex flex-col items-start">
      <img src="/footer-logo.png" alt="Logo" className="w-40 h-7 sm:h-10 md:h-28 lg:h-14" style={{ height: '200px', width: "200px" }} />
        
      </div>

      {/* Links Section */}
      <div className="flex flex-wrap justify-between md:space-x-16">
        {/* First Column */}
        <ul className="space-y-2 p-4 md:p-0 text-lg">
          <li data-aos="fade-down" className='hover:text-white'>Home</li>
          <li data-aos="fade-right" className='hover:text-white'>About</li>
          <li data-aos="fade-left" className='hover:text-white'>Pricing</li>
          <li data-aos="fade-up" className='hover:text-white'>Contact</li>
        </ul>

        {/* Second Column */}
        <ul className="space-y-2 p-4 md:p-0 text-lg">
          <li data-aos="fade-down" className='hover:text-white'>Services</li>
          <li data-aos="fade-right" className='hover:text-white'>Book Writing</li>
          <li data-aos="fade-left" className='hover:text-white'>Writing Publication</li>
          <li data-aos="fade-up" className='hover:text-white'>Writing Marketing</li>
        </ul>

        {/* Contact Info */}
        <ul className="space-y-2 text-lg p-4 pt-8 text-center md:text-left md:p-0 max-w-sm">
          <li data-aos="fade-down">Email: support@danbrownacademy.com</li>
          <li data-aos="fade-up">
            Address: Two California Plaza, 350 South Grand Avenue, #4200, Los
            Angeles, CA 90071, United States
          </li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer