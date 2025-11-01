import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';   // ✅ Correct import for React
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const logoRef = useRef(null);
  const screenRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(screenRef.current, { opacity: 0, duration: 0.5, onComplete });
      },
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' }
    ).to(
      logoRef.current,
      { opacity: 0, scale: 1.2, duration: 0.7, ease: 'power2.in' },
      '+=1'
    );
  }, [onComplete]);

  return (
    <div className="loading-screen" ref={screenRef}>
      <div className="loading-logo" ref={logoRef}>
        <h1 className="loading-text">Welcome</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;