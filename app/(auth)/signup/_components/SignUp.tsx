'use client';

import { useState } from "react";
import SignUpForm from './SignUpForm';
import SignUpModal from './SignUpModal';

const SignUp: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
    return (
      <div className="p-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r font-semibold from-[#ffe477] via-[#ead16d] to-[#b4934b] hover:from-[#b4934b] hover:via-[#d2be6d] hover:to-[#b4934b] focus:outline-none px-6 py-2 rounded-md text-black
              hover:bg-[#C4A028] transition-colors duration-200"
        >
          Login
        </button>
  
        <SignUpModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Example Modal"
        >
          <SignUpForm />
        </SignUpModal>
      </div>
    );
};

export default SignUp;
