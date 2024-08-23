import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";

// Importa los estilos necesarios
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const ProjectsShowcase = () => {
  const projects = [
    {
      image: "/projects/aislada.png",
      title: "Instalación de Energía Solar en Almazora",
      description: "Esta instalación de 8kWn en Almazora marca un paso firme hacia un futuro más sostenible. Los beneficios incluyen una significativa reducción de costos energéticos, mayor autonomía energética, y un aumento en el valor de la propiedad.",
    },
    {
      image: "/projects/aislada.png",
      title: "Planta Fotovoltaica en Alicante",
      description: "Desarrollo de una planta fotovoltaica de 2MW en Alicante, diseñada para maximizar la eficiencia energética y contribuir a la reducción del impacto ambiental. Ideal para grandes instalaciones que buscan sustentabilidad y ahorro a largo plazo.",
    },
    {
      image: "/projects/aislada.png",
      title: "Optimización Energética en Castellón",
      description: "Proyecto en una fábrica de Castellón, enfocado en la reducción del consumo energético mediante soluciones innovadoras y la instalación de paneles solares de alta eficiencia. Perfecto para empresas que desean mejorar su rentabilidad y sostenibilidad.",
    },
    {
      image: "/projects/aislada.png",
      title: "Energía Renovable en Valencia",
      description: "Implementación de un sistema de energía renovable en un edificio corporativo en Valencia, logrando un impacto positivo en el medio ambiente y en los costos operativos de la empresa.",
    },
    {
      image: "/projects/aislada.png",
      title: "Autonomía Energética en Benicàssim",
      description: "Instalación de paneles solares en una residencia en Benicàssim, proporcionando independencia energética y reduciendo las facturas de electricidad a largo plazo.",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Nuestros Proyectos
        </h2>

        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          pagination={{ clickable: true }}
          navigation
          effect="fade"
          loop={true}
          className="mySwiper"
          style={{
            "--swiper-pagination-color": "#f97316",
            "--swiper-navigation-color": "#f97316",
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden rounded-xl shadow-lg h-60 sm:h-72 md:h-96 lg:h-104">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center flex-col p-4 sm:p-6 transition-opacity duration-300 hover:bg-opacity-75">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-white mt-4 text-center">
                    {project.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12 sm:mt-16">
          <a
            href="#contacto"
            className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-8 sm:py-4 sm:px-10 rounded-full text-lg sm:text-xl font-medium transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            Contáctanos para Más Información
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
