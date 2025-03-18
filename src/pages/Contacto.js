import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Modal } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import '../styles/Contacto.css';

function Contacto() {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/cristian@weblogica.cl', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        event.target.reset();
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="contacto-section py-5">
        <Container>
          <h2 className="h3 text-center text-white mb-4">Contáctanos</h2>

          <Row className="justify-content-center">
            {/* Información de contacto */}
            <Col md={5} className="mb-4">
              <Card className="contact-card">
                <Card.Body>
                  <h4 className="text-logica-green text-center mb-4">Información de Contacto</h4>
                  <p><FaEnvelope className="icon" /> Email: <a href="mailto:cristian@weblogica.cl" className="text-white">cristian@weblogica.cl</a></p>
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
                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://weblogica.cl" />
                    
                    <div className="mb-3">
                      <label htmlFor="nombre" className="form-label">Nombre</label>
                      <input 
                        type="text" 
                        className="form-control input-custom" 
                        id="nombre"
                        name="nombre"
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
                      <label htmlFor="mensaje" className="form-label">Mensaje</label>
                      <textarea 
                        className="form-control input-custom" 
                        id="mensaje"
                        name="mensaje"
                        rows="3"
                        required
                      ></textarea>
                    </div>

                    <Button 
                      variant="logica" 
                      size="lg" 
                      type="submit" 
                      className="w-100"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                    </Button>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="divider2"></div>
        </Container>
      </div>

      {/* Modal de confirmación */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        centered 
        dialogClassName="modal-dark"
        size="sm"
      >
        <Modal.Header closeButton className="bg-dark">
          <Modal.Title className="text-white h5">¡Mensaje Enviado!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <p className="mb-0">Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.</p>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="logica" size="sm" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Contacto;
