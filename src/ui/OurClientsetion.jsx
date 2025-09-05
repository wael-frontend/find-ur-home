import { motion } from "framer-motion";

export default function Témoignages() {
  const services = [
    {
      image: "/default-user.jpg",
      title: "Sarah Dubois",
      desc: "IMZRI CONSULTING a révolutionné notre stratégie digitale. Nos ventes ont augmenté de 40% en six mois ! Leur expertise et leur accompagnement sont inégalables. Sarah Dubois, CEO de LuminaTech",
    },
    {
      image: "/default-user.jpg",
      title: "Marc Dupont",
      desc: "Grâce au mentorat d'Hamza, j'ai pu structurer mon business plan et lancer ma startup avec confiance. Un partenaire précieux pour tout entrepreneur.",
    },
    {
      image: "/default-user.jpg",
      title: "Clara Rossi",
      desc: "Leur formation en marketing digital a été un tournant pour mon équipe. Des méthodes concrètes et une approche très pédagogique. Fortement recommandé !.",
    },
  ];

  return (
    <section className="px-6 py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, translateX: "4%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        className="pb-5 text-6xl font-bold tracking-tight  lg:text-6xl text-white  uppercase  max-sm:text-3xl sm:text-3xl max-sm:mt-0"
      >
        Témoignages : Ils nous font confiance:
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="  pb-10 text-base sm:text-lg font-bold tracking-wide text-white"
      >
        Écoutez ce que nos clients disent de leur expérience avec IMZRI
        CONSULTING et comment nous les avons aidés à atteindre leurs objectifs.
      </motion.p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <motion.div
            initial={{ opacity: 0, translateY: "53%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
            key={idx}
            className="bg-black text-white rounded-xl shadow-lg p-6 flex-1"
          >
            <div className="flex items-center justify-center -mt-12 mb-4">
              <div className="bg-[#E43636] w-32 h-32 max-sm:w-14 max-sm:h-14 rounded-full flex items-center justify-center shadow-md">
                <img
                  src={service.image}
                  className="rounded-full w-28 h-28 max-sm:w-12 max-sm:h-12"
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300 mb-4">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
