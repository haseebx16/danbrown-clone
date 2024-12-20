"use client";

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';  // Slick CSS
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Carousel = () => {
  const logoImages = [
    '/site-logo1.png',
    '/site-logo2.png',
    '/site-logo3.png',
    '/site-logo4.png',
    '/site-logo5.png'
  ];

  useEffect(() => {
          AOS.init({
            duration: 1000,
            once: true,
          });
        }, []);

  const settings = {
    infinite: true,        
    speed: 500,            
    slidesToShow: 5,       
    slidesToScroll: 1,     
    responsive: [          
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="carousel-container bg-gray-100 py-16 overflow-hidden">
      <Slider {...settings}>
        {logoImages.map((logo, index) => (
          <div key={index} data-aos="fade-right" className="p-4">
            <img src={logo} alt={`Brand logo ${index + 1}`} className="w-40 h-12" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
