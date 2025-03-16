import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Nosotros.css';

const Nosotros = () => {
  return (
    <div className="bg-dark-logica text-white py-5">
      <Container>
        {/* Introducción */}
        <section className="text-center mb-5">
          <h1 className="main-title">Sobre Nosotros</h1>
          <p className="lead">
            En <span className="text-logica-green">LOGICA</span>, transformamos ideas en soluciones digitales con innovación y pasión.
            Nuestra misión es proporcionar software de alta calidad que impulse el crecimiento de nuestros clientes.
          </p>
        </section>

        <div className="divider2"></div>

        {/* Historia */}
        <section className="mb-5">
          <h2 className="h3 text-center text-white mb-4">Nuestra Historia</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>2021</h4>
                <p>Fundamos LOGICA con el objetivo de crear software innovador para pequeñas y medianas empresas.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>2022</h4>
                <p>Ampliamos nuestro equipo y comenzamos a desarrollar aplicaciones móviles y soluciones en la nube.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>2023</h4>
                <p>Lanzamos nuestra plataforma de inteligencia artificial aplicada a la educación y al sector empresarial.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>2024</h4>
                <p>Seguimos creciendo y consolidándonos como líderes en desarrollo de software a medida.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider2"></div>

        {/* Misión, Visión y Valores */}
        <section className="mb-5">
          <h2 className="h3 text-center text-white mb-4">Nuestra Filosofía</h2>
          <Row className="text-center">
            <Col md={4}>
              <Card className="info-card">
                <Card.Body>
                  <h4 className="text-logica-green">Misión</h4>
                  <p>Desarrollar soluciones tecnológicas innovadoras que impulsen el éxito de nuestros clientes.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="info-card">
                <Card.Body>
                  <h4 className="text-logica-green">Visión</h4>
                  <p>Ser una empresa líder en desarrollo de software, reconocida por nuestra calidad e innovación.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="info-card">
                <Card.Body>
                  <h4 className="text-logica-green">Valores</h4>
                  <p>Compromiso, transparencia, innovación y pasión por la tecnología.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <div className="divider2"></div>

        {/* Nuestro equipo */}
        <section className="mb-5">
          <h2 className="h3 text-center text-white mb-4">Nuestro Equipo</h2>
          <Row className="text-center">
            <Col md={4}>
              <Card className="team-card">
                <Card.Img variant="top" src="/equipo/ceo.jpg" className="team-img" />
                <Card.Body>
                  <h5 className="text-logica-green">Cristian Godoy</h5>
                  <p>CEO & Full Stack Developer</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="team-card">
                <Card.Img variant="top" src="/equipo/desarrollador.jpg" className="team-img" />
                <Card.Body>
                  <h5 className="text-logica-green">Victor Alcayaga</h5>
                  <p>Desarrollador Backend</p>
                </Card.Body>
              </Card>
            </Col>
           
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Nosotros;
