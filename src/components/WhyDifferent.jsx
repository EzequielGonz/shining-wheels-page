import React from 'react';
import './WhyDifferent.css';

const WhyDifferent = () => {
  const features = [
    {
      title: 'Comodidad absoluta',
      description:
        'El detalle llega hasta donde estés, evitando desplazamientos y esperas.',
    },
    {
      title: 'Ahorro de tiempo',
      description:
        'Reduces a cero el tiempo muerto en un túnel de lavado; puedes seguir con tu rutina.',
    },
    {
      title: 'Calidad de productos',
      description:
        'Se usan químicos y herramientas premium específicos para cada superficie del vehículo.',
    },
    {
      title: 'Proceso multi‑etapa',
      description:
        'Limpiezas alcalinas y ácidas controladas que eliminan suciedad orgánica e inorgánica sin dañar la pintura.',
    },
    {
      title: 'Protección de pintura',
      description:
        'Aplicación de selladores rápidos o coatings de un paso para preservar el acabado.',
    },
    {
      title: 'Cuidado interior a medida',
      description:
        'Uso de limpiadores de tejidos, piel y sanitizantes seguros para cada material.',
    },
    {
      title: 'Solución de olores',
      description:
        'Tratamiento enzimático y oxidativo para eliminar olores orgánicos persistentes.',
    },
    {
      title: 'Detalle de ruedas y llantas',
      description:
        'Limpia y, si se desea, aplica protección hidrofóbica que facilita el mantenimiento.',
    },
    {
      title: 'Seguridad y confidencialidad',
      description:
        'No dejas el coche con extraños en un lavadero; todo se realiza frente a ti.',
    },
    {
      title: 'Atención personalizada',
      description:
        'El técnico adapta la limpieza y protección al estado real del coche y a tus prioridades.',
    },
    {
      title: 'Flexibilidad horaria',
      description:
        'Servicios 24/7 o según reserva; ideal para jornadas laborales exigentes.',
    },
    {
      title: 'Especialización en superficies delicadas',
      description:
        'Tratamientos seguros para vehículos con wrap, PPF, cerámicos o piel delicada.',
    },
    {
      title: 'Servicio "todo incluido"',
      description:
        'Autocontenido; no necesitas agua corriente ni luz (llevan depósitos y generador).',
    },
    {
      title: 'Inspección final minuciosa',
      description:
        'Se revisan detalles y se retoca in situ hasta alcanzar el resultado deseado.',
    },
    {
      title: 'Imagen profesional y tranquilidad',
      description:
        'Al emplear procesos y productos premium, el cliente percibe que está invirtiendo en la conservación y valor de su vehículo.',
    },
  ];

  return (
    <section className="why-different">
      <div className="why-different-container">
        <h2 className="why-different-title">Por qué somos diferentes</h2>
        <p className="why-different-subtitle">
          Un servicio premium diseñado para quienes valoran la excelencia
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-check">
                <span className="check-icon">✔︎</span>
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;

