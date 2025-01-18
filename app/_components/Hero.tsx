import { FC } from 'react';
import hero from '../../public/assets/hero-image.png';
import Image from 'next/image';
import VerticalSlider from './VerticalSlider';
import ImageScroll from './ImageScroll';

const Hero: FC = () => {
  return (
    <div className="flex min-h-[60vh] items-center relative px-16 mb-2">
      {/* Left Content Section */}
      <div className="w-full lg:w-1/2 z-10">
        <h1 className="text-[40px] font-bold mb-2">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-[#ffe065] to-[#94793e] text-transparent bg-clip-text">India's Got Latent</span>
        </h1>
        
        <p className="text-gray-300 text-[17px] mb-8 max-w-xl leading-relaxed">
          Hosted by the ever-sarcastic <span className="text-white">Samay Raina</span>, 
          this show is less about finding the next superstar and more about giving your 
          latent (read: bizarre) talents a chance to shine—while being lovingly roasted.
        </p>
        
        <button className="bg-gradient-to-r font-semibold from-[#ffe477] via-[#ead16d] to-[#b4934b] hover:from-[#b4934b] hover:via-[#d2be6d] hover:to-[#b4934b] focus:outline-none px-6 py-3 rounded-md text-black
              hover:bg-[#C4A028] transition-colors duration-200">
          Join Latent+
        </button>
      </div>

      <div className="hidden lg:block absolute right-0 top-0 w-2/3 h-full mt-16">
        <div className="relative h-full">
          <div className="absolute right-0 w-full max-w-xl
            rounded-xl overflow-hidden shadow-2xl">
            <ImageScroll />
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default Hero;
