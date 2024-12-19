"use client";

import React, { useEffect } from 'react';
import Nav from '../Components/Sections/Nav';
import { font2 } from '../Components/font/poppins';
// import Hire from '../Components/Sections/Hire';
import Testimonials from '../Components/Sections/Testimonials';
import Footer from '../Components/Sections/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutNumber from '../Components/Section-Pages/AboutNumber';

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Nav />
      <div
        className={`${font2.className} bg-gradient-to-br from-cyan-500 to-orange-300 h-[25rem] md:h-[35rem]`}
      >
        <div className="flex flex-col justify-center items-center md:items-start md:justify-start p-12 text-white">
          <h1 data-aos="fade-down" className="text-xl md:text-3xl pt-12">
            Get To Know What We're About
          </h1>
          <h1
            data-aos="fade-up-right"
            className="text-2xl md:text-6xl md:max-w-sm pt-2 font-bold"
          >
            About DB Clone Academy
          </h1>
          <p
            data-aos="fade-up-left"
            className="font-light md:text-left md:text-xl pt-2 text-center max-w-sm"
          >
            We are a one-stop ghostwriting company offering a wide range of
            services to our clientele.
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
      <section
        className={`${font2.className} md:mt-0`}
      >
        <div className="flex flex-col">
          <div
            className="flex-col bg-gradient-to-b from-blue-900 via-blue-700 to-sky-500 p-6 md:p-12 flex justify-center items-center md:justify-start md:items-start"
          >
            <p
              data-aos="fade-down"
              className="text-white font-bold text-3xl md:text-5xl text-center md:text-left md:max-w-4xl"
            >
              Get Started By Hiring Our Services And Taking The First Step To
              Your Ambition
            </p>
            <div className="flex flex-row md:mt-4 space-x-4">
              <button
                data-aos="fade-up-right"
                className="text-black mt-5 bg-white px-4 py-2 rounded-md hover:bg-black hover:text-white duration-300"
              >
                Let's Get Started
              </button>
              <button
                data-aos="fade-up-left"
                className="text-white mt-5 bg-blue-900 px-4 py-2 rounded-md hover:bg-white hover:text-black duration-300"
              >
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default page;
