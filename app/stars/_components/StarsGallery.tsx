'use client'


import React from 'react';
import Image, { StaticImageData } from 'next/image';
import starsImage1 from '../../../public/assets/star-1.png';
import starsImage2 from '../../../public/assets/star-2.png';
import starsImage3 from '../../../public/assets/star-3.png';
import starsImage4 from '../../../public/assets/star-4.png';
import starsImage5 from '../../../public/assets/star-5.png';

interface GalleryItem {
  image: StaticImageData;
  alt: string;
  name: string;
}

const StarsGallery: React.FC = () => {
  // Array of images for the gallery
  const galleryItems: GalleryItem[] = [
    {
      image: starsImage1,
      alt: 'Talent Name 1',
      name: 'Arjun Sharma'
    },
    {
      image: starsImage2,
      alt: 'Talent Name 2',
      name: 'Priya Kapoor'
    },
    {
      image: starsImage3,
      alt: 'Talent Name 1',
      name: 'Vikram Yadav'
    },
    {
      image: starsImage4,
      alt: 'Talent Name 2',
      name: 'Rahul Patel'
    },
    {
      image: starsImage5,
      alt: 'Talent Name 1',
      name: 'Neha Desa'
    },
    {
      image: starsImage1,
      alt: 'Talent Name 2',
      name: 'Arjun Sharma'
    },
    {
      image: starsImage2,
      alt: 'Talent Name 1',
      name: 'Arjun Sharma'
    },
    {
      image: starsImage3,
      alt: 'Talent Name 2',
      name: 'Arjun Sharma'
    },
    {
      image: starsImage4,
      alt: 'Talent Name 1',
      name: 'Arjun Sharma'
    },
    {
      image: starsImage5,
      alt: 'Talent Name 2',
      name: 'Arjun Sharma'
    },
    {
      image: starsImage1,
      alt: 'Talent Name 1',
      name: 'Arjun Sharma'
    },
    {
      image: starsImage2,
      alt: 'Talent Name 2',
      name: 'Arjun Sharma'
    },
    {
      image: starsImage3,
      alt: 'Talent Name 1',
      name: 'Arjun Sharma'
    },
    {
      image: starsImage4,
      alt: 'Talent Name 2',
      name: 'Arjun Sharma'
    },
    {
      image: starsImage5,
      alt: 'Talent Name 1',
      name: 'Arjun Sharma'
    }
  ];

  return (
    <div className="w-full p-8 px-14 pt-24">
      {/* Heading Section */}
      <div className="mb-20">
        <h2 className="text-[40px] font-bold mb-4 bg-gradient-to-r from-[#ffde68]  to-[#493b1d] text-transparent bg-clip-text">Stars Of Latent</h2>
        <div className='w-1/2'>
          <p className="text-[16px] text-gray-300">
            A gathering of our brightest talents, showcasing their hidden
            potential and extraordinary skills, ready to shine in the spotlight.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {galleryItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center">
            {/* Star shape container */}
            <div className="relative flex justify-center items-center w-full">
              <Image
                src={item.image}
                alt={item.alt}
                className="rounded-lg"
                width={200}
                height={200}
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Name display */}
            <span className="text-lg font-semibold mt-2 block w-full text-center">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarsGallery;
