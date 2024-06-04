// src/DraggableBall.js
import React, { useState, useEffect, useRef } from 'react';
import './DraggableBall.css';

const DraggableBall = () => {
  const ballRef = useRef(null);
  const boxRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      if (isDragging) {
        let clientX, clientY;
        if (e.touches) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else {
          clientX = e.clientX;
          clientY = e.clientY;
        }

        const boxRect = boxRef.current.getBoundingClientRect();
        let x = clientX - boxRect.left - offset.x;
        let y = clientY - boxRect.top - offset.y;

        x = Math.max(0, Math.min(x, boxRect.width - ballRef.current.offsetWidth));
        y = Math.max(0, Math.min(y, boxRect.height - ballRef.current.offsetHeight));

        ballRef.current.style.left = `${x}px`;
        ballRef.current.style.top = `${y}px`;
      }
    };

    const handleEnd = () => {
      if (isDragging) {
        setIsDragging(false);
        ballRef.current.style.transition = 'top 0.5s ease';
        const boxRect = boxRef.current.getBoundingClientRect();
        const ballRect = ballRef.current.getBoundingClientRect();
        const distanceToFall = boxRect.height - (ballRect.top - boxRect.top + ballRect.height);
        ballRef.current.style.top = `${ballRef.current.offsetTop + distanceToFall}px`;
      }
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, offset]);

  const handleStart = (e) => {
    setIsDragging(true);
    let clientX, clientY;
    if (e.touches) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    setOffset({
      x: clientX - ballRef.current.getBoundingClientRect().left,
      y: clientY - ballRef.current.getBoundingClientRect().top,
    });
    ballRef.current.style.transition = 'none';
  };

  return (
    <div className="box" ref={boxRef}>
      <div
        className="ball"
        ref={ballRef}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      ></div>
    </div>
  );
};

export default DraggableBall;

