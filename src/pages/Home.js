import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import TechCarousel from '../TechCarousel';
import BlinkingCursor from '../BlinkingCursor';

function Home() {
  return (
    <Container className="flex-grow-1 py-5">
      {/* Hero Section */}
      <header className="text-center mb-5">
        <div className="logo-container mb-4">
          <img src="/logica.png" height="130" alt="Logica Logo Grande" className="mb-4" />
        </div>
        <h1 className="main-title">Innovación y Desarrollo</h1>
      </header>

      {/* Sección de Servicios */}
      <section className="py-5" id="servicios">
        <h2 className="h3 text-center text-white mb-4">Nuestros Servicios</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <Card className="h-100 text-center p-4">
              <Card.Body>
                <i className="bi bi-code-square service-icon"></i>
                <Card.Title className="h4 mb-3 text-logica-green">Desarrollo Web</Card.Title>
                <Card.Text className="text-white">
                  Sitios web modernos y aplicaciones web que destacan tu marca en el mundo digital.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="h-100 text-center p-4">
              <Card.Body>
                <i className="bi bi-phone service-icon"></i>
                <Card.Title className="h4 mb-3 text-logica-green">Apps Móviles</Card.Title>
                <Card.Text className="text-white">
                  Aplicaciones nativas y multiplataforma que conectan con tus usuarios donde estén.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="h-100 text-center p-4">
              <Card.Body>
                <i className="bi bi-gear service-icon"></i>
                <Card.Title className="h4 mb-3 text-logica-green">Software a Medida</Card.Title>
                <Card.Text className="text-white">
                  Soluciones personalizadas que optimizan tus procesos y aumentan tu productividad.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

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

      {/* Sección de Mockups */}
      <section className="mockup-container">
        <h2 className="mockup-title">
          Proyectos_Realizados: <span>   </span> <span style={{ display: 'inline-block' }}><BlinkingCursor /></span>
        </h2>

        <div className="mockup-wrapper">
          <a href="https://www.motors360.cl" target="_blank" rel="noopener noreferrer" className="mockup">
            <img src="/webs/m360.png" alt="www.motors360.cl" />
            <div className="mockup-info">
              <h5>Motors 360</h5>
              <p>Página web para empresa del rubro del equipamiento para la gran minería.</p>
            </div>
          </a>
          <a href="https://www.pmtintegra.cl" target="_blank" rel="noopener noreferrer" className="mockup">
            <img src="/webs/pmt.png" alt="www.pmtintegra.cl" />
            <div className="mockup-info">
              <h5>PMT Integra</h5>
              <p>Pagina web corporativa, brochure y asesoría en rrss de pmt integra, optimización de seo  y visibilidad en la gran minería.</p>
            </div>
          </a>
          <div className="mockup">
            <img src="/webs/app.png" alt="Aplicación Web" />
            <div className="mockup-info">
              <h5>Gestión de Activos</h5>
              <p>Aplicación web para el manejo eficiente de activos empresariales en tiempo real.</p>
            </div>
          </div>
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

export default Home;
