// components/ScrollToButton.tsx

import React from 'react';

type ScrollToButtonProps = {
    targetId: string;
    text: string;
    className?: string; // 追加
  };

const ScrollToButton: React.FC<ScrollToButtonProps> = ({ targetId, text, className }) => {
  const scrollToSection = () => {
    const target = document.getElementById(targetId);
    const offset = 120;  // Adjust this value as needed
    if (target) {
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  const combinedClass = `p-2 text-zinc-800 hover:text-blue-300 btn ${className || ''}`;

  return (
    <div 
      onClick={scrollToSection} 
    //   className="cursor-pointer p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
      className={combinedClass}
      role="button" 
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === "Space") {
          scrollToSection();
        }
      }}
    >
      <div>
        {text}
      </div>
    </div>
  );
};

export default ScrollToButton;
