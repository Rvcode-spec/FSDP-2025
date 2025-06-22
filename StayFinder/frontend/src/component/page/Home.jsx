import React from 'react'





const listings = [
  {
    img: 'https://source.unsplash.com/400x300/?maldives',
    title: 'MV, Maldives',
    location: '2,376 kilometers away',
    rating: '5.0 ★',
    price: 'Rs. 83,896 night',
  },
  {
    img: 'https://source.unsplash.com/400x300/?greece',
    title: 'Kastraki, Greece',
    location: '6,345 kilometers away',
    rating: '3.9 ★',
    price: 'Rs. 16,121 night',
  },
  {
    img: 'https://source.unsplash.com/400x300/?france',
    title: 'Île-de-Bréhat, France',
    location: '2,376 kilometers away',
    rating: '3.2 ★',
    price: 'Rs. 16,598 night',
  },
  {
    img: 'https://source.unsplash.com/400x300/?norway',
    title: 'Glådeskål, Norway',
    location: '2,376 kilometers away',
    rating: '4.2 ★',
    price: 'Rs. 83,896 night',
  },
  

  {
    img: 'https://source.unsplash.com/400x300/?maldives',
    title: 'MV, Maldives',
    location: '2,376 kilometers away',
    rating: '5.0 ★',
    price: 'Rs. 83,896 night',
  },
  {
    img: 'https://source.unsplash.com/400x300/?greece',
    title: 'Kastraki, Greece',
    location: '6,345 kilometers away',
    rating: '3.9 ★',
    price: 'Rs. 16,121 night',
  },
  {
    img: 'https://source.unsplash.com/400x300/?france',
    title: 'Île-de-Bréhat, France',
    location: '2,376 kilometers away',
    rating: '3.2 ★',
    price: 'Rs. 16,598 night',
  },
  {
    img: 'https://source.unsplash.com/400x300/?norway',
    title: 'Glådeskål, Norway',
    location: '2,376 kilometers away',
    rating: '4.2 ★',
    price: 'Rs. 83,896 night',
  },
  {
    img: 'https://source.unsplash.com/400x300/?maldives',
    title: 'MV, Maldives',
    location: '2,376 kilometers away',
    rating: '5.0 ★',
    price: 'Rs. 83,896 night',
  },
  {
    img: 'https://source.unsplash.com/400x300/?greece',
    title: 'Kastraki, Greece',
    location: '6,345 kilometers away',
    rating: '3.9 ★',
    price: 'Rs. 16,121 night',
  },
  {
    img: 'https://source.unsplash.com/400x300/?france',
    title: 'Île-de-Bréhat, France',
    location: '2,376 kilometers away',
    rating: '3.2 ★',
    price: 'Rs. 16,598 night',
  },
  {
    img: 'https://source.unsplash.com/400x300/?norway',
    title: 'Glådeskål, Norway',
    location: '2,376 kilometers away',
    rating: '4.2 ★',
    price: 'Rs. 83,896 night',
  },
  {
    img: 'https://source.unsplash.com/400x300/?maldives',
    title: 'MV, Maldives',
    location: '2,376 kilometers away',
    rating: '5.0 ★',
    price: 'Rs. 83,896 night',
  },
  {
    img: 'https://source.unsplash.com/400x300/?greece',
    title: 'Kastraki, Greece',
    location: '6,345 kilometers away',
    rating: '3.9 ★',
    price: 'Rs. 16,121 night',
  },
  {
    img: 'https://source.unsplash.com/400x300/?france',
    title: 'Île-de-Bréhat, France',
    location: '2,376 kilometers away',
    rating: '3.2 ★',
    price: 'Rs. 16,598 night',
  },
  {
    img: 'https://source.unsplash.com/400x300/?norway',
    title: 'Glådeskål, Norway',
    location: '2,376 kilometers away',
    rating: '4.2 ★',
    price: 'Rs. 83,896 night',
  },
  
];
export default function Home() {
  return (
   <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {listings.map((item, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow hover:shadow-md border">
          <div className="relative">
            <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
            <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
              ❤️
            </button>
          </div>
          <div className="p-3">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.location}</p>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm font-medium">{item.price}</span>
              <span className="text-sm">{item.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
