"use client";

import React, { useEffect } from 'react'
import MainSection from '../Components/Section-Pages/MainSection'
import { font2 } from '../Components/font/poppins'
import AOS from 'aos';
import "aos/dist/aos.css"
import WritingHire from '../Components/Section-Pages/Writing-Hire';
import Testimonials from '../Components/Sections/Testimonials';
import Footer from '../Components/Sections/Footer';

const page = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    }, []);

  return (
    <>
    <div className={`${font2.className} min-h-screen overflow-hidden`}>
        <MainSection subHead={"ROYALTIES AND RECOGNITION WITH"} mainHead={"Our Online Book Marketing"} text={"Our book marketing service will ensure your book is distributed and promoted properly so you can maximize your royalties and gain more recognition."}/>
        <div className={`${font2.className} flex bg-gray-50 flex-col overflow-hidden  items-center`}>
            <h1 data-aos="fade-down" className='text-3xl md:text-6xl font-bold pt-12 text-center'>Our Book Marketing Services</h1>
            <p data-aos="fade-up" className='text-gray-500 max-w-md md:text-xl md:mt-2 text-center'>At Dan Brown Academy, you can avail a variety of marketing services for your book. We offer six different types of marketing services as found below.</p>
        </div>
        
        <div className='bg-gray-50 md:flex'>
            <div data-aos="fade-right" className=' flex flex-col md:p-16 md:flex-row justify-start items-center mt-8'>
                <img src='/sb1.jpg' className='bg-gray-50'/>
                <div className='flex flex-col '>
                  <h2 className='text-2xl font-bold mt-2 md:text-left p-2 text-center'>Book Cover</h2>
                  <p className='text-gray-500 text-center md:text-left md:max-w-52 p-2'>
                    Our ghostwriters specialize in every genre belonging to the fiction category—from romance, adventure, and thrillers to mystery, crime, and drama!
                  </p>
                </div>
            </div>
            <div data-aos="fade-up-left" className=' flex flex-col md:p-16 md:flex-row justify-start items-center mt-8'>
                <img src='/sb2.jpg' className='bg-gray-50'/>
                <div className='flex flex-col'>
                  <h2 className='text-2xl font-bold md:text-left p-2 mt-2 text-center'>Book Conversion</h2>
                  <p className='text-gray-500 text-center md:text-left md:max-w-52 p-2'>               
                    Whether it is a travel guide, a history book, or a book containing information about any particular topic in general, our writers will do justice to your non-fiction book!                        
                  </p>
                </div>
            </div>
            <div data-aos="fade-up-right" className=' flex md:p-16 md:flex-row flex-col justify-start items-center mt-8'>
                <img src='/sb3.jpg' className='bg-gray-50'/>
                <div className='flex flex-col'>
                  <h2 className='text-2xl font-bold text-center md:text-left p-2 mt-2'>Book Integration</h2>
                  <p className='text-gray-500 md:text-left md:max-w-52 text-center p-2'>             
                    Do you want to share your life’s story with the rest of the world? Then look no further! Our ghostwriters will do written justice to your life and present it in a captivating story!           
                  </p>
                </div>
            </div>
        </div>
          <div className='bg-gray-50 md:flex'>
            <div data-aos="fade-up-left" className=' flex flex-col md:p-16 md:flex-row justify-start items-center'>
                <img src='/sb4.jpg' className='bg-gray-50'/>
                <div className='flex flex-col'>
                  <h2 className='text-2xl md:text-left text-center p-2 font-bold mt-2'>Book Price</h2>
                  <p className='text-gray-500 md:text-left md:max-w-52 text-center p-2'>                           
                      A memoir is a collection of memories from a person’s life. If you’d like to have a memoir written for you or for someone else, then our ghostwriters will take care of that for you.                                  
                  </p>
                </div>
            </div>
            <div data-aos="fade-up-right" className=' flex flex-col md:p-16 md:flex-row justify-start items-center'>
                <img src='/sb5.jpg' className='bg-gray-50'/>
                <div className='flex flex-col'>
                  <h2 className='text-2xl md:text-left p-2 text-center font-bold mt-2'>Free Setup</h2>
                  <p className='text-gray-500 md:text-left md:max-w-52 text-center p-2'>                           
                  Do you have an idea that can change the lives of others for the better? A life hack, perhaps? Give your ideas to us and let our ghostwriters write the perfect self-help book!                                  
                  </p>
                </div>
            </div>
            <div data-aos="fade-up-right" className=' flex flex-col  md:p-16 md:flex-row justify-start items-center'>
                <img src='/sb6.jpg' className='bg-gray-50'/>
                <div className='flex flex-col'>
                  <h2 className='text-2xl md:text-left p-2 text-center font-bold mt-2'>Book Publishing</h2>
                  <p className='text-gray-500 md:text-left md:max-w-52 text-center p-2'>                           
                  Our ghostwriters are also skilled in writing a children’s novel/book be it fiction or a non-fiction piece of informative text for the young ones.                                  
                  </p>
                </div>
            </div>
          </div>
          <section className={`${font2.className} md:mt-0 mt-24 `}>
                  <div className='flex flex-col'>
                      <div className=' flex-col bg-gradient-to-b from-blue-900 via-pink-700 to-violet-950 p-6 md:p-12 flex justify-center items-center md:justify-start md:items-start'>
                          <p data-aos="fade-down" className='text-white font-bold text-3xl md:text-5xl text-center md:text-left md:max-w-4xl'>Let Us Promote Your Book For You Through Our Marketing Strategies</p>
                          <div className='flex flex-row md:mt-4 space-x-4'>
                              <button data-aos="fade-up-right" className='text-black mt-5 bg-white px-4 py-2 rounded-md hover:bg-black hover:text-white duration-300'>Let's Get Started</button>
                              <button data-aos="fade-up-left" className='text-white mt-5 bg-blue-900 px-4 py-2 rounded-md hover:bg-white hover:text-black duration-300'>Live Chat</button>
                          </div>
                      </div>
                  </div>
              </section>
              <WritingHire head={"Effective Book Marketing Services For Royalties & Recognition"} text1={"We like to make sure our clients get exactly what they paid for. By going with our book marketing services as part of our higher end packages, we guarantee to help you promote and distribute your book even after publication. Our marketing team devises strategies according to present market trends and they’ll also monitor their marketing strategy’s effectiveness after implementation to see if it needs tweaking here and there."} picsrc={"/prem1.png"}/>
            <Testimonials/>
    </div>
    <Footer/>
    </>
  )
}

export default page