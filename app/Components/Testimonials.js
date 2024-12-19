"use client";

import React, { useState, useEffect } from "react";
import { font2 } from "./font/poppins";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const testimonials = [
        {
            text: "As a teacher, I don’t get time for pretty much ANYTHING, let alone writing books about academia for my students. I was so relieved when I discovered Dan Brown Academy and happy when I got to see the work they did for me. Now my students can read about specific concepts the way I want them to.",
            name: "Meghan Bowen",
            role: "Teacher",
        },
        {
            text: "Working with Dan Brown Academy has been a game-changer for my career. They helped me craft a book that truly represents my ideas and expertise. The team is professional, creative, and supportive every step of the way.",
            name: "Jonathan Carter",
            role: "Business Consultant",
        },
        {
            text: "I always dreamed of publishing my own book, but the process seemed daunting. Thanks to Dan Brown Academy, my dream is now a reality. They took care of everything from writing to publishing, and the results are beyond my expectations!",
            name: "Emily Roberts",
            role: "Entrepreneur",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const { text, name, role } = testimonials[currentIndex];

    return (
        <section className={`${font2.className} mt-4 relative overflow-hidden`}>
            {/* Heading */}
            <div className="flex justify-center items-center">
                <h1 data-aos="fade-down" className="text-3xl md:text-5xl md:max-w-5xl font-bold p-4 text-center relative">
                    <span
                        className="absolute inset-0 bg-yellow-100 h-[14%] md:top-[20%] top-[15%] z-0"
                        style={{ width: "70%" }}
                    />
                    <span className="relative z-10">
                        Our Clients Are What Complete Us. We Value Your Positive Feedback
                    </span>
                </h1>
            </div>

            {/* Testimonial Section */}
            <div className="mt-8 px-4 md:px-20 lg:px-40">
                <div className="p-6 bg-white rounded-lg shadow-lg relative">
                    {/* Testimonial Text */}
                    <p data-aos="fade-up" className="text-gray-700 text-lg md:text-2xl leading-relaxed">{text}</p>

                    {/* Author Info */}
                    <div className="flex items-center mt-6">
                        <div className="p-2 bg-purple-700 text-white rounded-full">
                            <i className="fas fa-quote-left text-xl"></i>
                        </div>
                        <div className="ml-4">
                            <p data-aos="fade-right" className="text-blue-800 font-semibold">{name}</p>
                            <p className="text-gray-500 text-sm">{role}</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-end space-x-4 mt-4">
                    <button
                        data-aos="fade-right"  // AOS animation for previous button
                        className="w-10 h-10 bg-gray-200 hover:bg-gray-300 duration-300 rounded-full shadow-lg flex items-center justify-center transform transition-transform ease-in-out"
                        onClick={handlePrevious}
                    >
                        &lt;
                    </button>
                    <button
                        data-aos="fade-left"  // AOS animation for next button
                        className="w-10 h-10 bg-blue-600 hover:bg-blue-800 duration-300 text-white rounded-full shadow-lg flex items-center justify-center transform transition-transform ease-in-out"
                        onClick={handleNext}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
