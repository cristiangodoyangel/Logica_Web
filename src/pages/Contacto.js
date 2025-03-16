import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaGithub, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/Contacto.css';

function Contacto() {
  const navigate = useNavigate(); // Para redirigir al home

  return (
    <div className="contacto-section py-5">
      <Container>
        <h2 className="h3 text-center text-white mb-4">Contáctanos</h2>

        <Row className="justify-content-center">
          {/* Información de contacto */}
          <Col md={5} className="mb-4">
            <Card className="contact-card">
              <Card.Body>
                <h4 className="text-logica-green text-center mb-4">Información de Contacto</h4>
                <p><FaEnvelope className="icon" /> Email: <a href="mailto:contacto@logica.net" className="text-white">contacto@logica.net</a></p>
                <p><FaPhoneAlt className="icon" /> Teléfono: <a href="tel:+56957209793" className="text-white">+56 9 5720 9793</a></p>
                <p><FaWhatsapp className="icon" /> WhatsApp: <a href="https://wa.me/56957209793" target="_blank" rel="noopener noreferrer" className="text-white">+ 56 9 5720 9793</a></p>
              </Card.Body>
            </Card>
          </Col>

          {/* Formulario de contacto */}
          <Col md={6}>
            <Card className="contact-card">
              <Card.Body>
                <h4 className="text-logica-green text-center mb-4">Déjanos un mensaje</h4>
                <Form>
                  <Form.Group controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre" className="input-custom" />
                  </Form.Group>

                  <Form.Group controlId="email" className="mt-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email" className="input-custom" />
                  </Form.Group>

                  <Form.Group controlId="mensaje" className="mt-3">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje" className="input-custom" />
                  </Form.Group>

                  <Button variant="logica" size="lg" className="mt-3 w-100">Enviar Mensaje</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Redes Sociales */}
        <div className="social-links text-center mt-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/in/cristian-godoy-angel" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
        </div>

        <div className="divider2"></div>

        {/* Botón Volver al Home */}
        <div className="text-center mt-4">
          <Button variant="outline-light" size="lg" className="btn-volver" onClick={() => navigate("/")}>
            <FaArrowLeft className="me-2" /> Volver al Home
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Contacto;
