import { Search } from 'lucide-react';

export default function SearchButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#FF385C] p-2 rounded-full ml-2 cursor-pointer hover:bg-[#e2334f] transition"
    >
      <Search className="text-white h-4 w-4" />
    </button>
  );
}
