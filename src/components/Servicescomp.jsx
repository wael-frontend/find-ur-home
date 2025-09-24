import { Home, Building2, Store } from "lucide-react";
import { motion } from "framer-motion";

export default function Servicescomp() {
  const services = [
    {
      icon: <Home size={35} />,
      title: "Modern Houses",
      desc: "Explore beautifully designed houses with modern architecture and smart features for comfortable living.",
    },
    {
      icon: <Building2 size={35} />,
      title: "Luxury Apartments",
      desc: "Find stylish apartments located in prime areas with excellent amenities and easy access to the cityFind stylish apartments located in prime areas with excellent amenities and easy access to the city.",
    },

    {
      icon: <Store size={35} />,
      title: "Commercial Spaces",
      desc: "Discover commercial properties perfect for businesses, shops, and offices with great visibility.",
    },
  ];

  return (
    <section className="px-6 py-32 max-sm:py-10">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <motion.div
            initial={{ opacity: 0, translateY: "53%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
            key={idx}
            className="bg-black text-white rounded-xl shadow-lg p-4 flex-1"
          >
            <div className="flex items-center justify-center -mt-12 mb-4">
              <div className="bg-[#E43636]  w-20 h-20 max-sm:w-12 max-sm:h-12 rounded-full flex items-center justify-center shadow-md">
                {service.icon}
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
