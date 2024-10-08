import React from "react";
import { FaLightbulb, FaUserTie, FaTools, FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutAndStudyRequest = () => {
  const points = [
    {
      icon: <FaLightbulb className="text-orange-500 text-4xl mb-4" />,
      title: "INNOVACIÓN EN ENERGÍA",
      description:
        "Ingeniería e instalaciones en energías renovables y electricidad.",
    },
    {
      icon: <FaUserTie className="text-orange-500 text-4xl mb-4" />,
      title: "COMPROMISO CON EL CLIENTE",
      description:
        "Acompañamiento y asesoramiento honesto para relaciones a largo plazo.",
    },
    {
      icon: <FaTools className="text-orange-500 text-4xl mb-4" />,
      title: "GESTIÓN INTEGRAL",
      description:
        "Gestión completa: permisos, legalizaciones y optimización de inversión.",
    },
    {
      icon: <FaBolt className="text-orange-500 text-4xl mb-4" />,
      title: "EXPERTOS EN ELECTRICIDAD",
      description:
        "Equipo especializado en instalaciones nuevas y reformas eléctricas.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.section
        className="py-16 bg-gradient-to-b from-orange-100 via-yellow-100 to-orange-100 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-orange-200 via-yellow-100 to-orange-200 opacity-50 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-orange-600 mb-12 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            SOBRE LA MARTINA
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg text-center group"
                variants={itemVariants}
                whileHover={{
                  translateY: -10,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex items-center justify-center mb-4"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                >
                  {point.icon}
                </motion.div>
                <motion.h3
                  className="text-lg font-semibold mb-2 text-orange-500 group-hover:text-orange-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {point.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-gray-700 group-hover:text-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {point.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="study-request"
        className="py-16 bg-gradient-to-b from-orange-100 via-yellow-100 to-orange-100 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-orange-200 via-yellow-100 to-orange-200 opacity-50 z-0"></div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <motion.div
            className="fade-in max-w-xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              translateY: -10,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-wide"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-orange-500">¿QUIERES AHORRAR</span> EN TU
              FACTURA DE LA LUZ?
            </motion.h2>
            <motion.p
              className="text-base md:text-lg mb-8 text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Solicita un estudio personalizado a nuestro equipo de ingenieros y
              descubre cuánto puedes{" "}
              <span className="font-semibold text-orange-500">AHORRAR</span>.
            </motion.p>
            <motion.a
              href="https://calculadora-lamartina.vercel.app/"
              className="mt-4 md:mt-8 inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-6 rounded-full font-semibold transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
            >
              SOLICITA TU ESTUDIO
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 right-8 space-y-3 flex flex-col items-center z-20 md:hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.a
            href="#"
            className="text-white bg-orange-500 p-3 rounded-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-5 h-5"
            >
              <path d="M16 8a8 8 0 1 0-9.33 7.89v-5.58h-2V8h2V6.21C6.67 4.6 7.87 3.67 9.33 3.67c.83 0 1.54.06 1.75.09v2.04h-1.2c-1.18 0-1.41.56-1.41 1.39v1.81h2.82l-.37 2.32h-2.45v5.57A8 8 0 0 0 16 8z" />
            </svg>
          </motion.a>
          <motion.a
            href="#"
            className="text-white bg-orange-400 p-3 rounded-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-5 h-5"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.29 5.69l-.1.47H8v1.86h2.52l-.32 1.46H8V13H6.5V9.49H5V8.03h1.5V6.6c0-.85.44-2.18 2.15-2.18H11v1.75H9.85c-.1 0-.46 0-.46.52v1.35H11z" />
            </svg>
          </motion.a>
          <motion.a
            href="#"
            className="text-white bg-pink-600 p-3 rounded-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-5 h-5"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.68 4.95a1.06 1.06 0 0 1 1.06-1.06h.3c.5 0 .9.4.9.9v.3a1.06 1.06 0 0 1-1.06 1.06h-.3a.9.9 0 0 1-.9-.9v-.3zM7 6.34c.94 0 1.69.75 1.69 1.69S7.94 9.72 7 9.72 5.31 8.97 5.31 8c0-.94.75-1.69 1.69-1.69zm3.68 6.3H5.32c-.5 0-.9-.4-.9-.9V5.94c0-.5.4-.9.9-.9h5.36c.5 0 .9.4.9.9v5.79c0 .5-.4.9-.9.9z" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutAndStudyRequest;
