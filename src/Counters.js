import React, { useEffect, useState, useRef } from 'react';
import './Counters.css';

const Counters = () => {
  // Estados para los contadores
  const [projects, setProjects] = useState(0);
  const [collaborations, setCollaborations] = useState(0);
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [inView, setInView] = useState(false); // Estado para verificar si está en la vista

  const countersRef = useRef();

  // Efecto para observar la visibilidad del elemento
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // Detener la observación después de que esté en vista
          }
        });
      },
      { threshold: 0.5 } // El umbral al 50% del área visible
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      if (countersRef.current) {
        observer.unobserve(countersRef.current);
      }
    };
  }, []);

  // Efecto para la animación de los contadores
  useEffect(() => {
    if (inView) {
      // Incrementar los números de forma animada
      const incrementCounter = (setFunction, maxNumber) => {
        let count = 0;
        const interval = setInterval(() => {
          count += 1;
          setFunction(count);
          if (count === maxNumber) {
            clearInterval(interval);
          }
        }, 100); // Incremento cada 100ms
      };

      incrementCounter(setProjects, 6); // Número inventado, cambiar luego
      incrementCounter(setCollaborations, 8);
      incrementCounter(setYears, 3);
      incrementCounter(setClients, 12);
    }
  }, [inView]);

  return (
    <section id="counters" >
      {/* Título e introducción en su propia línea */}
      <div className="counters-intro">
        <h2>Logros y Estadísticas</h2>
        <p>Aquí puedes ver un resumen de algunos de mis proyectos, colaboraciones y años de experiencia.</p>
      </div>
  
      {/* Contadores en una línea separada */}
      <div className="counters-section" ref={countersRef}>
        <div className="counter-item">
          <h2>{projects}</h2>
          <p>Proyectos Propios</p>
        </div>
        <div className="counter-item">
          <h2>{collaborations}</h2>
          <p>Colaboraciones</p>
        </div>
        <div className="counter-item">
          <h2>{years}</h2>
          <p>Años en Desarrollo</p>
        </div>
        <div className="counter-item">
          <h2>{clients}</h2>
          <p>Clientes Satisfechos</p>
        </div>
      </div>
    </section>
  );
};

export default Counters;
