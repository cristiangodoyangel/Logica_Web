import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Navbar, Nav, Button, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark-logica">
      {/* Navbar */}
      <Navbar variant="dark" expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center justify-content-center">
            <img src="/logica.png" height="40" className="me-2" alt="Logica Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#servicios">Servicios</Nav.Link>
              <Nav.Link href="#nosotros">Nosotros</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Container className="flex-grow-1 py-5">
        <header className="text-center mb-5">
          <div className="logo-container mb-4">
            <img src="/logica.png" height="130" alt="Logica Logo Grande" className="mb-4" />
          </div>
          <h1 className="main-title">Innovación y Desarrollo</h1>
          <p className="lead text-white">Transformamos ideas en soluciones digitales.</p>
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

        <div className="divider"></div>

{/* Sección "Por qué elegirnos" */}
<section className="py-5 bg-dark-separator section-spacing">
  <h2 className="h3 text-center text-white mb-4">¿Por qué elegirnos?</h2>
  <div className="row text-center">
    <div className="col-md-4">
      <h4 className="text-logica-green"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#08912a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-smartphone"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"/><path d="M10 19v-3.96 3.15"/><path d="M7 19h5"/><rect width="6" height="10" x="16" y="12" rx="2"/></svg> Experiencia</h4>
      <p className="text-white">Más de 4 años en desarrollo web, móvil y software.</p>
    </div>
    <div className="col-md-4">
      <h4 className="text-logica-green"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#08912a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-lock"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><rect width="8" height="6" x="8" y="12" rx="1"/><path d="M10 12v-2a2 2 0 1 1 4 0v2"/></svg> Seguridad</h4>
      <p className="text-white">Implementamos las mejores prácticas en ciberseguridad.</p>
    </div>
    <div className="col-md-4">
      <h4 className="text-logica-green"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#08912a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M14 15H9v-5"/><path d="M16 3h5v5"/><path d="M21 3 9 15"/></svg> Escalabilidad</h4>
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





{/* Sección Tecnologías */}
<section className="py-5 section-spacing">
  <h2 className="h3 text-center text-white mb-4">Tecnologías que usamos</h2>
  <div className="d-flex justify-content-center gap-4 flex-wrap">
    <img src="/react_logo.svg" height="50" alt="React" />
    <img src="/nodejs.svg" height="50" alt="Node.js" />
    <img src="/java.svg" height="50" alt="Java" />
    <img src="/javascript.svg" height="50" alt="JavaScript" />
  </div>
</section>



        {/* Llamado a la acción */}
        <section className="text-center py-5" id="contacto">
          <h2 className="h3 mb-4 text-white">¿Listo para dar el siguiente paso?</h2>
          <p className="mb-4 text-white">
            Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
          </p>
          <Button variant="logica" size="lg">
            Contáctanos Ahora
          </Button>
        </section>
      </Container>
      <div className="divider"></div>

      {/* Footer */}
      <footer className="py-4 mt-auto border-top border-light border-opacity-10">
        <Container className="text-center">
          <small className="text-white">
            &copy; {new Date().getFullYear()} LÓGICA - Transformando ideas en soluciones digitales
          </small>
        </Container>
      </footer>
    </div>
  );
}

export default App;
