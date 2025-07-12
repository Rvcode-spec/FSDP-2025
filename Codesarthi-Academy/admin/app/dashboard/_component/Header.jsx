'use client';
import React from 'react';


export default function Header() {
  return (
 <div className="h-16 flex items-center justify-between bg-white  px-4 shadow-md">
  {/* Logo Section */}
  <div className="w-46 h-auto  flex items-center justify-center  rounded">
    <img
      src="/rvscodesolutions.svg"
      className="object-contain h-16"
      alt="RVSCodesolutions Logo"
    />
  </div>

  {/* Dashboard Button */}
  <div className="py-3 px-4">
    <button className="text-violet-500 text-lg font-semibold hover:text-violet-700 transition">
      Dashboard
    </button>
  </div>
</div>

    
  );
}
