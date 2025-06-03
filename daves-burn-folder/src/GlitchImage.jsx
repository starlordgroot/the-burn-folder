import React from 'react';
import './GlitchImage.css';

const GlitchImage = ({ src, alt, size = '100%', intensity = 1, speed = 1, hoverOnly = false }) => {
  return (
    <div
      className={`glitch-container ${hoverOnly ? 'hover-only' : ''}`}
      style={{
        width: size,
        height: 'auto',
        position: 'relative',
      }}
    >
      <img src={src} alt={alt} className="glitch-base" />
      {[...Array(3)].map((_, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`glitch-layer glitch-layer-${i}`}
          style={{
            animationDuration: `${(1 / speed) + i * 0.2}s`,
            mixBlendMode: 'screen',
            opacity: 0.6,
            transform: `translateY(${i * 1}px)`,
            filter: `contrast(120%) brightness(1.2)`,
          }}
        />
      ))}
    </div>
  );
};

export default GlitchImage;