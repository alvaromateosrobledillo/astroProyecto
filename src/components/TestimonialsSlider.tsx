import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaStar } from "react-icons/fa";

// Definir la interfaz para el tipo de los objetos de 'reviews'
interface Review {
  id: number;
  name: string;
  text: string;
  googleLink: string;
}

const TestimonialsSlider: React.FC = () => {
  // Tipar explícitamente la variable 'reviews' como un array de 'Review'
  const reviews: Review[] = [
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
    <>
      <section className="bg-gradient-to-r from-orange-100 to-yellow-100 py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col">
        {/* Título y descripción con animaciones */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-8" // Ajuste del margen inferior
        >
          <motion.h2
            className="text-5xl font-extrabold text-orange-600 mb-2" // Ajuste del margen inferior del título
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
          <motion.p
            className="text-md text-gray-600 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Estamos orgullosos de ofrecer un servicio excepcional y calidad en
            cada proyecto. Aquí hay algunos testimonios de nuestros clientes
            satisfechos.
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            ¡Únete a nuestros clientes satisfechos!
          </h3>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            ¿Interesado en nuestros servicios? Contáctanos hoy mismo y descubre
            cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
          <motion.a
            href="#contacto"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8 inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-8 rounded-full text-lg font-medium transition-transform duration-300 hover:scale-105"
          >
            Contáctanos Ahora
          </motion.a>
        </div>
        {/* Contenedor de las tarjetas de testimonios */}
        <div className="flex items-center justify-center mt-64">
          {" "}
          {/* Reducción del margen superior */}
          <div className="relative w-full max-w-3xl mx-auto">
            <div className="relative flex items-center justify-center">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    scale: index === currentIndex ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.8 }}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="p-6 bg-white rounded-2xl shadow-2xl flex flex-col items-center text-center">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-orange-500 mb-4 flex items-center justify-center bg-orange-100">
                      <FaGoogle className="text-6xl text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-600 mb-2">
                      {review.name}
                    </h3>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-base mb-4 italic">
                      "{review.text}"
                    </p>
                    <a
                      href={review.googleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-white bg-gradient-to-r from-orange-500 to-yellow-500 py-2 px-6 rounded-full text-sm font-medium transition-transform duration-300 hover:scale-105"
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
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-orange-500 text-white p-4 rounded-full shadow-lg focus:outline-none"
              >
                &#8592;
              </motion.button>
              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-orange-500 text-white p-4 rounded-full shadow-lg focus:outline-none"
              >
                &#8594;
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección para un cierre adicional */}
    </>
  );
};

export default TestimonialsSlider;
