import React from 'react';
import Image from 'next/image';
import mobile from '../../public/assets/Mobile-preview.png';
import googlePlayStore from '../../public/assets/pngegg-1.png';
import appleAppStore from '../../public/assets/pngegg-2.png';
import logo from '../../public/assets/logo.png';

const MobileAppSection: React.FC = () => {
  return (
    <div className="relative my-24">
      {/* Outer glow container */}
      <div className="absolute inset-0 -m-1 rounded-3xl bg-gradient-to-br from-[#e2d07a] to-[#d4be6d] blur-xl opacity-30" />
      
      {/* Inner glow border */}
      <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-[#e2d07a] via-[#d4be6d] to-[#e2d07a]">
        {/* Main content container */}
        <div className="bg-gradient-to-br from-[#a2934b] via-[#f1df84] to-[#ac9a59] rounded-3xl pt-4 pb-8 px-8 lg:px-12 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start justify-between h-full">
            {/* Left content */}
            <div className="lg:w-1/2 mb-8 lg:mb-0 flex flex-col justify-between">
              {/* Logo */}
              <div className="mb-6">
                <Image
                  src={logo}
                  alt="Latent Logo"
                  width={128}
                  height={128}
                />
              </div>
              
              {/* Text content */}
              <h2 className="text-4xl font-bold mb-4 text-[#1a1a1a]">
                Install Latent on mobile
              </h2>
              <p className="text-[#1a1a1a] text-[16px] mb-8 max-w-md">
                Grab the app to check out all the cool exclusive stuff any time,
                right from your phone. Download the Latent app today!
              </p>
              
              {/* App store buttons */}
              <div className="flex gap-4">
                <Image src={googlePlayStore} alt='Google Play Store icon' width={160} height={50} />
                <Image src={appleAppStore} alt='Apple App Store icon' width={160} height={50} />
              </div>
            </div>
            
            {/* Right content - Phone mockup */}
            <div className="lg:w-1/2 flex justify-center items-end lg:absolute lg:right-12 lg:bottom-0">
              <div className="flex items-end">
                <Image src={mobile} alt="App Screenshot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
