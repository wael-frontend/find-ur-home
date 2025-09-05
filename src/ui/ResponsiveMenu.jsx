import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
export default function ResponsiveMenu({ open }) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, transition: { duration: 0.5 }, y: 0 }}
          className="absolute top-20 left-0 w-full h-screen z-[100] "
        >
          <div className="bg-green-500/20 backdrop-blur-md border-b border-green-400/80 text-white py-10 m-6 rounded-3xl sm:hidden">
            <ul className="flex flex-col justify-center items-center gap-10 text-xl font-semibold uppercase">
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
