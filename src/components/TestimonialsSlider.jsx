import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaStar } from "react-icons/fa";

const TestimonialsSlider = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      text: "La atención al detalle en su trabajo es impresionante. Cada aspecto del proyecto fue manejado con precisión y cuidado. Altamente recomendado.",
      googleLink: "https://www.google.com/search?q=valoraciones+john+doe",
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "El servicio al cliente fue excelente. Fueron receptivos y útiles durante todo el proceso, haciendo que la experiencia fuera fluida.",
      googleLink: "https://www.google.com/search?q=valoraciones+jane+smith",
    },
    {
      id: 3,
      name: "Alex Johnson",
      text: "El producto no solo cumplió sino que superó mis expectativas. Es evidente que el equipo está dedicado a ofrecer trabajos de alta calidad.",
      googleLink: "https://www.google.com/search?q=valoraciones+alex+johnson",
    },
    {
      id: 4,
      name: "Emily Davis",
      text: "El equipo demostró una comprensión profunda de mis requisitos. Capturaron la esencia de mi visión y entregaron un producto que superó mis expectativas.",
      googleLink: "https://www.google.com/search?q=valoraciones+emily+davis",
    },
    {
      id: 5,
      name: "David Miller",
      text: "El producto no solo cumplió sino que superó mis expectativas. Es claro que el equipo está dedicado a ofrecer trabajos de alta calidad. Estoy muy satisfecho.",
      googleLink: "https://www.google.com/search?q=valoraciones+david+miller",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="bg-gradient-to-r from-orange-100 to-yellow-100 py-16 px-4 sm:px-6 lg:px-8 h-screen flex flex-col">
      {/* Título y descripción con animaciones */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-4"
      >
        <motion.h2
          className="text-4xl font-bold text-orange-600 mb-2"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          TESTIMONIOS
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Lo que nuestros clientes dicen sobre nosotros.
        </motion.p>
      </motion.div>

      {/* Contenedor de las tarjetas de testimonios */}
      <div className="flex-grow flex items-center justify-center">
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="relative flex items-center justify-center">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 0.8,
                }}
                transition={{ duration: 0.8 }}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="p-6 sm:p-8 bg-white rounded-2xl shadow-xl flex flex-col items-center text-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-orange-500 mb-4 flex items-center justify-center bg-orange-100">
                    <FaGoogle className="text-6xl text-orange-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-orange-600 mb-2">
                    {review.name}
                  </h3>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm sm:text-lg mb-4 italic">
                    "{review.text}"
                  </p>
                  <a
                    href={review.googleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-white bg-gradient-to-r from-orange-500 to-yellow-500 py-2 px-4 rounded-full text-xs sm:text-sm font-medium transition-transform duration-300 hover:scale-105"
                  >
                    Ver Valoraciones en Google
                  </a>
                </div>
              </motion.div>
            ))}

            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full shadow-lg focus:outline-none"
            >
              &#8592;
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full shadow-lg focus:outline-none"
            >
              &#8594;
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
