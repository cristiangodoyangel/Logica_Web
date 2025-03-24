import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import ReCAPTCHA from "react-google-recaptcha";

function Contacto() {
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!verified) {
      alert('Por favor verifica que no eres un robot');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/cristian@weblogica.cl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'Nuevo contacto - WebLogica',
          _template: 'table'
        })
      });

      if (response.ok) {
        setShowModal(true);
        setFormData({ name: '', email: '', message: '' });
        setVerified(false);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="main-content">
      <Container>
        {/* Modal de confirmación */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton className="bg-dark text-white border-0">
            <Modal.Title>¡Mensaje Enviado!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark text-white">
            <p>Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos a la brevedad.</p>
          </Modal.Body>
          <Modal.Footer className="bg-dark border-0">
            <button className="btn btn-logica" onClick={handleCloseModal}>
              Cerrar
            </button>
          </Modal.Footer>
        </Modal>

        <div className="divider2"></div>
        
        {/* Encabezado */}
        <header className="text-center mb-5">
          <h1 className="display-4 text-white mb-3">¿Listo para innovar?</h1>
          <p className="lead text-white-50">
            Transformamos ideas en soluciones digitales. Cuéntanos sobre tu proyecto.
          </p>
        </header>

        {/* Grid de contacto */}
        <Row className="g-4 mb-5">
          <Col lg={3} md={6}>
            <a href="mailto:cristian@weblogica.cl" className="contact-card-link">
              <div className="contact-card text-center p-4">
                <FaEnvelope className="contact-icon mb-3" />
                <h3 className="h5 text-logica-green">Email</h3>
                <p className="text-white-50 mb-0">cristian@weblogica.cl</p>
              </div>
            </a>
          </Col>
          
          <Col lg={3} md={6}>
            <a href="tel:+56957209793" className="contact-card-link">
              <div className="contact-card text-center p-4">
                <FaPhone className="contact-icon mb-3" />
                <h3 className="h5 text-logica-green">Teléfono</h3>
                <p className="text-white-50 mb-0">+56 9 5720 9793</p>
              </div>
            </a>
          </Col>
          
          <Col lg={3} md={6}>
            <a href="https://wa.me/56957209793" target="_blank" rel="noopener noreferrer" className="contact-card-link">
              <div className="contact-card text-center p-4">
                <FaWhatsapp className="contact-icon mb-3" />
                <h3 className="h5 text-logica-green">WhatsApp</h3>
                <p className="text-white-50 mb-0">+56 9 5720 9793</p>
              </div>
            </a>
          </Col>
          
          <Col lg={3} md={6}>
            <a href="https://www.linkedin.com/company/webl%C3%B3gica" target="_blank" rel="noopener noreferrer" className="contact-card-link">
              <div className="contact-card text-center p-4">
                <FaLinkedin className="contact-icon mb-3" />
                <h3 className="h5 text-logica-green">LinkedIn</h3>
                <p className="text-white-50 mb-0">Conectemos</p>
              </div>
            </a>
          </Col>
        </Row>

        {/* Formulario */}
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="contact-form-wrapper bg-card p-4 rounded-3">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control input-custom"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control input-custom"
                    placeholder="Tu email"
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-control input-custom"
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto"
                  />
                </div>

                <div className="d-flex justify-content-center mb-4">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={() => setVerified(true)}
                    theme="dark"
                  />
                </div>

                <button 
                  type="submit"
                  className="btn btn-logica w-100 py-3"
                  disabled={loading || !verified}
                >
                  {loading ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            </div>
          </Col>
        </Row>

        <div className="divider2"></div>
      </Container>
    </div>
  );
}

export default Contacto;
