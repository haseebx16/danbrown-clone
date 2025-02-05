"use client";

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import localFont from "next/font/local";

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const Footerr = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

  return (
    <footer className={`${timesNewRoman.className} bg-black text-white mt-2 `}>
    <div className="container mx-auto flex flex-wrap justify-evenly items-center space-y-6 md:space-y-0">
      <div className="flex flex-col items-start">
      <img src="/logo.png" alt="Logo" className="w-40 h-7 sm:h-10 md:h-28 lg:h-14" style={{ height: '200px', width: "200px" }} />
        
      </div>
      <div className="flex flex-wrap justify-between md:space-x-16">
        <ul className="space-y-2 p-4 md:p-0 text-lg">
          <Link href={"/privacypolicy"}><li data-aos="fade-down" className='hover:text-white hover:cursor-pointer'>Privacy Policy</li></Link>
        </ul>
        <ul className="space-y-2 text-lg p-4 pt-8 text-center md:text-left md:p-0 max-w-sm">
          <a href='mailto:support@stephenkingacademy.com'><li data-aos="fade-down">Email: support@stephenkingacademy.com</li></a>
          <a href='tel:(310) 564-9107'><li data-aos="fade-down">Phone: (310) 564-9107</li></a>
          <li data-aos="fade-up">
            Address: Two California Plaza, 350 South Grand Avenue, #4200, Los
            Angeles, CA 90071, United States.
          </li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footerr