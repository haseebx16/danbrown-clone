"use client";

import React, { useState, useEffect } from "react";
import { font2 } from "../font/poppins";
import AOS from 'aos';
import 'aos/dist/aos.css';
import localFont from "next/font/local";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const Testimonials = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const testimonials = [
        {
            text: "As a teacher, I don’t get time for pretty much ANYTHING, let alone writing books about academia for my students. I was so relieved when I discovered Stephen King Academy and happy when I got to see the work they did for me. Now my students can read about specific concepts the way I want them to.",
            name: "Meghan Bowen",
            role: "Teacher",
        },
        {
            text: "Working with Stephen King Academy has been a game-changer for my career. They helped me craft a book that truly represents my ideas and expertise. The team is professional, creative, and supportive every step of the way.",
            name: "Jonathan Carter",
            role: "Business Consultant",
        },
        {
            text: "I always dreamed of publishing my own book, but the process seemed daunting. Thanks to Stephen King Academy, my dream is now a reality. They took care of everything from writing to publishing, and the results are beyond my expectations!",
            name: "Emily Roberts",
            role: "Entrepreneur",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className={`${timesNewRoman.className} mt-4 relative overflow-hidden`}>
            {/* Heading */}
            <div className="flex justify-center items-center">
                <h1 data-aos="fade-down" className="text-3xl md:text-5xl md:max-w-5xl font-bold p-4 text-center relative">
                    
                    <span className="relative text-white md:text-black z-10">
                        Our Clients Are What Complete Us. We Value Your Positive Feedback
                    </span>
                </h1>
            </div>

            {/* Testimonial Section */}
            <div className="mt-8 px-4 md:px-20 lg:px-40">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-lg relative">
                            {/* Testimonial Text */}
                            <p data-aos="fade-up" className="text-gray-700 text-lg md:text-2xl leading-relaxed">{testimonial.text}</p>

                            {/* Author Info */}
                            <div className="flex items-center mt-6">
                                <div className="p-2 bg-purple-700 text-white rounded-full">
                                    <i className="fas fa-quote-left text-xl"></i>
                                </div>
                                <div className="ml-4">
                                    <p data-aos="fade-right" className="text-blue-800 font-semibold">{testimonial.name}</p>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;
