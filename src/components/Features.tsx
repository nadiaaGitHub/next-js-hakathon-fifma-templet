
"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Features() {
  const [isClient, setIsClient] = useState(false); // To handle client-side logic

  useEffect(() => {
    setIsClient(true); // This will run only on the client
  }, []);

  return (
    <section className="font-Helvetica Neue py-8 mx-auto px-4 max-w-[1280px]">
      {/* Heading */}
      <h2 className="text-xl font-bold mb-2 text-center md:text-left">
        Featured
      </h2>

      {/* Images Section */}
      <div>
        {/* Image */}
        <div className="relative">
          <Link href="/mens" legacyBehavior>
            <a>
              {/* Ensure Image is only rendered after client-side */}
              {isClient && (
                <Image
                  src="/images/features.png"
                  alt="Features"
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
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="text-gray-600 text-sm md:text-base pb-4 md:pb-5">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <button className="rounded-full bg-black text-white hover:bg-blue-300 hover:text-black hover:text-lg py-2 px-6 transition-colors duration-300">
            Find Your Shoe
          </button>
        </div>
      </div>
    </section>
  );
}
