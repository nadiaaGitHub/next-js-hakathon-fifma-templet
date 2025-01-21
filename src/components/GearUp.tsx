"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import { client } from '@/sanity/lib/client'; // Import Sanity client

// Define the Product type
interface Product {
  _id: string;
  productName: string;
  price: number;
  category: string;
  imageUrl: string;
}

export default function GearUp() {
  // State for Men and Women's product carousels with proper typing
  const [menProducts, setMenProducts] = useState<Product[]>([]);
  const [womenProducts, setWomenProducts] = useState<Product[]>([]);
  const [menIndex, setMenIndex] = useState(0);
  const [womenIndex, setWomenIndex] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      // Fetch Men products from Sanity
      const menQuery = `*[_type == 'product' && gender == 'Men']{
        _id,
        productName,
        price,
        category,
        "imageUrl": image.asset->url
      }`;

      // Fetch Women products from Sanity
      const womenQuery = `*[_type == 'product' && gender == 'Women']{
        _id,
        productName,
        price,
        category,
        "imageUrl": image.asset->url
      }`;

      // Fetch data from Sanity
      const menData = await client.fetch(menQuery);
      const womenData = await client.fetch(womenQuery);

      setMenProducts(menData);
      setWomenProducts(womenData);
    }

    fetchProducts();
  }, []);

  const handleMenLeftClick = () => {
    setMenIndex((prevIndex) => (prevIndex === 0 ? menProducts.length - 2 : prevIndex - 1));
  };

  const handleMenRightClick = () => {
    setMenIndex((prevIndex) => (prevIndex === menProducts.length - 2 ? 0 : prevIndex + 1));
  };

  const handleWomenLeftClick = () => {
    setWomenIndex((prevIndex) => (prevIndex === 0 ? womenProducts.length - 2 : prevIndex - 1));
  };

  const handleWomenRightClick = () => {
    setWomenIndex((prevIndex) => (prevIndex === womenProducts.length - 2 ? 0 : prevIndex + 1));
  };

  return (
    <div className="mb-16 mt-6 mx-auto max-w-[1300px] px-4 font-Helvetica Neue">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Gear Up</h2>

      {/* Main Container with Two Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Section: Men’s Products */}
        <div>
          {/* Text and Navigation */}
          <div className="flex flex-col md:flex-row items-center md:justify-end space-y-2 md:space-y-0 md:space-x-4 mb-4">
          {/* Add Link to Men’s Shop Page */}
          <Link href="/men">
          <h2 className="text-lg font-semibold md:relative md:right-2">Shop Men&apos;s</h2></Link>
          
            <div className="flex items-center space-x-4">
              <button
                onClick={handleMenLeftClick}
                className="p-2 bg-gray-200 text-black rounded-full hover:bg-gray-400"
              >
                <Image
                  src="/images/leftarrow.png"
                  alt="Left Arrow"
                  width={20}
                  height={20}
                />
              </button>
              <button
                onClick={handleMenRightClick}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-400"
              >
                <Image
                  src="/images/rightarrow.png"
                  alt="Right Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>

          {/* Display Two Products for Men */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {menProducts.slice(menIndex, menIndex + 2).map((product) => (
              <div key={product._id}>
                <Link href={`/products/${product._id}`}>
                  <Image
                    src={product.imageUrl}
                    alt={product.productName}
                    width={300}
                    height={160}
                    className="mx-auto"
                  />
                  <div className="flex justify-between mt-2 max-w-[300px] mx-auto">
                    <h4 className="font-semibold text-sm">{product.productName}</h4>
                    <p className="font-semibold text-sm">₹ {product.price}</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-500 max-w-[300px] mx-auto ">{product.category}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Second Section: Women’s Products */}
        <div>
          {/* Text and Navigation */}
          <div className="flex flex-col md:flex-row items-center md:justify-end space-y-2 md:space-y-0 md:space-x-4 mb-4">
            {/* Add Link to Women’s Shop Page */}
            <Link href={'/women'}>
            <h2 className="text-lg font-semibold md:relative md:right-11">Shop Women&apos;s</h2>
            </Link>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleWomenLeftClick}
                className="p-2 bg-gray-200 text-black rounded-full hover:bg-gray-400"
              >
                <Image
                  src="/images/leftarrow.png"
                  alt="Left Arrow"
                  width={20}
                  height={20}
                />
              </button>
              <button
                onClick={handleWomenRightClick}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-400"
              >
                <Image
                  src="/images/rightarrow.png"
                  alt="Right Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>

          {/* Display Two Products for Women */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {womenProducts.slice(womenIndex, womenIndex + 2).map((product) => (
              <div key={product._id}>
                <Link href={`/products/${product._id}`}>
                  <Image
                    src={product.imageUrl}
                    alt={product.productName}
                    width={300}
                    height={160}
                    className="mx-auto"
                  />
                  <div className="flex justify-between mt-2 max-w-[300px] mx-auto">
                    <h4 className="font-semibold text-sm">{product.productName}</h4>
                    <p className="font-semibold text-sm">₹ {product.price}</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-500 max-w-[300px] mx-auto ">{product.category}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
