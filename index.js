import { useState, useEffect } from 'react';
import { 
  Home, Heart, Calendar, MapPin, Star, Search, Bell, User, 
  LogOut, Menu, X, Filter, CheckCircle, Clock, CreditCard,
  Plane, Camera, MessageCircle, Settings, Gift, Award
} from 'lucide-react';

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('discover');
  const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [user, setUser] = useState({
//     name: 'Priya Sharma',
//     email: 'priya@example.com',
//     memberSince: 'March 2023',
//     avatar: null,
//     tripCount: 12,
//     reviewCount: 8
//   });

  const [favorites, setFavorites] = useState([]);

//   const [bookings, setBookings] = useState([]);
//   const [recommendations, setRecommendations] = useState([]);

//   useEffect(() => {
//     // Mock data for user favorites
//     const mockFavorites = [
//       {
//         id: 1,
//         name: "Luxury Villa in Goa",
//         location: "North Goa",
//         price: 8500,
//         rating: 4.8,
//         image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=200&fit=crop",
//         saved: true
//       },
//       {
//         id: 2,
//         name: "Beachfront Resort Kerala",
//         location: "Kovalam, Kerala", 
//         price: 6000,
//         rating: 4.7,
//         image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=300&h=200&fit=crop",
//         saved: true
//       }
//     ];

//     const mockBookings = [
//       {
//         id: 1,
//         propertyName: "Mountain View Cottage",
//         location: "Manali, HP",
//         checkIn: "2024-08-15",
//         checkOut: "2024-08-18",
//         amount: 12600,
//         status: "confirmed",
//         guests: 3,
//         image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop"
//       },
//       {
//         id: 2,
//         propertyName: "City Apartment Mumbai",
//         location: "Bandra, Mumbai",
//         checkIn: "2024-07-20",
//         checkOut: "2024-07-22",
//         amount: 7000,
//         status: "completed",
//         guests: 2,
//         image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=200&fit=crop"
//       }
//     ];

//     const mockRecommendations = [
//       {
//         id: 1,
//         name: "Heritage Haveli Jaipur",
//         location: "Pink City, Jaipur",
//         price: 5500,
//         rating: 4.6,
//         image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=200&fit=crop",
//         tag: "Historic"
//       },
//       {
//         id: 2,
//         name: "Lakeside Villa Udaipur",
//         location: "Lake Pichola, Udaipur",
//         price: 9200,
//         rating: 4.9,
//         image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&h=200&fit=crop",
//         tag: "Luxury"
//       },
//       {
//         id: 3,
//         name: "Treehouse Retreat",
//         location: "Wayanad, Kerala",
//         price: 4800,
//         rating: 4.5,
//         image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
//         tag: "Nature"
//       }
//     ];

//     setFavorites(mockFavorites);
//     setBookings(mockBookings);
//     setRecommendations(mockRecommendations);
//   }, []);


  const toggleFavorite = (propertyId) => {
    setFavorites(prev => prev.filter(fav => fav.id !== propertyId));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const sidebarItems = [
    { id: 'discover', label: 'Discover', icon: Search },
    { id: 'trips', label: 'My Trips', icon: Calendar },
    { id: 'favorites', label: 'Wishlist', icon: Heart },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

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

      {/* Recommendations */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Recommended for you</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
                <div className="absolute top-3 left-3">
                  <span className="bg-white px-2 py-1 rounded-full text-xs font-medium">
                    {property.tag}
                  </span>
                </div>
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
      </div>
    </div>
  );

//   const renderTrips = () => (
//     // <div className="space-y-6">
//     //   <h2 className="text-2xl font-bold">My Trips</h2>
      
//     // //   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     // //     {bookings.map((booking) => (
//     // //       <div key={booking.id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
//     // //         <img 
//     // //           src={booking.image} 
//     // //           alt={booking.propertyName}
//     // //           className="w-full h-32 object-cover"
//     // //         />
//     // //         <div className="p-4">
//     // //           <div className="flex justify-between items-start mb-2">
//     // //             <h3 className="font-semibold">{booking.propertyName}</h3>
//     // //             <div className={`px-2 py-1 rounded-full text-xs ${getStatusColor(booking.status)}`}>
//     // //               {booking.status}
//     // //             </div>
//     // //           </div>
//     // //           <p className="text-sm text-gray-600 flex items-center gap-1 mb-2">
//     // //             <MapPin className="h-3 w-3" />
//     // //             {booking.location}
//     // //           </p>
//     // //           <p className="text-sm text-gray-600 mb-2">
//     // //             {new Date(booking.checkIn).toLocaleDateString()} - {new Date(booking.checkOut).toLocaleDateString()}
//     // //           </p>
//     // //           <p className="text-sm text-gray-600 mb-3">{booking.guests} guests</p>
//     // //           <div className="flex justify-between items-center">
//     // //             <p className="font-bold">₹{booking.amount.toLocaleString()}</p>
//     // //             <div className="flex gap-2">
//     // //               <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">View</button>
//     // //               {booking.status === 'completed' && (
//     // //                 <button className="px-3 py-1 text-sm bg-[#FF385C] text-white rounded hover:bg-[#E31E3A]">
//     // //                   Review
//     // //                 </button>
//     // //               )}
//     // //             </div>
//     // //           </div>
//     // //         </div>
//     // //       </div>
//     // //     ))}
//     // //   </div>
//     // </div>
//   );

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
        return renderProfile();
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
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <h1 className="text-xl font-bold text-[#FF385C]">StayHub</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="mt-8">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-6 py-3 text-left hover:bg-gray-100 transition-colors ${
                  activeTab === item.id ? 'bg-[#FF385C] bg-opacity-10 text-[#FF385C] border-r-2 border-[#FF385C]' : 'text-gray-700'
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-900">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">2</span>
            </button>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FF385C] rounded-full flex items-center justify-center">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                ) : (
                  <User className="h-4 w-4 text-white" />
                )}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-gray-500">Traveler</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
       
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}


--------------------------------------------------------

'use client'
import { useState } from 'react';
import Sidebar from '../_common/Sidebar';
import UserProfile from '../_common/UserProfile';
import { Bell, Menu, User } from 'lucide-react';

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('discover');
  const [user, setUser] = useState({
    name: "Ravi Singh",
    avatar: "", // set avatar image URL here if available
  });

  const renderDiscover = () => (
    <div className="p-6 text-gray-700">
      <h2 className="text-xl font-semibold mb-4">Discover Places</h2>
      <p>Explore amazing stays and destinations around the world.</p>
    </div>
  );

  const renderTrips = () => (
    <div className="p-6 text-gray-700">
      <h2 className="text-xl font-semibold mb-4">Your Trips</h2>
      <p>Track your past and upcoming trips here.</p>
    </div>
  );

  const renderFavorites = () => (
    <div className="p-6 text-gray-700">
      <h2 className="text-xl font-semibold mb-4">Favorite Stays</h2>
      <p>See your list of saved stays and experiences.</p>
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
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      
    </div>
  );
}
