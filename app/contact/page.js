"use client";

import React from 'react';
import { useEffect } from 'react';
import { font2 } from '../Components/font/poppins';
import MainSection from '../Components/Section-Pages/MainSection';
import Testimonials from '../Components/Sections/Testimonials';
import Footer from '../Components/Sections/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {

    useEffect(() => {
        AOS.init({
            duration:1000,
            once: true,
        })
    });

  return (
    <>
    <div className={`${font2.className} bg-gray-50 overflow-hidden`}>
      <MainSection 
        subHead={"CONTACT US TODAY WE ARE NOT DIFFICULT TO REACH"} 
        mainHead={"We Love to Talk Let’s have a dialogue!"} 
        text={"Contact us let's work together and produce awesome books"} 
      />

      <div className="flex flex-col mt-12 items-center md:items-start p-4">
        <h1 data-aos="fade-right" className="text-3xl md:text-5xl md:max-w-4xl font-bold p-4">
          Contact Us And Our Representative Will Reach Out To You
        </h1>

        <form className="w-full mt-8 max-w-lg md:max-w-2xl p-8 rounded-lg">
          <div data-aos="fade-right" className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div data-aos="fade-left" className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div data-aos="fade-up-right" className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div data-aos="fade-up-left" className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            data-aos="flip-right"
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
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
          <Testimonials/>
    </div>
    <Footer/>
    </>
  );
};

export default page;
