// transition.jsx
import { motion } from "framer-motion";

const transition = (WrappedComponent) => {
  return function TransitionWrapper(props) {
    const layers = [
      { bg: "bg-[#E43636] ", delay: 0, height: "h-full" }, // biggest
      { bg: "bg-white", delay: 0.15, height: "h-3/5" }, // medium
      { bg: "bg-[#E43636] ", delay: 0.3, height: "h-2/5" }, // smallest
    ];

    return (
      <>
        <WrappedComponent {...props} />

        {layers.map((layer, i) => (
          <motion.div
            key={i}
            className={`fixed top-0 right-0 w-full ${layer.height} ${layer.bg} z-50 origin-top`}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{
              duration: 1.2,
              ease: [1.22, 1, 0.36, 1],
              delay: layer.delay,
            }}
          />
        ))}
      </>
    );
  };
};

export default transition;
