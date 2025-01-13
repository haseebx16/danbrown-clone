"use client";

import React, { useEffect } from 'react';
import MainSection from '../Components/Section-Pages/MainSection';
import { font2 } from '../Components/font/poppins';
import AOS from "aos";
import "aos/dist/aos.css";
import Significance from '../Components/Section-Pages/Significance';
import Footer from '../Components/Sections/Footer';
import Testimonials from '../Components/Sections/Testimonials';
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
    <>
    {/*Deployment Test*/ }
    <div className={`${timesNewRoman.className} bg-gray-50 overflow-hidden`}>
      <MainSection
        subHead={"PRICING PLANS LIKE NEVER BEFORE"}
        mainHead={"Competitive Pricing For Our Exclusive Services"}
        text={"We offer six different pricing plans of varying degree to ensure we can cater to every type of client who chooses to hire our services."}
      />
      
      <div className='flex justify-center bg-gray-50 items-center'>
        <h1 className="text-center text-3xl md:text-5xl md:max-w-4xl font-bold mt-12">
          The 6 Different Pricing Plans — Choose a Plan That Suits Your Needs
        </h1>
      </div>

      <div className="grid grid-cols-1 md:p-24 md:pt-8 bg-gray-50 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-12">
        {/* Plan 1 */}
        <div className="py-8 flex flex-col justify-center items-center border-2 border-red-600 bg-white rounded-lg shadow-lg" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center">Basic Plan</h2>
            <p className='text-2xl font-light text-center'>50% Off !</p>
            <p className="text-gray-600 mt-4">Ideal for individuals just starting out.</p>
            
            {/* List of features */}
            <div className="max-h-[200px] flex flex-col justify-center items-center p-4 overflow-y-scroll mt-8 w-full">
                <p className='text-gray-600 text-left'>&#8226; Writing 50-100 Pages</p>
                <p className='text-gray-600 text-left'>&#8226; Editing</p>
                <p className='text-gray-600 text-left'>&#8226; Proofreading</p>
                <p className='text-gray-600 text-left'>&#8226; Layout Adjustment</p>
                <p className='text-gray-600 text-left'>&#8226; 100% Ownership Right</p>
                <p className='text-gray-600 text-left'>&#8226; Unlimited Revisions</p>
            </div>

            <hr className='text-gray-600 border border-2 border-gray-400 mt-8 w-full'/>
            <p className='text-gray-700 text-xl text-center mt-4'>20% More Off On the Next Package !</p>
            <button className='bg-red-700 text-white uppercase font-bold text-md px-7 mt-3 py-2 hover:border hover:border-black hover:bg-transparent hover:text-black duration-300'>Buy Now</button>
            </div>

            {/* Plan 2 */}
            <div className="py-8 flex flex-col justify-center items-center bg-white border-2 border-black rounded-lg shadow-lg" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center">Startup Package</h2>
            <p className='text-2xl font-light text-center'>50% Off !</p>
            <p className="text-gray-600 mt-4">Perfect for small teams or projects.</p>

            {/* List of features with scrollable section */}
            <div className="max-h-[175px] flex flex-col justify-center items-center  overflow-y-scroll mt-8 w-full">
                <p className='text-gray-600 mt-12 text-left'>&#8226; Writing 100-150 Pages</p>
                <p className='text-gray-600 text-left'>&#8226; Editing</p>
                <p className='text-gray-600 text-left'>&#8226; Proofreading</p>
                <p className='text-gray-600 text-left'>&#8226; Layout Adjustment</p>
                <p className='text-gray-600 text-left'>&#8226; 100% Ownership Right</p>
                <p className='text-gray-600 text-left'>&#8226; Unlimited Revisions</p>
                <p className='text-gray-600 text-left'>&#8226; Custom Book Cover Design</p>
                <p className='text-gray-600 text-left'>&#8226; Ebook</p>
                <p className='text-gray-600 text-left'>&#8226; Publication</p>
            </div>

            <hr className='text-gray-600 border border-2 border-gray-400 mt-8 w-full'/>
            <p className='text-gray-700 text-xl text-center mt-4'>20% More Off On the Next Package !</p>
            <button className='bg-red-700 text-white uppercase font-bold text-md px-7 mt-3 py-2 hover:border hover:border-black hover:bg-transparent hover:text-black duration-300'>Buy Now</button>
            </div>

        {/* Plan 3 */}
        {/* Plan 3 */}
        <div className="py-8 flex flex-col justify-center items-center bg-white border-2 border-red-600 rounded-lg shadow-lg" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center">Standard Package</h2>
        <p className='text-2xl font-light text-center'>50% Off !</p>
        <p className="text-gray-600 mt-4">Best for established businesses.</p>
        
        {/* Scrollable Features Section */}
        <div className="max-h-[175px] overflow-y-scroll flex flex-col justify-center mt-8 items-center w-full">
            <p className='text-gray-600 text-left mt-12'>&#8226; Writing 150-200 Pages</p>
            <p className='text-gray-600 text-left'>&#8226; Editing</p>
            <p className='text-gray-600 text-left'>&#8226; Proofreading</p>
            <p className='text-gray-600 text-left'>&#8226; Layout Adjustment</p>
            <p className='text-gray-600 text-left'>&#8226; 100% Ownership Right</p>
            <p className='text-gray-600 text-left'>&#8226; Unlimited Revisions</p>
            <p className='text-gray-600 text-left'>&#8226; Custom Book Cover Design</p>
            <p className='text-gray-600 text-left'>&#8226; eBook, Paperback (2 formats of your book)</p>
            <p className='text-gray-600 text-left'>&#8226; Publication on Amazon & Kindle</p>
        </div>
        
        <hr className='text-gray-600 border border-2 border-gray-400 mt-8 w-full'/>
        <p className='text-gray-700 text-xl text-center mt-4'>20% More Off On the Next Package !</p>
        <button className='bg-red-700 text-white uppercase font-bold text-md px-7 mt-3 py-2 hover:border hover:border-black hover:bg-transparent hover:text-black duration-300'>Buy Now</button>
        </div>

