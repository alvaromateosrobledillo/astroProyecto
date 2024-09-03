import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Definir la interfaz para los proyectos
interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: "/INSTALACIONES/LOCALALMAZORA1/almazora.jpeg",
    title: "Instalación de Energía Solar en Almazora",
    description:
      "Instalación de 8kWn en Almazora con significativos beneficios en reducción de costos y autonomía energética.",
  },
  {
    id: 2,
    image: "/INSTALACIONES/LOCALALMAZORA2/almazora2.jpeg",
    title: "Planta Fotovoltaica en Alicante",
    description:
      "Planta de 2MW en Alicante, diseñada para maximizar la eficiencia y reducir el impacto ambiental.",
  },
  {
    id: 3,
    image: "/projects/aislada.png",
    title: "Optimización Energética en Castellón",
    description:
      "Reducción de consumo energético en Castellón mediante soluciones innovadoras y paneles solares de alta eficiencia.",
  },
  {
    id: 4,
    image: "/projects/aislada.png",
    title: "Energía Renovable en Valencia",
    description:
      "Sistema de energía renovable en Valencia que reduce costos operativos y el impacto ambiental.",
  },
  {
    id: 5,
    image: "/projects/aislada.png",
    title: "Autonomía Energética en Benicàssim",
    description:
      "Independencia energética en Benicàssim mediante la instalación de paneles solares, reduciendo facturas a largo plazo.",
  },
];

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-lightBackground to-lightBorder dark:from-darkBackground dark:to-darkBorder px-4 sm:px-6 lg:px-[10%] min-h-screen flex flex-col lg:flex-row">
      {/* Tarjetas de proyectos ocupando 2/3 de la pantalla */}
      <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 lg:mb-0">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative w-full rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.2)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 + index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end text-white">
              <h3 className="text-xl lg:text-2xl font-semibold">
                {project.title}
              </h3>
              <motion.a
                className="mt-4 inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 px-4 rounded-full text-sm font-medium transition-transform duration-300 hover:scale-110 hover:shadow-xl self-start"
                whileHover={{ scale: 1.1 }}
                onClick={() => handleSelectProject(project)}
              >
                Ver Más
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Texto y botón ocupando 1/3 de la pantalla */}
      <div className="w-full lg:w-1/3 flex flex-col justify-center text-center lg:text-left px-4 lg:px-8 space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-lightText dark:text-darkText mb-4">
          Nuestros Proyectos <br />
          Que Marcan la Diferencia.
        </h2>
        <p className="text-lg text-muted dark:text-muted mb-4">
          Descubre cómo nuestras soluciones de energía renovable están
          transformando el futuro, un proyecto a la vez.
        </p>
      </div>

      {/* Modal de proyecto seleccionado */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-2xl relative max-w-4xl w-full max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6 text-black">
                <h3 className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-lg">{selectedProject.description}</p>
                <motion.a
                  href="#"
                  className="mt-6 inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 px-6 rounded-full text-lg font-medium transition-transform duration-300 hover:scale-110 hover:shadow-xl"
                >
                  Saber Más
                </motion.a>
                <button
                  onClick={handleCloseProject}
                  className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-2 focus:outline-none"
                  style={{ zIndex: 10 }}
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
