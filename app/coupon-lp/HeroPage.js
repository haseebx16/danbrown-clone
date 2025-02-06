"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import AvailModal from "./AvailModal";
import { font } from "./font/font";

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const HeroPage = () => {
  const [timeLeft, setTimeLeft] = useState(3600);
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) return 3600;
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { hours, minutes, secs };
  };

  const { hours, minutes, secs } = formatTime(timeLeft);

  return (
    <div className={`${font.className} relative text-black`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <img
        src="/bg-final.jpg"
        className="w-full relative h-screen md:h-[48rem] object-cover"
        alt="Hero Background"
      />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex flex-col mt-48 items-start justify-center text-white text-center p-12 md:mt-8"
      >
        <div className="flex space-x-8 ">
          <div className="text-center">
            <div
              className="w-20 h-20 flex-col rounded-full border-8 animate-glow-red border-red-600 flex items-center justify-center text-2xl font-bold"
            >
            <p className="mt-2 text-white text-xs">HRS</p>
              {hours}
            </div>
          </div>
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full border-8 border-red-600 animate-glow-red flex flex-col items-center justify-center text-2xl font-bold"
            >
            <p className="mt-2 text-white text-xs">MINS</p>
              {minutes}
            </div>
          </div>
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full border-8 border-red-600 animate-glow-red flex flex-col items-center justify-center text-2xl font-bold"
            >
            <p className="mt-2 text-white text-xs">SEC</p>
              {secs}
            </div>
          </div>
        </div>
        <h1 className="text-md md:text-4xl mt-6 font-bold uppercase leading-relaxed">
          Become A Best Seller Author
        </h1>
        <p className="text-3xl text-red-500 md:text-4xl max-w-5xl font-bold text-left  leading-tight mt-8">
          HIRE Top Ranked Writers from <br /> Stephen King Academy AT 50% OFF
        </p>
        <p className="mt-6 md:mt-8 uppercase space-x-4 space-y-4 text-sm max-w-3xl">
          <span className="text-red-500">&#x2713; 93% </span> of the customers hire
          <span className="text-red-500">&#x2713; 2.5k+ </span> WRITERS AND EDITORS
          <br />
          <span className="text-red-500 text-left mt-4">&#x2713; 100%</span> SATISFACTION GUARANTEED
          <br />
          <span className="text-red-500 mt-4">&#x2713; GHOSTWRITTEN</span> UNDER THE SUPERVISION OF STEPHEN KING
        </p>

        {/* Timer */}
        

        <div className="flex space-x-2 mt-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="bg-red-700 font-bold uppercase px-4 py-2 tracking-widest"
            onClick={openModal}
          >
            Activate Coupon
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-black font-bold uppercase px-4 py-2 tracking-widest"
          >
            Live Chat
          </motion.button>
        </div>
        <div className="flex md:flex-row md:space-x-8 space-y-8 md:mt-16 md:space-y-0 flex-wrap  justify-center items-center md:mt-12">
          <img src="/company-1.png" />
          <img src="/company-2.png" />
          <img src="/company-3.png" />
          <img src="/company-4.png" />
        </div>
      </motion.div>
      <AvailModal isOpen={isModalOpen} onClose={closeModal} />  
      <style jsx>{`
        @keyframes glow-blue {
          0% {
            box-shadow: 0 0 10px #3b82f6;
          }
          50% {
            box-shadow: 0 0 20px #3b82f6;
          }
          100% {
            box-shadow: 0 0 10px #3b82f6;
          }
        }

        @keyframes glow-green {
          0% {
            box-shadow: 0 0 10px #22c55e;
          }
          50% {
            box-shadow: 0 0 20px #22c55e;
          }
          100% {
            box-shadow: 0 0 10px #22c55e;
          }
        }

        @keyframes glow-red {
          0% {
            box-shadow: 0 0 10px #ef4444;
          }
          50% {
            box-shadow: 0 0 20px #ef4444;
          }
          100% {
            box-shadow: 0 0 10px #ef4444;
          }
        }

        .animate-glow-blue {
          animation: glow-blue 1.5s infinite;
        }

        .animate-glow-green {
          animation: glow-green 1.5s infinite;
        }

        .animate-glow-red {
          animation: glow-red 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroPage;
