import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      controls.start({
        y: offset * 0.5,
        opacity: 1 - offset * 0.0015,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      <motion.video
        id="backgroundVideo"
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/video1.mp4"
        autoPlay
        loop
        muted
        animate={controls}
        initial={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      />

      <motion.div
        id="foregroundLayer"
        className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-5"
        animate={controls}
        initial={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      />

      <motion.div
        id="heroContent"
        className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 z-10"
        animate={controls}
        initial={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          LA MARTINA
          <br />
          <span className="text-xl md:text-3xl text-orange-400">
            Ingeniería e Instalación
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-6 text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Empresa de Ingeniería e Instaladora con Personal Propio.
        </motion.p>
        <motion.p
          className="text-base md:text-xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Jóvenes, dinámicos y con experiencia en el sector renovable y
          electricidad.
        </motion.p>
        <motion.a
          href="https://calculadora-lamartina.vercel.app/"
          className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-8 rounded-full text-lg font-medium transition-transform duration-300 hover:scale-110 hover:shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Solicita Estudio
        </motion.a>
      </motion.div>

      <motion.div
        className="absolute bottom-6 inset-x-0 text-center text-white flex justify-center items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a href="#servicios" className="flex flex-col items-center">
          <motion.div
            className="text-3xl sm:text-4xl"
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.div>
          <span className="mt-2 text-xs sm:text-sm font-medium tracking-wide">
            Desplázate hacia abajo
          </span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
