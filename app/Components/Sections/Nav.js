"use client";

import React, { useState, useEffect } from "react";
import navLinks from "../data/navLinks";
import { font2 } from "../font/poppins";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        <p className="text-white text-right">support@stephenkingacademy.com</p>
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
                className="flex flex-col items-center justify-center h-screen fixed inset-0 bg-gradient-to-br from-cyan-400 to-orange-300 z-50 md:hidden"
              >
                <div className="absolute top-0 left-0 p-4">
                  
                  <img src="/footer-logo.png" alt="Logo" className="w-auto h-7" style={{ height: '120px' }} />
                </div>

                <div className="absolute top-0 right-0 p-4">
                  <button onClick={toggleMenu} className="text-black focus:outline-none">
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
                  {navLinks.map((item) => (
                    <motion.span
                      key={item.label}
                      whileHover={{ scale: 1.05 }}
                      className={`${
                        activeLink === item.href ? "border-b-2 border-red-600" : ""
                      } text-black block py-4 font-bold text-xl cursor-pointer`}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </motion.span>
                  ))}
                  <Link href="/contact">
                    <button className="py-2 px-6 bg-violet-700 text-white">
                      Contact Our Experts!
                    </button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden md:flex items-center justify-between space-x-8"
          >
            {navLinks.map((item) => (
              <div
                key={item.label}
                onMouseEnter={item.label === "Our Services" ? handleMouseEnter : null}
                onMouseLeave={item.label === "Our Services" ? handleMouseLeave : null}
                className="relative"
              >
                <motion.span
                  whileHover={{ scale: 1.1, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`${
                    activeLink === item.href ? "border-b-2 border-red-600" : ""
                  } block text-md font-medium cursor-pointer hover:border-b-2 hover:border-red-600`}
                >
                  <Link href={item.href}>{item.label}</Link>
                </motion.span>
              </div>
            ))}
            <button className="px-3 py-2 bg-red-700 text-white uppercase hover:bg-white border border-black hover:text-black duration-300">
              Contact Our Experts!
            </button>
          </motion.div>
        </nav>
      </header>
    </div>
    </>
  );
};

export default Nav;
