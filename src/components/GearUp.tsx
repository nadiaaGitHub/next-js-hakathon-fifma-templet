import React from 'react';
import Image from 'next/image';

export default function GearUp() {
  return (
    <div className="mb-16 mt-6 mx-auto max-w-[1300px] px-4 font-Helvetica Neue">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Gear Up</h2>

      {/* Main Container with Two Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Section */}
        <div>
          {/* Text and Navigation */}
          <div className="flex flex-col md:flex-row items-center md:justify-end space-y-2 md:space-y-0 md:space-x-4 mb-4">
            <h2 className="text-lg font-semibold md:relative md:right-11">Shop Men&apos;s</h2>
            <div className="flex items-center space-x-4 md:relative md:right-11">
              <button className="p-2 bg-gray-200 text-black rounded-full hover:bg-gray-400">
                <Image
                  src="/images/leftarrow.png"
                  alt="Left Arrow"
                  width={20}
                  height={20}
                />
              </button>
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-400">
                <Image
                  src="/images/rightarrow.png"
                  alt="Right Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>

          {/* Two Product Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Product 1 */}
            <div>
              <Image
                src="/images/Nike Dri-FIT ADV TechKnit Ultra.png"
                alt="Nike Dri-FIT ADV TechKnit Ultra"
                width={300}
                height={160}
                className="mx-auto"
              />
              <div className="flex justify-between mt-2 max-w-[300px] mx-auto">
                <h4 className="font-semibold text-sm">Nike Dri-FIT ADV TechKnit Ultra</h4>
                <p className="font-semibold text-sm">₹ 3,895</p>
              </div>
              <p className="text-sm font-semibold text-gray-500 max-w-[300px] mx-auto ">
                Men&apos;s Short-Sleeve <br /> Running Top
              </p>
            </div>

            {/* Product 2 */}
            <div>
              <Image
                src="/images/Nike Dri-FIT Challenger.png"
                alt="Nike Dri-FIT Challenger"
                width={300}
                height={160}
                className="mx-auto"
              />
              <div className="flex justify-between mt-2 max-w-[300px] mx-auto">
                <h4 className="font-semibold text-sm">Nike Dri-FIT Challenger</h4>
                <p className="font-semibold text-sm">₹ 2,495</p>
              </div>
              <p className="text-sm font-semibold text-gray-500 max-w-[300px] mx-auto ">
                Men&apos;s 18cm (approx.) 2- <br />in-1 Versatile Shorts
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div>
          {/* Text and Navigation */}
          <div className="flex flex-col md:flex-row items-center md:justify-end space-y-2 md:space-y-0 md:space-x-4 mb-4">
            <h2 className="text-lg font-semibold md:relative md:right-11">Shop Women&apos;s</h2>
            <div className="flex items-center space-x-4 md:relative md:right-11">
              <button className="p-2 bg-gray-200 text-black rounded-full hover:bg-gray-400">
                <Image
                  src="/images/leftarrow.png"
                  alt="Left Arrow"
                  width={20}
                  height={20}
                />
              </button>
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-400">
                <Image
                  src="/images/rightarrow.png"
                  alt="Right Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>

          {/* Two Product Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Product 1 */}
            <div>
              <Image
                src="/images/Nike Dri-FIT ADV Run Division.png"
                alt="Nike Dri-FIT ADV Run Division"
                width={300}
                height={160}
                className="mx-auto"
              />
              <div className="flex justify-between mt-2 max-w-[300px] mx-auto">
                <h4 className="font-semibold text-sm">Nike Dri-FIT ADV Run Division</h4>
                <p className="font-semibold text-sm">₹ 5,295</p>
              </div>
              <p className="text-sm font-semibold text-gray-500 max-w-[300px] mx-auto ">
                Women&apos;s Long-Sleeve <br /> Running Top
              </p>
            </div>

            {/* Product 2 */}
            <div>
              <Image
                src="/images/Nike Fast.png"
                alt="Nike Fast"
                width={300}
                height={160}
                className="mx-auto"
              />
              <div className="flex justify-between mt-2 max-w-[300px] mx-auto">
                <h4 className="font-semibold text-sm">Nike Fast</h4>
                <p className="font-semibold text-sm">₹ 3,795</p>
              </div>
              <p className="text-sm font-semibold text-gray-500 max-w-[300px] mx-auto ">
                Women&apos;s Mid-Rise 7/8 Running <br /> Leggings with Pockets
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
