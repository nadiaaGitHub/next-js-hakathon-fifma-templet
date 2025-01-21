
"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DoNotMiss() {
  const [isClient, setIsClient] = useState(false);

  // Set `isClient` to true only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="font-Helvetica Neue py-8 mx-auto px-4 max-w-[1280px]">
      {/* Heading */}
      <h2 className="text-xl font-bold mb-4 text-center md:text-left">
        Don&apos;t Miss
      </h2>

      {/* Images Section */}
      <div>
        {/* Image */}
        <div className="relative">
          <Link href="/men" legacyBehavior>
            <a>
              {/* Render Image only on the client-side */}
              {isClient && (
                <Image
                  src="/images/don't miss.png"
                  alt="Don't Miss"
                  width={1334}
                  height={700}
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-md"
                />
              )}
            </a>
          </Link>
        </div>

        {/* Text Section */}
        <div className="text-center p-6 md:p-9">
          <h1 className="text-3xl md:text-[55px] font-medium p-3">
            FLIGHT ESSENTIALS
          </h1>
          <p className="text-gray-600 text-sm md:text-base pb-4 md:pb-5">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
          <Link href={'/products'}>
            <button className="rounded-full bg-black text-white hover:bg-blue-300 hover:text-black hover:text-lg py-2 px-6 transition-colors duration-300">
              Shop
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
