export default function GuestSelector({ guests, setGuests, isOpen, openGuests }) {
  const update = (type, delta) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(type === 'adults' || type === 'rooms' ? 1 : 0, prev[type] + delta),
    }));
  };

  return (
    <div className="relative">
      {/* Button to open dropdown */}
      <div
        className="w-[160px] px-2 text-sm font-medium cursor-pointer"
        onClick={openGuests}
      >
        {guests.adults} adult, {guests.children} child, {guests.rooms || 1} room
      </div>

      {/* Guest Dropdown */}
      {isOpen && (
        <div className="absolute top-10 right-0 bg-white border rounded shadow-md p-4 z-50 w-64">
          {['adults', 'children', 'rooms'].map((type) => (
            <div className="flex justify-between items-center mb-3" key={type}>
              <span className="capitalize">{type}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => update(type, -1)}
                  className="w-6 h-6 rounded-full border flex justify-center items-center hover:bg-gray-200"
                >
                  −
                </button>
                <span>{guests[type]}</span>
                <button
                  onClick={() => update(type, 1)}
                  className="w-6 h-6 rounded-full border flex justify-center items-center hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
