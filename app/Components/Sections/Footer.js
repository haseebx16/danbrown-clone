"use client";

import React, { useEffect } from 'react'
import { font2 } from '../font/poppins'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import localFont from "next/font/local";

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const Footer = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

  return (
    <footer className={`${timesNewRoman.className} bg-black text-white mt-2 `}>
    <div className="container mx-auto flex flex-wrap justify-evenly items-center space-y-6 md:space-y-0">
      {/* Logo Section */}
      <div className="flex flex-col items-start">
      <img src="/logo.png" alt="Logo" className="w-40 h-7 sm:h-10 md:h-28 lg:h-14" style={{ height: '200px', width: "200px" }} />
        
      </div>

      {/* Links Section */}
      <div className="flex flex-wrap justify-between md:space-x-16">
        {/* First Column */}
        <ul className="space-y-2 p-4 md:p-0 text-lg">
          <Link href={"/"}><li data-aos="fade-down" className='hover:text-white hover:cursor-pointer'>Home</li></Link>
          <Link href={"/about"}><li data-aos="fade-right" className='hover:text-white hover:cursor-pointer'>About</li></Link>
          <Link href={"/pricing"}><li data-aos="fade-left" className='hover:text-white hover:cursor-pointer'>Pricing</li></Link>
          <Link href={"/contact"}><li data-aos="fade-up" className='hover:text-white hover:cursor-pointer'>Contact</li></Link>
        </ul>

        {/* Second Column */}
        <ul className="space-y-2 p-4 md:p-0 text-lg">
          <Link href={"/services"}><li data-aos="fade-down" className='hover:text-white hover:cursor-pointer'>Services</li></Link>
          <Link href={"/bookwriting"}><li data-aos="fade-right" className='hover:text-white hover:cursor-pointer'>Book Writing</li></Link>
          <Link href={"/publication"}><li data-aos="fade-left" className='hover:text-white hover:cursor-pointer'>Writing Publication</li></Link>
          <Link href={"/marketing"}><li data-aos="fade-up" className='hover:text-white hover:cursor-pointer'>Writing Marketing</li></Link>
        </ul>

        {/* Contact Info */}
        <ul className="space-y-2 text-lg p-4 pt-8 text-center md:text-left md:p-0 max-w-sm">
          <li data-aos="fade-down">Email: support@stephenkingacademy.com</li>
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