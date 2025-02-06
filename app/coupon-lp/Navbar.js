"use client";

import React, { useState, useEffect } from "react";
import navLinks from "./data/navLinks";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import AvailModal from "./AvailModal";

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(path);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <>
    <div className="py-2 w-full flex justify-end px-4 items-end bg-gradient-to-br from-red-800 to-black">
        <a href="mailto:support@stephenkingacademy.com"><p className="text-white text-right">support@stephenkingacademy.com</p></a>
    </div>
    <div className="relative z-50 flex justify-center text-black items-center flex-wrap bg-white">
      <header
        className={`${timesNewRoman.className} w-screen bg-darkGrey bg-opacity-90 py-0 text-black`}
      >
        <nav className="flex items-center justify-between h-full px-8">
          <Link href="/">
            <div className="flex items-center">
             
              <img src="/nav-logo.png" alt="Logo" className="w-40 h-7 sm:h-10 md:h-28 lg:h-14" style={{ height: '120px' }} />
            </div>
          </Link>

          {/* Hamburger icon for mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center h-screen text-white fixed inset-0 bg-gradient-to-br from-black to-red-800 z-50 md:hidden"
              >
                <div className="absolute top-0 left-0 p-4">
                  
                  <img src="/logo.png" alt="Logo" className="w-auto h-7" style={{ height: '120px' }} />
                </div>

                <div className="absolute top-0 right-0 p-4">
                  <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col items-center justify-center space-y-0">
                  
                  
                <p className="text-xl mt-4 mb-6">Call Us Now <br/><span className="text-red-700 text-2xl">(310) 564-9107</span></p>
                  <button onClick={openModal} className="px-6 py-2 bg-red-700 text-white uppercase hover:bg-white border border-black hover:text-black duration-300">
                    Let's Get Started
                  </button>

                  
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:(310) 564-9107"><p className="text-xl">Call Us Now <br/><span className="text-red-700 text-2xl">(310) 564-9107</span></p></a>
            <button onClick={openModal} className="px-3 py-2 bg-red-700 text-white uppercase hover:bg-white border border-black hover:text-black duration-300">
              Let's Get Started
            </button>
          </div>
          <AvailModal isOpen={isModalOpen} onClose={closeModal}/>
        </nav>
      </header>
    </div>
    </>
  );
};

export default Navbar;
