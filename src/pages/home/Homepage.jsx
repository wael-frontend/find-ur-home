/* import transition from "../../ui/transition"; */
import { motion } from "framer-motion";

import About from "../../components/About";
import DsplayinCards from "../../components/DsplayinCards";
import Fqsection from "../../components/Fqsection";
import Hero from "../../components/Hero";
import Getstart from "../../ui/Getstart";
import MarqSection from "../../ui/MarqSection";
import Footer from "../../components/Footer";
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
    <motion.div
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full flex flex-col overflow-hidden"
    >
      {/* ===== HERO SECTION ===== */}
      <section>
        <Hero />
      </section>
      <section className="w-full grid  bg-contain bg-center ">
        <About />
      </section>
      <section className="py-20 ">
        <DsplayinCards />
      </section>
      <section className=" ">
        <Fqsection />
      </section>
      <section className=" lg:mt-10  items-center text-cente ">
        <Getstart />
      </section>
      <section className="">
        <MarqSection />
      </section>
      <section>
        <Footer />
      </section>
    </motion.div>
  );
}

export default Homepage;
