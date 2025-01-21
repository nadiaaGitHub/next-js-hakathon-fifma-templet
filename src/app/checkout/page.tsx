"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Define the item type for the cart
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

// Define the structure for the form data
interface FormData {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  postalCode: string;
  locality: string;
  state: string;
  country: string;
  email: string;
  phone: string;
  pan: string;
  saveAddress: boolean;
  preferredAddress: boolean;
}

// Define the structure for the order summary
interface OrderSummary {
  items: CartItem[];
  subtotal: number;
  delivery: string;
  total: number;
}

export default function CheckOut() {
  const router = useRouter();
  const { cart, clearCart } = useCart();

  // Initialize form data with defaults
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    postalCode: "",
    locality: "",
    state: "",
    country: "India",
    email: "",
    phone: "",
    pan: "",
    saveAddress: false,
    preferredAddress: false,
  });

  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    items: cart || [],
    subtotal: 0,
    delivery: "Free",
    total: 0,
  });

  // Calculate order totals
  useEffect(() => {
    const subtotal = cart.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0);
    setOrderSummary({
      items: cart,
      subtotal,
      delivery: subtotal >= 14000 ? "Free" : "₹500.00",
      total: subtotal >= 14000 ? subtotal : subtotal + 500,
    });
  }, [cart]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target; // Capture the target
    const { name, value, type } = target;
  
    if (type === "checkbox" && target instanceof HTMLInputElement) {
      // Explicitly check for checkboxes
      setFormData((prev) => ({
        ...prev,
        [name]: target.checked, // Use checked for checkboxes
      }));
    } else {
      // Handle other input types
      setFormData((prev) => ({
        ...prev,
        [name]: value, // Use value for other input types
      }));
    }
  };
  
  

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.address1 || !formData.postalCode) {
      alert("Please fill in all required fields.");
      return;
    }

    // Send data to server or proceed
    console.log("Form Data Submitted:", formData);
    console.log("Order Summary Submitted:", orderSummary);

    // Clear cart and navigate to confirmation page
    clearCart();
    router.push("/order-confirmation");
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] p-6">
      <div className="flex flex-col lg:flex-row justify-center max-w-7xl mx-auto gap-8">
        {/* Left Section: Form */}
        <div className="bg-white w-full lg:w-[440px] p-6">
          <h1 className="text-[21px] font-medium mb-4">How would you like to get your order?</h1>
          <p className="text-[#757575] mb-6">
            Customs regulation for India require a copy of the recipient&apos;s KYC. The address on
            the KYC needs to match the shipping address. Our courier will contact you via SMS/email
            to obtain a copy of your KYC. Learn More
          </p>

          {/* Address Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <span className="text-[21px] font-medium text-[#111111]">Enter your name and address:</span>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="p-4 border rounded-md w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="p-4 border rounded-md w-full"
              required
            />
            <input
              type="text"
              name="address1"
              value={formData.address1}
              onChange={handleInputChange}
              placeholder="Address Line 1"
              className="p-4 border rounded-md w-full"
              required
            />
            <input
              type="text"
              name="address2"
              value={formData.address2}
              onChange={handleInputChange}
              placeholder="Address Line 2"
              className="p-4 border rounded-md w-full"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                placeholder="Postal Code"
                className="p-4 border rounded-md w-full"
                required
              />
              <input
                type="text"
                name="locality"
                value={formData.locality}
                onChange={handleInputChange}
                placeholder="Locality"
                className="p-4 border rounded-md w-full"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="p-4 border rounded-md w-full"
              >
                <option value="">State/Territory</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
              </select>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="p-4 border rounded-md w-full"
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
              </select>
            </div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="saveAddress"
                checked={formData.saveAddress}
                onChange={handleInputChange}
                className="accent-[#111111] h-4 w-4"
              />
              <span>Save this address to my profile</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="preferredAddress"
                checked={formData.preferredAddress}
                onChange={handleInputChange}
                className="accent-[#111111] h-4 w-4"
              />
              <span>Make this my preferred address</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="p-4 border rounded-md w-full"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="p-4 border rounded-md w-full"
            />
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleInputChange}
              placeholder="PAN"
              className="p-4 border rounded-md w-full"
            />
            <button type="submit" className="w-full p-4 bg-[#111111] text-white rounded-3xl">
              Continue
            </button>
          </form>
        </div>

        {/* Right Section: Order Summary */}
        <div className="bg-white w-full lg:w-[320px] h-auto lg:h-[721px] p-6">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <ul className="space-y-6">
          {orderSummary.items.map((item) => (
  <li key={item.id} className="flex items-center">
    <Image
      src={item.imageUrl}
      alt={item.name}
      width={128}
      height={128}
      className="rounded-md border mr-4"
    />
    <div>
      <p className="font-medium">{item.name}</p>
      <p className="text-gray-500">Qty: {item.quantity}</p>
    </div>
  </li>
))}

          </ul>
          <hr className="my-6" />
          <div className="text-lg font-medium flex justify-between">
            <span>Subtotal:</span>
            <span>₹{orderSummary.subtotal.toLocaleString()}</span>
          </div>
          <div className="text-lg font-medium flex justify-between">
            <span>Delivery:</span>
            <span>{orderSummary.delivery}</span>
          </div>
          <div className="text-xl font-bold flex justify-between mt-4">
            <span>Total:</span>
            <span>₹{orderSummary.total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
