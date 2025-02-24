"use client";

import React, { useEffect, useState } from "react";
import "./globals.css";
import localFont from "next/font/local";
import { font } from "./Components/font/font";
import Script from "next/script";

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
        <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16875320034"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16875320034');
          `}
        </Script>
        </head>
        <body className={font.className + " overflow-x-hidden"}>
          {children}
        </body>
      </html>
    </>
  );
}
