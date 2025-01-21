"use client"; // Ensure this component runs client-side

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { client } from "../sanity/lib/client";

// Define the Product type
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

const BestOfMax = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state to handle async fetching
  const productRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Fetch products data from Sanity
  useEffect(() => {
    async function fetchProducts() {
      try {
        const query = `*[_type == 'product']{
          _id,
          productName,
          status,
          category,
          description,
          price,
          "gender": coalesce(gender, "Not Specified"),
          "imageUrl": image.asset->url
        }`;
        const data = await client.fetch(query);
        setProducts(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Ensure loading is turned off even if there's an error
      }
    }

    fetchProducts();
  }, []);

  // Handle Scroll Left and Right
  const scrollLeft = () => {
    setVisibleIndex((prevIndex) => Math.max(prevIndex - 3, 0)); // Ensure we don't go below 0
  };

  const scrollRight = () => {
    setVisibleIndex((prevIndex) => Math.min(prevIndex + 3, products.length - 3)); // Ensure we don't go beyond the length of the products
  };

  // Redirect to product detail page
  const handleProductClick = (productId: string) => {
    router.push(`/products/${productId}`);
  };

  // Redirect to the shop page
  const handleShopClick = () => {
    router.push("/products");
  };

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a more sophisticated loading indicator
  }

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
          <button
            onClick={handleShopClick}  // Added onClick handler for Shop button
            className="px-4 py-2 text-sm md:text-base rounded-lg font-medium hover:font-bold"
          >
            Shop
          </button>
          <button
            onClick={scrollLeft}
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
            onClick={scrollRight}
            className="p-2 bg-gray-200 text-black rounded-full hover:bg-gray-400"
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

      {/* Product Images Grid (Scrollable) */}
      <div
        ref={productRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto scroll-smooth"
      >
        {/* Loop through fetched products, showing just 3 items at a time based on visibleIndex */}
        {products.slice(visibleIndex, visibleIndex + 3).map((product) => (
          <div key={product._id} onClick={() => handleProductClick(product._id)}>
            <Image
              src={product.imageUrl}
              alt={product.productName}
              width={400}
              height={220}
              className="mx-auto"
            />
            <div className="flex justify-between mt-2 max-w-[400px] mx-auto">
              <h4 className="font-semibold text-sm md:text-base">{product.productName}</h4>
              <p className="font-semibold text-sm md:text-base">₹ {product.price}</p>
            </div>
            <p className="text-sm md:text-base font-semibold text-gray-500 max-w-[400px] mx-auto">
              {product.category}
            </p>
            <p className="text-sm md:text-base font-semibold text-gray-500 max-w-[400px] mx-auto">
              {product.gender}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestOfMax;
