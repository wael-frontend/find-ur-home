import {
  DashboardCustomize,
  DomainAddOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useLogOut from "../pages/Auth/useLogOut";
export default function ResponsiveMenu({ open }) {
  const { Logout } = useLogOut();

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, transition: { duration: 0.5 }, y: 0 }}
          className="absolute top-20 left-0 w-full h-screen z-[100] "
        >
          <div className=" khalt text-white py-10 m-6 rounded-3xl sm:hidden bg-black/70">
            <ul className="flex flex-col justify-center items-center gap-10 text-xl font-semibold uppercase">
              <li>
                <Link
                  to="/dashboard"
                  className=" items-center gap-2 p-2 rounded-md hover:bg-gray-200 "
                >
                  <DashboardCustomize /> <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/listing"
                  className=" items-center gap-2 p-2 rounded-md hover:bg-gray-200 "
                >
                  <DomainAddOutlined /> <span>My Listings</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className=" items-center gap-2 p-2 rounded-md hover:bg-gray-200 block"
                >
                  <HomeOutlined /> <span>Back Home</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/logout"
                  className=" items-center gap-2 p-2 rounded-md hover:bg-gray-200 block"
                ></Link>
              </li>
              <li>
                <button onClick={() => Logout()}>
                  <LogoutOutlined /> <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
ResponsiveMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};
