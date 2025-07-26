import { useListingData } from "../../feateures/Listing/useListingData";
import CartList from "../../ui/CartList";
import Map from "../../ui/Map";

export default function Homepage() {
  const { listings } = useListingData();
  return (
    <div className="h-screen grid grid-cols-2 gap-7 ">
      <div className="mt-[100px]  lg:col-span-1 max-sm:col-span-2 overflow-scroll ">
        <CartList />
      </div>
      <div className="  h-[100%] col-span-1 max-sm:hidden ">
        <Map />
      </div>
    </div>
  );
}
