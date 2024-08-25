import React from "react";
import useTypewriter from "./useTypewriter"; // Asegúrate de que la ruta sea correcta

const Typewriter = ({ text, speed }: { text: string; speed?: number }) => {
  const displayText = useTypewriter(text, speed);

  return <span>{displayText}</span>;
};

export default Typewriter;
