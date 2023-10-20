import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackToTopButton from './BackToTop';

const CircleNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      
      
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        role='button'
        className="w-16 h-16 bg-zinc-100 rounded-full shadow flex justify-center items-center"
      >
        <div className="w-12 h-1.5 flex justify-center items-center gap-1">
          <div className="w-3 h-1.5 bg-zinc-300 rounded-full" />
          <div className="w-3 h-1.5 bg-zinc-300 rounded-full" />
          <div className="w-3 h-1.5 bg-zinc-300 rounded-full" />
        </div>
      </div>
      {/* Top button with rotation */}



      <Link 
        href="/history"
        className={`absolute top-1/2 left-1/2 -z-20 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-zinc-100 shadow rounded-full transition-transform duration-700 ease-out ${isOpen ? 'translate-y-[-260%]' : ''}`}
        role='button'
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:inver text-xs"
              src="/history-icon.svg"
              alt="Next.js Logo"
              width={20}
              height={20}
              priority
            />
        </div>
      </Link>




      <Link 
        href="https://note.com/ryudaimusical/"
        className={`absolute top-1/2 left-1/2 -z-20 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-zinc-100 shadow rounded-full transition-transform duration-700 ease-out ${isOpen ? 'translate-x-[-180%] translate-y-[-220%]' : ''}`}
        role='button'
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:inver text-xs"
              src="/note-icon.svg"
              alt="Next.js Logo"
              width={20}
              height={20}
              priority
            />
        </div>
      </Link>



      <BackToTopButton className={`absolute top-1/2 left-1/2 -z-20 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-zinc-100 shadow rounded-full transition-transform duration-700 ease-out ${isOpen ? 'translate-x-[-250%] translate-y-[-120%]' : ''}`}/>
      
      
      
      
      <Link 
        href="/sponsor" 
        className={`absolute top-1/2 left-1/2 -z-20 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-zinc-100 shadow rounded-full transition-transform duration-700 ease-out ${isOpen ? 'translate-x-[80%] translate-y-[-220%]' : ''}`}
        role='button'
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:inver text-xs"
              src="/sponsor-icon.svg"
              alt="Next.js Logo"
              width={20}
              height={20}
              priority
            />
        </div>
      </Link>




      
      <Link
        href="/privacypolicy" 
        className={`absolute top-1/2 left-1/2 -z-20 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-zinc-100 shadow rounded-full transition-transform duration-700 ease-out ${isOpen ? 'translate-x-[150%] translate-y-[-120%]' : ''}`}
        role='button'
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:inver text-xs"
              src="/note-icon.svg"
              alt="Next.js Logo"
              width={20}
              height={20}
              priority
            />
        </div>
      </Link>

      {/* Add other buttons similarly with varying rotation values for the desired fan out effect */}
    </div>
  );
};

export default CircleNav;
