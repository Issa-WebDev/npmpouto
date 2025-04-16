import React from "react";
import { Cross } from "lucide-react";
import { motion } from "framer-motion";
import { MdSupportAgent } from "react-icons/md";
import { GiMedicinePills } from "react-icons/gi";
import { HiOutlineNewspaper } from "react-icons/hi";

const Serment = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };


  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center text-[#1d2f4c] mb-12"
      >
        <h1 className="text-2xl md:text-4xl font-bold">
          <Cross className="inline text-[#7FB23A]" size={40} /> SERMENT DE
          GALIEN
        </h1>
        <p className="md:text-lg text-ld pt-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
          provident esse tenetur minus labore dolor iste voluptas reprehenderit
          nobis error illo adipisci, veniam sunt quo! Vero facilis tenetur
          facere pariatur!
        </p>
      </motion.h2>

      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10 text-black">
        <div className="flex flex-col gap-10 pt-14">
          <div className="flex gap-5">
            <div className="flex items-center justify-center">
              <MdSupportAgent size={70} className="text-blue-400" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-md md:text-xl">CONSEILS</h1>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                commodi fugit magni necessitatibus, minus impedit iusto quisquam
                dolorum est harum?
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex items-center justify-center">
              <GiMedicinePills size={70} className="text-blue-400" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-md md:text-xl">PARA-PHARMACIE</h1>
              <p className="text-sm">
                Sous la responsabilité de Dr TRAORE, le VISA KLC ambitionne
                d'encadrer la formation des parapharmaciens en passant par la
                recommandation de programmes de soins et/ou des
                routines adéquates.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex items-center justify-center">
              <HiOutlineNewspaper size={70} className="text-blue-400" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-md md:text-xl">ACTUALITES</h1>
              <p className="text-sm">
                Suivez-nous pour ne pas rater nos derniers articles ainsi que
                nos jours de garde
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src="serment.jpeg" alt="notre serment" className="" />
        </div>
      </div>
    </section>
  );
};

export default Serment;
