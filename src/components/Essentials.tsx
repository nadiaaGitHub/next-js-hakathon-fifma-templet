import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Essentials() {
  return (
    <section className="font-Helvetica Neue py-8 mx-auto px-4 max-w-[1280px]">
      {/* Heading */}
      <h2 className="text-xl font-bold mb-4 text-center md:text-left">
        The Essentials
      </h2>

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Image 1 */}
        <div className="relative">
          <Link href="/mens" legacyBehavior>
            <a>
              <Image
                src="/images/mens.png"
                alt="Men's Essentials"
                width={400}
                height={400}
                layout="responsive"
                objectFit="cover"
                className="rounded-md"
              />
              <button className="relative rounded-full bottom-20 left-20  transform -translate-x-1/2 bg-white text-black px-4 py-2 text-sm font-medium shadow-md  hover:bg-gray-100">
                Men&apos;s
              </button>
            </a>
          </Link>
        </div>

        {/* Image 2 */}
        <div className="relative">
          <Link href="/womens" legacyBehavior>
            <a>
              <Image
                src="/images/womens.png"
                alt="Women's Essentials"
                width={400}
                height={400}
                layout="responsive"
                objectFit="cover"
                className="rounded-md"
              />
              <button className="relative rounded-full bottom-20 left-24  transform -translate-x-1/2 bg-white text-black px-4 py-2 text-sm font-medium shadow-md  hover:bg-gray-100">
                Women&apos;s
              </button>
            </a>
          </Link>
        </div>

        {/* Image 3 */}
        <div className="relative">
          <Link href="/kids" legacyBehavior>
            <a>
              <Image
                src="/images/kids.png"
                alt="Kids' Essentials"
                width={400}
                height={400}
                layout="responsive"
                objectFit="cover"
                className="rounded-md"
              />
              <button className="relative rounded-full bottom-20 left-24 transform -translate-x-1/2 bg-white text-black px-4 py-2 text-sm font-medium shadow-md  hover:bg-gray-100">
                Kid&apos;s
              </button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
