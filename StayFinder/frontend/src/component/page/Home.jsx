import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, Star, Users, Calendar, X } from "lucide-react";


export default function Home() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allListings, setAllListings] = useState([]);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedLocation, searchFilters } = location.state || {};

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/listing");
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setAllListings(data);
        
        let filtered = data;

        // Filter by location if selected

        if (selectedLocation) {
          filtered = data.filter((listing) =>
            listing.location.toLowerCase().includes(selectedLocation.toLowerCase())
          );
          console.log("✅ Filtered listings for:", selectedLocation, filtered);
        }

        setListings(filtered);
      } catch (err) {
        console.error("❌ Fetch error:", err);
        setError(err.message || "Failed to load listings");
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [selectedLocation, searchFilters]);

 

  // Clear all filters
  const clearAllFilters = () => {
    setListings(allListings);
  
  };

  // Clear location filter only
  const clearLocationFilter = () => {
    let filtered = allListings;
    setListings(filtered);
   
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
  };

  // Loading UI
  if (loading) {
    return (
      <div className="p-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF385C] mx-auto mb-4" />
        <p className="text-gray-600">Loading amazing stays...</p>
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div className="p-6">
        <div className="text-red-500 text-center bg-red-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Oops! Something went wrong</h3>
          <p className="mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-[#FF385C] text-white rounded-lg hover:bg-[#E31E3A] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
              <button
                onClick={clearAllFilters}
                className="text-blue-600 hover:underline font-medium"
              >
                Clear all filters
              </button>
      
          </div>
        </div>
      </div>

     

      {/* Active filters display */}
      {(selectedLocation || searchFilters?.checkIn) && (
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedLocation && (
            <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              <MapPin className="h-3 w-3" />
              {selectedLocation}
              <button
                onClick={clearLocationFilter}
                className="text-blue-600 hover:text-blue-800 ml-1"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}

          
          
          {searchFilters?.checkIn && (
            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              <Calendar className="h-3 w-3" />
              {formatDate(searchFilters.checkIn)} - {formatDate(searchFilters.checkOut)}
            </div>
          )}
          
          {searchFilters?.adults > 1 && (
            <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              <Users className="h-3 w-3" />
              {searchFilters.adults} Adults{searchFilters.children > 0 && `, ${searchFilters.children} Children`}
            </div>
          )}
        </div>
      )}

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <div 
            key={listing._id} 
            className="border rounded-xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer group"
            onClick={() => navigate(`/listing/${listing._id}`)}
          >
            <div className="relative">
              <img
                src={listing.images?.[0] || "/placeholder-image.jpg"}
                alt={listing.name || "Listing"}
                className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = "/placeholder-image.jpg";
                }}
              />
              {listing.isNew && (
                <div className="absolute top-2 left-2 bg-[#FF385C] text-white px-2 py-1 rounded text-xs font-medium">
                  New
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1 line-clamp-1 group-hover:text-[#FF385C] transition-colors">
                {listing.name}
              </h3>
              
              <p className="text-gray-500 flex items-center gap-1 mb-2 text-sm">
                <MapPin className="h-3 w-3 flex-shrink-0" />
                <span className="line-clamp-1">{listing.location}</span>
              </p>

              <div className="flex justify-between items-center mb-2">
                <p className="text-[#FF385C] font-bold">
                  ₹{listing.price?.toLocaleString('en-IN')}<span className="text-sm font-normal text-gray-600">/night</span>
                </p>
                
                {listing.rating && (
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{listing.rating}</span>
                    {listing.reviewCount && (
                      <span className="text-gray-500">({listing.reviewCount})</span>
                    )}
                  </div>
                )}
              </div>

              {listing.maxGuests && (
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  Up to {listing.maxGuests} guests
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {listings.length === 0 && (
        <div className="text-center text-gray-500 mt-12 bg-gray-50 py-12 rounded-lg">
          <div className="text-6xl mb-4">🏠</div>
          <h3 className="text-xl font-semibold mb-2">
            {selectedLocation
              ? `No properties found in ${selectedLocation}`
              : "No properties match your filters"}
          </h3>
          <p className="mb-6 text-gray-600">
            {selectedLocation
              ? "Try adjusting your search criteria or explore other destinations"
              : "Try adjusting your filters or search criteria"}
          </p>
          <div className="flex gap-4 justify-center">
            {selectedLocation && (
              <button
                onClick={clearLocationFilter}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Search Other Locations
              </button>
            )}
            <button
              onClick={clearAllFilters}
              className="bg-[#FF385C] text-white px-6 py-2 rounded-lg hover:bg-[#E31E3A] transition-colors"
            >
              View All Properties
            </button>
          </div>
        </div>
      )}
    </div>
  );
}