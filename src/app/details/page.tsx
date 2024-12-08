import Image from 'next/image';

export default function ProductDetail() {
  return (
    <div className="max-w-6xl mx-auto p-6 m-16">
      <div className="grid md:grid-cols-2 gap-7">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src="/images/p-3.png"
            alt="Nike Air Force 1 PLT.AF.ORM"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Nike Air Force 1 PLT.AF.ORM
          </h1>
          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid.
            Its “inside-out”-inspired construction, including unique layering and exposed foam accents,
            ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole
            aesthetic give this release an artisan finish.
          </p>
          <span className="text-2xl font-bold mt-4">₹ 8,695.00</span>
          <button className="bg-black w-full sm:w-56 text-white py-2 px-2 rounded-md hover:bg-blue-600 mt-6">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
