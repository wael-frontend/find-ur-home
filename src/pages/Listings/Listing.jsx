import { useState } from "react";
import CreatListingForm from "../../feateures/Listing/CreatListingForm";
import CartList from "../../ui/CartList";
import useUser from "../Auth/useUser";
import MapComponent from "../../ui/MapComponent";
import { motion } from "framer-motion";
import Button from "../../ui/Button";
//import Servicescomp from "../../components/Servicescomp";
export default function Listings() {
  const { user } = useUser();
  const role = user.user_metadata.roleuser;
  const [openMap, setOpenMap] = useState(true);
  const [openForm, setOpenForm] = useState(false);
  console.log(user);
  return (
    <>
      <div className="min-h-screen w-full flex flex-col overflow-hidden justify-center ">
        {/* Hero Section */}

        <motion.h2
          initial={{ opacity: 0, translateX: "3%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 2 }}
          className="pb-5 pt-40 text-4xl text-center font-bold tracking-tight lg:mt- lg:text-4xl text-[#E43636] uppercase max-sm:text-3xl sm:text-3xl max-sm:mt-24"
        >
          {role === "landlord"
            ? "Create or remove your home cards"
            : "Home Recommendation For you"}
        </motion.h2>
        {role === "landlord" && (
          <Button
            onClick={() => {
              setOpenForm(!openForm);
            }}
          >
            Add a new home
          </Button>
        )}
        {openForm && (
          <CreatListingForm openModal={openForm} setOpenmodal={setOpenForm} />
        )}
        <section className=" text-center">
          <motion.div
            initial={{ opacity: 0, translateX: "4%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
            className="grid px-6 md:px-12 lg:px-70 lg:grid-cols-3 md:grid-cols-2 gap-8"
          >
            <CartList />
          </motion.div>
        </section>
        <motion.div
          className="mb-40 w-full flex justify-center h-screen lg:w-[400px] lg:h-[400px] z-10 "
          initial={{ opacity: 0, translateX: "2%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            onClick={() => {
              setOpenMap(!openMap);
            }}
          >
            {!openMap ? " Open the map" : "close the map"}
          </Button>
          <div className="w-[80%] lg:w-full">{openMap && <MapComponent />}</div>
        </motion.div>
      </div>
    </>
  );
}
