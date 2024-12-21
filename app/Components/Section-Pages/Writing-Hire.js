import React from 'react';
import { font2 } from '../font/poppins';

const WritingHire = ({ head, text1, text2 }) => {
  return (
    <div
      className={`${font2.className} h-auto md:h-[39rem] bg-violet-950`}
    >
      <div className="flex flex-col md:flex-row p-4 justify-center items-center">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/hire.png"
            alt="Hire Ghostwriter"
            className="w-96 h-[21rem] mt-8 md:w-[35rem] md:h-[30rem]"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl md:text-5xl text-white font-bold md:pt-4">
            {head}
          </h1>
          <p className="text-gray-400 md:text-lg mt-4">
            {text1}
          </p>
          <p className="text-gray-400 md:text-lg mt-4">
            {text2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WritingHire;
