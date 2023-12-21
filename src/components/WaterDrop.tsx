import React, { useEffect } from 'react';

const Waterdrops: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById("waterdropContainer");

    function createWaterdrop() {
      const drop = document.createElement("div");
      drop.className = "waterdrop w-2.5 h-2.5 rounded-full bg-aqua absolute";
      drop.style.left = `${Math.random() * window.innerWidth}px`;
      container?.appendChild(drop);

      const duration = Math.random() * 10 + 1;
      drop.style.animation = `fall ${duration}s linear`;

      drop.addEventListener('animationend', () => {
        drop.remove();
      });
    }

    const interval = setInterval(createWaterdrop, 100);

    return () => clearInterval(interval);
  }, []);

  return <div id="waterdropContainer" className="relative overflow-hidden w-full h-screen"></div>;
};

export default Waterdrops;
