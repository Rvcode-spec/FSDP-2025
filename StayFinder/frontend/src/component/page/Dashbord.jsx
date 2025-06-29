import { Profiler, useState,  } from 'react';
import Sidebar from '../_common/Sidebar';
import UserProfile from '../_common/UserProfile';


export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('discover');
  
 const [user, setUser] = useState('');
 const [favorites, setFavorites] = useState([]);


  const toggleFavorite = (propertyId) => {
    setFavorites(prev => prev.filter(fav => fav.id !== propertyId));
  };


  

  const renderDiscover = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-[#FF385C] to-[#E31E3A] text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {user.name}!</h2>
        <p className="opacity-90">Ready for your next adventure? Discover amazing places to stay.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
          <Plane className="h-8 w-8 text-[#FF385C] mx-auto mb-2" />
          <p className="text-2xl font-bold">{user.tripCount}</p>
          <p className="text-sm text-gray-600">Trips Completed</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
          <Star className="h-8 w-8 text-[#FF385C] mx-auto mb-2" />
          <p className="text-2xl font-bold">{user.reviewCount}</p>
          <p className="text-sm text-gray-600">Reviews Written</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
          <Award className="h-8 w-8 text-[#FF385C] mx-auto mb-2" />
          <p className="text-2xl font-bold">Gold</p>
          <p className="text-sm text-gray-600">Member Status</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
              />
            </div>
          </div>
          <input
            type="date"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
          />
          <input
            type="date"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
          />
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4+ Guests</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderFavorites = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">My Wishlist</h2>
      
      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No favorites yet. Start exploring to add some!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                <button 
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50"
                >
                  <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                </button>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-1">{property.name}</h4>
                <p className="text-sm text-gray-600 flex items-center gap-1 mb-2">
                  <MapPin className="h-3 w-3" />
                  {property.location}
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-[#FF385C]">₹{property.price}/night</p>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {property.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

 

  const renderContent = () => {
    switch (activeTab) {
      case 'discover':
        return renderDiscover();
      case 'trips':
        return renderTrips();
      case 'favorites':
        return renderFavorites();
      case 'profile':
         return <UserProfile user={user} />;
      case 'messages':
        return <div className="text-center py-12 text-gray-500">Messages coming soon...</div>;
      case 'settings':
        return <div className="text-center py-12 text-gray-500">Settings coming soon...</div>;
      default:
        return renderDiscover();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar/>
      <UserProfile/>
      

      
    </div>
  );
}