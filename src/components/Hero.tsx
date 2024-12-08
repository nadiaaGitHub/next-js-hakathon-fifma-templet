import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="font-Helvetica Neue mt-0 mx-auto px-4 max-w-[1290px]">
  

      {/* Images Section */}
      <div>
        {/* Image */}
        <div className="relative">
          
              <Image
                src="/images/Heroimage.png"
                alt="Hero"
                width={1334}
                height={700}
                layout="responsive"
                objectFit="cover"
                className="rounded-md"
              />
           
        </div>

        {/* Text Section */}
        <div className="text-center p-6 md:p-9">
            <h3 className='font-semibold'>First Look</h3>
          <h1 className="text-3xl md:text-[55px] font-medium p-3 uppercase">
          Nike Air Max Pulse
          </h1>
          <p className="text-gray-600 text-sm md:text-base pb-4 md:pb-5 max-w-[549px] mx-auto m-4">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          —designed to push you past your limits and help you go to the max.
          </p>
          <button className="rounded-full m-2 bg-black text-white hover:bg-blue-300 hover:text-black hover:text-lg py-2 px-6 transition-colors duration-300">
          Notify Me
          </button>
          <button className="rounded-full bg-black text-white hover:bg-blue-300 hover:text-black hover:text-lg py-2 px-6 transition-colors duration-300">
          Shop Air Max
          </button>
        </div>
      </div>
    </section>
  )
}
