import React from 'react'
import { font2 } from '../font/poppins'

const AboutNumber = () => {
  return (
    <section className={`${font2.className} bg-gradient-to-br from-stone-900 to-zinc-500 p-12 `}>
        <div className='flex justify-center items-center'>
            <div className='text-white flex justify-center items-center space-x-28'>
                <h1 className='text-2xl font-bold'><span className='text-yellow-300'>500+</span> Published Books</h1>
                <h1 className='text-2xl font-bold'><span className='text-yellow-300'>10+</span> NYT Best Sellers</h1>
                <h1 className='text-2xl font-bold'><span className='text-yellow-300'>15+</span> National Best Sellers</h1>
                <h1 className='text-2xl font-bold'><span className='text-yellow-300'>BBC</span> Featured Company</h1>
            </div>
        </div>
    </section>
  )
}

export default AboutNumber