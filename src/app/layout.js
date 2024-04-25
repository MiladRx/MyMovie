"use client"

import React, { useState, useEffect } from "react";
import "/src/app/globals.css";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 4 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Clear the timeout when the component unmounts or when loading is finished
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className="bg-white"> {/* Set background color to white */}
        {/* Display loading screen if loading state is true */}
        {loading && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white  z-50">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        )}

        <div className="max-h-[100vh] mx-auto overflow-hidden"> {/* Set maximum width and height, and hide overflow */}
          {children} {/* Inserting other content here */}
        </div>
      </body>
    </html>
  );
}
