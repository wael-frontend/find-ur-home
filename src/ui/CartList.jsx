import { useEffect, useState } from "react";
import { supabase } from "../Services/supabase";
import Spinner from "./Spinner";
import Button from "./Button";
import {
  BathtubOutlined,
  BedOutlined,
  GarageOutlined,
  LocationOn,
} from "@mui/icons-material";
import useUser from "../pages/Auth/useUser";

export default function CartList() {
  const [listeng, setlesting] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // cards per page 👈 you can change

  const { user } = useUser();
  const role = user.user_metadata.roleuser;

  useEffect(() => {
    async function fetchlesting() {
      if (!user) return;
      if (user.user_metadata.roleuser === "landlord") {
        const { data } = await supabase
          .from("listings")
          .select("*")
          .eq("user_id", user.id);
        setlesting(data);
      } else if (user.user_metadata.roleuser === "renter") {
        const { data } = await supabase.from("listings").select("*");
        setlesting(data);
      }
    }
    fetchlesting();
  }, [user]);

  if (!listeng || listeng.length === 0)
    return (
      <div className="flex text-2xl">
        <Spinner /> loading...
      </div>
    );

  // 👉 Algorithm for pagination
  const totalPages = Math.ceil(listeng.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentListings = listeng.slice(startIndex, endIndex);
  console.log(listeng);
  return (
    <>
      {/* Cards */}
      {currentListings.map((listing) => (
        <div
          key={listing.id}
          className="block rounded-xl shadow-md hover:shadow-xl transition p-8 lg:w-[350px] h-[500px] bg-white"
        >
          <div className="relative">
            <img
              src={listing.image}
              alt=""
              className="h-48 w-full rounded-md object-cover"
            />
            <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
              {listing.type || "Apartment"}
            </span>
            <span
              className={`absolute top-2 right-2 px-2 py-1 rounded text-xs ${
                listing.status === "available"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {listing.status || "Available"}
            </span>
          </div>

          <h3 className="font-semibold text-gray-800 mt-2">
            Big house in {listing.city}
          </h3>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <LocationOn fontSize="small" /> {listing.city}, Morocco
          </p>

          <div className="flex justify-between items-center mt-2">
            <p className="text-lg font-bold text-blue-600">
              {listing.price} DHS / month
            </p>
            <p className="text-sm text-gray-400">⭐ 4.5 (32)</p>
          </div>

          <div className="flex justify-around mt-4 text-gray-500">
            <div className="flex items-center gap-1">
              <BedOutlined /> {listing.rooms} bd
            </div>
            <div className="flex items-center gap-1">
              <BathtubOutlined /> {listing.bathroom} ba
            </div>
            <div className="flex items-center gap-1">
              <GarageOutlined /> 1 garage
            </div>
            <div className="flex items-center gap-1">
              📐 {listing.area || 120} m²
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Request Visit
            </button>
            <button className="border py-2 rounded hover:bg-gray-100">
              Contact Landlord
            </button>
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 gap-3">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}
