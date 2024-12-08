import React from 'react';
import Image from 'next/image';

export default function BestOfMax() {
  return (
    <div className="mb-16 mt-6 mx-auto max-w-[1290px] px-4 font-Helvetica Neue">
      {/* Heading and Arrows Row */}
      <div className="flex flex-wrap items-center justify-between mb-6 space-y-4 sm:space-y-0">
        {/* Heading */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center sm:text-left w-full sm:w-auto">
          Best of Air Max
        </h2>

        {/* Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto justify-center sm:justify-end">
          <button className="px-4 py-2 text-sm md:text-base rounded-lg font-medium hover:font-bold">
            Shop
          </button>
          <button className="p-2 bg-gray-200 text-black rounded-full hover:bg-gray-400">
            <Image
              src="/images/leftarrow.png"
              alt="Left Arrow"
              width={20}
              height={20}
            />
          </button>
          <button className="p-2 bg-gray-200 text-black rounded-full hover:bg-gray-400">
            <Image
              src="/images/rightarrow.png"
              alt="Right Arrow"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>

      {/* Product Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Product 1 */}
        <div>
          <Image
            src="/images/Nike Air Max Pulse.png"
            alt="Nike Air Max Pulse"
            width={400}
            height={220}
            className="mx-auto"
          />
          <div className="flex justify-between mt-2 max-w-[400px] mx-auto">
            <h4 className="font-semibold text-sm md:text-base">
              Nike Air Max Pulse
            </h4>
            <p className="font-semibold text-sm md:text-base">₹ 13,995</p>
          </div>
          <p className="text-sm md:text-base font-semibold text-gray-500 max-w-[400px] mx-auto">
            Women&apos;s Shoes
          </p>
        </div>

        {/* Product 2 */}
        <div>
          <Image
            src="/images/Nike Air Max Pulse (2).png"
            alt="Nike Air Max Pulse"
            width={400}
            height={220}
            className="mx-auto"
          />
          <div className="flex justify-between mt-2 max-w-[400px] mx-auto">
            <h4 className="font-semibold text-sm md:text-base">
              Nike Air Max Pulse
            </h4>
            <p className="font-semibold text-sm md:text-base">₹ 13,995</p>
          </div>
          <p className="text-sm md:text-base font-semibold text-gray-500 max-w-[400px] mx-auto ">
            Men&apos;s Shoes
          </p>
        </div>

        {/* Product 3 */}
        <div>
          <Image
            src="/images/Nike Air Max 97 SE.png"
            alt="Nike Air Max 97 SE"
            width={400}
            height={220}
            className="mx-auto"
          />
          <div className="flex justify-between mt-2 max-w-[400px] mx-auto">
            <h4 className="font-semibold text-sm md:text-base">
              Nike Air Max 97 SE
            </h4>
            <p className="font-semibold text-sm md:text-base">₹ 16,995</p>
          </div>
          <p className="text-sm md:text-base font-semibold text-gray-500 max-w-[400px] mx-auto ">
            Men&apos;s Shoes
          </p>
        </div>
      </div>
    </div>
  );
}
