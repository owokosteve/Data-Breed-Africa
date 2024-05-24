'use client'

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import NavBar from "./ui/NavBar";
import Footer from "./ui/Footer";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Dynamically load Bootstrap script asynchronously
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    script.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
    script.crossOrigin = 'anonymous';
    script.async = true;
    document.head.appendChild(script);
    // Whatsapp script
    const script2 = document.createElement('script');
    script2.src = "https://static.elfsight.com/platform/platform.js";
    script2.defer = true;
    document.head.appendChild(script2);
    return () => {
      // Cleanup: Remove the script when component unmounts
      document.head.removeChild(script);
      document.head.removeChild(script2);
    };
  }, []);
  return (
    <html lang="en">
      <title>DataBreed Africa | Welcome</title>
      <body>
        <NavBar />
        {children}
        <Footer />
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
      </body>
    </html>
  );
}
