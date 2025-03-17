import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer py-4 mt-auto">
      <Container>
        <div className="social-links text-center mb-3">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/in/cristian-godoy-angel" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
        </div>
        <p className="text-center mb-0">
          © {new Date().getFullYear()} Logica.net - Todos los derechos reservados
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
