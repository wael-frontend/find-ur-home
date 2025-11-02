import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../Services/supabase";
import Listinghoverdimages from "../../ui/Listinghoverdimages";
import { GarageOutlined, LocationOn } from "@mui/icons-material";
import StarsRatea from "../../ui/StarsRatea";
import { BathIcon, BedIcon, RulerDimensionLine } from "lucide-react";

export default function DeatalsListingPage() {
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
    <section>
      <Listinghoverdimages />
      <div className="h-screen rounded-3xl  mt-6 lg:px-10 px-1.5 grid sm:grid-cols-1 lg:grid-cols-3">
        <div className=" border-1 rounded-2xl border-gray-400 col-span-2 py-3.5 px-3 ">
          <p className="flex gap-1 py-9 text-gray-400">
            <LocationOn />
            {listing?.city} city ,
          </p>
          <div className="lg:flex items-center gap-24 font-bold">
            <h1 className="lg:text-[30px] text-[24px] font-bold text-[#333230] ">
              Urban Elegance Sophistication Haven
            </h1>
            <h3 className="text-[#333230] text-[20px] ">
              /${listing?.price} Monath
            </h3>
          </div>
          <div className="flex justify-between ">
            <h1 className="text-[24px] text-[#fdc700] font-bold"> House</h1>
            <StarsRatea />
          </div>
          <div className=" flex gap-6 text-gray-300 py-4">
            <div className="flex gap-3">
              <BedIcon />
              <div className="h-6 w-px bg-gray-500 ml-4"></div>
            </div>

            <div className="flex gap-3">
              <BathIcon />
              <div className="h-6 w-px bg-gray-500 ml-4"></div>
            </div>
            <div className="flex gap-3">
              <GarageOutlined />
              <div className="h-6 w-px bg-gray-500 ml-4"></div>
            </div>
            <div className="flex gap-3">
              <RulerDimensionLine />
              <div className="h-6 w-px bg-gray-500 ml-4"></div>
            </div>
          </div>
          <div className="py-4">
            <h2>Property Details</h2>
            <p>{listing?.description}</p>
          </div>
        </div>
        <div>rghurezhu</div>
      </div>
    </section>
  );
}
