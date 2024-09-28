import React, { useState, useEffect } from "react";
import "./Background.css"; // Import the CSS file
import Navbar from "./Navbar";

const Background = () => {
  const images = [
    "https://one8commune.co.in/wp-content/uploads/2024/03/LAH-09970-2.webp",
    "https://one8commune.co.in/wp-content/uploads/2024/03/2-1365x2048.webp",
    "https://one8commune.co.in/wp-content/uploads/2024/03/Copy-of-248531208_579873489736574_1019405788401332836_n.webp",
    "https://one8commune.co.in/wp-content/uploads/2024/03/TH_One8_07386_115.webp",
    "https://one8commune.co.in/wp-content/uploads/2024/03/LAH-00022.webp",
    "https://one8commune.co.in/wp-content/uploads/2024/03/TH_One8_08227_46.webp"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change background every second

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  return (
    
    <div
      id="Home"
      className="slideshow"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${images[currentImageIndex]})`,
      }}
    >
      <div className="content">
        <img
          className="verticalImg"
          src="https://one8commune.co.in/wp-content/uploads/2024/03/One-8-commune-logo-2048x844.png"
          alt="Content Image"
        />
      </div>
    </div>
  );
};

export default Background;
