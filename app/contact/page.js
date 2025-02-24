"use client";

import React, { useEffect, useState } from "react";
import { font2 } from "../Components/font/poppins";
import MainSection from "../Components/Section-Pages/MainSection";
import Testimonials from "../Components/Sections/Testimonials";
import Footer from "../Components/Sections/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import localFont from "next/font/local";
import emailjs from "emailjs-com";
import { font } from "../Components/font/font";

const timesNewRoman = localFont({
  src: "./times.ttf",
  variable: "--font-times-new-roman",
  display: "swap",
});

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      alert("All fields are required!");
      setIsSubmitting(false);
      return;
    }

    emailjs
      .send(
        "service_zfdtt1k", // Replace with your EmailJS service ID
        "template_ssqyv8w", // Replace with your EmailJS template ID
        {
          name,
          email,
          phone,
          message,
        },
        "_09CMb0W-8XfBbNAC" // Replace with your EmailJS public key
      )
      .then(() => {
        alert("Your message was sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send the message. Please try again later.");
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <div className={`${timesNewRoman.className} bg-gray-50 overflow-hidden`}>
        <MainSection
          subHead="CONTACT US TODAY WE ARE NOT DIFFICULT TO REACH"
          mainHead="We Love to Talk Let’s have a dialogue.."
          text="Contact us let's work together and produce awesome books"
        />

        <div className="flex flex-col mt-12 items-center md:items-center p-4">
          <h1
            data-aos="fade-right"
            className={` ${font.className} text-3xl text-black md:text-5xl text-center md:max-w-4xl font-bold p-4`}
          >
            Contact Us And Our Representative Will Reach Out To You
          </h1>

          <form
            onSubmit={handleSubmit}
            className="w-full mt-8 md:mt-0 max-w-lg md:max-w-2xl p-8 rounded-lg"
          >
            <div data-aos="fade-right" className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div data-aos="fade-left" className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div data-aos="fade-up-right" className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div data-aos="fade-up-left" className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              data-aos="flip-right"
              type="submit"
              className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-black duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        <section className={`${font2.className} md:mt-0 mt-24`}>
          <div className="flex flex-col">
            <div className="flex-col bg-gradient-to-b from-red-700 via-red-900 to-black p-6 md:p-12 flex justify-center items-center md:justify-start md:items-start">
              <p
                data-aos="fade-down"
                className="text-white font-bold text-3xl md:text-5xl text-center md:text-left md:max-w-4xl"
              >
                Get Started By Hiring Our Services And Taking The First Step To
                Your Ambition
              </p>
              <div className="flex flex-row md:mt-4 space-x-4">
                <button
                  data-aos="fade-up-right"
                  className="text-black mt-5 bg-white px-4 py-2 rounded-md hover:bg-black hover:text-white duration-300"
                >
                  Let's Get Started
                </button>
                <button
                  data-aos="fade-up-left"
                  className="text-white mt-5 bg-black px-4 py-2 rounded-md hover:bg-white hover:text-black duration-300"
                >
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
      </div>
      <Footer />
    </>
  );
};

export default Page;
