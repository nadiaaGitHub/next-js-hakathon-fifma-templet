'use client'
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function FooterUpperSection() {
  const [isIconsOpen, setIsIconsOpen] = useState(false);
  const [isShoesOpen, setIsShoesOpen] = useState(false);
  const [isClothingOpen, setIsClothingOpen] = useState(false);
  const [isKidsOpen, setIsKidsOpen] = useState(false);

  return (
    <section className="py-8  font-Helvetica Neue">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-[750px]">

        {/* Icons Section */}
        <div className="md:hidden">
          <h3 
            className="text-lg font-semibold cursor-pointer flex items-center justify-between"
            onClick={() => setIsIconsOpen(!isIconsOpen)}
          >
            Icons
            {isIconsOpen ? <FiChevronUp /> : <FiChevronDown />}
          </h3>
          {isIconsOpen && (
            <ul className="space-y-2 font-medium text-gray-400">
              <li><a href="#" className="hover:underline">Air Force 1</a></li>
              <li><a href="#" className="hover:underline">Huarache</a></li>
              <li><a href="#" className="hover:underline">Air Max 90</a></li>
              <li><a href="#" className="hover:underline">Air Max 95</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
            </ul>
          )}
        </div>

        {/* Icons Section for Larger Screens */}
        <div className="hidden md:block">
          <h3 className="text-xl font-semibold mb-4">Icons</h3>
          <ul className="space-y-2 font-medium text-gray-400">
            <li><a href="#" className="hover:underline">Air Force 1</a></li>
            <li><a href="#" className="hover:underline">Huarache</a></li>
            <li><a href="#" className="hover:underline">Air Max 90</a></li>
            <li><a href="#" className="hover:underline">Air Max 95</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
          </ul>
        </div>

        {/* Shoes Section */}
        <div className="md:hidden">
          <h3 
            className="text-lg font-semibold cursor-pointer flex items-center justify-between"
            onClick={() => setIsShoesOpen(!isShoesOpen)}
          >
            Shoes
            {isShoesOpen ? <FiChevronUp /> : <FiChevronDown />}
          </h3>
          {isShoesOpen && (
            <div className="space-y-2 font-medium text-gray-400">
              <p className="mb-2">All Shoes</p>
              <p className="mb-2">Custom Shoes</p>
              <p className="mb-2">Jordan Shoes</p>
              <p className="mb-2">Running Shoes</p>
            </div>
          )}
        </div>

        {/* Shoes Section for Larger Screens */}
        <div className="hidden md:block">
          <h3 className="text-xl font-semibold mb-4">Shoes</h3>
          <p className="mb-2 text-gray-400 font-medium">All Shoes</p>
          <p className="mb-2 text-gray-400 font-medium">Custom Shoes</p>
          <p className="mb-2 text-gray-400 font-medium">Jordan Shoes</p>
          <p className="mb-2 text-gray-400 font-medium">Running Shoes</p>
        </div>

        {/* Clothing Section */}
        <div className="md:hidden">
          <h3 
            className="text-lg font-semibold cursor-pointer flex items-center justify-between"
            onClick={() => setIsClothingOpen(!isClothingOpen)}
          >
            Clothing
            {isClothingOpen ? <FiChevronUp /> : <FiChevronDown />}
          </h3>
          {isClothingOpen && (
            <div className="space-y-2 font-medium text-gray-400">
              <p className="mb-2">All Clothing</p>
              <p className="mb-2">Modest Wear</p>
              <p className="mb-2">Hoodies & Pullovers</p>
              <p className="mb-2">Shirts & Tops</p>
            </div>
          )}
        </div>

        {/* Clothing Section for Larger Screens */}
        <div className="hidden md:block">
          <h3 className="text-xl font-semibold mb-4">Clothing</h3>
          <p className="mb-2 text-gray-400 font-medium">All Clothing</p>
          <p className="mb-2 text-gray-400 font-medium">Modest Wear</p>
          <p className="mb-2 text-gray-400 font-medium">Hoodies & Pullovers</p>
          <p className="mb-2 text-gray-400 font-medium">Shirts & Tops</p>
        </div>

        {/* Kids' Section */}
        <div className="md:hidden">
          <h3 
            className="text-lg font-semibold cursor-pointer flex items-center justify-between"
            onClick={() => setIsKidsOpen(!isKidsOpen)}
          >
            Kids&apos;
            {isKidsOpen ? <FiChevronUp /> : <FiChevronDown />}
          </h3>
          {isKidsOpen && (
            <div className="space-y-2 text-gray-400 font-medium">
              <p className="mb-2">Infant & Toddler Shoes</p>
              <p className="mb-2">Kids&apos; Shoes</p>
              <p className="mb-2">Kids&apos; Jordan Shoes</p>
              <p className="mb-2">Kids&apos; Basketball Shoes</p>
            </div>
          )}
        </div>

        {/* Kids' Section for Larger Screens */}
        <div className="hidden md:block">
          <h3 className="text-xl font-semibold mb-4">Kids&apos;</h3>
          <ul className="space-y-2 text-gray-400 font-medium">
            <li><a href="#" className="hover:underline">Infant & Toddler Shoes</a></li>
            <li><a href="#" className="hover:underline">Kids&apos; Shoes</a></li>
            <li><a href="#" className="hover:underline">Kids&apos; Jordan Shoes</a></li>
            <li><a href="#" className="hover:underline">Kids&apos; Basketball Shoes</a></li>
          </ul>
        </div>

      </div>
    </section>
  );
}
