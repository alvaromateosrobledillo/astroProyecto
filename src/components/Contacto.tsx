import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section
      id="contacto"
      className="py-16 bg-lightBackground dark:bg-darkBackground relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-lightBackground dark:bg-darkBackground opacity-80 z-0"></div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          className="max-w-xl mx-auto p-8 bg-white dark:bg-darkBackground rounded-lg shadow-lg transition-transform duration-300"
          whileHover={{ translateY: -5 }}
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-accent dark:text-highlight">
            NO DUDES EN CONOCER TODAS LAS AYUDAS AL AUTOCONSUMO QUE EXISTEN
            ACTUALMENTE
          </h2>
          <p className="text-lg mb-8 text-lightText dark:text-gray-300">
            Ponte en contacto con nosotros para más información.
          </p>
          <div className="text-left text-lightText dark:text-gray-300">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-accent dark:text-highlight">
                SERVICIO TÉCNICO
              </h3>
              <p className="text-lg">📞 624 340 482</p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-accent dark:text-highlight">
                DEPARTAMENTO DE INGENIERÍA
              </h3>
              <p className="text-lg">📞 624 340 422</p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-accent dark:text-highlight">
                CORREO ELECTRÓNICO
              </h3>
              <p className="text-lg">✉️ inf.lamartina@gmail.com</p>
            </div>
          </div>
          <motion.a
            href="https://wa.me/34624340422?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios."
            className="mt-8 inline-block bg-gradient-to-r from-gradientFrom to-gradientTo text-white py-3 px-6 rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:bg-orange-700 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            CONTÁCTENOS
          </motion.a>

          <div className="mt-8 flex justify-center space-x-4">
            <motion.a
              href="#"
              className="text-white bg-accent dark:bg-highlight p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
              whileHover={{ rotate: 20 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="#"
              className="text-white bg-accent dark:bg-highlight p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
              whileHover={{ rotate: 20 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="#"
              className="text-white bg-accent dark:bg-highlight p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
              whileHover={{ rotate: 20 }}
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              href="#"
              className="text-white bg-accent dark:bg-highlight p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
              whileHover={{ rotate: 20 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://wa.me/34624340422"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-accent dark:bg-highlight p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
              whileHover={{ rotate: 20 }}
            >
              <FaWhatsapp />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
