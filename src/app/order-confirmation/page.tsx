"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Define the types for the order and item details
interface Item {
  name: string;
  quantity: number;
}

interface OrderDetails {
  orderId: string;
  totalAmount: number;
  items: Item[];
}

export default function OrderConfirmation() {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null); // Use the OrderDetails type

  useEffect(() => {
    // Fetch order details from localStorage
    const storedOrder = localStorage.getItem("orderDetails");
    if (storedOrder) {
      setOrderDetails(JSON.parse(storedOrder));
    } else {
      router.push("/order-confirmation"); // Redirect if no order details are found
    }
  }, [router]);

  if (!orderDetails) {
    return null; // Avoid rendering until data is loaded or redirection occurs
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white max-w-xl w-full rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-6 text-center text-green-600">
          🎉 Order Confirmed!
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Thank you for your purchase. Your order is on the way!
        </p>

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Order Details:</h2>
          <div className="mt-4 space-y-2">
            <p>
              <span className="font-medium">Order ID:</span> {orderDetails.orderId || "N/A"}
            </p>
            <p>
              <span className="font-medium">Total Amount:</span> ₹{orderDetails.totalAmount || "N/A"}
            </p>
            <p>
              <span className="font-medium">Items:</span>{" "}
              {orderDetails.items?.map((item, index) => (
                <span key={index} className="block ml-4">
                  - {item.name} (Qty: {item.quantity})
                </span>
              )) || "N/A"}
            </p>
          </div>
        </div>

        <button
          onClick={() => router.push("/")}
          className="bg-blue-500 text-white w-full py-2 rounded-lg mt-6 hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
