import CartList from "../../ui/CartList";
import Footer from "../../ui/Footer";
/* import transition from "../../ui/transition";
 */ import { motion } from "framer-motion";
import HorisontalSection from "../../ui/HorisontalSection";
import Témoignages from "../../ui/OurClientsetion";
import ImageCityGallery from "../../ui/PopularCity";
import ContactUs from "../../ui/ContactUs";
function Homepage() {
  /*  const stringhd1 = "ilovyou";
  const stringhd2 = "youlovei"; */

  /*   function compaireTwoword(str1, str2) {
    const freq1 = {};
    const freq2 = {};
    for (let char1 of str1) {
      freq1[char1] = (freq1[char1] || 0) + 1;
    }
    for (let char2 of str2) {
      freq2[char2] = (freq2[char2] || 0) + 1;
    }
    if (str1.length !== str2.length) {
      return false;
    } else {
      return true;
    }
  } */
  /*   console.log(compaireTwoword(stringhd1, stringhd2));
   */ return (
    <motion.dev
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full flex flex-col overflow-hidden"
    >
      {/* ===== HERO SECTION ===== */}
      <motion.div
        className="bg-cover bg-center h-[90vh] "
        style={{ backgroundImage: "url('header_img.png')" }}
      >
        <div className="container text-center mx-auto px-6 md:px-20 lg:px-32 h-full flex items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="  text-5xl lg:text-5xl  md:text-[70px] font-semibold text-[#E8FFD7] leading-tight"
          >
            Find The Houses, Apartments In Your Favorite Location
          </motion.h2>
        </div>
      </motion.div>

      <section
        className="w-full  bg-contain bg-center"
        style={{ backgroundImage: "url('bedroom.jpg')" }}
      >
        <HorisontalSection />
      </section>
      <section className="py-0 text-center">
        <motion.h5
          initial={{ opacity: 0, translateX: "-2%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
          className="  text-4xl font-bold tracking-tight pb-7 lg:text-4xl text-[#E43636] uppercase max-sm:text-3xl sm:text-3xl max-sm:mt-24"
        >
          Properties For Rent
        </motion.h5>
        <motion.div
          initial={{ opacity: 0, translateX: "-2%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
          className="grid  md:px-0 lg:grid-cols-4 md:grid-cols-2 gap-0 lg:px-10 sm:grid-cols-1"
        >
          <CartList count={3} />
        </motion.div>
      </section>
      <section className="py-20 bg-gradient-to-tr from-[#E43636] to-gray-900">
        <Témoignages />
      </section>
      <section className=" bg-gray-950">
        <motion.h1
          initial={{ opacity: 0, translateX: "4%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className=" text-2xl font-bold tracking-tight text-[#E43636] uppercase max-sm:text-3xl pt-25 text-center"
        >
          Most Popular <h1 className="text-white text-6xl">Places</h1>
        </motion.h1>
        <ImageCityGallery />
      </section>
      <div
        className="bg-gray-900 text-gray-300  bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('header_img.png')" }}
      >
        <ContactUs />
        <Footer />
      </div>
    </motion.dev>
  );
}

export default Homepage;
