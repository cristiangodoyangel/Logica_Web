import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import ReCAPTCHA from "react-google-recaptcha";

function Contacto() {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!captchaValue) {
      setModalMessage('Por favor, completa el captcha');
      setShowModal(true);
      return;
    }

    setIsLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formsubmit.co/cristian@weblogica.cl', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setModalMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
        e.target.reset();
        setCaptchaValue(null);
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      setModalMessage('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
      setShowModal(true);
    }
  };

  return (
    <div className="main-content">
      <Container>
        <div className="divider2"></div>
        <section className="page-section">
          <div className="container">
            <h2 className="h3 text-center text-white mb-4">Contáctanos</h2>

            <Row className="justify-content-center">
              {/* Información de contacto */}
              <Col md={5} className="mb-4">
                <Card className="contact-card h-100">
                  <Card.Body className="d-flex flex-column">
                    <h4 className="text-logica-green text-center mb-4">Información de Contacto</h4>
                    <div className="contact-info">
                      <a href="mailto:cristian@weblogica.cl" className="contact-link">
                        <FaEnvelope className="icon" /> cristian@weblogica.cl
                      </a>
                      <a href="tel:+56957209793" className="contact-link">
                        <FaPhoneAlt className="icon" /> +56 9 5720 9793
                      </a>
                      <a href="https://wa.me/56957209793" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaWhatsapp className="icon" /> +56 9 5720 9793
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Formulario de contacto */}
              <Col md={6}>
                <Card className="contact-card">
                  <Card.Body>
                    <h4 className="text-logica-green text-center mb-4">Déjanos un mensaje</h4>
                    <form action="https://formsubmit.co/cristian@weblogica.cl" method="POST">
                      <input type="hidden" name="_captcha" value="true" />
                      <input type="hidden" name="_next" value="https://weblogica.cl/gracias" />
                      <input type="hidden" name="_subject" value="Nuevo mensaje desde el sitio web" />
                      <input type="hidden" name="_template" value="table" />
                      
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input 
                          type="text" 
                          className="form-control input-custom" 
                          id="name"
                          name="name"
                          required 
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                          type="email" 
                          className="form-control input-custom" 
                          id="email"
                          name="email"
                          required 
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">Mensaje</label>
                        <textarea 
                          className="form-control input-custom" 
                          id="message"
                          name="message"
                          rows="3"
                          required
                        ></textarea>
                      </div>

                      <div className="mb-3 d-flex justify-content-center">
                        <ReCAPTCHA
                          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                          onChange={value => setCaptchaValue(value)}
                        />
                      </div>

                      <Button 
                        variant="logica" 
                        size="lg" 
                        type="submit" 
                        className="w-100"
                        disabled={isLoading || !captchaValue}
                      >
                        {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                      </Button>
                    </form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </section>
        <div className="divider2"></div>
      </Container>

      {/* Modal de confirmación */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Notificación</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="logica" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Contacto;
