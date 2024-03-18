import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`z-40 py-5 sticky bg-black opacity-75 top-0 ${isLoaded ? 'fade-in' : ''}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center'>
            <img className='w-32 h-28 mb-3 sm:w-32 sm:h-28 sm:mb-3' src="logo1.png" alt="" />
          </div>

          {/* Toggle button for small screens */}
          <div className='-mr-2 flex items-center md:hidden'>
            <button
              onClick={toggleNavbar}
              type='button'
              className='text-white hover:text-gray-300 focus:outline-none focus:text-white transition duration-300 ease-in-out transform'
            >
              <svg
                className={`h-6 w-6 ${isOpen ? 'rotate-180' : ''}`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <div className='hidden md:flex md:items-center md:space-x-4'>
            <a href='#home' className='text-white hover:text-gray-300 transition duration-300 ease-in-out transform border-b-2 border-transparent hover:border-white'>
              Home
            </a>
            <a href='#about' className='text-white hover:text-gray-300 transition duration-300 ease-in-out transform border-b-2 border-transparent hover:border-white'>
              About us
            </a>
            <a href='#skills' className='text-white hover:text-gray-300 transition duration-300 ease-in-out transform border-b-2 border-transparent hover:border-white'>
              Skills
            </a>
            <a href='#projects' className='text-white hover:text-gray-300 transition duration-300 ease-in-out transform border-b-2 border-transparent hover:border-white'>
              Projects
            </a>
            <a href='#contact' className='text-white hover:text-gray-300 transition duration-300 ease-in-out transform border-b-2 border-transparent hover:border-white'>
              Contact us
            </a>
          </div>
        </div>
      </div>

      {/* Responsive navigation menu */}
      <div className={`md:hidden transition-max-h duration-500 ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'} ${isOpen ? 'border-b-2' : 'border-0'}`}>
        <div className={`px-2 pt-5 pb-3 space-y-1 sm:px-3 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <a href='#home' className='block text-white text-center hover:text-gray-300 transition duration-300 ease-in-out transform'>
            Home
          </a>
          <a href='#about' className='block text-white text-center hover:text-gray-300 transition duration-300 ease-in-out transform'>
            About us
          </a>
          <a href='#skills' className='block text-white text-center hover:text-gray-300 transition duration-300 ease-in-out transform'>
            Skills
          </a>
          <a href='#projects' className='block text-white text-center hover:text-gray-300 transition duration-300 ease-in-out transform'>
            Projects
          </a>
          <a href='#contact' className='block text-white text-center hover:text-gray-300 transition duration-300 ease-in-out transform'>
            Contact us
          </a>
        </div>
      </div>
    </nav>
  );
}
