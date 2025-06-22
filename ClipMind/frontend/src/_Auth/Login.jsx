import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    if (email && password) {
      alert('Login successful!');
      // navigate to dashboard or home page
      navigate('/dashboard');
    } else {
      alert('Please enter email and password.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don't have an account?
          <span className="text-purple-700 font-semibold ml-1 cursor-pointer" onClick={() => navigate('/signup')}>
            Sign-Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
