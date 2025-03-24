import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import TechCarousel from '../TechCarousel';
import BlinkingCursor from '../BlinkingCursor';


function Home() {
  return (
    <>
      {/* SEO Schema JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Lógica",
          "url": "https://weblogica.cl",
          "logo": "https://weblogica.cl/logica.png",
          "description": "Empresa de desarrollo web, software, apps móviles, marketing digital y soluciones en la nube en Chile.",
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

      <Container className="flex-grow-1 py-5">
        {/* 🟢 Hero SEO Optimizado */}
        <header className="text-center mb-5">
          <div style={{ marginTop: '80px' }}></div>
          <h1 className="main-title">Desarrollo Web, Software y Marketing Digital en Chile</h1>
          <p className="lead text-white-50 mt-3 px-3">
            En <strong>Lógica</strong> desarrollamos soluciones de software a medida, apps móviles y sistemas web eficientes.  
            Combinamos innovación, experiencia y tecnología para ayudarte a escalar tu negocio.
          </p>
        </header>

        {/* 🟢 Servicios */}
        <section aria-label="Servicios profesionales de desarrollo" className="services-section bg-dark-separator py-8">
          <div className="container">
            <h2 className="h3 text-center text-white mb-4">Nuestros Servicios</h2>
            <div className="row g-4">
              {[
                {
                  icon: 'bi-code-square',
                  title: 'Desarrollo Web',
                  text: 'Sitios web modernos y aplicaciones web que destacan tu marca en el mundo digital.',
                },
                {
                  icon: 'bi-phone',
                  title: 'Apps Móviles',
                  text: 'Aplicaciones nativas y multiplataforma que conectan con tus usuarios donde estén.',
                },
                {
                  icon: 'bi-gear',
                  title: 'Software a Medida',
                  text: 'Soluciones personalizadas que optimizan tus procesos y aumentan tu productividad.',
                },
              ].map((service, index) => (
                <div className="col-md-4 card-wrapper" key={index}>
                  <Card className="h-100 bg-card text-center p-4">
                    <Card.Body className="d-flex flex-column">
                      <div className="service-icon mb-3">
                      <i className={`bi ${service.icon} service-icon`}></i>

                      </div>
                      <Card.Title className="h4 mb-3 text-logica-green">{service.title}</Card.Title>
                      <Card.Text className="text-white">{service.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider2"></div>

        {/* 🟢 ¿Por qué elegirnos? */}
        <section className="py-5">
          <div className="container">
            <div className="bg-dark-separator">
              <h2 className="h3 text-center text-white mb-5 pt-4">¿Por qué elegir Lógica?</h2>
              <div className="row g-5 why-choose-section">
                {[
                  {
                    icon: 'laptop',
                    title: 'Experiencia',
                    text: 'Más de 3 años desarrollando soluciones con tecnologías modernas e IA para optimizar procesos empresariales.',
                  },
                  {
                    icon: 'shield-check',
                    title: 'Seguridad',
                    text: 'Aplicamos buenas prácticas en ciberseguridad y desarrollo seguro. Protegemos tus datos en todo momento.',
                  },
                  {
                    icon: 'maximize-2',
                    title: 'Escalabilidad',
                    text: 'Diseñamos soluciones modulares que crecen contigo, adaptándose a nuevos desafíos de tu empresa.',
                  },
                ].map((item, index) => (
                  <div className="col-md-4 card-wrapper px-6" key={index}>
                    <div className="why-choose-item text-center bg-card p-4 shadow rounded h-100 d-flex flex-column justify-content-between">
                      <h4 className="text-logica-green d-flex align-items-center justify-content-center">
                      <i className={`bi bi-${item.icon} me-2`}></i>

                        {item.title}
                      </h4>
                      <p className="mt-2 text-white">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="divider2"></div>

        {/* 🟢 Proyectos */}
        <section className="projects-section bg-dark-separator py-8">
          <div className="container py-4">
            <h2 className="h3 text-center text-white section-title mb-6">Proyectos Realizados</h2>
            <div className="row g-5">
              {[
                {
                  img: '/webs/i360.png',
                  title: 'Control de Activos',
                  desc: 'Sistema para registrar y monitorear activos físicos como herramientas, vehículos y equipos.',
                  tech: ['C#', 'Bootstrap', 'SQL Server'],
                                    github: 'https://github.com/cristiangodoyangel/Inventario360',
                },
                {
                  img: '/webs/drpcgamer.png',
                  title: 'Sistema de reserva',
                  desc: 'Sistema de agendamiento técnico integrado con WhatsApp para Dr. PC Gamer.',
                  tech: ['Java', 'Spring Boot', 'Thymeleaf'],
                  link: 'https://drpcgamer.vercel.app',
                  github: 'https://github.com/cristiangodoyangel/DrPcGamer',
                },
                {
                  img: '/webs/motors360.png',
                  title: 'Motors360',
                  desc: 'Página web para empresa de alquiler de vehículos y equipamiento minero.',
                  tech: ['PHP', 'CSS', 'HTML'],
                  link: 'https://www.motors360.cl',
                  
                },
              ].map((project, index) => (
                <div className="col-md-4" key={index}>
                  <div className="project-card p-4">
                    <img src={project.img} alt={project.title} className="project-image" />
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.desc}</p>
                    <div className="project-tech d-flex gap-2 mb-3">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="badge bg-logica-green">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links d-flex gap-3">
                      <a href={project.link} className="project-link text-white-50" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-globe me-1"></i> Link
                      </a>
                      <a href={project.github} className="project-link text-white-50" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github me-1"></i> Código
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider2"></div>

        {/* 🟢 CTA Contacto */}
        <section className="contact-section bg-dark-separator py-8">
          <div className="container text-center">
            <div className="logo-container mb-4">
              <img src="/logica.png" height="130" alt="Logica Logo Grande" className="mb-4" />
            </div>
            <h2 className="h3 text-white mb-3">¿Listo para dar el siguiente paso?</h2>
            <p className="text-white-50 mb-5">Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.</p>
            <a href="/contacto" className="btn btn-contact-cta">
              Contáctanos Ahora
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="ms-2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </section>

        <div className="divider2"></div>

        {/* 🟢 Carrusel de tecnologías */}
        <TechCarousel />

        <div className="divider2"></div>
      </Container>
    </>
  );
}

export default Home;