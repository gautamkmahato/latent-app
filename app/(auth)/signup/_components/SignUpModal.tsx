'use client'
import React, { ReactNode } from 'react';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose} 
      />
      
      {/* Modal Content - Removed padding classes */}
      <div className="relative bg-transparent w-[90%] rounded-3xl border-2 border-borderDark max-w-sm z-50">
        {/* Body - Removed padding */}
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
