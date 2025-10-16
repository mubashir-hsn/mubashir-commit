"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-transparent">
      <nav className="bg-white shadow-md w-full md:w-[90%] mx-auto rounded-full px-10 py-5 relative ">
      <div className="max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-lg md:text-2xl font-medium text-orange-400 heading">
          Mubashar.<span className="text-gray-600">Dev</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-800 capitalize font-medium font-['Nunito']">
          <li><Link href="#about" className="hover:text-orange-600">About</Link></li>
          <li><Link href="#projects" className="hover:text-orange-600">Projects</Link></li>
          <li><Link href="#services" className="hover:text-orange-600">Services</Link></li>
          <li><Link href="#contact" className="hover:text-orange-600">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-[4.8rem] right-12 px-16 py-5 rounded-lg">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 capitalize font-['Nunito'] font-medium">
            <li><Link href="#about" className="hover:text-orange-600" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="#projects" className="hover:text-orange-600" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="#services" className="hover:text-orange-600" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="#contact"  className="hover:text-orange-600"onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
    </header>
  );
}
