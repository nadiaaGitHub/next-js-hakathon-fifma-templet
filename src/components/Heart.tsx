import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Image from "next/image";

export default function Whistle() {
  const productData = [
    {
      id: 1,
      name: "Gucci duffle bag",
      price: 960,
      discountPrice: -35,
      rating: 5,
      reviews: 65,
      image: "/images/p-6.png",
      onSale: true, 
    },
    {
      id: 2,
      name: "RGB liquid CPU Cooler",
      price: 1960,
      discountPrice: null, 
      rating: 4.5,
      reviews: 65,
      image: "/images/Nike Air Max 97 SE.png",
      onSale: false,
    },
    {
      id: 3,
      name: "GP11 Shooter USB Gamepad",
      price: 550,
      discountPrice: null,
      rating: 4.0,
      reviews: 65,
      image: "/images/Nike Dri-FIT ADV TechKnit Ultra.png",
      onSale: false,
    },
    {
      id: 4,
      name: "Quilted Satin Jacket",
      price: 750,
      discountPrice: null, 
      rating: 4.8,
      reviews: 65,
      image: "/images/Heroimage.png",
      onSale: false,
    },
  ];

  return (
    <section className="ml-6 mr-6 mb-14 sm:m-9 py-10 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title and Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6 space-y-6 lg:space-y-0">
          <h3 className="font-medium text-xs sm:text-5xl text-center lg:text-left">
            Wishlist ({productData.length})
          </h3>
          <div className="mt-10 flex justify-center">
            <button className="mb-9 border-2 border-gray-400 text-black px-10 py-2 text-base sm:text-lg font-bold rounded hover:bg-black hover:text-white">
              Move All To Bag
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productData.map((product) => (
              <div
                key={product.id}
                className="relative border rounded-lg shadow-md group hover:shadow-lg transition-shadow"
              >
                {/* Sale Price Label */}
                {product.onSale && (
                  <div className="absolute z-10 top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discountPrice}%
                  </div>
                )}

                {/* Product Image */}
                <div className="relative flex justify-center items-center h-64 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1000}
                    height={1000}
                    className="h-[152px] w-[160px] sm:h-[180px] sm:w-[200px] object-contain"
                  />

                  {/* Action Buttons */}
                  <div className="absolute top-2 right-2 flex flex-col space-y-2">
                    <button className="p-2 bg-white rounded-full hover:bg-gray-200 shadow-md">
                      <FaTrashAlt className="text-black" size={20} />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="absolute bottom-0 left-0 right-0 text-center">
                    <button className="bg-black text-white w-full py-1 sm:py-2 text-sm sm:text-base">
                    🛒 Add to Cart 
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <h3 className="text-gray-700 font-medium text-sm sm:text-base">
                    {product.name}
                  </h3>
                  <div className="flex gap-4 items-center mt-2">
                    <div className="text-red-500 font-bold text-lg sm:text-xl">
                      ${product.price}
                    </div>
                    {product.discountPrice && (
                      <div className="text-gray-500 line-through text-sm sm:text-base">
                        ${product.discountPrice}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
