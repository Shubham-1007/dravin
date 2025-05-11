"use client";

import Link from "next/link";

const Header: React.FC = () => {

  return (
    <div
      className={` border-b border-gray-700 fixed top-0 left-0 w-full z-40 transition-all duration-300 py-4 bg-[#111828c8] backdrop-blur-md flex items-center justify-between px-5`}
    >
      {/* Logo */}
      <div>
        <Link href="/">
          <h1 className="uppercase text-4xl font-semibold text-white">Dravin</h1>
        </Link>
      </div>

      {/* Contact Button */}
      <div>
        <button
          className="px-8 py-3 text-sm rounded-md bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};


export default Header;
