import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Navbar, Nav, Button, Card } from 'react-bootstrap';
import TechCarousel from './TechCarousel';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column bg-dark-logica">
        {/* Navbar - Ahora fuera de las rutas y con fixed="top" */}
        <Navbar variant="dark" expand="lg" className="navbar-custom" fixed="top">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src="/logica.png" height="40" className="me-2" alt="Logica Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
                <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
                <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        {/* Contenedor principal con padding-top para compensar el navbar fijo */}
        <div className="main-content pt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
