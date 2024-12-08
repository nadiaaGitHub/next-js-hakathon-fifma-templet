import Image from "next/image";

export default function ShoppingBag() {
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

      {/* Main Content: Bag Section and Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Bag Section */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Bag</h2>

          {/* First Item */}
          <div className="flex flex-col md:flex-row items-start border-b border-gray-300 pb-4 mb-4">
            <Image
              src="/images/Nike Dri-FIT ADV TechKnit Ultra.png"
              alt="Nike Dri-FIT ADV TechKnit Ultra"
              width={100}
              height={100}
              className="rounded-md w-full max-w-[120px] md:w-auto"
            />
            <div className="mt-4 md:mt-0 md:ml-4 flex-grow">
              <h3 className="font-semibold text-lg">Nike Dri-FIT ADV TechKnit Ultra</h3>
              <p className="text-gray-500 text-sm">
                Men&apos;s Short-Sleeve Running Top <br />
                Ashen Slate/Cobalt Bliss
              </p>
              {/* Size and Quantity Row */}
              <div className="flex items-center space-x-8 mt-2">
                <p className="text-sm">Size: L</p>
                <p className="text-sm">Quantity: 1</p>
              </div>
              {/* Heart and Delete Row */}
              <div className="flex items-center space-x-4 mt-4">
                <button className="text-gray-500 hover:text-red-600 text-xl">♡</button>
                <button className="text-gray-500 hover:text-red-600">🗑</button>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <p className="text-lg font-bold">MRP: ₹ 3,895.00</p>
            </div>
          </div>

          {/* Second Item */}
          <div className="flex flex-col md:flex-row items-start border-b border-gray-300 pb-4">
            <Image
              src="/images/Nike Dri-FIT ADV Run Division.png"
              alt="Nike Air Max 97 SE"
              width={100}
              height={100}
              className="rounded-md w-full max-w-[120px] md:w-auto"
            />
            <div className="mt-4 md:mt-0 md:ml-4 flex-grow">
              <h3 className="font-semibold text-lg">Nike Air Max 97 SE</h3>
              <p className="text-gray-500 text-sm">
                Men&apos;s Shoes <br />
                Flat Pewter/Light Bone/Black/White
              </p>
              {/* Size and Quantity Row */}
              <div className="flex items-center space-x-8 mt-2">
                <p className="text-sm">Size: 8</p>
                <p className="text-sm">Quantity: 1</p>
              </div>
              {/* Heart and Delete Row */}
              <div className="flex items-center space-x-4 mt-4">
                <button className="text-gray-500 hover:text-red-600">♡</button>
                <button className="text-gray-500 hover:text-red-600">🗑</button>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <p className="text-lg font-bold">MRP: ₹ 16,995.00</p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p className="font-bold">₹ 20,890.00</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Estimated Delivery & Handling</p>
            <p className="font-bold">Free</p>
          </div>
          <div className="flex justify-between border-t pt-4 border-gray-300">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-lg font-bold">₹ 20,890.00</p>
          </div>
          <button className="bg-black text-white w-full py-2 mt-6 rounded-md hover:bg-gray-800">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
