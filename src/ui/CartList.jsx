import { useEffect, useState } from "react";
import { supabase } from "../Services/supabase";
import Spinner from "./Spinner";
import {
  BathtubOutlined,
  BedOutlined,
  GarageOutlined,
  LocationOn,
} from "@mui/icons-material";
import useUser from "../pages/Auth/useUser";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

export default function CartList({ count }) {
  const [listeng, setlesting] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = count; // cards per page 👈 you can change
  const [searchParams] = useSearchParams();
  const { user } = useUser();
  //const role = user.user_metadata.roleuser;

  useEffect(() => {
    async function fetchlesting() {
      const filtervalue = searchParams.get("discount") || "all";
      const sortBy = searchParams.get("sortBy") || "asc";
      const [field, derection] = sortBy.split("-");
      const modifier = derection === "asc" ? 1 : -1;

      console.log(filtervalue);
      let filteData;
      if (!user) return;
      if (user.user_metadata.roleuser === "landlord") {
        const { data } = await supabase
          .from("listings")
          .select("*")
          .eq("user_id", user.id);
        //filter
        if (filtervalue === "all") filteData = data;
        if (filtervalue === "with-no-discount")
          filteData = data.filter((Home) => Home.descount === 0);
        if (filtervalue === "with-discount")
          filteData = data.filter((Home) => Home.descount > 0);
        // sort
        const sortedCabins = filteData.sort(
          (a, b) => (a[field] - b[field]) * modifier
        );
        setlesting(sortedCabins);
      } else if (user.user_metadata.roleuser === "renter") {
        const { data } = await supabase.from("listings").select("*");
        if (filtervalue === "all") filteData = data;
        if (filtervalue === "with-no-discount")
          filteData = data.filter((Home) => Home.descount === 0);
        if (filtervalue === "with-discount")
          filteData = data.filter((Home) => Home.descount > 0);
        // sort
        const sortedCabins = filteData.sort(
          (a, b) => (a[field] - b[field]) * modifier
        );
        setlesting(sortedCabins);
      }
    }
    fetchlesting();
  }, [user, searchParams]);

  if (!listeng || listeng.length === 0)
    return (
      <div className="flex text-2xl">
        <Spinner /> loading...
      </div>
    );

  // Algorithm for pagination
  const totalPages = Math.ceil(listeng.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentListings = listeng.slice(startIndex, endIndex);
  console.log(listeng);
  return (
    <>
      {currentListings.map((listing) => (
        <div
          key={listing.id}
          className="block rounded-xl shadow-md hover:shadow-xl transition lg:w-[300px] h-[470px] sm:w-[80%] bg-white overflow-hidden"
        >
          {/* Image + tags */}
          <div className="relative">
            <img
              src={listing.image}
              alt={listing.type}
              className="h-48 w-full object-cover"
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

          {/* Title + location */}
          <div className="p-3">
            <h3 className="font-semibold text-gray-800 truncate">
              Big house in {listing.city}
            </h3>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              <LocationOn fontSize="small" /> {listing.city}, Morocco
            </p>

            {/* Pricing section with discount */}
            <div className="flex justify-between items-center mt-3">
              {listing.descount > 0 ? (
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400 line-through">
                    {listing.price} DHS
                  </span>
                  <span className="text-lg font-bold text-blue-600">
                    {listing.price - listing.descount} DHS / month
                  </span>
                </div>
              ) : (
                <p className="text-lg font-bold text-blue-600">
                  {listing.price} DHS / month
                </p>
              )}
              <p className="text-sm text-gray-400">⭐ 4.5 (32)</p>
            </div>

            {/* Features */}
            <div className="flex justify-around mt-4 text-gray-600 text-sm">
              <div className="flex items-center gap-1">
                <BedOutlined fontSize="small" /> {listing.rooms} bd
              </div>
              <div className="flex items-center gap-1">
                <BathtubOutlined fontSize="small" /> {listing.bathroom} ba
              </div>
              <div className="flex items-center gap-1">
                <GarageOutlined fontSize="small" /> 1 garage
              </div>
              <div className="flex items-center gap-1">
                📐 {listing.area || 120} m²
              </div>
            </div>

            {/* Landlord contact */}
            <div className="mt-3 text-sm text-gray-700">
              <span className="font-medium">📞 Owner:</span>{" "}
              {listing.usernumber || "Not provided"}
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-col gap-2">
              <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium">
                Request Visit
              </button>
              <button className="border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition font-medium">
                Contact Landlord
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className=" justify-center  gap-3">
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
CartList.propTypes = {
  count: PropTypes.number.isRequired,
};
