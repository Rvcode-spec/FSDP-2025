import React from 'react';
import { User } from 'lucide-react';

export default function UserProfile({ user }) {
  if (!user) return <p className="p-6 text-gray-600">Loading...</p>;

  return (
    <div className="flex-1 p-6 space-y-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
      <div className="bg-white rounded-lg shadow-sm border p-6">
        {/* Avatar and Basic Info */}
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 bg-[#FF385C] rounded-full flex items-center justify-center overflow-hidden">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 object-cover"
              />
            ) : (
              <User className="h-10 w-10 text-white" />
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">Member since {user.memberSince}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-4 bg-gray-100 rounded-lg">
            <p className="text-2xl font-bold text-[#FF385C]">{user.tripCount}</p>
            <p className="text-sm text-gray-600">Trips</p>
          </div>
          <div className="text-center p-4 bg-gray-100 rounded-lg">
            <p className="text-2xl font-bold text-[#FF385C]">{user.reviewCount}</p>
            <p className="text-sm text-gray-600">Reviews</p>
          </div>
          <div className="text-center p-4 bg-gray-100 rounded-lg">
            <p className="text-2xl font-bold text-[#FF385C]">Gold</p>
            <p className="text-sm text-gray-600">Status</p>
          </div>
        </div>

        {/* Button */}
        <button className="bg-[#FF385C] text-white px-4 py-2 rounded-lg hover:bg-[#E31E3A] transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
