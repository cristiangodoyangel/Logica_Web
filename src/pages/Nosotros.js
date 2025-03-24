import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

function Nosotros() {
  return (
    <div className="main-content">
      <Helmet>
        <title>Sobre Nosotros | Lógica - Desarrollo de Software en Chile</title>
        <meta 
          name="description" 
          content="Conoce a Lógica: expertos en desarrollo de software, inteligencia artificial e innovación digital. Creamos soluciones tecnológicas para empresas en Chile." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Lógica",
            "url": "https://weblogica.cl",
            "logo": "https://weblogica.cl/logica.png",
            "description": "Empresa de desarrollo de software, inteligencia artificial, infraestructura en la nube y automatización digital en Chile.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Antofagasta",
              "addressCountry": "CL"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+56 9 1234 5678",
              "contactType": "customer support",
              "availableLanguage": ["Spanish"]
            }
          })}
        </script>
      </Helmet>

      <Container>
        <section className="page-section">
          {/* 🟢 Introducción */}
          <section className="text-center mb-5">
            <h1 className="h2 text-white mb-4">Sobre Nosotros</h1>
            <p className="lead text-white-50">
              En <span className="text-logica-green">Lógica</span> transformamos ideas en soluciones digitales de alto impacto. 
              Nos especializamos en desarrollo de software, integración de IA, infraestructura en la nube y optimización empresarial.
              Ayudamos a empresas a crecer e innovar con tecnología.
            </p>
          </section>

          <div className="divider2"></div>

          {/* 🟢 Historia */}
          <section className="mb-5">
            <h2 className="h3 text-white mb-4">Nuestra Historia</h2>
            <div className="timeline bg-card p-4 rounded">
              {[
                {
                  year: "2021",
                  content: "Iniciamos desarrollando sitios web en PHP y MySQL, creando soluciones para pequeñas empresas y comercios electrónicos."
                },
                {
                  year: "2023",
                  content: "Adoptamos tecnologías modernas como .NET, Java y React. Creamos software empresarial, apps móviles y soluciones en la nube."
                },
                {
                  year: "2024",
                  content: <>
                    Completamos formación en <strong>Oracle Next Education</strong> con especialización en <strong>Backend Java</strong>.
                    <p className="mt-2">
                      Ver certificaciones en <a href="https://www.linkedin.com/in/cristian-godoy-angel/details/certifications/" target="_blank" rel="noopener noreferrer" className="text-logica-green">LinkedIn</a>.
                    </p>
                  </>
                },
                {
                  year: "2024",
                  content: "Desarrollamos Inventario360 y comenzamos la integración de inteligencia artificial en soluciones educativas."
                },
                {
                  year: "2025",
                  content: "Nace Lógica, una plataforma para ayudar a empresas en desarrollo de marca, automatización y transformación digital."
                }
              ].map((item, index) => (
                <div key={index} className="timeline-item bg-dark-separator mb-4 p-4 rounded">
                  <h3 className="text-logica-green">{item.year}</h3>
                  <div className="timeline-content">
                    <p className="text-white-50 mb-0">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="divider2"></div>

          {/* 🟢 Filosofía */}
          <section className="mb-5">
            <h2 className="h3 text-center text-white mb-4">Nuestra Filosofía</h2>
            <Row className="g-4">
              {[
                {
                  title: "Misión",
                  content: "Impulsar la transformación digital a través de soluciones eficientes, seguras y personalizadas."
                },
                {
                  title: "Visión",
                  content: "Ser referentes en Chile y Latinoamérica en desarrollo de software e inteligencia artificial aplicada."
                },
                {
                  title: "Valores",
                  content: "Innovación, compromiso, excelencia, ética profesional, colaboración y pasión por la tecnología."
                }
              ].map((item, index) => (
                <Col md={4} key={index}>
                  <Card className="bg-card h-100">
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

          {/* 🟢 Equipo */}
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
                  skills: "Experto en C#, Flutter, React, MySQL y MongoDB."
                }
              ].map((member, index) => (
                <Col md={4} key={index}>
                  <Card className="bg-dark-separator h-100">
                    <Card.Img variant="top" src={member.img} className="team-img" alt={`Foto de ${member.name}`} />
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

          <div className="divider2"></div>
        </section>
      </Container>
    </div>
  );
}

export default Nosotros;
