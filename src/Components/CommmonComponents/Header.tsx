"use client";
import React, { useState, useEffect } from "react";
// import Image from "next/image";
import Link from "next/link";
// import { ChevronDown } from "lucide-react";

// interface DropdownMenuProps {
//   title: string;
//   children: ReactNode;
// }

// interface DropdownItemProps {
//   href: string;
//   children: ReactNode;
// }

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      } flex items-center justify-between px-5`}
    >
      {/* Logo */}
      <div>
        <Link href="/">
          {/* <Image
            className="w-32"
            src={isScrolled ? "/logo.png" : "/logo-white.png"}
            width={512}
            height={512}
            alt="Logo"
          /> */}
          <h1 className="uppercase text-4xl font-semibold text-white">Dravin</h1>
        </Link>
      </div>

      {/* Navigation */}
      {/* <div className={`flex justify-center gap-7 ${isScrolled ? "text-black" : "text-white"}`}>
        <Link href="/" className="cursor-pointer py-4">
          Home
        </Link>

        <Link href="/about" className="cursor-pointer py-4">
          About
        </Link>

        <DropdownMenu title="Services">
          <DropdownItem href="/services/design">Design</DropdownItem>
          <DropdownItem href="/services/development">Development</DropdownItem>
          <DropdownItem href="/services/marketing">Marketing</DropdownItem>
        </DropdownMenu>

        <Link href="/portfolio" className="cursor-pointer py-4">
          Portfolio
        </Link>

        <Link href="/contact" className="cursor-pointer py-4">
          Contact
        </Link>

        <Link href="/login" className="cursor-pointer py-4">
          Login
        </Link>
      </div> */}

      {/* Contact Button */}
      <div>
        <button
          className={`px-8 py-3 text-sm rounded-md ${
            isScrolled ? "bg-black text-white shadow-md" : "bg-[#ffffffcc] text-black"
          }`}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

// const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, children }) => {
//   return (
//     <div className="relative group py-4">
//       <button className="cursor-pointer flex justify-center items-center gap-2">
//         {title}
//         <ChevronDown className="w-4 h-4" />
//       </button>
//       <div className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg w-48 hidden group-hover:block">
//         <ul>{children}</ul>
//       </div>
//     </div>
//   );
// };

// const DropdownItem: React.FC<DropdownItemProps> = ({ href, children }) => (
//   <li className="p-2 hover:bg-gray-200 rounded-md">
//     <Link href={href}>{children}</Link>
//   </li>
// );

export default Header;
