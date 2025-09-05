import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="max-sm:hidden md:block z-10 text-white  ">
        <ul className="flex gap-16 font-serif   ">
          <Link to="/" className="flex">
            <li className=" hover:text-red-500 duration-300"> Home</li>
          </Link>
          <Link to="/listing">
            <li className=" hover:text-red-500 duration-300"> Listings</li>
          </Link>

          <Link>
            <li className=" hover:text-red-500 duration-300">Dashbord </li>
          </Link>
        </ul>
      </div>
      <button></button>
    </>
  );
}
