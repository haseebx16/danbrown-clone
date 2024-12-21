"use client";

import React, { useEffect } from 'react'
import MainSection from '../Components/Section-Pages/MainSection'
import { font2 } from '../Components/font/poppins'
import AOS from 'aos';
import "aos/dist/aos.css";
// import Hire from '../Components/Sections/Hire';
import Testimonials from '../Components/Sections/Testimonials';
import Footer from '../Components/Sections/Footer';

const page = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  return (
    <>
    <div className={` ${font2.className} relative overflow-hidden`}>
      <MainSection subHead="SAVE YOUR TIME AND EFFORT BY GOING FOR" mainHead="Our Ghostwriting Services
      " text="It’s time for you to get your job done efficiently and professionally by hiring our ghostwriting services."/>
      <div className={`${font2.className} flex flex-col justify-center relative items-center`}>
        <h1 data-aos="fade-right" className='text-center text-3xl md:text-6xl p-12 font-bold'>
        <span
            className="absolute inset-0 bg-yellow-100 h-[1%] md:h-[1%] top-[2%] md:top-[3%] z-0"
            style={{ width: '50%' }}
          ></span>
                <span className='relative z-10'>You Get Only the Best of the Best 
                With Dan Brown Academy’s Ghostwriting, Editing, 
               Publishing, And Marketing Services</span>
        </h1>
        <div className='flex flex-col md:space-x-8 md:flex-row justify-center items-center'>
          <img data-aos="fade-right" src='/ag1.png' className='w-96 h-80' />
          <div className='flex flex-col justify-start items-start p-2'>
            <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Professional <span className='text-blue-500'>Ghostwriting</span> Services</h1>
            <p data-aos="fade-up" className='text-gray-500 md:max-w-xl mt-4 text-left'>
              With Dan Brown Academy, you get only the most Dan Brown Academy service on the face of the earth! Our ghostwriters are talented writers and each has their own niche that they specialize in, covering all genres and all kinds of books.
            </p>
            <div className='space-y-2 mt-4 text-left'>
              <p data-aos="fade-up-right">&#x2022;&nbsp;Proper planning & guidance</p>
              <p data-aos="fade-up-left">&#x2022;&nbsp;Written by Qualified Ghostwriting Professionals</p>
              <p data-aos="fade-up-right">&#x2022;&nbsp;100% unique and grammatically accurate content verified</p>
              <p data-aos="fade-up-left">&#x2022;&nbsp;In-depth discussions throughout the process</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row-reverse md:space-x-8 justify-center items-center mt-8'>
          <img src='/ag3.png' className='w-96 h-80'/>
          <div className='flex flex-col justify-start items-start p-2'>
              <h1 data-aos="fade-right" className='text-3xl md:text-5xl mt-6'>Book <span className='text-blue-500'>Cover</span> Designs</h1>
              <p data-aos="fade-left" className='text-gray-500 md:max-w-xl mt-4'>
                With Dan Brown Academy, you get only the most Dan Brown Academy service on the face of the earth! Our ghostwriters are talented writers and each has their own niche that they specialize in, covering all genres and all kinds of books.
              </p>
              <div className='space-y-2 mt-4'>
                <p data-aos="fade-up-right">&#x2022;&nbsp;Proper planning & guidance</p>
                <p data-aos="fade-up-left">&#x2022;&nbsp;Written by Qualified Ghostwriting Professionals</p>
                <p data-aos="fade-up-right">&#x2022;&nbsp;100% unique and grammatically accurate content verified</p>
                <p data-aos="fade-up-left">&#x2022;&nbsp;In-depth discussions throughout the process</p>
              </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:space-x-8 justify-center items-center mt-8'>
          <img data-aos="fade-right" src='/ag2.png' className='w-96 h-80'/>
          <div className='flex flex-col justify-start items-start p-2'>
              <h1 data-aos="fade-left"  className='text-3xl md:max-w-lg md:text-5xl mt-6'>Book  <span className='text-blue-500'>Publishing</span> Services</h1>
              <p data-aos="fade-down" className='text-gray-500 md:max-w-xl mt-4'>
                With Dan Brown Academy, you get only the most Dan Brown Academy service on the face of the earth! Our ghostwriters are talented writers and each has their own niche that they specialize in, covering all genres and all kinds of books.
              </p>
              <div className='space-y-2 mt-4'>
                <p data-aos="fade-up-right">&#x2022;&nbsp;Proper planning & guidance</p>
                <p data-aos="fade-up-left">&#x2022;&nbsp;Written by Qualified Ghostwriting Professionals</p>
                <p data-aos="fade-up-right">&#x2022;&nbsp;100% unique and grammatically accurate content verified</p>
                <p data-aos="fade-up-left">&#x2022;&nbsp;In-depth discussions throughout the process</p>
              </div>
          </div>
        </div>
      </div>
      <section
              className={`${font2.className} md:mt-8 overflow-hidden`}
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
      <Testimonials/>
    </div>
      <Footer/>

      </>
  )
}

export default page