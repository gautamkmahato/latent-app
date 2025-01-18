
import { Instagram, Youtube, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import footerLogo from '../../public/assets/footer-logo.png';

const Footer = () => {
  return (
    <footer className="bg-customDark py-12 px-6 mt-12 mx-8 my-6 rounded-3xl border-2 border-borderDark" >
      <div className="max-w-7xl mx-auto px-6">
        {/* Use Flexbox to separate left and right columns */}
        <div className="flex justify-between items-start">
          {/* Left column */}
          <div className='w-1/3'>
            <Image src={footerLogo} alt="hero" />
            <p className="text-gray-400 mt-4 text-[14px]">
            India’s Got Latent humorously celebrates India’s quirkiest hidden talents, blending entertainment, satire, and unconventional performances.
            </p>
            <div className="mt-8">
              <div className="flex gap-4">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <X  className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Right columns: Two sections side by side */}
          <div className="grid grid-cols-2 gap-24 ml-auto mr-16">
            {/* First links section */}
            <div>
              <h3 className="font-bold mb-4">Links</h3>
              <div className="space-y-2 text-[14px]">
                <Link href="/" className="block text-gray-400 hover:text-white">Home</Link>
                <Link href="/episodes" className="block text-gray-400 hover:text-white">Episodes</Link>
                <Link href="/" className="block text-gray-400 hover:text-white">Latents Details</Link>
              </div>
            </div>

            {/* Second links section */}
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <div className="space-y-2 text-[14px]">
                <Link href="/" className="block text-gray-400 hover:text-white">Terms & Conditions</Link>
                <Link href="/policy" className="block text-gray-400 hover:text-white">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-borderDark  text-[14px] mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
