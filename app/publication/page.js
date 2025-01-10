"use client";

import React from 'react'
import { useEffect } from 'react';
import { font2 } from '../Components/font/poppins'
import MainSection from '../Components/Section-Pages/MainSection'
import AOS from "aos"
import "aos/dist/aos.css"
import Significance from '../Components/Section-Pages/Significance';
import WritingHire from '../Components/Section-Pages/Writing-Hire';
import Testimonials from '../Components/Sections/Testimonials';
import Footer from '../Components/Sections/Footer';
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
    })
  }, []);

  return (
    <>
    <div className={`${timesNewRoman.className} bg-gray-100 overflow-hidden`}>
        <MainSection subHead={"INCONVENIENCE-FREE ONLINE"} mainHead={"Publication & Printing Services for Your Book"}
            text={""}
        />
        <div className='flex flex-col p-4 md:p-16 justify-center items-center md:flex-row md:justify-between'>
          <div className='flex flex-col md:w-1/2'>
            <p data-aos="fade-right" className='font-normal md:max-w-xl text-left text-gray-500'>
              At Stephen King Academy, we offer our clients book publication services, both for print and online, and distribution and promotion services. Our publishing service is not limited to clients who have hired our ghostwriting/editing services. Anyone wanting to get published can do so through us!
            </p>
            <h1 data-aos="fade-up" className='text-3xl md:text-5xl max-w-md font-bold mt-4'>Sell Your Content With YOUR NAME Following</h1>
            <p data-aos="fade-down" className='font-normal text-lg text-left mt-4 text-gray-500'>BOOK PUBLISHING SERVICES WITHOUT STRUGGLE AND HASSLE</p>
            <p data-aos="fade-up" className='font-bold text-xl md:mt-16 mt-4 text-left text-red-600 '>BOOK PUBLISHING SERVICES INCLUDE:</p>
            <div data-aos="fade-left">
              <p className='font-bold text-md text-left text-red-600 mt-4'>&#8226;&nbsp;<span className='text-gray-500'>Browsing the top most reliable options</span></p>
              <p className='font-bold text-md text-left text-red-600'>&#8226;&nbsp;<span className='text-gray-500'>Providing Consultancy</span></p>
              <p className='font-bold text-md text-left text-red-600'>&#8226;&nbsp;<span className='text-gray-500'>Designing a cover for your book</span></p>
              <p className='font-bold text-md text-left text-red-600'>&#8226;&nbsp;<span className='text-gray-500'>Proofreading, Typesetting, Formatting including eBook</span></p>
              <p className='font-bold text-md text-left text-red-600'>&#8226;&nbsp;<span className='text-gray-500'>ISBN acquisition</span></p>
              <p className='font-bold text-md text-left text-red-600'>&#8226;&nbsp;<span className='text-gray-500'>Copyright </span></p>
              <p className='font-bold text-md text-left text-red-600'>&#8226;&nbsp;<span className='text-gray-500'>EBOOK CREATION AND DISTRIBUTION</span></p>
              <p className='font-bold text-md text-left text-red-600'>&#8226;&nbsp;<span className='text-gray-500'>PAPERBACK DISTRIBUTIONMARKETING CONSULTATION</span></p>
              <p className='font-bold text-md text-left text-red-600'>&#8226;&nbsp;<span className='text-gray-500'>INTERIOR LAYOUT </span></p>
              <p className='font-bold text-md text-left text-red-600'>&#8226;&nbsp;<span className='text-gray-500'>OPTIONAL HARDCOVER PRINTING & MANAGEMENT</span></p>
              <p className='font-bold text-md text-left text-red-600'>&#8226;&nbsp;<span className='text-gray-500'>AUTHOR MARKETING MATERIALS</span></p>
              <p className='font-bold text-md text-left text-red-600'>&#8226;&nbsp;<span className='text-gray-500'>FULL EVALUATION EDITPUBLISHING IMPRINT CREATION</span></p>
            </div>
          </div>
          <div data-aos="flip-right" className='md:w-1/2 flex justify-center'>
            <img src='/sell1.png' alt='Sell Your Content' className='mt-4 md:mt-12 md:w-full' />
          </div>
        </div>
        <section className={`${font2.className} md:mt-0 mt-24`}>
                <div className='flex flex-col'>
                    <div className=' flex-col bg-gradient-to-b from-red-700 via-red-900 to-black p-6 md:p-12 flex justify-center items-center md:justify-start md:items-start'>
                        <p data-aos="fade-down" className='text-white font-bold text-3xl md:text-5xl text-center md:text-left md:max-w-4xl'>Get Started By Hiring Our Services And Taking The First Step To Your Ambition</p>
                        <div className='flex flex-row md:mt-4 space-x-4'>
                            <button data-aos="fade-up-right" className='text-black mt-5 bg-white px-4 py-2 rounded-md hover:bg-black hover:text-white duration-300'>Let's Get Started</button>
                            <button data-aos="fade-up-left" className='text-white mt-5 bg-black px-4 py-2 rounded-md hover:bg-white hover:text-black duration-300'>Live Chat</button>
                        </div>
                    </div>
                </div>
            </section>
            <Significance/>
            <WritingHire picsrc={"/hire2.png"} head={"Custom Book Printing Now Offering Exclusive Print-on-Demand Services!"}
              text1={"Only print the number of books you need. With print-on-demand, you can not only keep track of the number of copies you want to publish, but also your investment in publishing. If you want to focus on the design of your book and get professional editing, then you can optimize your costs by printing fewer copies."}
              text2={"Among various other publication services, this is one particular subservice that is becoming really popular with those that want to publish traditionally minus the huge costs of bulk printing."}
              bg={"violet-950"}
            />
            <Testimonials/>
    </div>
    <Footer/>
    </>
  );
};

export default page;