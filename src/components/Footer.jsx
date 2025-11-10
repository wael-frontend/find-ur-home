export default function Footer() {
  const Socialmedia = [
    "/facebook.svg",
    "/instagram.svg",
    "/linkedin.svg",
    "/twitter.svg",
  ];
  return (
    <div className=" grid sm:grid-cols-1  lg:grid-cols-4 gap-7  pt-20 py-3 px-8  ">
      <div className="w-full  h-[300px] py-6 px-10">
        <img src="/logo.png" className="h-12" />
        <p className="text-gray-500  text-[14px] py-2.5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text
        </p>
        <div className="flex gap-3.5 h-6 px-1.5    ">
          {Socialmedia.map((img, index) => (
            <img key={index} src={img} className="" />
          ))}
        </div>
        <p className="mt-8 text-gray-500  text-[14px] ">
          © 2025 Nestorria. All rights reserved.{" "}
        </p>
      </div>
      <div className="w-full h-[300px] py-6 px-10 ">
        <h1 className="text-[#333230] text-[20px]  font-bold">COMPANY</h1>
        <ul className="py-8 flex flex-col gap-2">
          <li className="hover:cursor-pointer text-gray-500">About</li>
          <li className="hover:cursor-pointer text-gray-500">Careers</li>
          <li className="hover:cursor-pointer text-gray-500">Blog</li>
          <li className="hover:cursor-pointer text-gray-500">Blog</li>
          <li className="hover:cursor-pointer text-gray-500">Partners</li>
        </ul>
      </div>
      <div className="w-full h-[300px] py-6 px-10 ">
        <h1 className="text-[#333230] text-[20px]  font-bold">COMPANY</h1>
        <ul className="py-8 flex flex-col gap-2">
          <li className="hover:cursor-pointer text-gray-500">Help Center</li>
          <li className="hover:cursor-pointer text-gray-500">
            CarSafety Informationeers
          </li>
          <li className="hover:cursor-pointer text-gray-500">
            Cancellation Options
          </li>
          <li className="hover:cursor-pointer text-gray-500">Contact Us</li>
          <li className="hover:cursor-pointer text-gray-500">Accessibility</li>
        </ul>
      </div>{" "}
      <div className="w-[100%]  h-[300px] py-6 px-10 ">
        <h1 className="text-[#333230] text-[20px]  font-bold">STAY UPDATED</h1>

        <p className="text-gray-500  text-[14px] py-2.5 w-full">
          Subscribe to our newsletter for inspiration and special offers.
        </p>
        <form className=" py-2 w-full">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full rounded-2xl text-[13px] border-2 h-8 border-gray-300 max-w-[500px] "
          />
          <button className="w-24 h-8 bg-[#333333] rounded-4xl relative text-white bottom-8 left-40 ">
            {" "}
            Subscrib
          </button>
        </form>
      </div>{" "}
    </div>
  );
}
