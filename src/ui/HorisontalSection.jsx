// Services.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Servicescomp from "../components/Servicescomp";
import FeatureSwiper from "./Swiperfeaturshome";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");
    const container = containerRef.current;

    // clean triggers if hot reload
    ScrollTrigger.getAll().forEach((t) => t.kill());

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: { snapTo: 1 / (sections.length - 1), duration: 0.5 },
        end: "+=" + window.innerWidth * (sections.length - 0.5),
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-screen overflow-hidden">
      {/* flex container must be width = numberOfPanels * 100vw */}
      <div className="flex w-[200vw] h-screen">
        {/* First panel */}
        <section className="panel w-[100vw] h-screen text-center bg-[#000000]/90 flex flex-col justify-center items-center ">
          <motion.h1
            initial={{ opacity: 0, translateX: "4%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
            className=" text-4xl font-bold tracking-tight text-white uppercase max-sm:text-3xl pt-20"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateX: "4%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
            className="text-base max-sm:text-lg font-light tracking-wide text-white max-w-xl  pt-6"
          >
            We help you rent your apartment or find the perfect place that
            matches your lifestyle.
          </motion.p>
          <div>
            <Servicescomp />
          </div>
        </section>

        {/* Second panel */}
        <section className="panel w-[100vw] h-screen text-center bg-gray-800/50 flex flex-col justify-center items-center ">
          <motion.h1
            initial={{ opacity: 0, translateX: "4%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
            className=" text-4xl font-bold tracking-tight text-white uppercase "
          >
            Home feature
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-base sm:text-lg font-light tracking-wide text-white max-w-2xl"
          >
            Découvrez quelques-unes de nos collaborations marquantes et les
            succès que nous avons construits avec nos partenaires. Chaque projet
            est une histoire de transformation et de croissance.
          </motion.p>
          <FeatureSwiper />
        </section>
      </div>
    </div>
  );
}
