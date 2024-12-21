import React from 'react';
import { font2 } from '../font/poppins';

const WritingHire = () => {
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
            Why you should hire a ghostwriter for your book
          </h1>
          <p className="text-gray-400 md:text-lg mt-4">
            Hiring a ghostwriter doesn’t mean you aren’t part of the production
            process of your content. In today’s fast-paced world of tight
            schedules and even tighter deadlines, hiring a ghostwriter can save
            you the trouble (and the time) of getting your work done efficiently
            and reliably. A ghostwriter can not only save you time and the work,
            but they are also a good way to enhance your content as they can
            suggest ideas or take creative liberties with your content.
          </p>
          <p className="text-gray-400 md:text-lg mt-4">
            At Dan Brown Academy, our ghostwriters take a dedicated ownership
            of your project to ensure that they do the content complete justice.
            Of course, the book is still yours by right and legality, but our
            ghostwriters will put their heart and soul into your book to ensure
            it surpasses your expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WritingHire;
