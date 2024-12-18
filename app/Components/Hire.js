import React from 'react'
import { font2 } from './font/poppins'

const Hire = () => {
  return (
    <section className={`${font2.className} md:mt-0 mt-24`}>
        <div className='flex flex-col'>
            <div className=' flex-col bg-gradient-to-b from-blue-900 via-blue-700 to-sky-500 p-6 flex justify-center items-center'>
                <p className='text-white font-bold text-3xl text-center'>Get Started By Hiring Our Services And Taking The First Step To Your Ambition</p>
                <div className='flex flex-row space-x-4'>
                    <button className='text-black mt-5 bg-white px-4 py-2 rounded-md hover:bg-black hover:text-white duration-300'>Let's Get Started</button>
                    <button className='text-white mt-5 bg-blue-900 px-4 py-2 rounded-md hover:bg-white hover:text-black duration-300'>Live Chat</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hire