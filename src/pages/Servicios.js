import React from 'react';
import { Container, Card } from 'react-bootstrap';
import TechCarousel from '../TechCarousel';

function Servicios() {
  return (
    
    <Container className="flex-grow-1 py-5">
      
      <h1 className="h2 text-center text-white mb-4">Nuestros Servicios</h1>
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
      <section className="py-4 bg-dark-separator">
        <div className="container bg-dark-separator">
          <h2 className="h3 text-center text-white mb-3">¿Por qué elegir Lógica?</h2>
          
          <div className="row justify-content-center why-choose-section px-4">
            <div className="col-md-4 why-choose-item text-center">
              <h4 className="text-logica-green d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d9151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop me-2">
                  <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>
                </svg> 
                Experiencia
              </h4>
              <p className="mt-2 text-white">Más de 3 años desarrollando soluciones tecnológicas innovadoras. Nos especializamos en tecnologías web modernas e inteligencia artificial para optimizar procesos empresariales.</p>
            </div>

            <div className="col-md-4 why-choose-item text-center">
              <h4 className="text-logica-green d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d9151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check me-2">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg> 
                Seguridad
              </h4>
              <p className="mt-2 text-white">Implementamos las mejores prácticas en ciberseguridad y desarrollo seguro. Protegemos tus datos y garantizamos la integridad de tus sistemas empresariales.</p>
            </div>

            <div className="col-md-4 why-choose-item text-center">
              <h4 className="text-logica-green d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d9151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-maximize-2 me-2">
                  <polyline points="15 3 21 3 21 9"/>
                  <polyline points="9 21 3 21 3 15"/>
                  <line x1="21" x2="14" y1="3" y2="10"/>
                  <line x1="3" x2="10" y1="21" y2="14"/>
                </svg> 
                Escalabilidad
              </h4>
              <p className="mt-2 text-white">Diseñamos arquitecturas flexibles y modulares que evolucionan con tu negocio. Nuestras soluciones se adaptan al crecimiento y nuevos requerimientos.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="divider2"></div>

      {/* Sección Tecnologías con Carrusel */}
      <TechCarousel />

      <div className="divider2"></div>

            {/* Sección de Contacto */}
            <section className="contact-section bg-dark-separator py-8">
        <div className="container text-center">
          <div className="logo-container mb-4">
          <img src="/logica.png" height="130" alt="Logica Logo Grande" className="mb-4" />
          </div>
          <h2 className="h3 text-white mb-3">¿Listo para dar el siguiente paso?</h2>
          <p className="text-white-50 mb-5">Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.</p>
          <a href="/contacto" className="btn btn-contact-cta">
            Contáctanos Ahora
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ms-2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </section>
    </Container>
  );
}

export default Servicios;
