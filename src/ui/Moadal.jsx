import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
export default function Moadal({ open, children, onClose }) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [onClose]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="fixed top-0 left-0  h-screen w-[100%]
                   bg-white/20 backdrop-blur-md border-b border-white/20 z-50
                   max-sm:left-0 max-sm:w-[100%] max-sm:top-0"
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
