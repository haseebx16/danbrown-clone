"use client";

import React from 'react'
import localFont from 'next/font/local'
import { useState } from 'react';
import AvailModal from './AvailModal';

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});


const PricingPlans = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

  return (
    <section className={`${timesNewRoman.className} text-white bg-gradient-to-r from-red-800 to-black p-12 flex flex-col justify-center items-center`}>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-4xl font-bold'>Pricing Plans</p>
            <p className='text-lg text-gray-300 text-center max-w-2xl mt-4'>Our podium of Stephen King Academy services offers you with an array of experienced ghostwriters, editors and publishing eccentrics who will together, transform your idea into a splendid yet commendable book.</p>
        </div>
        <div className='flex md:flex-row  flex-col md:space-y-0  mt-6 space-y-2 md:space-x-2'>
            {/* Pricing Plan: 01 */}
            <div className=' border-2 bg-black border-red-700 p-4 h-fit rounded-lg mt-8 max-w-xs'>
                <h1 className='text-2xl bg-rose-800 text-center p-4'>Amazon's Best Seller <br/><span className='text-2xl'>$5,999</span> <span className='before-price text-xl'>$12,000</span></h1>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Writing & Rewriting of up to 500 Pages</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Planning / Creating/updating the outline</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Ghostwriting original content based on interviews or research</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Completion of your book as per the requirements/outline.                </p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Revisions to our writing per your feedback and guidance.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Meticulous editing to ensure your text is free of error</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Adjusting the layout and presentation for the publishing standards.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Add Up to 20-30 Custom Illustrations.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Adjusting the layout and presentation for the publishing standards.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Unlimited revisions.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;An attention-grabbing Book Cover.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Turnaround Time of 60-80 Days.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Rights to make changes to your book</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Editing, Proofreading, and formatting.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Basic Author’s Website</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Authors Bio.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Publishing on Amazon Kindle, Barnes & Noble, Kobo, Ingram Spark, E-Book Publishing (Any 3)</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Guaranteed 2000 Reads in 12 months</p>
                <p className='mt-4'><span className='text-red-500'>Note: The Amazon Best Seller Package guarantees you at least $20,000 in revenue in the first year after the book is published, and if we fail to meet this goal, we will fully refund your money.</span></p>
                <button onClick={openModal} className='mt-4 bg-red-700 text-white px-4 py-2'>Let's Get Started</button>
            </div>

            {/* Pricing Plan: 02 */}
            <div className=' border-2 bg-black border-red-700 h-fit p-4 rounded-lg mt-8 max-w-xs'>
                <h1 className='text-2xl bg-rose-800 text-center p-4'>Amazon Prime Package <br/><span className='text-2xl'>$9,899</span> <span className='before-price text-xl'>$19,798</span></h1>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Writing & Rewriting of up to 500 Pages</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Unlimited Revisions</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;3 Months of Paid Marketing on Google, Facebook and Amazon</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Book Launch Globally</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Full Ownership Rights</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Planning / Creating/updating the outline</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Ghostwriting original content based on interviews or research</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Completion of your book as per the requirements/outline.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Revisions to our writing per your feedback and guidance.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Meticulous editing to ensure your text is free of error.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Adjusting the layout and presentation for the publishing standards</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Add Up to 50-60 Custom Illustrations.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Adjusting the layout and presentation for the publishing standards.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;An attention-grabbing Book Cover.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Turnaround Time of 60 -80 Days.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Rights to make changes to your book.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Editing, Proofreading, and formatting.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Author Website</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Pitching article ideas to the press.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Publishing on Amazon Kindle, Barnes & Noble, Kobo, Ingram Spark, iBook, and Lulu (Any 5 Platforms)</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Available in 3 different formats E-Book, and Paper Back, Hardcover</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Amazon will be responsible for printing and shipping your book globally</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Guaranteed 4000 Reads in 12 months</p>
                <p className='mt-4'><span className='text-red-500'>Note: The Amazon Prime Package guarantees you at least $40,000 in revenue in the first year after the book is published, and if we fail to meet this goal, we will fully refund your money.</span></p>
                <button onClick={openModal} className='mt-4 bg-red-700 text-white px-4 py-2'>Let's Get Started</button>
            </div>

            {/* Pricing Plan: 03 */}
            <div className=' border-2 bg-black border-red-700 h-fit p-4 rounded-lg mt-8 max-w-xs'>
                <h1 className='text-2xl bg-rose-800 text-center p-4'>Amazon Diamond Package <br/><span className='text-2xl'>$17,500</span> <span className='before-price text-xl'>$35,000</span></h1>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Writing & Rewriting of up to 500 Pages</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Unlimited Revisions</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;6 Months of Marketing on Google, Facebook and Amazon</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Book Launch Globally</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Audio Book up to 3 hours</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Audio Book Publishing on Audible.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Full Ownership Rights</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Planning / Creating/updating the outline</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Ghostwriting original content based on interviews or research</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Completion of your book as per the requirements/outline.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Revisions to our writing per your feedback and guidance.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Meticulous editing to ensure your text is free of error.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Adjusting the layout and presentation for the publishing standards</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Add Up to 60-70 Custom Illustrations.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Adjusting the layout and presentation for the publishing standards.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;An attention-grabbing Book Cover.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Turnaround Time of 60 -80 Days.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Rights to make changes to your book.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Editing, Proofreading, and formatting.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Author Website</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Intro Book Video(Video Trailer)</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Author's Bio</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Pitching article ideas to the press.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Publishing on Amazon Kindle, Barnes & Noble, Kobo, Ingram Spark, iBook, and Lulu (Any 5 Platforms)</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Available in 3 different formats E-Book, and Paper Back, Hardcover</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Amazon will be responsible for printing and shipping your book globally</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Guaranteed 6000 Reads in 12 months</p>
                <p className='mt-4'><span className='text-red-500'>Note: The Amazon Diamond Package guarantees you at least $60,000 in revenue in the first year after the book is published, and if we fail to meet this goal, we will fully refund your money.</span></p>
                <button onClick={openModal} className='mt-4 bg-red-700 text-white px-4 py-2'>Let's Get Started</button>
            </div>

            {/* Pricing Plan: 04 */}
            <div className=' border-2 bg-black border-red-700 h-fit p-4 rounded-lg mt-8 max-w-xs'>
                <h1 className='text-2xl bg-rose-800 text-center p-4'>Amazon Platinum Package <br/><span className='text-2xl'>$45,000</span> <span className='before-price text-xl'>$90,000</span></h1>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Unlimited Pages</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Unlimited Revisions</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;12 Months of Marketing on Google, Facebook and Amazon</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Audio Book up to 6 hours</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Audio Book Publishing on Audible etc</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Book Launch Globally</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Full Ownership Rights</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Planning / Creating/updating the outline</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Ghostwriting original content based on interviews or research</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Completion of your book as per the requirements/outline.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Revisions to our writing per your feedback and guidance.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Meticulous editing to ensure your text is free of error.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Adjusting the layout and presentation for the publishing standards.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Add Up to 100 Custom Illustrations.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;An attention-grabbing Book Cover.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Turnaround Time of 60 -80 Days.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Rights to make changes to your book.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Editing, Proofreading, and formatting.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Author Website</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Pitching article ideas to the press.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Intro Book Video(Video Trailer)</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Authors Bio.</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Publishing on Amazon Kindle, Barnes & Noble, Kobo, Ingram Spark, iBook, and Lulu (All Platforms)</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Available in 3 different formats E-Book, and Paper Back, Hardcover</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Amazon will be responsible for printing and shipping your book globally</p>
                <p className='mt-2'><span className='text-red-500'>&#x2713;</span>&nbsp;Guaranteed 12,000 Reads in 12 months</p>
                <p className='mt-4'><span className='text-red-500'>Note: The Amazon Platinum Package guarantees you at least $120,000 in revenue in the first year after the book is published, and if we fail to meet this goal, we will fully refund your money.</span></p>
                <button onClick={openModal} className='mt-4 bg-red-700 text-white px-4 py-2'>Let's Get Started</button>
            </div>
            <AvailModal isOpen={isModalOpen} onClose={closeModal}/>
        </div>
    </section>
  )
}

export default PricingPlans