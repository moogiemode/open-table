'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const SearchBar = () => {
  const router = useRouter();

  const [location, useLocation] = useState('');

  const handleSearchClick = () => {
    if (!location) return;
    router.push(`/search`);
  };

  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => useLocation(e.target.value)}
      />
      <button
        className="rounded bg-red-600 px-9 py-2 text-white"
        onClick={handleSearchClick}
      >
        Let's go
      </button>
    </div>
  );
};
