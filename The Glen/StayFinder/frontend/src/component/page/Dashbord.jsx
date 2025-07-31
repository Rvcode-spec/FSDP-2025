import { useState } from 'react';
import { Bell, Menu, User } from 'lucide-react'; // Make sure lucide-react is installed
import Sidebar from '../_common/Sidebar';
import UserProfile from '../_common/UserProfile';

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('discover');
  
   // testing 
  const [user] = useState({
    name : "Ravi",
    avatar: '',
    
  });

  const renderContent = () => {
    switch (activeTab) {
      case 'discover':
        return <div>Discover Page</div>;
      case 'trips':
        return <div>Trips Page</div>;
      case 'favorites':
        return <div>Favorites Page</div>;
      case 'profile':
        return <UserProfile user={user} />;
      case 'messages':
        return <div className="text-center py-12 text-gray-500">Messages coming soon...</div>;
      case 'settings':
        return <div className="text-center py-12 text-gray-500">Settings coming soon...</div>;
      default:
        return <div>Discover Page</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6">
          <button onClick={() => {}} className="lg:hidden">
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

        {/* Main Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
