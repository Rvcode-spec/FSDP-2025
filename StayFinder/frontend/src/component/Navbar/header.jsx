import { useState } from 'react';
import { Search } from 'lucide-react'; 
import logo from '../../assets/logo.png';
import Home from '../page/Home';
import Login from '../_Auth/login';     // 🔁 Capital L to match component
import Register from '../_Auth/Register';

export default function Header() {
  const [formType, setFormType] = useState(""); // 'login' | 'register' | ''

  return (
    <>
      <div className="w-full flex flex-wrap items-center justify-between px-4 py-2 bg-white shadow">
        
        {/* LEFT: Logo */}
        <div className="w-[180px] h-[50px] text-[#FF385C] flex items-center">
          <img src={logo} alt="logo" className="object-contain" />
        </div>

        {/* CENTER: Search Bar */}
        <div className="hidden lg:flex items-center justify-between shadow-md rounded-full px-4 py-2 border w-full max-w-[430px] h-[48px] mx-2">
          <input
            type="text"
            placeholder="Anywhere"
            className="w-[78px] text-sm font-medium placeholder-black outline-none"
          />
          <div className="border-l h-4 mx-2" />
          <input
            type="text"
            placeholder="Any week"
            className="w-[75px] text-sm font-medium placeholder-black outline-none"
          />
          <div className="border-l h-4 mx-2" />
          <input
            type="text"
            placeholder="Add guests"
            className="w-[106px] text-sm font-medium placeholder-black outline-none"
          />
          <div className="bg-[#FF385C] p-2 rounded-full ml-2">
            <Search className="text-white h-4 w-4" />
          </div>
        </div>

        {/* RIGHT: Auth Buttons */}
        <div className="flex items-center gap-2 mt-2 lg:mt-0">
          <button
            onClick={() => setFormType("login")}
            className="capitalize bg-purple-700 py-2 px-4 rounded-2xl text-white font-bold hover:bg-purple-800 text-sm"
          >
            login
          </button>
          <button
            onClick={() => setFormType("register")}
            className="capitalize bg-purple-700 py-2 px-4 rounded-2xl text-white font-bold hover:bg-purple-800 text-sm"
          >
            register
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="w-full mt-3 lg:hidden">
          <input
            type="text"
            placeholder="Search destination..."
            className="w-full border rounded-full px-4 py-2 text-sm shadow"
          />
        </div>
      </div>

      {/* FORM AREA */}
      <div className="px-4">
        {formType === "login" && <Login />}
        {formType === "register" && <Register />}
      </div>

      {/* PAGE CONTENT */}
      <Home />
    </>
  );
}
