import React, { useEffect, useState, useRef, ReactNode } from 'react';

interface FadingInOnScrollProps {
    children: ReactNode; // ここで children プロパティの型を定義
  }
  

  const FadingInOnScroll: React.FC<FadingInOnScrollProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const checkVisibility = () => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} transform ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}
    >
      {children}
    </div>
  );
};

export default FadingInOnScroll;
