import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import TechCarousel from '../TechCarousel';

function Servicios() {
  return (
    <Container className="flex-grow-1 py-5">
      <h2 className="h3 text-center text-white mb-4">Nuestros Servicios</h2>
      <div className="row g-4">
        {[
          {
            icon: 'bi-code-square',
            title: 'Desarrollo Web y Software',
            text: 'Creamos aplicaciones web y sistemas a medida con tecnologías modernas como .NET, Java y React, asegurando eficiencia y escalabilidad.',
          },
          {
            icon: 'bi-phone',
            title: 'Apps Móviles',
            text: 'Desarrollamos aplicaciones móviles nativas y multiplataforma optimizadas para Android y iOS, con diseños intuitivos y alto rendimiento.',
          },
          {
            icon: 'bi-graph-up',
            title: 'SEO y Marketing Digital',
            text: 'Mejoramos tu visibilidad en Google con estrategias avanzadas de posicionamiento y optimización para aumentar la conversión de clientes.',
          },
          {
            icon: 'bi-cloud',
            title: 'Infraestructura en la Nube',
            text: 'Implementamos y optimizamos soluciones en AWS, Oracle Cloud y Azure, garantizando seguridad, disponibilidad y escalabilidad.',
          },
          {
            icon: 'bi-box-seam',
            title: 'Inventario y Logística',
            text: 'Desarrollamos sistemas de gestión de bodega y logística 100% funcionales, como Inventario360, optimizando el control de stock y materiales.',
          },
          {
            icon: 'bi-bank',
            title: 'Sistemas Robustos y Escalables',
            text: 'Creamos soluciones flexibles que crecen con tu negocio, permitiéndote empezar con pocos usuarios y funcionalidades, ampliándose a medida que lo necesites.',
          },
        ].map((service, index) => (
          <div className="col-md-4" key={index}>
            <Card className="h-100 text-center p-4">
              <Card.Body>
                <i className={`bi ${service.icon} service-icon`}></i>
                <Card.Title className="h4 mb-3 text-logica-green">{service.title}</Card.Title>
                <Card.Text className="text-white">{service.text}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <div className="divider2"></div>

      {/* Sección "Por qué elegirnos" */}
      <section className="py-5 bg-dark-separator section-spacing">
        <h2 className="h3 text-center text-white mb-4">¿Por qué elegirnos?</h2>
        <div className="row text-center">
          {[
            { title: 'Experiencia', text: 'Más de 10 años en desarrollo de software, aplicaciones web y soluciones digitales.' },
            { title: 'Optimización', text: 'Diseñamos sistemas eficientes y personalizables para mejorar la productividad de empresas e iglesias.' },
            { title: 'Soporte Continuo', text: 'Brindamos mantenimiento, actualizaciones y mejoras constantes en todos nuestros proyectos.' },
          ].map((item, index) => (
            <div className="col-md-4" key={index}>
              <h4 className="text-logica-green">{item.title}</h4>
              <p className="text-white">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider2"></div>

      {/* Sección Tecnologías con Carrusel */}
      <TechCarousel />

      <div className="divider2"></div>

      {/* Llamado a la Acción */}
      <section className="text-center py-5" id="contacto">
        <h2 className="h3 mb-4 text-white">¿Listo para dar el siguiente paso?</h2>
        <p className="mb-4 text-white">
          Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
        </p>
        <a href="contacto" className="btn btn-logica btn-lg">Contáctanos Ahora</a>
      </section>
    </Container>
  );
}

export default Servicios;
