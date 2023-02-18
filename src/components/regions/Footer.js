import React from 'react';
import './Footer.css';

function Footer() {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleMouseMove = React.useCallback((event) => {
    const y = event.clientY;
    const windowHeight = window.innerHeight;
    const threshold = 10;
    setIsVisible(y > windowHeight - threshold);
  }, []);

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <footer className={`footer ${isVisible ? 'is-visible' : ''}`}>
      <p>&copy; {new Date().getFullYear()} My App</p>
    </footer>
  );
}

export default Footer;
