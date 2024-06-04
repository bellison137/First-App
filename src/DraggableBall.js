// src/DraggableBall.js
import React, { useState, useEffect, useRef } from 'react';
import './DraggableBall.css';

const DraggableBall = () => {
  const ballRef = useRef(null);
  const boxRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const boxRect = boxRef.current.getBoundingClientRect();
        let x = e.clientX - boxRect.left - offset.x;
        let y = e.clientY - boxRect.top - offset.y;

        x = Math.max(0, Math.min(x, boxRect.width - ballRef.current.offsetWidth));
        y = Math.max(0, Math.min(y, boxRect.height - ballRef.current.offsetHeight));

        ballRef.current.style.left = `${x}px`;
        ballRef.current.style.top = `${y}px`;
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        ballRef.current.style.transition = 'top 0.5s ease';
        const boxRect = boxRef.current.getBoundingClientRect();
        const ballRect = ballRef.current.getBoundingClientRect();
        const distanceToFall = boxRect.height - (ballRect.top - boxRect.top + ballRect.height);
        ballRef.current.style.top = `${ballRef.current.offsetTop + distanceToFall}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offset]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - ballRef.current.getBoundingClientRect().left,
      y: e.clientY - ballRef.current.getBoundingClientRect().top,
    });
    ballRef.current.style.transition = 'none';
  };

  return (
    <div className="box" ref={boxRef}>
      <div className="ball" ref={ballRef} onMouseDown={handleMouseDown}></div>
    </div>
  );
};

export default DraggableBall;
