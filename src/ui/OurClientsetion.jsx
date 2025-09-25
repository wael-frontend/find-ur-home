import { motion } from "framer-motion";

export default function Témoignages() {
  const services = [
    {
      image: "/default-user.jpg",
      title: "Youssef Benali",
      desc: "Avec RentSmart, j’ai trouvé un appartement à Casablanca en seulement 3 jours ! Le processus était simple, rapide et sans stress.",
    },
    {
      image: "/default-user.jpg",
      title: "Anna Müller",
      desc: "En tant qu’expatriée en Allemagne, j’avais peur de la recherche d’un logement. RentSmart m’a aidée à comparer et réserver un appartement sécurisé avant même mon arrivée.",
    },
    {
      image: "/default-user.jpg",
      title: "Karim El Idrissi",
      desc: "J’ai pu mettre mon appartement en location en quelques minutes. Grâce à RentSmart, j’ai trouvé un locataire fiable dès la première semaine.",
    },
  ];

  return (
    <section className="px-6 py-0 text-center">
      <motion.h1
        initial={{ opacity: 0, translateX: "4%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        className="pb-0 text-6xl font-bold tracking-tight  lg:text-4xl text-white  uppercase  max-sm:text-3xl sm:text-3xl max-sm:mt-0"
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
