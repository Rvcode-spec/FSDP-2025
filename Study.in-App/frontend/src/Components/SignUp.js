import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Welcome Section */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome Back to Study.in</h1>
        {/* Uncomment and make sure the image path is correct */}
        {/* <img src="/assets/img.jpg" alt="Logo" className="w-24 h-24 mx-auto" /> */}
      </div>

      {/* Login Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <form className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700 text-center">SignUp</h3>

          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter your Name"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

           {/* Email Input */}
           <input
            type="text"
            placeholder="Enter your Email"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Login Button */}
          <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition">
            SignUp
          </button>

          {/* Signup Link */}
          <p className="text-sm text-center">
          Already have an account?Log in{' '}
            <Link to = '/Signup'className='text-blue-600 font-semibold hover:underline'>Sign up</Link>
            
          </p>
        </form>
      </div>
    </div>
  );
}
