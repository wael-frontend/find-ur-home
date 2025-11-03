import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../Services/supabase";
import Listinghoverdimages from "../../ui/Listinghoverdimages";
import { GarageOutlined, LocationOn } from "@mui/icons-material";
import StarsRatea from "../../ui/StarsRatea";
import { BathIcon, BedIcon, RulerDimensionLine } from "lucide-react";
import SearchBar from "../../ui/Searchbbar";

export default function DeatalsListingPage() {
  const Amenitiesarray = ["Parking", "Wifi", "Backyard", "Terrace"];
  const { ListingID } = useParams();
  const [listing, setlesting] = useState(null);
  useEffect(() => {
    async function FetchlestingDeatels() {
      const { data, error } = await supabase
        .from("listings")
        .select("*")
        .eq("id", ListingID)
        .single();
      if (error) console.error("Error fetching listing ", error);
      else setlesting(data);
    }
    FetchlestingDeatels();
  }, [ListingID]);
  console.log(listing);

  return (
    <section className="h-screen">
      <Listinghoverdimages listing={listing} />
      <div className="h-auto rounded-3xl   mt-4 lg:px-10 px-1.5 grid sm:grid-cols-1 lg:grid-cols-3">
        <div className=" border-1 rounded-2xl border-gray-200 col-span-2 px-3 bg-[#fffdf5] ">
          <p className="flex gap-1 py-2 text-gray-400">
            <LocationOn />
            {listing?.city} city ,
          </p>
          <div className="lg:flex items-center justify-between font-bold">
            <h1 className="lg:text-[30px] text-[24px] font-bold text-[#333230] ">
              Urban Elegance Sophistication Haven
            </h1>
            <h3 className="text-[#333230] text-[20px] ">
              ${listing?.price} /Monath
            </h3>
          </div>
          <div className="flex justify-between ">
            <h1 className="text-[20px] text-[#fdc700] font-bold"> House</h1>
            <StarsRatea />
          </div>
          <div className=" flex gap-3 text-gray-400 py-4">
            <div className="flex gap-3">
              <BedIcon /> {listing?.rooms}
              <div className="h-6 w-px bg-gray-500 "></div>
            </div>

            <div className="flex gap-3">
              <BathIcon /> {listing?.bathroom}
              <div className="h-6 w-px bg-gray-500 "></div>
            </div>
            <div className="flex gap-3">
              <GarageOutlined /> 1<div className="h-6 w-px bg-gray-500 "></div>
            </div>
            <div className="flex gap-3">
              <RulerDimensionLine /> 400m
            </div>
          </div>
          <div className="py-4">
            <h2 className=" text-[20px] font-semibold text-gray-800">
              Property Details
            </h2>
            <p className="text-gray-700 font-light text-[14px]">
              {listing?.description}
            </p>
          </div>
          <div className="py-4">
            <h2 className=" text-[20px] font-semibold text-gray-800">
              Amenities
            </h2>
            <div className="flex gap-3.5 py-4 justify-start items-center">
              {Amenitiesarray.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border-1 border-gray-300 bg-[#fef6d9] h-14 w-24 text-center rounded-full"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex"></div>
          </div>
          <SearchBar />
        </div>
        <div className=" border-1 rounded-2xl border-gray-200  px-4 ml-6 bg-[#fffdf5]">
          <h1 className=" text-[20px] py-7 text-[#464945] font-bold">
            Contact Agent
          </h1>
          <div>
            <form className="text-center flex flex-col gap-3.5 w-full items-center   ">
              <input
                type="text"
                placeholder="Your name"
                className="border-2 text-start  border-gray-300 w-[90%] rounded-[4px] "
              />
              <input
                type="text"
                placeholder="Your Email"
                className="border-2 text-start border-gray-300 w-[90%] rounded-[4px] "
              />
              <textarea
                type="text"
                placeholder="Your message"
                className="border-2 text-start border-gray-300 w-[90%] rounded-[4px] "
              />
              <button className="w-[90%] bg-[#fdc700]  rounded-[4px] h-8 font-medium text-[15px] ">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
