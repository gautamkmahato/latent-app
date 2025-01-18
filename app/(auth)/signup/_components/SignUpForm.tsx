'use client'


import React, { FC } from 'react';
import Image from 'next/image';
import { MailSearch } from 'lucide-react';
import samay from '../../../../public/assets/samay.jpg';

const SignUpForm: FC = () => {
  return (
    <div className="flex items-center justify-center bg-customDark rounded-3xl">
      <div className="bg-customDark px-2 py-8 shadow-lg w-[90%]">
        {/* Profile image at the top */}
        <div className="flex justify-center mb-6">
          <Image
            src={samay}
            alt="Profile Image"
            width={180}
            height={180}
            className="rounded-full"
          />
        </div>

        {/* Form Section */}
        <form>
          {/* Email Label and Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-yellow-50">
              Enter your phone number or email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your phone number or email"
              className="w-full p-3 mt-2 placeholder-gray-600 placeholder-sm border bg-customGray border-borderDark rounded-md focus:outline-none focus:ring-2 focus:ring-borderDark focus:bg-customGray"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-8"
          >
            Login
          </button>

          {/* Login with Google Button */}
          <button
            type="button"
            className="w-full bg-gray-100 font-semibold text-gray-800 py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <MailSearch className="w-5 h-5 font-semibold" />
            <span>Continue with Google</span>
          </button>

          {/* Terms and Conditions Text */}
          <p className="mt-4 text-center text-sm text-gray-500">
            By logging in, you agree to our{' '}
            <a href="/terms" className="text-yellow-100 hover:text-yellow-200 underline">
              Terms and Conditions
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
