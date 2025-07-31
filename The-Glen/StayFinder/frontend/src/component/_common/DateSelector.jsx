import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function DateSelector({ checkIn, checkOut, isOpen, setIsOpen, onChange }) {
  const [range, setRange] = useState([
    {
      startDate: checkIn ? new Date(checkIn) : null,
      endDate: checkOut ? new Date(checkOut) : null,
      key: 'selection',
    },
  ]);

  useEffect(() => {
    // Handle only when both dates are selected
    if (range[0].startDate && range[0].endDate) {
      onChange({
        checkIn: range[0].startDate.toISOString(),
        checkOut: range[0].endDate.toISOString(),
      });
    }
  }, [range, onChange]);

  const handleSelect = (ranges) => {
    setRange([ranges.selection]);
  };

  const displayText =
    checkIn && checkOut
      ? `${format(new Date(checkIn), 'MMM dd')} — ${format(new Date(checkOut), 'MMM dd')}`
      : 'Check in — Check out';

  return (
    <div className="relative">
      <div
        className="px-3 py-2 rounded cursor-pointer text-sm bg-white "
        onClick={() => setIsOpen(true)}
      >
        📅 <span className="ml-1">{displayText}</span>
      </div>

      {isOpen && (
        <div className="absolute z-50 top-12 shadow-lg bg-white rounded">
          <DateRange
            ranges={range}
            onChange={handleSelect}
            months={2}
            direction="horizontal"
            minDate={new Date()}
            moveRangeOnFirstSelection={false}
            editableDateInputs={true}
          />
        </div>
      )}
    </div>
  );
}
