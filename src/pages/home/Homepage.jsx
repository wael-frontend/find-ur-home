import { useListingData } from "../../feateures/Listing/useListingData";
import Appartement from "../../ui/Appartement";
import Map from "../../ui/Map";

export default function Homepage() {
  const { listings } = useListingData();
  console.log(listings);
  return (
    <div className="h-screen grid grid-cols-2">
      <div className=" h-[100%] lg:col-span-1 max-sm:col-span-2 overflow-scroll"></div>
      <div className="  h-[100%] col-span-1 max-sm:hidden ">
        <Map />{" "}
      </div>
    </div>
  );
}
