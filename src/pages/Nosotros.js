import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Nosotros() {
  return (
    <div className="main-content">
      <Container>
        
        
        <section className="page-section">
          <div className="container">
            {/* Introducción */}
            <section className="text-center mb-5">
              <h2 className="h3 text-white mb-4">Sobre Nosotros</h2>
              <p className="lead text-white-50">
                En <span className="text-logica-green">LÓGICA</span>, transformamos ideas en soluciones digitales de alto impacto. 
                Nos especializamos en desarrollo de software, integración de IA, infraestructura en la nube y optimización empresarial. 
                Nuestra misión es ayudar a empresas e instituciones a innovar y crecer mediante tecnología avanzada.
              </p>
            </section>

            <div className="divider2"></div>

            {/* Historia */}
            <section className="mb-5">
                           <div className="timeline bg-dark-separator p-4 rounded">
                {[
                  {
                    year: "2021",
                    content: "Comenzamos desarrollando sitios web con PHP y MySQL, adquiriendo experiencia en soluciones empresariales y e-commerce."
                  },
                  {
                    year: "2023",
                    content: "Nos especializamos en tecnologías modernas como .NET, Java y React, desarrollando software empresarial, aplicaciones móviles e infraestructura en la nube."
                  },
                  {
                    year: "2024",
                    content: <>
                      Completamos la formación en <strong>Oracle Next Education (ONE)</strong> con especialización en <strong>Backend Java</strong>, ampliando nuestra experiencia en soluciones escalables y robustas.
                      <p className="mt-2">
                        Puedes ver nuestras certificaciones en nuestro perfil de <a href="https://www.linkedin.com/in/cristian-godoy-angel/details/certifications/" target="_blank" rel="noopener noreferrer" className="text-logica-green">LinkedIn</a>.
                      </p>
                    </>
                  },
                  {
                    year: "2024",
                    content: "Desarrollamos Inventario360, un sistema avanzado de gestión de bodegas y logística. También comenzamos la integración de IA en soluciones educativas y empresariales."
                  },
                  {
                    year: "2025",
                    content: "Lanzamos LÓGICA, una plataforma para ayudar a empresas en innovación, desarrollo de marca, automatización y optimización digital."
                  }
                ].map((item, index) => (
                  <div key={index} className="timeline-item bg-dark-separator mb-4 p-4 rounded">
                    <h4 className="text-logica-green">{item.year}</h4>
                    <div className="timeline-content">
                      <p className="text-white-50 mb-0">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="divider2"></div>

            {/* Misión, Visión y Valores */}
            <section className="mb-5">
              <h2 className="h3 text-center text-white mb-4">Nuestra Filosofía</h2>
              <Row className="g-4">
                {[
                  {
                    title: "Misión",
                    content: "Impulsar la transformación digital de empresas e instituciones a través de software eficiente, seguro e innovador."
                  },
                  {
                    title: "Visión",
                    content: "Ser referentes en Chile y Latinoamérica en desarrollo de software, inteligencia artificial e innovación empresarial."
                  },
                  {
                    title: "Valores",
                    content: "Innovación, excelencia, compromiso, ética profesional, pasión por la tecnología, transparencia, responsabilidad y colaboración."
                  }
                ].map((item, index) => (
                  <Col md={4} key={index}>
                    <Card className="bg-dark-separator h-100">
                      <Card.Body className="text-center">
                        <h4 className="text-logica-green">{item.title}</h4>
                        <p className="text-white-50 mb-0">{item.content}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </section>

            <div className="divider2"></div>

            {/* Nuestro equipo */}
            <section className="mb-5">
              <h2 className="h3 text-center text-white mb-4">Nuestro Equipo</h2>
              <Row className="justify-content-center g-4">
                {[
                  {
                    img: "/equipo/ceo.jpg",
                    name: "Cristian Andrés Godoy",
                    role: "Full Stack Developer",
                    skills: "Especialista en .NET, Java, React, SQL Server, AWS y optimización digital."
                  },
                  {
                    img: "/equipo/desarrollador.jpg",
                    name: "Victor Alcayaga",
                    role: "Desarrollador Backend",
                    skills: "Especialista en C#, Flutter, JavaScript, React, MySQL, MongoDB, AWS."
                  }
                ].map((member, index) => (
                  <Col md={4} key={index}>
                    <Card className="bg-dark-separator h-100">
                      <Card.Img variant="top" src={member.img} className="team-img" />
                      <Card.Body className="text-center">
                        <h5 className="text-logica-green">{member.name}</h5>
                        <p className="text-white-50 mb-1">{member.role}</p>
                        <p className="text-white-50 small mb-0">{member.skills}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </section>
          </div>
        </section>

        <div className="divider2"></div>
      </Container>
    </div>
  );
}

export default Nosotros;
