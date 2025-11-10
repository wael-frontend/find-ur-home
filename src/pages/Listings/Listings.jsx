import { useState } from "react";
import CreatListingForm from "../../feateures/Listing/CreatListingForm";
import CartList from "../../ui/CartList";
import useUser from "../Auth/useUser";
import MapComponent from "../../ui/MapComponent";
import { motion } from "framer-motion";
import { MapRounded, AddHome } from "@mui/icons-material";
import TableOpirarion from "../../feateures/Listing/TableOpirarion";
import Footer from "../../components/Footer";

export default function Listings() {
  const { user } = useUser();
  const role = user?.user_metadata?.roleuser;
  const [openMap, setOpenMap] = useState(true);
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="w-full h-screen grid lg:grid-cols-1 gap-6  lg:px-0 pt-0">
      <motion.div
        className="bg-cover bg-center h-[80vh]  w-full flex flex-col"
        style={{ backgroundImage: "url('header_img.png')" }}
      >
        <div className=" w-full container text-center mx-auto px-6 md:px-20 lg:px-32 h-full flex items-center justify-center ">
          {/* Filter / Operations */}
          <motion.h2
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="  text-5xl lg:text-5xl  md:text-[70px] font-semibold text-[#E8FFD7] leading-tight"
          >
            Find The Houses, Apartments In Your Favorite Location
          </motion.h2>
        </div>
        <div className="mb-11">
          <TableOpirarion />
        </div>
      </motion.div>
      {/* Left Section (Listings + Form) */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2  max-sm:grid-cols-1">
        <div className="flex flex-col">
          {/* Landlord: Add Listing Button */}

          {role === "landlord" && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 w-[160px] h-[48px] mt-6 rounded-lg bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
              onClick={() => setOpenForm(!openForm)}
            >
              <AddHome fontSize="small" />
              {openForm ? "Close form" : "Add new home"}
            </motion.button>
          )}

          {/* Create Listing Form Modal */}
          {openForm && (
            <CreatListingForm openModal={openForm} setOpenmodal={setOpenForm} />
          )}

          {/* Listings */}
          <section className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 px-0"
            >
              <CartList count={2} />
            </motion.div>
          </section>
        </div>

        {/* Right Section (Map) */}
        <motion.div
          className=" lg:pt-0 z-10 "
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/*     <button
            className="flex items-center justify-center gap-2 w-[180px] h-[48px] mb-4 rounded-lg bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
            onClick={() => setOpenMap(!openMap)}
          >
            <MapRounded fontSize="small" />
            {openMap ? "Close map" : "Open map"}
          </button> */}
          <div className="flex-1 w-full    overflow-hidden ">
            {openMap && <MapComponent />}
          </div>
        </motion.div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
