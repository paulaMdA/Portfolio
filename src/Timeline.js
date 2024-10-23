import React, { useState, useEffect, useRef } from 'react';
import './Timeline.css';

const timelineEvents = [
  {
    id: 1,
    type: "education",
    title: "Grado en Desarrollo de Aplicaciones Web",
    subtitle: "IES Ataúlfo Argenta | Graduado en Junio 2024",
    date: "Junio 2024",
    description: "Formación en tecnologías frontend y backend.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Java"],
    isTitle: true
  },
  {
    id: 2,
    type: "experience",
    title: "Desarrollador Frontend",
    subtitle: "ISMARK | Abril 2024 - Junio 2024",
    date: "Abril 2024 - Junio 2024",
    description: "Desarrollo de páginas web responsivas y optimización de sitios WordPress.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "WordPress", "MySQL"],
    isTitle: false
  },
  {
    id: 3,
    type: "education",
    title: "Grado en Publicidad y Relaciones Públicas",
    subtitle: "Universidad de Valladolid | Graduado en Noviembre 2022",
    date: "Noviembre 2022",
    description: "Especialización en estrategias de comunicación y publicidad.",
    technologies: ["SEO", "SEM", "Google Ads", "Facebook Ads"],
    isTitle: true
  },
  {
    id: 4,
    type: "experience",
    title: "Técnico de Marketing Digital",
    subtitle: "Irudigital | Agosto 2021 - Noviembre 2022",
    date: "Agosto 2021 - Noviembre 2022",
    description: "Gestión de campañas SEO y Social Ads.",
    technologies: ["SEO", "Google Analytics", "Canva"],
    isTitle: false
  },
  {
    id: 5,
    type: "education",
    title: "Curso Intensivo de Marketing Digital",
    subtitle: "IrudiLab | Octubre 2021 - Enero 2022",
    date: "Octubre 2021 - Enero 2022",
    description: "Desarrollo de estrategias digitales para redes sociales y publicidad online.",
    technologies: ["SEO", "Google Analytics", "Facebook Ads", "Instagram Ads"],
    isTitle: true
  },
  {
    id: 6,
    type: "experience",
    title: "Comercial",
    subtitle: "Nicsol System S.L. | Octubre 2023 - Febrero 2024",
    date: "Octubre 2023 - Febrero 2024",
    description: "Comunicación efectiva con clientes y gestión de bases de datos.",
    technologies: ["CRM", "Comunicación efectiva"],
    isTitle: false
  }
];

const getYearFromDate = (date) => {
  const yearMatch = date.match(/(\d{4})$/);
  return yearMatch ? parseInt(yearMatch[1], 10) : null;
};

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState(null);
  const [visibleTechnologies, setVisibleTechnologies] = useState({});
  const elementsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Ajustar el estado para pantallas móviles
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Manejo del scroll para activar eventos
  useEffect(() => {
    const handleScroll = () => {
      elementsRef.current.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= window.innerHeight / 3 && rect.top <= window.innerHeight / 2) {
            setActiveEvent(index);
            setVisibleTechnologies((prev) => ({
              ...prev,
              [index]: []  // Reiniciar las tecnologías visibles para el evento activo
            }));
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mostrar tecnologías con un retraso al activarse un evento
  useEffect(() => {
    if (activeEvent !== null) {
      const event = timelineEvents[activeEvent];
      event.technologies.forEach((tech, i) => {
        setTimeout(() => {
          setVisibleTechnologies((prev) => ({
            ...prev,
            [activeEvent]: [...(prev[activeEvent] || []), tech] // Solo actualiza el evento activo
          }));
        }, i * 300); // Retraso de 300 ms entre cada tecnología
      });
    }
  }, [activeEvent]);

  // Ordenar eventos por fecha
  const sortedEvents = [...timelineEvents].sort((a, b) => getYearFromDate(b.date) - getYearFromDate(a.date));

  return (
    <div className="timeline-page">
      <div className="timeline-intro">
        <h2>Mi Historia Profesional y Académica</h2>
        <p>Desplázate hacia abajo para explorar mi trayectoria a lo largo de los años, incluyendo mi experiencia profesional y mi formación académica.</p>
      </div>

      <section className="timeline">
        {!isMobile ? (
          <>
            <div className="timeline-column left-column">
              {sortedEvents.map((event, index) => (
                event.isTitle && (
                  <div
                    key={event.id}
                    className={`timeline-item left ${activeEvent === index ? "active" : ""}`}
                    ref={(el) => (elementsRef.current[index] = el)}
                  >
                    <div className="timeline-date">{event.date}</div>
                    <h4>{event.title}</h4>
                    {activeEvent === index && (
                      <>
                        <h5>{event.subtitle}</h5>
                        <p>{event.description}</p>
                        <div className="technologies">
                          {(visibleTechnologies[activeEvent] || []).map((tech, i) => (
                            <span
                              key={i}
                              className={`tech visible`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )
              ))}
            </div>

            <div className="timeline-column right-column">
              {sortedEvents.map((event, index) => (
                !event.isTitle && (
                  <div
                    key={event.id}
                    className={`timeline-item right ${activeEvent === index ? "active" : ""}`}
                    ref={(el) => (elementsRef.current[index] = el)}
                  >
                    <div className="timeline-date">{event.date}</div>
                    <h4>{event.title}</h4>
                    {activeEvent === index && (
                      <>
                        <h5>{event.subtitle}</h5>
                        <p>{event.description}</p>
                        <div className="technologies">
                          {(visibleTechnologies[activeEvent] || []).map((tech, i) => (
                            <span
                              key={i}
                              className={`tech visible`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )
              ))}
            </div>
          </>
        ) : (
          <div className="timeline-column">
            {sortedEvents.map((event, index) => (
              <div
                key={event.id}
                className={`timeline-item ${activeEvent === index ? "active" : ""}`}
                ref={(el) => (elementsRef.current[index] = el)}
              >
                <div className="timeline-date">{event.date}</div>
                <h4>{event.title}</h4>
                {activeEvent === index && (
                  <>
                    <h5>{event.subtitle}</h5>
                    <p>{event.description}</p>
                    <div className="technologies">
                      {(visibleTechnologies[activeEvent] || []).map((tech, i) => (
                        <span
                          key={i}
                          className={`tech visible`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Timeline;