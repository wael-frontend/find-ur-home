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
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="fixed top-2 left-[100px] right-0 w-[calc(100%-100px)] h-screen
                   bg-white/20 backdrop-blur-md border-b border-white/20 z-50
                   max-sm:left-0 max-sm:w-[100%] max-sm:top-5"
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
