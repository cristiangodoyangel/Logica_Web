import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import TechCarousel from '../TechCarousel';

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
      <section className="py-5 bg-dark-separator section-spacing">
        <h2 className="h3 text-center text-white mb-4">¿Por qué elegirnos?</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <h4 className="text-logica-green">Experiencia</h4>
            <p className="text-white">Más de 4 años en desarrollo web, móvil y software.</p>
          </div>
          <div className="col-md-4">
            <h4 className="text-logica-green">Seguridad</h4>
            <p className="text-white">Implementamos las mejores prácticas en ciberseguridad.</p>
          </div>
          <div className="col-md-4">
            <h4 className="text-logica-green">Escalabilidad</h4>
            <p className="text-white">Soluciones pensadas para crecer con tu negocio.</p>
          </div>
        </div>
      </section>

      {/* Sección de Mockups */}
      <section className="mockup-container">
        <h2 className="mockup-title">Proyectos Realizados</h2>
        <div className="mockup-wrapper">
          <div className="mockup">
            <img src="/webs/m360.png" alt="www.motors360.cl" />
            <div className="mockup-info">
              <h5>Motors 360</h5>
              <p>Plataforma de compra y venta de vehículos con integración a sistemas de cotización.</p>
            </div>
          </div>
          <div className="mockup">
            <img src="/webs/pmt.png" alt="www.pmtintegra.cl" />
            <div className="mockup-info">
              <h5>PMT Integra</h5>
              <p>Solución para gestión y mantenimiento de flotas industriales y servicios integrales.</p>
            </div>
          </div>
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
        <Button variant="logica" size="lg">Contáctanos Ahora</Button>
      </section>
    </Container>
  );
}

export default Home;
