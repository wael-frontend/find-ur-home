import { motion } from "framer-motion";
import Droptext from "../ui/Droptext";

export default function Fqsection() {
  return (
    <section className="min-h-screen max-w-[90%] mx-auto grid sm:grid-cols-1 lg:grid-cols-2 gap-10  items-center ">
      {/* LEFT SIDE */}
      <motion.div className="w-full lg:h-screen flex flex-col items-center gap-6">
        <div className="bg-white z-10 lg:w-[80%] md:w-[60%] gap-4 flex justify-center items-center rounded-3xl h-20 relative top-20">
          {" "}
          <img src="signature.svg" alt="" className="h-8" />{" "}
          <div>
            {" "}
            <h3 className=" text-[#333231] text-[12px] lg:text-[50px] font-bold ">
              {" "}
              Simplifying Your Property Search Every Step{" "}
            </h3>{" "}
            <p className=" text-[#877b82] text-[14px]">
              {" "}
              Trust, clarity, and simplicity are at the core of everything we do
              to make your property journey easy.{" "}
            </p>{" "}
          </div>{" "}
        </div>
        <img
          src="/faq.png"
          className="rounded-3xl relative bottom-20  lg:max-w-[600px] h-auto "
          alt="FAQ"
        />
      </motion.div>

      {/* RIGHT SIDE */}
      <div className="w-full h-screen flex flex-col justify-center gap-6 px-4 lg:px-14 ">
        <motion.h3
          initial={{ opacity: 0, translateX: "-5%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className="text-[#fdc827] text-xl lg:text-2xl font-bold lg:t-12"
        >
          Homes Made for Living
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, translateX: "-5%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className="text-[#333231] sm:Stext-3xl lg:text-[30px] font-bold leading-tight"
        >
          Simplifying Your Property Search Every Step
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, translateX: "-5%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className="text-[#877b82] text-base lg:text-lg"
        >
          Trust, clarity, and simplicity are at the core of everything we do to
          make your property journey easy.
        </motion.p>
        <Droptext />
      </div>
    </section>
  );
}
