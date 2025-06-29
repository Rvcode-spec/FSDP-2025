import { useEffect, useState } from "react";
// import API from "../../utils/api";

export default function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("/api/listing")
      .then(res => res.json())
      .then(data => {
        console.log("✅ Got listings:", data);
        setListings(data);
      })
      .catch(err => console.error("❌ Error:", err));
  }, []);


  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Recommended Stays</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing._id} className="border rounded-xl shadow hover:shadow-lg transition">
            <img
              src={listing.images?.[0]}
              alt={listing.name}
              className="w-full h-48 object-cover rounded-t-xl"
            />

            <div className="p-4">
              <h3 className="text-lg font-bold">{listing.name}</h3>
              <p className="text-gray-500">{listing.location}</p>
              <p className="text-pink-500 font-semibold mt-2">₹{listing.price}/night</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
