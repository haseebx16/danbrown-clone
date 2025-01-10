import React from 'react'
import localFont from "next/font/local";

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const Significance = () => {
  return (
    <div className={`${timesNewRoman.className} bg-gray-50 py-16 px-6 flex flex-col md:flex-row md:items-start md:justify-between`}>
            {/* Left Content */}
            <div className='md:w-1/2 max-w-4xl mb-8 md:mb-0'>
              <h1 data-aos="fade-down" className='text-3xl md:text-4xl font-bold mb-6'>
                We recognize the <span className='underline decoration-yellow-500'>significance</span> of a well-told story
              </h1>
              <p data-aos="fade-up" className='text-gray-600 text-lg p-4 md:text-lg'>
                Do you want to get your ideas published but cannot find the appropriate platform? Stephen King Academy is your ultimate destination. Our expert ghostwriters know how to captivate the audience by sharing a unique idea or story. We are known for creating well-composed, creative, and the finest quality content, prioritizing 100% customer satisfaction.
              </p>
            </div>

            {/* Right Cards */}
            <div className='md:w-1/2 flex flex-wrap justify-center md:justify-start gap-6'>
              {/* Card 1 */}
              <div data-aos="fade-right" className='flex items-center justify-center w-[30%] h-40 bg-white p-4 rounded-lg shadow-md'>
                <h2 className='text-sm md:text-base font-semibold text-center'>Sign Up for Our Services</h2>
              </div>
              {/* Card 2 */}
              <div data-aos="fade-left" className='flex items-center justify-center w-[30%] h-40 bg-white p-4 rounded-lg shadow-md'>
                <h2 className='text-sm md:text-base font-semibold text-center'>Answer a Few Questions</h2>
              </div>
              {/* Card 3 */}
              <div data-aos="fade-right" className='flex items-center justify-center w-[30%] h-40 bg-green-100 p-4 rounded-lg shadow-md'>
                <h2 className='text-sm md:text-base font-semibold text-center'>Talk to Our Writing Team</h2>
              </div>
              {/* Card 4 */}
              <div data-aos="fade-left" className='flex items-center justify-center w-[30%] h-40 bg-white p-4 rounded-lg shadow-md'>
                <h2 className='text-sm md:text-base font-semibold text-center'>Sign Up for Our Services</h2>
              </div>
              {/* Card 5 */}
              <div data-aos="fade-right" className='flex items-center justify-center w-[30%] h-[40 bg-yellow-100 p-4 rounded-lg shadow-md'>
                <h2 className='text-sm md:text-base font-semibold text-center'>Review Your Book Completely</h2>
              </div>
              {/* Card 6 */}
              <div data-aos="fade-left" className='flex items-center justify-center w-[30%] h-[40 bg-white p-4 rounded-lg shadow-md'>
                <h2 className='text-sm md:text-base font-semibold text-center'>Get Your Book Compiled</h2>
              </div>
              {/* Card 7 */}
              <div data-aos="fade-right" className='flex items-center justify-center w-[30%] h-[40 bg-cyan-100 p-4 rounded-lg shadow-md'>
                <h2 className='text-sm md:text-base font-semibold text-center'>Get Published Online & Offline</h2>
              </div>
              {/* Card 8 */}
              <div data-aos="fade-left" className='flex items-center justify-center w-[30%] h-40 bg-white p-4 rounded-lg shadow-md'>
                <h2 className='text-sm md:text-base font-semibold text-center'>Become a Bestselling Author</h2>
              </div>
            </div>
          </div>
  )
}

export default Significance