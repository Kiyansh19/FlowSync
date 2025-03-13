import React, { useState } from 'react';
import logo from '../assets/FlowSyncBlack.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Navbar */}
      <div className="fixed w-full z-100 bg-white shadow-md">
        <div className="flex items-center justify-between p-3 ">
          {/* Logo */}
          <div className="ml-5">
            <a href="#root">
              <img src={logo} alt="FlowSync-logo" className="w-40 drop-shadow-[0_0_0.5px_yellow] brightness-110" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="text-lg font-semibold flex gap-6">
              <a href="#features" className="hover:text-purple-600">Features</a>
              <a href="#pricing" className="hover:text-purple-600">Pricing</a>
              <a href="#testimonials" className="hover:text-purple-600">Testimonials</a>
              <a href="#contact" className="hover:text-purple-600">Contact</a>
            </div>
            <button className="py-2 px-4 text-white rounded text-sm font-semibold cursor-pointer bg-purple-500 hover:bg-purple-700">
              <a href="#pricing">Start Free Trial</a>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleNavbar}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (only visible when `isOpen` is true) */}
      {isOpen && (
      <div className="fixed top-0 right-0 w-50 h-full bg-white/90 shadow-md flex flex-col items-left gap-10 pt-20 z-120 p-4 ">
          {/* Close Button */}
          <button className="absolute top-6.5 right-4" onClick={toggleNavbar}>
            <X />
          </button>
        <div className='flex flex-col items-left gap-10  '>
          <a href="#root" className="text-xl font-semibold hover:text-purple-600 underline decoration-purple-500 " onClick={toggleNavbar}>Home</a>
          <a href="#features" className="text-xl font-semibold hover:text-purple-600 underline decoration-purple-500 " onClick={toggleNavbar}>Features</a>
          <a href="#pricing" className="text-xl font-semibold hover:text-purple-600 underline decoration-purple-500 " onClick={toggleNavbar}>Pricing</a>
          <a href="#testimonials" className="text-xl font-semibold hover:text-purple-600 underline decoration-purple-500 " onClick={toggleNavbar}>Testimonials</a>
          <a href="#contact" className="text-xl font-semibold hover:text-purple-600 underline decoration-purple-500 " onClick={toggleNavbar}>Contact</a>
       </div>
          <button className="py-2 px-4 text-white rounded text-sm font-semibold cursor-pointer bg-purple-500 hover:bg-purple-700" onClick={toggleNavbar}>
            <a href="#pricing">Start Free Trial</a>
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
