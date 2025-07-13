import React, { useState } from 'react';
import { Search, Filter } from "lucide-react";

export default function SearchAndFilter({ onSearchChange, onCategoryChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange?.(value); // Optional callback to parent
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    onCategoryChange?.(value); // Optional callback to parent
  };

  return (
<div className='w-screen flex justify-center py-6 bg-violet-50 '>
  <div className="rounded-xl shadow-lg p-6 mb-8 border border-gray-100 w-full max-w-6xl mx-4">
    <div className="flex flex-col md:flex-row gap-4 items-center">
      
      {/* Search Bar */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search courses or instructors..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all duration-200"
        />
      </div>

      {/* Category Filter */}
      <div className="flex items-center space-x-2">
        <Filter className="w-5 h-5 text-gray-400" />
        <select
          value={category}
          onChange={handleCategoryChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all duration-200"
        >
          <option value="">All Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Science">Data Science</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>

    </div>
  </div>
</div>
  );
}
