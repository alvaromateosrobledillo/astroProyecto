import React from "react";
import { motion } from "framer-motion";
import { FaEuroSign, FaCity, FaCarBattery } from "react-icons/fa";

const grants = [
  {
    title: "NEXT GENERATION",
    description:
      "Son unos fondos creados por la Unión Europea y que se distribuyen por todos los países que forman parte de ella.",
    icon: <FaEuroSign className="text-orange-600 text-5xl mb-4" />,
  },
  {
    title: "IBI DEL MUNICIPIO",
    description:
      "Se trata del Impuesto sobre Bienes Inmuebles. Cada municipio tiene su propia carga impositiva. Algunos de ellos tienen ciertas desgravaciones por instalar sistemas de autoconsumo. Te diremos si te corresponde en función de la zona en la que vivas.",
    icon: <FaCity className="text-orange-600 text-5xl mb-4" />,
  },
  {
    title: "CARGADOR DE COCHE ELÉCTRICO 7000",
    description:
      "Si tienes un vehículo de estas características, ya va siendo hora de que te instales un cargador en tu garaje o donde quieras. No te preocupes, desde Energía Solar La Martina también podemos informarte acerca de si te corresponde algún tipo de ayuda o subvención.",
    icon: <FaCarBattery className="text-orange-600 text-5xl mb-4" />,
  },
];

const GrantsSection = () => {
  return (
    <section
      id="subvenciones"
      className="py-16 bg-gradient-to-r from-orange-100 to-yellow-100"
    >
      <div className="container mx-auto text-center max-w-5xl px-4">
        <motion.h2
          className="text-4xl font-bold mb-6 text-orange-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SUBVENCIONES
        </motion.h2>
        <motion.p
          className="text-lg mb-12 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Desde Energía Solar La Martina, nuestra empresa en Castellón de la
          Plana especializada en energías renovables y energías solares, nos
          encargamos de tramitar todas las subvenciones posibles para mayor
          comodidad de los clientes. También te informaremos de las ayudas al
          autoconsumo que haya.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {grants.map((grant, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-2xl"
              whileHover={{ translateY: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-center">
                {grant.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-orange-600 dark:text-yellow-500">
                {grant.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {grant.description}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.a
          href="/subvenciones"
          className="mt-8 inline-block bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-3 px-6 rounded-full font-semibold transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.1 }}
        >
          Más Información
        </motion.a>
      </div>
    </section>
  );
};

export default GrantsSection;
