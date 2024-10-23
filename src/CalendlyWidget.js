// CalendlyWidget.js
import React from 'react';
import { InlineWidget } from 'react-calendly';
import './CalendlyWidget.css';

const CalendlyWidget = () => {
  return (
    <div className="calendly-widget">
      <h2>¿Agendamos una reunión?</h2>
      <p>¿Prefieres elegir un dia concreto? Podemos agendar una reunión para conocernos mejor y hablar sobre cómo puedo contribuir a tu equipo.</p>
      <InlineWidget url="https://calendly.com/pmartinezdearenaza/30min" />
    </div>
  );
};

export default CalendlyWidget;
