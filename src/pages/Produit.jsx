import React from "react";
 import { motion } from "framer-motion";
 import Contact from "../components/Contact";

const produits = [
  {
    title: "Savon solide visage",
    description:
      "Appliqué 1-2 fois par semaine, il lisse le grain de peau et procure une sensation de fraîcheur. Formulé pour respecter la sensibilité des yeux.",
  },
  {
    title: "Savon solide corps",
    description:
      "Respecte le film protecteur naturel de la peau. Restaure, nourrit, protège et redonne de la souplesse à la peau.",
  },
  {
    title: "Savon solide cheveux",
    description:
      "Nettoie en douceur sans agresser le cuir chevelu. À base d’ingrédients locaux, c’est une alternative écologique aux savons liquides.",
  },
  {
    title: "Crème visage",
    description:
      "Nourrit, restaure, protège l’épiderme et hydrate durablement. Formulée avec soin pour les peaux sensibles.",
  },
  {
    title: "Crème corps",
    description:
      "Hydrate en profondeur, protège des agressions extérieures (UVA, UVB, pollution). La version nuit raffermit et revitalise la peau.",
  },
  {
    title: "Scrub visage",
    description:
      "Écorces d’anacardier bio upcyclées, exfolie en douceur. Laisse le visage net, doux, débarrassé des impuretés.",
  },
  {
    title: "Scrub corps",
    description:
      "Texture douce et nourrissante avec des particules naturelles. Laisse une peau soyeuse, douce et hydratée.",
  },
  {
    title: "Sérum",
    description:
      "Régénérant et unificateur. Infusé à l’extrait de pomme cajou, hydrate et ravive l’éclat du teint grâce à ses antioxydants.",
  },
];

const Produit = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-text-gray">
      <div className="space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#EAD72A] uppercase tracking-wider">
          Nos Catégories de Produits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {produits.map((produit, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-[#EAD72A] mb-2">
                {produit.title}
              </h3>
              <p className="text-base text-gray-700">{produit.description}</p>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.div>
      </div>
    </section>
  );
};

export default Produit;
