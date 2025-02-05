import React from 'react'
import localFont from 'next/font/local'

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const World = () => {
  return (
    <section className={`${timesNewRoman.className} text-black bg-gray-100 p-12 flex`}>
      <div className='flex flex-col'>
        <h1 className='text-4xl font-bold text-red-700'>The world is waiting for your book</h1>
        <p className='text-lg mt-4 max-w-2xl text-justify'>Every great advancement is born out of a fascinating work of imagination. We, at Stephen King Academy, will take that step forward for you. Every story deserves to be told and heard. Therefore, we invite you to experience the work of industry's most professional yet extremely innovative ghostwriters, all under one roof.</p>
        <p className='text-lg mt-4 max-w-2xl text-justify'>We have a track record of delivering thousands of successful publications – meticulously written, edited, designed and published. Many of the published works we have done for our clients have created a buzz in the literary sphere and ranked among the best sellers. Stephen King Academy is the perfect choice to put your ideas on paper. We have writers who can help you tell your story, in any genre, from fiction to nonfiction.</p>
        <button className="bg-red-700 mt-4 w-72 text-white font-bold uppercase px-4 py-2 tracking-widest">
          Let's Get Started
        </button>
      </div>
      <div className='flex flex-col justify-start items-start space-y-4 ml-24'>
        <p className='text-xl'><span className='text-red-700 text-xl'>&#x2713;</span> Fiction</p>
        <p className='text-xl'><span className='text-red-700 text-xl'>&#x2713;</span> Biography</p>
        <p className='text-xl'><span className='text-red-700 text-xl'>&#x2713;</span> Autobiography</p>
        <p className='text-xl'><span className='text-red-700 text-xl'>&#x2713;</span> Anthology</p>
        <p className='text-xl'><span className='text-red-700 text-xl'>&#x2713;</span> Western</p>
        <p className='text-xl'><span className='text-red-700 text-xl'>&#x2713;</span> Non-Fiction</p>
        <p className='text-xl'><span className='text-red-700 text-xl'>&#x2713;</span> Memoirs</p>
        <p className='text-xl'><span className='text-red-700 text-xl'>&#x2713;</span> Romance</p>
        <p className='text-xl'><span className='text-red-700 text-xl'>&#x2713;</span> Informative</p>
      </div>
    </section>
  )
}

export default World