"use client";

import React, { useEffect } from 'react'
import MainSection from '../Components/Section-Pages/MainSection'
import { font2 } from '../Components/font/poppins'
import AOS from 'aos';
import "aos/dist/aos.css";
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
  }, [])

  return (
    <>
    <div className={` ${timesNewRoman.className} relative overflow-hidden`}>
      <MainSection subHead="STEPHEN KING ACADEMY" mainHead="Privacy Policy
      " text="Stephen King Academy's Privacy Policy also include the Consumer's Data Policy."/>
      <div className={`${timesNewRoman.className} flex flex-col justify-start relative items-start`}>
        <h1 data-aos="fade-right" className='text-center text-3xl md:text-6xl p-12 pb-0 font-bold'>
        
                <span className='relative z-10'>Privacy Policy</span>
        </h1>
        <div className='flex p-10 pt-0 pb-0 flex-col md:space-x-8 md:flex-row justify-start items-start'>
          <div className='flex flex-col justify-start items-start p-2'>
            <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Your <span className='text-red-600'>Privacy,</span> Our Commitment</h1>
            <p data-aos="fade-up" className='text-gray-500 md:max-w-xl mt-4 text-left'>
                Stephen King Academy takes your privacy seriously. We are dedicated to protecting your personal data and using it responsibly. Our Consumer Data Policy ensures transparency and fosters trust, so you can engage with our services confidently.
            </p>
          </div>
        </div>
        <div className='flex p-10 pt-0 pb-0 flex-col md:flex-row-reverse md:space-x-8 justify-center items-center mt-2'>
          <div className='flex flex-col justify-start items-start p-2'>
              <h1 data-aos="fade-right" className='text-3xl md:text-5xl mt-6'>Collection Of <span className='text-red-600'>Data</span></h1>
              <p data-aos="fade-left" className='text-gray-500 md:max-w-xl mt-4'>
              We collect only the information necessary to deliver our services, such as your name, contact details, and project-related information.
              </p>
          </div>
        </div>
        <div className='flex p-10 pt-0 pb-0 flex-col md:flex-row md:space-x-8 justify-center items-center mt-2'>
          <div className='flex flex-col justify-start items-start p-2'>
              <h1 data-aos="fade-left"  className='text-3xl md:max-w-lg md:text-5xl mt-6'>Usage Of <span className='text-red-600'>Data</span></h1>
              <p data-aos="fade-down" className='text-gray-500 md:max-w-xl mt-4'>
              Your data is used exclusively to provide services, communicate updates, and enhance your experience. We do not share your information without your consent.              </p>
          </div>
        </div>
        <div className='flex p-10 pt-0 pb-0 flex-col md:flex-row md:space-x-8 justify-center items-center mt-2'>
          <div className='flex flex-col justify-start items-start p-2'>
              <h1 data-aos="fade-left"  className='text-3xl md:max-w-lg md:text-5xl mt-6'>Your <span className='text-red-600'>Rights</span></h1>
              <p data-aos="fade-down" className='text-gray-500 md:max-w-xl mt-4'>
              You have the right to access, update, or request deletion of your data. Contact us to exercise your rights or address any concerns.</p>
          </div>
        </div>
        <div className='flex p-10 pt-0 pb-0 flex-col md:flex-row md:space-x-8 justify-center items-center mt-2'>
          <div className='flex flex-col justify-start items-start p-2'>
              <h1 data-aos="fade-left"  className='text-3xl md:max-w-lg md:text-5xl mt-6'>Security Of <span className='text-red-600'>Data</span></h1>
              <p data-aos="fade-down" className='text-gray-500 md:max-w-xl mt-4'>
              Our systems are protected with industry-standard security measures. Regular audits ensure your information is safeguarded against unauthorized access.</p>
          </div>
        </div>
        <div className='flex p-10 pt-0 pb-0 flex-col md:flex-row md:space-x-8 justify-center items-center mt-2'>
          <div className='flex flex-col justify-start items-start p-2'>
              <h1 data-aos="fade-left"  className='text-3xl md:max-w-lg md:text-5xl mt-6'><span className='text-red-600'>Transparency</span></h1>
              <p data-aos="fade-down" className='text-gray-500 md:max-w-xl mt-4'>
              We believe in open communication. Updates to this policy will be shared promptly, and we encourage you to review them periodically.</p>
          </div>
        </div>
        <h1 data-aos="fade-right" className='text-left text-3xl md:text-6xl p-12 pb-0 font-bold'>
        
                <span className='relative z-10'>Privacy Policy: Collection Of Number & Usage</span>
        </h1>
        <div className='flex p-10 pt-0 pb-0 flex-col md:flex-row md:space-x-8 justify-center items-center mt-2'>
          <div className='flex flex-col justify-start items-start p-2'>
              <h1 data-aos="fade-left"  className='text-3xl md:max-w-lg md:text-5xl mt-6'><span className='text-red-600'>1. </span>Collection Of Number</h1>
              <p data-aos="fade-down" className='text-gray-500 md:max-w-xl mt-4'>
              We collect phone numbers solely for the purposes of contact. This information is provided voluntarily by you with explicit consent at the time of collection.</p>
          </div>
        </div>
        <div className='flex p-10 pt-0 pb-0 flex-col md:flex-row md:space-x-8 justify-center items-center mt-2'>
          <div className='flex flex-col justify-start items-start p-2'>
              <h1 data-aos="fade-left"  className='text-3xl md:max-w-lg md:text-5xl mt-6'><span className='text-red-600'>2. </span>Consent</h1>
              <p data-aos="fade-down" className='text-gray-500 md:max-w-xl mt-4'>
              By providing your phone number, you consent to its use strictly for the purposes stated above. Consent is obtained through the Contact Form, and you may withdraw consent at any time by contacting us at support@stephenkingacademy.com.</p>
          </div>
        </div>
        <div className='flex p-10 pt-0 pb-0 flex-col md:flex-row md:space-x-8 justify-center items-center mt-2'>
          <div className='flex flex-col justify-start items-start p-2'>
              <h1 data-aos="fade-left"  className='text-3xl md:max-w-lg md:text-5xl mt-6'><span className='text-red-600'>3. </span>Third-Party Sharing</h1>
              <p data-aos="fade-down" className='text-gray-500 md:max-w-xl mt-4'>
              We do not share, sell, or lease your phone number to third-party providers, marketers, or external organizations. Your phone number and associated consent details are retained securely and used exclusively for the purposes outlined in this policy..</p>
          </div>
        </div>
        <div className='flex p-10 pt-0 pb-0 flex-col md:flex-row md:space-x-8 justify-center items-center mt-2'>
          <div className='flex flex-col justify-start items-start p-2'>
              <h1 data-aos="fade-left"  className='text-3xl md:max-w-lg md:text-5xl mt-6'><span className='text-red-600'>Exceptions:</span></h1>
              <p data-aos="fade-down" className='text-gray-500 md:max-w-xl mt-4'>
              For service providers directly involved in delivering the services you requested (e.g., SMS gateway providers). These partners are contractually prohibited from using your data for unrelated purposes
                </p>
          </div>
        </div>
        <div className='flex p-10 pt-0 pb-0 flex-col md:flex-row md:space-x-8 justify-center items-center mt-2'>
          <div className='flex flex-col justify-start items-start p-2'>
              <h1 data-aos="fade-left"  className='text-3xl md:max-w-lg md:text-5xl mt-6'><span className='text-red-600'>4. </span>Data Security</h1>
              <p data-aos="fade-down" className='text-gray-500 md:max-w-xl mt-4'>
              Phone numbers are stored using industry-standard encryption and access controls. We retain this information only for as long as necessary to fulfill the stated purpose or as required by law.</p>
          </div>
        </div>
        <div className='flex p-10 pt-0 pb-0 flex-col md:flex-row md:space-x-8 justify-center items-center mt-2'>
          <div className='flex flex-col justify-start items-start p-2'>
              <h1 data-aos="fade-left"  className='text-3xl md:max-w-lg md:text-5xl mt-6'><span className='text-red-600'>5. </span>Your Rights</h1>
              <p data-aos="fade-down" className='text-gray-500 md:max-w-xl mt-4'>
              You may request access to, correction of, or deletion of your phone number from our systems by contacting support@stephenkingacademy.com.</p>
          </div>
        </div>
        <div className='flex p-10 pt-0 pb-0 flex-col md:flex-row md:space-x-8 justify-center items-center mt-2'>
          <div className='flex flex-col justify-start items-start p-2'>
              <h1 data-aos="fade-left"  className='text-3xl md:max-w-lg md:text-5xl mt-6'><span className='text-red-600'>Example</span>For Direct Use</h1>
              <p data-aos="fade-down" className='text-gray-500 md:max-w-xl mt-4'>
              "We collect phone numbers solely to contact. Your phone number and consent will never be shared with third-party providers, advertisers, or external organizations unless explicitly required by law or to fulfill services you’ve requested (e.g., SMS delivery). All data is secured and retained only for as long as necessary. You may withdraw consent or request deletion at any time by contacting support@stephenkingacademy.com."
                </p>
          </div>
        </div>
      </div>
    </div>
      <Footer/>

      </>
  )
}

export default page