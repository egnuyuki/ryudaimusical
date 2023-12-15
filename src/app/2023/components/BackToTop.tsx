// components/BackToTopButton.tsx
import React from 'react';
import Image from 'next/image';

const BackToTopButton: React.FC<{ className?: string }> = ({ className }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const combinedClass = `transition-colors duration-700 ${className || ''}`;

  return (
    <div 
      onClick={scrollToTop} 
      className={combinedClass}
      role="button" 
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === "Space") {
          scrollToTop();
        }
      }}
    >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:inver text-xs"
            src="/top-icon.svg"
            alt="Next.js Logo"
            width={20}
            height={20}
            priority
            />
        </div>
    </div>
  );
};

export default BackToTopButton;
