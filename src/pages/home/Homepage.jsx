import { useListingData } from "../../feateures/Listing/useListingData";
import CartList from "../../ui/CartList";
import Map from "../../ui/Map";

export default function Homepage() {
  const { listings } = useListingData();
  console.log(listings);
  return (
    <div className="h-screen grid grid-cols-2 top-[100px] gap-3 ">
      <div className=" lg:col-span-1 max-sm:col-span-2 overflow-scroll gap">
        <CartList />
        <CartList />
        <CartList />
      </div>
      <div className="  h-[100%] col-span-1 max-sm:hidden ">
        <Map />{" "}
      </div>
    </div>
  );
}
