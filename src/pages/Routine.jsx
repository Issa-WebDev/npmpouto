import React from "react";
import { motion } from "framer-motion";
import ContactK from "../components/ContactK";

const Routine = () => {
  const routines = [
    {
      title: "Routine Peau Purifiée",
      description: "Savon solide visage + Scrub visage + Crème Visage",
      image: "/cremeduvisage.jpg",
    },
    {
      title: "Routine Hydratation & Éclat",
      description: "Crème jour – Sérum – Crème nuit",
      image: "/routineeclat.jpg",
    },
    {
      title: "Routine Peaux Très Sèches & Sensibles",
      description: "Sérum + Crème jour",
      image: "/serum.jpg",
    },
    {
      title: "Routine Exfoliation Corps Universelle",
      description: "Scrub corps + Crème jour",
      image: "/cremecorps.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-gray-700">
      <div className="space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 uppercase">
          Nos Routines
        </h2>
        <p className="text-lg text-center text-gray-700">
          Les quatre routines les plus fréquentes pour une peau équilibrée,
          hydratée et rayonnante.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {routines.map((routine, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 ease-in-out"
            >
              <img
                src={routine.image}
                alt={routine.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#EAD72A] mb-2">
                  {routine.title}
                </h3>
                <p className="text-base text-[#1d2f4c]">{routine.description}</p>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <ContactK />
        </motion.div>
      </div>
    </section>
  );
};

export default Routine;
