import React, { useState } from 'react';

import { LogOut, Search, Heart, Calendar, User, MessageCircle, Settings, X,} from 'lucide-react';
import { useNavigate } from 'react-router';
import logo from '../../assets/logo.png'


export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('discover');
    const navigate = useNavigate();


    const sidebarItems = [
        { id: 'discover', label: 'Discover', icon: Search },
        { id: 'trips', label: 'My Trips', icon: Calendar },
        { id: 'favorites', label: 'Wishlist', icon: Heart },
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'messages', label: 'Messages', icon: MessageCircle },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    const handleSubmit = () => {
        // Clear stored auth info
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // Navigate to login page
        navigate("/");
    };

    return (
        <>
            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
                <div className="flex items-center justify-between h-16 px-6 border-b">
                    <div className="w-[180px] h-[50px]   flex items-center">
                        <img src={logo} alt="logo" className="object-contain" />
                    </div>

                    <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-violet-600">
                        <X className="w-6 h-6" />
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
                                className={`w-full flex items-center  gap-3 px-6 py-3 text-left hover:font-bold hover:bg-purple-200 transition-colors ${activeTab === item.id
                                    ? 'bg-purple-600 bg-opacity-10 text-white border-r-2 border-violet-500 '
                                    : 'text-gray-700'
                                    }`}
                            >
                                <Icon className="h-5 w-5" />
                                {item.label}
                            </button>
                        );
                    })}
                </nav>


                <div className="absolute bottom-4 left-4 right-4">
                    <button
                        onClick={handleSubmit}
                        className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <LogOut className="h-5 w-5" />
                        Logout
                    </button>
                </div>
            </div>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Toggle button for mobile */}
            <button
                onClick={() => setSidebarOpen(true)}
                className="fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow lg:hidden"
            >
            </button>
        </>
    );
}
