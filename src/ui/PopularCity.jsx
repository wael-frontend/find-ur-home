import { motion } from "framer-motion";
//import PropTypes from "prop-types";
const images = [
  "/Marakech.png",
  "/Rabat.png",
  "/Agadir.png",
  "/Fes.png",
  "/Tanga.png",
];
const ImageCityGallery = () => {
  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-3 gap-4 p-4 max-w-6xl mx-auto">
      {/* First row: 3 images */}
      {images.slice(0, 3).map((src, i) => (
        <motion.div
          initial={{ opacity: 0, translateY: "53%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 2 }}
          key={i}
          className="w-full h-60 overflow-hidden rounded-2xl shadow"
        >
          <img
            src={src}
            alt={`gallery-${i}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      ))}

      {/* Second row: 2 images (span across full width in large screens) */}
      <div className="col-span-1 max-lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.slice(3, 5).map((src, i) => (
          <motion.div
            initial={{ opacity: 0, translateY: "53%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 2 }}
            key={i + 3}
            className="w-full h-60 overflow-hidden rounded-2xl shadow"
          >
            <img
              src={src}
              alt={`gallery-${i + 3}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
/* ImageGallery.propTypes = {
  images: PropTypes.array,
}; */
export default ImageCityGallery;
