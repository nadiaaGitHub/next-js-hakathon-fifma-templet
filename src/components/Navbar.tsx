'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-2 px-3 max-w-[92.5%]">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src="/images/Nav-logo.png"
                alt="Nav Logo"
                width={50}
                height={50}
                className="w-14"
              />
            </a>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/features" legacyBehavior>
            <a className="font-semibold text-lg hover:text-black hover:underline hover:font-bold">
              New & Featured
            </a>
          </Link>
          <Link href="/products" legacyBehavior>
            <a className="font-semibold text-lg hover:text-black hover:underline hover:font-bold">
              Men
            </a>
          </Link>
          <Link href="/products" legacyBehavior>
            <a className="font-semibold text-lg hover:text-black hover:underline hover:font-bold">
              Women
            </a>
          </Link>
          <Link href="/products" legacyBehavior>
            <a className="font-semibold text-lg hover:text-black hover:underline hover:font-bold">
              Kids
            </a>
          </Link>
          <Link href="/sale" legacyBehavior>
            <a className="font-semibold text-lg hover:text-black hover:underline hover:font-bold">
              Sale
            </a>
          </Link>
          <Link href="/snkrs" legacyBehavior>
            <a className="font-semibold text-lg hover:text-black hover:underline hover:font-bold">
              SNKRS
            </a>
          </Link>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="absolute left-3 top-2.5 w-4 h-4 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.414-1.414L21 21z"
              />
            </svg>
          </div>

          {/* Heart Image */}
          <div className="w-9 h-9">
            <Link href="/heart">
              <Image
                src="/images/heart.png"
                alt="Heart Icon"
                width={24}
                height={24}
                className="w-full h-full"
              />
            </Link>
          </div>

          {/* Cart Image */}
          <div className="w-9 h-9">
            <Link href="/cart">
              <Image
                src="/images/cart.png"
                alt="Cart Icon"
                width={24}
                height={24}
                className="w-full h-full"
              />
            </Link>
          </div>

          {/* Hamburger Menu Icon */}
          <button
            className="lg:hidden flex items-center"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md py-2">
          <nav className="flex flex-col items-center space-y-2">
            <Link href="/features" className="text-sm font-medium text-gray-700 hover:text-black">
                New & Featured
            </Link>
            <Link href="/products" legacyBehavior>
              <a className="text-sm font-medium text-gray-700 hover:text-black">
                Men
              </a>
            </Link>
            <Link href="/products" legacyBehavior>
              <a className="text-sm font-medium text-gray-700 hover:text-black">
                Women
              </a>
            </Link>
            <Link href="/products" legacyBehavior>
              <a className="text-sm font-medium text-gray-700 hover:text-black">
                Kids
              </a>
            </Link>
            <Link href="/products" legacyBehavior>
              <a className="text-sm font-medium text-gray-700 hover:text-black">
                Sale
              </a>
            </Link>
            <Link href="/products" legacyBehavior>
              <a className="text-sm font-medium text-gray-700 hover:text-black">
                SNKRS
              </a>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
