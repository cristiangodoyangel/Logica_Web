import React from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="back-button-container">
      <Button 
        variant="outline-light" 
        size="sm" 
        className="btn-volver" 
        onClick={() => navigate("/")}
      >
        <FaArrowLeft className="me-2" /> Volver al Home
      </Button>
    </div>
  );
}

export default BackButton;
