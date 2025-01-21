"use client"; // Ensure this component runs client-side

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";  // Importing useRouter for navigation
import { client } from "@/sanity/lib/client";

// Define the Product interface
interface Product {
  _id: string;
  productName: string;
  price: number;
  status: string;
  description: string;
  imageUrl: string;
}

const Kids = () => {
  const [products, setProducts] = useState<Product[]>([]); // Use Product[] instead of any[]
  const router = useRouter();  // Initialize useRouter

  // Fetch Kids products data from Sanity
  useEffect(() => {
    async function fetchKidsProducts() {
      const query = `*[_type == 'product' && gender == 'Kids']{
        _id,
        productName,
        price,
        status,
        description,
        "imageUrl": image.asset->url
      }`;
      const data: Product[] = await client.fetch(query); // Cast the fetched data to Product[]
      setProducts(data);
    }

    fetchKidsProducts();
  }, []); // Empty dependency array to fetch products once when component mounts

  // Handle product click and navigate to the detail page
  const handleProductClick = (productId: string) => {
    router.push(`/products/${productId}`);  // Navigate to the product detail page
  };

  return (
    <div className="mb-16 mt-6 mx-auto max-w-[1290px] px-4 font-Helvetica Neue">
      {/* Heading */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center sm:text-left w-full sm:w-auto mb-6">
        Kids Products
      </h2>

      {/* Product Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="relative group product-card cursor-pointer"  // Added cursor-pointer
            onClick={() => handleProductClick(product._id)}  // Product click handler
          >
            {/* Product Image */}
            <div className="relative overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.productName}
                width={400}
                height={220}
                className="mx-auto transition-transform duration-300 transform group-hover:scale-110"
              />
              {/* Hover details */}
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center p-4">
                <div className="text-center">
                  <h4 className="font-semibold text-xl">{product.productName}</h4>
                  <p className="mt-2">{product.description}</p>
                  <p className="mt-4 font-bold text-lg">₹ {product.price}</p>
                </div>
              </div>
            </div>
            {/* Label for "Just In" */}
            <div className="absolute top-4 left-4 bg-yellow-500 text-black py-1 px-3 rounded-full text-xs font-semibold">
              {product.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kids;
