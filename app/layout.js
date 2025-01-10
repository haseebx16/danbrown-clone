"use client";

import { useEffect } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const timesNewRoman = localFont({
  src: './times.ttf', // Path to the .ttf file in the public folder
  variable: '--font-times-new-roman',
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Apply the font to your components
export default function Layout({ children }) {
  return (
    <html lang="en" className={`${timesNewRoman.variable} font-times-new-roman`}>
      <body>
        {children}
      </body>
    </html>
  );
}