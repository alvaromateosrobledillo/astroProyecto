import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const videoElement = document.getElementById("backgroundVideo");
      const foregroundElement = document.getElementById("foregroundLayer");

      const offset = window.scrollY * 0.5;
      videoElement.style.transform = `translateY(${offset}px)`;
      foregroundElement.style.transform = `translateY(${offset * 0.7}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        id="backgroundVideo"
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="./videos/video1.mp4"
        autoPlay
        loop
        muted
      />

      {/* Capa de gradiente parallax encima del video */}
      <div
        id="foregroundLayer"
        className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-5"
      />

      {/* Contenido */}
      <div
        id="heroContent"
        className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 z-10 transition-transform duration-300"
      >
        <div className="max-w-3xl mx-auto p-8 rounded-lg bg-black bg-opacity-60 backdrop-blur-lg shadow-lg">
          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-wide">
            <span className="text-orange-500">LA MARTINA</span>
          </h1>
          {/* Descripción breve */}
          <p className="text-lg md:text-2xl mb-6 text-gray-200">
            Empresa de Ingeniería e Instaladora con Personal Propio.
          </p>
          <p className="text-base md:text-xl mb-8 text-gray-300">
            Jóvenes, dinámicos y con experiencia en el sector renovable y
            electricidad.
          </p>
          {/* Botón principal */}
          <a
            href="#contacto"
            className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-8 rounded-full text-lg font-medium transition-transform duration-300 hover:scale-105"
          >
            Solicita Estudio
          </a>
        </div>
      </div>

      {/* Indicador de desplazamiento solo en móvil */}
      <div className="absolute inset-x-0 bottom-10 text-white flex justify-center items-center z-10 md:hidden">
        <a href="#siguienteSeccion" className="flex flex-col items-center">
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v8m4 4H8"
              />
            </svg>
          </div>
          <span className="mt-2 text-sm font-semibold tracking-wide">
            Desplazar
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
