import React from 'react'
import localFont from "next/font/local";

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const Work = () => {
  return (
    <div className={`${timesNewRoman.className} flex flex-col items-center justify-center p-12 bg-white`}>
        <p className='text-black mb-4 text-center md:text-4xl font-bold text-2xl'>We have helped thousands of writers get their work published</p>
        <p className='text-black mb-12 text-center md:text-xl max-w-6xl text-lg'>Our diversified talent pool with multiple unique skillsets has enabled us to specialize in various genres and cater to the ghostwriting needs of clients from varying industries and professional spheres.</p>
    </div>
  )
}

export default Work