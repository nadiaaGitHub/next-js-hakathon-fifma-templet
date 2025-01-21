'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

// Define the Product interface
interface Product {
  _id: string;
  productName: string;
  status: string;
  category: string;
  description: string;
  price: number;
  gender: string;
  imageUrl: string;
}

// Function to fetch data from Sanity
async function getData() {
  const fetchData = await client.fetch(`*[_type == 'product']{
    _id,
    productName,
    status,
    category,
    description,
    price,
    "gender": coalesce(gender, "Not Specified"), // Default gender to "Not Specified"
    "imageUrl": image.asset->url
  }`);
  return fetchData;
}

export default function ProductsPage() {
  const [data, setData] = useState<Product[]>([]);
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<string[]>([]); // Gender filter array
  const [selectedPrice, setSelectedPrice] = useState<{ min: number; max: number } | null>(null);

  const [genderOpen, setGenderOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);

  const [sortOrder, setSortOrder] = useState<string>('none');
  const [searchTerm, setSearchTerm] = useState(''); // Search term state

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedData = await getData();
      setData(fetchedData);
      setFilteredData(fetchedData); // Set initial filtered data
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...data];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.gender.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Gender filter logic
    if (selectedGender.length > 0) {
      filtered = filtered.filter((product) =>
        selectedGender.includes(product.gender) // Check if gender matches any selected option
      );
    }

    // Filter by price range
    if (selectedPrice) {
      filtered = filtered.filter(
        (product) => product.price >= selectedPrice.min && product.price <= selectedPrice.max
      );
    }

    // Sorting logic
    if (sortOrder === 'priceLowToHigh') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'priceHighToLow') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredData(filtered);
  }, [selectedCategory, selectedGender, selectedPrice, sortOrder, data, searchTerm]);

  const priceRanges = [
    { label: 'Under ₹2,500', min: 0, max: 2500 },
    { label: '₹2,501 - ₹7,500', min: 2501, max: 7500 },
    { label: 'Above ₹7,500', min: 7501, max: Infinity },
  ];

  return (
    <section className="p-6 mx-auto max-w-[1290px]">
      <div className="flex justify-between items-center mb-6 flex-wrap">
        <span className="font-semibold text-lg sm:text-xl md:text-2xl">New ({filteredData.length})</span>

        {/* Filter and Sort */}
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          {/* Search Input */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Products"
            className="border rounded-md py-1 px-3 text-sm"
          />

          {/* Filter button */}
          <button
            className="flex items-center font-medium text-sm py-1 px-3 rounded-md hover:bg-gray-300"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            Filter
            <Image
              src="/images/filter.png"
              alt="Filter Icon"
              height={200}
              width={200}
              className="w-4 h-4 ml-2"
            />
          </button>

          {/* Sort dropdown */}
          <div className="relative">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border rounded-md py-1 px-3 text-sm cursor-pointer"
            >
              <option value="none">Sort By</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside
          className={`fixed inset-0 z-50 bg-white p-4 md:relative md:z-auto md:block md:translate-x-0 transition-transform duration-300 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:w-[260px] w-4/5 h-screen md:h-auto overflow-auto`}
        >
          {isSidebarOpen && (
            <button
              className="absolute top-4 right-4 text-xl text-gray-600 md:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <FaTimes />
            </button>
          )}

          {/* Category filter */}
          <ul className="space-y-2 mb-4">
            {[
              'Shoes',
              'Tops & T-Shirts',
              'Hoodies & Sweatshirts',
              'Jackets',
              'Trousers & Tights',
              'Tracksuits',
              'Jumpsuits & Rompers',
              'Skirts & Dresses',
              'Socks',
              'Accessories & Equipment',
            ].map((category) => (
              <li key={category}>
                <button
                  className={`w-full text-left ${selectedCategory === category ? 'font-bold' : ''}`}
                  onClick={() =>
                    setSelectedCategory(selectedCategory === category ? null : category)
                  }
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>

          {/* Gender filter */}
          <div
            className="flex justify-between items-center cursor-pointer mb-2 pr-4"
            onClick={() => setGenderOpen(!genderOpen)}
          >
            <h4 className="font-medium text-md">Gender</h4>
            {genderOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {genderOpen && (
            <div className="pl-4">
              {['Men', 'Women', 'Not Specified'].map((gender) => (
                <label key={gender} className="block cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedGender.includes(gender)}
                    onChange={(e) =>
                      setSelectedGender(
                        e.target.checked
                          ? [...selectedGender, gender]
                          : selectedGender.filter((g) => g !== gender)
                      )
                    }
                    className="mr-2"
                  />
                  {gender}
                </label>
              ))}
            </div>
          )}

          {/* Price filter */}
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
                {priceRanges.map((range) => (
                  <label key={range.label} className="block cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={
                        selectedPrice?.min === range.min && selectedPrice?.max === range.max
                      }
                      onChange={() => setSelectedPrice(range)}
                      className="mr-2"
                    />
                    {range.label}
                  </label>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Product listing */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 ${
            isSidebarOpen ? 'md:ml-[260px]' : ''
          }`}
        >
          {filteredData.length > 0 ? (
            filteredData.map((product, i) => (
              <div key={i} className="pt-2 pb-2 group">
                <div className="relative">
                  <Image
                    src={product.imageUrl}
                    alt={product.productName}
                    width={500}
                    height={500}
                    className="w-full h-80 object-cover"
                  />
                  <Link href={`/products/${product._id}`} legacyBehavior>
                    <a className="absolute inset-x-0 bottom-0 bg-black bg-opacity-80 text-white px-3 py-2 text-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                      Details
                    </a>
                  </Link>
                </div>

                <div className="mt-4 text-left">
                  {product.status && (
                    <span className="text-red-600 text-sm py-1 font-medium mb-2 block text-left">
                      {product.status}
                    </span>
                  )}
                  <h2 className="text-sm font-bold">{product.productName}</h2>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p className="text-lg font-semibold mt-2">
                    Price: ₹ {product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div>No products found.</div>
          )}
        </div>
      </div>
    </section>
  );
}
