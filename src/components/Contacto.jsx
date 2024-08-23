import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section
      id="contacto"
      className="py-16 bg-gray-100 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Parallax */}
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 opacity-50 z-0"></div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          className="max-w-xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-transform duration-300"
          whileHover={{ translateY: -5 }}
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-orange-600 dark:text-orange-500">
            NO DUDES EN CONOCER TODAS LAS AYUDAS AL AUTOCONSUMO QUE EXISTEN ACTUALMENTE
          </h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            Ponte en contacto con nosotros para más información.
          </p>
          <div className="text-left text-gray-900 dark:text-gray-300">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-orange-600 dark:text-orange-500">SERVICIO TÉCNICO</h3>
              <p className="text-lg">📞 624 340 482</p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-orange-600 dark:text-orange-500">DEPARTAMENTO DE INGENIERÍA</h3>
              <p className="text-lg">📞 624 340 422</p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-orange-600 dark:text-orange-500">CORREO ELECTRÓNICO</h3>
              <p className="text-lg">✉️ inf.lamartina@gmail.com</p>
            </div>
          </div>
          <motion.a
            href="mailto:inf.lamartina@gmail.com"
            className="mt-8 inline-block bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-3 px-6 rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:bg-orange-700 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            CONTÁCTENOS
          </motion.a>

          {/* Redes Sociales */}
          <div className="mt-8 flex justify-center space-x-4">
            <motion.a
              href="#"
              className="text-gray-900 dark:text-white bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
              whileHover={{ rotate: 20 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-900 dark:text-white bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
              whileHover={{ rotate: 20 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-900 dark:text-white bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
              whileHover={{ rotate: 20 }}
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-900 dark:text-white bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
              whileHover={{ rotate: 20 }}
            >
              <FaInstagram />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
