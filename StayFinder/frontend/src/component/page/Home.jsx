import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, Filter, SortAsc, Star, Users, Calendar, X } from "lucide-react";

export default function Home() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allListings, setAllListings] = useState([]);
  const [sortBy, setSortBy] = useState('recommended'); // 'recommended', 'price-low', 'price-high', 'rating'
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [minRating, setMinRating] = useState(0);

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

        // Additional filters from searchFilters if available
        if (searchFilters) {
          console.log("Search filters applied:", searchFilters);
          
          // Apply price range filter if available
          if (searchFilters.maxPrice) {
            filtered = filtered.filter(listing => listing.price <= searchFilters.maxPrice);
          }
          
          // Apply guest capacity filter
          if (searchFilters.adults) {
            filtered = filtered.filter(listing => 
              (listing.maxGuests || 2) >= (searchFilters.adults + searchFilters.children)
            );
          }
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

  // Apply sorting
  useEffect(() => {
    const sortedListings = [...listings].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return (a.price || 0) - (b.price || 0);
        case 'price-high':
          return (b.price || 0) - (a.price || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0; // Keep original order for 'recommended'
      }
    });
    setListings(sortedListings);
  }, [sortBy]);

  // Apply filters
  const applyFilters = () => {
    let filtered = allListings;

    // Location filter
    if (selectedLocation) {
      filtered = filtered.filter((listing) =>
        listing.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    // Price range filter  
    filtered = filtered.filter((listing) => 
      listing.price >= priceRange.min && listing.price <= priceRange.max
    );

    // Rating filter
    if (minRating > 0) {
      filtered = filtered.filter((listing) => (listing.rating || 0) >= minRating);
    }

    // Guest capacity filter
    if (searchFilters?.adults) {
      filtered = filtered.filter(listing => 
        (listing.maxGuests || 2) >= (searchFilters.adults + searchFilters.children)
      );
    }

    setListings(filtered);
    setShowFilters(false);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setListings(allListings);
    setPriceRange({ min: 0, max: 10000 });
    setMinRating(0);
    setSortBy('recommended');
    // Update URL to remove state
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  // Clear location filter only
  const clearLocationFilter = () => {
    let filtered = allListings;
    
    // Apply other active filters
    filtered = filtered.filter((listing) => 
      listing.price >= priceRange.min && listing.price <= priceRange.max
    );
    
    if (minRating > 0) {
      filtered = filtered.filter((listing) => (listing.rating || 0) >= minRating);
    }

    setListings(filtered);
    // Update URL to remove location state
    window.history.replaceState({}, document.title, window.location.pathname);
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
      {/* Header with filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            {selectedLocation ? `Stays in ${selectedLocation}` : "Recommended Stays"}
          </h2>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>{listings.length} properties found</span>
            {(selectedLocation || priceRange.min > 0 || priceRange.max < 10000 || minRating > 0) && (
              <button
                onClick={clearAllFilters}
                className="text-blue-600 hover:underline font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Filter and Sort buttons */}
        <div className="flex gap-2 mt-4 sm:mt-0">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter className="h-4 w-4" />
            Filters
          </button>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-gray-50 p-4 rounded-lg mb-6 border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Price Range (₹)</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({...priceRange, min: Number(e.target.value)})}
                  className="w-full px-3 py-2 border rounded text-sm"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value)})}
                  className="w-full px-3 py-2 border rounded text-sm"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Minimum Rating</label>
              <select
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded text-sm"
              >
                <option value={0}>Any Rating</option>
                <option value={3}>3+ Stars</option>
                <option value={4}>4+ Stars</option>
                <option value={4.5}>4.5+ Stars</option>
              </select>
            </div>

            <div className="flex items-end gap-2">
              <button
                onClick={applyFilters}
                className="bg-[#FF385C] text-white px-6 py-2 rounded-lg hover:bg-[#E31E3A] transition-colors"
              >
                Apply Filters
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="border px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Active filters display */}
      {(selectedLocation || searchFilters?.checkIn || priceRange.min > 0 || minRating > 0) && (
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

          {priceRange.min > 0 && (
            <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
              ₹{priceRange.min}+ per night
            </div>
          )}

          {minRating > 0 && (
            <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
              <Star className="h-3 w-3" />
              {minRating}+ Rating
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