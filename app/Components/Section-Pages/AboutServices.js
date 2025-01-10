"use client";

import React, { useEffect } from 'react';
import { font2 } from '../font/poppins';
import AOS from 'aos';
import 'aos/dist/aos.css';
import localFont from "next/font/local";

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const AboutServices = () => {

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);

  return (
    <section className={`${timesNewRoman.className} min-h-screen bg-customBeige py-10 px-4`}>
      <div className='flex justify-center items-center pb-16'>
        <h1 data-aos="fade-down" className='md:text-6xl hidden md:block font-bold'>
          About what we do
        </h1>
      </div>
      <div className="flex flex-col items-center">
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-[85%]">
          <div data-aos="fade-right" className="flex flex-col justify-between items-start bg-white p-6 rounded-lg shadow-md md:h-[200px] md:w-[90%] mx-auto">
            <div className="flex-shrink-0 bg-purple-700 text-white rounded-full p-4">
              <i className="fas fa-box text-2xl"></i>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">Service Packages</h3>
              <p className="text-gray-600">
                We’ve got a combination of different packages with varying prices.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex flex-col justify-between items-start bg-white p-6 rounded-lg shadow-md md:h-[200px] md:w-[90%] mx-auto">
            <div className="flex-shrink-0 bg-purple-700 text-white rounded-full p-4">
              <i className="fas fa-lightbulb text-2xl"></i>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">All Services</h3>
              <p className="text-gray-600">
                We offer a multitude of relevant services like ghostwriting, editing, and publishing.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="flex flex-col justify-between items-start bg-white p-6 rounded-lg shadow-md md:h-[200px] md:w-[90%] mx-auto">
            <div className="flex-shrink-0 bg-purple-700 text-white rounded-full p-4">
              <i className="fas fa-money-bill-wave text-2xl"></i>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">Guaranteed Refund</h3>
              <p className="text-gray-600">
                Please find the refund process mentioned on your contract after signing up for our services.
              </p>
            </div>
          </div>
          <div data-aos="fade-up-right" className="flex flex-col justify-between items-start bg-white p-6 rounded-lg shadow-md md:h-[200px] md:w-[90%] mx-auto">
            <div className="flex-shrink-0 bg-purple-700 text-white rounded-full p-4">
              <i className="fas fa-file-alt text-2xl"></i>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">Original Content</h3>
              <p className="text-gray-600">
                Our writers avoid plagiarism at all costs! Whatever we write for you is 100% original.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex flex-col justify-between items-start bg-white p-6 rounded-lg shadow-md md:h-[200px] md:w-[90%] mx-auto">
            <div className="flex-shrink-0 bg-purple-700 text-white rounded-full p-4">
              <i className="fas fa-lock text-2xl"></i>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">Secure Ownership</h3>
              <p className="text-gray-600">
                You own your book! We do not reserve the right to reuse your material in any way.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="flex flex-col justify-between items-start bg-white p-6 rounded-lg shadow-md md:h-[200px] md:w-[90%] mx-auto">
            <div className="flex-shrink-0 bg-purple-700 text-white rounded-full p-4">
              <i className="fas fa-lock text-2xl"></i>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">Native Ghostwriters</h3>
              <p className="text-gray-600">
                
              Our team of ghostwriters are native English speakers and have a knack for the written word.
                            
              </p>
            </div>
          </div>
          <div data-aos="fade-up-left" className="flex flex-col justify-between items-start bg-white p-6 rounded-lg shadow-md md:h-[200px] md:w-[90%] mx-auto">
            <div className="flex-shrink-0 bg-purple-700 text-white rounded-full p-4">
              <i className="fas fa-lock text-2xl"></i>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">Online Support</h3>
              <p className="text-gray-600">
                
              Our consultants are available for your concerns 24/7!
                            
              </p>
            </div>
          </div>
          <div data-aos="fade-down" className="flex flex-col justify-between items-start bg-white p-6 rounded-lg shadow-md md:h-[200px] md:w-[90%] mx-auto">
            <div className="flex-shrink-0 bg-purple-700 text-white rounded-full p-4">
              <i className="fas fa-lock text-2xl"></i>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">Extensive Research</h3>
              <p className="text-gray-600">
                
              Our writers conduct extensive research on your project before proceeding with the writing.
                            
              </p>
            </div>
          </div>
          <div data-aos="fade-up-left" className="flex flex-col justify-between items-start bg-white p-6 rounded-lg shadow-md md:h-[200px] md:w-[90%] mx-auto">
            <div className="flex-shrink-0 bg-purple-700 text-white rounded-full p-4">
              <i className="fas fa-lock text-2xl"></i>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">Client Retention</h3>
              <p className="text-gray-600">
                
              We are known for retaining our clients. Once you’re done with us, you’ll keep coming back for more!
                            
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
