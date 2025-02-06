import React from 'react'
import localFont from "next/font/local";
import { font } from './font/font';

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const Work = () => {
  return (
    <div className={`${timesNewRoman.className} flex flex-col items-center justify-center p-12 bg-white`}>
        <p className='text-black mb-4 text-center md:text-4xl font-bold text-2xl'>We have helped thousands of writers get their work published</p>
        <p className={`${font.className} text-black mb-12 text-center md:text-xl max-w-6xl text-lg`}>Our diversified talent pool with multiple unique skillsets has enabled us to specialize in various genres and cater to the ghostwriting needs of clients from varying industries and professional spheres.</p>
        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4'>
            <img src='/book-1.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-2.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-3.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-4.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-5.jpg' className='w-72 h-72 shadow-md shadow-black ' />
        </div>
        <div className='flex flex-col mt-4 md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4'>
            <img src='/book-6.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-7.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-8.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-9.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-10.jpg' className='w-72 h-72 shadow-md shadow-black ' />
        </div>
        <div className='flex flex-col mt-4 md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4'>
            <img src='/book-11.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-12.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-13.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-14.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-15.jpg' className='w-72 h-72 shadow-md shadow-black ' />
        </div>
        <div className='flex flex-col mt-4 md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4'>
            <img src='/book-16.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-17.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-18.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-19.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-20.jpg' className='w-72 h-72 shadow-md shadow-black ' />
        </div>
        <div className='flex flex-col mt-4 md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4'>
            <img src='/book-21.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-22.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-23.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-24.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-25.jpg' className='w-72 h-72 shadow-md shadow-black ' />
        </div>
        <div className='flex flex-col mt-4 md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4'>
            <img src='/book-26.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-27.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-28.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-29.jpg' className='w-72 h-72 shadow-md shadow-black ' />
            <img src='/book-30.jpg' className='w-72 h-72 shadow-md shadow-black ' />
        </div>
    </div>
  )
}

export default Work