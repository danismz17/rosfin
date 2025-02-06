import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      easing: "ease-in-out", // Suavizado
      offset: 100, // Distancia desde el viewport para activar la animación
      once: false, // Permitir que la animación se repita al hacer scroll
      mirror: true, // Repetir la animación al hacer scroll hacia arriba
    });
  }, []);

  return null; // Este componente no necesita renderizar nada
};

export default AOSInitializer;
