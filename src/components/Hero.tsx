import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const videoElement = document.getElementById("backgroundVideo");
      const foregroundElement = document.getElementById("foregroundLayer");

      if (videoElement && foregroundElement) {
        const offset = window.scrollY * 0.5;
        videoElement.style.transform = `translateY(${offset}px)`;
        foregroundElement.style.transform = `translateY(${offset * 0.7}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      <video
        id="backgroundVideo"
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/video1.mp4"
        autoPlay
        loop
        muted
      />

      <div
        id="foregroundLayer"
        className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-5"
      />

      <div
        id="heroContent"
        className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 z-10 transition-transform duration-300"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide animate-fadeIn">
          LA MARTINA
          <br />
          <span className="text-xl md:text-3xl text-orange-400">
            Ingeniería e Instalación
          </span>
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-gray-200 animate-fadeIn delay-1s">
          Empresa de Ingeniería e Instaladora con Personal Propio.
        </p>
        <p className="text-base md:text-xl mb-8 text-gray-300 animate-fadeIn delay-2s">
          Jóvenes, dinámicos y con experiencia en el sector renovable y
          electricidad.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-8 rounded-full text-lg font-medium transition-transform duration-300 hover:scale-110 hover:shadow-xl animate-pulse"
        >
          Solicita Estudio
        </a>
      </div>

      {/* Indicador de desplazamiento centrado */}
      <div className="absolute bottom-6 inset-x-0 text-center text-white flex justify-center items-center z-10">
        <a href="#servicios" className="flex flex-col items-center">
          <div className="animate-bounce text-3xl sm:text-4xl">↓</div>
          <span className="mt-2 text-xs sm:text-sm font-medium tracking-wide">
            Desplázate hacia abajo
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
