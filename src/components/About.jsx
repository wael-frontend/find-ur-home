import StarsRatea from "../ui/StarsRatea";
import { motion } from "framer-motion";

export default function About() {
  const PEOPLE_URL = [
    "/client1.jpg",
    "/client2.jpg",
    "/client3.jpg",
    "/client4.jpg",
  ];
  return (
    <section className="h-screen max-w-[90%] mt-9 lg:ml-14  grid sm:grid-cols-1 lg:grid-cols-2 pt-10">
      <div className="w-full h-full py-5 px-4">
        <motion.h3
          initial={{ opacity: 0, translateX: "-5%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className="text-[#fdc827] text-2xl font-bold "
        >
          Your Trusted Real Estate Partner
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, translateX: "-5%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className=" text-[#333231] text-[30px] lg:text-[50px] font-bold "
        >
          Helping You Every Step of the Way
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, translateX: "-5%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className=" text-[#877b82] "
        >
          Trust, clarity, and simplicity are at the core of everything we do to
          make your property journey easy.
        </motion.p>
        <div className="py-10">
          <div className=" flex gap-4 py-2">
            <img src="/calendar-secondary.svg" alt="calnd" />
            <motion.p
              initial={{ opacity: 0, translateX: "-5%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1 }}
              className="text-[#877b82] "
            >
              In-app scheduling for property viewings
            </motion.p>
          </div>
          <div className=" flex gap-4 py-2">
            <img src="/graph.svg" alt="calnd" />
            <motion.p
              initial={{ opacity: 0, translateX: "-5%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1 }}
              className="text-[#877b82] "
            >
              Real-time market price updates{" "}
            </motion.p>
          </div>
          <div className=" flex gap-4 py-2">
            <img src="/map.svg" alt="calnd" />
            <motion.p
              initial={{ opacity: 0, translateX: "-5%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1 }}
              className="text-[#877b82] "
            >
              User-friendly interface for smooth navigation{" "}
            </motion.p>
          </div>
          <div className=" flex gap-4 py-2">
            <motion.img
              src="/pound.svg"
              alt="calnd"
              initial={{ opacity: 0, translateX: "-2%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.p
              initial={{ opacity: 0, translateX: "-5%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1 }}
              className="text-[#877b82] "
            >
              Access to off-market properties{" "}
            </motion.p>
          </div>
        </div>
        <div className=" flex items-center justify-start gap-4  ">
          <div className="flex -space-x-4 overflow-hidden  ">
            {PEOPLE_URL.map((url) => (
              <motion.img
                initial={{ opacity: 0, translateX: "-5%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1 }}
                src={url}
                key={url}
                alt="Persone"
                width={52}
                height={52}
                className="rounded-full"
              />
            ))}
          </div>{" "}
          <div className="h-10 w-px bg-gray-500 ml-4"></div>
          <StarsRatea />
        </div>
      </div>
      <div className="w-full h-full py-5">
        <motion.img
          src="/about.png"
          alt="about"
          className=""
          initial={{ opacity: 0, translateX: "-5%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
}
