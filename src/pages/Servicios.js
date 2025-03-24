import React from 'react';
import { Container, Card } from 'react-bootstrap';
import TechCarousel from '../TechCarousel';

function Servicios() {
  return (
    <>
      {/* Schema SEO JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Lógica",
          "url": "https://weblogica.cl",
          "logo": "https://weblogica.cl/logica.png",
          "description": "Lógica es una empresa chilena que ofrece desarrollo web, aplicaciones móviles, software a medida, SEO y servicios en la nube.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Antofagasta",
            "addressCountry": "CL"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+56 9 1234 5678",
            "contactType": "Customer Service",
            "availableLanguage": ["Spanish"]
          },
          "sameAs": [
            "https://www.linkedin.com/company/logicanet"
          ]
        })}
      </script>

      <Container className="flex-grow-1 py-5">
      <div style={{ marginTop: '80px' }}></div>
        <h1
          className="h1 text-center text-white mb-3"
          style={{ paddingTop: '2rem', scrollMarginTop: '100px' }}
        >
          Servicios de Desarrollo Web, Software, Apps y Marketing Digital en Chile
        </h1>

        <p className="lead text-center text-white-50 mb-5" style={{ color: 'rgba(255,255,255,0.85)' }}>
          En <strong>Lógica</strong> ofrecemos soluciones digitales a medida para empresas que buscan destacar online.  
          Desde desarrollo de software hasta posicionamiento SEO, adaptamos la tecnología a tus objetivos de negocio.
        </p>

        {/* Sección de Servicios */}
        <section aria-label="Servicios digitales ofrecidos por Lógica" className="pb-5">
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
                <Card className="h-100 text-center p-4 bg-card">
                  <Card.Body>
                    <i className={`bi ${service.icon} service-icon`}></i>
                    <Card.Title className="h4 mb-3 text-logica-green">{service.title}</Card.Title>
                    <Card.Text className="text-white">{service.text}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </section>

        <div className="divider2"></div>

        {/* Sección "Por qué elegirnos" */}
        <section className="py-4 bg-dark-separator">
          <div className="container">
            <h2 className="h3 text-center text-white mb-4">¿Por qué elegir Lógica?</h2>

            <div className="row justify-content-center why-choose-section g-4">
              <div className="col-md-4">
                <div className="why-choose-item text-center">
                  <h4 className="text-logica-green d-flex align-items-center justify-content-center">
                    <i className="bi bi-laptop me-2"></i>
                    Experiencia
                  </h4>
                  <p className="mt-2 text-white">
                    Más de 3 años desarrollando soluciones tecnológicas innovadoras.  
                    Nos especializamos en tecnologías web modernas e inteligencia artificial para optimizar procesos empresariales.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="why-choose-item text-center">
                  <h4 className="text-logica-green d-flex align-items-center justify-content-center">
                    <i className="bi bi-shield-check me-2"></i>
                    Seguridad
                  </h4>
                  <p className="mt-2 text-white">
                    Implementamos las mejores prácticas en ciberseguridad y desarrollo seguro.  
                    Protegemos tus datos y garantizamos la integridad de tus sistemas empresariales.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="why-choose-item text-center">
                  <h4 className="text-logica-green d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrows-fullscreen me-2"></i>
                    Escalabilidad
                  </h4>
                  <p className="mt-2 text-white">
                    Diseñamos arquitecturas flexibles y modulares que evolucionan con tu negocio.  
                    Nuestras soluciones se adaptan al crecimiento y nuevos requerimientos.
                  </p>
                </div>
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
            <p className="text-white-50 mb-5">
              Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
            </p>
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
    </>
  );
}

export default Servicios;
