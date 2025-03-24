import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer py-4 mt-auto">
      <Container>
        <div className="social-links text-center mb-3">
          <a href="https://www.linkedin.com/company/webl%C3%B3gica" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
        </div>
        <p className="text-center mb-0">
          {new Date().getFullYear()} Lógica - Todos los derechos reservados
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
