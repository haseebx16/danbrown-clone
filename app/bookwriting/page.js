"use client";

import React, { useEffect } from 'react'
import MainSection from '../Components/Section-Pages/MainSection'
import { font2 } from '../Components/font/poppins'
import AOS from "aos"
import "aos/dist/aos.css"
import WritingHire from '../Components/Section-Pages/Writing-Hire';
import Testimonials from '../Components/Sections/Testimonials';
import Footer from '../Components/Sections/Footer';
import Significance from '../Components/Section-Pages/Significance';

const page = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, []);

  return (
    <>
    <div className={`${font2.className} overflow-hidden`}>
      <MainSection subHead={"IT IS TIME TO HIRE A GHOSTWRITER"} mainHead={"To Get Your Book Fully Published!"}
        text={"Let’s get you started on your journey to become a successfully published writer!"}
      />
      <div className=''>
          <div className='bg-gray-50 h-[24rem] md:h-[26rem] flex flex-col items-center p-8'>
                <h1 data-aos="fade-down" className='text-3xl md:text-6xl md:max-w-3xl text-center font-bold'>
                  Premium & Exclusive Ghostwriting Services For Your Ideas
                </h1>
                <p data-aos="fade-up" className='text-gray-500 max-w-sm md:max-w-3xl md:text-2xl mt-4 text-center md:text-left'>
                  At Dan Brown Academy, our clients are offered premium and exclusive ghostwriting services for all your ideas, stories, and concepts to come to life. Our team of professional writers are specialized in every genre known to man; we have a writer for every genre! The niche specialty of our writers is what sets them apart from other ghostwriters.
                </p>
          </div>
      </div>
      <div className='bg-white md:flex'>
            <div data-aos="fade-right" className=' flex flex-col md:p-16 md:flex-row justify-start items-center mt-8'>
                <img src='/book1.png' className='bg-gray-50'/>
                <div className='flex flex-col '>
                  <h2 className='text-2xl font-bold mt-2 md:text-left p-2 text-center'>Fiction</h2>
                  <p className='text-gray-500 text-center md:text-left md:max-w-52 p-2'>
                    Our ghostwriters specialize in every genre belonging to the fiction category—from romance, adventure, and thrillers to mystery, crime, and drama!
                  </p>
                </div>
            </div>
            <div data-aos="fade-up-left" className=' flex flex-col md:p-16 md:flex-row justify-start items-center mt-8'>
                <img src='/book2.png' className='bg-gray-50'/>
                <div className='flex flex-col'>
                  <h2 className='text-2xl font-bold md:text-left p-2 mt-2 text-center'>Non-Fiction</h2>
                  <p className='text-gray-500 text-center md:text-left md:max-w-52 p-2'>               
                    Whether it is a travel guide, a history book, or a book containing information about any particular topic in general, our writers will do justice to your non-fiction book!                        
                  </p>
                </div>
            </div>
            <div data-aos="fade-up-right" className=' flex md:p-16 md:flex-row flex-col justify-start items-center mt-8'>
                <img src='/book3.png' className='bg-gray-50'/>
                <div className='flex flex-col'>
                  <h2 className='text-2xl font-bold text-center md:text-left p-2 mt-2'>Autobiography</h2>
                  <p className='text-gray-500 md:text-left md:max-w-52 text-center p-2'>             
                    Do you want to share your life’s story with the rest of the world? Then look no further! Our ghostwriters will do written justice to your life and present it in a captivating story!           
                  </p>
                </div>
            </div>
        </div>
          <div className='bg-gray-50 mt-8 md:flex'>
            <div data-aos="fade-up-left" className=' flex flex-col md:p-16 md:flex-row justify-start items-center'>
                <img src='/book4.png' className='bg-gray-50'/>
                <div className='flex flex-col'>
                  <h2 className='text-2xl md:text-left text-center p-2 font-bold mt-2'>Memoir</h2>
                  <p className='text-gray-500 md:text-left md:max-w-52 text-center p-2'>                           
                      A memoir is a collection of memories from a person’s life. If you’d like to have a memoir written for you or for someone else, then our ghostwriters will take care of that for you.                                  
                  </p>
                </div>
            </div>
            <div data-aos="fade-up-right" className=' flex flex-col md:p-16 md:flex-row justify-start items-center'>
                <img src='/book5.png' className='bg-gray-50'/>
                <div className='flex flex-col'>
                  <h2 className='text-2xl md:text-left p-2 text-center font-bold mt-2'>Self-Help</h2>
                  <p className='text-gray-500 md:text-left md:max-w-52 text-center p-2'>                           
                  Do you have an idea that can change the lives of others for the better? A life hack, perhaps? Give your ideas to us and let our ghostwriters write the perfect self-help book!                                  
                  </p>
                </div>
            </div>
            <div data-aos="fade-up-right" className=' flex flex-col  md:p-16 md:flex-row justify-start items-center'>
                <img src='/book6.png' className='bg-gray-50'/>
                <div className='flex flex-col'>
                  <h2 className='text-2xl md:text-left p-2 text-center font-bold mt-2'>Children's Book</h2>
                  <p className='text-gray-500 md:text-left md:max-w-52 text-center p-2'>                           
                  Our ghostwriters are also skilled in writing a children’s novel/book be it fiction or a non-fiction piece of informative text for the young ones.                                  
                  </p>
                </div>
            </div>
          </div>
          <section className={`${font2.className} md:mt-0 mt-24`}>
                  <div className='flex flex-col'>
                      <div className=' flex-col bg-gradient-to-b from-blue-900 via-blue-700 to-sky-500 p-6 md:p-12 flex justify-center items-center md:justify-start md:items-start'>
                          <p data-aos="fade-down" className='text-white font-bold text-3xl md:text-5xl text-center md:text-left md:max-w-4xl'>Get Started By Hiring Our Services And Taking The First Step To Your Ambition</p>
                          <div className='flex flex-row md:mt-4 space-x-4'>
                              <button data-aos="fade-up-right" className='text-black mt-5 bg-white px-4 py-2 rounded-md hover:bg-black hover:text-white duration-300'>Let's Get Started</button>
                              <button data-aos="fade-up-left" className='text-white mt-5 bg-blue-900 px-4 py-2 rounded-md hover:bg-white hover:text-black duration-300'>Live Chat</button>
                          </div>
                      </div>
                  </div>
          </section>
          <Significance/>
          <WritingHire head={"Why you should hire a ghostwriter for your book"} 
            text1={"Hiring a ghostwriter doesn’t mean you aren’t part of the production process of your content. In today’s fast-paced world of tight schedules and even tighter deadlines, hiring a ghostwriter can save you the trouble (and the time) of getting your work done efficiently and reliably. A ghostwriter can not only save you time and the work, but they are also a good way to enhance your content as they can suggest ideas or take creative liberties with your content."} 
            text2={"At Dan Brown Academy, our ghostwriters take a dedicated ownership of your project to ensure that they do the content complete justice. Of course, the book is still yours by right and legality, but our ghostwriters will put their heart and soul into your book to ensure it surpasses your expectations."}
            picsrc={"/hire.png"}
            bg={"violet-950"}
          />
          <Testimonials/>
          
    </div>
    <Footer/>
    </>
  )
}

export default page