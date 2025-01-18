'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext'; // Ensure these methods are implemented in your context
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ShoppingBag() {
  const { cart, removeFromCart, addToCart } = useCart(); // Assuming these functions are defined in your context
  const [message, setMessage] = useState<string>(''); // For success or info messages
  const router = useRouter();

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryCharge = subtotal >= 14000 ? 0 : 500;

  // Handle adding an item to the cart (only if it's not already in the cart)
  const handleAddToCart = (item: any) => {
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
    
    if (isItemInCart) {
      setMessage('Item is already in the cart!');
      setTimeout(() => setMessage(''), 3000); // Clear the message after 3 seconds
    } else {
      addToCart(item); // Add item if not already in the cart
      setMessage('Item added to cart!');
      setTimeout(() => setMessage(''), 3000); // Clear the message after 3 seconds
    }
  };

  // Handle removing an item from the cart
  const handleRemoveFromCart = (id: string) => {
    removeFromCart(id); // Remove the specific item
    setMessage('Item removed from cart!');
    setTimeout(() => setMessage(''), 3000); // Clear the message after 3 seconds
  };

  // Handle navigating to wishlist page
  const handleAddToWishlist = (itemId: string) => {
    router.push(`/heart/${itemId}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-9 mb-9">
      {/* Free Delivery Section */}
      <div className="bg-gray-100 p-4 mb-6 rounded-md text-gray-700">
        <p className="font-bold">Free Delivery</p>
        <span>
          Applies to orders of ₹14,000.00 or more.{" "}
          <a href="#" className="text-blue-500 hover:underline">
            View details
          </a>
        </span>
      </div>

      {/* Success or info message */}
      {message && (
        <div className="bg-green-100 p-4 mb-4 rounded-md text-green-700">
          {message}
        </div>
      )}

      {/* Cart Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Bag Section */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Bag</h2>

          {cart.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-start border-b border-gray-300 pb-4 mb-4">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md w-full max-w-[120px] md:w-auto"
              />
              <div className="mt-4 md:mt-0 md:ml-4 flex-grow">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
                <div className="flex items-center space-x-8 mt-2">
                  <p className="text-sm">Size: {item.size}</p>
                  <p className="text-sm">Quantity: {item.quantity}</p>
                </div>

                {/* Heart and Delete Buttons */}
                <div className="flex items-center space-x-4 mt-4">
                  {/* Add to Wishlist */}
                  <button
                    className="text-gray-500 hover:text-red-600 text-xl"
                    onClick={() => handleAddToWishlist(item.id)} // Navigate to wishlist page
                  >
                    ♡
                  </button>
                  {/* Remove from Cart */}
                  <button
                    className="text-gray-500 hover:text-red-600"
                    onClick={() => handleRemoveFromCart(item.id)} // Remove specific item
                  >
                    🗑
                  </button>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="text-lg font-bold">MRP: ₹ {item.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p className="font-bold">₹ {subtotal.toLocaleString()}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Estimated Delivery & Handling</p>
            <p className="font-bold">₹ {deliveryCharge}</p>
          </div>
          <div className="flex justify-between border-t pt-4 border-gray-300">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-lg font-bold">₹ {(subtotal + deliveryCharge).toLocaleString()}</p>
          </div>
          <button className="bg-black text-white w-full py-2 mt-6 rounded-md hover:bg-gray-800">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
