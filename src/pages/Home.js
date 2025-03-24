import React from 'react';
import { Container, Card } from 'react-bootstrap';
import TechCarousel from '../TechCarousel';
import BlinkingCursor from '../BlinkingCursor';

function Home() {
  return (
    <Container className="flex-grow-1 py-5">
      {/* Hero Section */}
      <header className="text-center mb-5">
        
        <h1 className="main-title">Innovación y Desarrollo</h1>
      </header>

      {/* Sección de Servicios */}
      <section className="services-section bg-dark-separator py-8">
        <div className="container">
          
          <h2 className="h3 text-center text-white mb-4">Nuestros Servicios</h2>
          <div className="row g-4">
            <div className="col-md-4 card-wrapper">
              <Card className="h-100 bg-card text-center p-4">
                <Card.Body className="d-flex flex-column">
                  <div className="service-icon mb-3">
                    <i className="bi bi-code-square service-icon"></i>
                  </div>
                  <Card.Title className="h4 mb-3 text-logica-green">Desarrollo Web</Card.Title>
                  <Card.Text className="text-white">
                    Sitios web modernos y aplicaciones web que destacan tu marca en el mundo digital.
                  </Card.Text>
                </Card.Body>
              </Card>
              <div className="vertical-divider"></div>
            </div>

            <div className="col-md-4 card-wrapper">
              <Card className="h-100 bg-card text-center p-4">
                <Card.Body className="d-flex flex-column">
                  <div className="service-icon mb-3">
                    <i className="bi bi-phone service-icon"></i>
                  </div>
                  <Card.Title className="h4 mb-3 text-logica-green">Apps Móviles</Card.Title>
                  <Card.Text className="text-white">
                    Aplicaciones nativas y multiplataforma que conectan con tus usuarios donde estén.
                  </Card.Text>
                </Card.Body>
              </Card>
              <div className="vertical-divider"></div>
            </div>

            <div className="col-md-4 card-wrapper">
              <Card className="h-100 bg-card text-center p-4">
                <Card.Body className="d-flex flex-column">
                  <div className="service-icon mb-3">
                    <i className="bi bi-gear service-icon"></i>
                  </div>
                  <Card.Title className="h4 mb-3 text-logica-green">Software a Medida</Card.Title>
                  <Card.Text className="text-white">
                    Soluciones personalizadas que optimizan tus procesos y aumentan tu productividad.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="divider2"></div>

      {/* Sección "Por qué elegirnos" */}
      <section className="py-5">
        <div className="container">
          
          
          <div className="bg-dark-separator">
          <h2 className="h3 text-center text-white mb-5 pt-4">¿Por qué elegir Lógica?</h2>
            <div className="row g-5 why-choose-section">
              <div className="col-md-4 card-wrapper px-6">
                <div className="why-choose-item text-center">
                  <h4 className="text-logica-green d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d9151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop me-2">
                      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>
                    </svg> 
                    Experiencia
                  </h4>
                  <p className="mt-2 text-white">
                    Más de 3 años desarrollando soluciones. Especialistas en tecnologías web modernas e inteligencia artificial para optimizar procesos empresariales.
                  </p>
                </div>
                <div className="vertical-divider"></div>
              </div>

              <div className="col-md-4 card-wrapper px-6">
                <div className="why-choose-item text-center">
                  <h4 className="text-logica-green d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d9151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check me-2">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg> 
                    Seguridad
                  </h4>
                  <p className="mt-2 text-white">
                    Implementamos las mejores prácticas en ciberseguridad y desarrollo seguro. Protegemos tus datos y garantizamos la integridad de tus sistemas empresariales.
                  </p>
                </div>
                <div className="vertical-divider"></div>
              </div>

              <div className="col-md-4 card-wrapper px-6">
                <div className="why-choose-item text-center">
                  <h4 className="text-logica-green d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d9151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-maximize-2 me-2">
                      <polyline points="15 3 21 3 21 9"/>
                      <polyline points="9 21 3 21 3 15"/>
                      <line x1="21" x2="14" y1="3" y2="10"/>
                      <line x1="3" x2="10" y1="21" y2="14"/>
                    </svg> 
                    Escalabilidad
                  </h4>
                  <p className="mt-2 text-white">
                    Diseñamos arquitecturas flexibles y modulares que evolucionan con tu negocio. Nuestras soluciones se adaptan al crecimiento y nuevos requerimientos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider2"></div>

           {/* Sección de Proyectos */}
      <section className="projects-section bg-dark-separator py-8">
        <div className="container py-4">
          <h2 className="h3 text-center text-white section-title mb-6">Proyectos Realizados</h2>
          <div className="row g-5">
            <div className="col-md-4">
              <div className="project-card p-4">
                <img 
                  src="/webs/m360.png" 
                  alt="Motors 360" 
                  className="project-image"
                />
                <h3 className="project-title">Motors 360</h3>
                <p className="project-description">
                  Página web para empresa del rubro del equipamiento para la gran minería. Diseño responsivo y moderno que destaca la calidad de sus servicios.
                </p>
                <div className="project-tech d-flex gap-2">
                  <span className="badge bg-logica-green">React</span>
                  <span className="badge bg-logica-green">Bootstrap</span>
                  <span className="badge bg-logica-green">Node.js</span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="project-card p-4">
                <img 
                  src="/webs/pmt.png" 
                  alt="PMT Integra" 
                  className="project-image"
                />
                <h3 className="project-title">PMT Integra</h3>
                <p className="project-description">
                  Página web corporativa y brochure digital. Optimización SEO y diseño enfocado en mejorar la visibilidad en la industria minera.
                </p>
                <div className="project-tech d-flex gap-2">
                  <span className="badge bg-logica-green">Next.js</span>
                  <span className="badge bg-logica-green">Tailwind</span>
                  <span className="badge bg-logica-green">SEO</span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="project-card p-4">
                <img 
                  src="/webs/app.png" 
                  alt="Gestión de Activos" 
                  className="project-image"
                />
                <h3 className="project-title">Gestión de Activos</h3>
                <p className="project-description">
                  Aplicación web para el manejo eficiente de activos empresariales en tiempo real. Sistema completo con dashboard y reportes.
                </p>
                <div className="project-tech d-flex gap-2">
                  <span className="badge bg-logica-green">Vue.js</span>
                  <span className="badge bg-logica-green">Express</span>
                  <span className="badge bg-logica-green">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <div className="divider2"></div>

      {/* Sección Tecnologías con Carrusel */}
      <TechCarousel />

      <div className="divider2"></div>

    </Container>
  );
}

export default Home;
