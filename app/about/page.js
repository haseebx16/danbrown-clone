"use client";

import React, { useEffect } from 'react';
import Nav from '../Components/Sections/Nav';
import { font2 } from '../Components/font/poppins';
import Testimonials from '../Components/Sections/Testimonials';
import Footer from '../Components/Sections/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutNumber from '../Components/Section-Pages/AboutNumber';
import AboutBrilliant from '../Components/Section-Pages/AboutBrilliant';
import AboutServices from '../Components/Section-Pages/AboutServices';
import MainSection from '../Components/Section-Pages/MainSection';
import localFont from "next/font/local";

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <MainSection subHead="Get To Know What We're About" mainHead="About Stephen King Academy Academy" text="We are a one-stop ghostwriting company offering a wide range of services to our clientele."/>
      <AboutBrilliant/>
      <AboutServices/>
      <section
        className={`${timesNewRoman.className} md:mt-0`}
      >
        <div className="flex flex-col">
          <div
            className="flex-col bg-gradient-to-b from-red-700 via-red-900 to-black p-6 md:p-12 flex justify-center items-center md:justify-start md:items-start"
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
                className="text-white mt-5 bg-black px-4 py-2 rounded-md hover:bg-white hover:text-black duration-300"
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
