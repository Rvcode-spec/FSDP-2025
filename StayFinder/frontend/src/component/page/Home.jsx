import { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, Filter, SortAsc } from "lucide-react";

export default function Home() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allListings, setAllListings] = useState([]);
  const [currentLocationFilter, setCurrentLocationFilter] = useState(null);
  const [currentSearchFilters, setCurrentSearchFilters] = useState(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedLocation, searchFilters } = location.state || {};

  // Fetch listings only once when component mounts
  const fetchListings = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      console.log("🔄 Fetching listings from backend...");
      const response = await fetch("/api/listing");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Backend listings received:", data);
      
      setAllListings(data);
      return data;
    } catch (err) {
      console.error("❌ Fetch error:", err);
      setError(err.message || "Failed to load listings");
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  // Apply filters to listings
  const applyFilters = useCallback((data, locationFilter, searchFilter) => {
    let filtered = [...data];

    // Filter by location if selected
    if (locationFilter) {
      filtered = filtered.filter((listing) =>
        listing.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
      console.log(`✅ Filtered listings for "${locationFilter}":`, filtered);
    }

    // Apply other search filters here if needed
    if (searchFilter) {
      // Add your search filter logic here
      // Example: filter by date, guests, etc.
    }

    return filtered;
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchListings().then((data) => {
      if (data.length > 0) {
        const filtered = applyFilters(data, selectedLocation, searchFilters);
        setListings(filtered);
        setCurrentLocationFilter(selectedLocation);
        setCurrentSearchFilters(searchFilters);
      }
    });
  }, []); // Only run once on mount

  // Handle location/filter changes from navigation
  useEffect(() => {
    if (allListings.length > 0) {
      // Only update if filters have actually changed
      if (selectedLocation !== currentLocationFilter || searchFilters !== currentSearchFilters) {
        const filtered = applyFilters(allListings, selectedLocation, searchFilters);
        setListings(filtered);
        setCurrentLocationFilter(selectedLocation);
        setCurrentSearchFilters(searchFilters);
        console.log("📋 Filters updated, new listings:", filtered);
      }
    }
  }, [selectedLocation, searchFilters, allListings, currentLocationFilter, currentSearchFilters, applyFilters]);

  // Clear location filter and show all listings
  const clearLocationFilter = useCallback(() => {
    const filtered = applyFilters(allListings, null, currentSearchFilters);
    setListings(filtered);
    setCurrentLocationFilter(null);
    // Update URL without triggering a full navigation
    navigate('/', { 
      replace: true, 
      state: { 
        selectedLocation: null, 
        searchFilters: currentSearchFilters 
      } 
    });
  }, [allListings, currentSearchFilters, navigate, applyFilters]);

  // Clear all filters
  const clearAllFilters = useCallback(() => {
    setListings(allListings);
    setCurrentLocationFilter(null);
    setCurrentSearchFilters(null);
    navigate('/', { replace: true, state: {} });
  }, [allListings, navigate]);

  // Handle listing click (navigate to detail page)
  const handleListingClick = useCallback((listingId) => {
    navigate(`/listing/${listingId}`);
  }, [navigate]);

  // Refresh data manually
  const refreshData = useCallback(async () => {
    const data = await fetchListings();
    if (data.length > 0) {
      const filtered = applyFilters(data, currentLocationFilter, currentSearchFilters);
      setListings(filtered);
    }
  }, [currentLocationFilter, currentSearchFilters, fetchListings, applyFilters]);

  // Loading UI
  if (loading) {
    return (
      <div className="p-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF385C] mx-auto mb-4" />
        <p className="text-gray-600">Loading listings from backend...</p>
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div className="p-6">
        <div className="text-red-500 text-center">
          <h3 className="text-lg font-semibold">Error loading listings</h3>
          <p className="mb-4">{error}</p>
          <div className="space-x-2">
            <button
              onClick={refreshData}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Retry
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header with filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            {currentLocationFilter ? `Stays in ${currentLocationFilter}` : "Recommended Stays"}
          </h2>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>{listings.length} properties found</span>
            {currentLocationFilter && (
              <button
                onClick={clearLocationFilter}
                className="text-blue-600 hover:underline"
              >
                Clear location filter
              </button>
            )}
            {(currentLocationFilter || currentSearchFilters) && (
              <button
                onClick={clearAllFilters}
                className="text-red-600 hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Filter and Sort buttons */}
        <div className="flex gap-2 mt-4 sm:mt-0">
          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
            <SortAsc className="h-4 w-4" />
            Sort
          </button>
        </div>
      </div>

      {/* Active filters display */}
      {(currentLocationFilter || currentSearchFilters?.checkIn || currentSearchFilters?.adults > 1) && (
        <div className="flex flex-wrap gap-2 mb-6">
          {currentLocationFilter && (
            <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              <MapPin className="h-3 w-3" />
              {currentLocationFilter}
              <button
                onClick={clearLocationFilter}
                className="text-blue-600 hover:text-blue-800 ml-1 font-bold"
              >
                ×
              </button>
            </div>
          )}
          
          {currentSearchFilters?.checkIn && currentSearchFilters?.checkOut && (
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              📅 {new Date(currentSearchFilters.checkIn).toLocaleDateString()} - {new Date(currentSearchFilters.checkOut).toLocaleDateString()}
            </div>
          )}
          
          {currentSearchFilters?.adults > 1 && (
            <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              👥 {currentSearchFilters.adults} Adults
              {currentSearchFilters.children > 0 && `, ${currentSearchFilters.children} Children`}
            </div>
          )}
          
          {currentSearchFilters?.rooms > 1 && (
            <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
              🏠 {currentSearchFilters.rooms} Rooms
            </div>
          )}
        </div>
      )}

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <div 
            key={listing._id} 
            onClick={() => handleListingClick(listing._id)}
            className="border rounded-xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={listing.images?.[0] || "/placeholder-image.jpg"}
                alt={listing.name || "Listing"}
                className="w-full h-48 object-cover rounded-t-xl"
                onError={(e) => {
                  e.target.src = "/placeholder-image.jpg";
                }}
              />
              {listing.images?.length > 1 && (
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                  +{listing.images.length - 1} photos
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold mb-1 line-clamp-1">{listing.name}</h3>
              <p className="text-gray-500 flex items-center gap-1 mb-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="line-clamp-1">{listing.location}</span>
              </p>
              
              {listing.description && (
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {listing.description}
                </p>
              )}
              
              <div className="flex justify-between items-center">
                <p className="text-pink-500 font-semibold text-lg">
                  ₹{typeof listing.price === 'number' ? listing.price.toLocaleString() : listing.price}/night
                </p>
                {listing.rating && (
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <span className="text-yellow-400">⭐</span>
                    <span>{listing.rating}</span>
                    {listing.reviewCount && (
                      <span className="text-gray-400">({listing.reviewCount})</span>
                    )}
                  </div>
                )}
              </div>
              
              {listing.amenities && listing.amenities.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {listing.amenities.slice(0, 3).map((amenity, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {amenity}
                    </span>
                  ))}
                  {listing.amenities.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{listing.amenities.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {listings.length === 0 && !loading && (
        <div className="text-center text-gray-500 mt-12">
          <div className="text-6xl mb-4">🏠</div>
          <h3 className="text-lg font-semibold mb-2">
            {currentLocationFilter
              ? `No listings found in ${currentLocationFilter}`
              : "No listings available"}
          </h3>
          <p className="mb-4 text-gray-400">
            {currentLocationFilter
              ? "Try searching for a different location or clear your filters"
              : "Please check back later or try refreshing the page"}
          </p>
          <div className="space-x-2">
            {currentLocationFilter && (
              <button
                onClick={clearLocationFilter}
                className="bg-[#FF385C] text-white px-6 py-2 rounded-lg hover:bg-[#E31E3A] transition-colors"
              >
                View All Properties
              </button>
            )}
            <button
              onClick={refreshData}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
}