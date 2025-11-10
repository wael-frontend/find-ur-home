import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="max-sm:hidden md:block z-10  ">
        <ul className="flex gap-7 mt-7   ">
          <Link to="/" className="flex justify-center">
            <li className="tracking-tight  py-2 rounded-full uppercase text-sm font-medium  underline -underline-offset-8">
              {" "}
              Home
            </li>
          </Link>
          <Link to="/listing">
            <li className="tracking-tight  py-2 rounded-full uppercase text-sm font-medium">
              {" "}
              Listings
            </li>
          </Link>

          <Link to="/dashboard">
            <li className="tracking-tight  py-2 rounded-full uppercase text-sm font-medium">
              Dashbord{" "}
            </li>
          </Link>
          <Link to="/dashboard">
            <li className="-tracking-wider  py-2 rounded-full uppercase text-sm font-medium">
              contact{" "}
            </li>
          </Link>
        </ul>
      </div>
      <button></button>
    </>
  );
}
