import CartList from "../ui/CartList";
export default function DsplayinCards() {
  return (
    <div>
      <div className="py-8 px-10">
        <h3 className="text-[#333230] text-[20px] font-medium ">
          Your Trusted Real Estate Partner
        </h3>
        <h1 className=" text-[#333231] text-[40px] lg:text-[50px] font-bold ">
          Discover Your Place Here{" "}
        </h1>
        <p className="py-14">
          <strong> Displaying 1–9</strong> from 3k listings
        </p>
      </div>

      <div className="grid  md:px-0 lg:grid-cols-4 md:grid-cols-2 gap-0 lg:px-10 sm:grid-cols-1">
        <CartList count={4} />
      </div>
    </div>
  );
}
