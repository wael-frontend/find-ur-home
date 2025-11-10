import { motion } from "framer-motion";

export default function Getstart() {
  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center text-center">
      <div className="bg-[#333230] flex gap-2 h-9 w-40 mb-4 rounded-2xl text-white items-center">
        <motion.img
          initial={{ opacity: 0, translateX: "-55%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          src="/rocket.svg"
          alt=""
          className="invert brightness-0"
        />
        <motion.p
          initial={{ opacity: 0, translateX: "55%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className="text-[14px] "
        >
          Trusted by Experts
        </motion.p>
      </div>
      <h1 className="text-[40px] text-[#333230] font-bold max-w-3xl">
        Sell or Rent Faster with{" "}
        <h className="text-[#fdc700] "> Expert Strategies </h>and Real Support!
      </h1>
      <p className="max-w-2xl pb-7 text-gray-500">
        Achieve your goals faster with personalized strategies, hands-on
        support, and results that speak for themselves.
      </p>
      <button className="bg-[#fdc700] h-10 w-34  rounded-3xl">
        Get started
      </button>
    </div>
  );
}
