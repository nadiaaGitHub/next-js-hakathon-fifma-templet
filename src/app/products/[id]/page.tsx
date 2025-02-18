'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

async function getProductById(id: string) {
  try {
    const query = `*[_type == 'product' && _id == $id][0]{
      _id,
      productName,
      description,
      price,
      category,
      "imageUrl": image.asset->url
    }`;
    return await client.fetch(query, { id });
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    return null;
  }
}

async function getRelatedProducts(category: string, id: string) {
  try {
    const query = `*[_type == 'product' && category == $category && _id != $id][0..2]{
      _id,
      productName,
      price,
      "imageUrl": image.asset->url
    }`;
    return await client.fetch(query, { category, id });
  } catch (error) {
    console.error('Error fetching related products:', error);
    return [];
  }
}

interface ProductDetailsProps {
  params: Promise<{ id: string }>;
}

interface Product {
  _id: string;
  productName: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

interface RelatedProduct {
  _id: string;
  productName: string;
  price: number;
  imageUrl: string;
}

export default function ProductDetailsPage({ params }: ProductDetailsProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<RelatedProduct[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchProductData = async () => {
      const resolvedParams = await params; // Unwrap the promise
      const { id } = resolvedParams;
  
      const productData = await getProductById(id);
      if (productData) {
        setProduct(productData);
  
        if (productData.category) {
          const related = await getRelatedProducts(productData.category, productData._id);
          setRelatedProducts(related);
        }
      } else {
        console.error('Product not found');
        router.push('/404'); // Redirect to 404 if product is not found
      }
    };
  
    fetchProductData();
  }, [params, router]); // Add 'router' to the dependency array
  

  if (!product) {
    return (
      <section className="p-6 text-center">
        <h2 className="text-xl font-bold">Product Not Found</h2>
        <p>We couldn't find the product you were looking for.</p>
      </section>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.productName,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
      size: selectedSize,
      quantity,
    });
    router.push('/cart');
  };

  return (
    <section className="max-w-6xl mx-auto p-6 m-16">
      <div className="grid md:grid-cols-2 gap-7">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src={product.imageUrl || '/placeholder.png'}
            alt={product.productName || 'No image available'}
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">{product.productName}</h1>
          {product.description && (
            <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl">
              {product.description}
            </p>
          )}
          <p className="text-2xl font-bold mt-4">
            Price: ₹ {product.price ? product.price.toLocaleString() : 'N/A'}
          </p>

          {/* Size Selector */}
          <div className="mt-6">
            <label className="block font-semibold mb-2">Size:</label>
            <div className="flex gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-black border-gray-300'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6">
            <label className="block font-semibold mb-2">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min={1}
              className="border px-4 py-2 rounded-md w-20"
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-2 mt-6 rounded-md hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <div key={relProduct._id} className="border p-4 rounded-lg shadow-sm">
                <Image
                  src={relProduct.imageUrl || '/placeholder.png'}
                  alt={relProduct.productName || 'No image available'}
                  width={300}
                  height={300}
                  className="object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-4">{relProduct.productName}</h3>
                <p className="text-gray-600">
                  Price: ₹ {relProduct.price ? relProduct.price.toLocaleString() : 'N/A'}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
