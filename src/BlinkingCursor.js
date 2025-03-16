import React, { useState, useEffect } from 'react';

const BlinkingCursor = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 700); // Parpadea cada 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <span style={{ color: 'limegreen', fontWeight: 'bold', width: '10px', display: 'inline-block', textAlign: 'center' }}>
      {visible ? '_' : ' '}
    </span>
  );
};

export default BlinkingCursor;
