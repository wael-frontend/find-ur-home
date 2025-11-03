import { MapPin, Calendar, Users, Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="max-w-[100%] mx-auto mt-0 px-0 h-24">
      <div className="bg-white shadow-md rounded-2xl lg:flex items-center gap-4 py-4 px-6  ">
        {/* Destination */}
        <div className="flex flex-col w-full">
          <label className="text-gray-600 text-sm font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Destination
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="outline-none bg-transparent text-gray-800"
          />
        </div>

        <div className="w-px h-10 bg-gray-200"></div>

        {/* Check in */}
        <div className="flex flex-col w-full">
          <label className="text-gray-600 text-sm font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Check in
          </label>
          <input
            type="date"
            className="outline-none bg-transparent text-gray-800"
          />
        </div>

        <div className="w-px h-10 bg-gray-200"></div>

        {/* Check out */}
        <div className="flex flex-col w-full">
          <label className="text-gray-600 text-sm font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Check out
          </label>
          <input
            type="date"
            className="outline-none bg-transparent text-gray-800"
          />
        </div>

        <div className="w-px h-10 bg-gray-200"></div>

        {/* Guests */}
        <div className="flex flex-col w-full">
          <label className="text-gray-600 text-sm font-medium flex items-center gap-2">
            <Users className="w-4 h-4" /> Guests
          </label>
          <input
            type="number"
            min="1"
            placeholder="0"
            className="outline-none bg-transparent text-gray-800"
          />
        </div>

        {/* Search Button */}
        <button className="bg-black text-white px-2 py-3 rounded-full flex items-center gap-2 hover:bg-gray-900 transition">
          <Search className="w-4 h-4" />
          Search
        </button>
      </div>
    </div>
  );
}
