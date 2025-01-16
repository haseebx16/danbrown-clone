"use client";
import React from "react";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-red-800 to-black rounded-lg shadow-lg w-full max-w-4xl p-8 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-black duration-300"
          onClick={onClose}
        >
          ✖
        </button>

        

        {/* Form */}
        <div className="text-white ">
          <h2 className="text-2xl text-center font-bold mb-4">
            Get Started with Ghostwriting!
          </h2>
          <p className="text-white text-center mb-6">
            Fill out the form below and we’ll get back to you shortly.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Enter a brief description about your book"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows="3"
              required
            ></textarea>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="newsletter" />
              <label htmlFor="newsletter" className="text-white text-md">
                To receive our weekly Newsletter/SMS and offers, check here.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 duration-300"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;