import React from 'react'
import { MdPriceChange } from "react-icons/md";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { MdHeadphones } from "react-icons/md";

const Cards = () => {
  return (
    <div className='grid grid-cols-3'>
        <div className='py-12 px-12 flex  text-2xl bg-red-800 text-white text-center'> 
            <MdPriceChange className='text-3xl mr-4'/>
            Affordable Prices
        </div>
        <div className='py-12 px-12 flex text-2xl bg-black whitespace-nowrap text-white text-center'> 
            <MdOutlineAccessTimeFilled className='text-3xl mr-4'/>
            Fast Turnaround Time
        </div>
        <div className='py-12 flex px-12 text-2xl bg-red-800 text-white text-center'> 
            <MdHeadphones className='text-3xl mr-4'/>
            24/7 Customer Support
        </div>
    </div>
  )
}

export default Cards