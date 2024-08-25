import { useState } from "react";
import { motion } from "framer-motion";
import {
  HomeIcon,
  BriefcaseIcon,
  PhoneIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { title: "INICIO", url: "/", icon: <HomeIcon className="w-6 h-6 mr-2" /> },
  {
    title: "SERVICIOS",
    url: "/#servicios",
    icon: <CogIcon className="w-6 h-6 mr-2" />,
  },
  {
    title: "PROYECTOS",
    url: "/#proyectos",
    icon: <BriefcaseIcon className="w-6 h-6 mr-2" />,
  },
  {
    title: "CONTACTO",
    url: "/#contacto",
    icon: <PhoneIcon className="w-6 h-6 mr-2" />,
  },
];

const HeaderReact = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-30 w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:py-4 md:px-6">
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            srcSet="/logo.png 1x, /logo@2x.png 2x, /logo@3x.png 3x"
            alt="Energía Solar La Martina logo"
            className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 transition-all duration-300 hover:scale-110"
          />
        </a>

        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((link, index) => (
            <a
              key={index}
              className="text-md lg:text-lg font-medium text-gray-700 dark:text-gray-200 relative group transition-all duration-300 hover:text-orange-500 flex items-center"
              href={link.url}
            >
              {link.icon}
              {link.title}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-3 md:space-x-4">
          <ThemeToggle />
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 bg-lightBackground dark:bg-darkBackground z-40 h-screen flex flex-col justify-center items-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-primary dark:text-secondary focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <nav className="w-full flex flex-col items-center space-y-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="w-full flex items-center justify-center text-primary dark:text-white hover:text-primary-dark dark:hover:text-primary-light transition duration-300 py-4 text-lg uppercase transform hover:scale-105"
                onClick={() => setMenuOpen(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mr-2"
                >
                  {item.icon}
                </motion.div>
                {item.title}
              </a>
            ))}

            <a
              href="#contacto"
              className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-8 rounded-full text-lg font-medium transition-transform duration-300 hover:scale-105 mt-8"
              onClick={() => setMenuOpen(false)}
            >
              Solicita Estudio
            </a>

            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              className="w-full max-w-xs flex items-center justify-center bg-gradient-to-r from-primary via-primary-dark to-accent text-white font-bold py-3 mt-4 rounded-full transition duration-300 hover:scale-105 animate-pulse"
              onClick={() => setMenuOpen(false)}
            >
              INICIAR SESIÓN
            </motion.button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default HeaderReact;
