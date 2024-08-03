import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-semibold">GSTP</div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:justify-end lg:items-center lg:w-auto text-white">
          <a href="/" className="block lg:inline-block mt-4 lg:mt-0 mr-4">
            Home
          </a>
          <a
            href="https://forms.gle/k4VgxFV5gaRr5N4L6"
            target="_blank"
            className="block lg:inline-block mt-4 lg:mt-0 mr-4"
          >
            Submit your Request
          </a>
          <a
            href="/services"
            className="block lg:inline-block mt-4 lg:mt-0 mr-4"
          >
            Services
          </a>
          <a href="#footer" className="block lg:inline-block mt-4 lg:mt-0">
            Contact
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-gray-800 text-white lg:hidden">
          <div className="flex flex-col items-start p-4">
            <a href="/" className="block mt-2">
              Home
            </a>
            <a
              href="https://forms.gle/k4VgxFV5gaRr5N4L6"
              target="_blank"
              className="block mt-2"
            >
              Submit your Request
            </a>
            <a href="/services" className="block mt-2">
              Services
            </a>
            <a href="#footer" className="block mt-2">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
