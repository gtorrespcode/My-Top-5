import DesktopApp from "./DesktopApp"
import React, { useState, useEffect } from 'react';
import MobileWarning from "./MobileWarning";

const App = () => {
    const [isDesktop, setIsDesktop] = useState(true);
  
    useEffect(() => {
      const updateMediaQuery = () => {
        setIsDesktop(window.matchMedia('(min-width: 768px)').matches);
      };
  
      updateMediaQuery(); // Atualiza o estado inicial
  
      window.addEventListener('resize', updateMediaQuery);
  
      return () => {
        window.removeEventListener('resize', updateMediaQuery);
      };
    }, []);
  
    return (
      <>
        {isDesktop ? <DesktopApp /> : <MobileWarning />}
      </>
    );
  };

export default App;
