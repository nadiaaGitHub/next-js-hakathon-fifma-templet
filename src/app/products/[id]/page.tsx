// app/products/[id]/page.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/router';
import { products } from '../../../data/products';
import Image from 'next/image';

const ProductDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query; // Getting dynamic ID from URL

  // Find product by ID
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <section className="p-6 bg-gray-50">
      <div className="bg-white shadow-md rounded-md p-4">
        <div className="relative">
          <Image
            src={product.image}
            alt={product.name}
            height={500}
            width={500}
            className="w-full h-52 object-cover rounded-md"
          />
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-sm text-gray-500">{product.description}</p>
          <p className="text-lg font-semibold mt-2">Price: ₹ {product.price.toLocaleString()}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
