import React from 'react';
import { font2 } from './font/poppins';

const Hero = () => {
  return (
    <div className={`${font2.className} text-black mt-20 relative`}>
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Image */}
      <img src="/hero-books.jpg" className="w-full h-[23rem] md:h-[35rem] object-cover" alt="Hero Background" />

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-md md:text-3xl font-medium uppercase">Manifest Your <br/> Concept Through Ghost Writing</h1>
        <p className="text-3xl md:text-8xl font-bold ">
            You Conceive We <br/> Construct Your Book
        </p>
        <p className='mt-4 md:mt-8 text-2xl max-w-3xl'>
            Get rid of the troubles and tediousness of writing your own book. Let us ghostwrite your book and you take the credit for it.
        </p>
        <div className='flex space-x-2 mt-6'>
            <button className='bg-violet-700 font-bold uppercase px-4 py-2 tracking-widest'>Let's get started</button>
            <button className='bg-sky-900 font-bold uppercase px-4 py-2 tracking-widest'>Live Chat</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
