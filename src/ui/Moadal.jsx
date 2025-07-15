import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
export default function Moadal({ open, children, onClose }) {
  //const ref = useRef();
  /*  useEffect(
    function () {
      function Handelclick(e) {
        if (ref.current && ref.current.contains(e.target)) {
          onClose();
        }
      }
      document.addEventListener("click", Handelclick, true); // event listeneer to check where the click happning
      return () => document.removeEventListener("click", Handelclick, true); // remove the event listener
    },

    [onClose]
  ); */
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, transition: { duration: 0.5 }, y: 0 }}
          className="fixed  top-2 left-0 right-0 w-full h-screen  block bg-white/20 backdrop-blur-md border-b border-white/20 z-0"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
Moadal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
  onClose: PropTypes.func,
};
