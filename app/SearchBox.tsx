'use client';

import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBox = () => {
  const [input, setInput] = useState('');

  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?q=${input}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center
     px-5"
    >
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-14 rounded-sm
      placeholder-gray-500 text-gray-500 flex-1 outline-none
        bg-transparent dark:text-orange-400"
        placeholder="Search..."
        value={input}
      />
      <button
        type="submit"
        disabled={!input}
        className="disabled:text-gray-400 border-l-2
        border-gray-400 pl-2"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
