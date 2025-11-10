import SearchBar from "../ui/Searchbbar";

export default function Hero() {
  return (
    <div
      className="bg-cover w-full bg-center h-[100vh] flex flex-col items-center  overflow-y-hidden"
      style={{ backgroundImage: "url('bg.png')" }}
    >
      <div className="lg:pt-[370px]  pt-56 py-7 text-center items-center  ">
        <div className="w-[340px] px-4 h-8 py-2 tracking-normal  bg-amber-50/0 border-1 border-white rounded-full text-center text-white flex justify-end gap-6 items-center">
          <p className="text-[14px] ">
            Explore how we simplify stays and spaces
          </p>
          <div className="bg-white  rounded-full items-center mr-1 font-bold">
            <img src="/right.svg" alt="right" width={18} height={18} />
          </div>
        </div>
        <h2 className=" text-[35px] py-0 lg:text-[37px] font-bold text-[#E8FFD7] leading-tight lg:flex gap-2">
          Explore <h2 className=" text-amber-300 ">exceptional</h2> properties
          located in stunning surroundings.{" "}
        </h2>
        <div className="w-[92vw] sm:h-[50%] lg:h-35  mt-6 px-0 ml-4">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
