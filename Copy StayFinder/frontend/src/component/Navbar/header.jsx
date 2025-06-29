import { useState } from 'react';
import { Search } from 'lucide-react';
import logo from '../../assets/logo.png';
import Login from '../_Auth/login';
import Register from '../_Auth/Register';
import DateSelector from '../_common/DateSelector';
import GuestSelector from '../_common/GuestSelector';

export default function Header() {
  const [formType, setFormType] = useState('');
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState({ adults: 1, children: 0, rooms: 1 });

  // 👇 control which section is active: 'location' | 'calendar' | 'guests' | null
  const [activeInput, setActiveInput] = useState(null);

  const handleSearch = () => {
    const query = {
      location,
      checkIn,
      checkOut,
      ...guests,
    };
    console.log('Searching with query:', query);
  };

  return (
    <>
      <div className="w-full flex flex-wrap items-center justify-between px-4 py-2 bg-white shadow">
        {/* Logo */}
        <div className="w-[180px] h-[50px] text-[#FF385C] flex items-center">
          <img src={logo} alt="logo" className="object-contain" />
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center shadow-md rounded-full px-4 py-2 border w-full max-w-[700px] mx-2 h-[48px] bg-white relative">
          {/* Location */}
          <div
            className="relative px-3"
            onClick={() => setActiveInput('location')}
          >
            <input
              type="text"
              placeholder="Where to?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-[110px] text-sm font-medium placeholder-black outline-none"
            />
            {activeInput === 'location' && (
              <div className="absolute top-10 left-0 bg-white shadow-md border rounded w-48 p-2 text-sm z-50">
                🔍 Start typing a location...
              </div>
            )}
          </div>

          {/* Calendar */}
          <div className="px-4 border-x">
            <DateSelector
              checkIn={checkIn}
              checkOut={checkOut}
              isOpen={activeInput === 'calendar'}
              setIsOpen={(val) => setActiveInput(val ? 'calendar' : null)}
              onChange={({ checkIn, checkOut }) => {
                setCheckIn(checkIn);
                setCheckOut(checkOut);
              }}
            />
          </div>

          {/* Guests */}
          <div>
            <GuestSelector
              guests={guests}
              setGuests={setGuests}
              isOpen={activeInput === 'guests'}
              openGuests={() => setActiveInput('guests')}
            />
          </div>

          {/* Search Button */}
          <div
            onClick={handleSearch}
            className="bg-[#FF385C] p-2 rounded-full ml-2 cursor-pointer"
          >
            <Search className="text-white h-4 w-4" />
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2 mt-2 lg:mt-0">
          <button
            onClick={() => setFormType('login')}
            className="capitalize bg-purple-700 py-2 px-4 rounded-2xl text-white font-bold hover:bg-purple-800 text-sm"
          >
            login
          </button>
          <button
            onClick={() => setFormType('register')}
            className="capitalize bg-purple-700 py-2 px-4 rounded-2xl text-white font-bold hover:bg-purple-800 text-sm"
          >
            register
          </button>
        </div>

        {/* Mobile Search */}
        <div className="w-full mt-3 lg:hidden">
          <input
            type="text"
            placeholder="Search destination..."
            className="w-full border rounded-full px-4 py-2 text-sm shadow"
          />
        </div>
      </div>

      {/* Login/Register Form */}
      <div className="px-4">
        {formType === 'login' && <Login />}
        {formType === 'register' && <Register />}
      </div>
    </>
  );
}
