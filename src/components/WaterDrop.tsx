import React, { useEffect, useState, useRef, ReactNode } from 'react';

interface Waterdrops {
    children: ReactNode; // ここで children プロパティの型を定義
  }
const Waterdrops: React.FC<Waterdrops> = ({ children })  => {
  useEffect(() => {
    const container = document.getElementById("waterdropContainer");

    function createWaterdrop() {
      const drop = document.createElement("div");
      drop.className = "waterdrop w-2.5 h-2.5 rounded-full bg-aqua fixed z-50";
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

  return(
   <div id="waterdropContainer" className="relative overflow-hidden">
    {children}
  </div>
  );
};

export default Waterdrops;
