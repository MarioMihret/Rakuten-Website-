import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <nav className="shadow-lg bg-purple-50">
        <div className="flex items-center justify-between px-4 py-4">
          <a className="flex" href="/">
            <img
              width="113px"
              height="34px"
              alt="Rakuten Logo"
              className="chakra-image"
              src="https://static.rakuten.com/static/svg/rakuten/rak-logo-brand-v1.svg"
            />
          </a>
          <span className="hidden mx-auto text-lg font-bold text-center text-gray-500 md:block">
            Join Now for an extra 10% Cash Back on purchases made in your first
            7 days.*
          </span>
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <p className="hidden font-bold text-purple-600 cursor-pointer md:block hover:underline">
            Sign In
          </p>
        </div>
        {isOpen && (
          <div className="flex flex-col px-4 py-2 md:hidden">
            <span className="mb-2 text-lg font-bold text-center text-gray-500">
              Join Now for an extra 10% Cash Back on purchases made in your first 7 days.*
            </span>
            <p className="font-bold text-center text-purple-600 cursor-pointer hover:underline">
              Sign In
            </p>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;