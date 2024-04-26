"use client"

import React, { useState, useEffect } from "react";
import "/src/app/globals.css";

export default function RootLayout({ children }) {
  



  return (
    <html lang="en">
      <body className="bg-white"> 
        <div className="max-h-[100vh] mx-auto overflow-hidden"> 
          {children} 
        </div>
      </body>
    </html>
  );
}
