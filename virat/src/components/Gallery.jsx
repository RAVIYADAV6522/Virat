import React from 'react'
import  { useState } from 'react';
import './Gallery.css'

export default function Gallery() {

  const images = [
    'https://one8commune.co.in/wp-content/uploads/2024/03/PHOTO-2023-09-07-18-36-44.webp', 
    'https://one8commune.co.in/wp-content/uploads/2024/03/Shruti-Shetty-82.webp',
    'https://one8commune.co.in/wp-content/uploads/2024/03/Super-food-Salad.webp',
    'https://one8commune.co.in/wp-content/uploads/2024/03/LAH-3.webp'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };


  return (
   <>
    <section id='Gallery'>
    <div className='gallery'>
      <div className='innergallery'>
        <div className='g-head'>GALLERY</div>
        <div>
          <img className='g-image' style={{width:'50vw'}} src ={`${images[currentIndex]}`} ></img>
        </div>
        <div className='g-bottom'>
          <h2 onClick={handlePrevious} className='move' >Prev</h2>
          <h2 onClick={handleNext} className='move'>Next</h2>
        </div>
      </div>
    </div> 
    </section>


   
   </>
  )
}
