'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import starImage1 from '../../public/assets/latent-cover-image.png';
import starImage2 from '../../public/assets/latent-cover-image.png';
import starImage3 from '../../public/assets/latent-cover-image.png';

const ImageScroll: React.FC = () => {
  const [images, setImages] = useState<string[]>([
    starImage1.src,
    starImage2.src,
    starImage3.src,
    starImage1.src,
    starImage2.src,
    starImage3.src
  ]);

  // Create a continuous loop for images
  useEffect(() => {
    const interval = setInterval(() => {
      setImages(prevImages => {
        const updatedImages = [...prevImages.slice(1), prevImages[0]];
        return updatedImages;
      });
    }, 2000); // Slow down the speed (2000 ms = 2 seconds per image)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[350px] h-[280px] overflow-hidden bg-transparent">
      {/* Box container */}
      <div className="absolute bottom-0 w-full flex flex-col items-center space-y-0 animate-slideUp">
        {images.map((src, index) => (
          <div key={index} className="w-[350px] h-[205px] flex justify-center py-2">
            <Image
              src={src}
              alt={`Image ${index}`}
              width={350}
              height={205}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScroll;
