import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-sm mx-auto mt-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search movies or series..."
          className="w-full pl-4 pr-12 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search input"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-blue-500"
          aria-label="Search"
        >
          <FiSearch className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
