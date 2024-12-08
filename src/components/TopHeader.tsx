import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TopHeader() {
  return (
    <header className="bg-[#F5F5F5] py-3 text-black px-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" legacyBehavior>
            <a className="w-[24px] h-[24px] p-[3px] pt-[3px] pr-[2.59px] pb-[3.03px] pl-[2.21px]">
              <Image
                src="/images/header logo.png"
                alt="Header Logo"
                width={24}
                height={24}
                className="block"
              />
            </a>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center space-x-4 text-center text-sm md:text-base mt-4 md:mt-0">
          <Link href="/products" legacyBehavior>
            <a className="font-helvetica text-[11px] font-medium leading-[14px] text-left hover:underline decoration-[none]">
              Find a Store
            </a>
          </Link>
          <span className="hidden md:inline text-gray-400">|</span>
          <Link href="/help" legacyBehavior>
            <a className="font-helvetica text-[11px] font-medium leading-[14px] text-left hover:underline decoration-[none]">
              Help
            </a>
          </Link>
          <span className="hidden md:inline text-gray-400">|</span>
          <Link href="/joinus" legacyBehavior>
            <a className="font-helvetica text-[11px] font-medium leading-[14px] text-left hover:underline decoration-[none]">
              Join Us
            </a>
          </Link>
          <span className="hidden md:inline text-gray-400">|</span>
          <Link href="/login" legacyBehavior>
            <a className="font-helvetica text-[11px] font-medium leading-[14px] text-left hover:underline decoration-[none]">
              Sign In
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
