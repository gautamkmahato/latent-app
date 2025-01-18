'use client'


import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import image1 from '../../public/assets/latent-cover-image.png'
import image2 from '../../public/assets/cover2.jpg'
import image3 from '../../public/assets/cover3.jpg'


const VerticalSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  // Sample images - replace with your actual images
  const images = [
    {
      url: image1,
      alt: 'Slide 1',
      caption: 'First Slide'
    },
    {
      url: image2,
      alt: 'Slide 2',
      caption: 'Second Slide'
    },
    {
      url: image3,
      alt: 'Slide 3',
      caption: 'Third Slide'
    },
    {
      url: image1,
      alt: 'Slide 4',
      caption: 'Fourth Slide'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-black">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 to-black/80 z-10" />
      
      <div className="absolute inset-0 py-[200px] z-20">
        <div 
          ref={sliderRef}
          className="h-full transition-transform duration-700 ease-in-out relative"
          style={{ transform: `translateY(-${activeIndex * (100 + 20)}%)` }}
        >
          {images.map((image, index) => (
            <div 
              key={index}
              className={`w-full absolute transition-all duration-700 mb-12
                ${Math.abs(activeIndex - index) <= 1 ? 'opacity-100' : 'opacity-0'}
                ${index === activeIndex 
                  ? 'h-[400px] z-10 scale-105 shadow-[0_0_50px_rgba(218,165,32,0.3)]' 
                  : 'h-[400px] opacity-30 scale-95'}`}
              style={{ 
                top: `${index * (100 + 20)}%`,
              }}
            >
              <div className={`relative w-full h-full rounded-2xl overflow-hidden
                ${index === activeIndex ? 'shadow-[0_0_30px_rgba(218,165,32,0.5)]' : ''}`}>
                {/* Dark overlay for consistent mood */}
                <div className="absolute inset-0 bg-black/40 z-10" />
                
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-contain rounded-2xl"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority={index === 0}
                />
                
                {index === activeIndex && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent rounded-b-2xl z-20">
                    <h3 className="text-center font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 drop-shadow-[0_0_8px_rgba(218,165,32,0.5)]">
                      {image.caption}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 ease-in-out rounded-full border-2 border-yellow-400/80
              ${activeIndex === index 
                ? 'w-3 h-8 bg-yellow-400 shadow-[0_0_10px_rgba(218,165,32,0.5)]' 
                : 'w-3 h-3 bg-yellow-400/50 hover:bg-yellow-400/75'}`
            }
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VerticalSlider;