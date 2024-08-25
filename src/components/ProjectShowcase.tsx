import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// Importa los estilos necesarios
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectsShowcase = () => {
  const projects = [
    {
      image: "/INSTALACIONES/LOCALALMAZORA1/almazora.jpeg",
      title: "Instalación de Energía Solar en Almazora",
      description:
        "Esta instalación de 8kWn en Almazora marca un paso firme hacia un futuro más sostenible. Los beneficios incluyen una significativa reducción de costos energéticos, mayor autonomía energética, y un aumento en el valor de la propiedad.",
    },
    {
      image: "/INSTALACIONES/LOCALALMAZORA2/almazora2.jpeg",
      title: "Planta Fotovoltaica en Alicante",
      description:
        "Desarrollo de una planta fotovoltaica de 2MW en Alicante, diseñada para maximizar la eficiencia energética y contribuir a la reducción del impacto ambiental. Ideal para grandes instalaciones que buscan sustentabilidad y ahorro a largo plazo.",
    },
    {
      image: "/projects/aislada.png",
      title: "Optimización Energética en Castellón",
      description:
        "Proyecto en una fábrica de Castellón, enfocado en la reducción del consumo energético mediante soluciones innovadoras y la instalación de paneles solares de alta eficiencia. Perfecto para empresas que desean mejorar su rentabilidad y sostenibilidad.",
    },
    {
      image: "/projects/aislada.png",
      title: "Energía Renovable en Valencia",
      description:
        "Implementación de un sistema de energía renovable en un edificio corporativo en Valencia, logrando un impacto positivo en el medio ambiente y en los costos operativos de la empresa.",
    },
    {
      image: "/projects/aislada.png",
      title: "Autonomía Energética en Benicàssim",
      description:
        "Instalación de paneles solares en una residencia en Benicàssim, proporcionando independencia energética y reduciendo las facturas de electricidad a largo plazo.",
    },
  ];

  // Estilos personalizados para Swiper
  const customStyles: React.CSSProperties = {
    "--swiper-pagination-color": "#f97316",
    "--swiper-navigation-color": "#f97316",
  } as React.CSSProperties;

  return (
    <section id="proyecto" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-16">
          Nuestros Proyectos
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper"
          style={customStyles}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl h-112 sm:h-128 md:h-160 lg:h-192">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col p-6 transition-opacity duration-300 hover:bg-opacity-75">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
                    {project.title}
                  </h3>
                  <p className="text-lg sm:text-xl md:text-2xl text-white mt-4 text-center">
                    {project.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-16 sm:mt-20">
          <motion.a
            href="https://wa.me/34624340422?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios."
            className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-4 px-10 sm:py-5 sm:px-12 rounded-full text-xl font-bold transition-transform duration-300 hover:scale-110 shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.1 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contáctanos para Más Información
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
