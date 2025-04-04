import { useTrail, animated } from '@react-spring/web';
import { useRef, useEffect, useCallback, useState } from 'react';
import './BlobCursor.css';

const fast = { tension: 1400, friction: 50 };
const slow = { mass: 15, tension: 250, friction: 60 };
const trans = (x, y, scale) =>
  `translate3d(${x}px,${y}px,0) scale(${scale}) translate3d(-50%,-50%,0)`;

export default function BlobCursor({ blobType = 'circle', initialColor = '#ff0077' }) {
  const [trail, api] = useTrail(4, i => ({
    xy: [0, 0],
    scale: 1,
    backgroundColor: initialColor,
    config: i === 0 ? fast : slow,
  }));

  const [color, setColor] = useState(initialColor);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const ref = useRef();

  // === NEW: Responsive scaling factor ===
  const [responsiveFactor, setResponsiveFactor] = useState(1);
  const updateResponsiveFactor = useCallback(() => {
    // Adjust so that on large screens factor ~1 and on smaller screens it scales down (clamped between 0.8 and 1)
    const factor = Math.min(Math.max(window.innerWidth / 1920, 0.8), 1);
    setResponsiveFactor(factor);
  }, []);
  useEffect(() => {
    updateResponsiveFactor();
    window.addEventListener('resize', updateResponsiveFactor);
    return () => {
      window.removeEventListener('resize', updateResponsiveFactor);
    };
  }, [updateResponsiveFactor]);

  // === NEW: Ripple state for click animations ===
  const [ripples, setRipples] = useState([]);

  const updatePosition = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      return { left: rect.left, top: rect.top };
    }
    return { left: 0, top: 0 };
  }, []);

  const handleMove = (e) => {
    const { left, top } = updatePosition();
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const y = e.clientY || (e.touches && e.touches[0].clientY);
    setRotation(prev => prev + 10); // Smooth rotation change
    api.start({ xy: [x - left, y - top] });
  };

  const handleClick = (e) => {
    setScale(prevScale => (prevScale === 1 ? 1.3 : 1));
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    
    // === NEW: Create a ripple effect at the click position ===
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);
  };

  // Remove ripple element once its animation is done
  const handleRippleAnimationEnd = (id) => {
    setRipples(prev => prev.filter(r => r.id !== id));
  };

  // === NEW (Optional): Device orientation for mobile devices ===
  useEffect(() => {
    if (window.DeviceOrientationEvent && 'ontouchstart' in window) {
      const handleOrientation = (event) => {
        const xOffset = event.gamma ? event.gamma * 5 : 0;
        const yOffset = event.beta ? event.beta * 5 : 0;
        api.start({ xy: [window.innerWidth / 2 + xOffset, window.innerHeight / 2 + yOffset] });
      };
      window.addEventListener('deviceorientation', handleOrientation, true);
      return () => {
        window.removeEventListener('deviceorientation', handleOrientation, true);
      };
    }
  }, [api]);

  return (
    <div className='container' onMouseMove={handleMove} onClick={handleClick}>
      {/* === NEW: Render ripple effects on click === */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="ripple"
          style={{ left: ripple.x, top: ripple.y }}
          onAnimationEnd={() => handleRippleAnimationEnd(ripple.id)}
        />
      ))}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="blob">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="25" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10" />
        </filter>
      </svg>
      <div ref={ref} className='main'>
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{
              transform: props.xy.to((x, y) => trans(x, y, scale * responsiveFactor)),
              borderRadius: blobType === 'circle' ? '50%' : '20%',
              backgroundColor: color,
              rotate: `${rotation}deg`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
