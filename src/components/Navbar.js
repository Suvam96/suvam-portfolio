"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold ">
              Suvam Das
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-gray-700 hover:gradient-bg">
              About
            </Link>
            <Link href="/#services" className="text-gray-700 hover:gradient-bg">
              Services
            </Link>
            <Link href="/#portfolio" className="text-gray-700 hover:gradient-bg">
              Portfolio
            </Link>
            <Link href="/#blog" className="text-gray-700 hover:gradient-bg">
              Blog
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:gradient-bg">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:gradient-bg focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              href="/#about"
              className="block px-3 py-2 text-gray-700 hover:gradient-bg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#services"
              className="block px-3 py-2 text-gray-700 hover:gradient-bg"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#portfolio"
              className="block px-3 py-2 text-gray-700 hover:gradient-bg"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/#blog"
              className="block px-3 py-2 text-gray-700 hover:gradient-bg"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className="block px-3 py-2 text-gray-700 hover:gradient-bg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

