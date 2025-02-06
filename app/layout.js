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
  
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://embed.tawk.to/67a505243a842732607abbb4/1ije9o5ne";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <html lang="en">
        <body className={timesNewRoman?.className + " overflow-x-hidden"}>
          {children}
        </body>
      </html>
    </>
  );
}
