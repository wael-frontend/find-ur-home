import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
export default function ResponsiveMenu({ open }) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, transition: { duration: 0.5 }, y: 0 }}
          className="absolute  top-20 left-0 w-full h-screen"
        >
          <div
            className="text-xl font-semibold uppercase
          bg-blue-400 text-white py-10 m-6 rounded-3xl sm:hidden
          "
          >
            <ul className="flex flex-col justify-center items-center gap-10 ">
              <li>home</li>
              <li>About</li>
              <li>profile</li>
              <li>Contact</li>
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
