'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const handleSignup = () => {
    router.push('/signup');
  };
  const handleLogin = () => {
    router.push('/login');
  };
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Wallet</h1>
        <div>
          <span className="text-lg" onClick={handleSignup}>Signup</span>
          <span className='px-[2rem]' onClick={handleLogin}>Login</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