{/* Plan 4 */}
        <div className="py-8 flex flex-col justify-center items-center bg-white border-2 border-black rounded-lg shadow-lg" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center">Professional Package</h2>
        <p className='text-2xl font-light text-center'>50% Off !</p>
        <p className="text-gray-600 mt-4">Tailored solutions for large organizations.</p>
        
        {/* Scrollable Features Section */}
        <div className="max-h-[200px] overflow-y-scroll p-4 mt-8 w-full">
            <p className='text-gray-600 text-left'>&#8226; Writing 250-300 Pages</p>
            <p className='text-gray-600 text-left'>&#8226; Editing</p>
            <p className='text-gray-600 text-left'>&#8226; Proofreading</p>
            <p className='text-gray-600 text-left'>&#8226; Layout Adjustment</p>
            <p className='text-gray-600 text-left'>&#8226; 100% Ownership Right</p>
            <p className='text-gray-600 text-left'>&#8226; Unlimited Revisions</p>
            <p className='text-gray-600 text-left'>&#8226; Custom Book Cover Design</p>
            <p className='text-gray-600 text-left'>&#8226; eBook, Paperback, Hardcover</p>
            <p className='text-gray-600 text-left'>&#8226; Publication on Amazon, Kindle, Barnes & Noble</p>
            <p className='text-gray-600 text-left'>&#8226; 2-4 Pages Author Website</p>
            <p className='text-gray-600 text-left'>&#8226; 1-Year Hosting & Domain</p>
        </div>
        
        <hr className='text-gray-600 border border-2 border-gray-400 mt-8 w-full'/>
        <p className='text-gray-700 text-xl text-center mt-4'>20% More Off On the Next Package !</p>
        <button className='bg-red-700 text-white uppercase font-bold text-md px-7 mt-3 py-2 hover:border hover:border-black hover:bg-transparent hover:text-black duration-300'>Buy Now</button>
        </div>

        {/* Plan 5 */}
        <div className="py-8 flex flex-col justify-center items-center bg-white border-2 border-red-600 rounded-lg shadow-lg" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center">Expert Package</h2>
        <p className='text-2xl font-light text-center'>50% Off !</p>
        <p className="text-gray-600 mt-4">Comprehensive plan for businesses.</p>
        
        {/* Scrollable Features Section */}
        <div className="max-h-[200px] overflow-y-scroll p-4 mt-8 w-full">
            <p className='text-gray-600 text-left'>&#8226; Writing Unlimited Pages</p>
            <p className='text-gray-600 text-left'>&#8226; Editing</p>
            <p className='text-gray-600 text-left'>&#8226; Proofreading</p>
            <p className='text-gray-600 text-left'>&#8226; Layout Adjustment</p>
            <p className='text-gray-600 text-left'>&#8226; 100% Ownership Right</p>
            <p className='text-gray-600 text-left'>&#8226; Unlimited Revisions</p>
            <p className='text-gray-600 text-left'>&#8226; Custom Book Cover Design</p>
            <p className='text-gray-600 text-left'>&#8226; eBook, Paperback, Hardcover</p>
            <p className='text-gray-600 text-left'>&#8226; Publication on Amazon, Kindle, Barnes & Noble</p>
            <p className='text-gray-600 text-left'>&#8226; 2-4 Pages Author Website</p>
            <p className='text-gray-600 text-left'>&#8226; Dedicated Team of Bestselling Writers</p>
            <p className='text-gray-600 text-left'>&#8226; ISBN</p>
            <p className='text-gray-600 text-left'>&#8226; 30-60 Seconds Book Video Trailer</p>
        </div>
        
        <hr className='text-gray-600 border border-2 border-gray-400 mt-8 w-full'/>
        <p className='text-gray-700 text-xl text-center mt-4'>20% More Off On the Next Package !</p>
        <button className='bg-red-700 text-white uppercase font-bold text-md px-7 mt-3 py-2 hover:border hover:border-black hover:bg-transparent hover:text-black duration-300'>Buy Now</button>
        </div>

        {/* Plan 6 */}
        <div className="py-8 flex flex-col justify-center items-center bg-white border-2 border-black rounded-lg shadow-lg" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center">Best-Seller Package</h2>
        <p className='text-2xl font-light text-center'>50% Off !</p>
        <p className="text-gray-600 mt-4">Full-suite services for large-scale operations.</p>
        
        {/* Scrollable Features Section */}
        <div className="max-h-[200px] overflow-y-scroll p-4 mt-8 w-full">
            <p className='text-gray-600 text-left'>&#8226; Writing Unlimited Pages</p>
            <p className='text-gray-600 text-left'>&#8226; Editing</p>
            <p className='text-gray-600 text-left'>&#8226; Proofreading</p>
            <p className='text-gray-600 text-left'>&#8226; Layout Adjustment</p>
            <p className='text-gray-600 text-left'>&#8226; 100% Ownership Right</p>
            <p className='text-gray-600 text-left'>&#8226; Unlimited Revisions</p>
            <p className='text-gray-600 text-left'>&#8226; Custom Book Cover Design</p>
            <p className='text-gray-600 text-left'>&#8226; eBook, Paperback, Hardcover</p>
            <p className='text-gray-600 text-left'>&#8226; Publication on Amazon, Kindle, Barnes & Noble</p>
            <p className='text-gray-600 text-left'>&#8226; 2-4 Pages Author Website</p>
            <p className='text-gray-600 text-left'>&#8226; Dedicated Team of Bestselling Writers</p>
            <p className='text-gray-600 text-left'>&#8226; ISBN</p>
            <p className='text-gray-600 text-left'>&#8226; 60-90 Seconds Book Video Trailer</p>
            <p className='text-gray-600 text-left'>&#8226; Book Marketing (Advanced Marketing)</p>
        </div>
        
        <hr className='text-gray-600 border border-2 border-gray-400 mt-8 w-full'/>
        <p className='text-gray-700 text-xl text-center mt-4'>20% More Off On the Next Package !</p>
        <button className='bg-red-700 text-white uppercase font-bold text-md px-7 mt-3 py-2 hover:border hover:border-black hover:bg-transparent hover:text-black duration-300'>Buy Now</button>
        </div>

      </div>
      <Significance/>
      <section className={`${font2.className} md:mt-0 mt-24`}>
              <div className='flex flex-col'>
                  <div className=' flex-col bg-gradient-to-b from-red-700 via-red-900 to-black p-6 md:p-12 flex justify-center items-center md:justify-start md:items-start'>
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
