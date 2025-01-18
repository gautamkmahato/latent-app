"use client";

import Link from 'next/link';
import logo from '../../public/assets/logo.png';
import Image from 'next/image';
import SignUp from '../(auth)/signup/_components/SignUp';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
    const pathname = usePathname();

    return (
        <nav className="flex justify-between items-center py-4 px-14">
        <div className="flex items-center">
            <Image src={logo} alt="hero" className="w-12 h-12" />
        </div>
        <div className="flex gap-10 text-[14px] tracking-wide">
            <Link href="/" className={`${pathname === '/' ? 'text-yellow-100' : 'text-gray-300'} hover:text-white`}>Home</Link>
            <Link href="/episodes" className={`${pathname === '/episodes' ? 'text-yellow-100' : 'text-gray-300'} hover:text-white`}>Episodes</Link>
            <Link href="/stars" className={`${pathname === '/stars' ? 'text-yellow-100' : 'text-gray-300'} hover:text-white`}>Stars Of Latent</Link>
        </div>
        <SignUp />
        </nav>
    );
};

export default Navbar;
