import React, { useState, useEffect } from 'react';
import '@splinetool/viewer';

const SplineLandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Typical mobile breakpoint
    };

    // Check on initial load
    checkMobile();

    // Add event listener to check on resize
    window.addEventListener('resize', checkMobile);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  window.onload = function () {
         var loGo = document.querySelector('spline-viewer').logo;
         loGo.querySelector('#logo').remove();
     }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background - Conditional Rendering */}
      {isMobile ? (
        // Mobile Background Image
        <img 
          src="/api/placeholder/1000/1600" 
          alt="Mobile Background" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      ) : (
        // Desktop Spline 3D Model Background
        <spline-viewer 
          url="https://prod.spline.design/rEYeQlhU4iwNxgl0/scene.splinecode" 
          className="absolute inset-0 w-full h-full z-0"
        />
      )}
z
      


    </div>
  );
};

export default SplineLandingPage;