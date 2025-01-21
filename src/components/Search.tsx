'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Handle search submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      router.push(`/products?search=${searchQuery}`); // Navigate to products page with search query
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative hidden lg:block">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
        className="bg-gray-100 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      <button type="submit" className="absolute left-3 top-2.5 text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.414-1.414L21 21z"
          />
        </svg>
      </button>
    </form>
  );
};

export default Search;
