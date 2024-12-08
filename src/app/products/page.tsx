'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { products } from '../../data/products';
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

export default function ProductsPage() {
  const [genderOpen, setGenderOpen] = useState(false);
  const [kidsOpen, setKidsOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Determine the number of products to show based on screen size
  const visibleProducts = showAllProducts ? products : products.slice(0, 3);

  return (
    <section className="p-6 mx-auto max-w-[1290px]">
      {/* Top Bar with "New (500)", Filter, Sort */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <span className="font-semibold text-lg">New (500)</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center font-medium text-sm py-1 px-3 rounded-md hover:bg-gray-300">
            Filter
            <Image
              src="/images/filter.png"
              alt="Filter Icon"
              height={200}
              width={200}
              className="w-4 h-4 mr-2 relative left-3"
            />
          </button>
          <button className="flex items-center space-x-4 font-medium text-sm py-1 px-3 rounded-md hover:bg-gray-300">
            Sort By
            <FaChevronDown className="text-black relative top-1 left-1" />
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col md:flex-row">

        {/* Sidebar */}
        <div>
          {/* Toggle Button for Small Screens */}
          <button
            className="md:hidden flex items-center mb-4 bg-gray-200 px-4 py-2 rounded-md shadow hover:bg-gray-300"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            <span className="ml-2">{isSidebarOpen ? 'Close' : 'Filters'}</span>
          </button>

          {/* Sidebar Container */}
          <aside
            className={`fixed inset-0 z-50 bg-white p-4 md:relative md:z-auto md:block md:translate-x-0 transition-transform duration-300 ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } md:w-[260px] w-4/5 h-screen md:h-auto overflow-auto`}
          >
            {/* Close Button for Small Screens */}
            {isSidebarOpen && (
              <button
                className="absolute top-4 right-4 text-xl text-gray-600 md:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <FaTimes />
              </button>
            )}

            {/* Scrollable Category List */}
            <ul className="space-y-2 mb-4 h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <li>Shoes</li>
              <li>Tops & T-Shirts</li>
              <li>Hoodies & Sweatshirts</li>
              <li>Jackets</li>
              <li>Trousers & Tights</li>
              <li>Shorts</li>
              <li>Tracksuits</li>
              <li>Jumpsuits & Rompers</li>
              <li>Skirts & Dresses</li>
              <li>Socks</li>
              <li>Accessories & Equipment</li>
            </ul>

            {/* Gender Dropdown */}
            <div>
              <div
                className="flex justify-between items-center cursor-pointer mb-2 pr-4"
                onClick={() => setGenderOpen(!genderOpen)}
              >
                <h4 className="font-medium text-md">Gender</h4>
                {genderOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {genderOpen && (
                <div className="pl-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="men" />
                    <label htmlFor="men">Men</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="women" />
                    <label htmlFor="women">Women</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="unisex" />
                    <label htmlFor="unisex">Unisex</label>
                  </div>
                </div>
              )}
            </div>

            {/* Kid's Dropdown */}
            <div>
              <div
                className="flex justify-between items-center cursor-pointer mb-2 mt-4 pr-4"
                onClick={() => setKidsOpen(!kidsOpen)}
              >
                <h4 className="font-medium text-md">Kid&apos;s</h4>
                {kidsOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {kidsOpen && (
                <div className="pl-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="boys" />
                    <label htmlFor="boys">Boys</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="girls" />
                    <label htmlFor="girls">Girls</label>
                  </div>
                </div>
              )}
            </div>

            {/* Shop by Price Dropdown */}
            <div>
              <div
                className="flex justify-between items-center cursor-pointer mb-2 mt-4 pr-4"
                onClick={() => setPriceOpen(!priceOpen)}
              >
                <h4 className="font-medium text-md">Shop by Price</h4>
                {priceOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {priceOpen && (
                <div className="pl-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="under-1000" />
                    <label htmlFor="under-1000">Under ₹2,500.00</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="1000-2000" />
                    <label htmlFor="1000-2000">₹2,501.00 - ₹7,500.00</label>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {visibleProducts.map((product) => (
            <div key={product.id} className="pt-2 pb-2 group">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-80 object-cover"
                />
                <Link href='/details' legacyBehavior>
                  <a className="absolute inset-x-0 bottom-0 bg-black bg-opacity-80 text-white px-3 py-2 text-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                    Details
                  </a>
                </Link>
              </div>

              <div className="mt-4 text-left">
                {product.tag && (
                  <span className="text-red-600 text-sm py-1 font-medium mb-2 block text-left">
                    {product.tag}
                  </span>
                )}
                <h2 className="text-sm font-bold">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="text-lg font-semibold mt-2">
                  Price: ₹ {product.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* See More Button for small screens */}
      {!showAllProducts && products.length > 3 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAllProducts(true)}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
}
