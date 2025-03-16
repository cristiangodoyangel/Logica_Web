import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contacto() {
  return (
    <Container className="flex-grow-1 py-5">
      <h2 className="h3 text-center text-white mb-4">Contáctanos</h2>
      <Form className="text-white">
        <Form.Group controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>
        <Form.Group controlId="email" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email" />
        </Form.Group>
        <Form.Group controlId="mensaje" className="mt-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje" />
        </Form.Group>
        <Button variant="logica" size="lg" className="mt-3">Enviar Mensaje</Button>
      </Form>
    </Container>
  );
}

export default Contacto;
