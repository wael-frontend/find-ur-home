import { useState } from "react";
import CreatListingForm from "../../feateures/Listing/CreatListingForm";
import CartList from "../../ui/CartList";
import useUser from "../Auth/useUser";
import MapComponent from "../../ui/MapComponent";
import { motion } from "framer-motion";
import { MapRounded } from "@mui/icons-material";
import Searchbar from "../../ui/Searchbar";
import TableOpirarion from "../../feateures/Listing/TableOpirarion";
//import Servicescomp from "../../components/Servicescomp";
export default function Listings() {
  const { user } = useUser();
  const role = user.user_metadata.roleuser;
  const [openMap, setOpenMap] = useState(true);
  const [openForm, setOpenForm] = useState(false);
  console.log(user);
  return (
    <>
      <div className="min-h-screen w-full grid lg:grid-cols-2 max-sm:grid-cols-1  ">
        {/* Hero Section */}
        <div className="">
          {/*        <motion.h2
            initial={{ opacity: 0, translateX: "3%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 2 }}
            className="pb-5 pt-0 text-4xl text-center font-bold tracking-tight  lg:text-2xl text-black uppercase max-sm:text-3xl sm:text-3xl max-sm:mt-24"
          >
            {role === "landlord"
              ? "Create or remove your home cards"
              : "Home Recommendation For you"}
          </motion.h2> */}
          <div className="mt-32">
            <TableOpirarion />
          </div>
          {role === "landlord" && (
            <button
              className="w-[110px] h-[50px] rounded-[4px]  bg-blue-500 text-[#F6EFD2] hover:cursor-pointer mt-6 pb-10"
              onClick={() => {
                setOpenForm(!openForm);
              }}
            >
              Add a new home
            </button>
          )}
          {openForm && (
            <CreatListingForm openModal={openForm} setOpenmodal={setOpenForm} />
          )}
          <section className=" text-center">
            <motion.div
              initial={{ opacity: 0, translateX: "4%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5 }}
              className="grid px-6 md:px-12 lg:px-20 lg:grid-cols-2 md:grid-cols-2 gap-0 "
            >
              <CartList />
            </motion.div>
          </section>
        </div>
        <motion.div
          className=" w-full  justify-center h-screen lg:w-[400px] lg:h-[400px] z-10 mt-32 "
          initial={{ opacity: 0, translateX: "2%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Searchbar />
          <button
            className="w-[110px] h-[50px] rounded-[4px]  bg-blue-500 text-[#F6EFD2] hover:cursor-pointer"
            onClick={() => {
              setOpenMap(!openMap);
            }}
          >
            <MapRounded /> {!openMap ? " Open the map" : "close the map"}
          </button>
          <div className="w-[80%] lg:w-full">{openMap && <MapComponent />}</div>
        </motion.div>
      </div>
    </>
  );
}
