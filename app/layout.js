"use client";

import React, { useEffect, useState } from "react";
import "./globals.css";
import localFont from "next/font/local";

const timesNewRoman = 
  localFont({
      src: "./times.ttf",
      variable: "--font-times-new-roman",
      display: "swap",
  });
  
export default function Layout({ children }) {
  
  return (
    <>
      <html lang="en">
        <body className={timesNewRoman?.className}>
          {children}
        </body>
      </html>
    </>
  );
}
