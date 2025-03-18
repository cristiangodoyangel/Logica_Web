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
            En <span className="text-logica-green">LÓGICA</span>, transformamos ideas en soluciones digitales de alto impacto.  
            Nos especializamos en desarrollo de software, integración de IA, infraestructura en la nube y optimización empresarial.  
            Nuestra misión es ayudar a empresas e instituciones a innovar y crecer mediante tecnología avanzada.
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
                <p>Comenzamos desarrollando sitios web con PHP y MySQL, adquiriendo experiencia en soluciones empresariales y e-commerce.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>2023</h4>
                <p>Nos especializamos en tecnologías modernas como .NET, Java y React, desarrollando software empresarial, aplicaciones móviles e infraestructura en la nube.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>2024</h4>
                <p>Completamos la formación en <strong>Oracle Next Education (ONE)</strong> con especialización en <strong>Backend Java</strong>, ampliando nuestra experiencia en soluciones escalables y robustas.
                <p className="text-left">
            Puedes ver nuestras certificaciones en nuestro perfil de <a href="https://www.linkedin.com/in/cristian-godoy-angel/details/certifications/" target="_blank" rel="noopener noreferrer" className="text-logica-green">LinkedIn</a>.
          </p></p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>2024</h4>
                <p>Desarrollamos <strong>Inventario360</strong>, un sistema avanzado de gestión de bodegas y logística. También comenzamos la integración de IA en soluciones educativas y empresariales.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>2025</h4>
                <p>Lanzamos <strong>LÓGICA</strong>, una plataforma para ayudar a empresas en innovación, desarrollo de marca, automatización y optimización digital.</p>
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
                  <p>Impulsar la transformación digital de empresas e instituciones a través de software eficiente, seguro e innovador.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="info-card">
                <Card.Body>
                  <h4 className="text-logica-green">Visión</h4>
                  <p>Ser referentes en Chile y Latinoamérica en desarrollo de software, inteligencia artificial e innovación empresarial.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="info-card">
                <Card.Body>
                  <h4 className="text-logica-green">Valores</h4>
                  <p>Innovación, excelencia, compromiso, ética profesional y pasión por la tecnología.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <div className="divider2"></div>

        {/* Nuestro equipo */}
        <section className="mb-5">
          <h2 className="h3 text-center text-white mb-4">Nuestro Equipo</h2>
          <Row className="justify-content-center text-center"> {/* Centrando los cuadros */}
            {[
              { img: "/equipo/ceo.jpg", name: "Cristian Andrés Godoy", role: "Full Stack Developer", skills: "Especialista en .NET, Java, React, SQL Server, AWS y optimización digital." },
              { img: "/equipo/desarrollador.jpg", name: "Victor Alcayaga", role: "Desarrollador Backend", skills: "Especialista en C#, Flutter, JavaScript, React, MySQL, MongoDB, AWS." }
            ].map((team, index) => (
              <Col md={4} key={index} className="d-flex justify-content-center">
                <Card className="team-card">
                  <Card.Img variant="top" src={team.img} className="team-img" />
                  <Card.Body>
                    <h5 className="text-logica-green">{team.name}</h5>
                    <p>{team.role}</p>
                    <p>{team.skills}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Nosotros;
