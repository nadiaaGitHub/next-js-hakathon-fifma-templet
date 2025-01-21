'use client';

import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  description: string;
  imageUrl: string;
}

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useCart(); // Destructure addToCart from context
  const [localWishlist, setLocalWishlist] = useState<Item[]>(wishlist);  // Explicitly typing state as Item[]

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    if (typeof window !== 'undefined') {  // Ensure it's running on the client side
      const storedWishlist = localStorage.getItem('wishlist');
      if (storedWishlist) {
        setLocalWishlist(JSON.parse(storedWishlist));  // Load wishlist from localStorage
      }
    }
  }, []);

  // Update localStorage whenever the wishlist changes
  useEffect(() => {
    if (typeof window !== 'undefined') {  // Ensure it's running on the client side
      localStorage.setItem('wishlist', JSON.stringify(localWishlist));  // Save wishlist to localStorage
    }
  }, [localWishlist]);

  const handleRemoveFromWishlist = (id: string) => {
    const updatedWishlist = localWishlist.filter((item: Item) => item.id !== id);  // Explicitly typing `item` as `Item`
    setLocalWishlist(updatedWishlist);
    removeFromWishlist(id);
  };

  const handleAddToCart = (item: Item) => {
    addToCart(item);  // Add the item to the cart
    handleRemoveFromWishlist(item.id);  // Optionally remove from wishlist after adding to cart
  };

  return (
    <div className="max-w-7xl mx-auto p-6 mt-9 mb-9">
      <h2 className="text-3xl font-semibold mb-6">Wishlist</h2>

      {/* Wishlist Empty State */}
      {localWishlist.length === 0 ? (
        <div className="text-center text-xl text-gray-600">
          Your wishlist is empty.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {localWishlist.map((item: Item) => (
            <div
              key={item.id}
              className="flex flex-col items-start bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 p-4"
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={150}
                height={150}
                className="w-full mb-4 object-cover rounded-lg"
              />
              <h3 className="font-semibold text-xl mb-2">{item.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{item.description}</p>
              <p className="text-lg font-bold text-gray-900">₹ {item.price.toLocaleString()}</p>

              <div className="flex justify-between items-center w-full mt-4">
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                  onClick={() => handleRemoveFromWishlist(item.id)}
                >
                  Remove from Wishlist
                </button>

                <button
                  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
